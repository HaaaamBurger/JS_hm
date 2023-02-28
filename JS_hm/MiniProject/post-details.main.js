let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((respons) => respons.json())
    .then((post)=> {
        for(let user of post) {
            let div = document.createElement('div');
            let ul = document.createElement('ul');
            let p = document.createElement('p');
            p.innerText = user;
            ul.appendChild(p);
            div.appendChild(ul);
        }
        document.body.appendChild(div);
    })

