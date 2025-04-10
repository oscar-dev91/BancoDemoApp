const clienteBtn = document.getElementById('cliente-btn');
const operadorBtn = document.getElementById('operador-btn');
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const loginBtn = document.getElementById('login-btn');

let userType = 'cliente';

clienteBtn.addEventListener('click', () => {
  userType = 'cliente';
  clienteBtn.classList.add('active');
  operadorBtn.classList.remove('active');
  errorMessage.style.display = 'none';
  loginBtn.innerText = "Iniciar como Cliente";
});

operadorBtn.addEventListener('click', () => {
  userType = 'operador';
  operadorBtn.classList.add('active');
  clienteBtn.classList.remove('active');
  errorMessage.style.display = 'none';
  loginBtn.innerText = "Iniciar como Operador";
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // ← ¡Esto es clave!

  const email = document.getElementById('email').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  if (userType === 'cliente' && email === 'cliente@demo.com' && password === 'password') {
    window.location.href = './cliente/index.html';
  } else if (userType === 'operador' && email === 'operador@demo.com' && password === 'password') {
    window.location.href = './operador/index.html';
  } else {
    errorMessage.style.display = 'block';
  }
});

errorMessage.style.display = 'block';
document.getElementById('email').focus();