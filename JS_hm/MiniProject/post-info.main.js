let url = new URL(location.href);
let id = url.searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(post => {
        let wrapper = document.createElement('div');
        let userPost = document.createElement('p');
        userPost.innerText = JSON.stringify(post);

        wrapper.appendChild(userPost);
        document.body.appendChild(wrapper);
    })