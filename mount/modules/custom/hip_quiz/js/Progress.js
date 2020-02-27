/**
Javacript Progress class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class Progress {
    constructor() {
	this.started = false;
	this.qTotal = 0;
	this.qAnswered = 0;
	this.qCorrectRow = 0;
    }

    /** Set progress at square one*/
    start() {
	this.started = true;
	this.qAnswered = 0;
	this.qCorrectRow = 0;
    }
    
    /** Returns true if quiz has started, false otherwise.*/
    quizStarted() {
	return this.started;
    }
}
