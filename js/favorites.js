const getPerson = JSON.parse(localStorage.getItem('key'));
const content = document.querySelector('.content');

for (const user of getPerson) {
    const person = document.createElement('div');
    person.classList = 'person';
    person.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Age: ${user.age}</p>
        `;
    content.appendChild(person);
}