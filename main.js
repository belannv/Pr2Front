import { Man, Woman } from './human.js';
import { searchInList } from './search.js';

const people = [
    new Man('Іван', 30, 70),
    new Woman('Марія', 25, 60),
    new Man('Петро', 35, 75),
    new Woman('Анна', 29, 61)
];

// Приклад успішного пошуку
console.log('Пошук за віком 30:');
searchInList(people, 'age', 30)
    .then(results => {
        console.log('Результати пошуку:', results);
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => {
        console.error(error);
    });

// Приклад неуспішного пошуку
console.log('Пошук за ім\'ям "Олег":');
searchInList(people, 'name', 'Олег')
    .then(results => {
        console.log('Результати пошуку:', results);
        results.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => {
        console.error(error);
    });
