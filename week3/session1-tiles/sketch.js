let step
let numAcross=10

function setup(){
  createCanvas(windowWidth, windowHeight);
  step=width/numAcross
  frameRate(5)
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
  let numSquares=8
  push()
  translate((across+0.5)*step, (down+0.5)*step)
  rectMode(CENTER)
  noFill()
  for(let k=0; k<numSquares; k++){
    let r=random(10)
    
    if(r<3){
      fill(255, 105, 180)
    } else{
      fill(137,207,240)
    }
    if(r<5){
      
      ellipse(0,0,step*k/random(50,1))
    }
  }
  
  
  pop()
}
