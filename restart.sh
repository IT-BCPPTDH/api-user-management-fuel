#!/bin/bash

pm2 stop user-api-staging
pm2 delete user-api-staging
pm2 save
