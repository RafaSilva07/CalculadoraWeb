// Seleciona os elementos importantes
const display = document.getElementById('display');
const botoes = document.querySelectorAll('.botao');

// Adiciona evento de clique em todos os botões
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const valor = botao.getAttribute('data-valor');
        
        if (valor === 'C') {
            // Limpa o display
            display.textContent = '0';
        } else if (valor === '=') {
            try {
                // Avalia a expressão e mostra o resultado
                display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/'));
            } catch {
                display.textContent = 'Erro';
            }
        } else {
            // Adiciona o valor ao display
            if (display.textContent === '0') {
                display.textContent = valor;
            } else {
                display.textContent += valor;
            }
        }
    });
});
