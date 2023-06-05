//Function that animates the zombie
function zombieAnimator(el, speed){
    var offset = 200; 
    var cur_bgpos = 0;
    var cur_pos = 0;
    var interval;

    switch(speed){
        case 1:
            interval=50;
            break;
        case 2:
            interval=40;
            break;
        case 3:
            interval=30;
            break;
        case 4:
            interval=20;
            break;
        case 5:
            interval=10;
            break;
        default:
            interval=50;
            break;
    }

    zombieRunTime[el.id] = setInterval ( () => {
        el.style.backgroundPosition = cur_bgpos + offset +"px 0px";
        el.style.left = 101 - cur_pos + "vw";
        cur_bgpos -= offset
        cur_pos++;
        if (cur_bgpos==-1800)
            cur_bgpos=0;
        if(cur_pos==115){
            el.remove();
            score -= 6;
            health -= 1;
            scoreUpdater();
            healthUpdater();
            if(health <= 0)
                gameEnder();
            clearInterval(zombieRunTime[el.id]);
        }
    }
    , interval );
}
//Function that subtracts points after miss
function miss(){
    score -= 6;
    scoreUpdater();
}
//Function that adds points after hit
function hit(){
    score += 18;
    scoreUpdater();
    clearInterval(zombieRunTime[this.id]);
    this.remove();
}
//Function that spawns zombies
function zombieSpawner(speed, top, size, start_pos){
    var elZombie = document.createElement("div");
    elZombie.classList.add("zombie");
    elZombie.setAttribute("id", index);
    elZombie.addEventListener("click", hit);
    elZombie.style.top = 40 + top + "vh";
    elZombie.style.left = 100 + start_pos + "vw";
    elZombie.style.transform = "scale(" + size + ")";
    board.appendChild(elZombie);
    index++;
    zombieAnimator(elZombie, speed);
}
//Function that generates the zombie
function zombieGenerator(){
    var size = Math.round(((Math.random()*7+7)/10)*100)/100
    var start_pos = Math.round(Math.random()*20);
    var speed = Math.round(Math.random()*5)
    var top = Math.round(Math.random()*25);
    zombieSpawner(speed,top, size, start_pos);
}
//Function that manages the score
function scoreUpdater(){
    elScore.textContent=score;
}
//Function that manages the health
function healthUpdater(){
    elHealth.textContent = "";
    for(var i = 0; i<health; i++){
        elHealth.textContent+="❤";
    }
}

//Function that handles the username prompt
function startgameHandler(){
    var form = document.getElementById("username");
    var enteredUsername = form.value;
    if(!form.checkValidity())
        return
    elUserMenu.style.transform = "translateY(-200%)";
    elUserName.textContent= enteredUsername;
    userName = enteredUsername;
    gameStarter();
}
//Function that allows to restart the game
function startgame2Handler(){
    elEnd.style.transform = "translateY(-200%)";
    gameStarter();
}

//Function used for cursor
function cursorer(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

//Function that deals with events after death
function gameEnder(){
    clearInterval(gameRunning);
    Object.keys(zombieRunTime).forEach(function(key) {
        clearInterval(zombieRunTime[key]);
    });
    board.removeEventListener("click", miss);
    window.removeEventListener("mousemove", cursorer)
    document.body.style.cursor="default";
    restartGame();
}

//Function that set ups the game
function gameStarter(){
    health = 3;
    score = 0;
    index = 0;
    healthUpdater();
    scoreUpdater();
    document.body.style.cursor="none";
    board.addEventListener("click", miss);
    window.addEventListener("mousemove", cursorer)
    var zombies = document.querySelectorAll("div.zombie");
    for (var i = 0; i < zombies.length; i++)
        zombies[i].remove();
    gameRunning = setInterval ( () => {
        zombieGenerator();
    }
    , 500);
}
//Function that restarts the game
function restartGame(){
    elEnd.style.transform = "translateY(0%)";
    document.getElementById("startgame2").addEventListener("click",startgame2Handler);
}

//Function that starts the game
function startGame(){
    elUserMenu.style.transform = "translateY(0%)";
    document.getElementById("startgame").addEventListener("click",startgameHandler);
}

var index = 0;
var board = document.querySelector("#board");
var zombieRunTime = {};
var elScore = document.querySelector("#score");
var elHealth = document.querySelector("#health");
var elUserMenu = document.querySelector("#usernameprompt-div");
var elUserName = document.querySelector("#name");
var elEnd = document.querySelector("#end-div");
var userName = "";
var score = 0;
var health = 3;
var gameRunning;
var mouseCursor = document.querySelector("#cursor");

startGame();