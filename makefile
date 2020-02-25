.PHONY:modules
.DEFAULT_GOAL := build

# start the containers for configuration, with the database mounted on the host in mount/db
# Once this starts, open http://localhost:9090 and configure the Drupal site
build:
	-mkdir -p ./mount
	docker-compose -f docker-compose-install.yml up -d

# copy the installed website and modules to the mount on the host
# commit the  configured Drupal image as its own image,
# restart using the docker-compose file with the configured Drupal image
# set permissions
install:
	sudo docker cp hip_quiz:/var/www/html/sites/default mount
	sudo docker cp hip_quiz:/var/www/html/modules mount
	docker commit hip_quiz hip_quiz
	docker-compose down
	docker-compose -f docker-compose.yml up -d
	docker exec -ti hip_quiz script -q -c "chown -R www-data:www-data sites/default"
	docker exec -ti hip_quiz script -q -c "chown -R www-data:www-data sites/default"

# Deploy on staging server: upload docker images and data
stage: prepare_staging_files
	echo "Uploading Docker images and data";
	scp -r /tmp/*.tar.gz docker-compose.yml utils/* ${ssh_user}@${server_ip}:${server_path}
	echo "Now login to the server and execute the deploy.sh script"

prepare_staging_files:
	docker save hip_quiz | gzip -c > /tmp/hip_quiz.tar.gz
	docker save mariadb:10.4  | gzip -c > /tmp/mariadb.tar.gz
	tar -zcf /tmp/mount.tar.gz ./mount

# Run javascript tests
test:
	docker exec -ti hip_quiz script -q -c "cd /var/www/html/modules/custom/hip_quiz/tests && qunit test_*.js"

