function aoClicar() {
    let capturaIdade = document.querySelector('#myYear');
    let valorDigitado = capturaIdade.value;
    let year = "2024";
    let idadeReal = year - valorDigitado;
    alert('Sua idade é: "' + idadeReal + '"');
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);