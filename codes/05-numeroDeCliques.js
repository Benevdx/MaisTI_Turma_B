// Neste exemplo, cada clique, muda o estado  

// O estado deste sketch é determinado por esta variável 
let nroCliques;

// Permite inicializar o estado
function setup() {
  createCanvas(400, 400)
  nroCliques = 0;
}

// Apresentação gráfica
function draw() {
  background(220);
  textSize(20);
  text(nroCliques, 5, 20);
}

// Cada clique do mouse altera o estado
function mouseClicked() {
  nroCliques+; // cada clique do mouse incrementa nroCliques
}