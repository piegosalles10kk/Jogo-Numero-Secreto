let listaNumeroSorteado = [];
let numeroMaximo = 300;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate: 1.2});
};
function textoInicial (){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`);
}
textoInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let resposta;

    if (chute == numeroSecreto){
        resposta = 'Você acertou!';
                exibirTextoNaTela('h1',`${resposta} o número secreto era ${numeroSecreto}!`);            
            let mensagemTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';           
                exibirTextoNaTela('p', `Você acertou em ${tentativas} ${mensagemTentativas}! Para jogar novamente pressione "Novo jogo".`);
        
            document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        tentativas++
        limparCampo();
            let resposta = 'Você errou!';
            let dica = numeroSecreto > chute ? 'maior' : 'menor';           
                exibirTextoNaTela('p', `DICA: O número secreto é ${dica}!`);
    };    
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaNumeroSorteado.length;

    if(quantidadeDeElementosNaLista == 3){
        listaNumeroSorteado = [];
    }
    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    }
    else{
        listaNumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido
    }
   
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}