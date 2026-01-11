// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

type Obj49Type = {id: number, name: string, age: number};
function arrayObjects49(arr: Obj49Type[]):void {
    for (let i = 0; i < arr.length; i++) {
        document.write(`
        <div style="margin: 30px"><h2>Object № ${i+1}</h2>`)
            document.write(`<h3>ID: ${arr[i].id}</h3>
            <h3>Name: ${arr[i].name}</h3>
            <h3>Age: ${arr[i].age}</h3>`);
    }
    document.write(`</div>`);
}

arrayObjects49([
    {
        id: 1,
        name: 'John',
        age: 25
    },
    {
        id: 2,
        name: 'Maria',
        age: 53
    },
    {
        id: 3,
        name: 'Kate',
        age: 40
    }
]);