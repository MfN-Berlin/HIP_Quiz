function setupModel() {
    var model = new QuizModel();
    return model;
}

QUnit.test( "Model: model can be instantiated", function( assert ) {
    model = setupModel();
    assert.ok( model );
});

QUnit.test( "Model: observer can be added", function( assert ) {
    model = setupModel();
    object = new Object();
    model.addObserver(object);
    assert.equal( model.observer.length, 1 );
});

QUnit.test( "Model: model can be reset", function( assert ) {
    model = setupModel();
    model.reset();
    assert.ok( model.progress, "model has a progress object" );
    assert.notOk( model.progress.quizStarted(), "quiz has not started yet" );
    assert.equal( model.question.length, 0, "All questions have been erased" );
});
