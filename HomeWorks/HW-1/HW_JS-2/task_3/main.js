"use strict";
// #sA3Gg1sCp
//
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title, pageCount, genre, authors. Поле “автори” – являється масивом. Кожен автор має поля name та age.
let bookMaster_2 = {
    title: 'Мастер и Маргарита',
    pageCount: 480,
    genre: 'фантастика',
    author: [
        {
            name: 'Михаил Булгаков',
            age: 38
        }
    ]
};
let bookKobzar_2 = {
    title: 'Кобзар',
    pageCount: 576,
    genre: 'поезія',
    author: [
        {
            name: 'Тарас Шевченко',
            age: 26
        }
    ]
};
let bookSubconsious_2 = {
    title: 'Подсознание может все',
    pageCount: 160,
    genre: 'психология',
    author: [
        {
            name: 'Джон Кехо',
            age: 50
        }
    ]
};
console.log(bookMaster_2);
console.log(bookKobzar_2);
console.log(bookSubconsious_2);
