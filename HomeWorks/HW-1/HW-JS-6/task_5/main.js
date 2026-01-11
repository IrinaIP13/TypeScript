"use strict";
// #bfoJuse4ZzP
//
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
// let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]
const str_65 = 'Ревуть воли як ясла повні';
function stringToarray65(str) {
    return str.split(' ');
}
const arr_65 = stringToarray65(str_65);
console.log(arr_65);
