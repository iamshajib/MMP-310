function getAnswers() {
<<<<<<< HEAD
    var total = 10;
=======
    var total = 5;
>>>>>>> origin/gh-pages
    var score = 0;

    var q1 = document.forms["question"]["q1"].value;
    var q2 = document.forms["question"]["q2"].value;
    var q3 = document.forms["question"]["q3"].value;
    var q4 = document.forms["question"]["q4"].value;
    var q5 = document.forms["question"]["q5"].value;
<<<<<<< HEAD
    var q6 = document.forms["question"]["q6"].value;
    var q7 = document.forms["question"]["q7"].value;
    var q8 = document.forms["question"]["q8"].value;
    var q9 = document.forms["question"]["q9"].value;
    var q10 = document.forms["question"]["q10"].value;
=======
>>>>>>> origin/gh-pages

    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === null || eval('q' + i) === '') {
            alert('You missed question ' + i);
            return false;
        }
    }

<<<<<<< HEAD
    var answers = ["c", "d", "b", "a", "b", "d", "b", "c", "b", "a"];
=======
    var answers = ["c", "d", "b", "a", "b"];
>>>>>>> origin/gh-pages

    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === answers[i - 1]) {
            score++;
        }
    }

    var scores = document.getElementById('scores');
    scores.innerHTML = '<h3>You scored ' + score + ' out of ' + total + ' </h3>';
    alert('You scored ' + score + ' out of ' + total);

    return false;

}
