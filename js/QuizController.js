/**
   Javacript Controller for the Quiz

   @see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class QuizController {
    
    constructor(model) {
	this.model = model
	this.settings = null;
	this.questionnaire = null;
	this.uiTexts = null;
	this.answersEnabled = false;
    }

    /** 
     * Loads the configuration file and stores it as:
     * # a JSON object containing the settings in the settings attribute. 
     * # a JSON object containing the UI texts in the uiTexts attribute. 
     * # an array of Question objects in the questionnaire attribute. 
     *
     * @param {string} url (relative) url of the json file containing the configuration.
     */
    loadConfiguration(path) {
	var configuration = (function() {
	    var json = null;
	    $.ajax({
		'async': false,
		'global': false,
		'url': path,
		'dataType': "json",
		'success': function(data) {
		    json = data;
		}
	    });
	    return json;
	})();
        this.storeSettings(configuration);
    }

    storeSettings(configuration) {
	// store settings in the controller
	this.settings = configuration.settings;
	this.questionnaire = [];
	for (var i = 0; i < configuration.questionnaire.length; i++) {
	    var q = configuration.questionnaire[i];
	    var qObj = this._parseQuestion(q);
	    this.questionnaire.push(qObj);
	}
	this.uiTexts = configuration.ui;
    }

    launch() {
	this._initialize();
	this.model.gotoFirstQuestion();
    }

    continueQuiz() {
	this.answersEnabled = false;
	if (this.model.moreQuestionsAvailable()) {
	    // there are still more questions
	    this.model.gotoNextQuestion();
	} else {
	    // no more questions
	    this.model.quizFinished();
	}
    }

    unlock() {
	this.answersEnabled = true;
    }
    
    /**
     *  Receive the choice the user made by clicking on a button
     *
     *  @param answerStr String the label of the answer
     */
    recordAnswer(answerStr) {
	if (!this.answersEnabled) return;
	var correctAnswer = this.model.getCorrectAnswer();
	var isCorrect = (answerStr == correctAnswer.label);
	this.model.updateAnswer(isCorrect);
    }

    restart() {
	throw "unimplemented";
    }

    confirmQuit() {
	throw "unimplemented";
    }

    quit() {
	window.location.reload();
    }
    
    /****************************************************/
    /**               Private methods                   */
    /****************************************************/

    /**
     * Randomly selects questions and adds them to the model.
     */
    _initialize() {
	this.model.reset();
	this.answersEnabled = false;
	var numQuestions = this.settings.num_questions;
	if (numQuestions > this.questionnaire.length) throw "Not enough questions";
	this._shuffleArray(this.questionnaire);
	for (var i = 0; i < numQuestions; i++) {
	    this.model.addQuestion(this.questionnaire[i]);
	}
    }

    /** Takes a JSON fragment describing a question and returns a Question object. */
    _parseQuestion(q) {
	var correctAnswer = new Answer(q.correct.label, q.correct.audio, q.correct.image);
	// wrong answers do not have an explaining text
	var wrongAnswer = new Answer(q.wrong.label, q.wrong.audio, q.wrong.image);
	return new Question(q.qid, q.text, correctAnswer, wrongAnswer);
    }

    /** 
     * Shuffle an array, Durstenfeld algorithm, using multiple assignment
     * Laurens Holst (2018) https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
     */
    _shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
	}
    }
    
}
