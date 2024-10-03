function aoClicar() {
    let produto1 = document.querySelector('#produto1').value;
    let produto2 = document.querySelector('#produto2').value;
    let produto3 = document.querySelector('#produto3').value;

    let valor1 = parseFloat(document.querySelector('#valor1').value);
    let valor2 = parseFloat(document.querySelector('#valor2').value);
    let valor3 = parseFloat(document.querySelector('#valor3').value);

    let min = Math.min(valor1, valor2, valor3);

    if (min == valor1) {
        alert('O Produto mais barato é: ' + produto1 + ' ' + valor1 + '.');
    }

    if (min == valor2) {
        alert('O Produto mais barato é: ' + produto2 + ' ' + valor2 + '.');
    }

    if (min == valor3) {
        alert('O Produto mais barato é: ' + produto3 + ' ' + valor3 + '.');
    }

}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);