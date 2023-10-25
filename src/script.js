var num1 = document.getElementById('numero1');
var num2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('result');
function nsei(n10, n20) {
    return n10 + n20;
}
;
botao.addEventListener('click', function () {
    res.innerHTML = nsei(parseInt(num1.value), parseInt(num2.value)).toString();
});
//Tipos primitivos (tipagem estática)
var nome = 'Rafa';
var idade = 23;
var programador = true;
//tipagem Arrays
var nomes = ['Rafa', 'Ana', 'Pedro'];
var nomes2 = ['Rafa', 23, true];
//Parametros / funções 
function firstLetterUpperCase(name) {
    var firstlleter = name.charAt(0).toUpperCase();
    return firstlleter + name.substring(1);
}
firstLetterUpperCase('rafa');
function resumo(usuario) {
    return "Ol\u00E1, ".concat(usuario.name, " voc\u00EA tem ").concat(usuario.idade, " anos");
}
;
var u = {
    name: 'Rafael',
    idade: 23
};
console.log(resumo(u));
//multiplos types
var idades = 202;
idades = '202';
function mostrarIdade(idade) {
    return console.log("Minha idade é:" + idade);
}
var i = 20;
var b = "20";
//types literais 
var nomeq = 'rafael';
function mostrarTexto(texto, alinhamento) {
    //só é possivel alinhar com 'left', 'right' e 'center' outro nome que eu colocar o type 
    //script não aceita
    return "<div style=\"text-align: ".concat(alinhamento, "\">").concat(texto, "</div>");
}
mostrarTexto('rafael', 'center');
mostrarTexto('rafael', 'left');
mostrarTexto('rafael', 'right');
//inferência literal 
function fazerrequisicao(url, method) {
    //...
}
var req = {
    url: 'https://...',
    method: 'GET'
};
fazerrequisicao(req.url, req.method);
var somar = function (n1, n2) {
    return n1 + n2;
};
somar(2, 3);
//Retorno void "quando uma função compri o papel dela mas ela não tem nenhum tipo de retorno"
function removeEl(el) {
    el.remove();
}
removeEl(document.getElementById('teste'));
//watchMode
var algo = 'rafa';
