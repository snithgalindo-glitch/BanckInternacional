document.addEventListener("DOMContentLoaded", () => {
  const btnIngresar = document.getElementById("btn-ingresar");
  const loginView = document.getElementById("login-view");
  const dashboardView = document.getElementById("dashboard-view");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  btnIngresar.addEventListener("click", (e) => {
    e.preventDefault(); // Detiene cualquier recarga automática

    const usuario = usernameInput.value.trim();
    const clave = passwordInput.value.trim();

    if (usuario === "jose" && clave === "123") {
      loginView.classList.add("hidden");
      dashboardView.classList.remove("hidden");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
});
  }
});
