// Task #1

// function array(arr){
//     console.log(arr)
// }
//
// array([1,2,3,4,5]);

// Task #2

// let arr = []
//
// function array(){
//     console.log(arr)
// }
//
// function  randomNumbers(){
//     for ( let i = 0; i < 100; i++ ) {
//         let a = Math.round(Math.random() * 100);
//         arr.push(a);
//     }
//     array();
// }
//
// randomNumbers();


// Task #3

// function numbers(num1, num2, num3){
//     // let result= Math.min(num1, num2, num3);
//     // console.log(result);
//     let math = Math.min(num1, num2, num3);
//     return math;
// }
// let result = numbers(9,11,20);
//
// console.log(result)

// Task #4

// function numbers(num1, num2, num3){
//     // let result= Math.min(num1, num2, num3);
//     // console.log(result);
//     let math = Math.max(num1, num2, num3);
//     return math;
// }
// let result = numbers(9,11,20);
//
// console.log(result)


// Task #5

// function maxNumber(array){
//     return Math.max.apply( Math, array );
// };
//
// let result = maxNumber([300, 268, 107])
//
// console.log(result);


// Task #6

// function minNumber(array){
//     return Math.min.apply( Math, array );
// };
//
// let result = minNumber([300, 268, 107])
//
// console.log(result);
//

// Task #7

// let joinArr = (arr) => arr.join(' Привет ');
//
// let newArray = joinArr(['Kirill', 'Lera', 'Artem']);
//
// console.log(newArray)


// Task #8

// let fun2 = (arr) => arr.reduce((a, b) => (a + b));
// let result = fun2 ([2,3,6,8,9,10,12,2123,12312,1241]);
// console.log(result);

// Task #9

// let fun2 = (arr) => arr.length;
// let result = fun2 ([2,3,6,8,9,10,12,2123,12312,1241]);
// console.log(result);
//
// // Task #10
//
// function  splitArr(array1, array2){
//     let res = []
//     for (let i = 0; i < array1.length; i++) {
//         res.push(array1[i] +array2[i])
//     }
//     return res;
// }
//
// let numbers = splitArr([1,2,3,4], [4,3,2,1]);
//
// console.log(numbers);
//
// // Task #11
//
// let  firstArr = [5,6,7,8,9,10];
//
// function changeIndex(arr, index){
//     let array = [5,6,7,8,9,10];
//
//     if (index<array.length-1){
//         let temp = array[index];
//         array[index] = array[index +1];
//         array[index +1] =temp;
//     }
//
//     return array;
// }
//
// let changeElement = changeIndex(firstArr, 2);
// console.log(changeElement)

// Task #12

// function func(arr){
//     let zeroArr = [];
//     let number = [];
//     for (const item of arr){
//         if (item ===0){
//             zeroArr.push();
//         } else {
//             number.push(item)
//         }
//         return  number.concat(zeroArr)
//     }
// }
//
// console.log(func([1,0,6,0,3]));
// console.log('-----------------')
// console.log(func([0,1,2,3,4]));
// console.log('-----------------')
// console.log(func([0,0,1,0]));
//
// Task #13
//
// function textBody(){
//     document.write('Hello owu!');
// }
//
// textBody();

// Task #14

// function addElement(text, element){
//     let tag = document.createElement(element);
//     tag.innerHTML = text;
//     document.body.appendChild(tag);
// }
//
// addElement('dfpkldpfpdkf', 'div');

// Task #15


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор
// елемнту в який потрібно додати список цих автомобілів.

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок

let users = [
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

function addArrays(arr, id){
    let block = document.getElementById(id)
    let ul = document.createElement('ul')

    for (let i = 0; i < arr.length; i++) {
        const user = arr[i];
        let li = document.createElement('li');
        li.innerHTML = `{1} - ${user.name}`
        ul.appendChild(li);
    }

    block.appendChild(ul)
}

addArrays(users)

// Task #16

let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

function  split(array1, array2){
    let users = JSON.parse(JSON.stringify(array1));
    let cities = JSON.parse(JSON.stringify(array2));

    for (const city of cities) {
        for (const user of users) {
             if (city.user_id === user.id){
                 user.adress =  city;
             }
        }
    }
    return users;
}

 let split1 = split(usersWithId, citiesWithId);
console.log(split1);







