### 1. setup app1

```bash
cd app1

npm init
npm install express
npm install sequelize pg pg-hstore
npm install kafkajs
npm install dotenv

```
### 2. setup app2

cd app2
```bash

npm init
npm install express
npm install mongoose
npm install kafkajs
npm install dotenv

```

### 3. create docker file in both app1 and app2


### 4.  Kafdrop dashboard to check kafka messages
```bash
    http://localhost:9000/
```

### 5. Event Driven data flow.
### a. User public message to App1
        ```bash
       http://localhost:8080
       POST
       {
        "name":"finaltest",
        "email":"finaltest@test.com",
        "password":"password"
        }
        ```
### b. app1 publish message to kafka topic1 and save to postgress database
### c. app1 consume kafka message and store in to mongodb.


### reference 

    https://kafka.js.org/docs/introduction
    https://sequelize.org/

## docker compose used to start all containers
