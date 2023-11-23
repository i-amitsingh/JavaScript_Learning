fetch('https://api.github.com/users/i-amitsingh')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// let p = fetch('https://api.github.com/users/i-amitsingh')

// p.then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
// }).catch((error) => console.log(error))