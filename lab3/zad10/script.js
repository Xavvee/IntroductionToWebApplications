    var dot = document.querySelector("#dot");
    var playground = document.querySelector("#playground");
    var whole= document.querySelector("#whole");
    var flag=0;
    whole.addEventListener("click",positionGetter, false)
    function positionGetter(e){
        var xPos=e.clientX 
        var yPos= e.clientY
        if(xPos<playground.offsetWidth && yPos < playground.offsetHeight){
            xPos=e.clientX - (dot.offsetWidth/2);
            yPos= e.clientY - (dot.offsetHeight/2);
            document.getElementById("prompter").innerHTML = "Naciśnij gdziekolwiek";
            var translate3DVal = "translate3d(" + xPos + "px," + yPos + "px, 0)"
            dot.style.transform=translate3DVal;
            return;
        }
        document.getElementById("prompter").innerHTML = "Wybierz inne miejsce, to znajduje się poza obszarem";
        
}