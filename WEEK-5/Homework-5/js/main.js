document.getElementById("sub").onclick = function(){
    console.log(document.getElementsByName("class")[0].checked);
    console.log(document.getElementsByName("class")[1].checked);

    if (document.getElementById("yes").checked) {
        document.getElementById("answer").innerHTML = "True";
    }
    else{
        document.getElementById("answer").innerHTML = "False";
    }
}

document.getElementById("sub2").onclick = function(){

//    console.log(document.getElementsByName("sky")[0].checked);
//    console.log(document.getElementsByName("sky")[1].checked);

    console.log(document.getElementsByName("sky")[0].value);
    console.log(document.getElementsByName("sky")[1].value);

    if (document.getElementById("no").checked) {
        document.getElementById("answer").innerHTML = "True";
    }
    else{
        document.getElementById("answer").innerHTML = "False";
    }
}


