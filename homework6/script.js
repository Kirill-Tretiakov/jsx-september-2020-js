// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// Task #1

// -- при помощи метода sort и колбека  отсортировать массив.

// let arr = [1,3,5,7,11,34,123,56,87,92,31,4,8,10,12,14,71,89,21,202];
// let sport = arr.sort((a,b) =>{
//     return a-b;
// });
//
// console.log(sport);

// Task #2

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// let arr = [1,3,5,7,11,34,123,56,87,92,31,4,8,10,12,14,71,89,21,202];
//
// let sort = arr.sort((a,b)=>{
//     return b-a;
// });
//
// console.log(sort);

// Task #3

// -- при помощи filter получить числа кратные 3

// let arr = [1,3,5,7,11,34,123,56,87,92,31,4,8,10,12,14,71,89,21,202];
//
// let filter = arr.filter((value)  =>
//     value%3 === 0 && value!==0
// );
//
// console.log(filter);

// Task #4

// -- при помощи filter получить числа кратные 10

// let arr = [1,3,5,7,11,34,123,56,87,92,31,4,8,10,12,14,71,89,21,202];
//
// let filter = arr.filter((value)  =>
//     value%10 === 0 && value!==0
// );
//
// console.log(filter);

// Task #5

// -- перебрать (проитерировать) массив при помощи foreach()

// let arr = [1,3,5,7,11,34,123,56,87,92,31,4,8,10,12,14,71,89,21,202];
//
// let forEach = arr.forEach(value => {
//     console.log(value)
// });

// Task #6

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let arr = [1,3,5,7,11,34,123,56,87,92,31,4,8,10,12,14,71,89,21,202];
//
// let map = arr.map(value => value*3);
// console.log(map);


// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// Task #7

// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.

// let arr = ['Artem', 'Kirill', 'Lera', 'Marina', 'Alex', 'Vova',
//     'Oleg', 'Ira', 'Alina', 'Nastya', 'Roman', 'Julia', 'Dasha', 'Liza', 'Veronika', 'Olga'];

// let sort =arr.sort();

// console.log(sort);

// Task #8

// -- отсортировать его по алфавиту  в нисходящем порядке.

//  let arr = ['Artem', 'Kirill', 'Lera', 'Marina', 'Alex', 'Vova',
//     'Oleg', 'Ira', 'Alina', 'Nastya', 'Roman', 'Julia', 'Dasha', 'Liza', 'Veronika', 'Olga'];
//
// let sort = arr.sort((a,b) =>{
//     if (a>b){
//         return -1;
//     } return 1
// });
//
// console.log(sort);

// Task #9

// -- отфильтровать слова длиной менее 4х символов

// let arr = ['Artem', 'Kirill', 'Lera', 'Marina', 'Alex', 'Vova',
//     'Oleg', 'Ira', 'Alina', 'Nastya', 'Roman', 'Julia', 'Dasha', 'Liza', 'Veronika', 'Olga'];
//
// let filter = arr.filter(value => value.length <= 4);
//
// console.log(filter)


// Task #10

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

 // let arr = ['Artem', 'Kirill', 'Lera', 'Marina', 'Alex', 'Vova',
 //    'Oleg', 'Ira', 'Alina', 'Nastya', 'Roman', 'Julia', 'Dasha', 'Liza', 'Veronika', 'Olga'];
 //
 // let map = arr.map(value => value + '!');
 // console.log(map);



// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
//
//
// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком

// Task #11

// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//
// let arr = JSON.parse(JSON.stringify(users));
//
// let sort = arr.sort((a,b) =>{
//      return a.age - b.age
// });
//
// console.log(sort);


// Task #12

// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//
// let arr = JSON.parse(JSON.stringify(users));
//
// let sort = arr.sort((a,b) =>{
//      return b.age - a.age
// });
//
// console.log(sort);

// Task #13

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true},
// {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true},
// {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}
// , {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//
// let arr = JSON.parse(JSON.stringify(users));
//
// let sort = arr.sort((a,b)=> a.name.length -b.name.length);
//
// console.log(sort);


// Task #14

// пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true},
// {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true},
// {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}
// , {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
//
// let arr = JSON.parse(JSON.stringify(users));
//
// let map = arr.map(arr =>{
//     arr.id = Math.floor(Math.random()*100+1);
//     return arr;
// });
//
// console.log(map);

// Task #15

// - відсортувати його за індентифікатором

// let sort = arr.sort((a,b) => a.id -b.id);
//
// console.log(sort);


// Task #16

// -- наисать функцию калькулятора с 2мя числами и колбеком

// let inputNumber1 = +prompt('Enter 1 number');
// let inputNumber2 = +prompt('Enter 2 number');
//
// let numAction = prompt('Enter action');
//
// function calculator(a,b,callback){
//     return callback(a,b);
// }
//
// let result  = calculator(inputNumber1, inputNumber2, (a,b) =>{
//     if (numAction === '+') return a+b;
//     if (numAction === '-') return a-b;
//     if (numAction === '*') return a*b;
//     if (numAction === '/') return a+b;
//     if (numAction === '%') return a%b;
// });
//
// alert(result);

// Task #17

// -- наисать функцию калькулятора с 3мя числами и колбеком

// let inputNumber1 = +prompt('Enter 1 number');
// let inputNumber2 = +prompt('Enter 2 number');
// let inputNumber3 = +prompt('Enter 3 number');
//
// let numAction = prompt('Enter action');
// let numAction2 = prompt('Enter action');
//
// function calculator(a,b,c,callback){
//     return callback(a,b,c);
// }
//
// let result  = calculator(inputNumber1, inputNumber2, inputNumber3, (a,b,c) =>{
//     if (numAction === '+' &&  numAction2 === '+') return a+b+c;
//     if (numAction === '-' &&  numAction2 === '-') return a-b-c;
//     if (numAction === '*' &&  numAction2 === '*') return a+b+c;
//     if (numAction === '/' &&  numAction2 === '/') return a+b+c;
//     if (numAction === '%' &&  numAction2 === '%') return a+b+c;
// });
//
// alert(result);



// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}
// , {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year:2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//
// let arr = JSON.parse(JSON.stringify(cars));

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв


// Task #18

// - двигун більше 3х літрів

// let filter = arr.filter(value => value.volume >= 3);

// console.log(filter);


// Task #19

// - двигун = 2л

// let filter = arr.filter(value => value.volume = 2);
//
// console.log(filter);


// Task #20

// - виробник мерс

// let filter = arr.filter(value => value.producer === 'mercedes');
//
// console.log(filter);

// Task #21

// - двигун більше 3х літрів + виробник мерседес

// let filter = arr.filter((value) => value.volume>=3 && value.producer === 'mercedes')
// console.log(filter);


// Task #22

// - двигун більше 3х літрів + виробник субару

// let filter = arr.filter((value) => value.volume>=3 && value.producer === 'subaru')
// console.log(filter);

// Task #23

// - мотор серіі ej

// let filter = arr.filter((value) => value.engine === 'ej');
// console.log(filter);

// Task #24

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let filter = arr.filter((value) => value.power>=3 && value.producer === 'subaru' && value.engine === 'ej');
// console.log(filter);

// Task #25

// - двигун меньше 3х літрів + виробник мерседес

// let filter = arr.filter((value) => value.volume <3 && value.producer === 'mercedes')
// console.log(filter);

// Task #26

// - двигун більше 2л + сили більше 250

// let filter = arr.filter((value) => value.volume >2 && value.power > 250 );
// console.log(filter);

// Task #27

// - сили більше 250  + виробник бмв

// let filter = arr.filter((value) => value.power >250 && value.producer === 'bmw' );
// console.log(filter);


// - взять слдующий массив

 let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko',
         number: 16}}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko',
         number: 1}}, {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko',
         number: 121}}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko',
         number: 90}}, {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko',
         number: 115}}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko',
         number: 2}}, {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko',
         number: 22}}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko',
         number: 43}}, {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko',
         number: 12}}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko',
         number: 16}}, {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko',
         number: 121}}];
let arr = JSON.parse(JSON.stringify(usersWithAddress));


// Task #27

// -- отсортировать его по id пользователей

// let sort = arr.sort((a,b) =>{
//     return a.id - b.id;
// })
// console.log(sort)


// Task #28

// -- отсортировать его по id пользователей в обратном опрядке

// let sort = arr.sort((a,b) =>{
//     return b.id - a.id;
// })
// console.log(sort)


// Task #29

// -- отсортировать его по возрасту пользователей

// let sort = arr.sort((a,b) =>{
//     return a.id - b.id;
// })
// console.log(sort)


// Task #30

// -- отсортировать его по возрасту пользователей в обратном порядке

// let sort = arr.sort((a,b) =>{
//     return a.age - b.age;
// })
// console.log(sort)


// Task #31

// -- отсортировать его по имени пользователей

// let sort = arr.sort((a,b) =>{
//     if (a.name>b.name){
//         return  1;
//     } return -1;
// })
// console.log(sort)


// Task #32

// -- отсортировать его по имени пользователей в обратном порядке

// let sort = arr.sort((a,b) =>{
//     if (a.name>b.name){
//         return  -1;
//     } return 1;
// })
// console.log(sort)


// Task #33

// -- отсортировать его по названию улицы  в алфавитном порядке

// let sort = arr.sort((a,b) =>{
//     if (a.address.street>b.address.street){
//         return  1;
//     } return -1;
// })
// console.log(sort)


// Task #34

// -- отсортировать его по номеру дома по возрастанию

// let sort = arr.sort((a,b) =>{
//     if (a.address.number>b.address.number){
//         return  1;
//     } return -1;
// })
// console.log(sort)


// Task #35

// -- отфильтровать (оставить) тех кто младше 30

// let filter = arr.filter(value => value.age<30);
// console.log(filter);

// Task #36

// -- отфильтровать (оставить) тех у кого отрицательный статус

// let filter = arr.filter(value => value.status === false);
// console.log(filter);


// Task #37

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

// let filter = arr.filter(value => value.status === false && value.age<30);
// console.log(filter);



// Task #38
// -- отфильтровать (оставить) тех у кого номер дома четный

// let filter = arr.filter(value => value.address.number%2 === 0 && value.address.number!==0);
// console.log(filter);

