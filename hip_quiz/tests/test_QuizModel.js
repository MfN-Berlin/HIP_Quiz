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

QUnit.test( "Controller: controller can parser questions", function( assert ) {
    controller = setupController();
    var qTest = JSON.parse('{\
	    "qid": 100,\
            "text": "Testfrage",\
	    "correct": {\
                "label": "Finnwal",\
		"audio": "finnwal.mp3",\
		"image": "finnwal.jpg"\
	    },\
	    "wrong": {\
                "label": "Sonar",\
		"audio": "sonar.mp3",\
		"image": "sonar.jpg"\
	    }\
	}');
    var q = controller._parseQuestion(qTest);
    console.log(q);
    assert.equal( q.id, qTest.qid );
    assert.equal( q.text, qTest.text );
    assert.equal( q.correctAnswer.label, qTest.correct.label );
    assert.equal( q.correctAnswer.audio, qTest.correct.audio );
    assert.equal( q.correctAnswer.image, qTest.correct.image );
    assert.equal( q.wrongAnswer.label, qTest.wrong.label );
    assert.equal( q.wrongAnswer.audio, qTest.wrong.audio );
    assert.equal( q.wrongAnswer.image, qTest.wrong.image );
});


