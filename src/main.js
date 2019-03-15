// Llamada de los botones que indican las emociones
document.getElementById('botonE').addEventListener('click', showComedy);
document.getElementById('botonEm').addEventListener('click', showAction);
document.getElementById('botonEmo').addEventListener('click', showFantasy);
document.getElementById('volver').addEventListener('click', hiddenAll);

function hiddenAll() {
  document.getElementById("btnMenu").style.display = "block";
  document.getElementById("mostrar").style.display = "none";
  document.getElementById("contentComedy").style.display = "none";
  document.getElementById("contentAction").style.display = "none";
  document.getElementById("contentFantasy").style.display = "none";
}

// Esta funcion muestra la seccion de comedia y oculta las de accion y fantasia
function showComedy() {
    document.getElementById("mostrar").style.display = "block";
    document.getElementById("btnMenu").style.display = "none";
    document.getElementById("contentComedy").style.display = "block";
    document.getElementById("contentAction").style.display = "none";
    document.getElementById("contentFantasy").style.display = "none";
  }
  
  // Esta funcion muestra la seccion de comedia y oculta las de accion y fantasia
  function showAction() {
    document.getElementById("mostrar").style.display = "block";
    document.getElementById("btnMenu").style.display = "none";
    document.getElementById("contentAction").style.display = "block";
    document.getElementById("contentComedy").style.display = "none";
    document.getElementById("contentFantasy").style.display = "none";
  }
  
  // Esta funcion muestra la seccion de comedia y oculta las de accion y fantasia
  function showFantasy() {
    document.getElementById("mostrar").style.display = "block";
    document.getElementById("btnMenu").style.display = "none";
    document.getElementById("contentFantasy").style.display = "block";
    document.getElementById("contentAction").style.display = "none";
    document.getElementById("contentComedy").style.display = "none";
  }