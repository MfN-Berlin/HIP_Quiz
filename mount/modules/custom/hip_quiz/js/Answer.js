/**
Javacript Answer class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/
0
class Answer {
    constructor(text, audio, image) {
	this.text = text;
	this.audio = audio;
	this.image = image;
    }
}

if (typeof module !== 'undefined' && module.exports) {
  exports.Answer = Answer; 
}
