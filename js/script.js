{/* <div class="modal-add-new-question"> */}

const openModal = () => document.getElementById('modal-add-new-question').classList.add('active');
const closeModal = () =>  document.getElementById('modal-add-new-question').classList.remove('active');

const tempQuestion = {
  question: "Quanto é 2 + 2?",
  level: "1", //1 é fácil, 5 é dificil
  matter: "Matematica",
  content: "Adição"
}

const getLocaStorage = () => JSON.parse(localStorage.getItem('dataBase')) ?? [];

const setLocaStorage = (dataBase) => localStorage.setItem('dataBase', JSON.stringify(dataBase));

//CRUD
const readItem = () => {
  getLocaStorage();
}

const createItem = (questions) => {
  const dataBase = getLocaStorage()
  dataBase.push(questions);
  setLocaStorage(dataBase);
}


// Events
document.getElementById('register-question').addEventListener('click', openModal);
document.getElementById('modal-close').addEventListener('click', closeModal);