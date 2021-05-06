//creating canvas and background
var canvas, backgroundImage;

//giving values to objects
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

//assigning values
var form, player, game;

//assigning car names
var cars, car1, car2, car3, car4;

//assigning images name
var track, car1_img, car2_img, car3_img, car4_img;

//loading images
function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

//creating canvas and database
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}



function draw(){
  //when all the four players join start the game
  if(playerCount === 4){
    game.update(1);
  }
  //when the gamestate reaches one play the game
  if(gameState === 1){
    clear();
    game.play();
  }
  //when gamestate reaches two end the game
  if(gameState === 2){
    game.end();
  }
}
