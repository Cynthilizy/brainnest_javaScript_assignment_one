"use strict";
var a, r, m, stringArray=['ROCK','PAPER','SCISSORS'];
let computerScore=0, playerScore=0;

   // loop function
   function game(){
for(let i=0;i<5;i++){
   //computer play function
function computerPlay() {
    var num=Math.floor(Math.random()*3)+1;
    if(num==1){
        a=stringArray[0];
    }else if(num==2){
        a=stringArray[1];
    }else{
        a=stringArray[2];
    }
        return a;
    }
    let compChoice=computerPlay();
    console.log("Computer chose "+compChoice);
    
    //user play function
function userPlay(){
    var choice=prompt("choose either 'Rock', 'Paper', or 'Scissors'").toUpperCase();  
    if(choice=='ROCK'){
         m=stringArray[0];
    }else if(choice=='PAPER'){
        m=stringArray[1];
    }else if(choice=='SCISSORS'){
        m=stringArray[2];
    }else{
        m="invalid input!"
    }
        return m;
    }
    var userChoice=userPlay();
    console.log("User chose "+userChoice);
    
    //function to play game
function playGame(computerSelection,playerSelection){
    if(computerSelection==='ROCK' && playerSelection==='SCISSORS'){
        r="COMPUTER WINS!! rock beats scissors";
        window.alert(r)
        computerScore++
    }else if(computerSelection==='SCISSORS' && playerSelection==='PAPER'){
        r="COMPUTER WINS!! scissors beats paper";
        window.alert(r)
        computerScore++
    }else if(computerSelection==='ROCK' && playerSelection==='PAPER'){
        r="USER WINS!! paper beats rock";
        window.alert(r)
        playerScore++
    }else if(computerSelection==='SCISSORS' && playerSelection==='ROCK'){
        r="USER WINS!! rock beats scissors";
        window.alert(r)
        playerScore++
    }else if(computerSelection==='PAPER' && playerSelection==='SCISSORS'){
        r="USER WINS!! scissors beats paper";
        window.alert(r)
        playerScore++
    }else if(computerSelection==='PAPER' && playerSelection==='ROCK'){
        r="COMPUTER WINS!! paper beats rock";
        window.alert(r)
        computerScore++
    }else{
        r="its a tie";
        window.alert(r);
    }
    return r;
    }
    console.log(playGame(compChoice,userChoice));
}
console.log("computer score is "+computerScore+" user score is "+playerScore);
if(computerScore>playerScore){
    var final="Computer Wins!"
}else if(computerScore<playerScore){
    final="Congratulation, you win computer!"
}else{
    final="its a tie"
}
console.log(final);
}
game();