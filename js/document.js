//===================BEM-VINDO(A) AO JOGO DE ADIVINHAÇÃO!===================//
// ====> Autora da demonstração: Beatriz Nataly
// ====> GitHub: @BeatrizNataly
//

const confirmar = document.getElementById('confirmar')
const novaPartida = document.getElementById('start')
const difMedia = document.getElementById('dif-media')
const difDificil = document.getElementById('dif-dificil')

var image = document.getElementById('imagem')
var statusTentativas = document.getElementById('statusTentativas')
var campoTentativa = document.getElementById('tentativa')
var retorno = document.getElementById('retorno')
var modos = document.getElementById('modos')

var resposta
var wrongNumber
var isStarted = false;
var tentativasSobrando = 10;

var quotes = ['...', 'Vamos lá, o ',
    'Ops... As tentativas estão acabando... O ', 'Huh?... Não não, O ',
    'Valeu a tentativa, mas na verdade ', 'Tente de novo. O ',
    'Pense um pouco, ', 'Não não! O ', 'Na verdade ']
var quotes2 = ['...', ' tente de novo!', '...',
    '!', '... Vamos lá, não é tão difícil!', '.',
    '. Quais números estariam mais próximos?...', '.', '. Tente mais uma vez!']

function tutorial(){
    alert('COMO JOGAR: Vou pensar em um número entre 0 e 100 e te darei 10 tentativas para acertar. Haverão dicas para te ajudar! Depois de me vencer uma vez, poderá tentar o "Modo difícil" que terá 5 tentativas para adivinhar um número entre 0 e 100. PRONTO PARA COMEÇAR?')
}

campoTentativa.focus();