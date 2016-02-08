var submit = document.getElementById("submit");
submit.onclick = function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("emial").value;
    var borough = document.getElementById("borough").value;
    var message = document.getElementById("message");
    message.innerHTML = "Hello" + name + "from" + borough +"Welcome to my website";
};
