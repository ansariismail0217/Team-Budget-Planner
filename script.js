function addTheValue() {
    var fValue = document.getElementById("firstValue");
    secondValue= parseInt(document.getElementById("expense").value);
    firstValue.innerHTML = parseInt(fValue.innerHTML) +
    secondValue;
}
function showBudget(){
    var bgt = document.getElementById("finalBudget");
    var enteredBgt = document.getElementById("budget").value;
    bgt.innerHTML= enteredBgt;
}