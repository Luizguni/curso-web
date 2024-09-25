document.addEventListener('DOMContentLoaded', function() {
    const toggleInfoButton = document.getElementById('toggleInfo');
    const personalInfo = document.getElementById('personalInfo');
    const skillCards = document.querySelectorAll('.skill-card');

    toggleInfoButton.addEventListener('click', function() {
        if (personalInfo.classList.contains('hidden')) {
            personalInfo.classList.remove('hidden');
            toggleInfoButton.textContent = 'Ocultar Detalhes';
        } else {
            personalInfo.classList.add('hidden');
            toggleInfoButton.textContent = 'Mostrar Detalhes';
        }
    });

    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            const description = this.querySelector('.skill-description');
            const isVisible = description.style.display === 'block';
            skillCards.forEach(c => c.querySelector('.skill-description').style.display = 'none');
            description.style.display = isVisible ? 'none' : 'block';
        });
    });
});
