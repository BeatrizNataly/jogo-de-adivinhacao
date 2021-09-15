function switchImage() {
    if (customMode) {
        switchCustomModeImage()
    } else if(gameMode){
        switchNormalModeImage()
    } else {
        switchHardModeImage()
    }
}

function switchNormalModeImage() {
    switch (tentativasSobrando) {
        case 10:
        case 9:
            document.getElementById("imagem").src = "sprites/stage1.png"
            break
        case 8:
        case 7:
            document.getElementById("imagem").src = "sprites/stage2.png"
            break
        case 6:
        case 5:
            document.getElementById("imagem").src = "sprites/stage3.png"
            break
        case 4:
        case 3:
            document.getElementById("imagem").src = "sprites/stage4.png"
            break
        default:
            document.getElementById("imagem").src = "sprites/stage5.png"
    }
}

function switchHardModeImage() {
    switch (tentativasSobrando) {
        case 5:
            document.getElementById("imagem").src = "sprites/stage1.png"
            break
        case 4:
            document.getElementById("imagem").src = "sprites/stage2.png"
            break
        case 3:
            document.getElementById("imagem").src = "sprites/stage3.png"
            break
        case 2:
            document.getElementById("imagem").src = "sprites/stage4.png"
            break
        default:
            document.getElementById("imagem").src = "sprites/stage5.png"
    }
}

function switchCustomModeImage(){
    var imagens = []
    imagens.push("sprites/stage1.png")
    imagens.push("sprites/stage2.png")
    imagens.push("sprites/stage3.png")
    imagens.push("sprites/stage4.png")
    imagens.push("sprites/stage5.png")

    var valor = getRandomValue()
    return document.getElementById("imagem").src = imagens[valor]
}