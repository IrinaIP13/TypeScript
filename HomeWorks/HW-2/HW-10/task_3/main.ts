// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const button_104:HTMLButtonElement = document.getElementsByTagName('button')[0];
button_104.addEventListener('click', (e:PointerEvent):void => {
    e.preventDefault();
    const text:HTMLHeadingElement = document.createElement('h1')
    const name:any = document.getElementById('name');
    const surname:any = document.getElementById('surname');
    const age:any = document.getElementById('age');
    const form:any = document.getElementById('form');
    text.innerText = `Name: ${name.value} 
        Surname: ${surname.value} 
        Age: ${age.value}`;
   document.body.appendChild(text);
    form.reset();
})
