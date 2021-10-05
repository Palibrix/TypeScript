"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
var birth = "";
var today = "";
var date = rl.question('How old R U? Type date of birthday and todays(dd.mm.yyyy dd.mm.yyyy)');
// rl.question('Введіть вашу дату народження та сьогоднішню дату через пробіл(dd.mm.yyyy dd.mm.yyyy)', (date)=>{
var splitted = date.split(' ', 2);
birth = splitted[0];
today = splitted[1];
var birthSp = birth.split('.', 3);
var todaySp = today.split('.', 3);
var tYear = +todaySp[2];
var tMonths = +todaySp[1];
var bYear = +birthSp[2];
var bMonths = +birthSp[1];
// let months:number;
cons(math(tYear, tMonths, bYear, bMonths));
function math(tYear, tMonth, bYear, bMonths) {
    var months = (tYear * 12 + tMonth) - bYear * 12 - bMonths;
    return months;
}
function cons(months) {
    console.log("U R " + months + " months old");
}
// rl.close();
// });
