document.addEventListener('DOMContentLoaded', () => {
  const btnIngresar = document.getElementById('btn-ingresar');
  const loginView = document.getElementById('login-view');
  const dashboardView = document.getElementById('dashboard-view');
  const userDisplay = document.getElementById('user-display');
  const usernameInput = document.getElementById('username');
  const logoutBtn = document.getElementById('logout-btn');

  // Evento para pasar al panel
  btnIngresar.addEventListener('click', () => {
    const usuario = usernameInput.value.trim();
    
    if (usuario !== '') {
      userDisplay.textContent = `Bienvenido Sr. ${usuario}`;
    } else {
      userDisplay.textContent = 'Bienvenido Sr. Jose Aquino';
    }

    loginView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
  });

  // Evento para regresar al inicio
  logoutBtn.addEventListener('click', () => {
    usernameInput.value = '';
    dashboardView.classList.add('hidden');
    loginView.classList.remove('hidden');
  });
});
