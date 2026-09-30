var messageNumber = 0;

function giveMotivation() {

    messageNumber = messageNumber +1;

    if (messageNumber == 1) {

        document.getElementById("MotivationMessage").innerHTML = "You can do it!";
    }

    else if (messageNumber ==2) {
        document.getElementById("MotivationMessage").innerHTML = "You are doing great, every step counts!";
    
        messageNumber = 0;
    }
}

document.getElementById("styleButton").addEventListener("click", function() {

    document.getElementById("motivationalBox").style.backgroundColor = "lightpink";

    document.getElementById("MotivationMessage").style.color = "darkpink";

    document.getElementById("MotivationMessage").style.fontSize = "30px";

    document.getElementById("MotivationMessage").style.fontWeight = "bold";
});

function readyCheck() {

    var answer = confirm("Are you ready to keep pushing?");
    if (answer == true) {

        document.getElementById("readyCheckMessage").innerHTML = "You got this! Keep going!";

    }
    else {

        document.getElementById("readyCheckMessage").innerHTML = "You can take a break, eat something and come back when you are ready!";
    }
    }

