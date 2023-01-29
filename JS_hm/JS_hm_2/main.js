// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let main = [1,'word',3,true,5,'number',7,false,9,'bool'];
console.log(main);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let f_object = {
  title : 'FairyTail',
  pageCount : 356,
  genre : 'Adventures'
}
let s_object = {
  title : '翻訳しないで',
  pageCount : 1024,
  genre : 'Romance'
}
let t_object = {
  title : 'SevenDeadlySins',
  pageCount : 450,
  genre : 'Horror'
}
  console.log(f_object,s_object,t_object);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let v_object = {
  title : 'JujutsuKaisen',
  pageCount : 982,
  genre : 'SF',
  authors : [
    {
      Name : 'Robert',
      Age : 47
    }
  ]
}
let x_object = {
  title : 'RockPaperScissors',
  pageCount : 27,
  genre : 'Games',
  authors : [
    {
      Name : 'Alex',
      Age : 32
    }
  ]
}
let n_object = {
  title : 'クソ野郎',
  pageCount : 2540,
  authors : [
    {
      Name : 'Alan',
      Age : 62
    }
  ]
}
console.log(v_object,x_object,n_object);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
  {name : 'Sasha',username : 'Hamburger',password : 4589},
  {name : 'Viktor',username : 'Viktro2003',password : 9821},
  {name : 'Maks',username : 'Cheburek',password : 6645},
  {name : 'Stas',username: 'MiKrochelik',password : 3492},
  {name : 'Vova',username : 'Lowskill23',password : 9123},
  {name : 'Ebrahim',username : 'Pashtet_102',password : 1923},
  {name : 'Valentin',username : 'Krosover_%(31)',password: 9043},
  {name : 'Rostislav',usrename : 'Pelosos_45',password : 2786},
  {name : 'Erzhan',usrename : 'Vstavay_davay',password : 1094},
  {name : 'Taras',usrename : '$Vishnya',password : 5812}
];
console.log(user[0].password,user[1].password,user[2].password,user[3].password,user[4].password,user[5].password,user[6].password,user[7].password,user[8].password,user[9].password);
