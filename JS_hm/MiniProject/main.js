//----------------------------------------------------------------------------------------------------------------------
// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html, котра має детальну інфу про поточний пост.
//
//     На странице user-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     user-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
//----------------------------------------------------------------------------------------------------------------------
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((user)=>{
        let wrapper = document.createElement('div');
        for(let item of user) {
            wrapper.style.cssText = 'column-count: 2;justify-items: center;text-align: center;column-gap: 10px';
            let content = document.createElement('div');
            content.style.cssText = '';
            let p = document.createElement('p');
            p.style.cssText = 'margin: 0;';

            let button = document.createElement('button');
            button.style.cssText = 'height: 30px;width: 60%';
            button.innerText = 'More Info';
            button.onclick = function (){
                document.location = `user-details.html?id=${item.id}`;
            }

            p.innerText = `${item.id} - ${item.name}`;

            content.append(p,button);
            wrapper.appendChild(content);
        }
        document.body.appendChild(wrapper);
    });
//----------------------------------------------------------------------------------------------------------------------