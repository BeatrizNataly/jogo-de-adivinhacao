//===================BEM-VINDO(A) AO JOGO DE ADIVINHAÇÃO!===================//
// ====> Autora da demonstração: Beatriz Nataly
// ====> GitHub: @BeatrizNataly
//                                                                        
var resposta
var wrongNumber
const confirmar = document.getElementById('confirmar')
const novaPartida = document.getElementById('start')
var image = document.getElementById('imagem')
var statusTentativas = document.getElementById('statusTentativas')
var campoTentativa = document.getElementById('tentativa')
var tentativasSobrando = 10;
var retorno = document.getElementById('retorno')
var isStarted = 0;
var quotes = ['...', 'Vamos logo com isso, você já sabe que ', 'Ops! As tentativas estão acabando... Eu disse que ', 'Huh?... O ', 'Valeu a tentativa, mas na verdade o ', 'Tente de novo. O ', 'Você errou de novo! Pense um pouco, ', 'Não não! O ', 'Na verdade ']
var quotes2 = ['...', ' tente de novo!', '...', '!', '... Vamos lá, não é tão difícil!', '.', '. Quais números estariam mais próximos?...', '.', '. Tente mais uma vez!']

statusTentativas.textContent = 'Pressione "Nova Partida" para começar a jogar.'
retorno.textContent = 'Adivinhe meu número entre 0 e 100. Eu te darei 10 tentativas! Depois que confirmar sua primeira tentativa, só poderá iniciar uma nova partida quando terminar de jogar essa.'

function getRandom() {
    if (tentativasSobrando == 0 || tentativasSobrando <= 10) {
        isStarted = 1;
        resposta = Math.floor(Math.random() * 100 + 1)
        tentativasSobrando = 10;
        retorno.textContent = 'Eu já escolhi um número! Tente adivinhar qual é... Suas tentativas restantes estarão no topo da tela!'
        statusTentativas.textContent = `Partida iniciada! Você tem ${tentativasSobrando} tentativa(s) sobrando.`
        tentativasSobrando--
    } else {
    }
    return resposta
}

function inicio() {
    if (isStarted != 0) {
        novaPartida.disabled = true
        statusTentativas.textContent = `Você tem ${tentativasSobrando} tentativa(s) sobrando.`
        var tentativa = campoTentativa.value;
        if (tentativasSobrando > 0) {
            if (tentativa == "") {
                retorno.textContent = "Você não digitou nenhum número. Adivinhe meu número digitando o valor que acha ser o correto." 
            } else {
                if (tentativa > resposta && tentativa <= 100) {
                    tentativasSobrando--
                    retorno.textContent = `${quotes[tentativasSobrando]}meu número é menor que esse${quotes2[tentativasSobrando]}`
                } else if (tentativa < resposta && tentativa >= 0) {
                    tentativasSobrando--
                    retorno.textContent = `${quotes[tentativasSobrando]}meu número é maior que esse${quotes2[tentativasSobrando]}`
                } else if (tentativa == resposta) {
                    retorno.textContent = `Isso! ${resposta} era meu número! Você acertou. Se quiser podemos jogar mais uma vez, posso deixar as coisas um pouco mais difíceis se quiser!`
                    tentativasSobrando = 0
                    statusTentativas.textContent = 'Partida finalizada! Clique em "Nova partida" para jogar novamente.'
                } else if (tentativa == 666) {
                    retorno.textContent = 'I̶̢̛̛̠̙̻̘̘͇͇̗̭͔̺͍͚̤̜̪̱̠̣͌̈̐̽͑̈͊̆̅̂̅͊̄̂̏̍̀̓̓̑́̄̀̀̉̈́͋̎̈̽̌̓̂̅̓̿͑̚͘̕̕͜͜͝͝ͅş̵̧̡̨̛̛͚̘͇͉͓̞̼̳̯͍̪̼̺̭̱̜͓͙̹̌̃̔̈́̏͌̊̐̑͊͊͊̒̍̌̃͑̀͂̆̏̊̈́̈́̾̀̈́̾̇̎̈́́̂͊̚͜͜͠͝͝ͅş̶̢̢̳̗̞̻͍̹͓͔̀̾̑͋̀͒̉̐͛̚o̸̱̝͍̟̻͔͔̬̞̝̟̯̅̑͆̄͗̓̍̅́̈̉͜͠͝͠ ̸̨̧̢̢̡̛̛̙̮̫̫͔̮̤̖̖͇̳̣͎͔̫͇̯̖͇̜͚̗̩̣͔̖̳̝͓͇͖̈́̏̇̑̉͗́̽̉̋͌̿̾̔̈́͂̉͆̎̈̈́̋̀͛͆̇̇̈̅̾̈́́͆́̕̚̕͝͝͝͠͝͝ͅͅn̴̢̛̩͕̫̙̫̰̬̞͑̎̉̈́̏̒̿̄͋̎̇́̊̇͆̇̚͘͜͜ã̴̡̢̧̡̛̛̛͚̬̹̪͓̟̰̯̭̩̻͈̗̞̗̪̳̦̘̜͓͙͚̳̟̻̫̳̹͓̏̋̎̐͗̔̏̓̓́͊͆̏̌̂͊̔́̄̅͑͑͗̄̐͑̌́̔̋̆͌̽͋̿̀̽̕͜ͅơ̶̧̢̛̱̫̠̼̳̜̱̹̗̻̝̳̝͈͍͕̺͕̱͊̎̅͋̀̾̾̓͋͌̍̽̃̎̇̍͒͌̽̉̃̈́̍̅̓͒͋̀̊͑̔́̀͐̋̇̒͋̎̾̈́̾̅̚͜͝͝ͅͅ ̴̡̡̡̛̬̲͕̟͎̘͕̭̻͉̰͕̫͎͓̼̺̰̗͓̭͓̭̖̮̯͓̬̱͍̈͗̋̌͑̂̿͗̒̆̌́̋̊͊̉̏̅̆́͒̔͛̒̓̄̈́͗͂̀̓̇̔̍̋͝͠͠ȩ̴̛͙̲͙͇̳̲̩̩͉̳͖̩͍̰͇͔̻̫̝͙̹̳̱̟͈̰̦͔͈̦̗͇̘́̓̓̅̔̌̄̑͐̂͐̋͊̄̾͋̀̿̌̔͆̓̀͂̿̏̍̀̓̃̎̉̈́̀̽͑̊́̆̄̊̑͘̚̚͜͝͠͝͝͝ ̸̘̙͈͙͕̃̆̋̈́̇͐̆̕͜è̵̡̡̛̜̙̯̖̣̼̹̳̣̲͔̰̼͙͇̜͍̅̅̅̓͒̍̏̈́̏̐̂̽͛͋̓̐̓͋̀̎̀̐͛͑́͑̀͝n̸̨̢̛̝̞̻͓̖͔͛͊̓͌͂́̄͂̔̇̆̐̃̿̅͗̐̈͒̅̊͘͝g̵͚̾̐́͆͊̏̆͑̈́̀͊̐̆͋̂̎͐̐̓̄́͐̌̏͋̉͛̐̔͐͐͝ͅṙ̶̢͍͔̩̺̪̭̮̯̞̩̬̱̱͎̊͒̈̀͊̈͒̉̆̇̀͋̊̈́̂̆̇̄͆̄̉̂͑̓̅̈́͂͊̎̋̃̅̕̚͠a̷̡̢̡̢̢̢̘̣̣̹̗̤̼̺̤͔͇̮̙̯̟̫̱͕̣̱̣̻̝̟͈̥̩̫̹̯̗͇̱̝̼̲̺̘̟͎̹̬̬͙̓̈̈́̈́̿͊͋͋̀̿̄͐͋̌̄͌̉̔̋̓̐͊̀̓̽̊͋̐̅͋̍͂́̈̔̉̕̕͝ç̷̢̢̧̼̼͖͙̬̫̟͙͚̘̻͙̱̯̫͇͍̙̘̮̜͂̌͋̋̈́̓̔̊͐́̿͌̋̄͊͊̐͂̆̈̎͛̒͆̿̏̉̋́̐̒̿̑̓͑̇͊̆͆͒̆̕͘̚͘͝͝a̶̡̢̛̼̗̫̜͉̝͍̥̞̥͕̬̾͋̋̈́́̈͜ḍ̷̡̨̨̛̞̠̠͕͎͇̟͉̻͍̟̥̥̙͇̩̬̜̰̜̰̝̜̰͙̋̈̆͊̏̔̃̓̽̓͂̀̄̃̂͌̄̅͋̓̈́̿̽̍͑̃̽̈̀̋͊̎̓͂̒́̐͋̏̄̏̕̕͘̕͠ͅͅơ̸̧̡̛̬̥̘̻̲̮̙̩̣̒̇̌͐͋͛͌̽̊̐́̒̀̾̏̑̾̽̀̄͒͂́̋̓͐̊̓͌̊̄̽͒͛͐̊͆̄̚̚̚͠͠͝͠͝͠.̸̡̨̛̲̰̭͕̖͖̪̞̝̼͙͈̔̈́̄̽̋̇͗̈́̃͗̀͂̈̿̇͛̉͂͌͑̓̌̀̽̌̆̈́̏̀̀̃̃͆͌̂̋̈́͠͝͝͠͝͝ ̵̛̗̮̮͔̣̜͒͛̂͗̌̒̈́̎̅̑̑̐̄̏̂̓͊͆͋̐̐̃̓̒͗̆͑̃̔͆͊̚͠͝J̷̡̡̛͉̹̳̦̞͈̟͎̭̖̳̱̮͚͋̄͆̃̀͑̍̽͐̇̑͆͊̂͛̎̈́͊̐͂̔̾̓͋̚ơ̵̡̡̫̜̥̩̪͖̯̻̜̳̰̺̜̟̹̝̙̮̪̳̭̗̫̻̱̳̯̩̬̖̗̹̰̼̼̫͌̂̅̍̾̓̿̉̏̄̀̀͗̔̎͊̑̾̆̓͊̏́̔̄̽̿̋͗̈̇͊͛̍̓̓̓̒́̚͘͠ͅg̵̝͇̔́̓̈́̃̽͗͛̏̽̿́̍̕̕͝ǔ̴̟̪̹̪̓͐͐̊̐̐̇̈́̉̓̅̆͂͌͊͘e̵̢̡̛̛̦̬͉̤̞̹̞͖̗̗̫͕̟̳͍̗̤͕̳͎͕̪͓̫̣͍̺͙̣̣̗͇̱̲̰̯̜̰̯̟̝̓̆̔̊̑͆͂̄̋̋̀̍̀̓̈́̒̍̑͐̈́̄̎́͊̎̄̇̽̏̋̇͂̐̆̓̆̚̚͘̚͜͜͝͝͝ͅ ̷̢̭̪̟̭̟̠̖̞͚͚̮͓͍̭͉̘̠̥̀̓͋̀̌͒͠ǫ̸̡̡͔̼̭̳̩͈̠̫̠̦̹͉̅̐͗̃̋͑̀̄̎̍̒̈́͠͝͠ ̸̹͐̃̾̌̓͛̈̓̅́̿̃̽͊̊̅͛̅̀͌̚͝͠͝j̸̡̡̳̳̫͚͕͚̳̦̭̦͈̗͉͖͖̟̻̹̱̻̘͔̝̱̰̲̪̺͔̍̈͗ͅơ̵̧̩̹̤̯̪̙̞̤̠̩̏̃̅̒̅͂̾͂̓͂̒̐̌̎̎͆̾̍͂̉́́̐̃̈́̒̂̕g̵̡̧̛̬̱͎̻̮̜̫̯͙̫͙̝͚͖̲̰̙͍̩̬̲͇̲͔͉̯̫͚̫̻͛͛͗͛̌͛́̓̇͆̋̀̽̅̌̅̔̓̋̾͌́̇̌͆̇̑͊͊͘̕͝͝ͅǫ̶̨̡̨̩̦̠̱̘͔̯̖̳̼͎̺̭̺͍̹͓̝̙̬̥͍͓̯̓͊̊͛͛͐͑͆̉̅̀̈̀͋̚͘̚̕͜͜͜͝͠ͅͅͅ ̷̨̨͚͚̞̗͙̩̯̣̖̣̝̪̥͈̬̝̦̱͈̬͉̳̐̑̊͗̂̍͒̃̈̌͂̎̆̅͂̇̓̌͂̂̔̉͑͆̚̚̚͝͠d̵̛͈͎̗̋̀͊̈̆̉̃͋̈̐̉̈̽̏̔͌̄̈́́̀̒̀̿̑̀͊̉̏̿̆͛̓́̐͒͂̌̌͛͝͝͝͝ͅả̴̧̡̢̛̙͔̯̻̲̠̙̦̯͔͓͈̃͋̃̄̌͗̽̃̐̈̾̽͗͌̊͑̌̌̃̌̒̐̅̈̒̏̽̒̊́͛́́́̑̄̄͘̚̕͠͝ ̷̧̧̢̧̧̨̛̛̩̤̘͕͉̻̜̫̳͇̙̯͈͍̗̟͙̒̏̄̌̇̊̂̑̌̇͝m̶̡̛͎͓͍̱͇͇̗̮̿̆̈́̎̑̉͐̀͆͂̀͒̆̐̀̒̅̄̉̇̐͑͋͒̑̍̾͌̄̂̚̕͘̚͝ā̵̛̼̖̥͓̖̭͖͉̩̰̬̳̗̳̰̳̹̣̾̂̀̃̾̔̈́̂̾̔͆̐̌̿́̒̎̿̎͂͆̓̄̿̈̑͋́̑͐͑͋̑̌̐̌̏̕̕̕̚͘͝͠͝͠n̸̡̨̨̡͖̠͈̭̞̱̥͈̤̘̦̦̭͈͇̝̻̠͎̙̤͓̝̒̿̀͑͜͜ͅͅͅȩ̸̨̳͓̦͕̲̜̖̳̫̙̫̫̻͉̱̼͔̜̜͉̙̘̝͙̲̗̼͔̜͖̤͎̮̞̘̹̹̟̲̳̦̤̏̄̏̄̐̈́̒̔̑͌̉̓̊͑̀̽͊̂̏̿̅̄̆̐̃͊̔̔̀̓̿̐̈́͘͜ͅi̸̡̙̙̳̜̘͖̻͈̤̩̱̫͕̬͇͒̈̈͗̅͗̆̃̓͗̔͗͐̎̀̈́́̿͑̾̽̈͛̓̓̑̅́̓͑͘̚͘̚̚͝͝͠r̸͖͖̘̲̞̹̗͗̓͊̇̔̀̌͛͌̑͝͠ä̵̡̛̺̭̙̝̟̹́̓̾ ̴̨̨̫̭̟̹͎̙̗͍̗͙̝̼͚̬̳̟͍̻̳̼͍͕̳̫̬̣̲͔̺̘̯̯̭̩̯̙͚͕͉̭̗̒̎̉͋̃̈̋̀̌̔͑̓̌̓̐̒̕̚͜͝͝c̸̢̡̨͈͇̪̳̰͓̙̯̣͈̟̰̟͖͓̯͉̰̹͈̝͕̪͎̬͓̰̪̰͚̞̦̹͇̹̮̖͓͕̬͇̹͆̄̾̇͗̑͂͐̓̉͒̍́̈̏̈́̆̀̔̐͐͗͑̈̎͆̈̾̇̂͂̕̚͜͜͠͝͠͠ͅŏ̴̘͙̩͔͈̩̣̤̼̫̪͕̺̣̞͔̜̖͖̯͕͓͙̬͚̥̠̺̪̃̉̎̄̀͌͗̊̅̂͑͂́̿̿̂̉̈́̂̈́̉̕̚̚̚͝͠͝͠r̴̨̧̡̢̛̛͇̞͍͇̝͎͎̟͇̗̤͉̼̲͖̠͔̭̖̺̪͇̖̬͇͇̫̩̹͉̙͚̤̥̣̟̼̓̊́̽̐̈́̑̑̅̔͛̇̓́̌̇͆̀̏́̉̽̈̀̒͑̆͂͆́̔͑͂͗̍́̈́̅̌̒̏͂̂̚͘͜͝͝r̵̙̭̬̱̼̩̤̭̻̰̩͇͕̠̲͕͉̭̦̤̪̒̍̅̈́͊̔̐̾͜͝ę̸̨̡̧̩̖̥̺̭̪̻̳̱̦͍̙̩̝̞̤̝̱̂̎́̔̂̌̃̂͗̽̅̏̅̒̿͊́̆̃͛̏͒̄͂̔̏̆́́͐͝ͅẗ̷͇̣̺͚̗̘͈͙̹͖̖̟̠̜͎̥̯̱̖̣̤́̊̾́͛̓̀̉͛͗̉͛́̿̈́̓̋̌͗̅̅̈́̈͒͐̀̈̄̾͗͐͛͊̑̊̈̄̌́̿̕͘̚̚̚͜͜͝͠͠ą̸̛̛̹̞̣̤̻̻̲̜̱͍̦̈́̿̊͌̈́̄̌͗̊͒͌́͗̒̈͂̈́͆̃͊̏̕̕͘͝ͅ.̷̡̢̡̡̜͈̭̹̹͕̟̥̖̳̝̘̙̭̪̙͇̼̥̯̫͚͎̼̠̫͙̾͐̾̇͋̏̀̂͌̂̈́̀̔̂̒̈͜ͅ.̴̢̘͓͈̣͔̙̣͆̅̏͑̓́̆̕͝ͅ.̴̢͇̘̻̳̭̞͉̠̹̬̭̭̬̙̪͇̪̻͕̞̲̣͎͐̏̊͐̆́̃'
                } else {
                    retorno.textContent = 'Você sabe que meu número está entre 0 e 100. Essa tentativa foi um desperdício...'
                }
            }
        } else {
            novaPartida.disabled = false
            statusTentativas.textContent = 'Clique em "Nova partida" para jogar novamente. '
            retorno.textContent = `Fim de jogo! Meu número era ${resposta}... Vamos jogar de novo?`
        }
    } else {
        statusTentativas.textContent = 'Clique em "Nova partida" para começar.'
    }
}

confirmar.addEventListener('click', inicio);
novaPartida.addEventListener('click', getRandom);