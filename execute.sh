#!/bin/bash
nohup /usr/local/bin/casperjs /home/username/WebCronBot/webregbot.js | /usr/bin/tee -a /home/username/WebCronBot/log &
exit 0