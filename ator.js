let xAtor = 100
let yAtor = 368
let colisao = false
let meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 4  
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMoverParaBaixo()) {
      yAtor += 3
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if (podeSeMoverParaEsquerda()) {
      xAtor -= 4
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (podeSeMoverParaDireita()) {
      xAtor += 4
    }
  }
}

function verificaColisao() {
  for (i = 0; i < imagemCarros.length; i++) {
  colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15) 
    if (colisao) {
      voltaPosicaoInicialDoAtor()
      somColisao.play()
      if (meusPontos > 0) {
         meusPontos -= 1
      }
    }
  }
}

function voltaPosicaoInicialDoAtor(){
  yAtor = 368
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 250, 60))
  text(meusPontos, width / 5, 25)
}

function marcaPontos() {
  if (yAtor < 15) {
    meusPontos += 1
    somPonto.play()
    voltaPosicaoInicialDoAtor()
  }
}

function podeSeMoverParaBaixo() {
  return yAtor < 366
}

function podeSeMoverParaEsquerda() {
  return xAtor > 0
}

function podeSeMoverParaDireita() {
  return xAtor < 470
}


