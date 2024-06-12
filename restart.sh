#!/bin/bash

pm2 stop user-api-staging
pm2 delete user-api-staging
pm2 save

pm2 start --name=user-api-staging index.js
pm2 save
