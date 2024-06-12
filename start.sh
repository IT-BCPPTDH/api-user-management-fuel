#!/bin/bash

pm2 start --name=user-api-staging index.js
pm2 save
