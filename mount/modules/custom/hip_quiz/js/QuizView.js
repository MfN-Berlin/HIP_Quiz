/** Path to media folder */
const MEDIA_PATH = "/modules/custom/hip_quiz/media";
var wavesurfer_1, wavesurferMini_left, wavesurferMini_right;
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

    /** Show the start page of the quiz */
    showQuizInstructions() {
	document.getElementById("left").innerHTML = `<img src="${this.ui.logo}" />`;
	document.getElementById("right").innerHTML = `<h1>${this.ui.title}</h1>\n${this.ui.start}` + this._drawButton('start_quiz', "Spiel starten");
    }
    
    /** Show a question and 2 choices */
    showCurrentQuestion(progress) {
	// question, player and wave
	var playerEl = this._drawPlayer();
	var questionEl = `<h1 class="question">${this.ui.title}</h1>${playerEl}`;
	document.getElementById("left").innerHTML = questionEl;

	// read the choices for the current question
	var choices = progress.getChoices();
	
	// draw the choices for the current question
	var leftChoiceEl = this._drawChoice(choices[0]);
	var rightChoiceEl = this._drawChoice(choices[1]);
	var answerEl = this._drawChoices(leftChoiceEl, rightChoiceEl);
	document.getElementById("right").innerHTML = answerEl;

	// add control events and draw the wave (must be at the end of this method)
	this._initPlayer(progress.currentQuestion.correctAnswer);
    }

    /** Reveal the correct answer */
    showQuestionFeedback(progress) {
	var questionEl = `<div class="feedback">${progress.currentQuestion.text}</div>`;
	document.getElementById("left").innerHTML = questionEl;

	// read the choices for the current question
	var choices = progress.getChoices();

	// whether left (0) or right (1) was clicked
	var leftClass="not_chosen", rightClass="not_chosen";
	if (progress.getCurrentChoice() == 0) {
	    leftClass = "chosen";
	} else {
	    rightClass = "chosen";
	}

	// reveal the choices for the current question, with audio player if applicable
	var leftChoiceEl = this._revealChoice('left', choices[0], leftClass);
	var rightChoiceEl = this._revealChoice('right', choices[1], rightClass);
	var answerEl = this._drawChoices(leftChoiceEl, rightChoiceEl);
	document.getElementById("right").innerHTML = answerEl;

	// draw feedback footer
	var footerEl = this._drawFooter(progress);
	document.getElementById("footer").innerHTML = footerEl;

	// add control events and draw the waves (must be at the end of this method)
	this._initFeedbackPlayers(choices);
    }

    showQuizFeedback() {
	throw "unimplemented";
    }
    
    /** Clear all elements from this view */
    clear() {
	document.getElementById("left").innerHTML = "";
	document.getElementById("right").innerHTML = "";
	document.getElementById("footer").innerHTML = "";
	stopOtherPlayers();
    }

    /****************************************************/
    /**               Private methods                   */
    /****************************************************/

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
    
    /**
     * Load audio file and initialize spectrogram for the feedback buttons.
     *
     * @param choices List<Answer> List of answer objects for this question
     */
    _initFeedbackPlayers(choices) {
	
	wavesurferMini_left = this._initWavesurfer('left', choices[0]);
	wavesurferMini_right = this._initWavesurfer('right', choices[1]);
	
	// check each second if player hasn't reached the end of file
	if (wavesurferMini_left) {
	    window.setInterval(function() {
		if (wavesurferMini_left.backend.getPlayedPercents() == 1) {
		    pauseMiniSprite();
		}
	    }, 1000);
	}
	if (wavesurferMini_right) {
	    window.setInterval(function() {
		if (wavesurferMini_right.backend.getPlayedPercents() == 1) {
		    pauseMiniSprite();
		}
	    }, 1000);
	}
    }
    
    _initWavesurfer(elName, choice) {
	// the element where the spectrogram will be placed
	var specEl = document.querySelector(`#minispectrogram_${elName}`)
	// not all answers have a sound
	if (specEl) {
	    var ws = WaveSurfer.create({
		container: specEl,
		waveColor: '#1D90C0',
		progressColor: '#C1E7BA',
		loaderColor: 'purple',
		cursorColor: 'navy',
		plugins:[]
	    });
	    
	    // Load audio from URL
	    var audioPath = MEDIA_PATH + "/" + choice.audio;
	    ws.load(audioPath);
	    // stop other players
	    document
		.querySelector(`[data-action="miniplay_${elName}"]`)
		.addEventListener('click', stopOtherPlayers);
	    // play audio
	    document
		.querySelector(`[data-action="miniplay_${elName}"]`)
		.addEventListener('click', ws.playPause.bind(ws));
	    // toggle play / pause
	    document
		.querySelector(`[data-action="miniplay_${elName}"]`)
		.addEventListener('click', toggleMiniplayer);
	    
	    return ws;
	}
    }

    _drawButton(id, label) {
	return `
          <input type="button" class="button" id="${id}" value="${label}"/>`;
    }
    
    _drawChoices(leftChoiceEl, rightChoiceEl) {
	return `
        <div class="row">
          <div class="answ_left">${leftChoiceEl}</div>
          <div class="answ_right">${rightChoiceEl}</div>
        </div>`;
    }
    
    _drawPlayer() {
	return `
        <div class="player-wrapper" id="player_1">
          <div id="spectrogram_1" class="specVisibleWindowDiv">
            <div id="controls">
              <button class="playButton" data-action="play_1" id="1">
                <svg class="buttonIcon Icon Icon--play" role="img">
                  <use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--play"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>`;
    }
    
    /** Draw image and label for the question frame */
    _drawChoice(choice) {
	var responseEl = `
        <img src="${MEDIA_PATH}/${choice.image}" class="imgButton" onclick="controller.recordAnswer('${choice.label}')"/>
        <div class="answ_button" onclick="controller.recordAnswer('${choice.label}')">${choice.label}</div>`;
	return responseEl;
    }
    
    /** Draw image, label and player (if applicable) for the answer frame */
    _revealChoice(elName, choice, chosenClass) {
	var responseEl = "";
	if (choice.audio != "") {
	    responseEl += `
          <div class="miniplayer-wrapper" id="miniplayer_${elName}">
            <div id="minispectrogram_${elName}" class="specVisibleWindowDiv">
              <div id="controls">
                <button class="miniplayButton" data-action="miniplay_${elName}" id="miniplay_${elName}">
                  <svg class="minibuttonIcon Icon Icon--miniplay" role="img">
                    <use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--miniplay"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>`;
	}
        responseEl += `
          <img src="${MEDIA_PATH}/${choice.image}" class="imgButton miniButton"/>
          <div class="answ_button miniButton ${chosenClass}">${choice.label}</div>`;
	return responseEl;
    }

    _drawFooter(progress) {
	var correctClass = progress.currentAnswerCorrect()? "correct":"wrong";
	var feedbackAnswer = this._drawFeedbackAnswer(progress);
	var nextButton = this._drawButton('continue_quiz', "Weiter");;
	var footerEl = `
          <div id="margin_left" class="column ${correctClass}"></div>    
          <div id="footer_left" class="column ${correctClass}">${feedbackAnswer}</div>
          <div id="footer_right" class="column ${correctClass}">${nextButton}</div>
          <div id="margin_right" class="column ${correctClass}"></div>    
        `;
	return footerEl;

    }
    
    _drawFeedbackAnswer(progress) {
	var correctIcon;
	if (progress.currentAnswerCorrect()) {
	    correctIcon = `
              <svg class="buttonIcon Icon--correct icon_feedback" role="img">
                <use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--correct"></use>
              </svg>`;
	} else {
	    correctIcon = `
              <svg class="buttonIcon Icon--wrong icon_feedback" role="img">
                <use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--wrong"></use>
              </svg>`;
	}
	var responseEl = `
          <div>
            <div>${correctIcon}<h2>Richtige Lösung</h2>${progress.currentQuestion.correctAnswer.label}</div>
          </div>`;
	return responseEl;
    }
}
