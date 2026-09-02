/* =========================================================
   MARÉ — script.js
   ========================================================= */

/* -----------------------------------------------------------
   👉 PASO IMPORTANTE: poné acá tu número real de WhatsApp,
   con código de país y SIN espacios, signos ni el "+".
   Ejemplo Costa Rica: "50688887777"
----------------------------------------------------------- */
const WHATSAPP_NUMBER = "50600000000"; // TODO: reemplazar por tu número real

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menú móvil ---------- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  document.querySelectorAll('#mobile-nav [data-nav]').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Selector de color por producto ---------- */
  document.querySelectorAll('.product-card').forEach(card => {
    const swatches = card.querySelectorAll('.swatch');
    const mainImg = card.querySelector('.product-photo img[data-img]');
    const photoFrame = card.querySelector('.product-photo');
    const colorNameEl = card.querySelector('[data-color-name]');
    const whatsappBtn = card.querySelector('[data-whatsapp]');

    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        swatches.forEach(s => s.classList.remove('is-active'));
        swatch.classList.add('is-active');

        const color = swatch.dataset.color;
        const imgSrc = swatch.dataset.img;

        if (colorNameEl) colorNameEl.textContent = color;
        if (whatsappBtn) whatsappBtn.dataset.color = color;

        if (mainImg && imgSrc) {
          photoFrame.classList.remove('img-placeholder');
          mainImg.style.display = '';
          mainImg.src = imgSrc;
          photoFrame.dataset.label = card.querySelector('h3').textContent + ' — ' + color;
        }
      });
    });

    // color inicial (el que ya tiene .is-active en el HTML)
    const initial = card.querySelector('.swatch.is-active');
    if (initial && whatsappBtn) whatsappBtn.dataset.color = initial.dataset.color;
  });

  /* ---------- Botones "Comprar por WhatsApp" ---------- */
  function buildWhatsappUrl(productName, price, color) {
    let message = `Hola Maré 💕, estoy interesada en ${productName}`;
    if (color) message += ` en color ${color}`;
    message += '. ¿Me pueden ayudar con disponibilidad y tallas?';
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  document.querySelectorAll('[data-whatsapp]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.productName || 'la colección Maré';
      const color = btn.dataset.color || '';
      window.open(buildWhatsappUrl(name, btn.dataset.price, color), '_blank', 'noopener');
    });
  });

  // Botón flotante + footer: mensaje genérico, sin producto específico
  document.querySelectorAll('[data-whatsapp-link]').forEach(link => {
    link.href = buildWhatsappUrl('la colección Maré');
  });

  /* ---------- Revelado suave al hacer scroll ---------- */
  const revealTargets = document.querySelectorAll(
    '.section-head, .product-card, .sobre-inner, .beneficio, .cta-final h2, .cta-final .btn'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

});
