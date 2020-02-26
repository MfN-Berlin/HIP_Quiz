/**
   Observable class for MVC
*/
class Observable {

    constructor(model, view) {
	this.observer = [];
	this.changed = false;
    }

    
    addObserver(obj) {
	this.observer.push(obj);
    }

    setChanged() {
	this.changed = true;
    }

    clearChanged() {
	this.changed = false;
    }

    notifyObservers(progress) {
	for (var i = 0; i < this.observer.length; i++) {
	    this.observer[i].update(progress);
	}
    }

    countObservers() {
	throw "unimplemented";
    }

    deleteObservers() {
	throw "unimplemented";
    }
}

