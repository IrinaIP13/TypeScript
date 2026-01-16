// #OPLI89c9G
//
// – Є масив:
//
 const arrayNav_92:string[] = ['Main','Products','About us','Contacts'];
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const ul_92:HTMLUListElement = document.createElement('ul');

for (const element of arrayNav_92) {
    let li:HTMLLIElement = document.createElement('li');
    li.innerText = element;
    ul_92.appendChild(li);
}

document.getElementsByTagName('body')[0].appendChild(ul_92);