# Hearing in pinguins project, quiz development and testing package.

The project documentation is at: [Hearing in penguins](https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine)

This package provides a Drupal instance for staging the quiz. Do not use in production.

Provides a Drupal installation based on these images:
* Drupal 8.7 (PHP 7.2, Apache) with drupal/entity_embed and drupal/taxonomy_import
* offical MariaDb 10.4

Requires: Docker, Docker-compose

# Installation
To download the images (if necessary) and start Drupal and the database, do `make`

Open the http://localhost:9092/ in a browser. Go through the configuration process.
* Choose MariaDB as the database.
* The database root password is set in docker-compose.yml
* In "Advanced Options", set the database host to `hip_quiz_db`

Once you are done configuring the site, you can call `sudo make install`.
This will:
* commit the installed Drupal instance into its own Docker image.
* copy the directories `sites/default`, `modules` and ` libraries` to the host and mount them
* restart the Docker containers using docker-compose.yml
* checkout the custom Drupal module as a Git submodule

# Usage
Once a site is installed, you can start Drupal by calling
```
docker-compose up -d
```
