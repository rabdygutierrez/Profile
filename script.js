/* Copyright José Acosta. All Rights Reserved. */

/* navigation */
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

/* deafult yeard */
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

/* dark mode switch */
const darkModeSwitch = document.getElementById('toggle_checkbox');
const body = document.body;
/* Copyright José Acosta. All Rights Reserved. */
darkModeSwitch.addEventListener('change', function() {
body.classList.toggle('dark-mode');
});

/* Go to home on reload */
window.onload = function() {
    if (window.location.hash) {
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 1);
    }
  };

  /* Force reload js and CSS */
    // Generar un timestamp actual en milisegundos
    var timestamp = new Date().getTime();
        
    // Obtener la referencia al elemento <link> de la hoja de estilos
    var css1Element = document.getElementById('dynamic-styles-1');
    var css2Element = document.getElementById('dynamic-styles-2');
  
    // Agregar el timestamp como parámetro de consulta a la URL del script
    css1Element.src += '?v=' + timestamp;
    css2Element.src += '?v=' + timestamp;