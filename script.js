//@

/*const user = {
    name: "Ryan",
    lastname: "Ray",
    age: 29,
    nicname: " Ray123",
    hobbies: ["run", "code", "eat"],
    adress: "123 Main St",
    city: "New York"
} */


const friends = [
    { "name": "joe", "nickname": "joe123" },
    { "name": "jua", "nickname": "jua123" },
    { "name": "mart", "nickname": "mart123" },
    { "name": "bea", "nickname": "bea123" },
]
user.friends = friends

let output = ''
for (let i = 0; i < friends.length; i++) {
    output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li>`
}

document.getElementById('people').innerHTML = output

let postsElements = ''

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            postsElements += `<li>${data[i].userId} - ${data[i].title}</li>`
        }
        document.getElementById('posts').innerHTML = postsElements
    })