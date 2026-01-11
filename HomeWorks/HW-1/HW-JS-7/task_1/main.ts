// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)

class User_71 {
    constructor(private id: number, private name: string, private surname: string, private email: string, private phone: string) {
    }
}

const users_71:User_71[] = [
    new User_71(6, 'Oksana', 'Moroz', 'oksana@ukr.net', '+3806788844388'),
    new User_71(2, 'Tatyana', 'Dobrynina', 'tatiana@ukr.net', '+380678884422'),
    new User_71(9, 'Oleg', 'Petrenko', 'oleg@ukr.net', '+380678882233'),
    new User_71(5, 'Anastasia', 'Vovk', 'nastya@ukr.net', '+380678884477'),
    new User_71(8, 'Igor', 'Fedorenko', 'igor@ukr.net', '+380678884400'),
    new User_71(10, 'Mihail', 'Furman', 'miha@ukr.net', '+380678886633'),
    new User_71(3, 'Elena', 'Lesenko', 'elena@ukr.net', '+380678884433'),
    new User_71(1, 'Irina', 'Petrakovska', 'irina@ukr.net', '+380678884411'),
    new User_71(4, 'Katerina', 'Suhova', 'katya@ukr.net', '+380678884455'),
    new User_71(7, 'Georgy', 'Lementarchuk', 'georg@ukr.net', '+380678884499')
]

console.log(users_71);


