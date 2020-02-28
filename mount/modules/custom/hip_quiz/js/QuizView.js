/** Path to media folder */
const MEDIA_PATH = "/modules/custom/hip_quiz/media";

/**
Javacript View for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/
class QuizView extends Observer {
    
    constructor() {
	super();
	this.ui = [];
    }

    setUi(ui) {
	this.ui = ui;
    }
    
    update(progress) {
	if (!progress.quizStarted()) {
	    this.clear();
	    this.showQuizInstructions();
	
	} else if (progress.quizStarted()) {
	    this.clear();
	    this.showCurrentQuestion(progress);
	}
    }
    
    showQuizInstructions() {
	document.getElementById("left").innerHTML = '<img src=\"{0}\" />'.format(this.ui.logo);
	document.getElementById("right").innerHTML = '<h1>{0}</h1>\n{1}'.format(this.ui.titel, this.ui.start);
    }
    
    showCurrentQuestion(progress) {
	// question
	var playButton = '<button class="playButton" data-action="play_1" id="play_1"><svg class="buttonIcon Icon Icon--play" role="img"><use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--play"></use></svg></button>';
	var questionEl = '<h1 class="question">{0}</h1>{1}'.format(this.ui.titel, playButton)
	document.getElementById("left").innerHTML = questionEl;

	// answer
	var show = [
	    progress.currentQuestion.correctAnswer,
	    progress.currentQuestion.wrongAnswer
	];
	if (Math.floor(Math.random() * 2) == 0) {
	    show.reverse();
	}
	var leftAnswerEl = '<img src="{0}/{1}" class="imgButton"/><div class="answ_button">{2}</div>'.format(MEDIA_PATH, show[0].image, show[0].label, show[0].label);
	var rightAnswerEl = '<img src="{0}/{1}" class="imgButton"/><div class="answ_button">{2}</div>'.format(MEDIA_PATH, show[1].image, show[1].label, show[1].label);
	var answerEl = '<div class="row"><div class="answ_left">{0}</div><div class="answ_right">{1}</div></div>'.format(
	    leftAnswerEl,
	    rightAnswerEl
	);
	document.getElementById("right").innerHTML = answerEl;
    }

    showQuestionFeedback() {
	throw "unimplemented";
    }

    showQuizFeedback() {
	throw "unimplemented";
    }

    /**Clear all elements from this view*/
    clear() {
	document.getElementById("left").innerHTML = "";
	document.getElementById("right").innerHTML = "";
    }
}
