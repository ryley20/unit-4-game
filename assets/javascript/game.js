
     //  variables

         
     var minNumber = 19;
       
     var maxNumber = 120;

     var randomCompNumberBox = randomNumberFromRange(minNumber, maxNumber);

     var lossesBox = 0;

     var winsBox = 0;

     var playerScore = 0;

     var rupeeValues = [0,0,0,0];

     assignRupeeValues();
     
     document.getElementById("wins").textContent = `WINS: 0`;
     document.getElementById("losses").textContent = `LOSSES: 0`;

     function clearGame() {
       console.log("Clearing");
       lossesBox = 0;
       winsBox = 0;

       gameOver();

       refreshView();

     }

     function addToScore(id) {

       playerScore+=rupeeValues[parseInt(id)];

       if (playerScore === randomCompNumberBox){
         winsBox += 1;
         gameOver();
       }
       if (playerScore > randomCompNumberBox){
         lossesBox += 1;
         gameOver();
       }

       refreshView();

     }

     function refreshView(){
       document.getElementById("playerScore").textContent = `PLAYERSCORE: ${playerScore}`;
       document.getElementById("wins").textContent = `WINS: ${winsBox}`;  
       document.getElementById("losses").textContent = `LOSSES: ${lossesBox}`;
       document.getElementById("randomCompNumberBox").textContent = randomCompNumberBox;
     }

     function gameOver(){
       randomCompNumberBox = randomNumberFromRange(minNumber, maxNumber);
       playerScore = 0;
       assignRupeeValues();
     }
     
     function assignRupeeValues(){
       rupeeValues[0] = randomNumberFromRange(1, 12);
       rupeeValues[1] = randomNumberFromRange(1, 12);
       rupeeValues[2] = randomNumberFromRange(1, 12);
       rupeeValues[3] = randomNumberFromRange(1, 12);
     }

     function randomNumberFromRange(min,max)
     {
       return Math.floor(Math.random()*(max-min+1)+min);
     }
     
     $('#randomCompNumberBox').text(randomCompNumberBox);
