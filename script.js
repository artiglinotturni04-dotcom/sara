document.addEventListener('DOMContentLoaded', () => {
    const triggers = ['trigger1', 'trigger2', 'trigger3'];
    
    triggers.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', () => {
                // Mostra um alerta para confirmar antes de ligar
                if (confirm('Você está prestes a ligar para a emergência (190). Deseja continuar?')) {
                    window.location.href = 'tel:190';
                }
            });
        }
    });
});
