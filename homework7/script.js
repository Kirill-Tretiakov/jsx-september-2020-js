
// Task #1

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const button = document.getElementById('button');
// const element = document.getElementById('text');
//
// button.onclick = ev => {
//     element.style.display = 'none';
// }

// Task #2

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const button = document.getElementById('button');
//
// button.onclick = ev => {
//     button.style.display = 'none';
// }

// Task #3

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const input = document.createElement('input');
// document.body.appendChild(input);
//
// const  button = document.getElementById('button');
//
// button.onclick = ev => {
//     if (input.value > 18) {
//         alert('Вітаємо, ви успішно зареєструвалися на сайті!')
//     }else {
//         alert(`Вибачте, Вам ${input.value} років, для реєстрації на сайті тільки від 18`)
//     }
// }

// Task #4

// - Создайте меню, которое раскрывается/сворачивается при клике

// const menu = document.getElementById('menu');
// menu.style.display = 'none';
//
// const  button = document.getElementById('button');
//
// let flag = false;
//
// button.onclick = ev =>{
//     if (flag){
//         menu.style.display = 'block'
//
//         flag = false
//     } else{
//         menu.style.display = 'none';
//
//         flag = true;
//     }
//
// }


// Task #5

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


// let comments =  [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
//
// ];
//
//
// let content = document.getElementById('content')
//
// comments.forEach((value) =>{
//
//     const div = document.createElement('div');
//     const h1 = document.createElement('h1');
//     const p = document.createElement('p');
//     const button = document.createElement('button')
//
//     h1.innerText = value.title;
//     p.innerText = value.body;
//     button.innerText = 'HIDE';
//
//     let flag = false;
//
// button.onclick = () =>{
//
//     if (flag){
//         p.style.display = 'block';
//
//         flag = false;
//     } else {
//         p.style.display = 'none';
//         flag = 'true';
//     }
//
//   }
//
//     div.appendChild(h1);
//     div.appendChild(p);
//     div.appendChild(button)
//     content.appendChild(div)
//
// });



// Task #6

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.\

// const  input1 = document.getElementById('input1');
// const  input2 = document.getElementById('input2');
// const  input3 = document.getElementById('input3');
// const  input4 = document.getElementById('input4');
//
// const button = document.getElementById('button');
//
// button.onclick = ev =>{
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     console.log(input4.value);
// }

// Task #7

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// function  createTable(rows,cols,tag) {
//     const table = document.createElement('table');
//
//     for (let i = 0; i < rows; i++) {
//         const tr = document.createElement('tr')
//
//         for (let k = 0; k < cols; k++) {
//             const td = document.createElement('td')
//             td.innerHTML = i.toString() + j.toString()
//             tr.appendChild(td);
//         }
//         table.appendChild(tr)
//     }
//     tag.appendChild(table);
// };
//
// createTable(4,5,content);


// Task #8

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const content = document.getElementById('content');
// const  input1 = document.createElement('input');
// input1.type = 'number'; input1.name = 'input1'; input1.id = 'inputRows';
// const  input2 = document.createElement('input');
// input2.type ='number'; input2.name = 'input2'; input2.id = 'inputCools';
// const input3 = document.createElement('input');
// input3.type = 'text'; input3.name = 'input3'; input3.id = 'inputText';
//
// let button = document.createElement('button');
// button.innerText = 'send'
//
// function table(rows, cols, text, tag){
//     const table = document.createElement('table')
//
//     for (let i = 0 ; i<rows; i++){
//          const tr = document.createElement('tr')
//
//         for (let k = 0; k<cols; k++){
//             const td = document.createElement('td');
//             td.innerText = text;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr)
//     }
//     tag.appendChild(table);
// }
//
// content.appendChild(input1);
// content.appendChild(input2);
// content.appendChild(input3);
// content.appendChild(button);
//
// button.onclick = ev => { table(input1.value, input2.value, input3.value, content);}

// Task #9

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let images = [
//     "https://cf.bstatic.com/images/hotel/max1024x768/257/257803292.jpg",
//     "https://pix10.agoda.net/hotelImages/10637/-1/878a9b58ccd19eee41b98d20e388c080.jpg?s=1024x768",
//     "https://media-cdn.tripadvisor.com/media/photo-s/1a/d0/46/bc/f-day-time.jpg"
// ];
//
// let num = 0;
//
// function  next (){
//     let slider = document.getElementById('slider');
//     num++;
//     if (num >= images.length){
//         num = 0
//     }
//     slider.src  = images[num]
// }
//
// function  prev (){
//     let slider = document.getElementById('slider');
//     num--;
//     if (num < 0 ){
//         num = images.length-1;
//     }
//     slider.src  = images[num]
// }
//
// button1 = document.createElement('button');
// button1.innerText = 'next';
//
//
// button1.onclick= ev => {
//     next()
// }
//
// button2 = document.createElement('button');
// button2.innerText = 'prev';
//
// button2.onclick= ev => {
//     prev();
// }
//
// document.body.appendChild(button1);
// document.body.appendChild(button2);


// Task #10

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arr = [fuck, sheat, good];
//
// let input = document.createElement('input');
// input.type = 'text'; input.id = 'input101';
// let button = document.createElement('button');
// button.innerText = 'send';
//
// button.onclick = ev =>{
//     for (const  element of arr){
//         if (input.value.includes(element)){
//             alert("Піщов звідси!")
//         }
//     }
// }
// content.appendChild(input);
// content.appendChild(button);


// Task #11

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


// Task #12

// let h2 = document.getElementsByTagName('h2');
// let content = document.getElementById('content');
// let wrap = document.getElementById('wrap');
// let ul = document.createElement('ul');
// for (let i = 0; i < h2.length; i++) {
//     const ulElement = h2[i];
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let id = 'item' + i;
//     a.href = '#' + id;
//     h2[i].setAttribute('id', id);
//     a.innerHTML= h2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
// content.style.width = '30%';
// wrap.style.width = '70%';
// content.style.float = 'left';
// wrap.style.float = 'left';


// Task #13

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let content = document.getElementById('content');
let div = document.createElement('div');
div.appendChild(myFunc(usersWithAddress));

let input1 = document.createElement('input'); input1.type = 'checkbox';
let label1 = document.createElement('label'); label1.innerText = 'Status:false';

let input2 = document.createElement('input'); input2.type = 'checkbox';
let label2 = document.createElement('label'); label2.type = 'Age : 29';

let input3 = document.createElement('input'); input3.type = 'checkbox';
let label3 = document.createElement('label'); label3.innerText = 'City: Kyiv'

let button = document.createElement('button'); button.innerText = 'Filter';

content.appendChild(input1); content.appendChild(label1);
content.appendChild(input2); content.appendChild(label2);
content.appendChild(input3); content.appendChild(label3);

content.appendChild(button);
div.appendChild(content);

button.onclick = ev =>{
    let arr = JSON.parse(JSON.stringify(usersWithAddress));
    if (input1.checked) arr = arr.filter(value => !value.status);
    if (input2.checked) arr = arr.filter(value => value.age>= 29);;
    if (input3.checked) arr = arr.filter(value => value.city === 'Kyiv');

    div.innerText= '';
    div.appendChild(myFunc(arr));

}

function myFunc(arr){
    let main = document.createElement('div');
    arr.forEach( item => {
    let itemDiv = document.createElement('div');
    itemDiv.innerHTML = JSON.stringify(item);
    main.appendChild(itemDiv);
    })
    return main;
}