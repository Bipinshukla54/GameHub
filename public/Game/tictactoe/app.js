let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector(".reset");
let newGameBtn = document.querySelector(".newBtn");
let messageContainer =document.querySelector(".msg-container");
let msg=document.querySelector(".msg")

let trunO=true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(trunO){
            box.innerText="O";
            trunO=false;
        }else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;


        checkWinner();
        
    });
});

const disableboxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
    };
};

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const showWinner=(winner)=>{
    msg.innerText=`congratulations , winner is ${winner}`
    msg.classList.remove('hide')
    newGameBtn.classList.remove('hide')
    disableboxes();
} 

const resetGame =()=>{
    turnO=true;
    enableBoxes();
     msg.classList.add('hide')
    newGameBtn.classList.add('hide')
}




const checkWinner=()=>{
    for (let pattern of winPatterns){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
        if (pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val)
            };
            
        };
    };
};

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
