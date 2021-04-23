var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database,databaseContestantCount,state;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  databaseContestantCount=database.ref('contestantCount')
  databaseContestantCount.on("value",readCount)
  state=database.ref('gameState')
  state.on("value",readState)
}


function draw(){
  background("pink");
  if(databaseContestantCount === 2){
    //quiz.update(1);
    database.ref('/').update({
      gameState: 1
  })
  console.log(databaseContestantCount)
}
  if(state === 1){
    clear();
    quiz.play();
  }
}

function readCount(data){
  databaseContestantCount=data.val();
 }

 function readState(data){
  state=data.val();
  
 }
