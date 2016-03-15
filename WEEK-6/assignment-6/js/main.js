var submit = document.getElementById("submit");
submit.onclick = function() {
    var name = document.getElementById("food").value;
    var message = document.getElementById("message");
    message.innerHTML = "Hello " + name + " welcome.";
};
