"use strict";
// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь
const url = 'https://dummyjson.com/users';
console.log(foobar(url));
function foobar(url) {
    const arrayUsersSomeType = [];
    fetch(url)
        .then(res => res.json())
        .then(objectResponse => {
        let { users } = objectResponse;
        for (const user of users) {
            const resUser = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName
            };
            console.log(resUser);
            arrayUsersSomeType.push(resUser);
        }
    });
    return arrayUsersSomeType;
}
