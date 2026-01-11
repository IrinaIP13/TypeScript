// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

type PrimitiveType = number | string | boolean;

function array48(array: PrimitiveType[]):void {
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write(`</ul>`)
}

array48([-57, false, 237, 'banana', 0, 1, 'apple', 2, true, 3]);