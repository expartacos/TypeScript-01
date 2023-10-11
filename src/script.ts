let num1 = document.getElementById('numero1') as HTMLInputElement;
let num2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLOutputElement;
let res = document.getElementById('result') as HTMLOutputElement;


function calcular (n1: number, n2: number){
        return n1 + n2;
}
botao.addEventListener('click', function(){
    res.innerHTML = calcular(parseInt(num1.value), parseInt(num2.value)).toString();

})


//Tipos primitivos (tipagem estática)

let nome: string = 'Rafa';
let idade: number = 23; 
let programador: boolean = true

//tipagem Arrays
let nomes: string[] = ['Rafa', 'Ana', 'Pedro'];

