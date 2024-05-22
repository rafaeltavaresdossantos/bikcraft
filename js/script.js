// Ativando link do menu.

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    const url = window.location.href;
    
    if(url.includes(link.href)){
        link.classList.add('ativo');
    }
    
}

links.forEach(ativarLink);

// Ativar itens do orçamento.

const parametros = new URLSearchParams(location.search);

function pegarParametros(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }
    
}

parametros.forEach(pegarParametros);

// Mudando imagens de posição

const imagens = document.querySelectorAll(".bicicleta-imagens img");
const containerImagens = document.querySelector(".bicicleta-imagens");

function mudarImagem(event){
    const img = event.currentTarget;

    const media = matchMedia("(min-width: 1000px)").matches;

    if (media) {
        containerImagens.prepend(img);
    }    
}

function eventoImagem(img){
    img.addEventListener("click", mudarImagem);
}

imagens.forEach(eventoImagem);

// Plugin de animação

new SimpleAnime();
