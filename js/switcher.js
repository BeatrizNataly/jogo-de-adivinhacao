function validacaoTentativa(tentativa) {
    if (tentativasSobrando > 0) {
        testa(tentativa)
    } else {
        novaPartida.hidden = false
        novaPartida.disabled = false
        statusTentativas.textContent = 'Clique em "Nova partida" para jogar novamente. '
        retorno.textContent = `É uma pena, mas meu número era ${resposta}... Parece que eu venci dessa vez, mas não se preocupe, uma hora vai conseguir! Vamos jogar de novo?`
        confirmar.disabled = true
    }
}

function switchImage() {
    if (tentativasSobrando > 8) {
        document.getElementById("imagem").src = "sprites/stage1.png"
    } else if (tentativasSobrando > 6) {
        document.getElementById("imagem").src = "sprites/stage2.png"
    } else if (tentativasSobrando > 4) {
        document.getElementById("imagem").src = "sprites/stage3.png"
    } else if (tentativasSobrando > 2) {
        document.getElementById("imagem").src = "sprites/stage4.png"
    } else if (tentativasSobrando > 0) {
        image.src = "sprites/stage5.png";
    }
}

function tentativaErrada(texto) {
    tentativasSobrando--
    retorno.textContent = `${quotes[tentativasSobrando]}` + texto + `${quotes2[tentativasSobrando]}`
}

function tentativaCerta() {
    retorno.textContent = `Isso! ${resposta} era meu número! Você acertou. Se quiser podemos jogar mais uma vez, posso deixar as coisas um pouco mais difíceis se quiser!`
    confirmar.disabled = true
    tentativasSobrando = 0
    statusTentativas.textContent = 'Partida finalizada!'
    modos.hidden = false
    novaPartida.hidden = true
    document.getElementById("imagem").src = "sprites/stage1.png"
}

function glitch() {
    statusTentativas.textContent = 'SEGREDO DESCOBERTO: "Boo"'
    retorno.textContent = 'I̶̢̛̛̠̙̻̘̘͇͇̗̭͔̺͍͚̤̜̪̱̠̣͌̈̐̽͑̈͊̆̅̂̅͊̄̂̏̍̀̓̓̑́̄̀̀̉̈́͋̎̈̽̌̓̂̅̓̿͑̚͘̕̕͜͜͝͝ͅş̵̧̡̨̛̛͚̘͇͉͓̞̼̳̯͍̪̼̺̭̱̜͓͙̹̌̃̔̈́̏͌̊̐̑͊͊͊̒̍̌̃͑̀͂̆̏̊̈́̈́̾̀̈́̾̇̎̈́́̂͊̚͜͜͠͝͝ͅş̶̢̢̳̗̞̻͍̹͓͔̀̾̑͋̀͒̉̐͛̚o̸̱̝͍̟̻͔͔̬̞̝̟̯̅̑͆̄͗̓̍̅́̈̉͜͠͝͠ ̸̨̧̢̢̡̛̛̙̮̫̫͔̮̤̖̖͇̳̣͎͔̫͇̯̖͇̜͚̗̩̣͔̖̳̝͓͇͖̈́̏̇̑̉͗́̽̉̋͌̿̾̔̈́͂̉͆̎̈̈́̋̀͛͆̇̇̈̅̾̈́́͆́̕̚̕͝͝͝͠͝͝ͅͅn̴̢̛̩͕̫̙̫̰̬̞͑̎̉̈́̏̒̿̄͋̎̇́̊̇͆̇̚͘͜͜ã̴̡̢̧̡̛̛̛͚̬̹̪͓̟̰̯̭̩̻͈̗̞̗̪̳̦̘̜͓͙͚̳̟̻̫̳̹͓̏̋̎̐͗̔̏̓̓́͊͆̏̌̂͊̔́̄̅͑͑͗̄̐͑̌́̔̋̆͌̽͋̿̀̽̕͜ͅơ̶̧̢̛̱̫̠̼̳̜̱̹̗̻̝̳̝͈͍͕̺͕̱͊̎̅͋̀̾̾̓͋͌̍̽̃̎̇̍͒͌̽̉̃̈́̍̅̓͒͋̀̊͑̔́̀͐̋̇̒͋̎̾̈́̾̅̚͜͝͝ͅͅ ̴̡̡̡̛̬̲͕̟͎̘͕̭̻͉̰͕̫͎͓̼̺̰̗͓̭͓̭̖̮̯͓̬̱͍̈͗̋̌͑̂̿͗̒̆̌́̋̊͊̉̏̅̆́͒̔͛̒̓̄̈́͗͂̀̓̇̔̍̋͝͠͠ȩ̴̛͙̲͙͇̳̲̩̩͉̳͖̩͍̰͇͔̻̫̝͙̹̳̱̟͈̰̦͔͈̦̗͇̘́̓̓̅̔̌̄̑͐̂͐̋͊̄̾͋̀̿̌̔͆̓̀͂̿̏̍̀̓̃̎̉̈́̀̽͑̊́̆̄̊̑͘̚̚͜͝͠͝͝͝ ̸̘̙͈͙͕̃̆̋̈́̇͐̆̕͜è̵̡̡̛̜̙̯̖̣̼̹̳̣̲͔̰̼͙͇̜͍̅̅̅̓͒̍̏̈́̏̐̂̽͛͋̓̐̓͋̀̎̀̐͛͑́͑̀͝n̸̨̢̛̝̞̻͓̖͔͛͊̓͌͂́̄͂̔̇̆̐̃̿̅͗̐̈͒̅̊͘͝g̵͚̾̐́͆͊̏̆͑̈́̀͊̐̆͋̂̎͐̐̓̄́͐̌̏͋̉͛̐̔͐͐͝ͅṙ̶̢͍͔̩̺̪̭̮̯̞̩̬̱̱͎̊͒̈̀͊̈͒̉̆̇̀͋̊̈́̂̆̇̄͆̄̉̂͑̓̅̈́͂͊̎̋̃̅̕̚͠a̷̡̢̡̢̢̢̘̣̣̹̗̤̼̺̤͔͇̮̙̯̟̫̱͕̣̱̣̻̝̟͈̥̩̫̹̯̗͇̱̝̼̲̺̘̟͎̹̬̬͙̓̈̈́̈́̿͊͋͋̀̿̄͐͋̌̄͌̉̔̋̓̐͊̀̓̽̊͋̐̅͋̍͂́̈̔̉̕̕͝ç̷̢̢̧̼̼͖͙̬̫̟͙͚̘̻͙̱̯̫͇͍̙̘̮̜͂̌͋̋̈́̓̔̊͐́̿͌̋̄͊͊̐͂̆̈̎͛̒͆̿̏̉̋́̐̒̿̑̓͑̇͊̆͆͒̆̕͘̚͘͝͝a̶̡̢̛̼̗̫̜͉̝͍̥̞̥͕̬̾͋̋̈́́̈͜ḍ̷̡̨̨̛̞̠̠͕͎͇̟͉̻͍̟̥̥̙͇̩̬̜̰̜̰̝̜̰͙̋̈̆͊̏̔̃̓̽̓͂̀̄̃̂͌̄̅͋̓̈́̿̽̍͑̃̽̈̀̋͊̎̓͂̒́̐͋̏̄̏̕̕͘̕͠ͅͅơ̸̧̡̛̬̥̘̻̲̮̙̩̣̒̇̌͐͋͛͌̽̊̐́̒̀̾̏̑̾̽̀̄͒͂́̋̓͐̊̓͌̊̄̽͒͛͐̊͆̄̚̚̚͠͠͝͠͝͠.̸̡̨̛̲̰̭͕̖͖̪̞̝̼͙͈̔̈́̄̽̋̇͗̈́̃͗̀͂̈̿̇͛̉͂͌͑̓̌̀̽̌̆̈́̏̀̀̃̃͆͌̂̋̈́͠͝͝͠͝͝ ̵̛̗̮̮͔̣̜͒͛̂͗̌̒̈́̎̅̑̑̐̄̏̂̓͊͆͋̐̐̃̓̒͗̆͑̃̔͆͊̚͠͝J̷̡̡̛͉̹̳̦̞͈̟͎̭̖̳̱̮͚͋̄͆̃̀͑̍̽͐̇̑͆͊̂͛̎̈́͊̐͂̔̾̓͋̚ơ̵̡̡̫̜̥̩̪͖̯̻̜̳̰̺̜̟̹̝̙̮̪̳̭̗̫̻̱̳̯̩̬̖̗̹̰̼̼̫͌̂̅̍̾̓̿̉̏̄̀̀͗̔̎͊̑̾̆̓͊̏́̔̄̽̿̋͗̈̇͊͛̍̓̓̓̒́̚͘͠ͅg̵̝͇̔́̓̈́̃̽͗͛̏̽̿́̍̕̕͝ǔ̴̟̪̹̪̓͐͐̊̐̐̇̈́̉̓̅̆͂͌͊͘e̵̢̡̛̛̦̬͉̤̞̹̞͖̗̗̫͕̟̳͍̗̤͕̳͎͕̪͓̫̣͍̺͙̣̣̗͇̱̲̰̯̜̰̯̟̝̓̆̔̊̑͆͂̄̋̋̀̍̀̓̈́̒̍̑͐̈́̄̎́͊̎̄̇̽̏̋̇͂̐̆̓̆̚̚͘̚͜͜͝͝͝ͅ ̷̢̭̪̟̭̟̠̖̞͚͚̮͓͍̭͉̘̠̥̀̓͋̀̌͒͠ǫ̸̡̡͔̼̭̳̩͈̠̫̠̦̹͉̅̐͗̃̋͑̀̄̎̍̒̈́͠͝͠ ̸̹͐̃̾̌̓͛̈̓̅́̿̃̽͊̊̅͛̅̀͌̚͝͠͝j̸̡̡̳̳̫͚͕͚̳̦̭̦͈̗͉͖͖̟̻̹̱̻̘͔̝̱̰̲̪̺͔̍̈͗ͅơ̵̧̩̹̤̯̪̙̞̤̠̩̏̃̅̒̅͂̾͂̓͂̒̐̌̎̎͆̾̍͂̉́́̐̃̈́̒̂̕g̵̡̧̛̬̱͎̻̮̜̫̯͙̫͙̝͚͖̲̰̙͍̩̬̲͇̲͔͉̯̫͚̫̻͛͛͗͛̌͛́̓̇͆̋̀̽̅̌̅̔̓̋̾͌́̇̌͆̇̑͊͊͘̕͝͝ͅǫ̶̨̡̨̩̦̠̱̘͔̯̖̳̼͎̺̭̺͍̹͓̝̙̬̥͍͓̯̓͊̊͛͛͐͑͆̉̅̀̈̀͋̚͘̚̕͜͜͜͝͠ͅͅͅ ̷̨̨͚͚̞̗͙̩̯̣̖̣̝̪̥͈̬̝̦̱͈̬͉̳̐̑̊͗̂̍͒̃̈̌͂̎̆̅͂̇̓̌͂̂̔̉͑͆̚̚̚͝͠d̵̛͈͎̗̋̀͊̈̆̉̃͋̈̐̉̈̽̏̔͌̄̈́́̀̒̀̿̑̀͊̉̏̿̆͛̓́̐͒͂̌̌͛͝͝͝͝ͅả̴̧̡̢̛̙͔̯̻̲̠̙̦̯͔͓͈̃͋̃̄̌͗̽̃̐̈̾̽͗͌̊͑̌̌̃̌̒̐̅̈̒̏̽̒̊́͛́́́̑̄̄͘̚̕͠͝ ̷̧̧̢̧̧̨̛̛̩̤̘͕͉̻̜̫̳͇̙̯͈͍̗̟͙̒̏̄̌̇̊̂̑̌̇͝m̶̡̛͎͓͍̱͇͇̗̮̿̆̈́̎̑̉͐̀͆͂̀͒̆̐̀̒̅̄̉̇̐͑͋͒̑̍̾͌̄̂̚̕͘̚͝ā̵̛̼̖̥͓̖̭͖͉̩̰̬̳̗̳̰̳̹̣̾̂̀̃̾̔̈́̂̾̔͆̐̌̿́̒̎̿̎͂͆̓̄̿̈̑͋́̑͐͑͋̑̌̐̌̏̕̕̕̚͘͝͠͝͠n̸̡̨̨̡͖̠͈̭̞̱̥͈̤̘̦̦̭͈͇̝̻̠͎̙̤͓̝̒̿̀͑͜͜ͅͅͅȩ̸̨̳͓̦͕̲̜̖̳̫̙̫̫̻͉̱̼͔̜̜͉̙̘̝͙̲̗̼͔̜͖̤͎̮̞̘̹̹̟̲̳̦̤̏̄̏̄̐̈́̒̔̑͌̉̓̊͑̀̽͊̂̏̿̅̄̆̐̃͊̔̔̀̓̿̐̈́͘͜ͅi̸̡̙̙̳̜̘͖̻͈̤̩̱̫͕̬͇͒̈̈͗̅͗̆̃̓͗̔͗͐̎̀̈́́̿͑̾̽̈͛̓̓̑̅́̓͑͘̚͘̚̚͝͝͠r̸͖͖̘̲̞̹̗͗̓͊̇̔̀̌͛͌̑͝͠ä̵̡̛̺̭̙̝̟̹́̓̾ ̴̨̨̫̭̟̹͎̙̗͍̗͙̝̼͚̬̳̟͍̻̳̼͍͕̳̫̬̣̲͔̺̘̯̯̭̩̯̙͚͕͉̭̗̒̎̉͋̃̈̋̀̌̔͑̓̌̓̐̒̕̚͜͝͝c̸̢̡̨͈͇̪̳̰͓̙̯̣͈̟̰̟͖͓̯͉̰̹͈̝͕̪͎̬͓̰̪̰͚̞̦̹͇̹̮̖͓͕̬͇̹͆̄̾̇͗̑͂͐̓̉͒̍́̈̏̈́̆̀̔̐͐͗͑̈̎͆̈̾̇̂͂̕̚͜͜͠͝͠͠ͅŏ̴̘͙̩͔͈̩̣̤̼̫̪͕̺̣̞͔̜̖͖̯͕͓͙̬͚̥̠̺̪̃̉̎̄̀͌͗̊̅̂͑͂́̿̿̂̉̈́̂̈́̉̕̚̚̚͝͠͝͠r̴̨̧̡̢̛̛͇̞͍͇̝͎͎̟͇̗̤͉̼̲͖̠͔̭̖̺̪͇̖̬͇͇̫̩̹͉̙͚̤̥̣̟̼̓̊́̽̐̈́̑̑̅̔͛̇̓́̌̇͆̀̏́̉̽̈̀̒͑̆͂͆́̔͑͂͗̍́̈́̅̌̒̏͂̂̚͘͜͝͝r̵̙̭̬̱̼̩̤̭̻̰̩͇͕̠̲͕͉̭̦̤̪̒̍̅̈́͊̔̐̾͜͝ę̸̨̡̧̩̖̥̺̭̪̻̳̱̦͍̙̩̝̞̤̝̱̂̎́̔̂̌̃̂͗̽̅̏̅̒̿͊́̆̃͛̏͒̄͂̔̏̆́́͐͝ͅẗ̷͇̣̺͚̗̘͈͙̹͖̖̟̠̜͎̥̯̱̖̣̤́̊̾́͛̓̀̉͛͗̉͛́̿̈́̓̋̌͗̅̅̈́̈͒͐̀̈̄̾͗͐͛͊̑̊̈̄̌́̿̕͘̚̚̚͜͜͝͠͠ą̸̛̛̹̞̣̤̻̻̲̜̱͍̦̈́̿̊͌̈́̄̌͗̊͒͌́͗̒̈͂̈́͆̃͊̏̕̕͘͝ͅ.̷̡̢̡̡̜͈̭̹̹͕̟̥̖̳̝̘̙̭̪̙͇̼̥̯̫͚͎̼̠̫͙̾͐̾̇͋̏̀̂͌̂̈́̀̔̂̒̈͜ͅ.̴̢̘͓͈̣͔̙̣͆̅̏͑̓́̆̕͝ͅ.̴̢͇̘̻̳̭̞͉̠̹̬̭̭̬̙̪͇̪̻͕̞̲̣͎͐̏̊͐̆́̃'
    document.getElementById("imagem").src = "sprites/boo.png"
}

function testa(tentativa) {
    if (tentativa == "") {
        retorno.textContent = "Você não digitou nenhum número. Adivinhe meu número digitando o valor que acha ser o correto."
    } else {
        if (tentativa > resposta && tentativa <= 100) {
            tentativaErrada("meu número é menor que esse")
        } else if (tentativa < resposta && tentativa >= 0) {
            tentativaErrada("meu número é maior que esse")
        } else if (tentativa == resposta) {
            tentativaCerta()
        } else if (tentativa == 666) {
            glitch()
        } else {
            retorno.textContent = 'Você sabe que meu número está entre 0 e 100. Essa tentativa foi um desperdício...'
        }
    }
}