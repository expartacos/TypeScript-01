let num1 = document.getElementById('numero1') as HTMLInputElement;
let num2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLOutputElement;
let res = document.getElementById('result') as HTMLOutputElement;


function nsei (n10: number, n20: number): number{
        return n10 + n20;
};
botao.addEventListener('click', function(){
    res.innerHTML = nsei(parseInt(num1.value), parseInt(num2.value)).toString();

})


//Tipos primitivos (tipagem estática)

let nome: string = 'Rafa';
let idade: number = 23; 
let programador: boolean = true

//tipagem Arrays
let nomes: string[] = ['Rafa', 'Ana', 'Pedro'];

let nomes2: any[] = ['Rafa', 23, true];

//Parametros / funções 

function firstLetterUpperCase(name: string): string{
    let firstlleter = name.charAt(0).toUpperCase();
    return firstlleter + name.substring(1);
}

firstLetterUpperCase('rafa');

//object 
//a ? serve para dizer q uma variavel/propriedade é opcional.
 type User = {
    name: string,
    idade: number
 };
function resumo(usuario: User){
    return `Olá, ${usuario.name} você tem ${usuario.idade} anos`;
};

let u = {
    name: 'Rafael',
    idade: 23
};

console.log(resumo(u));

//multiplos types

let idades: string | number = 202;

idades = '202';

function mostrarIdade(idade: string | number){
    return console.log("Minha idade é:" +idade);   
}

//type interface
//interface da pra extender os tipos se for preciso 

type Idade = string | number;

let i: Idade = 20;
let b: Idade = "20";

interface Ira {
    nome: string,
    idade: number
}

//types literais 

let nomeq: 'rafael' = 'rafael';

function mostrarTexto(
    texto: string, 
    alinhamento: 'left' | 'right' | 'center'
) { 
    //só é possivel alinhar com 'left', 'right' e 'center' outro nome que eu colocar o type 
    //script não aceita
    return `<div style="text-align: ${alinhamento}">${texto}</div>`
}

mostrarTexto('rafael', 'center');
mostrarTexto('rafael', 'left');
mostrarTexto('rafael', 'right');


//inferência literal 

function fazerrequisicao(url: string, method: 'GET' | 'POST'){
    //...
}

type methotds = {
    url: string,
    method: 'GET' | 'POST'
}
let req: methotds = {
    url: 'https://...',
    method: 'GET'
};

fazerrequisicao(req.url, req.method);


//types em funções 

type mathFunction = (n1: number, n2: number) => number;

const somar: mathFunction = (n1, n2) => {
    return n1 + n2;
}

somar(2, 3);

//Retorno void "quando uma função compri o papel dela mas ela não tem nenhum tipo de retorno"

function removeEl(el: HTMLElement): void{
    el.remove();
}

removeEl( document.getElementById('teste') as HTMLElement);


//watchMode

let algo: string = 'rafa';