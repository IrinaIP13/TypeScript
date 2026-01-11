"use strict";
// #yo06d74c1C
//
// – є масив
//
const coursesAndDurationArray_68 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
// — відсортувати його за спаданням за monthDuration
const sort_68 = coursesAndDurationArray_68.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(sort_68);
// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
const filter_68 = coursesAndDurationArray_68.filter((value) => value.monthDuration > 5);
console.log(filter_68);
const map_68 = filter_68.map((value, index) => ({ id: index + 1, ...value }));
console.log(map_68);
