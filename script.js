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
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Detectar el modo oscuro inicial según la configuración del sistema
let darkMode = darkModeMediaQuery.matches;

// Función para sincronizar el icono con el modo oscuro
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

// Llamar a la función para sincronizar iconos al cargar la página
syncIcons();

// Función para alternar el modo oscuro
function toggleDarkMode() {
  darkMode = !darkMode;
  document.body.classList.toggle("dark-mode");
  syncIcons(); // Actualizar los iconos al cambiar de modo
}

// Event listener para el cambio de preferencia de color del sistema (opcional)
darkModeMediaQuery.addEventListener("change", (event) => {
  darkMode = event.matches;
  syncIcons();
});

// Llamar a toggleDarkMode en el cambio de modo desde el icono
document.getElementById('toggle_checkbox').addEventListener('change', toggleDarkMode);

(function() {
  const style1 = "color: #fff; background: #007bff; font-size: 20px; padding: 8px; border-radius: 4px;";
  const style2 = "color: #007bff; font-size: 16px;";
  const style3 = "color: #ff4500; font-size: 14px;";

  function showMessage() {
      console.clear();
      console.log("%c¡Hola curioso/a!", style1);
      console.log("%cSabemos que tienes interés en explorar, pero por favor usa esta información con responsabilidad 😊", style2);
      console.log("%c© %cacrajovi.bio.com.py%c | GitHub: %chttps://github.com/acrajovi", style3, "color: #007bff; text-decoration: underline;", style3, "color: #007bff; text-decoration: underline;");
  }

  // Detecta si la consola se abre
  let isConsoleOpen = false;
  const detectDevTools = () => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      if (!(heightThreshold && widthThreshold) && (widthThreshold || heightThreshold)) {
          if (!isConsoleOpen) {
              showMessage();
              isConsoleOpen = true;
          }
      } else {
          isConsoleOpen = false;
      }
  };

  window.addEventListener("resize", detectDevTools);
  detectDevTools();
})();
