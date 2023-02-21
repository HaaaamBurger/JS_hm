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
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'Liam', 'Smith', 'liamSmith@gmail.com', '+14844731851');
let user2 = new User(2, 'Olivia', 'Johnson', 'oliviaJhonson@gmail.com', '+18143008938');
let user3 = new User(3, 'Noah', 'Williams', 'noahWilliams@gmail.com', '+14844731796');
let user4 = new User(4, 'Emma', 'Brown', 'emmaBrown@gmail.com', '+14844731851');
let user5 = new User(5, 'Oliver', 'Jones', 'oliverJones@gmail.com', '+18143008938');
let user6 = new User(6, 'Charlotte', 'Garcia', 'charlotteGarcia@gmail.com', '+14842918848');
let user7 = new User(7, 'Elijah', 'Miller', 'elijahMiller@gmail.com', '+15852826914');
let user8 = new User(8, 'Amelia', 'Davis', 'ameliaDavis@gmail.com', '+14845219643');
let user9 = new User(9, 'James', 'Rodriguez', 'jamesRodriguez@gmail.com', '+16102458090');
let user10 = new User(10, 'Ava', 'Martinez', 'avaMartinez@gmail.com', '+14844578875');
let UserObject = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// console.log(UserObject);
//----------------------------------------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//----------------------------------------------------------------------------------------------------------------------
// let UserIdFilter = UserObject.filter(item => item.id % 2 === 0);
// console.log(UserIdFilter);
//----------------------------------------------------------------------------------------------------------------------
