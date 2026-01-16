// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

type ArrayType_95 = {
    title: string,
    monthDuration: number,
    hourDuration: number,
    modules: string[],
}

const coursesArray_95: ArrayType_95[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

const body_95:HTMLBodyElement = document.getElementsByTagName('body')[0];

for (const element of coursesArray_95) {
    const h1:HTMLHeadingElement = document.createElement('h1');
    h1.textContent = `title: "${element.title}"`;

    const spanMonth:HTMLSpanElement = document.createElement('span');
    spanMonth.textContent = `monthDuration: ${element.monthDuration}`;
    spanMonth.style.marginRight = '30px';

    const spanHour:HTMLSpanElement = document.createElement('span');
    spanHour.textContent = `hourDuration: ${element.hourDuration}`;

    const h2:HTMLHeadingElement = document.createElement('h2');
    h2.textContent = `modules:`;

    const ul:HTMLUListElement = document.createElement('ul');
    for (const item of element.modules) {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }

    const div:HTMLDivElement = document.createElement('div')
    div.append(h1, spanMonth, spanHour, h2, ul);
    body_95.appendChild(div);
}