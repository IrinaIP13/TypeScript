// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName:string, objToAdd:object):void {
    let array:object[] = JSON.parse(<string>localStorage.getItem(arrayName));
    array.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('countSessions', {})

