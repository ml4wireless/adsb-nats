# Database

## Context:

We’re using Amazon Linux 2 AMI as our EC2 Image, which recommend MariaDB as a subsititution  for MySQL. Actually, MariaDB is a AWS-adopted MySQL-compatible database.  

## Installation

```bash

sudo yum update -y 

sudo yum install -y mariadb-server

sudo systemctl enable mariadb

sudo systemctl start mariadb

sudo mysql_secure_installation
```

if met some GPG issues…

```bash
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
```

## Connect to MariaDB from Remote Host

Sometimes we may want to connect to the remote database for checking or debugging purpose. In order to connect from a remote host: 

1. MariaDB must be properly configured, with ip not bound to [localhost](http://localhost) and creating a privileged user.

[https://mariadb.com/kb/en/configuring-mariadb-for-remote-client-access/](https://mariadb.com/kb/en/configuring-mariadb-for-remote-client-access/)

1. Security group of the instance should be configured to accept inbound rule of port 3306.

## Connect to MariaDB Using Python

1. Install pymysql

```bash
pip3 install pymysql
```

1. connect to database

```bash
connection = pymysql.connect(host='ec2-35-80-21-70.us-west-2.compute.amazonaws.com',
                             user='sahai',
                             password='sahai',
                             database='webserver',
                             cursorclass=pymysql.cursors.DictCursor)

connection.ping(reconnect=True) # Otherwise the connection will be closed after some time
```

1. Execute a non-param sql

```bash
cursor = connection.cursor()
sql = 'CREATE TABLE IF NOT EXISTS `dump1090` ( \
    `id` int(11) NOT NULL AUTO_INCREMENT, \
    `reporter` varchar(255) , \
    `time` varchar(255) , \
    `ICAO` varchar(255) , \
    `feet` double(32,6) , \
    `lat` double(32,6) , \
    `lon` double(32,6) , \
    `manufacturer` varchar(255) , \
    `aircraft` varchar(255) , \
    `n-number` varchar(255) , \
    `registered` varchar(255) , \
    `annotator` varchar(255) , \
    PRIMARY KEY (`id`) \
) DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;'
cursor.execute(sql)
connection.commit()

```

1. Execute a sql with python vars

```bash

cursor = connection.cursor()
sql = ' INSERT INTO `dump1090` (`reporter`,`time`, `ICAO`, \
            `feet`,`lat`, `lon`,`manufacturer`,`aircraft`,`n-number`,`registered`,\
             `annotator`) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'
            cursor.execute(sql, (jdata.get("reporter"), jdata.get("time"), jdata.get("ICAO"),
            jdata.get("feet"), jdata.get("lat"),jdata.get("lon"),jdata.get("manufacturer"),
            jdata.get("aircraft"),jdata.get("n-number"),jdata.get("registered"),jdata.get("annotator")))
connection.commit()
```