// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function list47(text:string, q:number):void {
    document.write(`<ul>`)
    for (let i = 0; i < q; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

list47('Мама мыла раму', 4)