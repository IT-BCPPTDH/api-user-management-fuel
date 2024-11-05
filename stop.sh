#!/bin/bash

pm2 stop user-api-dev
pm2 delete user-api-dev
pm2 save

pm2 start --name=user-api-dev index.js
pm2 save
