// script.js
// Adiciona funcionalidade de rolagem suave para os links do índice
document.querySelectorAll('.ez-toc-container a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evita navegação instantânea
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        // Rolar suavemente até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
