function calcular() {
    let fezcerto = false;
    let anoAtual = new Date().getFullYear();
    let mesAtual = new Date().getMonth() + 1;
    let diaAtual = new Date().getDate();
    let ano = document.getElementById("ano").value;
    let mes = document.getElementById("mes").value;
    let dia = document.getElementById("dia").value;
    if (ano === "" || mes === "" || dia === "") {
        alert("você não preencheu tudo");
        return;
    }

    if (ano > 2026 || mes > 12 || mes < 1 || dia > 31 || dia < 1) {
        alert("opaa você digitou errado o ano, data ou mês. Tente novamente.")
        ano = null;
        mes = null;
        dia = null;
        idade = "???"
    }
    else { fezcerto = true }
    if (mes > mesAtual || mes === mesAtual && dia >= diaAtual) {
        idade + 1
    }
    let idade = anoAtual - ano;
    document.getElementById("resultado").innerHTML = "Você tem " + idade + " anos!!1!1!1!";
    if (fezcerto = true) { document.getElementById("obs").innerHTML = "";
     }
}
