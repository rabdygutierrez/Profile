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

/* =============================================
   MODERN INTERACTIVE FEATURES
   ============================================= */

// ── Scroll progress bar ──
(function () {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = maxScroll > 0 ? (scrolled / maxScroll * 100) + '%' : '0%';
  }, { passive: true });
})();

// ── Typing effect for hero subtitle ──
(function () {
  const el = document.querySelector('.section__text__p2');
  if (!el) return;
  const text = el.textContent.trim();
  el.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.textContent = '|';
  el.appendChild(cursor);
  let i = 0;
  const type = () => {
    if (i < text.length) {
      el.insertBefore(document.createTextNode(text[i]), cursor);
      i++;
      setTimeout(type, i === 1 ? 400 : 48);
    }
  };
  setTimeout(type, 900);
})();

// ── Counter animation for years ──
(function () {
  const counter = document.getElementById('years-counter');
  if (!counter) return;
  const target = 18;
  let started = false;
  const animate = () => {
    if (started) return;
    started = true;
    let val = 0;
    const step = () => {
      val++;
      counter.textContent = val;
      if (val < target) setTimeout(step, 80);
    };
    step();
  };
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animate(); obs.disconnect(); }
  }, { threshold: 0.5 });
  obs.observe(counter);
})();

// ── Scroll-reveal fade-in ──
(function () {
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        fadeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  const containers = [
    ...document.querySelectorAll('.details-container'),
    ...document.querySelectorAll('.text-container'),
    ...document.querySelectorAll('.contact-info-upper-container'),
    document.querySelector('#profile .section__text'),
    document.querySelector('#profile .section__pic-container'),
  ].filter(Boolean);

  containers.forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${i * 0.05}s`;
    fadeObs.observe(el);
  });

  document.querySelectorAll('article').forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = `${(i % 6) * 0.07}s`;
    fadeObs.observe(el);
  });
})();

// ── Skill badges (with data-level for i18n) ──
const badgeMaps = {
  en: {
    'Experienced':  ['badge-expert',  'Expert'],
    'Intermediate': ['badge-mid',     'Mid'],
    'Certified':    ['badge-cert',    'Certified'],
    'From scratch': ['badge-builder', 'Built ∅'],
  },
  es: {
    'Experienced':  ['badge-expert',  'Experto'],
    'Intermediate': ['badge-mid',     'Intermedio'],
    'Certified':    ['badge-cert',    'Certificado'],
    'From scratch': ['badge-builder', 'Creado ∅'],
  }
};
(function () {
  const map = badgeMaps.en;
  document.querySelectorAll('.article-container article p').forEach(p => {
    const lvl = p.textContent.trim();
    if (map[lvl]) {
      const [cls, label] = map[lvl];
      p.innerHTML = `<span class="badge ${cls}" data-level="${lvl}">${label}</span>`;
    }
  });
})();

// ── Active nav link on scroll ──
(function () {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('#desktop-nav .nav-links a');
  if (!links.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.45 });
  sections.forEach(s => obs.observe(s));
})();

// =============================================
//   BILINGUAL SYSTEM (EN / ES)
// =============================================
const i18n = {
  en: {
    'nav.about':       'About',
    'nav.experience':  'Experience',
    'nav.contact':     'Contact',
    'hero.cvEs':       'Download CV Spanish',
    'hero.cvEn':       'Download CV English',
    'hero.contact':    'Contact Info',
    'about.p1':        'Get to know More',
    'about.title':     'About Me',
    'about.expLabel':  'Experience',
    'about.eduLabel':  'Education',
    'about.leadLabel': 'Leadership',
    'exp.p1':          'Explore My',
    'exp.title':       'Experience',
    'exp.automation':  'QA AUTOMATION',
    'exp.performance': 'Performance',
    'exp.leadership':  'QA Leadership & Strategy',
    'exp.others':      'Others Skills',
    'contact.p1':      'Get in Touch',
    'contact.title':   'Contact Me',
    'contact.cta':     'Available for new opportunities',
    'stat.years':      'Years',
    'stat.sectors':    'Sectors',
    'stat.teams':      'QA Teams Built',
    'stat.cert':       'Certified',
  },
  es: {
    'nav.about':       'Sobre mí',
    'nav.experience':  'Experiencia',
    'nav.contact':     'Contacto',
    'hero.cvEs':       'Descargar CV Español',
    'hero.cvEn':       'Descargar CV Inglés',
    'hero.contact':    'Información de Contacto',
    'about.p1':        'Conóceme Más',
    'about.title':     'Sobre Mí',
    'about.expLabel':  'Experiencia',
    'about.eduLabel':  'Educación',
    'about.leadLabel': 'Liderazgo',
    'exp.p1':          'Explora Mi',
    'exp.title':       'Experiencia',
    'exp.automation':  'QA AUTOMATIZACIÓN',
    'exp.performance': 'Rendimiento',
    'exp.leadership':  'Liderazgo QA & Estrategia',
    'exp.others':      'Otras Habilidades',
    'contact.p1':      'Ponte en Contacto',
    'contact.title':   'Contáctame',
    'contact.cta':     'Disponible para nuevas oportunidades',
    'stat.years':      'Años',
    'stat.sectors':    'Sectores',
    'stat.teams':      'Equipos QA Creados',
    'stat.cert':       'Certificado',
  }
};

const complexContent = {
  en: {
    'hero-subtitle': 'QA Lead Engineer · QA Builder · Team Leader',
    'about-exp-val': '<span id="years-counter">18</span>+ years <br>QA Engineering & Leadership',
    'about-lead-val': 'QA Areas built from scratch<br>Teams trained & mentored<br>Multi-sector experience',
    'about-text-p': `With 18+ years in Quality Assurance, I specialize in <strong>building QA departments from the ground up</strong> —
      defining strategy, selecting toolchains, establishing processes, and scaling teams across banking, insurance,
      telecommunications, retail, and distribution sectors.
      <br><br>
      I lead by doing: designing and implementing proven QA methodologies (risk-based testing, shift-left, test strategy &amp; planning),
      while actively <strong>training and coaching QA engineers</strong> to grow both technically and professionally.
      <br><br>
      <em>Universidad UCLA — M.Sc. Computer Science (2010–2014)</em><br>
      <em>Universidad Yacambú — Electronic Engineer in Computing (2000–2005)</em>`,
    'exp-text-p': `
      <p class="exp-summary-title">QA Lead Automation Engineer — 18+ Years Building Quality from the Ground Up</p>
      <div class="exp-highlights">
        <div class="exp-highlight"><p>Throughout my career I have <strong>created and structured QA departments from scratch</strong> in multiple organizations — defining test strategies, implementing proven methodologies, selecting toolchains, and establishing quality gates that scale with the product.</p></div>
        <div class="exp-highlight"><p>I have led cross-functional QA teams across banking, insurance, telecommunications, retail, and distribution, always with a focus on <strong>mentoring and training engineers</strong> to become autonomous, high-impact contributors.</p></div>
        <div class="exp-highlight"><p>My approach combines <em>shift-left practices, risk-based testing, and ISTQB methodology</em> with hands-on expertise in modern automation stacks.</p></div>
      </div>
      <div class="exp-stack"><span>Playwright</span><span>Cypress</span><span>Selenium</span><span>Katalon</span><span>Postman</span><span>k6</span><span>JMeter</span><span>Grafana</span><span>AppOptics</span><span>Jenkins</span><span>SonarQube</span><span>Azure DevOps</span><span>Jira</span></div>`,
  },
  es: {
    'hero-subtitle': 'Líder en QA · Creador de Áreas QA · Formador de Equipos',
    'about-exp-val': '<span id="years-counter">18</span>+ años <br>Ingeniería QA y Liderazgo',
    'about-lead-val': 'Áreas QA creadas desde cero<br>Equipos formados y mentoreados<br>Experiencia multisectorial',
    'about-text-p': `Con más de 18 años en Aseguramiento de Calidad, me especializo en <strong>construir departamentos de QA desde cero</strong> —
      definiendo estrategia, seleccionando herramientas, estableciendo procesos y escalando equipos en banca, seguros,
      telecomunicaciones, retail y distribución.
      <br><br>
      Lidero desde la práctica: diseñando e implementando <strong>metodologías QA comprobadas</strong> (testing basado en riesgo,
      shift-left, estrategia y planificación de pruebas), formando activamente a ingenieros de QA para crecer
      técnica y profesionalmente.
      <br><br>
      <em>Universidad UCLA — M.Sc. en Ciencias de la Computación (2010–2014)</em><br>
      <em>Universidad Yacambú — Ingeniero Electrónico en Computación (2000–2005)</em>`,
    'exp-text-p': `
      <p class="exp-summary-title">Ingeniero Líder en QA Automation — 18+ Años Construyendo Calidad desde Cero</p>
      <div class="exp-highlights">
        <div class="exp-highlight"><p>A lo largo de mi carrera he <strong>creado y estructurado departamentos de QA desde cero</strong> en múltiples organizaciones — definiendo estrategias de prueba, implementando metodologías comprobadas, seleccionando herramientas y estableciendo quality gates que escalan con el producto.</p></div>
        <div class="exp-highlight"><p>He liderado equipos de QA multifuncionales en banca, seguros, telecomunicaciones, retail y distribución, siempre enfocado en <strong>mentorear y capacitar a ingenieros</strong> para convertirlos en contribuyentes autónomos de alto impacto.</p></div>
        <div class="exp-highlight"><p>Mi enfoque combina <em>prácticas shift-left, testing basado en riesgo y metodología ISTQB</em> con experiencia práctica en stacks modernos de automatización.</p></div>
      </div>
      <div class="exp-stack"><span>Playwright</span><span>Cypress</span><span>Selenium</span><span>Katalon</span><span>Postman</span><span>k6</span><span>JMeter</span><span>Grafana</span><span>AppOptics</span><span>Jenkins</span><span>SonarQube</span><span>Azure DevOps</span><span>Jira</span></div>`,
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  const t = i18n[lang];
  const c = complexContent[lang];

  // Simple data-key elements
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (t[key]) el.textContent = t[key];
  });

  // Complex HTML elements (by id)
  Object.entries(c).forEach(([id, html]) => {
    if (id === 'hero-subtitle') return; // handled separately
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  });

  // Hero subtitle (re-run typing effect or set directly)
  const subtitleEl = document.querySelector('.section__text__p2');
  if (subtitleEl) {
    subtitleEl.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.textContent = '|';
    subtitleEl.appendChild(cursor);
    const text = c['hero-subtitle'];
    let i = 0;
    const type = () => {
      if (i < text.length) {
        subtitleEl.insertBefore(document.createTextNode(text[i]), cursor);
        i++;
        setTimeout(type, 38);
      }
    };
    type();
  }

  // Update badges
  const bmap = badgeMaps[lang];
  document.querySelectorAll('.badge[data-level]').forEach(badge => {
    const lvl = badge.dataset.level;
    if (bmap[lvl]) {
      const [cls, label] = bmap[lvl];
      badge.className = `badge ${cls}`;
      badge.textContent = label;
      badge.dataset.level = lvl;
    }
  });

  // Update lang toggle label
  const label = document.getElementById('lang-label');
  if (label) label.textContent = lang === 'en' ? 'ES' : 'EN';

  localStorage.setItem('lang', lang);
  currentLang = lang;
}

function toggleLang() {
  applyLanguage(currentLang === 'en' ? 'es' : 'en');
}

// Init language on load (after typing effect runs)
window.addEventListener('load', () => {
  if (currentLang === 'es') {
    setTimeout(() => applyLanguage('es'), 1200);
  } else {
    const label = document.getElementById('lang-label');
    if (label) label.textContent = 'ES';
  }
});
  