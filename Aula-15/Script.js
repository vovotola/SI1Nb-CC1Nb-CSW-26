document.writeln("VERGIL!");
document.writeln("<h2>Bem-Vindo ao VergilScript</h2>");
window.alert("Vergil");

document.getElementById("a").innerHTML = "Vergil";

let nomeInicial = prompt("digite seu nome");
let paragrafoB = document.getElementById("b");

paragrafoB.innerHTML = "Olá, " + nomeInicial + " seja bem-vindo.";
paragrafoB.style.color = "blue";
paragrafoB.style.fontSize = "70px";

function exibirMensagem() {
    let nomeDigitado = document.getElementById("nome").value.trim();
    let imagem = document.getElementById("imagemResultado");
    let paragrafoB = document.getElementById("b");

    if (nomeDigitado === "") {
        paragrafoB.innerHTML = "Por favor, digite um nome!";
        if (imagem) imagem.style.display = "none";
        return;
    }

    paragrafoB.innerHTML = "Olá, " + nomeDigitado + " Seja bem-vindo.";

    if (nomeDigitado.toLowerCase() === "vergil") {
        imagem.src = "Vergil.webp";
        imagem.style.display = "block";
    } else {
        imagem.src = "OIP.webp";
        imagem.style.display = "block";
    }
}
