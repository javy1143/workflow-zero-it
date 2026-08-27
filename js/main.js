/**
 * Workflow Zero IT - Main Interactive Script
 * Handles pricing switch, ROI calculator, FAQ accordion, tab switcher, scroll reveal,
 * live workflow simulator, and contact flow to hello@workflowzeroit.com.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollReveal();
  initPricingToggle();
  initCalculator();
  initShowcaseTabs();
  initFaqAccordion();
  initContactForm();
  initCopyEmail();
  initPlanSelectors();
  initLiveSimulator();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });
}

/* --------------------------------------------------------------------------
   2. Scroll Reveal Animations (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    reveals.forEach(el => el.classList.add('active'));
  }
}

/* --------------------------------------------------------------------------
   3. Live Workflow Simulator
   -------------------------------------------------------------------------- */
function initLiveSimulator() {
  const playBtn = document.getElementById('simPlayBtn');
  const nodes = [
    document.getElementById('simNode1'),
    document.getElementById('simNode2'),
    document.getElementById('simNode3'),
    document.getElementById('simNode4')
  ];

  if (!playBtn || !nodes[0]) return;

  let isRunning = false;

  function runSimulation() {
    if (isRunning) return;
    isRunning = true;
    playBtn.textContent = '⚡ Running...';
    playBtn.style.opacity = '0.7';

    // Reset all nodes
    nodes.forEach(n => {
      if (n) {
        n.classList.remove('active', 'completed');
      }
    });

    // Step 1: Lead Inbound
    setTimeout(() => {
      if (nodes[0]) nodes[0].classList.add('active');
    }, 200);

    // Step 2: AI Triage
    setTimeout(() => {
      if (nodes[0]) {
        nodes[0].classList.remove('active');
        nodes[0].classList.add('completed');
      }
      if (nodes[1]) nodes[1].classList.add('active');
    }, 900);

    // Step 3: CRM & Slack Sync
    setTimeout(() => {
      if (nodes[1]) {
        nodes[1].classList.remove('active');
        nodes[1].classList.add('completed');
      }
      if (nodes[2]) nodes[2].classList.add('active');
    }, 1600);

    // Step 4: Quote & Invoice Ready
    setTimeout(() => {
      if (nodes[2]) {
        nodes[2].classList.remove('active');
        nodes[2].classList.add('completed');
      }
      if (nodes[3]) nodes[3].classList.add('active');
    }, 2300);

    // Done
    setTimeout(() => {
      if (nodes[3]) {
        nodes[3].classList.remove('active');
        nodes[3].classList.add('completed');
      }
      playBtn.textContent = '✓ Completed (0.8s total)';
      playBtn.style.opacity = '1';
      playBtn.style.backgroundColor = '#10B981';

      setTimeout(() => {
        playBtn.textContent = '▶ Replay Test Flow';
        playBtn.style.backgroundColor = '';
        isRunning = false;
      }, 2500);
    }, 3000);
  }

  playBtn.addEventListener('click', runSimulation);

  // Auto-run once on scroll view
  if ('IntersectionObserver' in window) {
    const simCard = document.querySelector('.live-simulator-card');
    if (simCard) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isRunning) {
            runSimulation();
            observer.disconnect();
          }
        });
      }, { threshold: 0.5 });
      observer.observe(simCard);
    }
  }
}

/* --------------------------------------------------------------------------
   4. Pricing Toggle (Monthly vs. One-Time)
   -------------------------------------------------------------------------- */
const pricingData = {
  monthly: {
    tier1: {
      price: '$299',
      period: '/ month',
      alt: 'or $900 one-time setup',
      subnote: 'Includes error monitoring & continuous uptime support',
      cta: 'Choose Starter ($299/mo)'
    },
    tier2: {
      price: '$749',
      period: '/ month',
      alt: 'or $2,200 one-time setup',
      subnote: 'Includes regular workflow improvements & priority support',
      cta: 'Choose Growth ($749/mo)'
    },
    tier3: {
      price: '$1,650',
      period: '/ month',
      alt: 'or $4,500 one-time setup',
      subnote: 'Dedicated automation partner & proactive optimizations',
      cta: 'Choose Scale ($1,650/mo)'
    }
  },
  onetime: {
    tier1: {
      price: '$900',
      period: ' one-time',
      alt: 'or $299/month with ongoing care',
      subnote: 'Turnkey setup, full testing & handover included',
      cta: 'Choose Starter ($900 once)'
    },
    tier2: {
      price: '$2,200',
      period: ' one-time',
      alt: 'or $749/month with ongoing care',
      subnote: 'Complete build, documentation & 30-day warranty',
      cta: 'Choose Growth ($2,200 once)'
    },
    tier3: {
      price: '$4,500',
      period: ' one-time',
      alt: 'or $1,650/month with ongoing care',
      subnote: 'Full custom workflow build & 60-day warranty',
      cta: 'Choose Scale ($4,500 once)'
    }
  }
};

function initPricingToggle() {
  const toggle = document.getElementById('pricingToggle');
  const labelMonthly = document.getElementById('labelMonthly');
  const labelOnetime = document.getElementById('labelOnetime');

  if (!toggle) return;

  function updatePrices(isOneTime) {
    const mode = isOneTime ? 'onetime' : 'monthly';
    const data = pricingData[mode];

    if (labelMonthly && labelOnetime) {
      if (isOneTime) {
        labelMonthly.classList.remove('active');
        labelOnetime.classList.add('active');
      } else {
        labelMonthly.classList.add('active');
        labelOnetime.classList.remove('active');
      }
    }

    // Tier 1
    const t1Price = document.getElementById('t1Price');
    const t1Period = document.getElementById('t1Period');
    const t1Alt = document.getElementById('t1Alt');
    const t1Btn = document.getElementById('t1Btn');
    if (t1Price) animateValueChange(t1Price, data.tier1.price);
    if (t1Period) t1Period.textContent = data.tier1.period;
    if (t1Alt) t1Alt.textContent = data.tier1.alt;
    if (t1Btn) t1Btn.textContent = data.tier1.cta;

    // Tier 2
    const t2Price = document.getElementById('t2Price');
    const t2Period = document.getElementById('t2Period');
    const t2Alt = document.getElementById('t2Alt');
    const t2Btn = document.getElementById('t2Btn');
    if (t2Price) animateValueChange(t2Price, data.tier2.price);
    if (t2Period) t2Period.textContent = data.tier2.period;
    if (t2Alt) t2Alt.textContent = data.tier2.alt;
    if (t2Btn) t2Btn.textContent = data.tier2.cta;

    // Tier 3
    const t3Price = document.getElementById('t3Price');
    const t3Period = document.getElementById('t3Period');
    const t3Alt = document.getElementById('t3Alt');
    const t3Btn = document.getElementById('t3Btn');
    if (t3Price) animateValueChange(t3Price, data.tier3.price);
    if (t3Period) t3Period.textContent = data.tier3.period;
    if (t3Alt) t3Alt.textContent = data.tier3.alt;
    if (t3Btn) t3Btn.textContent = data.tier3.cta;
  }

  function animateValueChange(element, newValue) {
    element.style.transform = 'scale(0.85)';
    element.style.opacity = '0.5';
    setTimeout(() => {
      element.textContent = newValue;
      element.style.transform = 'scale(1)';
      element.style.opacity = '1';
    }, 120);
  }

  toggle.addEventListener('change', (e) => {
    updatePrices(e.target.checked);
  });

  if (labelMonthly) {
    labelMonthly.addEventListener('click', () => {
      toggle.checked = false;
      updatePrices(false);
    });
  }

  if (labelOnetime) {
    labelOnetime.addEventListener('click', () => {
      toggle.checked = true;
      updatePrices(true);
    });
  }
}

/* --------------------------------------------------------------------------
   5. Interactive ROI & Time Saved Calculator
   -------------------------------------------------------------------------- */
function initCalculator() {
  const hoursSlider = document.getElementById('calcHours');
  const rateSlider = document.getElementById('calcRate');
  const hoursValDisplay = document.getElementById('calcHoursVal');
  const rateValDisplay = document.getElementById('calcRateVal');
  const hoursSavedDisplay = document.getElementById('calcResultHours');
  const moneySavedDisplay = document.getElementById('calcResultMoney');

  if (!hoursSlider || !rateSlider) return;

  function calculate() {
    const weeklyHours = parseFloat(hoursSlider.value);
    const hourlyRate = parseFloat(rateSlider.value);

    if (hoursValDisplay) hoursValDisplay.textContent = `${weeklyHours} hrs/wk`;
    if (rateValDisplay) rateValDisplay.textContent = `$${hourlyRate}/hr`;

    const monthlyHoursSpent = weeklyHours * 4.33;
    const monthlyHoursSaved = Math.round(monthlyHoursSpent * 0.70);
    const annualHoursSaved = Math.round(weeklyHours * 52 * 0.70);
    const annualMoneySaved = Math.round(annualHoursSaved * hourlyRate);

    if (hoursSavedDisplay) {
      hoursSavedDisplay.textContent = `~${monthlyHoursSaved} hrs`;
    }
    if (moneySavedDisplay) {
      moneySavedDisplay.textContent = `$${annualMoneySaved.toLocaleString()}`;
    }
  }

  hoursSlider.addEventListener('input', calculate);
  rateSlider.addEventListener('input', calculate);
  calculate();
}

/* --------------------------------------------------------------------------
   6. Interactive Showcase Tabs
   -------------------------------------------------------------------------- */
function initShowcaseTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.showcase-panel');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(`tab-${target}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. Contact Form Flow -> hello@workflowzeroit.com
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName')?.value.trim() || 'Valued Business Owner';
    const email = document.getElementById('formEmail')?.value.trim() || '';
    const business = document.getElementById('formBusiness')?.value.trim() || 'Not specified';
    const plan = document.getElementById('formPlan')?.value || 'Not selected';
    const message = document.getElementById('formMessage')?.value.trim() || '';

    const targetEmail = 'hello@workflowzeroit.com';
    const subject = encodeURIComponent(`Workflow Zero Inquiry: ${business} (${name})`);
    const bodyContent = 
`Hi Workflow Zero Team,

My Name: ${name}
Business Name / Type: ${business}
Email: ${email}
Interested Plan / Model: ${plan}

What's slowing us down / Task to automate:
${message}

Looking forward to hearing how you can help us!`;

    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    if (feedback) {
      feedback.className = 'form-feedback success';
      feedback.innerHTML = `
        <strong>Thank you, ${name}!</strong><br>
        We're launching your email app to send your details directly to <strong>${targetEmail}</strong>.<br>
        <span class="text-small">If your email client didn't open automatically, click below to send directly:</span><br>
        <a href="${mailtoUrl}" class="btn btn-primary btn-sm" style="margin-top: 0.75rem; display: inline-flex;">Send Email Now</a>
      `;
    }

    window.location.href = mailtoUrl;
  });
}

/* --------------------------------------------------------------------------
   9. Copy Email Helper
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  const targetEmail = 'hello@workflowzeroit.com';

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(targetEmail);
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.color = 'var(--wz-blue)';
        btn.style.borderColor = 'var(--wz-blue)';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2500);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = targetEmail;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   10. Plan Selection Prefill
   -------------------------------------------------------------------------- */
function initPlanSelectors() {
  const selectBtns = document.querySelectorAll('.select-plan-btn');
  const planSelect = document.getElementById('formPlan');
  const contactSection = document.getElementById('contact');

  selectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.getAttribute('data-plan');
      if (planSelect && planName) {
        planSelect.value = planName;
      }
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
