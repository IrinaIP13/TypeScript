// #pOeHKct

// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

class User_73 {
    constructor(private _id: number, private name: string, private surname: string, private email: string, private phone: string) {
    }

    get id(): number {
        return this._id;
    }
}

const users_73:User_73[] = [
    new User_73(6, 'Oksana', 'Moroz', 'oksana@ukr.net', '+3806788844388'),
    new User_73(2, 'Tatyana', 'Dobrynina', 'tatiana@ukr.net', '+380678884422'),
    new User_73(9, 'Oleg', 'Petrenko', 'oleg@ukr.net', '+380678882233'),
    new User_73(5, 'Anastasia', 'Vovk', 'nastya@ukr.net', '+380678884477'),
    new User_73(8, 'Igor', 'Fedorenko', 'igor@ukr.net', '+380678884400'),
    new User_73(10, 'Mihail', 'Furman', 'miha@ukr.net', '+380678886633'),
    new User_73(3, 'Elena', 'Lesenko', 'elena@ukr.net', '+380678884433'),
    new User_73(1, 'Irina', 'Petrakovska', 'irina@ukr.net', '+380678884411'),
    new User_73(4, 'Katerina', 'Suhova', 'katya@ukr.net', '+380678884455'),
    new User_73(7, 'Georgy', 'Lementarchuk', 'georg@ukr.net', '+380678884499')
]

console.log(users_73.sort((a:User_73,b:User_73):number=>a.id - b.id));


