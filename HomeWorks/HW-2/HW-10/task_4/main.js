"use strict";
// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const result_104 = document.getElementById('result');
const countStr = localStorage.getItem('count');
if (countStr && result_104) {
    let count = +countStr;
    count += 1;
    localStorage.setItem('count', count.toString());
    result_104.innerHTML = count + '';
}
else
    console.error('Element with id "text" not found');
