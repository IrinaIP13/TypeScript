// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const button_101:HTMLButtonElement = document.getElementsByTagName("button")[0];
button_101.addEventListener('click', ():void => {
    const text_101:HTMLElement | null = document.getElementById('text')
    if (text_101){text_101.hidden = true}
    else console.error('Element with id "text" not found')
    });