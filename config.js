document.addEventListener("DOMContentLoaded", () => {

  const accessForm = document.getElementById("access-form");

  const loginView = document.getElementById("login-view");
  const dashboardView = document.getElementById("dashboard-view");

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const userDisplay = document.getElementById("user-display");
  const userAvatar = document.getElementById("user-avatar");

  const logoutBtn = document.getElementById("logout-btn");

  const forgotLink = document.getElementById("forgot-link");


  // Credenciales de demostración
  const USUARIO_CORRECTO = "JoseAquino";
  const CLAVE_CORRECTA = "MiClave123";


  // =========================
  // INGRESAR
  // =========================

  accessForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const usuarioIngresado = usernameInput.value.trim();
    const claveIngresada = passwordInput.value;


    if (
      usuarioIngresado === USUARIO_CORRECTO &&
      claveIngresada === CLAVE_CORRECTA
    ) {

      // Mostrar nombre
      userDisplay.textContent = `Sr. ${usuarioIngresado}`;

      // Inicial del usuario
      userAvatar.textContent =
        usuarioIngresado.charAt(0).toUpperCase();


      // Ocultar login
      loginView.classList.add("hidden");

      // Mostrar dashboard
      dashboardView.classList.remove("hidden");

    } else {

      alert(
        "Usuario o contraseña incorrectos. Inténtalo de nuevo."
      );

      passwordInput.value = "";
      passwordInput.focus();
    }

  });


  // =========================
  // CERRAR SESIÓN
  // =========================

  logoutBtn.addEventListener("click", () => {

    usernameInput.value = "";
    passwordInput.value = "";

    // Ocultar dashboard
    dashboardView.classList.add("hidden");

    // Mostrar login
    loginView.classList.remove("hidden");

    usernameInput.focus();

  });


  // =========================
  // OLVIDÓ CONTRASEÑA
  // =========================

  forgotLink.addEventListener("click", (event) => {

    event.preventDefault();

    alert(
      "Para recuperar tu contraseña, contacta con el servicio de atención."
    );

  });

});
