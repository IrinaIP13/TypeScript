"use strict";
// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }
const array_610 = [];
for (let i = 6; i <= 10; i++) {
    array_610.push({ value: `${i}` });
}
array_610.push({ value: 'ace' });
array_610.push({ value: 'jack' });
array_610.push({ value: 'queen' });
array_610.push({ value: 'king' });
let cards_610 = create_610('spade', 'black');
cards_610 = cards_610.concat(create_610('diamond', 'red'), create_610('heart', 'red'), create_610('clubs', 'black'));
function create_610(suit, color) {
    return array_610.map((item) => ({ ...item, cardSuit: `${suit}`, color: `${color}` }));
}
console.log(cards_610);
// Після опису, використовуючи функції масивів:
//
//  – знайти піковий туз
console.log(cards_610.filter((item) => item.value.includes('ace'))
    .filter((item) => item.cardSuit.includes('spade')));
//
//  – всі шістки
console.log(cards_610.filter((item) => item.value.includes('6')));
//
//  – всі червоні карти
console.log(cards_610.filter((item) => item.color.includes('red')));
//
//  – всі буби
console.log(cards_610.filter((item) => item.cardSuit.includes('diamond')));
//
//  – всі трефи від 9 та більше
console.log(cards_610.filter((item) => item.value !== '6' && item.value !== '7' && item.value !== '8' && item.cardSuit.includes('clubs')));
