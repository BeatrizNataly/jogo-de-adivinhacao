function getRandom(max){
    resposta = Math.floor(Math.random() * max + 1);
    isStarted = true;
    retorno.textContent = 'Eu já escolhi um número! Tente adivinhar qual é... Suas tentativas restantes estarão no topo da tela!'
    statusTentativas.textContent = `Partida iniciada! Você tem ${tentativasSobrando} tentativa(s) sobrando.`
    confirmar.disabled = false
    novaPartida.hidden = true
}

function normalMode() {
    if (tentativasSobrando == 0 || tentativasSobrando <= 10) {
        tentativasSobrando = 10;
        getRandom(100);
        tentativasSobrando--;
    }
}

function hardMode(){
    if(tentativasSobrando == 0 || tentativasSobrando <=5){
        tentativasSobrando = 5;
        getRandom(100);
        tentativasSobrando--;
    }
}

function customMode(max, tentativa){ // EM BREVE!!---------------------------------------------------------
    getRandom(max)
    tentativasSobrando = tentativa
    tentativasSobrando--;
}
//---------------------------------------------------------------------------------------------------------

function inicio() {
    campoTentativa.focus();
    if (isStarted) {
        novaPartida.disabled = true
        statusTentativas.textContent = `Você tem ${tentativasSobrando} tentativa(s) sobrando.`
        var tentativa = campoTentativa.value;
        validacaoTentativa(tentativa);
    } else {
        alert('Clique em "Nova Partida" para começar.');
    }
    campoTentativa.value = "";
}

statusTentativas.textContent = 'Pressione "Nova Partida" para começar a jogar.'
retorno.textContent = 'Adivinhe meu número entre 0 e 100. Eu te darei 10 tentativas! Depois que confirmar sua primeira tentativa, só poderá iniciar uma nova partida quando terminar de jogar essa.'

confirmar.addEventListener('click', inicio);
novaPartida.addEventListener('click', normalMode);