function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
  
    // Obtendo as quantidades disponíveis
    let qtdPista = parseInt(document.getElementById('qtd-pista').innerText);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').innerText);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').innerText);
    document.getElementById('qtd').value = '';
    // Verificação e atualização
        if (qtd == ''|| qtd < 1 || isNaN(qtd)) {
            alert('Quantidade inválida!');
    }   else if (tipoIngresso === 'pista') {
        if (qtd > qtdPista) {
            alert('Quantidade insuficiente de ingressos disponíveis!');
        } else {
            document.getElementById('qtd-pista').innerText = qtdPista - qtd;
        }
    }   else if (tipoIngresso === 'superior') {
        if (qtd > qtdSuperior) {
            alert('Quantidade insuficiente de ingressos disponíveis!');
        } else {
            document.getElementById('qtd-superior').innerText = qtdSuperior - qtd;
        }
    }   else if (tipoIngresso === 'inferior') {
        if (qtd > qtdInferior) {
            alert('Quantidade insuficiente de ingressos disponíveis!');
        } else {
            document.getElementById('qtd-inferior').innerText = qtdInferior - qtd;
        }
    }

}

