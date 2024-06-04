function addToInput(value) {
    document.getElementById("input").value += value;
}

function calculate() {
    var input = document.getElementById("input").value;
    var result = eval(input);
    document.getElementById("answer").value = result;
}

function clearFields() {
    document.getElementById("input").value = "";
    document.getElementById("answer").value = "";
}
