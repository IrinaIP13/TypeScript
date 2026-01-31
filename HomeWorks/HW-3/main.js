"use strict";
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь
const url = 'https://dummyjson.com/users';
let index = 0;
async function foobar(url) {
    let objectResponse = await fetch(url);
    return objectResponse.json();
}
foobar(url).then(res => console.log(res.users[index].firstName));
