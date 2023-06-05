async function getJson(){
    var res = await fetch("employees.json");
    var json = await res.json();
    return json;
}

function loadSlide(id, data){
    var elName = document.querySelector("#name");
    var elPos = document.querySelector("#work"); 
    var elDesc = document.querySelector("#desc");
    var elImg = document.querySelector("#card-img");

    var name = data[id].name;
    var pos = data[id].position;
    var desc = data[id].description;
    var img = data[id].img;

    elName.textContent = name;
    elPos.textContent = pos;
    elDesc.textContent = desc;
    elImg.srcset = "img/" + img;


}
var data;
var id=0;

async function loadSite(){
    var data = await getJson();
    data = data.employees;
    loadSlide(0,data);
    document.querySelector("#arrowleft").addEventListener('click', function(event) {
        id--;
        if(id>=0){
            loadSlide(id%data.length, data);
        }
        else{
            loadSlide(Math.abs(id+data.length*Math.abs(id))%data.length, data);
        }
    } )
    
    document.querySelector("#arrowright").addEventListener('click', function(event) {
        id++;
        if(id>=0){
            loadSlide(id%data.length, data);
        }
        else{
            loadSlide(Math.abs(id+data.length*Math.abs(id))%data.length, data);
        }
    } )

    document.querySelector("#random").addEventListener('click', function(event) {
        id = Math.round(Math.random()*data.length);
        loadSlide(id%data.length,data);
    })
}

loadSite();