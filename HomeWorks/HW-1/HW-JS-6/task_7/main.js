"use strict";
// #5hqyKTfmc
//
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
//     let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
function sortNums_67(array, direction) {
    if (direction === 'ascending')
        console.log(array.sort((a, b) => a - b));
    if (direction === 'descending')
        console.log(array.sort((a, b) => b - a));
}
const nums67 = [11, 21, 3];
sortNums_67(nums67, 'ascending');
sortNums_67(nums67, 'descending');
