var submit = document.getElementById("submit");
submit.onclick = function () {

    var response = [];

    var responsElements = document.getElementsByClassName("response");
    console.log(responsElements);

    for (var i = 0; i responsElements.length; i++)
        response.push(responsElements[i].value);

    var message = document.getElementById("message");
    message.innerHTML = "Hello " + response[0] + ", ID " + response[1] + ", you have selected " + response[2] + " meal.";
};