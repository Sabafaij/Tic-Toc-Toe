let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-btn');
let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO === true ){
            box.innerText='X';
            turnO=false;
        }
        else{
            box.innerText='O';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const checkWinner=()=>{
    for(let pattern of winPatterns){
        const [a,b,c]=pattern;
        if(boxes[a].innerText !== '' && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText){
            alert(`Player ${boxes[a].innerText} wins!`);
            resetGame();
            return;
        }
    }
    if([...boxes].every(box => box.innerText !== '')){
        alert("It's a tie!");
        resetGame();
    }
}
resetBtn.addEventListener("click",()=>{
    turnO=true;
    resetGame();
});
const resetGame=()=>{
    boxes.forEach((box)=>{
        box.innerText='';
        box.disabled=false;
        box.style.backgroundColor='white';
    });
}
boxes.forEach((box)=>{
    box.addEventListener("mouseover",()=>{
        if(box.innerText === ''){
            box.style.backgroundColor='lightblue';
        }
    });
    box.addEventListener("mouseout",()=>{
        if(box.innerText === ''){
            box.style.backgroundColor='white';
        }
    });
});
