"use strict";
// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter
let array_79 = [4, 6, 2, 8, 5, 9, 11];
Array.prototype.myForeach = function (callback) {
    let array = this;
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};
array_79.myForeach((item) => console.log(item));
Array.prototype.myFilter = function (predicate) {
    let array = this;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
console.log(array_79.myFilter((argument) => argument > 5));
