//Open Source code developed by Ainesh Jai Wuppuluri on 23/04/2021
//Published to github for everyone to use and learn :)


var canva;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var quiz;
var question;
var contestant;



function setup(){

  canvas = createCanvas(850,450);

  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}



function draw(){

  background(247, 186, 156);

  //if contestantCount is 4 update it in database
  if(contestantCount === 4){
    quiz.update(1);
  }

  //if gameState is 1 then quiz reults will be displayed
  if(gameState === 1){
    clear();
    quiz.play();
  }
  
}