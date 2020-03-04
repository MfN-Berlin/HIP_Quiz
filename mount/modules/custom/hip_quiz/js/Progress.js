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
	this.answers = []
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

    /** 
     * Returns whether the left (0) or right(1) answer was clicked on 
     *
     * @return int
     */
    getCurrentChoice() {
	var chosen = null;
	for (var i = 0; i < this.orderChoices.length; i++) {
	    // this choice is the correct answer and was clicked upon
	    if (this.orderChoices[i] == this.currentQuestion.correctAnswer && this.state) {
		chosen = i;
		break;
	    // this choice is the wrong answer and was clicked upon
	    } else if (this.orderChoices[i] == this.currentQuestion.wrongAnswer && !this.state) {
		chosen = i;
		break;
	    }
	}
	return chosen;
    }
    
    /** 
     * Shuffles the order of the answers,
     * so that the correct answer is not always shown first.
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
