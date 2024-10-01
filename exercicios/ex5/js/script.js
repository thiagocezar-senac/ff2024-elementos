function aoClicar() {
    let capturaNumberOne = document.querySelector('#numberOne');
    let capturaNumberTwo = document.querySelector('#numberTwo');
    let numberOne = capturaNumberOne.value;
    let numberTwo = capturaNumberTwo.value;
    
        if (numberOne > numberTwo) {
            alert('' + numberOne + ': É o maior entre os dois!');
        } else {
            alert('' + numberTwo + ': É o maior entre os dois!');

        }
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);