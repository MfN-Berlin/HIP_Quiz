function setupController() {
    var view = new QuizView();
    var model = new QuizModel();
    var controller = new QuizController(model, view);
    controller.loadConfiguration("../js/questionnaire.json");
    return controller;
}

QUnit.test( "Controller: controller can be instantiated", function( assert ) {
    controller = setupController();
    assert.ok( controller );
});

QUnit.test( "Controller: controller can read configuration file", function( assert ) {
    controller = setupController();
    assert.ok( controller.settings, "controller can read settings from configuration file" );
    assert.ok( controller.questionnaire, "controller can read questions from configuration file" );
    assert.equal( 13, controller.questionnaire.length, "controller can read questions from configuration file" );
});

QUnit.test( "Controller: controller can initialize Model", function( assert ) {
    controller = setupController();
    controller.initialize();
    assert.equal( controller.settings.num_questions, 6 );
    assert.equal( controller.model.question.length, controller.settings.num_questions );
    assert.equal( controller.model.progress.qTotal, 6 );
});

QUnit.test( "Controller: controller can start", function( assert ) {
    controller = setupController();
    controller.initialize();
    controller.launch();
    assert.ok( controller.model.progress.quizStarted() );
    assert.equal( controller.model.progress.qAnswered, 0 );
});
