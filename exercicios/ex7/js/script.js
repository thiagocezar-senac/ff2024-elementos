function aoClicar() {
    let capturaNumberOne = document.querySelector('#numberOne');
    let capturaNumberTwo = document.querySelector('#numberTwo');
    let numberOne = capturaNumberOne.value;
    let numberTwo = capturaNumberTwo.value;
    let soma = parseInt(numberOne) + parseInt(numberTwo);

    pResultado = document.querySelector('#resultado');

    pResultado.innerHTML = `${parseInt(numberOne)} + ${parseInt(numberTwo)} = ${soma}`

    alert('Soma: "' + soma + '"');
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);