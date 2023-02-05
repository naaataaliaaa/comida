let menuVisible = false;
//Función que oculta
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}
function seleccionar() {
  //ocultar menu
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
