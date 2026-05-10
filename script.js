(function () {
  var body = document.body;
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelectorAll(".nav-links a");
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateHeader() {
    if (!header) {
      return;
    }

    header.classList.toggle("scrolled", window.scrollY > 10);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }

    link.addEventListener("click", function () {
      body.classList.remove("menu-open");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.querySelectorAll(".service-card").forEach(function (card) {
    var heading = card.querySelector("h2, h3");
    if (!heading || heading.textContent.trim() !== "IT Operations" || card.tagName.toLowerCase() === "a") {
      return;
    }

    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    card.style.cursor = "pointer";

    function openItOperations(event) {
      if (event.target.closest("a, button")) {
        return;
      }

      window.location.href = "it-operations.html";
    }

    card.addEventListener("click", openItOperations);
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = "it-operations.html";
      }
    });
  });

  if (toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var revealItems = document.querySelectorAll(".reveal");
  revealItems.forEach(function (item, index) {
    item.style.transitionDelay = Math.min(index % 6, 5) * 70 + "ms";
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("visible");
    });
  }

  var heroPanel = document.querySelector(".hero-panel");
  if (heroPanel && !reduceMotion) {
    heroPanel.addEventListener("pointermove", function (event) {
      var bounds = heroPanel.getBoundingClientRect();
      var x = (event.clientX - bounds.left) / bounds.width - 0.5;
      var y = (event.clientY - bounds.top) / bounds.height - 0.5;

      heroPanel.style.setProperty("--tilt-x", (y * -6).toFixed(2) + "deg");
      heroPanel.style.setProperty("--tilt-y", (x * 6).toFixed(2) + "deg");
    });

    heroPanel.addEventListener("pointerleave", function () {
      heroPanel.style.setProperty("--tilt-x", "0deg");
      heroPanel.style.setProperty("--tilt-y", "0deg");
    });
  }

  var pipelineStages = document.querySelectorAll("[data-pipeline-stage]");
  if (pipelineStages.length && !reduceMotion) {
    var activeStage = 0;
    window.setInterval(function () {
      pipelineStages[activeStage].classList.remove("is-active");
      activeStage = (activeStage + 1) % pipelineStages.length;
      pipelineStages[activeStage].classList.add("is-active");
    }, 1800);
  }

  var contactForm = document.querySelector("[data-mail-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(contactForm);
      var subject = encodeURIComponent("Workflow Zero IT inquiry");
      var bodyLines = [
        "Name: " + (data.get("name") || ""),
        "Company: " + (data.get("company") || ""),
        "Email: " + (data.get("email") || ""),
        "Phone: " + (data.get("phone") || ""),
        "Business type: " + (data.get("business") || ""),
        "Interest: " + (data.get("interest") || ""),
        "Tools in use: " + (data.get("tools") || ""),
        "",
        "What I am trying to improve:",
        data.get("message") || ""
      ];
      window.location.href =
        "mailto:hello@workflowzeroit.com?subject=" +
        subject +
        "&body=" +
        encodeURIComponent(bodyLines.join("\n"));
    });
  }
})();
