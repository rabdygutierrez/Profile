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

    window.onload = function() {
      if (window.location.hash) {
          setTimeout(function() {
              window.scrollTo(0, 0);
          }, 1);
      }
  
      // Mostrar u ocultar el botón según el desplazamiento
      window.onscroll = function() {
          var button = document.getElementById("back-to-top");
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
              button.style.display = "block";  // Mostrar el botón
          } else {
              button.style.display = "none";  // Ocultar el botón
          }
      };
  
      // Función para volver al inicio al hacer clic en el botón
      document.getElementById("back-to-top").onclick = function() {
          // Desplazamiento suave para 'html' y 'body'
          window.scrollTo({ top: 0, behavior: 'smooth' });  // Desplazamiento suave al inicio
          document.documentElement.scrollTop = 0;  // Asegurarse de que el scroll se lleve a 0 para ambos casos
          document.body.scrollTop = 0;  // Esto es para navegadores antiguos que solo usan body
      };
  };

  



  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");
  
  // Inicia en modo claro (darkMode = false)
  let darkMode = false;
  
  // Función para sincronizar el icono con el tema actual
  function syncIcons() {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      lightIcon.style.display = "block";
      darkIcon.style.display = "none";
    } else {
      document.body.classList.remove("dark-mode");
      lightIcon.style.display = "none";
      darkIcon.style.display = "block";
    }
  }
  
  // Alterna el tema y guarda la preferencia en localStorage
  function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");
    syncIcons();
    localStorage.setItem('darkMode', darkMode);
  }
  
  // Inicializa el tema basado en la preferencia guardada
  function initializeTheme() {
    const savedDarkMode = localStorage.getItem('darkMode');
    darkMode = savedDarkMode === 'true'; // Establece darkMode según la preferencia guardada o false
    syncIcons();
  }
  
  // Llamar a initializeTheme al cargar la página
  initializeTheme();
  
  // Event listener para el cambio de tema desde el interruptor
  document.getElementById('toggle_checkbox').addEventListener('change', toggleDarkMode);
  