function aoClicar() {

    let suaAltura = document.querySelector('#valorAltura').value;
    let suaIdade = document.querySelector('#valorIdade').value;
    let altura = parseFloat(suaAltura);
    let idade = parseFloat(suaIdade);
    
    if (altura >= 160 && idade == 18) {
        alert(`Você está liberado para ir a Montanha russa!`);

    } else if (altura >= 170) {
        alert(`Você está liberado para ir a Montanha russa!`);

    } else {
        alert(`Infelizmente você não pode ir a Montanha russa!`);
    }
    
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);