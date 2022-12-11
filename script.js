var ball=document.getElementById("ball");
var game=document.getElementById("game");
var block=document.getElementById("block");
var hole=document.getElementById("hole");
var score=0;

hole.addEventListener("animationiteration",function(){
    var random=-((Math.random()*300)+150);
    holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    hole.style.top=random+"px";
    score+=1;
    document.getElementById("score").innerHTML=score;
});

var flying;
var gravityVel=0;

function fly(){
    block.classList.add("blockc");
    hole.classList.add("holec");
    flying=true;
}
function fall(){
    flying=false;
}

var interval=setInterval(function(){
    var ballTop=parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
    var holeTop=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(flying==false){
        gravityVel+=0.5;
        ball.style.top=ballTop+gravityVel+"px";
    }
    if(flying==true){
        gravityVel=0;
        ball.style.top=ballTop- 5+"px";
    }
    if((ballTop>=480||ballTop<=0)||((blockLeft<=20 && blockLeft>=-30)&&(ballTop<=(holeTop+500) || (ballTop+20)>=(holeTop+600)))){
        alert("You Lose!!");
        block.style.animation="stop";
        hole.style.animation="stop";
        clearInterval(interval);
    }
},16);

