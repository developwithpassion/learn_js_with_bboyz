//How many seconds are in a year?//

var secondsInAMinute = 60;
var hoursInADay = 24;
var daysInAYear = 365;

var secondsInAYear = [secondsInAMinute * hoursInADay] * daysInAYear;
var hoursInAYear = hoursInADay * daysInAYear;

console.log("There are " + secondsInAYear + " seconds in a year.");
console.log("There are " + hoursInAYear + " hours in a year.");
