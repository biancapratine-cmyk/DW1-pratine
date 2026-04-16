function fazerLogin() {
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "1234") {
    // salva login
    localStorage.setItem("logado", "true");

    // vai pro menu
    window.location.href = "menu.html";
  } else {
    document.getElementById("erro").innerText = "Login inválido ❌";
  }
}