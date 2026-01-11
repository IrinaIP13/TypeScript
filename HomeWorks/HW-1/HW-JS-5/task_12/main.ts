// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap512 = (arr:number[],index1:number,index2:number):void => {
    let temp:number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

let array512:number[] = [1,2,3,4,5,6,7,8,9];
swap512(array512, 3,5);
console.log(array512)