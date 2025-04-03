let myArrow;
let arrows = [];

function preload() {

}

function setup() {
  createCanvas(250, 250, WEBGL);
  angleMode(DEGREES);
  myArrow = new Arrow(0,100,0);

  cam = createCamera();

  // Place the camera at the top-center.
  cam.setPosition(200, -200,500);
  // Point the camera at the origin.
  cam.lookAt(0, 0, 0);
  
//   for(var i = 0; i < (width - 25) / 50;i++){
//     for(var j = 0; j < (height) / 50;j++){
//     arrows.push(new Arrow(((i * 50) - width /2) + 25, ((j * 50) - height /2) + 80 ,0));
//     }
//   }

}

function draw() {
  background(250);
  myArrow.update();
//   for(i in arrows){
//     arrows[i].update();
//   }

    orbitControl()
}

// Rotate 1 degree per frame along all three axes
function rotateWithFrameCount() {
    rotationSpeed = 0.1
    // rotateZ((frameCount * rotationSpeed) % 365);
    // rotateX((frameCount * rotationSpeed) % 365);
    rotateY(frameCount * rotationSpeed);
}

class Arrow{
    constructor(xPos,yPos,zPos){
        this.v = createVector(xPos,yPos,zPos)
    }
    update(){
        push();
            rotateWithFrameCount();
            scale(2)
            normalMaterial();
            translate(this.v.x, this.v.y - 100, this.v.z);

            push();
                fill(0,0,100);
                torus(40,1);

                fill(0,255,0);
                cylinder(1,80);
                
                rotateX(90);
                
                fill(0,100,0);
                torus(40,1);

                fill(0,0,255);
                cylinder(1,80);

                rotateY(90);

                fill(100,0,0);
                torus(40,1);

                rotateX(90);
                fill(255,0,0);
                cylinder(1,80);
                
            pop();
            rotateX(45);
            fill(100,0,100);
            // rotateWithFrameCount();
            translate(0,-17.5,0)
            cylinder(2, 35);

            rotateX(180);
            translate(0,20,0)
            cone(4,5);
        pop();
    }
}