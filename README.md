
--------------
## START APPLICATION
--------------

To launch the application start a local instance of MongoDB, open a terminal in this folder and type:
``` bash
$ yarn install
$ yarn start
```

Go to http://localhost:3000

Login using:

username:   admin
password:   password

--------------
## CONFIGURE
--------------

Set database config in `properties.js`

--------------
## START WITH DOCKER
--------------

* To start the application with Docker:

    * Install Docker

    * Run command:
    ``` bash
    docker-compose up
    ```
    * Go to http://localhost:80


* When code changes you need to rebuild container running:
``` bash
docker-compose up --build
```
