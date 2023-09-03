let body=document.querySelector("body");
let h1=document.querySelector("h1");
let h2=document.querySelector("h2");
let container=document.querySelector(".btnContainer");
let gameSeq=[];
let useSeq=[];
let started=false;
let level=0;
document.addEventListener("keypress",function(){
   if(started==false){
    console.log("game is started");
    started=true;
   
   }
   levelIncrease();

  
})
let btns=["yellow","red","purple","green"];
function levelIncrease(){
   level++;
   h2.innerText=`Level ${level}`
   let randomIdx=Math.floor(Math.random()*btns.length)
   let randomColor=btns[randomIdx];
   let randomBtn=document.querySelector(`.${randomColor}`);
   gameFlash(randomBtn);
   gameSeq.push(randomColor);
   console.log(gameSeq);
   useSeq=[];
}

function gameFlash(btn){
   btn.classList.add("flash");
   
   setTimeout (function(){
      btn.classList.remove("flash");
   }, 500)
}
function userflash(btn){
   btn.classList.add("userflash");
   setTimeout (function(){
      btn.classList.remove("userflash");
   }, 500)
}


function checkAns(idx){
   // console.log("curr level:",level);
   if (useSeq[idx]==gameSeq[idx]){
      if (useSeq.length==gameSeq.length){
         setTimeout(levelIncrease,1000);
       
      }
      
   }else{
      h2.innerHTML=`Game Over! Your score was <b> ${level} </b> Press any key to start !`;
      body.style.backgroundColor="red";
      setTimeout(function(){
         body.style.backgroundColor="Lightgray";

      },1000);
      reset();
   }
}
function btnPress(){
   console.log(this);
   let btn=this;
   userflash(btn);


   userColor=btn.getAttribute("id");
   useSeq.push(userColor);
   // console.log(userColor); 
   checkAns(useSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
   btn.addEventListener("click",btnPress);
}

function reset(){
   started=false;
   gameSeq=[];
   useSeq=[];
   level=0;
}