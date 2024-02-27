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
const save = () => {
  const content = formNode.value;
  console.log(content);

  localStorage.setItem(storageName, content);
  alert("Name Saved!");
};

let nameArr = [];

formNode.onsubmit = function (e) {
  e.preventDefault();
  console.log("Your Name was Saved!");

  const nameConst = document.getElementById("names").value;

  const newUser = new User(nameConst);
  nameArr.push(newUser);
  console.log(nameArr);

  const lista = document.querySelector(".lista");
  const li = document.createElement("li");
  li.innerText = newUser.nome;
  lista.appendChild(li);
};

const load = () => {
  const memory = localStorage.getItem(storageName); // Aqui!

  if (memory) {
    console.log("TROVATO");
    formNode.value = memory;
  } else {
    console.log("NON TROVATO");
    alert("Nessun dato salvato in precedenza");
  }
};
