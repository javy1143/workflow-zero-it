/* ==========================================================================
   Workflow Zero IT — Interactive Motion, Micro-Interactions & UX Controller
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initScrollReveal();
  initCardSpotlight();
  initCounters();
  initStepSwitcher();
  initServiceFilter();
  initFaqAccordion();
  initContactForm();
});

/* 1. Sticky Glass Header */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 18);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* 2. Mobile Navigation Drawer */
function initMobileNav() {
  const btn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  if (!btn || !drawer) return;

  const toggle = (force) => {
    const open = typeof force === 'boolean' ? force : !drawer.classList.contains('is-open');
    drawer.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    btn.innerHTML = open
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  };

  btn.addEventListener('click', () => toggle());

  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggle(false));
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggle(false);
    }
  });
}

/* 3. Staggered Scroll-Reveal Choreography */
function initScrollReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.dataset.delay || 0);
          if (delay > 0) {
            setTimeout(() => entry.target.classList.add('is-revealed'), delay);
          } else {
            entry.target.classList.add('is-revealed');
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

/* 4. Mouse-Tracking Radial Spotlight on Cyber Cards */
function initCardSpotlight() {
  const cards = document.querySelectorAll('.cyber-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* 5. Smooth Animated Counters */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.counter);
    const decimals = Number(el.dataset.decimals || 0);
    const duration = 950;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = current.toFixed(decimals);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target.toFixed(decimals);
      }
    };

    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* 6. Interactive 3-Step Switcher (Home Page) */
function initStepSwitcher() {
  const rows = document.querySelectorAll('[data-step-trigger]');
  const slides = document.querySelectorAll('[data-step-slide]');
  if (!rows.length || !slides.length) return;

  let activeIndex = 0;
  let timer = null;

  const setActive = (index) => {
    activeIndex = index;
    rows.forEach((row, i) => {
      const active = i === index;
      row.classList.toggle('is-active', active);
      row.setAttribute('aria-selected', String(active));
    });
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
    });
  };

  const startAuto = () => {
    stopAuto();
    timer = setInterval(() => {
      setActive((activeIndex + 1) % rows.length);
    }, 5200);
  };

  const stopAuto = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  rows.forEach((row, index) => {
    row.addEventListener('click', () => {
      setActive(index);
      startAuto();
    });
    row.addEventListener('mouseenter', stopAuto);
    row.addEventListener('mouseleave', startAuto);
  });

  startAuto();
}

/* 7. Interactive Services Filter Pills (Services Page) */
function initServiceFilter() {
  const pills = document.querySelectorAll('[data-filter]');
  const blocks = document.querySelectorAll('[data-service-category]');
  if (!pills.length || !blocks.length) return;

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const filter = pill.dataset.filter;
      pills.forEach((p) => p.classList.toggle('is-active', p === pill));

      blocks.forEach((block) => {
        const match = filter === 'all' || block.dataset.serviceCategory === filter;
        block.style.display = match ? '' : 'none';
        if (match) {
          block.classList.add('is-revealed');
        }
      });
    });
  });
}

/* 8. Accessible Animated FAQ Accordion */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (!trigger || !panel) return;

    // Open pre-marked default item
    if (item.classList.contains('is-open')) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }

    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');

      items.forEach((other) => {
        other.classList.remove('is-open');
        const otherBtn = other.querySelector('.faq-trigger');
        const otherPanel = other.querySelector('.faq-panel');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherPanel) otherPanel.style.maxHeight = '0px';
      });

      if (willOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
}

/* 9. Friendly Contact Form Interaction */
function initContactForm() {
  const form = document.getElementById('workflow-zero-contact-form');
  const success = document.getElementById('contact-success');
  const resetBtn = document.getElementById('contact-reset-btn');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const nameInput = form.querySelector('#contact-name');
    const nameSpan = document.getElementById('submitted-name');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    setTimeout(() => {
      const firstName = nameInput && nameInput.value.trim()
        ? nameInput.value.trim().split(' ')[0]
        : 'there';
      if (nameSpan) nameSpan.textContent = firstName;
      form.style.display = 'none';
      success.classList.add('is-visible');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
      }
    }, 550);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      success.classList.remove('is-visible');
      form.style.display = '';
    });
  }
}
