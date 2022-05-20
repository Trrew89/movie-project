"use strict";

//ПЕРВАЯ ПРОГРАММА


    //start();
const personalMovieDB = {
    count : 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = prompt('Сколько Фильмов вы посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt('Сколько Фильмов вы посмотрели?', '');

        }
    },
    rememberMyFilms: function(){
        for( let i =0; i< 2;i++){
            let a= prompt ('Один из последних фильмов?', ' ').trim(),
                 b = prompt('На сколько оцените его?', '');
             
             if (a !=null && b != null && a != '' && b !='' && a.length<50){
                 personalMovieDB.movies[a] = b;
                 console.log('done');
             } else {
                 console.log('error');
                 i--;
             }
         }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count<10){
            console.log('мало фильмов');
        
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count< 30){
            console.log( "достаточно фильмов");
        } else if (personalMovieDB.count >=30) {
            console.log('вы киноман');
        } else {
            console.log('ошибка');
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        } 
    },
    writeYourGenres: function(){
        for( let i = 1; i <= 3; i++){
            let genre = prompt(`Ваше любимый жанр под номером ${i}?`);
            if(genre === ''|| genre == null){
                console.log("Вы ввели некорректные данные");
                i--;
            }else{
                personalMovieDB.genres[i-1]= genre;

            }
        }
        personalMovieDB.genres.forEach((item,i)=> {
            console.log(`Любимый жанр ${i+1} - ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};











/*


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


let num = 50;
for (let i = 1; i < 10; i++){
    if (i === 6){
        //break;
        continue;
    }
    console.log(i);
}


// ЦИКЛЫ В ЦИКЛАХ
for ( let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j< 3; j++){
        console.log(j);
    }
}



let result = '';
const length = 7;

first: for( let i = 1; i < 3; i++){
    console.log(`First level: ${i}`);

    for( let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);

        for( let k = 0; k < 3; k++){
            if (k === 2) break first;
            console.log(`Third level: ${k}`);

        }
    }
}


console.log(result);



// Место для первой задачи
function firstTask() {
    for (let i =5; i < 11; i++){
        console.log(i);
    }
}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i>10; i--){
        if (i === 13) break;
        console.log(i);
    }
}

// Место для третьей задачи
function thirdTask() {
    for ( let i = 2; i<11; i=i+2){
        console.log(i);
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
   while (i <=16){
       if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
       i++;
   }
    
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    for( let i = 5; i<11; i++){
        arrayOfNumbers[i]= i;
    }
    
    // Не трогаем
    return arrayOfNumbers;
}

*/