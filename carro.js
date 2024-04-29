let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 260, 315]
let velocidadeCarros = [5, 6, 3.5, 2.5, 5, 3]
let comprimentoCarro = 50
let alturaCarro = 40

function mostraCarro(){
  for (i = 0; i < imagemCarros.length; i++) {
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro) 
  }
}

function movimentaCarro(){
  for (i = 0; i < imagemCarros.length; i++) {
    // não entendi se usa o imagemCarros ou xCarros .length
    xCarros[i] -= velocidadeCarros[i]
  }
}

function voltaPosicaoInicialDoCarro(){
  for (i = 0; i < imagemCarros.length; i++) {
    if (passagemCompletaNaTela(xCarros[i])) {
    xCarros[i] = 600
    }
  }
}

function passagemCompletaNaTela(xCarro){ 
  return xCarro < -50
}