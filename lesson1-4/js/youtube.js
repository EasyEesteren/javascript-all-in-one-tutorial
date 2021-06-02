//alert("hello world");


// Testing out getting elements by id and calling function onclick
document.getElementById("button").onclick = function() { 
    document.getElementById("confirm").innerHTML = "Order placed";
    document.getElementById("button").style.display = "none";
    var boyz = "boyz";
}

// Testing prompt, alerts & console.log
var username = prompt();
alert(username);
console.log(username);

// IIFE
(function() {
    var agez = 5;
})();
