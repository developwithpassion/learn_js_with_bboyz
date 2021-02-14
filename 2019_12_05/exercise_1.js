/* 
 * Write a program that displays to the console the relevant values in a  year
 * - Use this as an opportunity to demonstrate use of good variable naming
 * - Use variables to store relevant info that will help you calculate the value
 * - Make sure that you actually calculate the relevant values
 * - Make sure the output looks like the following:
 *
 *   The number of seconds in a year is: [seconds]
 *   The number of minutes in a year is: [minutes]
 *   The number of hours in a year is: [hours]
*/ 

let seconds_in_a_year = 60 * 60 * 24 * 365;
let minutes_in_a_year = 60 * 24 * 365;
let hours_in_a_year = 24 * 365;

console.log(' There are ' + seconds_in_a_year + ' seconds in a year ');
console.log(' There are ' + minutes_in_a_year + ' minutes in a year ');
console.log(' There are ' + hours_in_a_year + ' hours in a year ');
