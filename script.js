score = 0;
cross = true;

audio = new Audio("images/music.mp3");
audiogo = new Audio("images/gameover.mp3");
setTimeout(()=>{
    audio.play();
},1000);

document.onkeydown = function(e){
    console.log('Key Press :',e.keyCode);
     
    if(e.keyCode == 38){
        mario= document.querySelector('.mymario');
        mario.classList.add('animateMario');
        
        setTimeout(() => {
            mario.classList.remove('animateMario');
        },700);
    }
    if(e.keyCode == 39){
        mario= document.querySelector('.mymario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = marioX + 112 + "px";
    }
    if(e.keyCode == 37){
        mario= document.querySelector('.mymario');
        marioX = parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
        mario.style.left = (marioX - 112) + "px";
    }
}

setInterval(() => {
    mario= document.querySelector('.mymario');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle'); 
     
    mx= parseInt(window.getComputedStyle(mario, null).getPropertyValue('left'));
    my= parseInt(window.getComputedStyle(mario, null).getPropertyValue('top'));
    
    ox= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    
    offsetX = Math.abs(mx-ox);
    offsetY = Math.abs(my-oy);
     if(offsetX<73 && offsetY<52){
         gameOver.innerHTML = 'Game Over-Reload to Play again..';
         obstacle.classList.remove('obstacleAni');
         audiogo.play();
         setTimeout(() =>{
             audiogo.pause();
             audio.pause();
         },1000);
         
     }else if(offsetX<125 && cross){
         score +=1;
         updateScore(score);
         cross = false;
         setTimeout(() =>{
             cross = true;
         },1000);
         
         setTimeout(() =>{
            aniDuration =  parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
             newDuration =aniDuration - 0.8;
             obstacle.style.animationDuration = newDuration + 's';
          },500);
     }
    
},10);

  function updateScore(score) {
      scoreCont.innerHTML = "Your Score : " +score;
  }












