const http = new EasyHTTP()

// TODO: GET users
http
  .get('https://jsonplaceholder.typicode.com/users')
  .then((data) => console.log(data))

// TODO: Create data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com',
}

// TODO: POST data
http.post('https://jsonplaceholder.typicode.com/users', data).then((data) => {
  console.log(data)
})

// TODO: Update data
http.put('https://jsonplaceholder.typicode.com/users/2', data).then((data) => {
  console.log(data)
})

// TODO: Delete data
http.delete('https://jsonplaceholder.typicode.com/users/2').then((data) => {
  console.log(data)
})
