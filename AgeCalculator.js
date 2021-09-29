"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var birth = "";
var today = "";
var stdin = process.openStdin();
rl.question('Введіть вашу дату народження та сьогоднішню дату через пробіл(dd.mm.yyyy dd.mm.yyyy)', function (date) {
    var splitted = date.split(' ', 2);
    birth = splitted[0];
    today = splitted[1];
    var birthSp = birth.split('.', 3);
    var todaySp = today.split('.', 3);
    var months = +todaySp[2] * +12;
    months += +todaySp[1];
    months -= +birthSp[2] * 12;
    months -= +birthSp[1];
    console.log("Вам " + months + " місяць(ів)");
    rl.close();
});
