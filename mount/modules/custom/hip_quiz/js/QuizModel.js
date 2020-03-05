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
	this.progress.start(this.question[0]);
	this.setChanged();
	this.notifyObservers(this.progress);
	this.clearChanged();
    }

    /**
     * Returns the correct answer to the current question
     *
     * @retun Answer answer object
     */
    getCorrectAnswer() {
	return this.progress.currentQuestion.correctAnswer
    }

    /**
     * Call to determine if there are any more unanswered questions
     *
     * @return boolean true if more questions, false otherwise
     */
    moreQuestionsAvailable() {
	return (this.progress.qAnswered < this.progress.qTotal);
    }

    /**
     * Called when the next question is loaded.
     * Assumes that the end of the quiz has not been reached.
     * Call moreQuestionsAvailable in the controller first. 
     */
    gotoNextQuestion() {
	var currentQuestion = this.question[this.progress.qAnswered];
	this.progress.gotoQuestion(currentQuestion);
	this.setChanged();
	this.notifyObservers(this.progress);
	this.clearChanged();
    }

    /**
     * Is called when a question has been answered 
     *
     * @param isCorrect boolean whether the answer was right or wrong
     * @param answerStr String the label of the answer
     */
    updateAnswer(isCorrect) {
	this.progress.state = isCorrect;
	this.progress.qAnswered += 1;
	if (isCorrect) {
	    this.progress.qCorrect += 1;
	    this.progress.qCorrectRow += 1;
	} else {
	    this.progress.qCorrectRow = 0;
	}
	this.setChanged();
	this.notifyObservers(this.progress);
	this.clearChanged();	
    }

    /** Called when the last question has ben answered */
    quizFinished() {
	this.progress.started = false;
	this.setChanged();
	this.notifyObservers(this.progress);
	this.clearChanged();	
    }

}

