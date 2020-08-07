#!make
.PHONY: standalone
.DEFAULT_GOAL := standalone

standalone:
	-rm quiz.zip
	mkdir -p quiz/files
	cp -r css images js media src quiz/files;
	cp standalone/quiz.html quiz;
	cp standalone/local_configuration.js quiz/files/js;
	cp INSTALL_STANDALONE.md quiz;
	zip -r quiz quiz
	rm -rf quiz
