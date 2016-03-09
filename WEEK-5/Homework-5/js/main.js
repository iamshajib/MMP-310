document.getElementById("sub").onclick = function(){

    if (document.getElementById("yes").checked) {
        document.getElementById("answer").innerHTML = "True";
    }
    else{
        document.getElementById("answer").innerHTML = "False. Talk to your advisor.";
    }
}

document.getElementById("sub2").onclick = function(){

    if (document.getElementById("yes2").checked) {
        document.getElementById("answer2").innerHTML = "False. Whats the color of the dress?";
    }
    else{
        document.getElementById("answer2").innerHTML = "True";
    }
}


document.getElementById("sub3").onclick = function(){

    if (document.getElementById("yes3").checked) {
        document.getElementById("answer3").innerHTML = "False. I am a computer.";
    }
    else{
        document.getElementById("answer3").innerHTML = "True";
    }
}


document.getElementById("sub4").onclick = function(){

    if (document.getElementById("yes4").checked) {
        document.getElementById("answer4").innerHTML = "True";
    }
    else{
        document.getElementById("answer4").innerHTML = "Go back to school.";
    }
}

document.getElementById("sub5").onclick = function(){

    if (document.getElementById("yes5").checked) {
        document.getElementById("answer5").innerHTML = "True";
    }
    else{
        document.getElementById("answer5").innerHTML = "You need to study physiology.";
    }
}
