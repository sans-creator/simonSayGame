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

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash")
    },250);
}

function levelUp(){
    level++;
    h2.innerText=`level ${level}`;


    //random btn choose
    let randomIdx=Math.floor(Math.random()*3);
    let randColor=btns[randomIdx];

    let randomBtn=document.querySelector(`.${randColor}`);

    console.log(randColor);
    console.log(randomBtn);
    console.log(randomIdx);

    btnFlash(randomBtn);

}