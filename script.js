document.addEventListener("DOMContentLoaded", () => {
  const btnIngresar = document.getElementById("btn-ingresar");
  const loginView = document.getElementById("login-view");
  const dashboardView = document.getElementById("dashboard-view");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (btnIngresar) {
    btnIngresar.addEventListener("click", (e) => {
      e.preventDefault();

      const usuario = usernameInput ? usernameInput.value.trim() : "";
      const clave = passwordInput ? passwordInput.value.trim() : "";

      if (usuario === "jose" && clave === "123") {
        loginView.classList.add("hidden");
        dashboardView.classList.remove("hidden");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  }
});
