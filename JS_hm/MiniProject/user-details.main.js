let url = new URL(location.href);
let id = url.searchParams.get('id');

let mainContent = document.createElement('div');
document.body.appendChild(mainContent);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(userData => {
        let userBlock = document.createElement('div');
        let userInfo = document.createElement('p');
        userInfo.innerText = JSON.stringify(userData);

        userBlock.appendChild(userInfo);
        mainContent.append(userBlock);
    });

let buttonContainer = document.createElement('div');
buttonContainer.style.cssText = 'width: 100%; display: flex; justify-content: center';
document.body.appendChild(buttonContainer);

let button = document.createElement('button');
button.textContent = 'post of current user';
button.style.width = '90%';
buttonContainer.appendChild(button);

let postContainer = document.createElement('div');
postContainer.style.cssText = 'column-count: 5;margin-top: 20px;text-align: center;';
button.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) => response.json())
        .then((userTitle) => {
            for(let title of userTitle){
                let postWrapper = document.createElement('div');
                postWrapper.style.cssText = 'padding: 10px;box-sizing: box;align-items: center';
                let p = document.createElement('p');
                p.style.margin = '0';
                p.innerText = title.title;

                let postButton = document.createElement('button');
                postButton.textContent = 'Post Info';
                postButton.onclick = function () {
                    document.location = `post-info.html?userId=${title.id}`;
                }
                postWrapper.append(p,postButton);
                postContainer.append(postWrapper);
                document.body.appendChild(postContainer);
            }

        })
}