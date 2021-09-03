// Variáveis
let snake
let scale = 20
let food

// Setup
function setup() {
  createCanvas(600, 600)
  snake = new Snake()
  frameRate(10)
  pickLocation() // Define a localização da comida
}

// Essa função escolhe uma localização para a comida de forma randômica
function pickLocation() {
  let columns = floor(width / scale)
  let rows = floor(height / scale)
  food = createVector(floor(random(columns)), floor(random(rows))) // Vetor que armazena tanto o x quanto o y
  food.mult(scale)
}

function mousePressed() {
  snake.total++
}

function draw() {
  background(51)

  // Come a comida (ver função "this.eat")
  if (snake.eat(food)) {
    pickLocation()
  }

  snake.death()
  snake.update()
  snake.show()

  // Comida
  fill(255, 0, 100)
  rect(food.x, food.y, scale, scale)
}

// Adicionando controle de teclado
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1) // se pressiono para cima, defino sua direção para 0 e -1
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1) // se pressiono para baixo, defino sua direção para 0 e 1
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0) // Se está movendo para a direita, seu x é 1 e y é 0
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0) // Se está movendo para a esquerda, seu x é -1 e y é 0
  }
}
