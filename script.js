let bwImg;
let colorImg;
let startMouseX, startMouseY;

function preload() {
  bwImg = loadImage("./Genius Hour.png");
  colorImg = loadImage("./Genius Hour.png")
}


function setup() {
  let canvas = createCanvas(1920, 1080)
  canvas.parent("canvas-container")
  bwImg.loadPixels();
  for (let y=0; y<bwImg.height; y++) {
    for (let x=0; x<bwImg.width; x++) {
      let index = (x + y * width) * 4;
      let r = bwImg.pixels[index+0];
      let g = bwImg.pixels[index+1];
      let b = bwImg.pixels[index+2];
      // let a = pixels[index+3];
      let bw = (r + g + b)/3;
            
      bwImg.pixels[index] = bw * 2 / 3;
      bwImg.pixels[index + 1] = bw * 2 / 3;
      bwImg.pixels[index + 2] = bw * 2 / 3;
    }
  }
  bwImg.updatePixels();
}


function draw() {
  background(0)
  image(bwImg, 0, 0, bwImg.width, bwImg.height);
}

function mousePressed() {
  startMouseX = mouseX;
  startMouseY = mouseY;
}

function mouseReleased() {
  makeSectionColored(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY)
}



function makeSectionColored(sectionX, sectionY, sectionWidth, sectionHeight) {
  console.log(sectionX, sectionY, sectionWidth, sectionHeight)
  bwImg.loadPixels();
  colorImg.loadPixels();
  for (let y=sectionY; y<sectionY + sectionHeight; y++) {
    for (let x=sectionX; x<sectionX + sectionWidth; x++) {
      let index = (x + y * width) * 4;
      let r = colorImg.pixels[index];
      let g = colorImg.pixels[index + 1];
      let b = colorImg.pixels[index + 2];
            
      bwImg.pixels[index] = r;
      bwImg.pixels[index + 1] = g;
      bwImg.pixels[index + 2] = b;
    }
    
  }
  colorImg.updatePixels();
  bwImg.updatePixels();
}