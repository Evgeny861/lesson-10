'use strict';

// 1 задание
const book = document.querySelectorAll('.book');
const books = document.querySelector('.books');
books.prepend(book[4]);
books.prepend(book[0]);
books.prepend(book[1]);
books.append(book[2]);

// 2 Задание 
const body = document.querySelector('body');
document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

// 3 задание
const blank = document.querySelectorAll('a');
blank[2].textContent = 'Книга 3. this и Прототипы Объектов';

// 4 задание
const adv = document.querySelector('.adv');
adv.remove();

// // 5 Задание
// 2 Книга 
const book2 =  book[0];
const items1 = book2.querySelector('ul');
const item1 = book[0].querySelectorAll('li');
items1.append(item1[3]);
items1.append(item1[6]);
items1.append(item1[8]);
items1.append(item1[4]);
items1.append(item1[5]);
items1.append(item1[7]);
items1.append(item1[9]);
items1.append(item1[2]);
items1.append(item1[10]);
// 5 Книга
const book5 = book[5];
const items2 = book5.querySelector('ul');
const item2 = book[5].querySelectorAll('li');
items2.append(item2[3]);
items2.append(item2[4]);
items2.append(item2[2]);
items2.append(item2[6]);
items2.append(item2[7]);
items2.append(item2[5]);
items2.append(item2[8]);
items2.append(item2[10]);
// 6 Задание
const book6 = book[2];
const items3 = book6.querySelector('ul');
const item3 = book[2].querySelectorAll('li');
const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
items3.append(newElem);
items3.append(item3[9]);

