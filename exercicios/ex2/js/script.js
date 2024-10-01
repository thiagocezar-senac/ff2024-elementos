function aoClicar() {
    let capturaNumberOne = document.querySelector('#numberOne');
    let capturaNumberTwo = document.querySelector('#numberTwo');
    let numberOne = capturaNumberOne.value;
    let numberTwo = capturaNumberTwo.value;
    var soma = parseInt(numberOne) + parseInt(numberTwo);
    alert('Soma: "' + soma + '"');
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);