"use strict";
// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const array_611 = [];
for (let i = 6; i <= 10; i++) {
    array_611.push({ value: `${i}` });
}
array_611.push({ value: 'ace' });
array_611.push({ value: 'jack' });
array_611.push({ value: 'queen' });
array_611.push({ value: 'king' });
let cards_611 = create_611('spade', 'black');
cards_611 = cards_611.concat(create_611('diamond', 'red'), create_611('heart', 'red'), create_611('clubs', 'black'));
function create_611(suit, color) {
    return array_611.map((item) => ({ ...item, cardSuit: `${suit}`, color: `${color}` }));
}
let objRes_611 = cards_611.reduce((acc, cur) => {
    switch (cur.cardSuit) {
        case 'spade':
            acc.spades.push(cur);
            break;
        case 'diamond':
            acc.diamonds.push(cur);
            break;
        case 'heart':
            acc.hearts.push(cur);
            break;
        case 'clubs':
            acc.clubs.push(cur);
            break;
    }
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(objRes_611);
