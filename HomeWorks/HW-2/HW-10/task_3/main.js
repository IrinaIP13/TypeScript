"use strict";
// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
const button_104 = document.getElementsByTagName('button')[0];
button_104.addEventListener('click', (e) => {
    e.preventDefault();
    const text = document.createElement('h1');
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const age = document.getElementById('age');
    const form = document.getElementById('form');
    text.innerText = `Name: ${name.value} 
        Surname: ${surname.value} 
        Age: ${age.value}`;
    document.body.appendChild(text);
    form.reset();
});
