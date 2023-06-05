var form = new FormData(document.querySelector('form'))
var adding = document.getElementById('add')
adding.addEventListener('click',phonebook) 


function validator(){
    return document.getElementById("phone").checkValidity() && document.getElementById("name").checkValidity();
}


function phnoeDelete(){
    var parent = document.getElementById("adresses");
    var index = Array.from(parent.children).indexOf(this.parentNode);
    parent.removeChild(parent.children[index]);
}

function phonebook(){
    var form = new FormData(document.querySelector('form'))
    if(!validator()){
        return;
    }
    var phone = form.get("phone");
    var name = form.get("name");


    var section = document.createElement("section");


    var section_left = document.createElement('div');
    section_left.classList.add('section-left');

    var section_left_h2 = document.createElement('h2');
    section_left_h2.textContent=name;
    var section_left_p = document.createElement('p');
    section_left_p.textContent=phone;
    section_left.appendChild(section_left_h2);
    section_left.appendChild(section_left_p);

    section.appendChild(section_left);

    var section_right = document.createElement('div');
    section_right.classList.add("section-right");
    section_right.textContent="🗑️"

    section_right.addEventListener('click', phnoeDelete);
    section.appendChild(section_right);

    document.getElementById("adresses").appendChild(section);
}

