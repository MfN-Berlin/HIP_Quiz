/**
Javacript Question class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class Question {
    constructor(id, text, correctAnswer, wrongAnswer) {
	this.id = id;
	this.text = text;
	this.correctAnswer = correctAnswer;
	this.wrongAnswer = wrongAnswer;
    }
}

if (typeof module !== 'undefined' && module.exports) {
  exports.Question = Question; 
}
