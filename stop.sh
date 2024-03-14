#!/bin/bash

pm2 stop user-api
pm2 delete user-api
pm2 save
