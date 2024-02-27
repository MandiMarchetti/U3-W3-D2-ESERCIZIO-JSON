class User {
  constructor(_nome) {
    this.nome = _nome;
  }
}

//That is the name memory
const storageName = "name-memory";

//That's the form
const formNode = document.querySelector("#userName");

//The buttons
const saveButton = document.getElementById("saveBtn");
const deleteButton = document.getElementById("deleteBtn");

// //That's the function to get the information on the area name
// const save = () => {
//   const content = formNode.value;
//   console.log(content);

//   localStorage.setItem(storageName, content);
//   alert("Name Saved!");
// };

let nameArr = [];

formNode.onsubmit = function (e) {
  e.preventDefault();
  console.log("Your Name was Saved!");

  const nameConst = document.getElementById("names").value;

  const newUser = new User(nome);
  nameArr.push(newUser);
  console.log(nameArr);

  const lista = document.querySelector(".lista");
  const li = document.createElement("li");
  li.innerText = newUser.nameConst;
  lista.appendChild(li);
};

console.log(nameArr);
