document.addEventListener("DOMContentLoaded", function () {

  const accessForm = document.getElementById("access-form");

  const loginView = document.getElementById("login-view");
  const dashboardView = document.getElementById("dashboard-view");

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const userDisplay = document.getElementById("user-display");
  const userAvatar = document.getElementById("user-avatar");

  const logoutBtn = document.getElementById("logout-btn");


  // Credenciales
  const USUARIO_CORRECTO = "JoseAquino";
  const CLAVE_CORRECTA = "MiClave123";


  // ==========================
  // INICIAR SESIÓN
  // ==========================

  accessForm.addEventListener("submit", function (event) {

    // MUY IMPORTANTE:
    // Evita que el formulario recargue la página.
    event.preventDefault();

    const usuario = usernameInput.value.trim();
    const clave = passwordInput.value;


    // Comprobar credenciales
    if (
      usuario === USUARIO_CORRECTO &&
      clave === CLAVE_CORRECTA
    ) {

      // Mostrar nombre
      userDisplay.textContent = "Sr. " + usuario;

      // Mostrar primera letra en el avatar
      userAvatar.textContent = usuario.charAt(0).toUpperCase();


      // Ocultar Login
      loginView.classList.add("hidden");


      // Mostrar Dashboard
      dashboardView.classList.remove("hidden");

    } else {

      alert("Usuario o contraseña incorrectos.");

      passwordInput.value = "";
      passwordInput.focus();

    }

  });


  // ==========================
  // CERRAR SESIÓN
  // ==========================

  logoutBtn.addEventListener("click", function () {

    usernameInput.value = "";
    passwordInput.value = "";

    dashboardView.classList.add("hidden");
    loginView.classList.remove("hidden");

    usernameInput.focus();

  });

});
