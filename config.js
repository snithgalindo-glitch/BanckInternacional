document.addEventListener("DOMContentLoaded", function () {

    const btnIngresar = document.getElementById("btn-ingresar");
    const logoutBtn = document.getElementById("logout-btn");

    const loginView = document.getElementById("login-view");
    const dashboardView = document.getElementById("dashboard-view");

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const userDisplay = document.getElementById("user-display");
    const userAvatar = document.getElementById("user-avatar");


    // Credenciales
    const USUARIO_CORRECTO = "JoseAquino";
    const CLAVE_CORRECTA = "MiClave123";


    // ==============================
    // BOTÓN INGRESAR
    // ==============================

    btnIngresar.addEventListener("click", function () {

        const usuario = usernameInput.value.trim();
        const clave = passwordInput.value;


        console.log("Usuario:", usuario);
        console.log("Contraseña:", clave);


        // Comprobar credenciales
        if (usuario === USUARIO_CORRECTO && clave === CLAVE_CORRECTA) {

            console.log("Credenciales correctas");


            // Cambiar nombre
            userDisplay.textContent = "Sr. " + usuario;


            // Cambiar avatar
            userAvatar.textContent = usuario.charAt(0).toUpperCase();


            // OCULTAR LOGIN
            loginView.style.display = "none";


            // MOSTRAR DASHBOARD
            dashboardView.style.display = "block";


            console.log("Dashboard mostrado");


        } else {

            alert("Usuario o contraseña incorrectos.");

            passwordInput.value = "";
            passwordInput.focus();

        }

    });


    // ==============================
    // CERRAR SESIÓN
    // ==============================

    logoutBtn.addEventListener("click", function () {

        // Limpiar campos
        usernameInput.value = "";
        passwordInput.value = "";


        // Ocultar dashboard
        dashboardView.style.display = "none";


        // Mostrar login
        loginView.style.display = "block";


        usernameInput.focus();

    });

});
