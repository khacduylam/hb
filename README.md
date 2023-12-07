# HOMEBASE Assignment

- Assignment: https://docs.google.com/document/d/1pLUCrDm9OxeDqG7FjiuZTtMLABFiM6a62q_SzMzoVa8/edit?usp=sharing

### Deployment Instruction

#### 0. Preparation 

- Source code: https://github.com/khacduylam/hb
- Environment:
    - node_server 
        - Node: v16.16.0
        - Npm: v8.11.0 
    - djano_server
        - Python: v3.11.4 
        - Django: v5.0
        - Django-admin: v5.0 
        - Requests: v2.31.0 
    - proxy 
        - Python: v3.11.4
        - Requests: v2.31.0 


#### 1. NodeJs Express Server 
```shell 
# Move to `node_server` folder
$ cd node_server/

# Copy `example.env` to `.env` file 
$ cp example.env .env

# Install dependencies 
$ npm install

# Start server(dev mode)
$ npm run start:dev

# Check if the server is started successfully 
$ curl localhost:3060/health 
# if success, a text `Hello World!` will be printed!

# Testing CRUD APIs 
+ Get by id: [GET] http://localhost:3060/api/users/{id}
+ Get all: [GET] http://localhost:3060/api/users
+ Create: [POST] http://localhost:3060/api/users
{
    "fullName": "Khac Duy Lam",
    "age": 25,
    "sex": "Male"
}
+ Update: [PUT] http://localhost:3060/api/users/{id}
{
    "fullName": "Khac Duy Lam updated",
    "age": 26,
    "sex": "Female"
}
+ Delete: [DELETE] http://localhost:3060/api/users/{id}

```

#### 2. Proxy Server 
```shell 
# Move to `proxy` folder
$ cd proxy/

# Start proxy
$ python3 proxy.py

# Success 
# Proxy is running on [:::]8080

# Testing CRUD APIs via the proxy
+ Get by id: [GET] http://localhost:8080/api/users/{id}
+ Get all: [GET] http://localhost:8080/api/users
+ Create: [POST] http://localhost:8080/api/users
{
    "fullName": "Khac Duy Lam",
    "age": 25,
    "sex": "Male"
}
+ Update: [PUT] http://localhost:8080/api/users/{id}
{
    "fullName": "Khac Duy Lam updated",
    "age": 26,
    "sex": "Female"
}
+ Delete: [DELETE] http://localhost:8080/api/users/{id}

```

#### 3. Django Server 
```shell 
# Move to `django_server` folder
$ cd django_server/

# Migrate db 
$ python3 manage.py migrate

# Start server
$ python3 manage.py runserver

# Check if the server is started by copy & paste this link to browser
# http://127.0.0.1:8000/admin/

```

#### 4. Setup and perform CRUD operations on django admin Interface
- Create admin login info
```shell
$ python3 manage.py createsuperuser
```

- Login to admin interface http://127.0.0.1:8000/admin/ with created login info
- Click DEMO_APP > Products (http://127.0.0.1:8000/admin/demo_app/product).
Now, you can perform CRUD operations on products in this page.

### Contact: 
- Email: lamkhacduy13@gmail.com
- Github: https://github.com/khacduylam 
- Linkedin: https://www.linkedin.com/in/khacduylam/




