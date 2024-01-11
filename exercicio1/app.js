//1 - Criar uma função que exibe "Olá, mundo!" no console.

function OlaMundo(){
    console.log('Olá Mundo!');
};
OlaMundo();

//2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function OlaNome(){
    let nome = 'Diego';
    console.log(`Olá ${nome}!`);
};
OlaNome();

//3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function OlaNumero(){
    let numero = 10;
    let resultado = numero * 2;

    console.log(`O resultado é ${resultado}!`);
};
OlaNumero();

//4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

function media(){
    //let numero1 = 8;
    let numero1 = parseInt(prompt('Informe o primeiro número:'));
    //let numero2 = 10;
    let numero2 = parseInt(prompt('Informe o primeiro número:'));
    //let numero3 = 7;
    let numero3 = parseInt(prompt('Informe o primeiro número:'));

    let resultado = (numero1 + numero2 + numero3)/3;

    console.log(`O resultado é ${resultado}!`);
};
media();

//5- Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(){
    //let n1 = 10;
    let n1 = parseInt(prompt('Insira o primeiro número:'));
    //let n2 = 15;
    let n2 = parseInt(prompt('Insira o segundo número:'));

    let resultado = Math.max(n1, n2);
    alert(`O maior número é ${resultado}`);
};
maiorNumero();
//6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function MultiplicarNumero(){
    //let n1 = 5
    let n1 = parseInt(prompt('Informe um valor:'));

    let resultado = n1 * n1;

    alert(`O resultado é ${resultado}`);
};
MultiplicarNumero();