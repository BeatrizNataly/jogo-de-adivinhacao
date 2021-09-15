var numeroMaximo

function getRandom(max) {
    resposta = Math.floor(Math.random() * max + 1)
    isStarted = true
    document.getElementById("imagem").src = "sprites/stage1.png"
    retorno.textContent = 'Eu já escolhi um número! Tente adivinhar qual é... Suas tentativas restantes estarão no topo da tela!'
    statusTentativas.textContent = `Partida iniciada! Você tem ${tentativasSobrando} tentativa(s) sobrando.`
    confirmar.disabled = false
}

function getRandomValue() {
    return Math.floor(Math.random() * 5)
}

function normalMode() {
    numeroMaximo = 100
    customId.innerHTML = ""
    if (tentativasSobrando == 0 || tentativasSobrando <= 10) {
        tentativasSobrando = 10;
        getRandom(100);
        tentativasSobrando--
        gameMode = true
        customMode = false
        setCustomCampos(true)
        difDificil.disabled = true
        difCustom.disabled = true
    }
}

function hardMode() {
    numeroMaximo = 100
    customId.innerHTML = ""
    if (tentativasSobrando == 0 || tentativasSobrando == 5) {
        tentativasSobrando = 5;
        getRandom(100);
        tentativasSobrando--
        gameMode = false
        customMode = false
        setCustomCampos(true)
        difMedia.disabled = true
        difCustom.disabled = true
    }
}

function customModeSet() {
    if (validaCustomCampo()) {
        var max = campoNumMax.value
        customMode = true
        tentativasSobrando = campoTentMax.value
        getRandom(max)
        tentativasSobrando--
        setCustomCampos(true)
        customId.innerHTML = `JOGO PERSONALIZADO: Adivinhe o número entre 0 e ${campoNumMax.value}!`
        numeroMaximo = campoNumMax.value
        difDificil.disabled = true
        difMedia.disabled = true
    }
}

function setCustomCampos(boolean){
    campoNumMax.hidden = boolean
    campoTentMax.hidden = boolean
    insere.hidden = boolean
}

function validaCustomCampo() {
    var campoNum = parseInt(campoNumMax.value)
    var campoTent = parseInt(campoTentMax.value)

    if (campoNum != "" && campoTent != "") {
        if (campoNum <= 1000 && campoNum >= 2) {
            if (campoTent < campoNum && campoTent > 0) {
                return true
            } else {
                alert('O número de tentativas deve ser maior que 0 e menor que o número aleatório máximo.')
                return false
            }

        } else {
            alert('O número aleatório máximo deve ser maior que 1 e menor que 1000.')
            return false
        }

    } else {
        alert('Preencha todos os campos!')
        return false
    }
}

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