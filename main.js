function recordResponse(pageIWantToGoTo, questionNumber, imageLetter) {
    //window.location.href="ax.page1.2.html"

    localStorage.setItem (questionNumber, imageLetter);

    window.location.href = pageIWantToGoTo;
}

function showResponse() {
    var questionOneAnswer= localStorage.getItem ('Q1');
alert(questionOneAnswer)
}