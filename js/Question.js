  
class Question {

  constructor(){
      this.title = createElement("h1");
      this.question = createElement("h3");
      this.option1 = createElement("h4");
      this.option2 = createElement("h4");
      this.option3 = createElement("h4");
      this.option4 = createElement("h4");
      this.input1 = createInput("Enter your name..");
      this.button = createButton("Submit");
      this.input2 = createInput("Enter Correct Option No..");
      this.choice = createElement("h2");        
  }


  hide(){
      this.title.hide();
      this.question.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
  }


  display(){

      this.title.html("My Quiz Game");
      this.title.position(350,0);

      this.question.html("Question: What starts and ends with the letter e- BUT only has one letter?");
      this.question.position(160,60);

      this.option1.html("1: Everyone");
      this.option1.position(160,100);
      this.option2.html("2: Envelope");
      this.option2.position(160,140);
      this.option3.html("3: Estimate");
      this.option3.position(160,180);
      this.option4.html("4: Example");
      this.option4.position(160,220);

      this.input1.position(250,280);
      this.input2.position(450,280)
      this.button.position(420, 320);

      this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();      
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);

      this.choice.html("Your choice: " + contestant.answer)
      this.choice.position(390, 180);

      });
  }

}