function calcular() {
    let anoAtual = new Date().getFullYear();
    let ano = document.getElementById("ano").value;


    if (ano === "") {
        alert("você deixou vazio");
        return;
    }

    let idade = anoAtual - ano;
    document.getElementById("resultado").innerHTML = "Você tem " + idade + " anos!!1!1!1!";
}
