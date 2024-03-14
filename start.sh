#!/bin/bash

pm2 start --name=user-api npm -- start
pm2 save
