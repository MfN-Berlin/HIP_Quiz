/**
Javacript Answer class for the Quiz

@see https://code.naturkundemuseum.berlin/Alvaro.Ortiz/Pinguine/tree/master/docs
*/
0
class Answer {
    constructor(label, audio, image) {
	this.label = label;
	this.audio = audio;
	this.image = image;
    }
}

if (typeof module !== 'undefined' && module.exports) {
  exports.Answer = Answer; 
}
