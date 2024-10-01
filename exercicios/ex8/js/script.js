function aoClicar() {
    let capturarNome = document.querySelector('#name');
    let nome = capturarNome.value;

    let capturarValorHora = document.querySelector('#valueHour');
    let valorHora = capturarValorHora.value;
    let valorHoraInt = parseInt(valorHora);

    let capturarHorasTrabalhadas = document.querySelector('#jobHourMounth');
    let horasTrabalhadas = capturarHorasTrabalhadas.value;
    let horasTrabalhadasInt = parseInt(horasTrabalhadas);

    let valorTotal = valorHoraInt * horasTrabalhadasInt;
    let valorTotalFloat = parseFloat(valorTotal);

    alert('' + nome + ', seu salário esse mês será: ' + valorTotalFloat + '');

}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);