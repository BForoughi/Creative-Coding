let step
let numAcross=50

function setup(){
  createCanvas(windowWidth, windowHeight);
  step=width/numAcross
}

function draw(){
  background(220);
  for(let j=0; j<numAcross;j++){
    for(let i=0; i<numAcross; i++){
      drawTile(i,j,step)
    }
  }
}

function drawTile(across, down, step){
  
  push()
  translate((across+1)*step, (down+0.5)*step)
  angleMode(DEGREES)
  rotate(frameCount+down*10,across*100)
  rect(10,-10,step*1.5, step)
  
  pop()
}
