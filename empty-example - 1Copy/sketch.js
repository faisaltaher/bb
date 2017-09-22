
function setup() {
  createCanvas(320,240);
}

function draw() {
   background(51);
    
   loadPixels();
    for (var y = 0;y<height; y++){
        for (var x = 0;y<width; x++){
        var a =(x+y*width)*4;
    pixels[a+0]=255;
    pixels[a+1]=0;
    pixels[a+2]=255;
    pixels[a+3]=255;
    }  
    }
    updatePixels();

}