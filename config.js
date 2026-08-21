document.addEventListener("DOMContentLoaded", () => {
  // 1. Selección de elementos del DOM
  const accessForm = document.getElementById("access-form");
  const logoutBtn = document.getElementById("logout-btn");

  const loginView = document.getElementById("login-view");
  const dashboardView = document.getElementById("dashboard-view");

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const userDisplay = document.getElementById("user-display");
  const userAvatar = document.getElementById("user-avatar");

  // Credenciales de prueba
  const USUARIO_CORRECTO = "jose";
  const CLAVE_CORRECTA = "123";

  // 2. Evento para iniciar sesión e ir a la tienda
 document.addEventListener("DOMContentLoaded", () => {
    e.preventDefault(); // Evita que el navegador recargue la página

    const usuario = usernameInput.value.trim();
    const clave = passwordInput.value;

    if (usuario === USUARIO_CORRECTO && clave === CLAVE_CORRECTA) {
      // Personaliza la bienvenida en la tienda
      if (userDisplay) userDisplay.textContent = `Cliente: ${usuario}`;
      if (userAvatar) userAvatar.textContent = usuario.charAt(0).toUpperCase();

      // Cambia de ventana ocultando el acceso y mostrando la tienda
      loginView.classList.add("hidden");
      dashboardView.classList.remove("hidden");
    } else {
      alert("Usuario o contraseña incorrectos.");
      passwordInput.value = "";
      passwordInput.focus();
    }
  });

  // 3. Evento para cerrar sesión y volver al inicio
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      // Limpia las entradas de texto
      usernameInput.value = "";
      passwordInput.value = "";

      // Regresa a la ventana de login
      dashboardView.classList.add("hidden");
      loginView.classList.remove("hidden");

      usernameInput.focus();
    });
  }
});
