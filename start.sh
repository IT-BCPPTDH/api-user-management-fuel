#!/bin/bash

pm2 start --name=user-api-dev index.js
pm2 save
