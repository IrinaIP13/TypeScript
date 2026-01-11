"use strict";
// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
class Client_74 {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
const users_74 = [
    new Client_74(6, 'Oksana', 'Moroz', 'oksana@ukr.net', '+3806788844388', ['phone', 'watch', 'tv', 'headphones']),
    new Client_74(2, 'Tatyana', 'Dobrynina', 'tatiana@ukr.net', '+380678884422', ['laptop', 'tablet', 'watch', 'tv', 'headphones']),
    new Client_74(9, 'Oleg', 'Petrenko', 'oleg@ukr.net', '+380678882233', ['phone', 'computer', 'monitor', 'keyboard', 'mouse']),
    new Client_74(5, 'Anastasia', 'Vovk', 'nastya@ukr.net', '+380678884477', ['tv', 'phone']),
    new Client_74(8, 'Igor', 'Fedorenko', 'igor@ukr.net', '+380678884400', ['laptop']),
    new Client_74(10, 'Mihail', 'Furman', 'miha@ukr.net', '+380678886633', ['phone', 'computer', 'monitor', 'keyboard', 'mouse']),
    new Client_74(3, 'Elena', 'Lesenko', 'elena@ukr.net', '+380678884433', ['tablet', 'tv', 'headphones']),
    new Client_74(1, 'Irina', 'Petrakovska', 'irina@ukr.net', '+380678884411', ['computer', 'monitor', 'watch', 'tv', 'headphones']),
    new Client_74(4, 'Katerina', 'Suhova', 'katya@ukr.net', '+380678884455', ['tablet', 'tv', 'headphones', 'phone', 'laptop']),
    new Client_74(7, 'Georgy', 'Lementarchuk', 'georg@ukr.net', '+380678884499', ['phone', 'headphones'])
];
console.log(users_74);
