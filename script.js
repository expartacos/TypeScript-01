let num1 = document.getElementById('numero1');
let num2 = document.getElementById('numero2');
let botao = document.getElementById('calcular');
let res = document.getElementById('result');


function calcular (n1, n2){
    if (typeof n1 == 'number' && typeof n2 == 'number'){ 
        return n1 + n2;
    }else {
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        return n1 + n2;
    }
}
botao.addEventListener('click', function(){
    res.innerHTML = calcular(num1.value, num2.value);

})


