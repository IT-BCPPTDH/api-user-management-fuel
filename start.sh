#!/bin/bash

pm2 start --name=user-api index.js
pm2 save
