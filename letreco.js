idLinha = 1;
let linha = document.getElementById("linha"+idLinha);
let palavras= [
    "Amigo", "Casal", "Brisa", "Vento", "Falar", "Chuva", "Lapiz", 
    "Tigre", "Neves", "Anexo", "Tarde", "Canto", "Doido", "Feliz", "Mente", "Rosto", "Sabor", 
    "Forca", "Gosto", "Nuvem", "Viver", "Noite", "Limpo", "Sonho", "Tocar", "Fruta", "Olhar", "Mural", 
    "Fraco", "Forte", "Cinto", "Verde", "Preco", "Prato", "Misto", "Folha", "Barco", "Areia", "Lente", 
    "Fardo", "Dente", "Bolas", "Poeta", "Copas",
     "Raiva", "Meiga", "Cebola", "Leite", "Pente", "Planta"
]
let certa = palavras[Math.floor(Math.random() * palavras.length)];
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
        else{
            addErrada(palavra[i]);
        }
    }
    idLinha++;
    linha = document.getElementById("linha"+idLinha);

}

function addCerta(letra){
    console.log(letra);
    let item = document.createElement("div");
    item.classList.add("letra");
    item.classList.add("Alfa");
    item.textContent = letra;
    linha.appendChild(item);
} 
function addQuase(letra){
    console.log(letra);
    let item = document.createElement("div");
    item.classList.add("letra");
    item.classList.add("Betinha");
    item.textContent = letra;
    linha.appendChild(item);
} 
function addErrada(letra){
    console.log(letra);
    let item = document.createElement("div");
    item.classList.add("letra");
    item.classList.add("Betinha");
    item.textContent = letra;
    linha.appendChild(item);
} 
