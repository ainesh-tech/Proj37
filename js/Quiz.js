class Quiz {

  constructor(){
  }


  //fetch the gameState value from the database
  getState(){
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function (data){
          gameState = data.val();
      })
  }


  //update the gameState in the database.
  update(state){
  database.ref('/').update({
      gameState: state
      });
  }


  //question will be displayed and contestant will increase
  async start(){
      if(gameState === 0){
          contestant = new Contestant();
          var ContestantCountRef = await database.ref('contestantCount').once("value");
          if(ContestantCountRef.exists()){
              contestantCount = ContestantCountRef.val();
              contestant.getCount();
          }
          question = new Question()
          question.display();
      }
  }


  //results of the quiz will be dispalyed
  play(){
      question.hide();
      background("orange");
      fill(0);
      textSize(30);
      text("Result of the Quiz",340, 50);
      text("----------------------------",320, 65);
      Contestant.getContestantInfo();

      if(allContestants !== undefined){
        var display_Answers = 300;
        fill("bLUE");
        textSize(20);
        text("NOTE: Contestant who answered correct are highlighted in green color!",130,290);
  
        for(var plr in allContestants){
          var correctAns = "2";
          if (correctAns === allContestants[plr].answer)
            fill("Green")
          else
            fill("red");
          display_Answers+=30;
          textSize(20);
          text(allContestants[plr].name + " : " + allContestants[plr].answer, 250,display_Answers)
        }
      }
    }   

}