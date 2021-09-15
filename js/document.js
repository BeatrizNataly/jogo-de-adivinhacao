//===================BEM-VINDO(A) AO JOGO DE ADIVINHAÇÃO!===================//
// ====> Autora da demonstração: Beatriz Nataly
// ====> GitHub: @BeatrizNataly
//

const confirmar = document.getElementById('confirmar')
const novaPartida = document.getElementById('start')
const difMedia = document.getElementById('dif-media')
const difDificil = document.getElementById('dif-dificil')
const difCustom = document.getElementById('dif-custom')
const insere = document.getElementById('insere')

var image = document.getElementById('imagem')
var statusTentativas = document.getElementById('statusTentativas')
var campoTentativa = document.getElementById('tentativa')
var campoNumMax = document.getElementById('numMax')
var campoTentMax = document.getElementById('tentMax')
var retorno = document.getElementById('retorno')
var modos = document.getElementById('modos')
var customId = document.getElementById('status-customMode')

var resposta
var wrongNumber
var isStarted = false
var tentativasSobrando = 10;
var gameMode = true
var customMode = false

var quotes = ['...', 'Vamos lá, o ',
    'Ops... As tentativas estão acabando... O ', 'Huh?... Não não, O ',
    'Valeu a tentativa, mas na verdade ', 'Tente de novo. O ',
    'Pense um pouco, ', 'Não não! O ', 'Na verdade ']
var quotes2 = ['...', ' tente de novo!', '...',
    '!', '... Vamos lá, não é tão difícil!', '.',
    '. Quais números estariam mais próximos?...', '.', '. Tente mais uma vez!']

function tutorial(){
    retorno.textContent = 'COMO JOGAR: Vou pensar em um número entre 0 e 100 e te darei 10 tentativas para acertar. Haverão dicas para te ajudar! Depois de me vencer uma vez, poderá tentar o "Modo difícil", com 5 tentativas, e o "Modo customizado", que você decide como vai ser! PRONTO?'
}

campoTentativa.focus();