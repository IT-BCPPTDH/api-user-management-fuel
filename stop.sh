#!/bin/bash

pm2 stop user-api
pm2 delete user-api
pm2 save

pm2 start --name=user-api index.js
pm2 save
