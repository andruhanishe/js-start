import {Zodiac, Date, singOfZodiac} from "./lib.js";
import {normalize} from "./lib.js";

const birthday = new Date(27, 5);

const zodiacs = [];
zodiacs.push(new Zodiac('Козерог', 1));
zodiacs.push(new Zodiac('Водолей', 2));
zodiacs.push(new Zodiac('Рыбы', 3));
zodiacs.push(new Zodiac('Овен', 4));
zodiacs.push(new Zodiac('Телец', 5));
zodiacs.push(new Zodiac('Близнец', 6));
zodiacs.push(new Zodiac('Рак', 7));
zodiacs.push(new Zodiac('Лев', 8));
zodiacs.push(new Zodiac('Дева', 9));
zodiacs.push(new Zodiac('Весы', 10));
zodiacs.push(new Zodiac('Скорпион', 11));
zodiacs.push(new Zodiac('Стрелец', 12));

const sing = singOfZodiac(zodiacs, birthday);
console.log(sing);


