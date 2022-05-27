// Task 1 - є масив, створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
//          потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
//          Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому
//          етапі.

const users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const content = document.querySelector('.content');

let favorites = [];

for (const user of users) {
    const person = document.createElement('div');
    person.classList = 'person';
    person.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Age: ${user.age}</p>
        `;
    content.appendChild(person);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = 'Add to favorite';
    person.appendChild(btn);

    btn.addEventListener('click', () => {
        favorites.push(user);
        localStorage.setItem('key', JSON.stringify(favorites));
    });
}






























































