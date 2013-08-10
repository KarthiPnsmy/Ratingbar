var win = Ti.UI.createWindow({
	backgroundColor:'#fff',
	layout : 'vertical'
});

var ratingbar = require('titutorial.ratingbar');

var setRatingButton = Ti.UI.createButton({
	title : 'Set rating 6',
	height : '40dp',
	width : Ti.UI.SIZE,
	top : '30dp'
});
win.add(setRatingButton);

/*
 * Dynamic rating bar
 */
var ratingBar1 = ratingbar.createRatingBar({
	top : '30dp',
	left:15,
	rating : 2,
	stars : 6,
	stepSize : 1.5,
	isIndicator : false
});
win.add(ratingBar1);

var ratingValue = Ti.UI.createLabel({
	text : 'Rating Value : '+ratingBar1.getRating(),
	color : '#000',
	font : {fontSize:'20dp'},
	height : Ti.UI.SIZE,
	width : Ti.UI.SIZE,
	top : '30dp',
	textAlign : 'center'
});
win.add(ratingValue);

ratingBar1.addEventListener('change', function(e) {
	ratingValue.text = "Rating Value : "+e.rating.toString();
});

/*
 * Static rating bar
 */
var ratingBar2 = ratingbar.createRatingBar({
	top : '30dp',
	left:15,
	rating : 3,
	stars : 5,
	stepSize : 1,
	isIndicator : true
});
win.add(ratingBar2);

setRatingButton.addEventListener('click', function() {
	ratingBar1.setRating(6.0);
});

win.open();
