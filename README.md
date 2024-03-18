<a name="readme-top"></a>

# About The Project

Meet Frugal Fortune, your go-to Budget App for easily keeping tabs on your money. It helps you track your bank balance, total net worth, spending, income, and credit card transactions – basically, all things related to your finances. It's like having a simple and smart assistant to help you stay on top of what you earn and spend.

TLDR: Better version of Mint that doesn't sell your data

<div align="center">
  <a href="https://example.com">
    <img src="" alt="Budget App Screenshot" width="500">
  </a>
</div>

### Features

- includes a navigation bar to direct to sections where you want to go
- Home Page (Overview) has an overview of everything such as your net worth from checking & savings accounts, Investments, and credit card balances
- 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React]][React-url]
* [![Express][Express]][Express-url]
* [![Postgres][Postgres]][Postgres-url]
* [![Node][Node]][Node-url]
* [![Docker][Docker]][Docker-url]
* [![AWS][AWS]][AWS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Get Started
### Clone
```
git clone https://github.com/Anthonyxw87/frugal_fortune.git
cd frugal_fortune
```

### Local Database 
1. Install Postgres and/or pgAdmin, or any preferred Database Management System.
2. Create a database on your local machine (localhost) and securely note down the credentials.
3. In the server directory, create a .env file and populate it with your database information as follows:

```
# .env file
# DATABASE_INFO
POSTGRES_HOST=host.docker.internal
POSTGRES_PORT=                  # 'your db port'; default is 5432
POSTGRES_DB=                    # 'your db name'       
POSTGRES_USER=                  # 'your user name'
POSTGRES_PASSWORD=              # 'your password'
POSTGRES_SSLMODE=prefer
POSTGRES_CONNECT_TIMEOUT=10

# SERVER_INFO
PORT=                           # ' your server port'; default is 8080
```

<div align="center">
  <a href="https://example.com">
    <img src="" alt="pgAdmin example screenshot" width="500">
  </a>
</div>

1. Test if connection to database is establish by going to this link:
```
localhost:8080/testdb
```
*Should return connection successful message otherwise, go back and fix above

### Install Docker
1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Install `docker` and `docker-compose`
    ```
    $ brew install docker
    $ brew install docker-compose
    ```
3.  Open the Docker Desktop app to start Docker Engine

 
#### ***Make sure to have local host ports 3000, 8080, and 5431 open**

### Create Images on Docker (do only once at beginning)
1. cd to project root directory
2. run:
   ```
   docker-compose up
   ```
*automatically starts containers

### To Run Application (start Docker containers)
```
docker-compose start
```

### To Stop Application (stop Docker containers)
```
docker-compose stop
```


<!-- MARKDOWN LINKS & IMAGES -->
[React]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://react.dev/
[Express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[Postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Node]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[AWS]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[AWS-url]: https://aws.amazon.com/