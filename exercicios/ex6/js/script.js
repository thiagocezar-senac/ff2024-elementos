function aoClicar() {
    let capturaNumberOne = document.querySelector('#numberOne');
    let capturaNumberTwo = document.querySelector('#numberTwo');
    let capturaNumberThree = document.querySelector('#numberThree');
    let numberOne = capturaNumberOne.value;
    let numberTwo = capturaNumberTwo.value;
    let numberThree = capturaNumberThree.value;
    let numberOneInt = parseInt(numberOne);
    let numberTwoInt = parseInt(numberTwo);
    let numberThreeInt = parseInt(numberThree);
    let maior = numberOneInt;

    if (numberTwoInt > maior) {
        maior = numberTwoInt;
    }

    if (numberThreeInt > maior) {
        maior = numberThreeInt;
    }

    if (numberTwoInt > numberThreeInt) {
        maior = numberTwoInt;
    }

    alert('' + maior + ': É o maior entre os três!');
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);