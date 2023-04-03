export default calculo;


function calculo(num1, num2, op) {

    var resultado = null;

    if (op === "+") {
        resultado = parseInt(num1) + parseInt(num2);
    } else if (op === "-") {
        resultado = parseInt(num1) - parseInt(num2);
    } else if (op === "/") {
        resultado = parseInt(num1) / parseInt(num2);
    } else if (op === "x") {
        resultado = parseInt(num1) * parseInt(num2);
    }

    return resultado;
}