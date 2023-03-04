let url = new URL(location.href);
let id = url.searchParams.get('userId');
fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(post => {
        // let wrapper = document.createElement('div');
        // for (let i = 0; i < post.length; i++) {
        //     let postContainer = document.createElement('div');
        //     let h2 = document.createElement('h2');
        //     h2.innerText = `${post[i].id} - ${post[i].name}`;
        //     let body_email = document.createElement('ul');
        //     let email = document.createElement('li');
        //     email.innerText = post[i].email;
        //     let body = document.createElement('li');
        //     body.innerText = post[i].email;
        //     body_email.append(email,body);
        //     postContainer.append(h2,body_email);
        //
        //     wrapper.append(postContainer);
        // }
        // document.body.appendChild(wrapper);
        let postWrap = document.createElement('div');
        for (let postObject of post) {
            let wrapper = document.createElement('div');
            wrapper.style.cssText = 'border: 1px solid black;margin-top: 10px;padding: 20px';
            for (let postInfo in postObject) {
                let postField = document.createElement('p');
                postField.innerText = `${postInfo} - ${postObject[postInfo]}`;
                wrapper.appendChild(postField);
            }
            postWrap.append(wrapper);
            // fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            //     .then(response => response.json())
            //     .then(postComments => {
            //         for (let commentObject of postComments) {
            //             let comsWrap = document.createElement('div');
            //             for (let fieldComment in commentObject) {
            //                 let comment = document.createElement('p');
            //                 comment.innerText = `${fieldComment} - ${commentObject[fieldComment]}`;
            //                 comsWrap.appendChild(comment);
            //             }
            //             postWrap.appendChild(comsWrap);
            //         }
            //     })
            document.body.append(postWrap);
        }
    })