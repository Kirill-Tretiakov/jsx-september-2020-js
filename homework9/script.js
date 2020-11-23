// Треба реалізувати свій розпорядок дня.
//     Колбеками, промісами та асинк авейт.
//
//     В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання.
//     Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.


// Task #1 Callback

// function myDay(cb) {
//     console.log("Мій день");
//     console.log("Завнтаження розпорядку...")
//     setTimeout(() => {
//         cb(null, 'Проснувся');
//     }, 2000);
// }
//
//
// function breakFast(food,cb) {
//     setTimeout(() => {
//         if (!food) {
//             cb('Треба сходити в магазин за їжою');
//             return;
//         }
//         cb(null, 'Поснідав');
//     }, 3000);
// }
//
//
// function cleanTeeth(paste,cb) {
//     setTimeout(() => {
//         if (!paste) {
//             cb('Закінчилась паста');
//             return ;
//         }
//
//         cb(null, 'Почистив зуби');
//
//     }, 3500);
// }
//
// function watchYoutube(internet,cb){
//     setTimeout(()=>{
//         if (!internet){
//             cb('Немає інтрнету , іду гуляти');
//             return;
//         }
//         cb(null, 'Дивлюсь Okten');
//
//     },4000);
// }
//
// function goForAWalk(rain,cb){
//     setTimeout(()=>{
//         if (!rain){
//             cb('Сидемо в дома');
//             return;
//         }
//         cb(null,'Гуляємо!');
//     },5000);
// }
//
// function readBook(book,cb){
//     setTimeout(()=>{
//         if (!book){
//             cb('Готуємось до сна');
//             return ;
//         }
//         cb(null,'Читаємо книгу');
//     }, 5500);
// }
//
//
// function goBed(cb){
//     setTimeout(()=>{
//         cb(null,'Іду до ліжка');
//     }, 6000);
// }
//
//
// function end(cb){
//     setTimeout(()=>{
//         cb(null,'День закінчився');
//     }, 6500);
// }
//
//
// myDay((err, data) =>{
//     console.log(data);
//     breakFast(data,(err, data) =>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data);
//         cleanTeeth(data,(err, data) =>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log(data);
//             watchYoutube(data,(err, data) =>{
//                 if(err){
//                     console.log(err);
//                     return;
//                 }
//                 console.log(data);
//                 goForAWalk(data, (err, data) =>{
//                     if(err){
//                         console.log(err);
//                         return;
//                     }
//                     console.log(data);
//                     readBook(data, (err, data) =>{
//                         if(err){
//                             console.log(err);
//                             return;
//                         }
//                         console.log(data);
//                         goBed( (err, data) => {
//                             console.log(data);
//                             end( (err, data) => {
//                                 console.log(data);
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// Task #2 Promises


// function myDay () {
//     return new Promise((resolve) => {
//         console.log('Мій розпорядок дня!');
//         console.log('День почався');
//         setTimeout(() => {
//             resolve('Проснувся..');
//         }, 1000);
//     });
// };
//
// function breakfast(foods){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!foods) {
//                 reject('В холодильнику пуста');
//             }
//             resolve('Поснідав');
//         }, 2000);
//     });
// };
// function brushTeeth (brush){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!brush) {
//                 reject('Немає пасти');
//             }
//             resolve('Почистив зуби');
//         }, 3000);
//     });
// };
// function listenLectures(lecture){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Дивлюся лекції з JS');
//         }, 4000);
//     });
// };
// function goForAWalk (rain){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (rain) {
//                 reject('Сиджу вдома');
//             }
//             resolve('Іду гуляти');
//         }, 5000);
//     });
// };
// function watchVideo (internet){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!internet) {
//                 reject('Немає інтернету');
//             }
//             resolve('Дивлюся відео');
//         }, 6000);
//     });
// };
// function goToBed(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Іду  спати');
//         }, 7000);
//     });
// };
// function end(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Мій день закінчився!');
//         }, 8000);
//     });
// };
//
// myDay()
//     .then(wakeUpMes => {
//         console.log(wakeUpMes);
//         return brushTeeth(true);
// })
//     .then(brushTeethMes =>{
//     console.log(brushTeethMes);
//         return breakfast(true);
// })
//     .then(breakfastMes =>{
//         console.log(breakfastMes);
//         return listenLectures();
//     })
//     .then(listenLecturesMes =>{
//         console.log(listenLecturesMes);
//         return goForAWalk(false);
//     })
//     .then(goForAWalkMes =>{
//         console.log(goForAWalkMes);
//         return watchVideo(true);
//     })
//     .then(watchVideoMes =>{
//         console.log(watchVideoMes);
//         return goToBed();
//     })
//     .then(goToBedMes =>{
//         console.log(goToBedMes);
//     })
//     .catch(brushTeethMes =>{
//         console.log(brushTeethMes);
//     })
//     .catch(breakfastMes =>{
//         console.log(breakfastMes);
//     })
//     .catch(listenLecturesMes =>{
//         console.log(listenLecturesMes);
//     })
//     .catch(goForAWalkMes =>{
//         console.log(goForAWalkMes);
//     })
//     .catch(watchVideoMes =>{
//         console.log(watchVideoMes);
//     })
//     .finally(() =>{
//         console.log('Мій розпорядок дня закінчився!');
//     })

// Task #3 Promises


// function myDay () {
//     return new Promise((resolve) => {
//         console.log('Мій розпорядок дня!');
//         console.log('День почався');
//         setTimeout(() => {
//             resolve('Проснувся..');
//         }, 1000);
//     });
// };
//
// function breakfast(foods){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!foods) {
//                 reject('В холодильнику пуста');
//             }
//             resolve('Поснідав');
//         }, 2000);
//     });
// };
// function brushTeeth (brush){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!brush) {
//                 reject('Немає пасти');
//             }
//             resolve('Почистив зуби');
//         }, 3000);
//     });
// };
// function listenLectures(lecture){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Дивлюся лекції з JS');
//         }, 4000);
//     });
// };
// function goForAWalk (rain){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (rain) {
//                 reject('Сиджу вдома');
//             }
//             resolve('Іду гуляти');
//         }, 5000);
//     });
// };
// function watchVideo (internet){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!internet) {
//                 reject('Немає інтернету');
//             }
//             resolve('Дивлюся відео');
//         }, 6000);
//     });
// };
// function goToBed(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Іду  спати');
//         }, 7000);
//     });
// };
// function end(){
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             resolve('Мій день закінчився!');
//         }, 8000);
//     });
// };
//
// async function day(){
//     try {
//         const myDayMes = await myDay();
//         console.log(myDayMes);
//         const brushTeethMes = await brushTeeth(true);
//         console.log(brushTeethMes);
//         const breakfastMes = await breakfast(true);
//         console.log(breakfastMes);
//         const listenLecturesMes = await listenLectures();
//         console.log(listenLecturesMes);
//         const goForAWalkMes = await goForAWalk(false);
//         console.log(goForAWalkMes);
//         const watchVideoMes = await watchVideo(true);
//         console.log(watchVideoMes);
//         const goToBedMes = await goToBed();
//         console.log(goToBedMes);
//         const endMes = await end();
//         console.log(endMes);
//     } catch (err){
//         console.log(err);
//     }
// }
// day();