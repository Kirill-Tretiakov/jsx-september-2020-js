// Task #1

// ==============================================
/*
-  Створити функцію конструктор для об'єкту який описує теги
Властивості
-назва тегу
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результату
{
    titleOfTag: 'area',
        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {/!*some props and values*!/},
    {/!*...*!/},
    {/!*...*!/},
]

}*/

// ==============================================

//
// function  Tag(titleOfTag, action, attrs){
//     this.titleOfTag = titleOfTag || 'No Title';
//     this.action = action || 'No action';
//     this.attrs = attrs || 'No attrs';
// }
//
// let attributesOfA = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
//
// let attributesOfDiv = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ];
//
// let attributesOfH1 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет віравнивание заголовка'},
// ];
//
// let attributesOfSpan = [
//     {titleOfAttr: 'universal', actionOfAttr: 'Для этого тега доступны универсальные атрибуты и события.'},
// ];
//
// let attributesOfInput = [
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить' +
//             ' через поле загрузки файлов.'},
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
//     {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'},
// ];
//
// let attributesOfForm = [
//     {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать ' +
//             'и обрабатывать данные.'},
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//     {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей форм'},
// ];
//
// let attributesOfOption = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
// ];
//
// let attributesOfSelect = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
// ];
//
// let a =  new Tag('a',
//     'Тег является одним из важных элементов HTML и предназначен для создания ссылок',
//     attributesOfA);
//
// let div = new Tag('div',
//     'Элемент является блочным элементом и предназначен для выделения фрагмента документа ' +
//     'с целью изменения вида содержимого',
//     attributesOfDiv);
//
// let h1 =  new Tag('h1',
//     'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, ' +
//     'расположенной после заголовка.',
//     attributesOfH1);
//
// let span =  new Tag('span',
//     'Тег  span предназначен для определения строчных элементов документа.',
//     attributesOfSpan);
//
// let input = new Tag('Input',
//     'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса ' +
//     'и обеспечить взаимодействие с пользователем.',
//     attributesOfInput);
//
// let form = new Tag('form',
//     'Тег form устанавливает форму на веб-странице. Форма предназначена для обмена данными между ' +
//     'пользователем и сервером.',
//     attributesOfForm);
//
// let option =  new Tag('option',
//     'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select',
//     attributesOfOption);
//
// let select = new Tag('select',
//     'Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список ' +
//     'с одним или множественным выбором, как показано далее.',
//     attributesOfSelect);
//
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);


// Task #2

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// ==============================================

// class Tag {
//     constructor(titleOfTag, action, attrs) {
//         this.titleOfTag = titleOfTag || 'No Title';
//         this.action = action || 'No action';
//         this.attrs = attrs || 'No attrs';
//     }
// }
//
// let attributesOfA = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
//
// let attributesOfDiv = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
// ];
//
// let attributesOfH1 = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет віравнивание заголовка'},
// ];
//
// let attributesOfSpan = [
//     {titleOfAttr: 'universal', actionOfAttr: 'Для этого тега доступны универсальные атрибуты и события.'},
// ];
//
// let attributesOfInput = [
//     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить' +
//             ' через поле загрузки файлов.'},
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание изображения.'},
//     {titleOfAttr: 'alt', actionOfAttr: 'Альтернативный текст для кнопки с изображением.'},
// ];
//
// let attributesOfForm = [
//     {titleOfAttr: 'accept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать ' +
//             'и обрабатывать данные.'},
//     {titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
//     {titleOfAttr: 'autocomplete', actionOfAttr: 'Включает автозаполнение полей форм'},
// ];
//
// let attributesOfOption = [
//     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
//     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
//     {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
// ];
//
// let attributesOfSelect = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
//     {titleOfAttr: 'autofocus', actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'},
//     {titleOfAttr: 'disabled', actionOfAttr: 'Блокирует доступ и изменение элемента.'},
// ];
//
// let a =  new Tag('a',
//     'Тег является одним из важных элементов HTML и предназначен для создания ссылок',
//     attributesOfA);
//
// let div = new Tag('div',
//     'Элемент является блочным элементом и предназначен для выделения фрагмента документа ' +
//     'с целью изменения вида содержимого',
//     attributesOfDiv);
//
// let h1 =  new Tag('h1',
//     'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, ' +
//     'расположенной после заголовка.',
//     attributesOfH1);
//
// let span =  new Tag('span',
//     'Тег  span предназначен для определения строчных элементов документа.',
//     attributesOfSpan);
//
// let input = new Tag('Input',
//     'Тег input является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса ' +
//     'и обеспечить взаимодействие с пользователем.',
//     attributesOfInput);
//
// let form = new Tag('form',
//     'Тег form устанавливает форму на веб-странице. Форма предназначена для обмена данными между ' +
//     'пользователем и сервером.',
//     attributesOfForm);
//
// let option =  new Tag('option',
//     'Тег option определяет отдельные пункты списка, создаваемого с помощью контейнера select',
//     attributesOfOption);
//
// let select = new Tag('select',
//     'Тег select позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список ' +
//     'с одним или множественным выбором, как показано далее.',
//     attributesOfSelect);
//
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);


// Task #3

// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
//     model: 'GLE202',
//     manufacturer: 'mercedes',
//     year: 2010,
//     maxSpeed: 320,
//     engineVolume: 6.3
// }
//
// function drive() {
//     console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`);
// }
//
// function info() {
//     console.log(car);
// }
//
// function increaseMaxSpeed(newSpeed) {
//     console.log(car.maxSpeed + newSpeed)
// }
//
// function changeYear(NewValue) {
//     console.log(NewValue)
// }
//
// function addDriver(driver) {
//     console.log(driver)
// }
//
// let driver = {
//     name: 'Kirill',
//     age: 19
// }
//
// console.log(car);
// drive();
// info();
// increaseMaxSpeed(60);
// changeYear(2020);
// addDriver(driver);

// Task #4

// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// function Car(model,manufacturer,year,maxSpeed,engineVolume) {
//
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         console.log(this.model, this.manufacturer, this.year, this.maxSpeed, this.engineVolume);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxSpeed += newSpeed)
//     }
//
//     this.changeYear = function (NewValue) {
//         console.log(this.year = NewValue);
//     }
//
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver);
//     }
//
// }
//
//
// let car1 = new Car("9834983", "mercedes", 2008, 220, 2.4);
//
// let driver = {
//     name: 'Kirill',
//     age: 19
// };
//
//
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(60);
// car1.changeYear(2020);
// car1.addDriver(driver);
// console.log(car1);


// Task #5

// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// class  Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     };
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info() {
//         console.log(this.model, this.manufacturer, this.year, this.maxSpeed, this.engineVolume);
//     };
//
//    increaseMaxSpeed(newSpeed) {
//         console.log(this.maxSpeed += newSpeed)
//    };
//
//    changeYear(NewValue) {
//        console.log(this.year = NewValue);
//    };
//
//    addDriver(driver) {
//        console.log(this.driver = driver);
//    };
//
// }
//
// let car = new Car("9834983", "mercedes", 2008, 220, 2.4);
//
// let driver = {
//     name: 'Kirill',
//     age: 19
// };
//
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(60);
// car.changeYear(2020);
// car.addDriver(driver);
// console.log(car);
//

// Task #6

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принц


//
// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// class  Prince extends Cinderella{
//     constructor(name,age,shoes) {
//         super();
//         this.shoe =shoes;
//     }
//
//     searchCinderella(){
//         let search = null;
//         for (const arrCinderella of arrCinderellas) {
//             if (arrCinderella.footSize ===this.shoe)
//                 search =arrCinderella;
//         }
//         console.log(`Cinderellas name : ${search.name} `);
//         console.log(search);
//     }
//
// }
//
// let cinderella1 =  new Cinderella('Lera', 17, 36);
// let cinderella2 =  new Cinderella('Marina', 16, 38);
// let cinderella3 =  new Cinderella('Liza', 17, 37);
// let cinderella4 =  new Cinderella('Nastya', 15, 35);
// let cinderella5 =  new Cinderella('Varonika', 3, 15);
// let cinderella6 =  new Cinderella('Karina', 24, 37);
// let cinderella7 =  new Cinderella('Olha', 19, 33);
// let cinderella8 =  new Cinderella('Olena', 13, 32);
// let cinderella9 =  new Cinderella('Masha', 18, 35);
// let cinderella10 =  new Cinderella('Dasha', 20, 37);
//
// let arrCinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7,
//     cinderella8, cinderella9, cinderella10];
//
// let prince = new Prince('Kirill', 17,36);
//
// prince.searchCinderella(arrCinderellas);


// Task #7

// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Cinderella(name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// function Prince(name,age,shoes){
//     this.name = name;
//     this.age = age;
//     this.shoes = shoes;
//
//     this.searchCinderella = function (){
//         let search = null;
//         for (const arrCinderella of arrCinderellas) {
//             if (arrCinderella.footSize ===this.shoes)
//                 search =arrCinderella;
//         }
//         console.log(`Cinderellas name : ${search.name}`);
//         console.log(search);
//     }
// }
//
// let cinderella1 =  new Cinderella('Lera', 17, 36);
// let cinderella2 =  new Cinderella('Marina', 16, 38);
// let cinderella3 =  new Cinderella('Liza', 17, 37);
// let cinderella4 =  new Cinderella('Nastya', 15, 35);
// let cinderella5 =  new Cinderella('Varonika', 3, 15);
// let cinderella6 =  new Cinderella('Karina', 24, 37);
// let cinderella7 =  new Cinderella('Olha', 19, 33);
// let cinderella8 =  new Cinderella('Olena', 13, 32);
// let cinderella9 =  new Cinderella('Masha', 18, 35);
// let cinderella10 =  new Cinderella('Dasha', 20, 37);
//
// let arrCinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7,
//     cinderella8, cinderella9, cinderella10];
//
// let prince = new Prince('Kirill', 17,36);
//
// prince.searchCinderella(arrCinderellas);