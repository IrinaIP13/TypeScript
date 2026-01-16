// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

let countSessions:string[] | null = JSON.parse(<string>localStorage.getItem('countSessions')) || [];
if (countSessions) {
countSessions.push(new Date().toString())
localStorage.setItem('countSessions', JSON.stringify(countSessions));
} else console.error('Element with id "text" not found');

