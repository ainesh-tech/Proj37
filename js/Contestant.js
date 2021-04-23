class Contestant {

  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }


  //fetch the gameCount value from the database
  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }


  //update the gameCount in the database
  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }


  //to get contestant name answer
  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }


  //to get contestant information
  static getContestantInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
  }
  
}
