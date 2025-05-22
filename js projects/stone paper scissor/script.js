var urChoice = 0;
var compChoice = 0;
 var lastResult = document.getElementById("result");
 var yourScore = document.getElementById("you");
 var compScore = document.getElementById("comp");
you = 0
comp = 0
function stone() {
    run(1)
}
function paper() {
    run(2)
}
function scissor() {
    run(3)
}



var _choice = () => {
    var choice = Math.random();
    if (choice <= 0.333) {
        compChoice = 1;
    }
    else if (choice <= 0.666) {
        compChoice = 2;
    }
    else {
        compChoice = 3;
    }
}

var run = (val) => {

    _choice()
    lastResult.innerHTML="Wait for comp..."
    lastResult.style.backgroundColor="#26006E"

    let random = 0.5+Math.random()*1
    setTimeout(() => {
      if (val == compChoice) {
        lastResult.innerHTML="It's a Draw"
        lastResult.style.backgroundColor="#26006E"
    }
    else {
        if (val == 1) {
            if (compChoice == 2) {
                lastResult.innerHTML="Comp chooses Paper-You lose"
                lastResult.style.backgroundColor="red"
                comp++
            }
            else {
                lastResult.innerHTML="Comp chooses Scissor-Congratulations You Won"
                lastResult.style.backgroundColor="green"
                you++
            }
        }
        if (val == 2) {
            if (compChoice == 3) {
                lastResult.innerHTML="Comp chooses Scissor-You lose"
                lastResult.style.backgroundColor="red"
                comp++
            }

            else {
                lastResult.innerHTML="Comp chooses Rock-Congratulations You Won"
                lastResult.style.backgroundColor="green"
                you++            
            }
        }
        if (val == 3) {
            if (compChoice == 1) {
                lastResult.innerHTML="Comp chooses Rock-You lose"
                lastResult.style.backgroundColor="red"
                comp++

            }
            else {
                lastResult.innerHTML="Comp chooses Paper-Congratulations You Won"
                lastResult.style.backgroundColor="green"
                you++            
            }
        }
    }
    yourScore.innerHTML=`${you} <h3>You</h3>` 
    compScore.innerHTML=`${comp} <h3>comp</h3>` 

    },random*1000
    );
}









