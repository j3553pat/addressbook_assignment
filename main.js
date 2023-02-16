


window.onload = function() {
    getUsers()
}

const getUsers = () => { 
     fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            displayUsers(data.results)
        })
}


const displayUsers = (arrayOfUsers) => {
    const allUsers = document.getElementById('all-users')
    arrayOfUsers.map((user, results) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${results}, Name: ${user.name} Gender:  ${user.gender}, email: ${user.email}`)
      li.appendChild(text)
      allUsers.append(li)
    })
  }

