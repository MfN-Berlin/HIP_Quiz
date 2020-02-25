/**
Javacript Model for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class QuizModel extends Observable {

    constructor() {
	super();
	this.question = []
	this.progress = new Progress()
    }

    selectQuestions() {
	throw "unimplemented";
    }

    randomizeQuestions() {
	throw "unimplemented";
    }

    selectWrongChoice() {
	throw "unimplemented";
    }

    resetScore() {
	throw "unimplemented";
    }

    resetAnswers() {
	throw "unimplemented";
    }

    getNextQuestion() {
	throw "unimplemented";
    }

    updateAnswer() {
	throw "unimplemented";
    }

    quizFinished() {
	throw "unimplemented";
    }
}

if (typeof module !== 'undefined' && module.exports) {
  exports.QuizModel = QuizModel; 
}
