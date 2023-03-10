// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//----------------------------------------------------------------------------------------------------------------------
// 1. Створити пустий масив та :
//----------------------------------------------------------------------------------------------------------------------
// let main = [];
// for (let pairN = 0; pairN <= 50; pairN += 2) {
//     main[pairN] = pairN;
// }
// for (let oddN = 1; oddN < 50; oddN += 2) {
//     main[oddN] = oddN;
// }
// for (let randF = 51; randF <= 70; randF++) {
//     main[randF] = Math.floor(Math.random() * 20) + 1;
// }
// for (let randS = 71; randS <= 90; randS++) {
//     main[randS] = Math.floor(Math.random() * (732 - 8) + 1);
// }
//----------------------------------------------------------------------------------------------------------------------
// 2. Вивести за допомогою console.log кожен третій елемен
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < main.length;i += 3) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < main.length; i += 3) {
//     if (main[i] % 2 === 0) {
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
//----------------------------------------------------------------------------------------------------------------------
// let newArray = [];
// for (let i = 0; i < main.length; i += 3) {
//     if (main[i] % 2 === 0) {
//         newArray[i] = main[i];
//         console.log(newArray[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < main.length; i++) {
//     if (main[i + 1] % 2 === 0) {
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//----------------------------------------------------------------------------------------------------------------------
// let res = 0;
// let main = [100, 250, 50, 168, 120, 345, 188];
// for (let i = 0; i < main.length; i++) {
//     res += main[i];
// }
// console.log(res / main.length);
//----------------------------------------------------------------------------------------------------------------------
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//----------------------------------------------------------------------------------------------------------------------
// let main = [];
// let array = [];
// for (let i = 0; i < 10; i++) {
//     main[i] = (Math.floor(Math.random() * 10) + 1)*6;
//     array[i] = main[i];
//     console.log(array[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//----------------------------------------------------------------------------------------------------------------------
// let main = ['JS', 'C++', 355, true, 2345, 'Java', false, 134];
// let array = [];
// for (let i = 0; i < main.length; i++) {
//     if (typeof main[i] === "number") {
//         array[i] = main[i];
//     }
// }
// console.log(array);
//----------------------------------------------------------------------------------------------------------------------
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//----------------------------------------------------------------------------------------------------------------------
// let usersWithCities = [];
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// for (let i = 0; i < citiesWithId.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (citiesWithId[i].user_id < citiesWithId[j].user_id) {
//             let temp = citiesWithId[i];
//             citiesWithId[i] = citiesWithId[j];
//             citiesWithId[j] = temp;
//         }
//     }
// }
// for (let i = 0; i < usersWithId.length; i++) {
//     let data =  {
//                 id: usersWithId[i].id,
//                 name: usersWithId[i].name,
//                 age: usersWithId[i].age,
//                 status: usersWithId[i].status,
//                 address: {
//                     user_id: citiesWithId[i].user_id,
//                     country: citiesWithId[i].country,
//                     city: citiesWithId[i].city
//                 }
//             }
//             usersWithCities.push(data);
// }
// console.log(usersWithCities);
//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//----------------------------------------------------------------------------------------------------------------------
// let main = [];
// for (let i = 0; i < 10; i++) {
//     main[i] = (Math.floor(Math.random() * 10) + 1);
//     if (main[i] % 2 === 0) {
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//----------------------------------------------------------------------------------------------------------------------
// let main = [];
// let array = [];
// for (let i = 0; i < 10; i++) {
//     main[i] = (Math.floor(Math.random() * 10) + 1);
//     array[i] = main[i];
// }
// console.log(array);
//----------------------------------------------------------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//----------------------------------------------------------------------------------------------------------------------
// let main = ['a', 'b', 'c'];
// let string = '';
// for (let i = 0; i < main.length; i++) {
//     string += main[i];
// }
// console.log(string);
//----------------------------------------------------------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//----------------------------------------------------------------------------------------------------------------------
// let main = ['a', 'b', 'c'];
// let string = '';
// let i = 0;
// while (i < main.length) {
//     string += main[i];
//     i++;
// }
// console.log(string);
//----------------------------------------------------------------------------------------------------------------------
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//----------------------------------------------------------------------------------------------------------------------
// let main = ['a', 'b', 'c'];
// let string = '';
// for (let field of main) {
//     string += field;
// }
// console.log(string);
//----------------------------------------------------------------------------------------------------------------------