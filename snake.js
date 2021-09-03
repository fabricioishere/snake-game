function Snake() {
  this.x = 0
  this.y = 0
  this.xspeed = 1
  this.yspeed = 0
  this.total = 0
  this.tail = []

  // Essa função, por meio da condicional, verifica se encontrou um pedaço de comida ou não, checando a distância entre a cobra e a comida, se sim, aumenta seu tamanho (total) em 1
  this.eat = function (pos) {
    let d = dist(this.x, this.y, pos.x, pos.y)
    if (d < 1) {
      this.total++ // Ao comer, o total aumenta em 1
      return true
    } else {
      return false
    }
  }

  // Usa esses dois valores, x e y, para setar a direção do objeto
  this.dir = function (x, y) {
    this.xspeed = x
    this.yspeed = y
  }

  this.death = function () {
    for (let i = 0; i < this.tail.length; i++) {
      // Faz um loop em cada ponto da cauda
      let pos = this.tail[i] // Verifica cada posição
      let d = dist(this.x, this.y, pos.x, pos.y) // Verifica a distância entre a posição e o lugar na cauda
      if (d < 1) {
        // Se a distância for menor que 1, ou seja, colidir, dá game over
        console.log('começando novamente')
        this.total = 0
        this.tail = []
      }
    }
  }

  // Mantém a cobra se movendo, mantendo um registro de seu deslocamento, se move para o próximo "spot", se mantém na tela e verifica se está se cruzando com seus "spots" anteriores. Se nenhuma comida foi comida, então o total é o mesmo que o comprimento do array existente
  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1]
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y)
    }

    this.x = this.x + this.xspeed * scale
    this.y = this.y + this.yspeed * scale

    // Pega o valor x e y e restringe eles entre 0 e a largura/altura, fazendo com que o objeto snake não passe para fora do canvas
    this.x = constrain(this.x, 0, width - scale)
    this.y = constrain(this.y, 0, height - scale)
  }

  this.show = function () {
    fill(255)
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scale, scale)
    }
    rect(this.x, this.y, scale, scale)
  }
}
