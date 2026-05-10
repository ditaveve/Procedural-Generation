function setup() {
  createCanvas(width, height);
  drawRandomNoise();
}

function mouseClicked(){
  if(onSim()){
    drawRandomNoise();
  }
}
