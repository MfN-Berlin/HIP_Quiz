/**
   Observable class for MVC
*/
class Observable {
    
    addObserver() {
	throw "unimplemented";
    }

    setChanged() {
	throw "unimplemented";
    }

    clearChanged() {
	throw "unimplemented";
    }

    notifyObservers() {
	throw "unimplemented";
    }

    countObservers() {
	throw "unimplemented";
    }

    deleteObservers() {
	throw "unimplemented";
    }
}

if (typeof module !== 'undefined' && module.exports) {
  exports.Observable = Observable; 
}
