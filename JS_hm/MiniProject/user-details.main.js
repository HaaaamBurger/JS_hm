let url = new URL(location.href);
let id = url.searchParams.get('id');

let mainContent = document.createElement('div');
document.body.appendChild(mainContent);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(userData => {
        // let dataWrapper = document.createElement('div');
        // for(let user in userData){
        //     if(typeof userData[user] === 'object'){
        //         let userObject = userData[user];
        //         let ul = document.createElement('ul');
        //         for(let item in userObject){
        //             let itemObject = userObject[item];
        //             if(typeof itemObject === 'object'){
        //                 let itemUl = document.createElement('ul');
        //                 for(let item in itemObject){
        //                     let li = document.createElement('li');
        //                     li.innerText = `${item} - ${itemObject[item]}`;
        //                     itemUl.appendChild(li);
        //                 }
        //                 ul.appendChild(itemUl);
        //             }else{
        //                 let li = document.createElement('li');
        //                 li.innerText = `${item} - ${userObject[item]}`;
        //                 ul.appendChild(li);
        //             }
        //         }
        //         dataWrapper.appendChild(ul);
        //     }else{
        //         let h2 = document.createElement('h2');
        //         h2.innerText = `${user} - ${userData[user]}`;
        //         dataWrapper.appendChild(h2);
        //     }
        // }
        function newUserBlock(item, box) {
            for (const itemKey in item) {
                if (typeof item[itemKey] !== 'object') {
                    let p = document.createElement('p');
                    p.innerText = `${itemKey}:${item[itemKey]}`;
                    box.appendChild(p);
                } else {
                    newUserBlock(item[itemKey], box);
                }
            }
        }

        let postContainer = document.getElementsByClassName('user')[0];
        postContainer.style.cssText = 'text-align: center';
        let personalInfoTitle = document.getElementsByTagName('h2')[0];
        personalInfoTitle.innerText = 'Personal Info';
        personalInfoTitle.style.cssText = 'text-align: center';
        newUserBlock(userData, postContainer)
    });

let buttonContainer = document.createElement('div');
buttonContainer.style.cssText = 'width: 100%; display: flex; justify-content: center';
document.body.appendChild(buttonContainer);

let button = document.createElement('button');
button.textContent = 'Post of current user';
button.style.cssText = 'width: 90%;height: 50px';
buttonContainer.appendChild(button);

let postContainer = document.createElement('div');
postContainer.style.cssText = 'display:flex;flex-direction: column;column-count: 5';
button.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) => response.json())
        .then((userTitle) => {
            // for (let title of userTitle) {
            //     let postWrapper = document.createElement('div');
            //     postWrapper.style.cssText = 'text-align: center';
            //     let h3 = document.createElement('h3');
            //     h3.style.margin = '0';
            //     h3.innerText = title.title;
            //
            //     let postButton = document.createElement('button');
            //     postButton.textContent = 'Post Info';
            //     postButton.onclick = function () {
            //         document.location = `post-info.html?userId=${title.id}`;
            //     }
            //     postWrapper.append(h3, postButton);
            //     postContainer.append(postWrapper);
            //     document.body.appendChild(postContainer);
            // }
            let mainPost = document.createElement('div');
            mainPost.style.cssText = 'display:flex;justify-content: center;margin-top: 50px;width: 100%;column-count: 5';
            for (let objectTitle of userTitle) {
                let postWrap = document.createElement('div');
                postWrap.style.cssText = 'width: 200px;box-sizing: box;text-align: center';
                let postButton = document.createElement('button');
                let postTitle = document.createElement('p');

                postTitle.innerText = objectTitle.title;
                postButton.textContent = 'Post Info';
                postButton.onclick = function () {
                    document.location = `post-info.html?userId=${objectTitle.id}`;
                }
                postWrap.append(postTitle,postButton);
                mainPost.append(postWrap);
            }
            document.body.appendChild(mainPost);
        })
}