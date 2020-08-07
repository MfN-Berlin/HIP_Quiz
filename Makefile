#!make
.PHONY: standalone
.DEFAULT_GOAL := standalone

standalone:
	mkdir -p quiz/files
	cp -r css images js media src quiz/files;
	cp standalone/quiz.html quiz/files;
	cp standalone/local_configuration.js quiz/files/js;
	cp standalone/quiz quiz;
	zip -r quiz quiz
	rm -rf quiz
