// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//
// (в першу, другу, третю або четверту частину години).

let time_7s: string | null = prompt('Введіть число від 0 до 59');
if (time_7s !== null) {
    let time_7: number = +time_7s;
    if (0<=time_7 && time_7<15) console.log('перша частина')
    else if (15<=time_7 && time_7<30) console.log('друга частина')
    else if (30<=time_7 && time_7<45) console.log('третя частина')
    else if (45<=time_7 && time_7<60) console.log('четверта частина')
    else console.log('не вірне значення')
}
