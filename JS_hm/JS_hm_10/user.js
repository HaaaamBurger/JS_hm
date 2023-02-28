let url = new URL(location.href);
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>response.json())
    .then((user)=>{
        document.write(JSON.stringify(user));
    });