import * as rl from 'readline-sync';

let birth:string = "";
let today:string = "";

let date: string = rl.question('How old R U? Type date of birthday and todays(dd.mm.yyyy dd.mm.yyyy)');
// rl.question('Введіть вашу дату народження та сьогоднішню дату через пробіл(dd.mm.yyyy dd.mm.yyyy)', (date)=>{
    let splitted:string[] = date.split(' ',2);
    birth = splitted[0];
    today = splitted[1];

    let birthSp:string[] = birth.split('.',3);
    let todaySp:string[] = today.split('.',3);

    let tYear = +todaySp[2];
    let tMonths = +todaySp[1];

    let bYear = +birthSp[2];
    let bMonths = +birthSp[1];

    cons(math(tYear, tMonths, bYear, bMonths));

    function math(tYear:number, tMonth:number, bYear:number, bMonths:number):number{
         let months:number = (tYear * 12 + tMonth) - (bYear * 12 - bMonths);
        return months;
    }
   
    function cons(months:number){
        console.log("U R " + months + " months old");
    }  
    // rl.close();

// });
