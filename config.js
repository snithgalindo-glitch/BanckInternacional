document.addEventListener('DOMContentLoaded', () => {
  const accessForm = document.getElementById('access-form');
  const loginView = document.getElementById('login-view');
  const dashboardView = document.getElementById('dashboard-view');
  const userDisplay = document.getElementById('user-display');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const logoutBtn = document.getElementById('logout-btn');

  // Credenciales
  const USUARIO_CORRECTO = "JoseAquino";
  const CLAVE_CORRECTA = "MiClave123";

  // Ingresar
  accessForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuarioIngresado = usernameInput.value.trim();
    const claveIngresada = passwordInput.value;

    if (
      usuarioIngresado === USUARIO_CORRECTO &&
      claveIngresada === CLAVE_CORRECTA
    ) {
      userDisplay.textContent = `Sr. ${usuarioIngresado}`;

      loginView.classList.add('hidden');
      dashboardView.classList.remove('hidden');
    } else {
      alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
  });

  // Cerrar sesión
  logoutBtn.addEventListener('click', () => {
    usernameInput.value = '';
    passwordInput.value = '';

    dashboardView.classList.add('hidden');
    loginView.classList.remove('hidden');

    usernameInput.focus();
  });
});
