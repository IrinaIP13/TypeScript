// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function list46(text: string):void {
    document.write(`
<ul> 
<li>${text}</li> 
<li>${text}</li> 
<li>${text}</li> 
</ul>`)
}

list46('Мама мыла раму')