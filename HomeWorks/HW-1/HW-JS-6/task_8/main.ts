// #yo06d74c1C
//
// – є масив
//

type Arr_68 = { title: string, monthDuration: number };
const coursesAndDurationArray_68:Arr_68[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

 // — відсортувати його за спаданням за monthDuration
const sort_68:Arr_68[] = coursesAndDurationArray_68.sort((a:Arr_68, b:Arr_68):number => a.monthDuration - b.monthDuration);
console.log(sort_68);

// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
const filter_68:Arr_68[] = coursesAndDurationArray_68.filter((value:Arr_68):boolean => value.monthDuration > 5);
console.log(filter_68);

// — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
type Arr_68_map = {id:number ,title: string, monthDuration: number};
const map_68:Arr_68_map[] = filter_68.map((value:Arr_68, index:number):Arr_68_map => ({id:index+1,...value}))
console.log(map_68)
