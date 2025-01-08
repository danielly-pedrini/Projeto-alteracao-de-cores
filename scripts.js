
/*function  trocaCorGreen(){
document.body.style.backgroundColor = "green"
}

function trocaCorBlue(){
    document.body.style.backgroundColor = "blue"
}

function trocaCorYellow(){
    document.body.style.backgroundColor = "yellow"
}

function trocaCorRed(){
    document.body.style.backgroundColor ="red"
}
*/

function trocaCor(cor){
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = cor
}

function corAleatoria(){
    const red = Math.floor (Math.random() * 255)
    const green = Math.floor (Math.random() * 255)
    const blue = Math.floor (Math.random() * 255)

    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = ` rgb(${red}, ${green}, ${blue})`
}

function corPersonalizada(){

const corInput = document.querySelector('.input-color').value
trocaCor(corInput)

}

function selecionarImagem(imagem) {

const reader = new FileReader()

reader.onload = function(evento){

    const urlImagem = evento.target.result
    
    document.body.style.backgroundImage = `url('${urlImagem}')`
}

reader.readAsDataURL(imagem)
   

}