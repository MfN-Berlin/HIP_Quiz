function setupView() {
    var view = new QuizView();
    var model = new QuizModel();
    var controller = new QuizController(model, view);
    controller = setupController();
    controller.loadConfiguration("../js/questionnaire.json");
    return controller.view;
}

QUnit.test( "View: view has texts from configuration file", function( assert ) {
    view = setupView();
    assert.ok( view.ui, "view has texts from configuration file" );
    assert.equal( Object.keys(view.ui).length, 6, "view has all texts" );
});

