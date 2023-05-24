{/* <div class="modal-add-new-question"> */}

const openModal = () => document.getElementById('modal-add-new-question').classList.add('active');
const closeModal = () =>  document.getElementById('modal-add-new-question').classList.remove('active');

document.getElementById('register-question').addEventListener('click', openModal);
document.getElementById('modal-close').addEventListener('click', closeModal);