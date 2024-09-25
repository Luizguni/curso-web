document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simulação de envio de formulário
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => { data[key] = value });

        // Exibe uma mensagem de sucesso
        formResponse.textContent = 'Mensagem enviada com sucesso! Obrigado pelo seu contato.';
        formResponse.classList.remove('hidden');
        form.reset();
    });
});
