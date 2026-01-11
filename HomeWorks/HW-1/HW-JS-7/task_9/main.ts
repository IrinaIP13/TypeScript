// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter
let array_79:number[] = [4,6,2,8,5,9,11];

interface Array<T> {
    myForeach(callback: (Value: T) => void):void;
    myFilter(callback: (Value: T) => boolean): T[];
}

Array.prototype.myForeach = function <T> (callback: (Value: T) => void):void {
    let array: any[] = this;
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
array_79.myForeach((item:number):void => console.log(item));

Array.prototype.myFilter = function <T> (predicate: (value: T) => boolean): T[] {
    let array:any[] = this;
    let newArray:any[] = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(array_79.myFilter((argument:number):boolean => argument>5));