// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
//     Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
type UserType_82 = {
    firstName: string,
    lastName: string,
    age: number,
    greening():void,
    goodbye():void
}

const user_82: UserType_82 = {
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

let cloneUser: UserType_82 = deepClone(user_82);
console.log(cloneUser);