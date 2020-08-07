
var wavesurfer_1, wavesurferMini_left, wavesurferMini_right;
var audiofile_1;
var SpectrogramPlugin_1 = window.WaveSurfer.spectrogram;

/**
 *  Javacript View for the Quiz
 *
 *  @see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
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
	if (!progress.quizStarted() && progress.qAnswered == 0) {
	    // quiz has not started yet
	    this.clear();
	    this.showQuizInstructions();
	    
	} else if (progress.quizStarted() && progress.state == null) {
	    // quiz has started, show question
	    this.clear();
	    this.showCurrentQuestion(progress);
	    
	} else if (progress.quizStarted() && progress.state != null) {
	    // question was answered, show feedback
	    this.clear();
	    this.showQuestionFeedback(progress);
	    
	} else if (!progress.quizStarted() && progress.qAnswered > 0) {
	    // quiz finished, show feedback
	    this.clear();
	    this.showQuizFeedback(progress);
	}
    }

    /** Show the start page of the quiz */
    showQuizInstructions() {
	document.getElementById("left").innerHTML = this._drawBranding();
	document.getElementById("right").innerHTML = `
           <h1>${this.ui.title}</h1>
           ${this.ui.start}`;
    }
    
    /** Show a question and 2 choices */
    showCurrentQuestion(progress) {
	// question, player and wave
	var playerEl = this._drawPlayer();
	var questionEl = `<h1 class="question">${this.ui.title_question}</h1>${playerEl}`;
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

	disableAnswerButtons();
	// add control events and draw the waves (must be at the end of this method)
	this._initFeedbackPlayers(choices);
    }

    /** Show score */
    showQuizFeedback(progress) {
	var feedbackEl = this._drawQuizFeedback(progress);
	var pinguinEl = this._drawPinguinEl();
	document.getElementById("left").innerHTML = pinguinEl;
	document.getElementById("right").innerHTML = feedbackEl;
    }
    
    /** Clear all elements from this view */
    clear() {
	document.getElementById("left").innerHTML = "";
	document.getElementById("right").innerHTML = "";
	stopOtherPlayers();
    }

    /****************************************************/
    /**               Private methods                   */
    /****************************************************/

    _drawBranding() {
	return `<a href="#" onclick="controller.launch()" class="startimage"><img src="${this.ui.logo}"/></a>`;
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
	// check each second if player has started
	this._initPlayerInterval = window.setInterval(function() {
            if (wavesurfer_1.backend.getPlayedPercents() > 0) {
		enableAnswerButtons();
	    }
	}, 1000);
	// check each second if player hasn't reached the end of file
	this._initPlayerInterval = window.setInterval(function() {
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
	window.clearInterval(this._initPlayerInterval);

	wavesurferMini_left = this._initWavesurfer('left', choices[0]);
	wavesurferMini_right = this._initWavesurfer('right', choices[1]);
	/*
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
		    // pauseMiniSprite();
		}
	    }, 1000);
	}
	*/
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
                  <use xlink:href="${IMG_PATH}/sprites.svg#Icon--play"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>`;
    }
    
    /** Draw image and label for the question frame */
    _drawChoice(choice) {
	var responseEl = `
        <img src="${MEDIA_PATH}/${choice.image.file}" class="imgButton" onclick="controller.recordAnswer('${choice.label}')"/>
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
                  <svg class="minibuttonIcon Icon Icon--playpause" role="img">
                    <use xlink:href="${IMG_PATH}/sprites.svg#Icon--playpause"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>`;
	}
        responseEl += `
          <img src="${MEDIA_PATH}/${choice.image.file}" class="imgButton miniButton"/>
          <div class="answ_button miniButton ${chosenClass}">${choice.label}</div>`;
	return responseEl;
    }

    
    _drawPinguinEl() {
	return `<img class="feedbackImg" src="${IMG_PATH}/2010_07_16_11pinguine-ozeaneum_jm-schlorke-7748.jpg">`;
    }
    
    _drawQuizFeedback(progress) {
	var responseEl, textEl;
	var discriminant = progress.qTotal/2;
	
	if (progress.qCorrect == progress.qTotal) {
	    textEl = `
              <p class="quizFeedbackText">${this.ui.feedback_alles_richtig}</p>
              <p class="score">Es wurden alle Fragen richtig beantwortet</p>
            `;

	} else if (progress.qCorrect > discriminant) {
	    textEl = `
              <p class="quizFeedbackText">${this.ui.feedback_gut}</p>
              <p class="score">Es wurden ${progress.qCorrect} von ${progress.qTotal} Fragen richtig beantwortet</p>
            `;

	} else {
	    textEl = `
              <p class="quizFeedbackText">${this.ui.feedback_mittel}</p>
              <p class="score">Es wurden ${progress.qCorrect} von ${progress.qTotal} Fragen richtig beantwortet</p>
            `;
	}
	responseEl = `
          <div class="quizFeedback">${textEl}</div>
        `;
	return responseEl;
    }
}
