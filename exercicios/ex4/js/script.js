function aoClicar() {
    let getNumber = document.querySelector('#number');
    let number = getNumber.value;

    if (number == 1) {
        alert('' + number + ': Domingo!');

    } else if (number == 2) {
        alert('' + number + ': Segunda-feira!');

    } else if (number == 3) {
        alert('' + number + ': Terça-feira!');

    } else if (number == 4) {
        alert('' + number + ': Quarta-feira!');

    } else if (number == 5) {
        alert('' + number + ': Quinta-feira!');

    } else if (number == 6) {
        alert('' + number + ': Sexta-feira!');

    } else if (number == 7) {
        alert('' + number + ': Sábado!');
    }

    // Tem como melhorar utilizando While, estudar essa possibilidade.
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);