const abrirModal = () => document.getElementById('modal').classList.add('active');
const fecharModal = () =>  document.getElementById('modal').classList.remove('active');

document.getElementById('cadastrarQuestao').addEventListener('click', abrirModal);
document.getElementById('modalClose').addEventListener('click', fecharModal);
