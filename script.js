
//POPUP

const abrir_botao = document.querySelectorAll(".abrir-popup")
const fechar_botao = document.getElementById("fechar-popup")
const popup = document.getElementById("popup")


if (popup && fechar_botao && abrir_botao.length > 0) {
    abrir_botao.forEach(botao => {
        botao.addEventListener("click", function () {
            popup.style.display = "block";
        });
    });

fechar_botao.addEventListener("click", function(){
    popup.style.display = "none";
});

window.addEventListener("click", function(evento){
    if(evento.target === popup){
        popup.style.display = "none";
    }
});
}

//Botão para ir para cima na página

const botao_screen = document.getElementById("botao_screen");

if (botao_screen) {

window.onscroll = function(){
    if (document.documentElement.scrollTop > 100){
        botao_screen.style.display= "block";
    }
    else {
        botao_screen.style.display= "none";
    }
};

    botao_screen.addEventListener("click", function() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

    //Filtro para as fotos galerias

    
const botoes = document.querySelectorAll(".botoes button")
const fotos = document.querySelectorAll(".foto")

if (botoes && fotos.length > 0) {

botoes.forEach(botao=>{
    botao.addEventListener("click",()=>{
        const categoria = botao.getAttribute("data-categoria");

        fotos.forEach(foto =>{
            if(categoria=="tudo"){
                foto.style.display = "inline-block";
            }
            else{
                if (foto.getAttribute("data-categoria") === categoria){
                    foto.style.display = "inline-block"
                }
                else{
                foto.style.display = "none"
            }
            }
        });
    });
});
}