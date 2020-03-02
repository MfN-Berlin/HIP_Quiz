/** Path to media folder */
const MEDIA_PATH = "/modules/custom/hip_quiz/media";
var wavesurfer_1;
var audiofile_1;
var SpectrogramPlugin_1 = window.WaveSurfer.spectrogram;

/**
   Javacript View for the Quiz

   @see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/
class QuizView extends Observer {

    constructor() {
	super();
	this.controller = null;
	this.ui = [];
    }

    setUi(ui) {
	this.ui = ui;
    }
    
    update(progress) {
	// quiz has not started yet
	if (!progress.quizStarted()) {
	    this.clear();
	    this.showQuizInstructions();
	    
	    // quiz has started, show question
	} else if (progress.quizStarted() && progress.state == null) {
	    this.clear();
	    this.showCurrentQuestion(progress);
	    
	    // question was answered, show feedback
	} else if (progress.quizStarted() && progress.state != null) {
	    this.clear();
	    this.showQuestionFeedback(progress);
	}
    }
    
    showQuizInstructions() {
	document.getElementById("left").innerHTML = `<img src="${this.ui.logo}" />`;
	document.getElementById("right").innerHTML = `<h1>${this.ui.titel}</h1>\n${this.ui.start}`;
    }
    
    showCurrentQuestion(progress) {
	// question, player and wave
	var playerEl = this._drawPlayer();
	var questionEl = `<h1 class="question">${this.ui.titel}</h1>${playerEl}`;
	document.getElementById("left").innerHTML = questionEl;

	// read the choices for the current question
	var choices = [
	    progress.currentQuestion.correctAnswer,
	    progress.currentQuestion.wrongAnswer
	];
	if (Math.floor(Math.random() * 2) == 0) {
	    choices.reverse();
	}
	var leftChoiceEl = this._drawChoice(choices[0]);
	var rightChoiceEl = this._drawChoice(choices[1]);
	var answerEl = `
        <div class="row">
          <div class="answ_left">${leftChoiceEl}</div>
          <div class="answ_right">${rightChoiceEl}</div>
        </div>`;
	document.getElementById("right").innerHTML = answerEl;
	// add control events and draw the wave (must be at the end of this method)
	this._initPlayer(progress.currentQuestion.correctAnswer);
    }

    _drawPlayer() {
	return `
        <div class="player-wrapper" id="player_1">
          <div id="spectrogram_1" class="specVisibleWindowDiv"><div id="controls">
            <button class="playButton" data-action="play_1" id="1">
              <svg class="buttonIcon Icon Icon--play" role="img">
                <use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--play"></use>
              </svg>
            </button>
          </div>
        </div>`;
    }

    /**
     * Load audio file and initialize spectrogram.
     *
     * @param answer Answer answer object with the correct answer, used to get the audio file for guessing
     */
    _initPlayer(answer) {
	var audioPath = MEDIA_PATH + "/" + answer.audio;
	
	wavesurfer_1 = WaveSurfer.create({
	    container: document.querySelector('#spectrogram_1'),
	    waveColor: '#1D90C0',
            progressColor: '#C1E7BA',
            loaderColor: 'purple',
            cursorColor: 'navy',
	    plugins:[]
	});

	// Load audio from URL
	wavesurfer_1.load(audioPath);
	// play audio
	document
	    .querySelector('[data-action="play_1"]')
	    .addEventListener('click', wavesurfer_1.playPause.bind(wavesurfer_1));
	// toggle play / pause
	document
	    .querySelector('[data-action="play_1"]')
	    .addEventListener('click', toggle);
	// check each second if player hasn't reached the end of file
	window.setInterval(function() {
            if (wavesurfer_1.backend.getPlayedPercents() == 1) {
		showControls();
	    }
	}, 1000);
    }

    _drawChoice(choice) {
	var responseEl = `
        <img src="${MEDIA_PATH}/${choice.image}" class="imgButton" onclick="controller.recordAnswer('${choice.label}')"/>
        <div class="answ_button" onclick="controller.recordAnswer('${choice.label}')">${choice.label}</div>`;
	return responseEl;
    }
    
    showQuestionFeedback(progress) {
	console.log(progress.state);
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
