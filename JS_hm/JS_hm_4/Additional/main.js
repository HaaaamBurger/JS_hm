//----------------------------------------------------------------------------------------------------------------------
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//----------------------------------------------------------------------------------------------------------------------
// let main = [1, 2, 3, 4, 5];
// for (let i of main) {
//     console.log(i);
// }
//----------------------------------------------------------------------------------------------------------------------
// let main = ['One', 'Two', 'Three', 'Four', 'Five'];
// for (let i of main) {
//     console.log(i);
// }
//----------------------------------------------------------------------------------------------------------------------
// let main = [1,2,3,4,5,'One','Two','Three','Four','Five',true,false,true,false,true];
// for (let i = 0; i < main.length; i++) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
//--Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//----------------------------------------------------------------------------------------------------------------------
// let main = [];
// for (let i = 0;i < 5;i++){
//     main[i] = prompt('Input number');
//     if (main[4]){
//         console.log(main);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//----------------------------------------------------------------------------------------------------------------------
// 1. перебрати його циклом while
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < main.length) {
//     console.log(main[i]);
//     i++
// }
//----------------------------------------------------------------------------------------------------------------------
// 2. перебрати його циклом for
//----------------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < main.length; i++) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 1;
// while (i < main.length) {
//     if (i % 2 !== 0) {
//         console.log(main[i]);
//     }
//     i++;
// }
//----------------------------------------------------------------------------------------------------------------------
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < main.length; i++) {
//     if (i % 2 !== 0){
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 1;
// while (i < main.length) {
//     if (i % 2 === 0) {
//         console.log(main[i]);
//     }
//     i++;
// }
//----------------------------------------------------------------------------------------------------------------------
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 1; i < main.length; i++) {
//     if (i % 2 === 0) {
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 7. замінити кожне число кратне 3 на слово "okten"
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 1; i < main.length; i++) {
//     if (i % 3 === 0) {
//         main[i] = 'okten';
//     }
// }
// for (let i of main) {
//     console.log(i);
// }
//----------------------------------------------------------------------------------------------------------------------
// 8. вивести масив в зворотньому порядку.
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = main.length - 1; i >= 0; i--){
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//----------------------------------------------------------------------------------------------------------------------
// 7. замінити кожне число кратне 3 на слово "okten"
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = main.length - 1; i >= 1; i--) {
//     if (i % 3 === 0) {
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = main.length - 1; i >= 1; i--) {
//     if (i % 2 === 0) {
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = main.length -1;
// while (i >= 1) {
//     if (i % 2 === 0){
//         console.log(main[i]);
//     }
//     i--;
// }
//----------------------------------------------------------------------------------------------------------------------
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = main.length - 1; i >= 1; i--) {
//     if (i % 2 !== 0) {
//         console.log(main[i]);
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = main.length - 1;
// while (i >= 1) {
//     if (i % 2 !== 0) {
//         console.log(main[i]);
//     }
//     i--;
// }
//----------------------------------------------------------------------------------------------------------------------
// 2. перебрати його циклом for
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = main.length - 1; i >= 0; i--) {
//     console.log(main[i]);
// }
//----------------------------------------------------------------------------------------------------------------------
// 1. перебрати його циклом while
//----------------------------------------------------------------------------------------------------------------------
// let main = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = main.length - 1;
// while (i >= 0) {
//     console.log(main[i]);
//     i--;
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//----------------------------------------------------------------------------------------------------------------------