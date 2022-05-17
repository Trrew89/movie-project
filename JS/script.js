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
*/

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