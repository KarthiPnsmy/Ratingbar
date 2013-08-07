# Android Ratingbar Module

## Description

A RatingBar is an extension that shows a rating in stars. The user can touch/drag to set the rating when using RatingBar.

## Accessing the ratingbar Module

To access this module from JavaScript, you would do the following:
```javascript
var ratingbar = require("titutorial.ratingbar");
```
The ratingbar variable is a reference to the Module object.

## Reference

This module converts native Android ratingbar widget to Titanium component. (http://developer.android.com/reference/android/widget/RatingBar.html)

##Properties

### setRating(rating)

Sets the rating (the number of stars filled).

_**rating**_ - The rating to set (Must be a floating point value). 

### setStepSize(stepSize)

Sets the step size (granularity) of this rating bar.

_**stepSize**_ - The step size of this rating bar. For example, if half-star granularity is wanted, this would be 0.5 (Must be a floating point value).

### setStars(stars)

The number of stars (or rating items) to show

_**stars**_ - Must be an integer value, such as "100". 

### setIsIndicator(isIndicator)

Whether this rating bar is an indicator (and non-changeable by the user).

_**isIndicator**_ - Must be a boolean value, either "true" or "false". 

##Event Listeners

### change

Listener to be called when the rating changes(event.rating will give selected rating value)

## Usage
```javascript
var win = Ti.UI.createWindow({
	backgroundColor : "#fff",
	layout : "vertical"
});

var ratingbar = require('titutorial.ratingbar');
Ti.API.info("module is => " + ratingbar);

var ratingBar1 = ratingbar.createRatingBar({
	top : 50,
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
	top : 45,
	textAlign : 'center'
});
win.add(ratingValue);

ratingBar1.addEventListener('change', function(e) {
	ratingValue.text = "Rating Value : "+e.rating.toString();
});

var ratingBar2 = ratingbar.createRatingBar({
	top : 20,
	left:15,
	rating : 3,
	stars : 5,
	stepSize : 1,
	isIndicator : true
});
win.add(ratingBar2);

win.open();
```

## Author

Karthi Ponnusamy - karthi.nkl@gmail.com

## License

Copyright (c) 2013 Karthi Ponnusamy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

