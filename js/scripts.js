var sumario = document.querySelector('.sumario');
var sumarioOriginalWidth = getComputedStyle(sumario).width; // Pega a largura original computada

window.addEventListener('scroll', function() {
    // Verifica a largura da janela
    if (window.innerWidth <= 991) {
        return; // Se a janela for menor ou igual a 991px, não faz nada e retorna
    }

    if (window.scrollY >= 150) {
        sumario.style.position = 'fixed';
        sumario.style.top = '0';
        sumario.style.width = sumarioOriginalWidth; // Usa a largura original
        sumario.style.zIndex = '1000';
    } else {
        sumario.style.position = '';
        sumario.style.top = '';
        sumario.style.width = ''; // Reseta para a largura original quando rolar para cima
        sumario.style.zIndex = '';
    }
});
