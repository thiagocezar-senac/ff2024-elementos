function aoClicar() {
    let turno = document.querySelector('#turnoId').value;
    let turnoNome = '';

    switch (turno) {
        case 'm':
            turnoNome = "Bom dia!";
            break;
        case 'v':
            turnoNome = "Boa tarde!";
            break;
        case 'n':
            turnoNome = "Boa noite!";
            break;
    }

    alert(`${turnoNome}`);
}

let botao = document.querySelector('.btnExibaValor');
botao.addEventListener('click', aoClicar);