/**
   Observer class (actually interface) for MVC
*/
class Observer {
    update(progress) {
	throw "this method is abstract and should be overwritten by the implementing class";
    }
}

