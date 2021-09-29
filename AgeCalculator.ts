import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let birth:string = "";
let today:string = "";

var stdin = process.openStdin();


rl.question('Введіть вашу дату народження та сьогоднішню дату через пробіл(dd.mm.yyyy dd.mm.yyyy)', (date)=>{
    let splitted:string[] = date.split(' ',2);
    birth = splitted[0];
    today = splitted[1];

    let birthSp:string[] = birth.split('.',3);
    let todaySp:string[] = today.split('.',3);

    let months:number = +todaySp[2]*+12;
    months+=+todaySp[1];
    months-=+birthSp[2]*12;
    months-=+birthSp[1];

    console.log("Вам " + months + " місяць(ів)");
    rl.close();

});
