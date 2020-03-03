/**
Javacript Progress class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class Progress {
    
    constructor() {
	this.orderChoices = null;
	this.started = false;
	this.qTotal = 0;
	this.qAnswered = 0;
	this.qCorrectRow = 0;
	this.state = null
    }

    /** 
	Set progress at square one

	@param Question question the current question object
    */
    start(question) {
	this.started = true;
	this.qAnswered = 0;
	this.qCorrectRow = 0;
	this.currentQuestion = question;
	this._shuffle();
    }
    
    /** Returns true if quiz has started, false otherwise.*/
    quizStarted() {
	return this.started;
    }

    /** Returns the correct and wrong answer in a random order */
    getChoices() {
	if (!this.orderChoices) throw "call _shuffle first";
	return this.orderChoices;
    }
    
    /** Shuffles the order of the answers,
     * so that the correct answer is ot always shown first.
     */
    _shuffle() {
	if (!this.currentQuestion) throw "No questions to shuffle.";
	this.orderChoices = [
	    this.currentQuestion.correctAnswer,
	    this.currentQuestion.wrongAnswer
	];
	if (Math.floor(Math.random() * 2) == 0) {
	    this.orderChoices.reverse();
	}
    }
    
}
