function aoClicar() {
    let getGradeOne = document.querySelector('#gradeOne');
    let getGradeTwo = document.querySelector('#gradeTwo');
    let gradeOne = getGradeOne.value;
    let gradeTwo = getGradeTwo.value;
    let somaNotas = parseInt(gradeOne) + parseInt(gradeTwo);
    let mediaNotas = parseInt(somaNotas) / 2;

    console.log(mediaNotas);

    if (mediaNotas >= 7) {
        alert('Você foi aprovado, parabéns! Nota: ' + mediaNotas + '');

    } else if (mediaNotas < 5) {
        alert('Infelizmente você foi reprovado! Nota: ' + mediaNotas + '');

    } else if (mediaNotas >= 5 && mediaNotas <= 6) {
        alert('Você está de recuperação! Nota: ' + mediaNotas + '');
    }

}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);