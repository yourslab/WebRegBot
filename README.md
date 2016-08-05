# WebRegBot Setup Instructions

First, edit line 20 and 21 to include your myUSC username and password:
```javascript
this.fill(".login-form", {
"j_username": "username",
"j_password": "password"
}, true);
```

Next, make sure the course to be registered by the bot is in [myCourseBin](https://webreg.usc.edu/myCourseBin). 

Afterwards, edit line 35 of webregbot.js to include your desired section number (e.g. 32026):
```javascript
casper.thenOpen('https://webreg.usc.edu/myCoursebin/SchdUnschRmv?act=Sched&section=32026', function() {
      this.echo('Scheduling Course');
      this.wait(1000);
});
```

[Install CasperJS](http://docs.casperjs.org/en/latest/installation.html):
```bash
brew install casperjs
```

Edit line 2 of execute.sh to include the directory where webregbot.js is located:
```bash
nohup /usr/local/bin/casperjs /home/username/WebCronBot/webregbot.js | /usr/bin/tee -a /home/username/WebCronBot/log &
```

Edit this line to include the project's directory:
```bash
*/10 * * * * /home/username/WebCronBot/execute.sh
```

Setup a Cron Job by writing the line above after running:
```bash
crontab -e
```