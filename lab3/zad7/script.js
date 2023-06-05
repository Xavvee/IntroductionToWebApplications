async function getData() {
    var res = await fetch("http://localhost:3000/cities");
    var json = await res.json();
    return json;
}

async function first(data){
    var json=data;
    var ans="";
    var correct = json.filter(function (entry) {
        return entry.province === "małopolskie";
    });
    for (var property in correct) {
        if (!correct.hasOwnProperty(property)) {
            continue;
        }
        ans += correct[property].name + ", "
    }
    ans = ans.substring(0, ans.length - 2);
    ans = ans + "."
    document.getElementById("1ans").textContent = ans;
}


function aDoubleOccur(word) {
    var cnt = 0;
    for (var i = 0; i < word.length; i++) {
        letter = word.charAt(i)
        if (letter == 'a')
            cnt++;
        if (cnt > 2)
            return false;
    }
    return cnt==2
}

async function second(data) {
    var json = data;

    var correct = json.filter(function (entry) {
        return aDoubleOccur(entry.name);
    });

    var ans = ""

    for (var property in correct) {
        if (!correct.hasOwnProperty(property)) {
            continue;
        }
        ans += correct[property].name + ", "
    }
    ans = ans.substring(0, ans.length - 2);
    ans = ans + "."
    document.getElementById("2ans").textContent = ans;


}

async function third(data) {
    var json = data;
    var cities = new Array;
    for (var property in json) {
        cities.push([json[property].name, json[property].people / json[property].area]);
    }
    cities.sort(function (a, b) {
        if (a[1] > b[1])
            return -11
        else if (a[1] < b[1])
            return 1
        return 0
    });
    document.getElementById("3ans").textContent = cities[4][0];
}


async function fourth(data) {
    var json = data;

    var correct = json.filter(function (entry) {
        return entry.people > 100000;
    });
    var ans = ""
    for (var property in correct) {
        if (!correct.hasOwnProperty(property)) {
            continue;
        }
        ans += correct[property].name + " city, ";
    }
    ans = ans.substring(0, ans.length - 2) + "."
    document.getElementById("4ans").textContent = ans;
}

async function fifth(data) {
    var json = data;
    var more = 0;
    var less = 0;
    for (var property in json) {
        if (json[property].people > 80000)
            more++;
        else
            less++;
    }
    document.getElementById("5ans1").textContent = "Miast powyżej 80000 jest: " + more;
    document.getElementById("5ans2").textContent = "Miast poniżej 80000 jest: " + less;
    if (more > less) {
        document.getElementById("5ans3").textContent = "Z czego wynika, że: więcej jest miast powyżej 80000.";
    } else {
        document.getElementById("5ans3").textContent = "Z czego wynika, że: więcej jest miast poniżej 80000.";
    }

}

async function sixth(data) {
    var json = data;
    var sum = 0;

    var citiesOnP = new Array;
    for (var property in json) {
        if (json[property].township.charAt(0) == 'P')
            citiesOnP.push([json[property].area, json[property].township]);
    }
    console.log(citiesOnP);
    citiesOnP.forEach(element => {
        sum += element[0];
    });
    document.getElementById("6ans").textContent = sum / citiesOnP.length;
}

async function seventh(data){
    var json = data;
    var cnt=0;
    var ans="";
    var correct = json.filter(function (entry) {
        return entry.province === "pomorskie";
    });
    var numberOfPom=correct.length;
    for (var property in correct) {
        if (!correct.hasOwnProperty(property)) {
            continue;
        }
        else if(correct[property].people > 5000){
            ans += correct[property].name + ", "
            cnt++
        }
    }
    if(numberOfPom===cnt){
        document.getElementById("7ans1").textContent = "Tak, wszystkie mają więcej niż 5000 mieszkańców";
    }
    else{
        document.getElementById("7ans1").textContent = "Nie, nie wszyskie mają więcej niż 5000 mieszkańców";
    }
    document.getElementById("7ans2").textContent = "Takich miast jest: " + cnt + " . Tych, które są mniejsze jest: "+(numberOfPom-cnt)+".";
}

async function loader() {
    var json = await getData();
    first(json);
    second(json);
    third(json);
    fourth(json);
    fifth(json);
    sixth(json);
    seventh(json);
}

loader();