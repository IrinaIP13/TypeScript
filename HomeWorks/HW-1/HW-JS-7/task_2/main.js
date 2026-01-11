"use strict";
// #2ikXsE2WiKZ
//
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
class User_72 {
    constructor(_id, name, surname, email, phone) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
    get id() {
        return this._id;
    }
}
const users_72 = [
    new User_72(6, 'Oksana', 'Moroz', 'oksana@ukr.net', '+3806788844388'),
    new User_72(2, 'Tatyana', 'Dobrynina', 'tatiana@ukr.net', '+380678884422'),
    new User_72(9, 'Oleg', 'Petrenko', 'oleg@ukr.net', '+380678882233'),
    new User_72(5, 'Anastasia', 'Vovk', 'nastya@ukr.net', '+380678884477'),
    new User_72(8, 'Igor', 'Fedorenko', 'igor@ukr.net', '+380678884400'),
    new User_72(10, 'Mihail', 'Furman', 'miha@ukr.net', '+380678886633'),
    new User_72(3, 'Elena', 'Lesenko', 'elena@ukr.net', '+380678884433'),
    new User_72(1, 'Irina', 'Petrakovska', 'irina@ukr.net', '+380678884411'),
    new User_72(4, 'Katerina', 'Suhova', 'katya@ukr.net', '+380678884455'),
    new User_72(7, 'Georgy', 'Lementarchuk', 'georg@ukr.net', '+380678884499')
];
console.log(users_72.filter((value) => value.id % 2 === 0));
