tailwind.config = {
    theme: {
        extend: {
            colors: {
                'bordo': '#7d0a28', 
                'bordo-light': '#a84c68', 
                'dourado': '#d4af37', 
                'creme': '#f5f5f5',
            },
            boxShadow: {
                'premium': '0 10px 30px rgba(125, 10, 40, 0.1), 0 4px 6px rgba(125, 10, 40, 0.05)',
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        // Alterna a visibilidade do menu
        mobileMenu.classList.toggle('hidden');
        
        // Alterna os ícones do botão
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    };

    // 1. Alterna o menu ao clicar no botão
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    // 2. Fecha o menu quando um link é clicado (para navegação em seção)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Garante que o menu só feche se estiver aberto (não contiver 'hidden')
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });
});