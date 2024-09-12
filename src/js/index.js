/*
    Quando clicar na seta para avançar temos que esconder btodas as imagens e mostrar a próxima imagem.

        A imagem atual começa em 0 porque é a primeira imagem, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens  pra poder saber que agora eu vou mostrar a próxima imagem.

            _Esconder todas a imagens: 
                Pegar todas as imagens usando o DOM e remover a classe mostrar.
            _Mostrar a próxima imagem:
                Pegar todas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela.

*/
const imagensPainel = document.querySelectorAll(".imagem_painel");
const setaAvancar = document.getElementById("btn_avancar");
const setaVoltar = document.getElementById("btn_voltar");
let imagemAtual = 0;

// Quando clicar na seta para avançar temos que esconder btodas as imagens e mostrar a próxima imagem.

setaAvancar.addEventListener("click", function () {

    //A imagem atual começa em 0 porque é a primeira imagem, assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens  pra poder saber que agora eu vou mostrar a próxima imagem.//

        imagemAtual++;
    
    /* _Esconder todas a imagens: 
        Pegar todas as imagens usando o DOM e remover a classe mostrar.*/
    
        imagensPainel.forEach(imagem => {
            imagem.classList.remove("mostrar");
        });

        imagensPainel[imagemAtual].classList.add("mostrar");
})