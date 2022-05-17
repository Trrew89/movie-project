"use strict";
/*
//ПЕРВАЯ ПРОГРАММА
const numberOfFilms = prompt('Сколько Фильмов вы посмотрели?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt ('Один из последних фильмов?', ' '),
      b = prompt('На сколько оцените его?', ''),
      c = prompt ('Один из последних фильмов?', ' '),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;




// ВТОРАЯ ПРОГРАММА
if (4 == 9){
    console.log("Ok!");

} else {
    console.log("not okay");
}


const num = 50;

if(num < 49){
    console.log("Error");

} else if (num > 100){
    console.log("Too much");

} else {
    console.log("Ok!");
}

(num === 50) ? console.log("Ok!") : console.log("Error!");


const num = 50;
switch (num){
    case 49: 
        console.log('Not true');
        break;
    case  100:
        console.log('Not true');
        break;
    case 51:
        console.log(' true');
        break;
    default:
        console.log('Not this time');
        break;
}





// Третья ПРОГРАММА (ЛОГИЧЕСКИЕ ОПЕРАТОРЫ)

const hamburger = 5;
const fries = 0;

if (hamburger && fries){
    console.log("I am not hugry");
} 

//console.log (hamburger && fries);



const hamburger = 3;
const fries = 1;
const cola = 1;

console.log(hamburger === 3 && cola && fries );

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "sadasd");

if (hamburger === 3 && cola === 1 && fries ){
    console.log("Everyone is not hungry");
} else {
    console.log(" we are leaving");
}



const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets ){
    console.log("Everyone is not hungry");
} else {
    console.log(" we are leaving");
}

let johnReport, alexReport, samReport, mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);






while (num <= 55){
    console.log(num);
    num++;
}

let num = 50;
do {
    console.log(num);
    num++;

} while( num <55);
*/

let num = 50;
for (let i = 1; i < 10; i++){
    if (i === 6){
        //break;
        continue;
    }
    console.log(i);
}