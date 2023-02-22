//----------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//----------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//----------------------------------------------------------------------------------------------------------------------
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let user1 = new User(1, 'Liam', 'Smith', 'liamSmith@gmail.com', '+14844731851');
// let user2 = new User(2, 'Olivia', 'Johnson', 'oliviaJhonson@gmail.com', '+18143008938');
// let user3 = new User(3, 'Noah', 'Williams', 'noahWilliams@gmail.com', '+14844731796');
// let user4 = new User(4, 'Emma', 'Brown', 'emmaBrown@gmail.com', '+14844731851');
// let user5 = new User(5, 'Oliver', 'Jones', 'oliverJones@gmail.com', '+18143008938');
// let user6 = new User(6, 'Charlotte', 'Garcia', 'charlotteGarcia@gmail.com', '+14842918848');
// let user7 = new User(7, 'Elijah', 'Miller', 'elijahMiller@gmail.com', '+15852826914');
// let user8 = new User(8, 'Amelia', 'Davis', 'ameliaDavis@gmail.com', '+14845219643');
// let user9 = new User(9, 'James', 'Rodriguez', 'jamesRodriguez@gmail.com', '+16102458090');
// let user10 = new User(10, 'Ava', 'Martinez', 'avaMartinez@gmail.com', '+14844578875');
// let UserObject = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// console.log(UserObject);
//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//----------------------------------------------------------------------------------------------------------------------
// let UserIdFilter = UserObject.filter(item => item.id % 2 === 0);
// console.log(UserIdFilter);
//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//----------------------------------------------------------------------------------------------------------------------
// let UserIdSort = UserObject.sort((item_f,item_s) => item_f.id - item_s.id);
// console.log(UserIdSort);
//----------------------------------------------------------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//----------------------------------------------------------------------------------------------------------------------
// class Client{
//     constructor(id,name,surname,email,phone,order=[]) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let User = new Client(1,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Banana','Scissors','Engine','Oleg']);
// let User1 = new Client(2,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Banana','Scissors','Engine']);
// let User2 = new Client(3,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Banana','Engine']);
// let User3 = new Client(4,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Engine']);
// let User4 = new Client(5,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Banana','Scissors','Engine','Bike','Pen']);
// let User5 = new Client(6,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Banana','Scissors','Engine']);
// let User6 = new Client(7,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Banana','Scissors','Engine','Traktor']);
// let User7 = new Client(8,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Banana']);
// let User8 = new Client(9,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Banana','Scissors']);
// let User9 = new Client(10,'Alex','Melnyk','kunlem2003y@gmail.com','0682289238', ['Banana','Scissors','Engine']);
// let clients = [User,User1,User2,User3,User4,User5,User6,User7,User8,User9];
// let sortedClients = clients.sort((item_f,item_s)=> item_f.order.length - item_s.order.length);
// console.log(sortedClients);
//----------------------------------------------------------------------------------------------------------------------
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//----------------------------------------------------------------------------------------------------------------------
// function CarCreator(model,producer,data,speed,capacity){
//     this.model = model;
//     this.producer = producer;
//     this.data = data;
//     this.speed = speed;
//     this.capacity = capacity;
//     this.drive = function (){
//         console.log(`Їдемо зі швідкистю ${this.speed}`);
//     }
//     this.info = function (){
//         console.log(this);
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         this.speed = newSpeed;
//     }
//     this.changeYear = function (newValue){
//         this.data = newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
// let newCar = new CarCreator('Model X','Tesla','2019','240','80Kw');
// newCar.addDriver({name:'Biceps',age: 90});
// console.log(newCar);
//----------------------------------------------------------------------------------------------------------------------
// class CarObject{
//     constructor(model,producer,data,speed,engineCapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.data = data;
//         this.speed = speed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.speed}`);
//     }
//     info(){
//         console.log(this);
//     }
//     increaseMaxSpeed(newSpeed){
//         this.speed = newSpeed;
//     }
//     changeYear(newValue){
//         this.data = newValue;
//     }
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
// let newCar = new CarObject('Model X','Tesla','2019','240','Electric');
// newCar.addDriver({name:'Alex',age: 19})
// console.log(newCar);
//----------------------------------------------------------------------------------------------------------------------
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//----------------------------------------------------------------------------------------------------------------------
class CinderellaCreator {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

let pop1 = new CinderellaCreator('Cinderella', 25, 38);
let pop2 = new CinderellaCreator('Cinderella', 21, 31);
let pop3 = new CinderellaCreator('Cinderella', 19, 29);
let pop4 = new CinderellaCreator('Cinderella', 28, 30);
let pop5 = new CinderellaCreator('Cinderella', 27, 39);
let pop6 = new CinderellaCreator('Cinderella', 30, 41);
let pop7 = new CinderellaCreator('Cinderella', 20, 35);
let pop8 = new CinderellaCreator('Cinderella', 24, 32);
let pop9 = new CinderellaCreator('Cinderella', 26, 37);
let pop10 = new CinderellaCreator('Cinderella', 23, 34);
let CinderellaArray = [pop1, pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9, pop10];

class Prince extends CinderellaCreator {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}
let prince = new Prince('Prince', 26, 32);
// // for(let item of CinderellaArray){
// //     if(item.legSize === prince.footSize){
// //         console.log(item);
// //     }
// // }
let findCinderelle = CinderellaArray.find(value => value.legSize === prince.footSize);
//----------------------------------------------------------------------------------------------------------------------