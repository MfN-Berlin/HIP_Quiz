/**
Javacript View for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class ProgressView extends Observer {
    
    constructor() {
	super();
    }

    update(progress) {
	if (progress.quizStarted()) {
	    this.clear();
	    this.show(progress);
	} else {
	    this.clear();
	}
    }
    
    /** Draw the progress bar and other header elements*/
    show(progress) {	
	// close button
	var icon = this._drawCloseButton();
	document.getElementById("header_margin_left").innerHTML = icon;

	// how many in a row
	var in_a_row = this._drawIn_a_row(progress);
	
	// progress bar
	var progressbar = this._drawProgressBar(progress);
	document.getElementById("header_progress").innerHTML = in_a_row + progressbar;
	
	// score
	var progressMsg = this._drawCurrentScore(progress);
	document.getElementById("header_margin_right").innerHTML = progressMsg;
    }
    
    /** Clear all elements from this view */
    clear() {
	document.getElementById("header_margin_left").innerHTML = "";
	document.getElementById("header_progress").innerHTML = "";
	document.getElementById("header_margin_right").innerHTML = "";
    }

    /****************************************************/
    /**               Private methods                   */
    /****************************************************/

    _drawProgressBar(progress) {
	var progressPercentage = 100 * progress.qAnswered / progress.qTotal;
	var correctClass = progress.currentAnswerCorrect()? "correct":"wrong";
	return `
          <div id="header_progress_fill" class="${correctClass}">
            <div id="header_progress_current" style="width:${progressPercentage}%"></div>
          </div>`;
    }
    
    _drawIn_a_row(progress) {
	var in_a_row;
	if (progress.qCorrectRow > 0) {
	    in_a_row = `<div id="in_a_row">${progress.qCorrectRow}x in Folge</div>`;
	} else {
	    in_a_row = '<div id="in_a_row"></div>';
	}
	return in_a_row;
    }

    _drawCurrentScore(progress) {
	return `
          <div id="header_progress_msg">${progress.qAnswered}/${progress.qTotal}</div>`;
    }
    
    _drawCloseButton() {
	return `
          <div id="close" onclick="controller.quit()">
            <svg class="icon" role="img">
              <use xlink:href="${IMG_PATH}/sprites.svg#Icon--close"></use>
            </svg>
          </div>`;
    }
}
