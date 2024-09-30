// Selecionando o DIV pelo ID
let meuDiv = document.getElementById('meuDiv');
console.log(meuDiv);

// Selecionando todos os parágrafos com a classe "paragrafo"
let paragrafos = document.getElementsByClassName('paragrafo');
console.log(paragrafos);

// Selecionando o primeiro parágrafo com a classe "paragrafo"
let primeiroParagrafo = document.querySelector('.paragrafo');
console.log(primeiroParagrafo);

// Selecionando todos os parágrafos dentro do div
let paragrafosDentroDiv = document.querySelectorAll('#meuDiv p');
console.log(paragrafosDentroDiv);