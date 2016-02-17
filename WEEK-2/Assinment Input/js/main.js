var submit = document.getElementById("submit");
submit.onclick = function() {
    var name = document.getElementById("name").value;
    var idNum = document.getElementById("idNum").value;
    var borough = document.getElementById("borough").value;
    var message = document.getElementById("message");
    message.innerHTML = "Hello " + name + ", ID " + idNum + ", from " + borough +", Welcome to my website";
};
