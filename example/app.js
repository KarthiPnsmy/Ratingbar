// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

win.open();

var ratingbar = require('titutorial.ratingbar');
Ti.API.info("module is => " + ratingbar);

var proxy = ratingbar.createRatingBar({
	top : 100,
	backgroundColor : "#fff",
	rating : 2,
	stars : 6,
	stepSize : 1.5,
	isIndicator : false
});
win.add(proxy);

proxy.addEventListener('change', function(e) {
	Ti.API.info("@@## rating  = " + e.rating);
});