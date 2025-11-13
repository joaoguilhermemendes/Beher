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

const scriptURL = 'https://script.google.com/macros/s/AKfycbxJF8FxtHqxMnO7_R1Y7fQLCKR8QZ1YeXbUVVmVmGWIkemXxdPCLVn5NUC6C1ujY_-MoA/exec';

document.addEventListener('DOMContentLoaded', () => {
  const scriptURL = 'https://script.google.com/macros/s/SEU_SCRIPT_ID/exec';
  const form = document.getElementById('lead-form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        if (response.ok) {
          alert('✅ Formulário enviado com sucesso!');
          form.reset();
        } else {
          alert('❌ Erro ao enviar o formulário. Tente novamente.');
        }
      })
      .catch(error => alert('⚠️ Erro de conexão: ' + error.message));
  });
});

