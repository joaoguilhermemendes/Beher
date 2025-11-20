tailwind.config = {
    theme: {
        extend: {
            colors: {
                'vinho': '#67061d', 
                'vinho-light': '#f294aa', 
                'laranja': '#c73e04', 
                'bege': '#ffecce',
                'bege-light': '#fff5e6',
            },
            boxShadow: {
                'premium': '0 10px 30px rgba(125, 10, 40, 0.1), 0 4px 6px rgba(125, 10, 40, 0.05)',
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('mobile-menu-icon-open');
  const iconClose = document.getElementById('mobile-menu-icon-close');

  if (!btn || !menu) return;

  const openMenu = () => {
    menu.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
  };

  const closeMenu = () => {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
  };

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (menu.classList.contains('hidden')) openMenu();
    else closeMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      if (!menu.classList.contains('hidden')) closeMenu();
    }
  });

  // Close on ESC
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const whatsappNumber = "5522981478996";
  const message = "Olá! Eu adoraria saber mais sobre os serviços disponíveis.";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const whatsappLinks = document.querySelectorAll(".whatsapp-link");

  whatsappLinks.forEach(link => {
    link.href = whatsappURL;
  });
});

const scriptURL = "https://script.google.com/macros/s/AKfycbyPOElUHexepXrd51MsmxHkuRtboc5YW_qVLCkYUQhwB-obEuGNeCpKPpmxPS7EEBirFQ/exec";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lead-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const params = new URLSearchParams();

    formData.forEach((value, key) => params.append(key, value));

    fetch(`${scriptURL}?${params.toString()}`, { method: "GET" })
      .then((res) => res.text())   
      .then(() => {
        alert("✅ Formulário enviado com sucesso!");
        form.reset();
      })
      .catch((err) => alert("⚠️ Erro: " + err));
  });
});


// Animations
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    items.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".reveal-side");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  stats.forEach((stat) => observer.observe(stat));
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeSections.forEach((sec) => observer.observe(sec));
});
