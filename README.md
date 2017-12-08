# JavaScript_notes
//Exercise Coursera: Part 1 Green Screen algorithm

var fgimg = new SimpleImage ("drewRobert.png");
var bgimg = new SimpleImage ("dinos.png");
var output = new SimpleImage (fgimg.getWidth(), fgimg.getHeight());

for (var pixel of fgimg.values()) {
    if (pixel.getGreen() == 255){
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgimg.getPixel(x, y);
        output.setPixel(x, y, bgPixel);
    }
    else {
      output.setPixel(pixel.getX(), pixel.getY(), pixel);  
    }
}
print(output);
