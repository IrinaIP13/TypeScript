"use strict";
// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
const form = document.querySelector('form');
const button = document.querySelector('button');
const columns = document.getElementById('columns');
const rows = document.getElementById('rows');
const content = document.getElementById('content');
const table = document.createElement('table');
if (button && form && columns) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < +columns.value; i++) {
            let row = table.insertRow(i);
            for (let j = 0; j < +rows.value; j++) {
                let cell = row.insertCell(j);
                cell.textContent = content.value;
            }
        }
        form.reset();
    });
}
else
    console.error('Element with id "text" not found');
document.body.appendChild(table);
