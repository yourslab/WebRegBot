var casper = require('casper').create({
	pageSettings: {
		loadImages: false,//The script is much faster when this field is set to false
		loadPlugins: false,
		userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36'
	}
});

// Max timeout of 60 seconds
casper.options.waitTimeout = 60000;

// Login the user
casper.start("https://my.usc.edu", function() {
	this.echo("Opening myUSC");
});

// IMPORTANT: Edit "username" and "password" to your 
casper.waitForSelector('.login-form', function() {
	this.fill(".login-form", {
	"j_username": "username",
	"j_password": "password"
	}, true);
});

casper.waitForUrl('https://my.usc.edu', function() {
	this.echo('Login Successful');
});

// We must visit the next two URLs to create the session
casper.thenOpen('https://my.usc.edu/portal/oasis/webregbridge.php', function() {
	this.echo('Opening bridge');
	this.wait(1500);
});

casper.thenOpen('https://webreg.usc.edu/Terms/termSelect?term=20163', function() {
	this.echo('Fall 2016 Registration Entered');
	this.wait(1500);
});

// Schedule ITP 380 (Section: 32026)
// Note: 32026 in the URL can be changed to any section number 
// but make sure that the section is in myCourseBin
casper.thenOpen('https://webreg.usc.edu/myCoursebin/SchdUnschRmv?act=Sched&section=32026', function() {
	this.echo('Scheduling ITP 380');
	this.wait(1000);
});

// Registration confirmation page
casper.thenOpen('https://webreg.usc.edu/Register', function() {
	this.echo('Checking out');
	this.waitForSelector('#SubmitButton', function() {
		this.evaluate(function() {
			document.getElementById("SubmitButton").click();
		});
	});
});

// Finally, attempt to register
casper.waitForUrl('https://webreg.usc.edu/RegResp', function() {
	this.echo('Checkout Successful');
	this.echo('---');
});

casper.run();