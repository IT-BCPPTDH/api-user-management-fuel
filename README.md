# API User Management for PTDH

A micro service API to handle and manage user data based on employee data for PTDH

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node

This system should run on Nodejs minimum version 18 up

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v18.17.0

    $ npm --version
    9.6.7

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

    $ git clone (https://github.com/Thinkmatch-Dev-Team/api-user-management)
    $ cd api-user-management
    $ npm install

## Configure app

Copy file `.env-example` with syntax: 

    $ mv .env-example .env

Open `.env` then edit it with your settings. You will need:

- Database;
- Salt Round (input random string);
- Secret Code (input random string);

## Run DB Migrations

For initial setup, make sure the postgreSQL data has database name stated in `.env` file

Run migration with syntax:

    $ npm run migrate:latest

If all tables, niew, functions already created, you can start to run the system

## Running the system

    $  npm start
