var titulo = document.getElementsByTagName('h1')[0];
titulo.innerHTML = ' Fuga dolore vitae';
var primeiroParagrafo = document.getElementById('primeiro');
var destaques = document.getElementsByClassName('destaque')[1];
destaques.innerHTML = 'Alô mundo!';
var destaque = document.querySelector("span.destaque");

destaque.innerHTML = 'Hello world';

var spans = document.querySelectorAll('span');

var imagem = document.getElementsByTagName('img')[0];
imagem.src = 'img2.jpg';

titulo.addEventListener('mouseover', function (event) {
    trocarImagem();
})

console.log(spans);

function trocarImagem() {
    var imagem = document.querySelector('img');
    if (imagem.src.indexOf("img3.jpg") != -1) {
        imagem.src = "img2.jpg";
    } else {
        imagem.src = "img3.jpg";
    }
}

