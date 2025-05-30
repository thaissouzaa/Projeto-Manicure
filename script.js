const abrir_botao = document.querySelectorAll(".abrir-popup")
const fechar_botao = document.getElementById("fechar-popup")
const popup = document.getElementById("popup")


abrir_botao.forEach(botao => {
    botao.addEventListener("click",function(){
    popup.style.display = "block"
    })
});

fechar_botao.addEventListener("click", function(){
    popup.style.display = "none";
});

window.addEventListener("click", function(evento){
    if(evento.target === popup){
        popup.style.display = "none";
    }
});

const botao_screen = getElementById("botao_screen");

window.onscroll = function(){
    if (document.documentElement.scrollTop > 100){
        botao_screen.style.display= "block";
    }
    else {
        botao_screen.style.display= "none";
    }
};

    window.addEventListener("click", function() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
