// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const form:HTMLFormElement | null = document.querySelector('form');
const button: HTMLButtonElement | null = document.querySelector('button');
const columns: any = document.getElementById('columns');
const rows: any = document.getElementById('rows');
const content: any = document.getElementById('content');
const table:HTMLTableElement = document.createElement('table');
if (button&&form&&columns) {
button.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < +columns.value; i++) {
        let row:HTMLTableRowElement = table.insertRow(i);
        for (let j = 0; j < +rows.value; j++) {
            let cell:HTMLTableCellElement = row.insertCell(j);
            cell.textContent = content.value;
        }
    }
    form.reset()
})} else  console.error('Element with id "text" not found')
document.body.appendChild(table)


