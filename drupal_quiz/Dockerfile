FROM drupal:8.7

# install git
RUN apt-get update \
&& apt-get -y install wget git nano zip curl

# install composer
RUN export EXPECTED_SIGNATURE=$(wget -q -O - https://composer.github.io/installer.sig) \
&& php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
&& php -r "if (hash_file('sha384', 'composer-setup.php') === getenv('EXPECTED_SIGNATURE'))  { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
&& php composer-setup.php \
&& php -r "unlink('composer-setup.php');"

# install modules
RUN \
php composer.phar require drush/drush \
&& php composer.phar require drupal/quiz:5.x-dev

# install QUnit
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g qunit