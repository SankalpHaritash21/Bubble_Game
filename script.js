var Timer=60;
var score=0;
var rn=0

function inceaseScore()
{
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
    rn= Math.floor(Math.random()*10);
    document.querySelector("#htval").textContent=rn;
}

function Bubble()
{
    var clutter="";

for(var i=1;i<=152;i++)
{
    var x=Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${x}</div>`;
}

document.querySelector("#pbtm").innerHTML= clutter;
}

function runTimer()
{
 var timerr=setInterval(function(){
        if(Timer>0)
        {
        Timer--;
        document.querySelector("#timer").innerHTML=Timer;
        }
        else{
    clearInterval(timerr);
    document.querySelector("#pbtm").innerHTML=`<h1>Game Over <br> Your Score: ${score}</h1>`;    
}
},1000);
}

//Here we have used Event Bubbling concept which mean that add event on parent of group object;

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum=Math.floor(Number(dets.target.textContent));   
    if(rn === clickedNum)
    {
    inceaseScore();
    getNewHit();
    Bubble();
    
    }
    
})


inceaseScore();
runTimer();
getNewHit();
Bubble();