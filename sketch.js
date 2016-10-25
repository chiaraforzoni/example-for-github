function setup() {
  createCanvas(800,600)
  background(100)
  noFill()
  angleMode(DEGREES)
  frameRate(60) //1 sec = 12 frames .... 10 secs= 120 frames
  //12 frame per second
}
//lerpColor blends two colors to find a third color somewhere between them.
//lerpColor(colo1,col2,amount) amount is the color in between
function draw() {
  translate(width/2, height/2)
  rotate(frameCount*3)
  //360 in total (3x120) 
  //redcolor #ea0043
  //blucolor #0fefca
 //lerpColor( color1, color2, number-from-0-to-1) compare this gradient with a values taht is going from 0 to 1. 0 is col1 e 1 is col2
 //lerpColor( color('#ea0043'), color('#0fefca'), 0,5) >>>indica solo un colore
  //stroke( lerpColor( color('#ea0043'), color('#0fefca') , 0.7) )
  
  
  //stroke( lerpColor( color('#ea0043'), color('#0fefca'), frameCount/120) )   continue to beign blue
  stroke( lerpColor( color('#ea0043'), color('#0fefca'), (frameCount%120)/120) )
  ellipse(100,0,250,250)
}