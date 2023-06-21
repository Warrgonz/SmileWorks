 document.addEventListener("DOMContentLoaded", function () {
  fetch("views/public/templates/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
      console.log("Navbar cargado exitosamente");
    })
    .catch((error) => {
      console.error("Error al cargar el navbar:", error);
    });
  // Cargar el footer
  fetch("views/public/templates/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
      console.log("Footer cargado exitosamente");
    })
    .catch((error) => {
      console.error("Error al cargar el footer:", error);
    });
 });

