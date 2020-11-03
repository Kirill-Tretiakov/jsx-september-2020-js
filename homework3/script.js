// Task #1

// let dog ={
//     name: 'reks',
//     gender: 'male',
//     age:2,
//     owner: 'oleg',
//     poroda: 'haski'
// }
//
// let person ={
//     name : 'kirill',
//     gender: 'male',
//     age: 19,
//     hasWife:'false',
//     hasCar: 'true'
// }
//
// let car = {
//     type: 'sedan',
//     brand:'mercedes',
//     color:'black',
//     age: 25,
//     owner: false;
// }
//
// let flat = {
//  floor: 5;
//  rooms:2;
//  color:white;
//  number: 28;
//  isCondithioner: true;
// }
//
// let book ={
//     name:"Harru potter",
//     type: "fantasy",
//     year:200,
//     hasOwner: true,
//     price: 100
// }
//
//

// Task #2

// let arr = ['dog1','dog2','dog3','dog4','dog5'];
// let arr1 = ['kirill', 'artem', 'lera', 'liza', 'marina'];
// let arr2 = ['mercedes', 'bmw', 'lanos', 'tesla', 'kia'];
//
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// Task #3

// let house ={
//    floor: 2;
//    hasOwner: false;
//    room:20;
//    cartpet :true;
//    addres : [
//        'lviv',
//        'kyiv'
//    ]
// }
//
//
// let driver ={
//     name : 'kirill'
//     age: 22;
//     hasCar : true,
//     hasWife : true
//     children : [
//         'Alina',
//         'Marina'
//     ]
// }
//
// let table ={
//     name : 'table#`1'
//     age: 2;
//     hasOwner: true,
//     material: wood,
//     price : [
//         20,
//         30
//     ]
// }
//
// let bag ={
//     name : 'bag#`1'
//     age: 1;
//     hasOwner: false,
//     material: material,
//     price : [
//         50,
//         80
//     ]
// }

// Task #4

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[9].age);
// console.log(users[4].age , users[4].name);
// console.log(users[5].age , users[5].status);


// Task #5

let content = document.getElementById('content');
let rules =document.getElementById('rules');

content.style.color = "blue";
content.style.backgroundColor = "black";

rules.style.color = "blue";
rules.style.backgroundColor = "black";

document.getElementById("content").textContent = "Edit content id by Kirill";
document.getElementById('rules').textContent = "Edit rules by kirill";

let fc_rules = document.getElementsByClassName('fc_rules');

for (let i = 0; i<fc_rules.length; i++)
    fc_rules[i].style.color ="red"



