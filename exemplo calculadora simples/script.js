const soma = () => {
    let nu1 = parseFloat(document.getElementById("n1").value);
    let nu2 = parseFloat(document.getElementById("n2").value);
    let resultado = nu1 + nu2;
    window.alert(" = " + resultado);
};

const subtracao = () => {
    let nu1 = parseFloat(document.getElementById("n1").value);
    let nu2 = parseFloat(document.getElementById("n2").value);
    let resultado = nu1 - nu2;
    window.alert(" = " + resultado);
};

const divisao = () => {
    let nu1 = parseFloat(document.getElementById("n1").value);
    let nu2 = parseFloat(document.getElementById("n2").value);
    let resultado = nu1 / nu2;
    window.alert(" = " + resultado);
};

const multiplicacao = () => {
    let nu1 = parseFloat(document.getElementById("n1").value);
    let nu2 = parseFloat(document.getElementById("n2").value);
    let resultado = nu1 * nu2;
    window.alert(" = " + resultado);
};