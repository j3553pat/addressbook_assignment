window.onload = function () {
  getUsers();
};

const getUsers = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayUsers(data.results);
    });
};

const displayUsers = (arrayOfUsers) => {
  const allUsers = document.getElementById("all-users");
  allUsers.innerHTML = "";
  arrayOfUsers.map((user) => {
    const li = document.createElement("li");
    li.innerHTML = `Name: ${user.name.first}  ${user.name.last} <br> Email: ${user.email} <br> Gender:${user.gender}`;
    allUsers.appendChild(li);
  });
};
