document.addEventListener('DOMContentLoaded', function() {
    const toggleInfoButton = document.getElementById('toggleInfo');
    const personalInfo = document.getElementById('personalInfo');
    const skillButtons = document.querySelectorAll('.skill-btn');
    const skillInfo = document.getElementById('skillInfo');
    const skillDetails = document.getElementById('skillDetails');

    toggleInfoButton.addEventListener('click', function() {
        if (personalInfo.classList.contains('hidden')) {
            personalInfo.classList.remove('hidden');
            toggleInfoButton.textContent = 'Ocultar Detalhes';
        } else {
            personalInfo.classList.add('hidden');
            toggleInfoButton.textContent = 'Mostrar Detalhes';
        }
    });

    skillButtons.forEach(button => {
        button.addEventListener('click', function() {
            const skill = this.dataset.skill;
            let infoText = '';

            switch(skill) {
                case 'html':
                    infoText = 'Conhecimento avançado em HTML5, incluindo semântica e acessibilidade.';
                    break;
                case 'css':
                    infoText = 'Conhecimento em CSS3, incluindo Flexbox, Grid e pré-processadores como SASS.';
                    break;
                case 'js':
                    infoText = 'Conhecimento sólido em JavaScript, incluindo ES6 e frameworks como React e Vue.';
                    break;
                
                default:
                    infoText = 'Selecione uma habilidade para mais detalhes.';
                    break;
            }

            skillInfo.textContent = infoText;
            skillDetails.classList.remove('hidden');
        });
    });
});
