// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

const result:HTMLElement | null = document.getElementById('result');
const countString:string | null = localStorage.getItem('count');
if (countString&&result){
let count: number = +countString;
if (count === 0) {count = 100}
result.innerHTML = `${count} грн`;
count += 10;
setTimeout(()=> localStorage.setItem('count', String(count)), 10000)
}else  console.error('Element with id "text" not found');

