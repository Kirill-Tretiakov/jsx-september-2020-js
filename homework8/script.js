// Task #1

// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textArea = document.createElement('textarea');
// textArea.id = 'textAr';
// document.body.appendChild(textArea);
//
// textArea.oninput = ev => {
//     localStorage.setItem('textAr',textArea.value);
// }
//
// textArea.value = localStorage.getItem('textAr');
//


// Task #2

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

// let form1 = document.createElement('form');
// form1.id = 'form1';
//
// let input1 = document.createElement('input');
// input1.type = 'input';
// input1.id = 'input1';
// input1.style.marginRight = '20px';
// let input2 = document.createElement('textarea');
// input2.id = 'textarea';
// let input3 = document.createElement('input');
// input3.type = 'checkbox';
// input3.id = 'checkbox';
// let input4 = document.createElement('input');
// input4.type = 'radio';
// input4.id = 'radio1';
// input4.value = 'false'
// let input5 = document.createElement('select');
// input5.id = 'select';
// input5.style.width = '400px';
// input5.value = 'false'
//
// input5.options[0] = new Option("Item1", "str0");
// input5.options[1] = new Option("Item2", "str1");
// input5.options[2] = new Option("Item3", "str2");
//
// let div = document.createElement('div');
// div.id = 'div1';
//
// form1.appendChild(input1);
// form1.appendChild(input2);
// form1.appendChild(input3);
// form1.appendChild(input4);
// form1.appendChild(input5);
// div.appendChild(form1);
// document.body.appendChild(div);
//
// dataFormGet(form1);
//
// form1.oninput = () =>{
//     saveForm(form1)
// }
//
// function saveForm(t){
//     dataFormSet(t)
// }
//
//
// function dataFormSet(tag){
//     for (let i = 0; i< tag.length; i ++){
//         const tagEl = tag[i]
//         if (tagEl.contentType === 'checkbox' || tagEl.contentType === 'radio')
//             tagEl.checked
//               ? tagEl.value = true
//               :tagEl.value = false;
//
//         localStorage.setItem(tagEl.id, tagEl.value);
//    }
// }
//
// function  dataFormGet(tag){
//         for (let i = 0; i < localStorage.length; i++) {
//        if(localStorage.hasOwnProperty(tag.children[i].id)){
//            tag.children[i].value = localStorage.getItem(tag.children[i].id);
//            if(tag.children[i].value === 'true'){
//                tag.children[i].setAttribute('checked', 'checked');
//            }
//        }
//
//     }
// }


// Task #3

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let text = document.createElement('textarea');
// let btnLeft = document.createElement('button');
// let btnRight = document.createElement('button');
// let btnSave = document.createElement('button');
// let div = document.createElement('div');
// let br = document.createElement('br')
//
//
// btnLeft.innerText = 'left';
// btnRight.innerText = 'right';
// btnSave.innerText = 'save';
//
//
//
// div.appendChild(btnLeft);
// div.appendChild(btnRight);
// div.appendChild(br);
// div.appendChild(text);
// div.appendChild(btnSave);
// document.body.appendChild(div);
//
// btnSave.onclick = () =>{
//     localStorage.setItem(localStorage.length +1, text.value)
// }
//
//
// btnLeft.onclick = () =>{
//     btnRight.style.visibility = 'visibility';
//     let  index;
//     for (const key in localStorage){
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === text.value){
//                 index = key;
//             }
//         }
//     }
//     if (index === '1'){
//         btnLeft.style.visibility = 'hidden';
//         return ;
//     }
//     text.value =  localStorage.getItem(index-1);
// }
//
//
// btnRight.onclick = () =>{
//     btnLeft.style.visibility = 'visibility';
//     let index;
//     for (const key in localStorage){
//         if (localStorage.hasOwnProperty(key)){
//             if (localStorage.getItem(key) === text.value){
//                 index = key;
//             }
//         }
//     }
//     if (index === localStorage.length.toString()){
//         btnRight.style.visibility = 'hidden';
//         return ;
//     }
//     text.value = localStorage.getItem(+index+1);
// }


// Task #4

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


const ARRAY_USERS = 'ARRAY_USERS';
let tempUser = {};
let form2 = document.forms.form2;
let content = document.getElementById('content');

form2.submit.onclick = ev =>{
    ev.preventDefault();
    let person = {...tempUser};
    tempUser = {};
    for (let i = 0; i < form2.children.length; i++) {
        const formElement = form2.children[i];
        if(formElement.name && formElement.type !== 'submit'){
            person[formElement.name] = formElement.value;
        }
    }
    console.log(person);
    if(!person.id){
        person.id = new Date().getTime();
    }
    save(person);
};
getDataFromStorage();

function save(user){
    if(localStorage.hasOwnProperty(ARRAY_USERS)){
        let arrUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
        let find = arrUsers.find(value => value.id === user.id);
        if(find){
            let filter = arrUsers.filter = arrUsers.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
        } else {
            arrUsers.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(arrUsers));
        }
    } else {
        localStorage.setItem(ARRAY_USERS,JSON.stringify([user]));
    }
}

function getDataFromStorage(){
    if(localStorage.hasOwnProperty(ARRAY_USERS)){
        let arrayUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
        for(const user of arrayUser){
            content.appendChild(createDivUser(user));
        }
    }
}

function createDivUser (user){
    let main = document.createElement('div');
    let flag = true;
    for (const key in user) {
        if(flag){
            let h3 = document.createElement('h3');
            h3.innerText = key + ' : ' + user[key];
            main.appendChild(h3);
            flag = false;
        } else{
            let p = document.createElement('p');
            p.innerText = key + ' : ' + user[key];
            main.appendChild(p);
        }
    }
    main.style = 'width: 300px; border: red solid 1px; float: left';
    let b1 = document.createElement('button');
    let b2 = document.createElement('button');
    b1.innerText = 'Edit';
    b2.innerText = 'Delete';
    b1.onclick = function (){
        editUser(user.id);
    }
    b2.onclick = function (){
        deleteUser(user.id);
    }

    main.appendChild(b1);
    main.appendChild(b2);
    return main;
}

function deleteUser(id){
    let parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    let filter = parse.filter(user => user.id !== id);
    localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
    location.reload();
}

function editUser(id){
    let parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    let user = parse.find(user => user.id === id);
    for (let i = 0; i < form2.children.length; i++) {
        const formElement = form2.children[i];
        if(formElement.name && formElement.type !== 'submit'){
            for (const key in user) {
                if(formElement.name === key){
                    formElement.value = user[key];
                }
            }
        }
    }
    tempUser = user;
}