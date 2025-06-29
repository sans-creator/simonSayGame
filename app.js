let gameSequence = [];
let userSequence = [];

let btns=["yellow","red","purple","green"]
let started = false;
let level = 0;
let h2=document.querySelector('h2');

document.addEventListener("keypress", function() {
    console.log("Key pressed");  //jab bhi ksi key ko press kiya jata hai, yeh function chalega aur game satart hoga
    if(started==false){
        console.log('game is started');  //to strat game only one time
        started=true;

    }
    levelUp()
    
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function() {
        btn.classList.remove("userFlash")
    },250);
}

function levelUp(){
    userSequence=[];
    level++;
    h2.innerText=`level ${level}`;


    //random btn choose
    let randomIdx=Math.floor(Math.random()*btns.length);
    let randColor=btns[randomIdx];

    let randomBtn=document.querySelector(`.${randColor}`);

    // console.log(randColor);
    // console.log(randomBtn);
    // console.log(randomIdx);
    gameSequence.push(randColor);
    console.log(gameSequence)

    gameFlash(randomBtn);

}

function checkAns(idx) {
    console.log("current level:",level);
    

    if(userSequence[idx]===gameSequence[idx]){
        console.log('same value');
        if(userSequence.length==gameSequence.length)
        {
            setTimeout(levelUp,1000)
            
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score is <b> ${level}</b> <br>Press Any key to start`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white'},150);

        reset();    

        
        
       }
     
}

function btnPress() {
    
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute('id');
    console.log(userColor)

    userSequence.push(userColor);
    checkAns(userSequence.length-1)
    
}

let allBtns=document.querySelectorAll(".btn")
for(i of allBtns){
    i.addEventListener("click",btnPress);
}


function reset() {
    started=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}