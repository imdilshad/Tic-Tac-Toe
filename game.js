let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO=true;//playerX playerO
let newGameBtn=document.querySelector("#new-game")
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;
const winpatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,4,6],
  [2,5,8],
  [3,4,5],
  [6,7,8],
]
const gameDraw=()=>{
    msg.innerText="The Game Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO===true)
    {
      box.classList.remove("btnX")
      box.classList.add("btnO")
      box.innerHTML="<b>O</b>";

      turnO=false;
      count++;
    }
    else{
      box.classList.remove("btnO")
      box.classList.add("btnX")
      box.innerHTML="<b>X</b>";
      turnO=true;
      count++;
    }
    box.disabled="true"
    let isWinner=checkWinner();
    if(count===9&&!isWinner){

      gameDraw();
    }
  });
});
const disableBoxes=()=>{
  for(let box of boxes){
   box.disabled=true;
  }
}
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="" ;
  }
}
const showWinner=(winner)=>{
msg.innerText=`Congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}
const checkWinner=()=>{
for(let pattern of winpatterns){
   let pos1val= boxes[pattern[0]].innerText;
   let pos2val= boxes[pattern[1]].innerText;
   let pos3val= boxes[pattern[2]].innerText;
   if(pos1val!="" && pos2val!="" && pos3val!=""){
    if(pos1val===pos2val && pos2val===pos3val){
console.log("winner",pos1val)
showWinner(pos1val);
    }
   }
  
}
}
newGameBtn.addEventListener("click",resetGame=()=>{
turnO=true;
count=0;
enableBoxes();
msgContainer.classList.add("hide")
});

resetBtn.addEventListener("click",resetGame=()=>{
turnO=true;
count=0;
enableBoxes();
msgContainer.classList.add("hide")
})