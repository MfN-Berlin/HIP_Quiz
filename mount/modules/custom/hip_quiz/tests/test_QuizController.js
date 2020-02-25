Observer = require("../js/Observer.js").Observer;
Observable = require("../js/Observable.js").Observable;
Progress = require("../js/Progress.js").Progress;
Question = require("../js/Question.js").Question;
QuizModel = require("../js/QuizModel.js").QuizModel;
QuizView = require("../js/QuizView.js").QuizView;
QuizController = require("../js/QuizController.js").QuizController;

// test that controller can be instantiated
QUnit.test( "test 1", function( assert ) {
    var view = new QuizView();
    var model = new QuizModel();
    var controller = new QuizController(model, view);

    assert.ok( controller, "Passed!" );
});
