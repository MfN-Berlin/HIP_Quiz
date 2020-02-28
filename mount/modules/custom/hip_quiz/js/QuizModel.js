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
	this.progress = new Progress(0);
	this.question = [];
	this.setChanged();
	this.notifyObservers(this.progress);
	this.clearChanged();
    }

    /**
     * Adds a question to the current game.

     @param Question question
     */
    addQuestion(question) {
	this.question.push(question);
	this.progress.qTotal = this.progress.qTotal + 1;
    }

    gotoFirstQuestion() {
	this.setChanged();
	this.progress.start(this.question[0]);
	this.notifyObservers(this.progress);
	this.clearChanged();
    }
    
    gotoNextQuestion() {
	throw "unimplemented";
    }

    updateAnswer() {
	throw "unimplemented";
    }

    quizFinished() {
	throw "unimplemented";
    }
}

