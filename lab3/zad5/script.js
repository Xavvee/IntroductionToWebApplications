var white=function(){
    clicker("white");
    clickerReseted();
};
var red=function(){
    clicker("red");
};
var yellow=function(){
    clicker("yellow");
};
let whiteDiv=document.getElementById('white')
whiteDiv.addEventListener('click', white)
let redDiv=document.getElementById('red')
redDiv.addEventListener('click', red)
let yellowDiv=document.getElementById('yellow')
yellowDiv.addEventListener('click', yellow)
let resetBtn=document.getElementById('reset')
resetBtn.addEventListener('click', reset)
let propag=document.getElementById('propagation')
propag.addEventListener('click',propagationer)
let order=document.getElementById('order')
order.addEventListener('click',orderer)

var sum=0
var checked=false;
var propagation=true;
var whiteClick=false;
var redClick=false;
var yellowClick=false;
var orderFlag=false;

function orderer(){
    if(orderFlag===false){
        document.getElementById('order').textContent="Order reversed";
        orderFlag=true;
        whiteDiv.removeEventListener('click', white)
        redDiv.removeEventListener('click', red)
        yellowDiv.removeEventListener('click', yellow)

        whiteDiv.addEventListener('click', white,true)
        redDiv.addEventListener('click', red,true)
        yellowDiv.addEventListener('click',yellow,true)
    
    }
    else{
        document.getElementById('order').textContent="Normal order";
        orderFlag=false;
        whiteDiv.removeEventListener('click', white, true)
        redDiv.removeEventListener('click', red, true)
        yellowDiv.removeEventListener('click', yellow, true)

        whiteDiv.addEventListener('click', white)
        redDiv.addEventListener('click', red)
        yellowDiv.addEventListener('click',yellow)
    }
}

function textClearer(){
    document.getElementById("text1").textContent = "";
    document.getElementById("text2").textContent = "";
    document.getElementById("text3").textContent = "";
}

function resetBtns(){
    whiteClick=false;
    redClick=false;
    yellowClick=false;
}

function displayText(){
    textClearer();
    if(whiteClick){
        document.getElementById("text1").textContent="Kliknąłeś biały za 1 punkt";
    }
    if(redClick){
        {
            if(orderFlag){
                document.getElementById("text1").textContent="Kliknąłeś biały za 1 punkt";
                document.getElementById("text2").textContent="Kliknąłeś czerwony za 2 punkty";
            }
            else{
                document.getElementById("text2").textContent="Kliknąłeś czerwony za 2 punkty";
            }
        }
    }
    if(yellowClick){
        if(orderFlag){
            document.getElementById("text1").textContent="Kliknąłeś biały za 1 punkt";
            document.getElementById("text2").textContent="Kliknąłeś czerwony za 2 punkty";
            document.getElementById("text3").textContent="Kliknąłeś żółty za 5 punktów";
        }
        else{
            document.getElementById("text3").textContent="Kliknąłeś żółty za 5 punktów";
        }
    }

}

function whiteBloc(){
    if(sum==60){
        reset();
    }
    else{   
        sum=sum+1;
        document.getElementById("score").textContent=sum;
        this.sum=sum;
        whiteClick = true;
        displayText();
        resetBtns();
    }

}

function redBloc(){
    if (sum>30 && !propagation){
        whiteBloc();
        return;
    }
    else if(document.getElementById("red").classList.contains("off") || sum>30){
        return;
    }
    redClick = true;
    if (!propagation){
        displayText();
        resetBtns();
    }
    sum=sum+2;
    document.getElementById("score").textContent=sum;
    this.sum=sum;
}

function yellowBloc(){
    if (sum>50 && !propagation){
        whiteBloc();
        return;
    }
    else if(document.getElementById("yellow").classList.contains("off") || sum>50){
        return;
    }
    yellowClick = true;
    if (!propagation){
        displayText();
        resetBtns();
    }
    sum=sum+5;
    document.getElementById("score").textContent=sum;
    this.sum=sum;
}

function clicker(id){
    if(!checked){
        switch(id){
            case "white":
                whiteBloc();
                break;
            case "red":
                redBloc();
                break;
            case "yellow":
                yellowBloc();
                break;
        }
    }

        if(sum>30){
            document.getElementById("red").classList.add("off");
        }
        if(sum>50){
            document.getElementById("yellow").classList.add("off");
        }

    if (!propagation)
        checked = true;
}

function clickerReseted(){
    checked=false;
}

function reset(){
    sum = 0;
    document.getElementById("score").textContent=sum;
    this.sum=sum;
    checked = false;
    textClearer();
    resetBtns();
    document.getElementById("red").classList.remove("off");
    document.getElementById("yellow").classList.remove("off");
    document.getElementById("text1").textContent= ""
    document.getElementById("text2").textContent= "RESET"
    document.getElementById("text3").textContent= ""
}


function propagationer(){
    
    if (this.classList.contains("stopper")){
        propagation = false;
        this.classList.remove("stopper");
        this.classList.add("starter");
        this.textContent="Start Propagation";
    }
    else if (this.classList.contains("starter")){
        propagation = true;
        this.classList.remove("starter");
        this.classList.add("stopper");
        this.textContent="Stop Propagation";
    }
    return
}

