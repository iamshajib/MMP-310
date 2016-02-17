var submit = document.getElementById("submit");
submit.onclick = function() {
    var name = document.getElementById("name").value;
    var idNum = document.getElementById("idNum").value;
    var meal = document.getElementById("meal").value;
    var message = document.getElementById("message");
    message.innerHTML = "Hello " + name + ", ID " + idNum + ", you have selected " + meal +" meal.";
};
