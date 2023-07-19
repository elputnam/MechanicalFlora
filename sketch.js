//Double Che

let EL1;
let EL2;
let Che1;
let postcard;
let hand1;
let Che2;
let hand2;
let dad;
let yams;
let base;
let alp1 = 100;
let alp2 = 0;
let shift = -100;
let colour = 300;
let tileCount = 20;

function preload(){
  EL1 = loadImage('assets/ELDad_MechanicalFlora_EL1.png');
  EL2 = loadImage('assets/ELDad_MechanicalFlora_EL2.png');
  hand1 = loadImage('assets/ELDad_MechanicalFlora_hand1.png');
  postcard = loadImage('assets/ELDad_MechanicalFlora_CheCamera.png');
  Che1 = loadImage('assets/ELDad_MechanicalFlora_CheCard1.png');
  hand2 = loadImage('assets/ELDad_MechanicalFlora_hand2.png');
  Che2 = loadImage('assets/ELDad_MechanicalFlora_CheCard2.png');
  dad = loadImage('assets/ELDad_MechanicalFlora_dad.png');
  yams = loadImage('assets/ELDad_MechanicalFlora_yams.png');
  base = loadImage('assets/ELDad_MechanicalFlora_base.png');
}

function setup() {
  createCanvas(base.width/2, base.height/2);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(8);
}

function draw() {
  background(0);
  push();
  tint(255, random(50, 100));
  image(base, 0, 0, width, height);
  pop();

  //yams
  blend(yams, 0, 0, yams.width, yams.height, 0, 0, width, height, DARKEST);

    //universal flicker
    noStroke();
    fill(0, random(alp2));
    rect(0, 0, width, height);

  grid();

  //Che Card Camera
  blend(Che1, 0, 0, Che1.width, Che1.height, 0, 0, width, height, DARKEST);

  //hand1
  hand1.filter(GRAY);
  image(hand1, 0, 0, width, height);

  //postcard
  push();
  tint(255, alp1);
  image(postcard, 0, 0, width, height);
  pop();




  //dad
  push();
  tint(colour-180, random(100), alp1);
  dad.filter(GRAY);
  image(dad, random(shift), 0, width, height);
  pop();

  //EL1
  push();
  tint(colour, random(30), alp1);
  EL1.filter(GRAY);
  image(EL1, 0, 0, width, height);
  pop();


  //Che Card Cigar
  push();
  tint(255, alp2);
  image(Che2, 0, 0, width, height);
  pop();

  

  //hand 2
  push();
  tint(255, alp2);
  hand2.filter(GRAY);
  image(hand2, 0, 0, width, height);
  pop();

  //EL2
  push();
  tint(colour-180, random(100), 100, alp2);
  EL2.filter(GRAY);
  image(EL2, random(-50, 50), 0, width, height);
  pop();

  if (frameCount%int(random(20))==0){
    colour = random(360);
    tileCount = random(20, 50);
    //dad.filter(INVERT);
    if (alp1 >= 100){
      alp1 = 0;
      alp2 = 100;
    } else {
      alp1 = 100;
      alp2= 0;
    }
  }

}

function grid(){
  for (let gridY = 0; gridY < tileCount; gridY++) {
    for (let gridX = 0; gridX < tileCount; gridX++) {
      let posX = (width / tileCount) * gridX;
      let posY = (height / tileCount) * gridY;
      noStroke();
      rectMode(CORNER);
      //fill(0);
      //rect(posX, posY, width/tileCount, height/tileCount);
      
      var toggle = floor(random(2));
      if (toggle == 1){
         fill(0, random(alp2));
          circle(posX, posY, width/tileCount, height/tileCount);
    } else {
      fill(255, random(alp2)) ;
      circle(posX, posY, width/tileCount, height/tileCount);
      }
      }
    }
}
