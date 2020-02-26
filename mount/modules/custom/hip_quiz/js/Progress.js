/**
Javacript Progress class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class Progress {
    constructor() {
	this.started = false;
	this.qTotal = null
	this.qAnswered = null
	this.qCorrectRow = null
    }

    /** Returns true if quiz has started, false otherwise.*/
    quizStarted() {
	return this.started;
    }
}
