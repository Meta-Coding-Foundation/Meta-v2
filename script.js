document.querySelector('h1').addEventListener('click', () => {
  alert('You clicked the heading!');
});

document.querySelector('.join-btn').addEventListener('click', () => {
    document.getElementById('loginDialog').style.display = 'block';
});

document.querySelector('.login-btn').addEventListener('click', () => {
    document.getElementById('loginDialog').style.display = 'block';
});

const joinBtn = document.getElementById('joinBtn');
const loginBtn = document.getElementById('loginBtn');
const joinDialog = document.getElementById('joinDialog');
const loginDialog = document.getElementById('loginDialog');

joinBtn.addEventListener('click', () => {
  joinDialog.style.display = 'block';
  loginDialog.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
  loginDialog.style.display = 'block';
  joinDialog.style.display = 'none';
});
function showDialog(dialog) {
  document.getElementById('overlay').style.display = 'block';
  dialog.style.display = 'block';
}

function hideDialogs() {
  document.getElementById('overlay').style.display = 'none';
  joinDialog.style.display = 'none';
  loginDialog.style.display = 'none';
}

joinBtn.addEventListener('click', () => showDialog(joinDialog));
loginBtn.addEventListener('click', () => showDialog(loginDialog));
document.getElementById('overlay').addEventListener('click', hideDialogs);
