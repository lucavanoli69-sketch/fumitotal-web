/**
 * FUMITOTAL — JavaScript Principal
 * Funcionalidad: Menú accesible móvil, scroll dinámico, envío asíncrono Netlify Forms
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Menú Móvil Accesible ---
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Cerrar menú al hacer click en cualquier enlace de navegación
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Cerrar menú con tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // --- 2. Sombra sutil en Header al scrollear ---
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  // --- 3. Formulario de Contacto (Netlify Forms & Feedback en vivo) ---
  const contactForm = document.querySelector('#contact-form');
  const formStatus = document.querySelector('.form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Enviar';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando consulta...';
      }

      const formData = new FormData(contactForm);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then((response) => {
        formStatus.className = 'form-status success';
        formStatus.textContent = '¡Gracias por comunicarte con FumiTotal! Hemos recibido tu solicitud de presupuesto y te responderemos a la brevedad.';
        contactForm.reset();
      })
      .catch((error) => {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Hubo un inconveniente al enviar tu mensaje. Por favor, intenta de nuevo o comunícate directamente por teléfono/WhatsApp.';
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      });
    });
  }

  // --- 4. Enlaces suaves automáticos ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
