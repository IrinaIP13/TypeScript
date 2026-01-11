// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

class Client_75 {
    constructor(private id: number,
                private name: string,
                private surname: string,
                private email: string,
                private phone: string,
                private _order: string[]) {}

    get order(): string[] {
        return this._order;
    }
}


const users_75:Client_75[] = [
    new Client_75(6, 'Oksana', 'Moroz', 'oksana@ukr.net', '+3806788844388', ['phone','watch', 'tv', 'headphones']),
    new Client_75(2, 'Tatyana', 'Dobrynina', 'tatiana@ukr.net', '+380678884422', ['laptop', 'tablet', 'watch', 'tv', 'headphones']),
    new Client_75(9, 'Oleg', 'Petrenko', 'oleg@ukr.net', '+380678882233', ['phone', 'computer', 'monitor', 'keyboard', 'mouse']),
    new Client_75(5, 'Anastasia', 'Vovk', 'nastya@ukr.net', '+380678884477', ['tv', 'phone']),
    new Client_75(8, 'Igor', 'Fedorenko', 'igor@ukr.net', '+380678884400', ['laptop']),
    new Client_75(10, 'Mihail', 'Furman', 'miha@ukr.net', '+380678886633', ['phone', 'computer', 'monitor', 'keyboard', 'mouse']),
    new Client_75(3, 'Elena', 'Lesenko', 'elena@ukr.net', '+380678884433', ['tablet', 'tv', 'headphones']),
    new Client_75(1, 'Irina', 'Petrakovska', 'irina@ukr.net', '+380678884411', ['computer', 'monitor', 'watch', 'tv', 'headphones']),
    new Client_75(4, 'Katerina', 'Suhova', 'katya@ukr.net', '+380678884455', ['tablet', 'tv', 'headphones', 'phone','laptop']),
    new Client_75(7, 'Georgy', 'Lementarchuk', 'georg@ukr.net', '+380678884499', ['phone', 'headphones'])
]

console.log(users_75.sort((a:Client_75,b:Client_75):number=>a.order.length-b.order.length));


