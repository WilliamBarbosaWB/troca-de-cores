//funcções -  function

function trocaCor(cor) {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = cor
}


function corAleatoria(){
    //gerar cor aleatoria = ataves do Math.Randow
    // preciso de 3 numeros de 0 a 255
    const red = Math.floor(Math.random() *255)
    const green = Math.floor(Math.random() *255)
    const blue = Math.floor(Math.random() *255)
   
    document.body.style.backgroundImage = 'none'

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function aplicarCor(){
    const corInput = document.querySelector('.input-cor').value

    trocaCor(corInput)
}

//subir uma imagem para meu body da aplicação
function escolherImagem(imagem){
    const reader = new FileReader() //uma forma de ler o arquivo selecionado

    reader.onload =  function(evento){
        const urlImagem = evento.target.result
        document.body.style.backgroundImage = `url('${urlImagem}')`
}
    } //é chamado quando for criada a url

    reader.readAsDataURL(imagem) //criando a url da imagem que será inserida.
