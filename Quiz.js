class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
   question.hide();
   
   background("yellow")
    fill(0)
    textSize(40)
    text("Result of the quiz",300,40)
    Contestant.getPlayerInfo();
    if(allContestants!==undefined){
    textSize(20)
    fill("blue")
    text("*NOTE-the contestant who answered right are highlighted in green",200,300)
    }
    for(var plr in allContestants)
    {
      var display_position=230;
      var correctAns="2"
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red")

      textSize(15);
      display_position+=20;
      text(allContestants[plr].name + ": " + allContestants[plr].answer, 400,display_position)
    }
   
    //write code to highlight contest who answered correctly
    
  }

}
