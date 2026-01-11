"use strict";
// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum_411(arr) {
    let sum_411 = 0;
    for (const arrElement of arr) {
        sum_411 += arrElement;
    }
    return sum_411;
}
console.log(sum_411([6, 4, 7, 3, 9]));
