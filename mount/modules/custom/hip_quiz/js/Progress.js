/**
Javacript Progress class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class Progress {
    constructor() {
	this.qTotal = null
	this.qAnswered = null
	this.qCorrectRow = null
    }

}

if (typeof module !== 'undefined' && module.exports) {
  exports.Progress = Progress; 
}
