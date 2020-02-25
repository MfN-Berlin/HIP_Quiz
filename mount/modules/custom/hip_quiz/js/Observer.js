/**
   Observer class (actually interface) for MVC
*/
class Observer {
    update() {
	throw "unimplemented";
    }
}

if (typeof module !== 'undefined' && module.exports) {
  exports.Observer = Observer; 
}
