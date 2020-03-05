/**
Javacript Progress class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class Progress {
    
    constructor() {
	/** boolean true if the quiz has started */
	this.started = false;
	/** integer total number of questions in quiz */
	this.qTotal = 0;
	/** integer total questions answered */
	this.qAnswered = 0;
	/** integer total number of correct answers */
	this.qCorrect = 0;
	/** correct answers in a row */
	this.qCorrectRow = 0;
	/** true if last answer was correct */
	this.state = null
	/** Question the question currently loaded */
	this.currentQuestion = null;
	/** list<Answer> answers in the order they will be displayed */
	this.orderChoices = null;
    }

    /** 
     *	Set progress at square one
     *
     *	@param Question question the current question object
     */
    start(question) {
	this.started = true;
	this.qAnswered = 0;
	this.qCorrect = 0;
	this.qCorrectRow = 0;
	this.gotoQuestion(question);
    }

    /**
     *  Load question and continue progress
     *
     *	@param Question question the current question object
     */
    gotoQuestion(question) {
	this.state = null;
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
     * The current answer is correct when at least one of these conditions is met:
     * # the state of the progress object is set to true
     * # the state of the progress object is null (the question has not been answered), but the previous answer was right
     */
    currentAnswerCorrect() {
	return this.state || (!this.state && this.qCorrectRow > 0);
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
