/**
Javacript Model for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class QuizModel extends Observable {

    constructor() {
	super();
	this.question = [];
    }

    /**
     * Resets progress and questions, notifies observers.
     */
    reset() {
	this.progress = new Progress();
	this.question = [];
	this.setChanged();
	this.notifyObservers(this.progress);
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

