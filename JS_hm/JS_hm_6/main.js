//----------------------------------------------------------------------------------------------------------------------
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//----------------------------------------------------------------------------------------------------------------------
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//----------------------------------------------------------------------------------------------------------------------
// let main = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let item of main) {
//     console.log(`${item} - ${item.length}`);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//----------------------------------------------------------------------------------------------------------------------
// let main = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let item of main) {
//     console.log(item.toUpperCase());
// }
//----------------------------------------------------------------------------------------------------------------------
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//----------------------------------------------------------------------------------------------------------------------
// let main = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
// for (let item of main) {
//     console.log(item.toLowerCase());
// }
//----------------------------------------------------------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//----------------------------------------------------------------------------------------------------------------------
// let str = ' dirty string   ';
// console.log(str.substring(1, 13));
//----------------------------------------------------------------------------------------------------------------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//----------------------------------------------------------------------------------------------------------------------
// let str = 'Ревуть воли як ясла повні';
// let stringToArray = string => string.split(' ');
// console.log(stringToArray(str));
//----------------------------------------------------------------------------------------------------------------------
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//----------------------------------------------------------------------------------------------------------------------
// let main = [10,8,-7,55,987,-1011,0,1050,0];
// let map = main.map((item) => item + '');
// console.log(map);
//----------------------------------------------------------------------------------------------------------------------
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//----------------------------------------------------------------------------------------------------------------------
// let main = [32,9,45,3,12,5,67];
// let sort = main.sort((item_f,item_s) => item_f - item_s);
// console.log(sort);
//----------------------------------------------------------------------------------------------------------------------
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

//----------------------------------------------------------------------------------------------------------------------
// let  coursesDuration= [
//     {title: 'JavaScript Complex', months: 5},
//     {title: 'Java Complex', months: 6},
//     {title: 'Python Complex', months: 6},
//     {title: 'QA Complex', months: 4},
//     {title: 'FullStack', months: 7},
//     {title: 'Frontend', months: 4}
// ];
// let sortSpad = coursesDuration.sort((item_f,item_s) => item_s.months - item_f.monthDuration);
// sortSpad = coursesDuration.filter((item) => item.months > 5);
// console.log(sortSpad);
//----------------------------------------------------------------------------------------------------------------------
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//----------------------------------------------------------------------------------------------------------------------
let cards = [
    {cardSuit : 'Spade',value : '6', color : 'black'},
    {cardSuit : 'Diamond',value : '6', color : 'red'},
    {cardSuit : 'Heart',value : '6', color : 'red'},
    {cardSuit : 'Clubs',value : '6', color : 'black'},
    {cardSuit : 'Spade',value : '7', color : 'black'},
    {cardSuit : 'Diamond',value : '7', color : 'red'},
    {cardSuit : 'Heart',value : '7', color : 'red'},
    {cardSuit : 'Clubs',value : '7', color : 'black'},
    {cardSuit : 'Spade',value : '8', color : 'black'},
    {cardSuit : 'Diamond',value : '8', color : 'red'},
    {cardSuit : 'Heart',value : '8', color : 'red'},
    {cardSuit : 'Clubs',value : '8', color : 'black'},
    {cardSuit : 'Spade',value : '9', color : 'black'},
    {cardSuit : 'Diamond',value : '9', color : 'red'},
    {cardSuit : 'Heart',value : '9', color : 'red'},
    {cardSuit : 'Clubs',value : '9', color : 'black'},
    {cardSuit : 'Spade',value : '10', color : 'black'},
    {cardSuit : 'Diamond',value : '10', color : 'red'},
    {cardSuit : 'Heart',value : '10', color : 'red'},
    {cardSuit : 'Clubs',value : '10', color : 'black'},
    {cardSuit : 'Spade',value : 'Jack', color : 'black'},
    {cardSuit : 'Diamond',value : 'Jack', color : 'red'},
    {cardSuit : 'Heart',value : 'Jack', color : 'red'},
    {cardSuit : 'Clubs',value : 'Jack', color : 'black'},
    {cardSuit : 'Spade',value : 'Queen', color : 'black'},
    {cardSuit : 'Diamond',value : 'Queen', color : 'red'},
    {cardSuit : 'Heart',value : 'Queen', color : 'red'},
    {cardSuit : 'Clubs',value : 'Queen', color : 'black'},
    {cardSuit : 'Spade',value : 'King', color : 'black'},
    {cardSuit : 'Diamond',value : 'King', color : 'red'},
    {cardSuit : 'Heart',value : 'King', color : 'red'},
    {cardSuit : 'Clubs',value : 'King', color : 'black'},
    {cardSuit : 'Spade',value : 'Ace', color : 'black'},
    {cardSuit : 'Diamond',value : 'Ace', color : 'red'},
    {cardSuit : 'Heart',value : 'Ace', color : 'red'},
    {cardSuit : 'Clubs',value : 'Ace', color : 'black'},
]
//----------------------------------------------------------------------------------------------------------------------
// - знайти піковий туз
//----------------------------------------------------------------------------------------------------------------------
// let spadeAce = cards.find(array => array.cardSuit === 'Spade' && array.value === 'Ace');
// console.log(spadeAce);
//----------------------------------------------------------------------------------------------------------------------
// - всі шістки
//----------------------------------------------------------------------------------------------------------------------
// let sixFind = cards.filter(value => value.value === '6');
// console.log(sixFind);
//----------------------------------------------------------------------------------------------------------------------
// - всі червоні карти
//----------------------------------------------------------------------------------------------------------------------
// let allRed = cards.filter(value => value.color === 'red');
// console.log(allRed);
//----------------------------------------------------------------------------------------------------------------------
// - всі буби
//----------------------------------------------------------------------------------------------------------------------
// let allSpade = cards.filter(value => value.cardSuit === 'Spade');
// console.log(allSpade);
//----------------------------------------------------------------------------------------------------------------------
// - всі трефи від 9 та більше
//----------------------------------------------------------------------------------------------------------------------
// let allSpadeNine = cards.filter(value => value.cardSuit === 'Clubs' && value.value >= '9');
// console.log(allSpadeNine);
//----------------------------------------------------------------------------------------------------------------------