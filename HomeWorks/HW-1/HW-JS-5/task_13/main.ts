// #mkGDenYnNjn.html
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

let exchange513 = (sumUAH:number, currencyValues:{currency:string, value:number}[], exchangeCurrency:string):number => {
    let value:number = 0;
    for (const obj of currencyValues) {
        if (obj.currency === exchangeCurrency) value = obj.value;
    }
    if (value === 0) {
        return sumUAH/value;
    } else return -1;
}

console.log(exchange513(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));