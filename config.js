document.addEventListener('DOMContentLoaded', () => {
  const btnIngresar = document.getElementById('btn-ingresar');
  const loginView = document.getElementById('login-view');
  const dashboardView = document.getElementById('dashboard-view');
  const userDisplay = document.getElementById('user-display');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const logoutBtn = document.getElementById('logout-btn');

  // Define aquí tus credenciales personalizadas
  const USUARIO_CORRECTO = "JoseAquino";
  const CLAVE_CORRECTA = "MiClave123";

  // Evento para validar e ingresar
  btnIngresar.addEventListener('click', () => {
    const usuarioIngresado = usernameInput.value.trim();
    const claveIngresada = passwordInput.value.trim();

    // Validar si los datos coinciden
    if (usuarioIngresado === USUARIO_CORRECTO && claveIngresada === CLAVE_CORRECTA) {
      userDisplay.textContent = `Bienvenido Sr. ${usuarioIngresado}`;
      loginView.classList.add('hidden');
      dashboardView.classList.remove('hidden');
    } else {
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  });

  // Evento para cerrar sesión
  logoutBtn.addEventListener('click', () => {
    usernameInput.value = '';
    passwordInput.value = '';
    dashboardView.classList.add('hidden');
    loginView.classList.remove('hidden');
  });
});
