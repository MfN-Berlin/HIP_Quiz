/**
Javacript Question class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/

class Question {
    constructor(text, audio, image, correctAnswer, wrongAnswer, chosenAnswer) {
	this.text = text;
	this.audio = audio;
	this.image = image;
	this.correctAnswer = correctAnswer;
	this.wrongAnswer = wrongAnswer;
	this.chosenAnswer = chosenAnswer;
    }
}

if (typeof module !== 'undefined' && module.exports) {
  exports.Question = Question; 
}
