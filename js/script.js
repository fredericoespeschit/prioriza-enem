{/* <div class="modal-add-new-question"> */ }

const openModal = () => document.getElementById('modal-add-new-question').classList.add('active');
const closeModal = () => document.getElementById('modal-add-new-question').classList.remove('active');

const tempQuestion = {
  question: "Quanto é 2 + 2?",
  level: "1", //1 é fácil, 5 é dificil
  matter: "Matematica",
  content: "Adição"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('dataBase')) ?? [];

const setLocalStorage = function (dataBase) {
  localStorage.setItem('dataBase', JSON.stringify(dataBase));
}

//CRUD
const updateItem = (index, questions) => {
  const dataBase = readItem();
  dataBase[index] = questions;
  setLocalStorage(dataBase);
}

const readItem = () => {
  getLocalStorage();
}

const createItem = (questions) => {
  const dataBase = getLocalStorage()
  dataBase.push(questions);
  setLocalStorage(dataBase);
}


// Events
document.getElementById('register-question').addEventListener('click', openModal);
document.getElementById('modal-close').addEventListener('click', closeModal);