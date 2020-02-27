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
	}
    }
    
    /** Draw the progress bar and other header elements*/
    show(progress) {	
	// close button
	var icon = '<div id="close"><svg class="icon" role="img"><use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--close"></use></svg></div>';
	document.getElementById("header_margin_left").innerHTML = icon;

	// how many in a row
	var in_a_row
	if (progress.qCorrectRow > 0) {
	    in_a_row = '<div id="in_a_row">{0}x in Folge</div>'.format(progress.qCorrectRow);
	} else {
	    in_a_row = '<div id="in_a_row"></div>';
	}
	
	// progress bar
	var progressbar = '<div id="header_progress_fill"><div id="header_progress_current"></div></div>';
	document.getElementById("header_progress").innerHTML = in_a_row + progressbar;
	var progressPercentage = progress.qAnswered / progress.qTotal;
	document.getElementById("header_progress_current").style.width = "{0}%".format(progressPercentage);
	document.getElementById("header_margin_right").innerHTML = "";

	// score
	var progressMsg = '<div id="header_progress_msg">{0}/{1}</div>'.format(progress.qAnswered, progress.qTotal);
	document.getElementById("header_margin_right").innerHTML = progressMsg;
    }
    
    /**Clear all elements from this view*/
    clear() {
	document.getElementById("header_margin_left").innerHTML = "";
	document.getElementById("header_progress").innerHTML = "";
	document.getElementById("header_margin_right").innerHTML = "";
    }
}
