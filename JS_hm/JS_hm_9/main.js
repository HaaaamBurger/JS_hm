//----------------------------------------------------------------------------------------------------------------------
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//----------------------------------------------------------------------------------------------------------------------
//Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//----------------------------------------------------------------------------------------------------------------------
// simpsons.forEach(member => {
//     let div = document.createElement('div');
//     div.classList = 'member';
//
//     let h2 = document.createElement('h2');
//     h2.innerText = `${member.name} ${member.surname}`;
//
//     let img  =document.createElement('img');
//     img.src = member.photo;
//
//     let ul = document.createElement('ul');
//     let li = document.createElement('li');
//     let li1 = document.createElement('li');
//     li.innerText = `${member.name} ${member.surname}`;
//     li1.innerText = `${member.info}`;
//
//     ul.append(li,li1);
//     div.append(h2,ul,img);
//     document.body.appendChild(div);
// });
//----------------------------------------------------------------------------------------------------------------------
// Цикл в циклі
// - Є масив
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
//----------------------------------------------------------------------------------------------------------------------
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// for (let course of coursesArray) {
//     let wrapper = document.createElement('div');
//     wrapper.classList.add('wrapper');
//     wrapper.style.cssText = 'padding: 10px;border: 5px solid red;margin-bottom: 10px';
//
//     let mainTitle = document.createElement('h2');
//     mainTitle.innerText = course.title;
//     mainTitle.style.cssText = 'text-align: center;margin: 0;border: 5px solid blue';
//
//     let preInfo = document.createElement('div');
//     preInfo.classList.add('preInfo');
//     preInfo.style.cssText = 'display: flex;margin-top: 10px;text-align: center';
//
//     let monthDuration = document.createElement('div');
//     monthDuration.classList.add('monthDuration');
//     monthDuration.innerText = course.monthDuration;
//     monthDuration.style.cssText = 'margin-right: 10px;width: 25%;border: 5px solid blue';
//
//     let hourDuration = document.createElement('div');
//     hourDuration.classList.add('hourDuration');
//     hourDuration.innerText = course.hourDuration
//     hourDuration.style.cssText = 'width: 75%;border: 5px solid blue';
//
//     let content = document.createElement('div');
//     content.classList.add('content');
//     content.style.cssText = 'padding: 10px;text-align: center;margin-top: 10px;border: 5px solid blue';
//
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     let p3 = document.createElement('p');
//     p1.style.cssText = 'margin: 0 0 10px 0;border: 5px solid blue';
//     p2.style.cssText = 'margin: 0 0 10px 0;border: 5px solid blue';
//     p3.style.cssText = 'margin: 0;border: 5px solid blue';
//
//     p1.innerText = course.modules[0];
//     p2.innerText = course.modules[1];
//     p3.innerText = course.modules[2];
//     content.append(p1, p2, p3);
//
//     preInfo.append(monthDuration, hourDuration);
//
//     let ul = document.createElement('ul');
//     for (let i = 3; i < course.modules.length; i++) {
//         let li = document.createElement('li');
//         li.innerText = course.modules[i];
//         ul.appendChild(li);
//     }
//
//     wrapper.append(mainTitle, preInfo, content, ul);
//
//     document.body.appendChild(wrapper);
// }
//----------------------------------------------------------------------------------------------------------------------
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//----------------------------------------------------------------------------------------------------------------------
// let wrapper = document.createElement('div');
// wrapper.classList.add('wrap','collapse','alpha','beta');
// wrapper.style.cssText = 'background-color: crimson;color: orange;font-size: 20px';
// let cloneWrapper = wrapper.cloneNode(true);
// document.body.append(wrapper,cloneWrapper);
//----------------------------------------------------------------------------------------------------------------------
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//----------------------------------------------------------------------------------------------------------------------
// let main = ['Main','Products','About us','Contacts'];
// for(let item of main){
//     let li = document.createElement('li');
//     li.innerText = item;
//     let ul = document.getElementsByTagName('ul')[0];
//     ul.appendChild(li);
// }
//----------------------------------------------------------------------------------------------------------------------
/*- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/
//----------------------------------------------------------------------------------------------------------------------
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for(let coursesItem of coursesAndDurationArray){
//     let div = document.createElement('div');
//     div.style.display = 'flex';
//
//     let pInfo = document.createElement('p');
//     pInfo.innerText = coursesItem.title;
//     pInfo.style.marginRight = '10px';
//
//     let pDuration = document.createElement('p');
//     pDuration.innerText = coursesItem.monthDuration;
//
//     let duration = coursesItem.monthDuration;
//     div.append(pInfo,pDuration);
//     document.body.appendChild(div);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//----------------------------------------------------------------------------------------------------------------------
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let coursesElement of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = coursesElement.title;
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = coursesElement.monthDuration;
//
//     div.append(h1,p);
//     document.body.appendChild(div);
// }
//----------------------------------------------------------------------------------------------------------------------
// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//----------------------------------------------------------------------------------------------------------------------
// let button = document.getElementsByTagName('button')[0];
// let id = document.getElementById('text');
// id.innerText = 'Hello World!';
// id.getAttribute('id');
// button.onclick = function (){
//     id.remove();
// }
//----------------------------------------------------------------------------------------------------------------------
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//----------------------------------------------------------------------------------------------------------------------
// let form = document.forms.f1;
// form.onsubmit = function (eventObj){
//     eventObj.preventDefault();
//     let age = this.userAge.value;
//     if(age >= 18){
//         console.log('Adult');
//     } else {
//         console.log('Child');
//     }
// }
//----------------------------------------------------------------------------------------------------------------------
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//----------------------------------------------------------------------------------------------------------------------
let form1 = document.forms.f2;
form1.onsubmit = function (eventObject) {
    eventObject.preventDefault();

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    let userLines = this.tableLines.value;
    let userCells = this.tableCell.value;
    let userText = this.tableObject.value;

    if (userLines !== 0 && userText !== '') {
        for (let i = 0; i < userLines; i++) {

            let div = document.createElement('div');
            div.style.display = 'flex';

            for (let j = 0; j < userCells; j++) {
                let p = document.createElement('p');
                p.innerText = userText;
                p.style.cssText = 'padding:5px;margin-left:5px;border: 2px solid black';
                div.appendChild(p);
            }

            wrapper.appendChild(div);
            document.body.appendChild(wrapper);
        }
    }
}
//----------------------------------------------------------------------------------------------------------------------