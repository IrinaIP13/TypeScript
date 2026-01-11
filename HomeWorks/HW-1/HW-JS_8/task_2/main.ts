// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
//     Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

const user_82 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
    greening():void {
        console.log('shalom')
    },
    goodbye():void{
        console.log('bye')
    }
}

function deepClone <T> (object: T): T {
    if(object) {

        const clonedObj:T = JSON.parse(JSON.stringify(object));

        for (const objectKey in object) {
            if (typeof object[objectKey] === "function") {
                (clonedObj as any)[objectKey] = object[objectKey];
            }
        }

        return clonedObj;
    }
    throw new Error('Not implemented');
}

let cloneUser= deepClone(user_82);
console.log(cloneUser);