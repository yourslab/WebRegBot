#!/bin/bash
nohup /usr/local/bin/casperjs /home/username/WebCronBot/itp.js | /usr/bin/tee -a /home/username/WebCronBot/log &
exit 0