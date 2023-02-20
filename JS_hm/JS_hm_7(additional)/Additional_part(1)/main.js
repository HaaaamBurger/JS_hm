// ---------------------------------------------------------------------------------------------------------------------
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// let userInfo = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
// ---------------------------------------------------------------------------------------------------------------------
// function GeoConstructor(lat,lng) {
//     this.lat = lat;
//     this.lng = lng;
// }
// function AddressConstructor(street,suite, city,zipcode,lat,lng) {
//     this.street = street;
//     this.suite = suite;
//     this.city = city;
//     this.zipcode = zipcode;
//     this.geo = new GeoConstructor(lat,lng);
// }
// function CompanyConstructor(name,catchPhrase,bs) {
//     this.name = name;
//     this.catchPhrase = catchPhrase;
//     this.bs = bs;
// }
// function userConstructor(id,name,username,email,address,phone,website,company) {
//     return {
//         id,
//         name,
//         username,
//         email,
//         address,
//         phone,
//         website,
//         company
//     }
// }
//
// let res = userConstructor(5,'Alex','HaaaamBurger','kunlem2004y@gmail.com',
// new AddressConstructor('Sonyachna','14','Lviv','79056','-23.34312','-12.354352'),
//     '0682279238','https://github.com/HaaaamBurger',
//     new CompanyConstructor('Okten','Hello World!','harness real-time e-markets')
// );
// console.log(res);
// ---------------------------------------------------------------------------------------------------------------------
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
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
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
// ---------------------------------------------------------------------------------------------------------------------
function Constructor() {
    return {

    }
}
// ---------------------------------------------------------------------------------------------------------------------