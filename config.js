document.addEventListener("DOMContentLoaded", function () {

  const btnIngresar = document.getElementById("btn-ingresar");

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
  // INGRESAR
  // ==========================

  btnIngresar.addEventListener("click", function () {

    const usuario = usernameInput.value.trim();
    const clave = passwordInput.value;


    // Validar
    if (
      usuario === USUARIO_CORRECTO &&
      clave === CLAVE_CORRECTA
    ) {

      // Mostrar usuario
      userDisplay.textContent = "Sr. " + usuario;

      // Mostrar inicial
      userAvatar.textContent =
        usuario.charAt(0).toUpperCase();


      // Ocultar login
      loginView.classList.add("hidden");

      // Mostrar dashboard
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
