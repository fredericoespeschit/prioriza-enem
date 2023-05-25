{/* <div class="modal-add-new-question"> */ }

const openModal = () => document.getElementById('modal-add-new-question').classList.add('active');
const closeModal = () => {
  document.getElementById('modal-add-new-question').classList.remove('active');
  clearFields();
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('dataBase')) ?? [];

const setLocalStorage = (dataBase) => {
  localStorage.setItem('dataBase', JSON.stringify(dataBase));
}


//CRUD
const deleteItem = (index) => {
  const dataBase = getLocalStorage();
  dataBase.splice(index, 1);
  setLocalStorage(dataBase);
}

const updateItem = (index, questions) => {
  const dataBase = getLocalStorage();
  dataBase[index] = questions;
  setLocalStorage(dataBase);
}

const readItem = () => {
  return getLocalStorage();
}

const createItem = (questions) => {
  const dataBase = getLocalStorage()
  dataBase.push(questions);
  setLocalStorage(dataBase);
}

const isValidFields = () => {
  return document.getElementById('form-modal-add-new-question').reportValidity()
}

//Layout
const clearFields = () => {
  const fields = document.querySelectorAll('.modal-field');
  fields.forEach(field => field.value = "");
}
const saveNewQuestion = () => {
  if (isValidFields()) {
    const newQuestao = {
      question: document.getElementById('question').value,
      level: document.getElementById('level').value,
      matter: document.getElementById('matter').value,
      content: document.getElementById('content').value,
    }
    createItem(newQuestao);
    updateTable();
    closeModal();
  }
}
const createRow = (question) => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
  <td>${question.question}</td>
  <td>${question.level}</td>
  <td>${question.matter}</td>
  <td>${question.content}</td>
  <td class="button-edit-delete">
    <a href="http://"><img src="./image/icons/pen.svg" alt="" /></a>
    <a href="http://"> <img src="./image/icons/trash.svg" alt="" /></a>
  </td>
`;

document.querySelector('#table>tbody').appendChild(newRow);
}

const clearTable = () => {
  const rows = document.querySelectorAll('#table>tbody tr');
  rows.forEach(row => row.parentNode.removeChild(row));
}

const updateTable = () => {
  const dataBase = readItem();
  clearTable();
  dataBase.forEach(createRow);
}

updateTable();

// Events
document.getElementById('register-question').addEventListener('click', openModal);
document.getElementById('modal-close').addEventListener('click', closeModal);

document.getElementById('save-new-question').addEventListener('click', saveNewQuestion);