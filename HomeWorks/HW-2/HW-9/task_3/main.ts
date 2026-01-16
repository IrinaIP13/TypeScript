// #jeBqHV525U5
//
// – Є масив

type ArrayType_93 = {
    title: string,
    monthDuration: number
}
const coursesAndDurationArray_93:ArrayType_93[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.

const body_93:HTMLBodyElement = document.getElementsByTagName('body')[0];

for (const element of coursesAndDurationArray_93) {
    const div_93:HTMLDivElement = document.createElement('div');
    div_93.textContent = `Course "${element.title}" - duration ${element.monthDuration} months`;
    body_93.appendChild(div_93);
}