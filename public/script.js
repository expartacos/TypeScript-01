var num1 = document.getElementById('numero1');
var num2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('result');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(parseInt(num1.value), parseInt(num2.value)).toString();
});
