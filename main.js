


window.onload = function() {
    getUsers()
}

const getUsers = () => { 
     fetch('https://randomuser.me/api/?results=20')
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          displayUsers(data.results)
            
            
        })

        
}


const displayUsers = (arrayOfUsers) => {
    const allUsers = document.getElementById('all-users')
    allUsers.innerHTML = ""
    arrayOfUsers.map((user) => {
      const li = document.createElement('li')
      // const text = document.createTextNode(arrayOfUsers)
      li.innerHTML = `Name: ${user.name.first} ${user.name.last}`

      const userImage = document.createElement('img')
      userImage.src = user.picture.medium
      userImage.className = 'image'

      li.appendChild(userImage)
      allUsers.appendChild(li)

      const button = document.createElement('button')
      button.innerHTML = 'Additional Info'
      button.onclick = () => {
        const div = document.createElement('div')
        div.innerHTML = `Gender:  ${user.gender} <br> Email: ${user.email} <br> Phone: ${user.phone} <br> location: ${user.location.street.number} ${user.location.street.name} ${user.location.country}`
        li.appendChild(div)
      }
    
      li.appendChild(button)

      
      

      
    })

    
  
  }

