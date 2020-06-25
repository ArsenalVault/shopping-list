//var button = document.getElementsByTagName("button")[0];

//button.addEventListener("mouseleave", function() {
//    console.log("Click");
//})

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})

button.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.keyCode == 13) {
        var li = documnet.createElement('li');
        li.appendChild(documnet.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})