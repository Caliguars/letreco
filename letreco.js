idLinha = 1;
let linha = document.getElementById("linha"+idLinha);
let certa="ARTUR";
let botao = document.getElementById("btnTestar");
let input = document.getElementById("entrada");
botao.addEventListener("click",testarPalavra);
input.addEventListener("keydown",detectaEnter);

function detectaEnter(tecla){
    if (tecla.key === "Enter") {
        testarPalavra();
    }
}

function testarPalavra(){
    let palavra = document.getElementById("entrada").value;
    certa=certa.toUpperCase();
    palavra=palavra.toUpperCase();
    for(i=0;i<palavra.length;i++){
        if(palavra[i]==certa[i]){
            addCerta(palavra[i]);
        }
    }
    idLinha++;
    linha = document.getElementById("linha"+idLinha);
}

function addCerta(letra){
    console.log(letra);
    let item = document.createElement("div");
    item.classList.add("letra");
    item.classList.add("certa");
    item.textContent = letra;
    linha.appendChild(item);
} 