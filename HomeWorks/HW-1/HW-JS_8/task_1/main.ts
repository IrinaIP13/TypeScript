// #iz6emEsP2BA
//
// – є масив
//

type Array_81 = {id?:number, title: string, monthDuration: number}
let coursesAndDurationArray_81: Array_81[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

let map_81:Array_81[] = coursesAndDurationArray_81.map<Array_81>((value:Array_81, index:number):Array_81 => ({id:index+1,...value}));
console.log(map_81);