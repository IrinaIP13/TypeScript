"use strict";
// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
let day_8s = prompt('Введіть число від 1 до 31');
if (day_8s !== null) {
    let day_8 = +day_8s;
    if (0 < day_8 && day_8 <= 10)
        console.log('перша частина');
    else if (10 < day_8 && day_8 <= 20)
        console.log('друга частина');
    else if (20 < day_8 && day_8 <= 31)
        console.log('третя частина');
    else
        console.log('не вірне значення');
}
