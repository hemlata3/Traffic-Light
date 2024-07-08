let div1 = document.getElementById("stop");
let div2 = document.getElementById("ready");
let div3 = document.getElementById("go");

function turnOnred() {
    div1.style.backgroundColor = "red";
    let button = document.getElementById("stopLight");
    stopLight.style.backgroundColor = "red";
    div2.style.backgroundColor = "";
    div3.style.backgroundColor = "";
    readyLight.style.backgroundColor = "";
    goLight.style.backgroundColor = "";
}

function turnOnyellow() {
    ready.style.backgroundColor = "yellow";
    let button = document.getElementById("readyLight");
    readyLight.style.backgroundColor = "yellow";
    div1.style.backgroundColor = "";
    div3.style.backgroundColor = "";
    stopLight.style.backgroundColor = "";
    goLight.style.backgroundColor = "";
}

function turnOngreen() {
    go.style.backgroundColor = "green";
    let button = document.getElementById("goLight");
    goLight.style.backgroundColor = "green";
    div1.style.backgroundColor = "";
    div2.style.backgroundColor = "";
    stopLight.style.backgroundColor = "";
    readyLight.style.backgroundColor = "";
}