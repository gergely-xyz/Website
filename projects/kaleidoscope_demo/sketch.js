class Blob{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.R = 0;
        this.G = 0;
        this.B = 0;

        this.d = 20;

    }

    draw(){
        fill(this.R, this.G, this.B);
        ellipse(this.x, this.y, this.d, this.d)
    }
    
    moveTo(x,y){
        this.x = x;
        this.y = y;
    }
    
    setColor(R,G,B){
        this.R = R;
        this.G = G;
        this.B = B;
    }

    setDiameter(d){
        this.d = d;
    }
}

var blobs = [new Blob(), new Blob(), new Blob(), new Blob(), new Blob(), new Blob(), new Blob(), new Blob()];

var myX = 0;
var myY = 0;
var myD = 0;

var xoff = 42;
var yoff = 73;
var doff = 17;

var myred = 128;
var redshift = 1;

var mygreen = 0;
var greenshift = 1;

var myblue = 0;
var blueshift = 1;

function setup() {
    // Begin drawing in the center
    myX = width/2;
    myY = height/2;

    // Make canvas in the center of the window
    var cnv = createCanvas(800,800);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

    noStroke();
    background(0);
}


function draw() {
    // Get a random position
    myX = noise(xoff)*width;
    myY = noise(yoff)*height;

    xoff = xoff + 0.005;
    yoff = yoff + 0.004;

    // Set random diameter 5-25
    myD = noise(doff)*20+5;
    doff = doff + 0.006;

    // Move blobs to position
    blobs[0].moveTo(myX, myY);
    blobs[1].moveTo(width-myX, myY);
    blobs[2].moveTo(myX, height-myY);
    blobs[3].moveTo(width-myX, height-myY);
    
    blobs[4].moveTo(myY, myX);
    blobs[5].moveTo(width-myY, myX);
    blobs[6].moveTo(myY, height-myX);
    blobs[7].moveTo(width-myY, height-myX);

    // Shift color back and forth
    myred = myred+redshift;
    mygreen = mygreen+greenshift;
    myblue = myblue+blueshift;

    if (myred >= 255 || myred <= 0){
        redshift = -1*redshift;
    }

    if (myblue >= 255 || myblue <= 0){
        blueshift = -1*blueshift;
    }

    if (mygreen >= 255 || mygreen <= 0){
        greenshift = -1*greenshift;
    }

    // Draw with the blobs
    for (var i = 0; i<8; i++){
        blobs[i].setDiameter(myD);
        blobs[i].setColor(myred, mygreen, myblue);
        blobs[i].draw();
    }

    
}
