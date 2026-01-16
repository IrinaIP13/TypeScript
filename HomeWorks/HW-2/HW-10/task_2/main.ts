// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const paragraph:HTMLParagraphElement = document.createElement('p');
paragraph.innerText = 'Тобі ще не виповнилось 18';
const button_102:HTMLButtonElement = document.getElementsByTagName('button')[0];
button_102.addEventListener('click', (e:PointerEvent):void => {
    e.preventDefault();
    if(+document.getElementsByTagName('input')[0].value<18)
    {document.body.appendChild(paragraph);} else {paragraph.innerText = 'Вітаю, тобі більше 18 років'}
})