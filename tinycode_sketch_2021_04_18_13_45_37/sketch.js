let angle = 0;
let ofset = 30;
let squaresPerRow = 30;
let frame = 0;

let squareSize = 400/squaresPerRow;
let initOfest = (400 - squareSize)/2;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  //background(0,100+100*sin(frame),100+100*sin(-frame));
  translate (-initOfest, -initOfest);
  
  for(let i = 0; i<squaresPerRow; i++){
    for(let j = 0; j<squaresPerRow; j++){
      push();
      translate(i*squareSize,j*squareSize);
      
      if(j <= i){
        if(j < squaresPerRow/2){
          if(i < squaresPerRow/2){
            rotateY(angle - j*ofset);
          } else {
            if(squaresPerRow-j > i){
              rotateY(angle - j*ofset);
            } else {
              rotateX(angle + i*ofset);
            }
          }
        } else {
          rotateX(angle + i*ofset);
        }
      }
      
      if(i < j){
        if(i < squaresPerRow/2){
          if(j <squaresPerRow/2){
            rotateX(-angle + i*ofset);
          } else {
            if(squaresPerRow-j > i){
              rotateX(angle - i*ofset);
            } else {
              rotateY(angle + j*ofset);
            }
          }
        } else {
          rotateY(-angle - j*ofset);
        }
      }
      /*
      if(j <= i){
        if(j <= squaresPerRow/2){
          rotateX(-angle + i*ofset);
        } else {
          rotateX(angle - i*ofset);
        }
      } else {
        rotateY(angle - j*ofset);
      }
      
      */
      //fill(0,100+100*sin(-frame),100+100*sin(frame));
      box(squareSize,squareSize,1);
      pop();
    }
  }
  
  angle+=2;
  frame++;
}