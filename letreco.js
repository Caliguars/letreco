idLinha = 1;
let linha = document.getElementById("linha"+idLinha);
let palavras= [
    "Amigo", "Casal", "Brisa", "Vento", "Falar", "Chuva", "Lapiz", 
    "Tigre", "Neves", "Anexo", "Tarde", "Canto", "Doido", "Feliz", "Mente", "Rosto", "Sabor", 
    "Forca", "Gosto", "Nuvem", "Viver", "Noite", "Limpo", "Sonho", "Tocar", "Fruta", "Olhar", "Mural", 
    "Fraco", "Forte", "Cinto", "Verde", "Preco", "Prato", "Misto", "Folha", "Barco", "Areia", "Lente", 
    "Fardo", "Dente", "Bolas", "Poeta", "Copas",
     "Raiva", "Meiga", "Leite", "Pente"
]
let certa = palavras[Math.floor(Math.random() * palavras.length)];
let botao = document.getElementById("btnTestar");
let input = document.getElementById("entrada");
botao.addEventListener("click",testarPalavra);
input.addEventListener("keydown",detectaEnter);

function detectaEnter(tecla){
    if (tecla.key === "Enter") {
        testarPalavra();
        const entrada = document.getElementById('entrada');
        entrada.value = '';
    }
}

function testarPalavra(){
    let palavra = document.getElementById("entrada").value.toUpperCase();
    certa = certa.toUpperCase();

     if (palavra.length !== certa.length) {
        alert("A palavra precisa ter " + certa.length + " letras!");
        return;
    }
    let status = Array(palavra.length).fill("errada");
    let restante = certa.split("");

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === certa[i]) {
            status[i] = "certa";
            restante[i] = null; 
        }
    }

    for (let i = 0; i < palavra.length; i++) {
        if (status[i] === "certa") continue;

        let pos = restante.indexOf(palavra[i]);
        if (pos !== -1) {
            status[i] = "quase";
            restante[pos] = null;
        }
    }

    for (let i = 0; i < palavra.length; i++) {
        if (status[i] === "certa") addCerta(palavra[i]);
        else if (status[i] === "quase") addQuase(palavra[i]);
        else addErrada(palavra[i]);
    }
    if (palavra === certa) {
    alert("Acertou!");
    return;
}
if (idLinha >= 6) {
    alert("Você perdeu! A palavra era: " + certa);
    return;
}



    idLinha++;
    linha = document.getElementById("linha" + idLinha);
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
    item.classList.add("moggado");
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
