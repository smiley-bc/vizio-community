document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('py-2', 'shadow');
        } else {
            nav.classList.remove('py-2', 'shadow');
        }
    });

    // 2. Simple Form Animation
    const form = document.getElementById('vizioContact');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
        
        setTimeout(() => {
            btn.innerHTML = 'Message Sent!';
            btn.classList.replace('btn-info', 'btn-success');
            form.reset();
        }, 2000);
    });
});