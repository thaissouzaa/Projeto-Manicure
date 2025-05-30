const abrir_botao = document.getElementById("abrir-popup")
const fechar_botao = document.getElementById("fechar-popup")
const popup = document.getElementById("popup")

abrir_botao.addEventListener("click",function(){
    popup.style.display = "block"
});

fechar_botao.addEventListener("click", function(){
    popup.style.display = "none";
});

window.addEventListener("click", function(evento){
    if(evento.target === popup){
        popup.style.display = "none";
    }
});