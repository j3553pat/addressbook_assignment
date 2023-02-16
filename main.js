
window.onload = function() {
    getUsers()
  
  }



const getUsers = () => {
fetch('https://randomuser.me/api/?results=10')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    displayUsers(data.results)
  });
}

const displayUsers = (arrayOfUsers) => {
    const allUsers = document.getElementById('all-users')
    arrayOfUsers.map((user, results) => {
      const li = document.createElement('li')
      const text = document.createTextNode(`#${results}, Title: ${user.name}:  ${user.gender}, by user: ${user.age}`)
      li.appendChild(text)
      allUsers.append(li)
      let name = document.createElement('h2');
      let email = document.createElement('span');

      name.innerHTML = `${user.name}`;
      email.innerHTML = `${user.email}`;
      li.appendChild(name);
      li.appendChild(email);
    })
    // ul.appendChild(allUsers)
  }

