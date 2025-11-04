const score=JSON.parse(localStorage.getItem('score')) ||
        {wins:0,losses:0,ties:0};

        updateScoreElement();

        function pickComputerMove(){
           const randomNumber = Math.floor(Math.random() * 3) + 1;
           console.log(randomNumber);
            if (randomNumber===1){
            return 'rock';
           }
           else if (randomNumber===2){return 'paper';}
           else {return 'scissor';}
        }

        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML=`wins:${score.wins},losses:${score.losses},ties${score.ties}`;
        }

        function reset() {       
    document.querySelector('.js-result').style.display = 'none';
    document.querySelector('.js-moves').style.display = 'none';
    
  }


        function playGame(playerMove){
            const computerMove=pickComputerMove();
            let result='';
                document.querySelector('.js-result').style.display = 'block';
    document.querySelector('.js-moves').style.display = 'block';

            if (playerMove===computerMove){
                result ='IT IS A TIE';
            }
            else if((playerMove==='rock' && computerMove==='scissor')||
            (playerMove==='paper' && computerMove==='rock')||
            (playerMove==='scissor' && computerMove==='paper'))
            {result='YOU WON!';}
            else{result='YOU LOST!';}


            if (result==='YOU WON!'){
                score.wins+=1;
            }
            else if (result==='YOU LOST!'){
                score.losses+=1;
            }
            else if (result==='IT IS A TIE')
            {score.ties+=1;}

            localStorage.setItem('score',JSON.stringify(score));


            updateScoreElement();

            document.querySelector('.js-result').innerHTML=`${result}`;
            document.querySelector('.js-moves').innerHTML=` You picked
         <img src="./image/${playerMove}.png"  class="icon">
         computer picked
         <img src="./image/${computerMove}.png"  class="icon">
         `;   
        
        const resultEl = document.querySelector('.js-result');
resultEl.classList.remove('result-animate'); // reset animation
void resultEl.offsetWidth; // force reflow
resultEl.classList.add('result-animate');
}

let isAutoPlaying=false;
let intervalId;
function autoPlay(){

   const button=document.querySelector('.auto-play-button');
    if (!isAutoPlaying){
        intervalId=setInterval ( ()=>{
        const playerMove=pickComputerMove();
        playGame(playerMove);
    },2000);
    isAutoPlaying=true;
    setTimeout(()=>{
        button.textContent='Stop Auto Play';
    },2000);
    
    
    
    }else{
        clearInterval(intervalId);
        isAutoPlaying=false;
        button.textContent='Auto Play'
    }
}



document.querySelector('.rock-button')
    .addEventListener('click',()=>playGame('rock'));

document.querySelector('.paper-button')
    .addEventListener('click',()=>playGame('paper')); 
    
document.querySelector('.scissor-button')
    .addEventListener('click',()=>playGame('scissor'));    

document.querySelector('.reseting')
    .addEventListener('click',()=>{
        message();
    })


document.querySelector('.auto-play-button')
      .addEventListener('click',()=>autoPlay());   
      
    
document.body.addEventListener('keydown',(event) =>{

    if (event.metaKey||event.ctrlKey){
        keyPressed=false;
        return;}

   if (event.key==='r'){
    playGame('rock');
   }else if(event.key==='p') {
    playGame('paper');
   }else if (event.key==='s') {
    playGame('scissor');
   }else if(event.key==='a'){
    autoPlay();
   }else if(event.key==='Backspace'){
        message();
   }
});
function message(){
  const messageElement=document.querySelector('.messageToReset');
     messageElement.innerHTML=`Do You Want To Reset The Score 
     <button class="yes-button haa">Yes</button> 
      <button class="no-button naa">No</button>`;
  
      
  document.querySelector('.yes-button') 
     .addEventListener('click',()=>{
         score.wins = 0;
         score.losses = 0;
          score.ties = 0;
           localStorage.removeItem('score');
            updateScoreElement();
           reset();

           messageElement.innerHTML = '';
         })   ;  

    document.querySelector('.no-button').addEventListener('click', () => {
 
  messageElement.innerHTML = '';
   })};