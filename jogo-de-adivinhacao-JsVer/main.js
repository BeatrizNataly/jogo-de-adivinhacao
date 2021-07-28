//===================BEM-VINDO(A) AO JOGO DE ADIVINHAÇÃO!===================//
// ====> Autora da demonstração: Beatriz Nataly
// ====> GitHub: @BeatrizNataly
//                                                                        //
var resposta
var maior = 'Meu número é maior que esse.'
var menor = 'Meu número é menor que esse.'
var wrongNumber;
const confirmar = document.getElementById('confirmar')
const novaPartida = document.getElementById('start')
var image = document.getElementById('imagem')
var statusTentativas = document.getElementById('statusTentativas')
var campoTentativa = document.getElementById('tentativa')
var tentativasSobrando = 10;
var retorno = document.getElementById('retorno')
var isStarted = 0;
var quotes = ['...', 'Vamos logo com isso, você já sabe que ', 'Ops! As tentativas estão acabando... Eu disse que ', 'Huh?... O ', 'Valeu a tentativa, mas na verdade o ', 'Tente de novo. O ', 'Boo! Você errou de novo! Pense um pouco, ', 'Não não! O ', 'Na verdade ']
var quotes2 = ['...', ' tente de novo!', '...', '!', '... Vamos lá, não é tão difícil!', '.', '. Quais números estariam mais próximos?...', '.', '. Tente mais uma vez!']

statusTentativas.textContent = ""
retorno.textContent = ""

function getRandom() {
    if (tentativasSobrando == 0 || tentativasSobrando == 10) {
        isStarted = 1;
        resposta = Math.floor(Math.random() * 100 + 1)
        tentativasSobrando = 10;
        retorno.textContent = 'Olá, se lembra de mim?\nAdivinhe meu número entre 0 e 100! Eu te darei 10 tentativas!'
        statusTentativas.textContent = `Partida iniciada! Você tem ${tentativasSobrando} tentativa(s) sobrando.`
        tentativasSobrando--
    } else {
        statusTentativas.textContent = 'Você não pode reiniciar uma nova partida ainda. Termine de jogar essa'
    }
    return resposta
}

function inicio() {
    if (isStarted != 0) {
        statusTentativas.textContent = `Você tem ${tentativasSobrando} tentativa(s) sobrando.`
        var tentativa = campoTentativa.value;
        if (tentativasSobrando > 0) {
            if (tentativa > resposta && tentativa <= 100) {
                tentativasSobrando--
                retorno.textContent = `${quotes[tentativasSobrando]}meu número é menor que esse${quotes2[tentativasSobrando]}`
            } else if (tentativa < resposta && tentativa >= 0) {
                tentativasSobrando--
                retorno.textContent = `${quotes[tentativasSobrando]}meu número é maior que esse${quotes2[tentativasSobrando]}`
            } else if (tentativa == resposta) {
                retorno.textContent = `Isso! ${resposta} era meu número! Você acertou, obrigada por jogar!`
                tentativasSobrando = 0
                statusTentativas.textContent = "Partida finalizada! Clique em ''Nova partida'' para jogar novamente. "
            } else if (tentativa == 666) {
                retorno.textContent = 'V̴͍͔̟͍̫͋̎̊̌̈́́̃͘ò̴̯c̵̨̫̯̎ê̵̡̙̹̾͛̈́̈̓̇̐͝ ̴̙͇̳̓̈́̽r̴̹͙͈͚̅͘͘͜e̵͚̖̋͑̿̕a̴̛̠͋́͒͛l̷̖̙̲͚͑m̸͍̦̺̽͝ȩ̸͉̪̒̚͝͠ň̶͖̿́̑t̶̩͙̻͔̙͎͆ẽ̴͉̦͖̹̖͉̖̺̂̅́͝ ̸̡͓̏͆͐͝a̷͕̪̭̍́̂͗̚̕͝͠ç̸̭̜̘̜͌̂̉̄̚͘͠ͅḩ̸̖̮̯̩̘͎̠͓̃́͛̉̉̆â̷̲͍̗͓̟͖͇̱͆̔̅̀͌̃̋ ̷̪͌̄͊͘̚i̵͇̚s̵͓̭̤͈̫̦̎s̵̩̰͊ͅo̷͔̐̽́̍͊͛̚ ̴̛̦̯̮̻̙͖͂͐̓̈́̓̆̕͠ȩ̵̮͕̞͙͎̟̂̓͜ņ̷̛͔͍̜̣͚̄̌̔̂̇̽ģ̴͖̺́r̴̨͖̪̮͛̒ã̶̫̲͒̈́̈́̒͗̿̾̀ç̴̛̲̘͓͍̰͖͂̆͂́̚̕̚a̷̟̹̹͉̝̽̎͠d̷̛̳͉̞̄͗̈̽̐̔̚ǫ̸̟̟̣̮̺̹̋̽̅̃́͗̎̄͠?̷̜̦͒̏͌̀͒̄̒͗ ̴̛͍̲̙̼̥̞̉͆̎͌̃̐̒̕J̸̤̓̿̅̉̌̾͛̑͠o̸̧͈̯̪̰͖͓͎̅̈́̅̍́͜͝ḡ̶̪͕͖͕̭̓͑̂͜u̷̡̡̬̤̘̳͈̞̓͑͑̕͝͠e̶̯͉̮͚̝̙͍̔̏̑ͅ ̷͈̽̏͗͂̀͝ǫ̴͇͙͍̰̝͒̅͘͜͝ ̸̟̪͍̗̲̪̝̙̋͆̍j̷̼̝͒̎̒̚ơ̵͖̣̦̠̤̭͎̪̻̂͛̆̑̚g̵̠͔̯̞̞̰̱̑̈́̉̈̽͌̄͘͠o̵̠̰̔̀̃̇̐͘ ̷̢̪̦̮̩̦͙͉̋̍̓̾͋̋́̃͜ḑ̴̧͙̝͈͈͕̥̐̅̎̕͜a̸̧̝͕̳̤̝͈̩̰͂̒͒̋̿̋̽̓ ̵͙̦̺͖̼̻̈́m̵̨̨̰̩̫̺͙̈̌̄͒̎͑̈́̓å̴̜ṅ̴̖̩̣̽̅̇͋̇͑ę̵͇̺͇̌̈́̋̐̋͝͝i̵̢̡̬̟͕̟͕̼̿̊͊̄̽̑̋̚r̷̛̥̪̦̐̑̑͊͂́̚å̵͓̺̦͍̯̅̈́̄̎̃̊̽̂ ̶̼̪̭̝̦̉̈̈̈́̀̈́̀͗c̴͔̺͕̙̥̣̭̫̹̔̋̓͑̈́̂͘͝ọ̷̠̀͂̑̈͊̈́̀͂͜͝ͅṛ̶͍̳̳̠̍ͅr̷̢͙̣̭͚͊̾̇̋̾̓̈e̷̢͇̘͒̽̔̑̂̇͘ͅt̶̢̛̮̰̦̭̞̫̼͋͗̾̿̆̾̒̏͜a̶̎̐̽̌̂̚ͅ.̵̮͖̦͚̲̮̿.̴̢̨̳̺̯̤̫͕͓̊́́̀͑.̴͙̳̻̥̔̂̆̀̎͝'
            } else {

                retorno.textContent = 'Você sabe que meu número está entre 0 e 100. Essa tentativa foi um desperdício...'
            }
        } else {
            statusTentativas.textContent = "Fim de jogo! Clique em ''Nova partida'' para jogar novamente. "
            retorno.textContent = `Parece que esse é o fim de jogo! Meu número era ${resposta}... Bom, foi divertido até...`
        }
    } else {
        statusTentativas.textContent = 'Clique em "Nova partida" para começar.'
    }
}

confirmar.addEventListener('click', inicio);
novaPartida.addEventListener('click', getRandom);