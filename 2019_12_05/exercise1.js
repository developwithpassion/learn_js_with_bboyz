//How many seconds are in a year?//

let secondsInAMinute = 60;
let secondsInAnHour = secondsInAMinute * 60;
let minutesInAnHour = 60;
let hoursInADay = 24;
let daysInAYear = 365;

let secondsInAYear = secondsInAnHour * hoursInADay * daysInAYear;
let minutesInAYear = secondsInAMinute * hoursInADay * daysInAYear;
let hoursInAYear = hoursInADay * daysInAYear;

console.log("There are " + secondsInAYear + " seconds in a year.");
console.log("There are " + minutesInAYear + " minutes in a year.");
console.log("There are " + hoursInAYear + " hours in a year.");
