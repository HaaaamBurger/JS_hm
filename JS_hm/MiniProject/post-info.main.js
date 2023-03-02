let url = new URL(location.href);
let id = url.searchParams.get('userId');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(post => {
        let wrapper = document.createElement('div');
        for (let i = 0; i < post.length; i++) {
            let postContainer = document.createElement('div');
            let h2 = document.createElement('h2');
            h2.innerText = `${post[i].id} - ${post[i].name}`;
            let body_email = document.createElement('ul');
            let email = document.createElement('li');
            email.innerText = post[i].email;
            let body = document.createElement('li');
            body.innerText = post[i].email;
            body_email.append(email,body);
            postContainer.append(h2,body_email);

            wrapper.append(postContainer);
        }
        document.body.appendChild(wrapper);
    })