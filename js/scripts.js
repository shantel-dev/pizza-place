function getCostOfSize() {
    var chosenSize = document.getElementById("size").value;
    return parseInt(chosenSize);
}

function getCostOfCrust() {
    var chosenCrust = document.getElementById("crust").value;
    return parseInt(chosenCrust);
}

function getAmount() {
    var chosenNumber = document.getElementById("number").value;
    return parseInt(chosenNumber);
}

function broccolini() {
    var broccolini = 0;
    var addBroccolini = document.getElementById("toppings");
    if (addBroccolini.checked === true) {
        broccolini = 100;
    }
    return parseInt(broccolini);
}

function potato() {
    var potato = 0;
    var addPotato = document.getElementById("toppings");
    if (addPotato.checked === true) {
        potato = 100;
    }
    return parseInt(potato);
}

function olives() {
    var olives = 0;
    var addOlives = document.getElementById("toppings");
    if (addOlives.checked === true) {
        olives = 100;
    }
    return parseInt(olives);
}

function mushrooms() {
    var mushrooms = 0;
    var addMushrooms = document.getElementById("toppings");
    if (addMushrooms.checked === true) {
        mushrooms = 100;
    }
    return parseInt(mushrooms);
}

function radicchio() {
    var radicchio = 0;
    var addRadicchio = document.getElementById("toppings");
    if (addRadicchio.checked === true) {
        radicchio = 100;
    }
    return parseInt(radicchio);
}

function capers() {
    var capers = 0;
    var addCapers = document.getElementById("toppings");
    if (addCapers.checked === true) {
        capers = 100;
    }
    return parseInt(capers);
}

function capsicum() {
    var capsicum = 0;
    var addCapsicum = document.getElementById("toppings");
    if (addCapsicum.checked === true) {
        capsicum = 100;
    }
    return parseInt(capsicum);
}

function calcTotal(e) {
    event.preventDefault();
    var totalCost = (getCostOfSize() + getCostOfCrust() + broccolini()) * (getAmount());

        console.log(totalCost);
    alert("Thank you, your order which is" + getAmount() + "pizza(s) has been recorded.Your total cost will be" + totalCost +".")
}

$(document).ready(function () {
    $("#delivery").submit(function () {

        var name = $("input#name").val();
        var location = $("input#location").val();

        alert("Hello " + name + ". Your order has been received and will be delivered to " +  location + " within thirty five minutes.The delivery will cost ksh 300/= Thank you for dining with us.");
        
    });
    
});