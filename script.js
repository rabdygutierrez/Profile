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

darkModeSwitch.addEventListener('change', function() {
body.classList.toggle('dark-mode');
});