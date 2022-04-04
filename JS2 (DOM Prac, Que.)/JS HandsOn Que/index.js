// Answer of Question No. 1
function accessId() {

    document.getElementById("text").innerText = "Accessed ID !!!";
    
}

// Answer of Question No. 2
function accessTagName() {

    document.getElementsByTagName("h1")[0].innerText = "Accessed Tag h1 !!!";

}

// Answer of Question No. 3
function accessClass() {

    document.getElementsByClassName("box")[0].innerText = "Accessed Class !!!";
    
}

// Answer of Question No. 4
function accessheading() {

    document.getElementById("heading1").innerText = "Hello World !!!";

}

// Answer of Question No. 5
function changeDirection() {

    const flex = document.querySelectorAll(".col");
    document.getElementById("box").style.flexDirection = "column";

}

// Answer of Question No. 6
function color() {

    document.getElementById("heading").style.color = "blueviolet";

}

// Answer of Question No. 7
function changeText() {

    document.getElementById("replaceText").innerText = "Welcome To The Elevation Acadmey";

}

// Answer of Question No. 8
function displayTime() {

    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hrs >= 12) {
        session.innerHTML = "PM";
    } else {
        session.innerHTML = "AM";
    }

    if(hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

}
setInterval(displayTime, 10)

// Answer of Question No. 9
const selectElement = () => {

    const year = document.getElementById("years").value;
    const result = document.getElementById("result");

    result.innerHTML = `You Selected ${year} Year !`

}
