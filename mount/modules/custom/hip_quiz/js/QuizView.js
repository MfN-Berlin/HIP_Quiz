/**
Javacript View for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class QuizView extends Observer {
    
    constructor() {
	super();
	this.uiTexts = [];
    }

    setUiTexts(uiTexts) {
	this.uiTexts = uiTexts;
    }
    
    update(progress) {
	if (!progress.quizStarted()) {
	    this.showQuizInstructions();
	}
    }
    
    showQuizInstructions() {
	document.getElementById("instructions").innerHTML = this.uiTexts.start;
    }
    
    showCurrentQuestion() {
	throw "unimplemented";
    }

    showQuestionFeedback() {
	throw "unimplemented";
    }

    showProgressFeedback() {
	throw "unimplemented";
    }

    showQuizFeedback() {
	throw "unimplemented";
    }
}
