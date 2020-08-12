#!make
.PHONY: standalone
.DEFAULT_GOAL := standalone

standalone:
	-rm quiz.zip
	mkdir -p quiz/files
	cp -r css images js media src quiz/files;
	cp standalone/quiz.html quiz;
	cp standalone/local_configuration.js quiz/files/js;
	cp INSTALL_STANDALONE.md quiz/INSTALL_STANDALONE.txt;
	zip -r quiz quiz
	rm -rf quiz
