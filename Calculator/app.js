function getValue(number){
    var input = document.getElementById("input");
    input.value += number;
}
function sabKhatam() {
    var input = document.getElementById("input");
    input.value = "";
}

function aikKhatam() {
    var input = document.getElementById("input");
    var x = input.value.slice(0, -1);
    input.value = x;
}

function baraber() {
    var input = document.getElementById("input");
    try {
        var jawab = eval(input.value);
    }
    catch (error) {
        var jawab = "Syntax Error"
    }
    input.value = jawab;
}
document.addEventListener('keydown', (e) => {
    var key = e.key;
    if ('1234567890+-*%/'.includes(key)) {
        getValue(key);
    }
    else if ('Backspace'.includes(key)) {
        aikKhatam();
    }
    else if ('Enter ='.includes(key)) {
        baraber();
    }
    else if ('Delete'.includes(key)) {
        sabKhatam();
    }
    else if ('Space'.includes(key)) {

    }
}
)
