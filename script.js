document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.innerHTML = 'Transmission Successful!';
    btn.classList.replace('btn-info', 'btn-success');
    this.reset();
});