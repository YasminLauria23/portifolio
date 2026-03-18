// ===== FADE IN =====
window.addEventListener('load', () => {
    const elementos = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, { threshold: 0.1 }); // ← espera o elemento aparecer 10% na tela

    elementos.forEach(elemento => observer.observe(elemento));
});