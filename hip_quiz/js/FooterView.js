/**
   Javacript View for the Quiz

   @see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
 */

class FooterView extends Observer {
    
    constructor() {
	super();
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
	    this.showQuestion(progress);
	    
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
    
    showQuizInstructions() {
	var startFooter = this._drawStartFooter();
	document.getElementById("footer").innerHTML = startFooter;
    }
    
    showPlaceholder(progress) {
	var placeholder = this._drawPlaceholder(progress);
	document.getElementById("footer").innerHTML = placeholder;
    }
    
    showQuestion(progress) {
	var placeholder = this._drawPlaceholder(progress);
	document.getElementById("footer").innerHTML = placeholder;	
    }
    
    showQuestionFeedback(progress) {
	var footerEl = this._drawFooter(progress);
	document.getElementById("footer").innerHTML = footerEl;	
    }

    showQuizFeedback(progress) {
	var endFooter = this._drawEndFooter();
	document.getElementById("footer").innerHTML = endFooter;
    }
    
    clear() {
	document.getElementById("footer").innerHTML = "";
    }
    
    /****************************************************/
    /**               Private methods                   */
    /****************************************************/
    _drawBranding() {
	return `<div id="footerCredits">${this.ui.main_credits}</div>`
    }

    _drawPlaceholder(progress) {
	return `
          <div id="footerFill">${this._drawCredits(progress)}</div>`;
    }
    
    _drawButton(id, label, action) {
	return `
          <input type="button" class="button" id="${id}" value="${label}" onclick="${action}"/>`;
    }

    _drawCredits(progress) {
	var c = progress.orderChoices;
	var creditLinks = `
          <a href="${c[0].image.link}" target="credits">${c[0].image.credit}</a> - ${c[0].image.license}, 
          <a href="${c[1].image.link}" target="credits">${c[1].image.credit}</a> - ${c[1].image.license}`;
	return `
          <div id="footerCredits">${this.ui.credits}:${creditLinks}</div>`;
    }
    
    _drawStartFooter() {
	var startButton = this._drawButton('start_quiz', this.ui.button_start, "controller.launch()");
	var footerEl = `
          <div id="margin_left" class="column"></div>    
          <div id="footer_left" class="column"></div>
          <div id="footer_right" class="column">${startButton}</div>
          <div id="margin_right" class="column"></div>
          ${this._drawBranding()}
        `;
	return footerEl;
    }
    
    _drawFooter(progress) {
	var correctClass = progress.currentAnswerCorrect()? "correct":"wrong";
	var feedbackAnswer = this._drawFeedbackAnswer(progress);
	var nextButton = this._drawButton('continue_quiz', "Weiter", "controller.continueQuiz()");;
	var footerEl = `
          <div id="margin_left" class="column ${correctClass}"></div>    
          <div id="footer_left" class="column ${correctClass}">${feedbackAnswer}</div>
          <div id="footer_right" class="column ${correctClass}">${nextButton}</div>
          <div id="margin_right" class="column ${correctClass}"></div>    
          ${this._drawCredits(progress)}
        `;
	return footerEl;

    }
    
    _drawFeedbackAnswer(progress) {
	var responseEl;
	if (progress.currentAnswerCorrect()) {
	    responseEl = `
              <div>
                <div>
                <svg class="buttonIcon Icon--correct icon_feedback" role="img">
                  <use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--correct"></use>
                </svg>
                <h2>${this.ui.correct}</h2>${progress.currentQuestion.correctAnswer.label}
                </div>
              </div>`;
	} else {
	    responseEl = `
              <div>
                <div>
                  <svg class="buttonIcon Icon--wrong icon_feedback" role="img">
                    <use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--wrong"></use>
                  </svg>
                  <h2>${this.ui.wrong} <i>${progress.currentQuestion.correctAnswer.label}</i></h2>
                </div>
              </div>`;
	}
	return responseEl;
    }
    
    _drawEndFooter() {
	var restartButton = this._drawButton('restart_quiz', this.ui.button_restart, "controller.launch()");
	var quitButton = this._drawButton('restart_quiz', this.ui.button_quit, "controller.quit()");
	var footerEl = `
          <div id="margin_left" class="column"></div>    
          <div id="footer_left" class="column" style="padding-top: 2em;flex: 35%">${quitButton}</div>
          <div id="footer_right" class="column" style="flex: 35%; margin-left: 1em;">${restartButton}</div>
          <div id="margin_right" class="column"></div>    
        `;
	return footerEl;
    }
}
