const score= JSON.parse(localStorage.getItem('score')) || {
    win:0,loss:0,tie:0
};

function playGame(playerMove){
    const computerMove=pickofComputer();
    let result='';
       if(playerMove==='rock'){
        if(computerMove=== 'rock'){
            result='its tie';
        }else if (computerMove=== 'paper'){
            result='you lose'
        }else if (computerMove=== 'scissors'){
            result='you win';
        }
       }
       if(playerMove==='paper'){
        if(computerMove=== 'rock'){
            result='you win';
        }else if (computerMove=== 'paper'){
            result='its tie'
        }else if (computerMove=== 'scissors'){
            result='you lose';
        }
       }
       if(playerMove==='scissors'){
        if(computerMove=== 'rock'){
            result='you lose';
        }else if (computerMove=== 'paper'){
            result='you win'
        }else if (computerMove=== 'scissors'){
            result='its tie';
        }
       }
        console.log(result);
        if(result==='you win'){
            score.win+=1;
        }
        else if(result==='you lose'){
            score.loss+=1;
        }
        else if(result==='its tie'){
            score.tie+=1;
        }
        updateScore();
        
        localStorage.setItem('score',JSON.stringify(score)); 
        document.querySelector('.js-3').innerHTML=result;
        moveUpdate(playerMove,computerMove);
}

function pickofComputer(){
    const randomNumber=Math.random();
    let computerMove='';
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove ='rock';
    } else if (randomNumber>=1/3 && randomNumber<2/3){
        computerMove='paper';
    }else if(randomNumber>=2/3 && randomNumber<1){
        computerMove='scissors';
    }
  return computerMove; 
}
function updateScore(){
    document.querySelector('.js-1').innerHTML=`Win :${score.win} Loss:${score.loss} Tie:${score.tie}`;
}
function moveUpdate(playerMove,computerMove){
        document.querySelector('.js-2').innerHTML=`You:<img src="images/${playerMove}-emoji.png"> - Computer:<img src="images/${computerMove}-emoji.png">`;
    }
let isAutoPlaying=false;
let intervalId;
function autoPlay(){
    if(!isAutoPlaying){
       intervalId= setInterval(()=>{
            const playerMove=pickofComputer();
            playGame(playerMove);
        }  ,1000);
        isAutoPlaying=true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying=false;
    }

}