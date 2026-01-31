// Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
//
// Сигнатур функції під час виклику foobar<SomeType>(‘/url)
//
// SomeType – ваш тип відповіді
//
// url – ваш ендпоінт, з якого чекаємо відповідь

type SomeType = {
    users: {id: number;
    firstName: string;
    lastName: string}[]
}

const url:string = 'https://dummyjson.com/users';
let index:number = 0;


async function foobar<T>(url: string):Promise<T> {
    let objectResponse = await fetch(url);
    return objectResponse.json();
}

foobar<SomeType>(url).then(res => console.log(res.users[index].firstName));
