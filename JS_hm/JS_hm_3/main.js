// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a = 0;
// let x = 4;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//   console.log('Невірно');
// }
//----------------------------------------------------------------------------------------------------------------------
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//----------------------------------------------------------------------------------------------------------------------
// let time = prompt('Уведіть час: ');
// if (time >= 0  && time <= 15) {
//     console.log('Перша чверть(1/4)');
// } else if (time >= 16 && time <= 30) {
//     console.log('Друга чверть(2/4)');
// } else if (time >= 31 && time <= 45) {
//     console.log('Третя чверть(3/4)');
// } else if (time >= 46 && time <= 59) {
//   console.log('Четверта чверть(4/4)');
// } else {
//   console.log('Невірно');
// }
//----------------------------------------------------------------------------------------------------------------------
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//----------------------------------------------------------------------------------------------------------------------
// let day = prompt('Уведіть день: ');
// if (day >= 1 && day <= 10) {
//   console.log('Перша декада(1/3)')
// } else if (day >= 11 && day <= 20) {
//     console.log('Друга декада(2/3)');
// } else if (day >= 21 && day <= 31) {
//     console.log('Третя декада(3/3)');
// } else {
//   console.log('Невірно');
// }
//----------------------------------------------------------------------------------------------------------------------
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
