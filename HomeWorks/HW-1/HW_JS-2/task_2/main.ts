// #LARqoUj5I
//
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.

type Books_1Type = {title: string, pageCount: number, genre: string};

let bookMaster_1: Books_1Type = {
    title: 'Мастер и Маргарита',
    pageCount: 480,
    genre: 'фантастика'
}
let bookKobzar_1: Books_1Type = {
    title: 'Кобзар',
    pageCount: 576,
    genre: 'поезія'
};
let bookSubconsious_1: Books_1Type = {
    title: 'Подсознание может все',
    pageCount: 160,
    genre: 'психология'
};

console.log(bookMaster_1)
console.log(bookKobzar_1)
console.log(bookSubconsious_1)