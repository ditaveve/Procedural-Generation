const width = 400;
const height = 400;

const noiseLevel = 255;
const noiseScale = 0.02;

const snowcapThreshold = 0.75;
const mountainThreshold = 0.6;
const grassThreshold = 0.4;
const shallowWaterThreshold = 0.35;


function getColour(noiseVal){
  if(noiseVal > snowcapThreshold){
    return color(219, 219, 219);
  }else if(noiseVal > mountainThreshold){
    return color(112, 112, 112);
  }else if(noiseVal > grassThreshold){
    return color(75, 139, 59);
  }else if(noiseVal > shallowWaterThreshold){
    return color(0, 157, 196);
  }else{
    return color(0, 147, 186);
  }
}


function drawRandomNoise(){
  for(let x = 1; x < width; x++){
    for(let y = 1; y < height; y++){

      let nx = noiseScale * x;
      let ny = noiseScale * y;

      let val = noise(nx, ny);
      let colour = getColour(val);

      stroke(colour);
      point(x, y);
    }
  }
}


function onSim(){
  return (
    mouseX >= 0 && mouseX <= width &&
    mouseY >= 0 && mouseY <= height
  );
}
