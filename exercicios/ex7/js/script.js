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

    let min = Math.min(numberOneInt, numberTwoInt, numberThreeInt);
    let max = Math.max(numberOneInt, numberTwoInt, numberThreeInt);

    alert('' + min + ': É o menor entre os três!');
    alert('' + max + ': É o maior entre os três!');
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);