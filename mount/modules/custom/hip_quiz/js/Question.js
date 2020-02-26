/**
Javacript Question class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class Question {
    constructor(id, correctAnswer, wrongAnswer, chosenAnswer) {
	this.id = id;
	this.correctAnswer = correctAnswer;
	this.wrongAnswer = wrongAnswer;
    }
}

if (typeof module !== 'undefined' && module.exports) {
  exports.Question = Question; 
}
