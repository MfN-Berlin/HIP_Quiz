/**
Javacript View for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class QuizView extends Observer {
    
    constructor() {
	super();
	this.ui = [];
    }

    setUi(ui) {
	this.ui = ui;
    }
    
    update(progress) {
	if (!progress.quizStarted()) {
	    this.showQuizInstructions();
	
	} else if (progress.quizStarted()) {
	    this.clear();
	    this.showCurrentQuestion(progress);
	}
    }
    
    showQuizInstructions() {
	this.clear();
	document.getElementById("left").innerHTML = "<img src=\"{0}\" />".format(this.ui.logo);
	document.getElementById("right").innerHTML = "<h1>{0}</h1>\n{1}".format(this.ui.titel, this.ui.start);
    }
    
    showCurrentQuestion(progress) {
    }

    showQuestionFeedback() {
	throw "unimplemented";
    }

    showQuizFeedback() {
	throw "unimplemented";
    }

    /**Clear all elements from this view*/
    clear() {
	document.getElementById("left").innerHTML = "";
	document.getElementById("right").innerHTML = "";
    }
}
