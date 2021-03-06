var configuration = {
    "ui": {
	"logo": "Audio-Quiz_Startseite.png",
	"title": "Teste dein Wissen im Unterwasser Audio-Quiz!",
	"start": "<p>Unter Wasser ist es immer still? Von wegen! Auch unter der Meeresoberfläche sind vielfältige Geräusche ständig präsent, die natürlicherweise durch Wind, Wellen, Eis und Donner sowie von Tieren erzeugt werden. Doch auch der Mensch beeinflusst die Unterwasserwelt durch unterschiedlichste Aktivitäten, die Geräusche erzeugen und belastet die Meeresumwelt mit Lärm.</p><p>Doch stammen wirklich alle der folgenden Klänge aus dem Meer? Teste dein Wissen im Audio-Quiz und finde heraus, welche Geräusche unter Wasser zu hören sind!</p>",
	"help" : "Zum Spielen einfach das Hörbeispiel starten und die richtige Lösung mit Klick auf das Bild auswählen!",
	"help_long" : "<h1>Spielerklärung</h1> Es wird gespielt, indem man sich das Hörbeispiel anhört und danach eine der beiden Antwortmöglichkeiten auswählt, indem man auf das entsprechende Bild klickt. Zum Fortfahren wird der \"Weiter\" Button genutzt.<p>Die Hörbeispiele werden entweder automatisch abgespielt, oder können über den \"Play\" Button gestartet werden. Der \"Stop\" Button kann die Wiedergabe jederzeit beenden.</p><p>Gelegentlich erscheint nach erfolgter Beantwortung einer Frage auch ein \"Gegenbeispiel\" Button. Dieser spielt ein Hörbeispiel der falschen Antwortmöglichkeit ab.</p><p>Nach beantwortung aller Fragen erfolgt eine kurze Auswertung.</p><h1>Zusätliche Schaltflächen</h1>Der \"Schliessen\" Button schliesst das Programm.<p>Mit dem \"?\" Button kann man sich diese Programmhilfe jederzeit wieder anzeigen lassen.</p><p>Bei weiteren Fragen wenden Sie sich bitte an einen Mitarbeiter des Meeresmuseums. Er wird ihnen gerne weitere Fragen beantworten.</p>",
        "title_question": "Woher stammt das Geräusch?",
	"correct": "Richtig",
	"wrong": "Die richtige Lösung lautet:",
	"feedback_mittel":"Bitte versuche es noch einmal.",
	"feedback_gut":"Sehr beeindruckend",
	"feedback_alles_richtig":"Fantastisch. Du hast alle Fragen richtig beantwortet",
	"button_start": "Spiel starten",
	"button_restart": "Neues Spiel spielen",
	"button_quit": "Spiel beenden",
	"main_credits": "Idee und Medienauswahl: Dr. Michael Dähne, Deutsches Meeresmuseum. Entwicklung: Alvaro Ortiz Troncoso, Museum für Naturkunde Berlin. Audiobearbeitung: Tina Birnbach, Museum für Naturkunde Berlin. Bild Startseite: Ecomare/Salko de Wolf - CC BY-SA",
	"credits": "Bildnachweis",
        "end_credits": "Bildnachweis: Johannes-Maria Schlorke"
    },
    "settings" : {
	"num_questions" : 6
    },
    "questionnaire" : [
	{
	    "qid": 1,
	    "text": "Die tiefen Grunzlaute nutzt der Finnwal, um sich über Kilometer hinweg zu verständigen",
	    "correct": {
		"label": "Finnwal",
		"audio": "finnwal.mp3",
		"image": {
		    "file": "finnwal.jpg",
		    "credit": "Aqqa Rosing-Asvid - Visit Greenland",
		    "license": "CC BY",
		    "link": "https://en.wikipedia.org/wiki/Fin_whale#/media/File:Finhval_(1).jpg"
		}
	    },
	    "wrong": {
		"label": "Sonar",
		"audio": "sonar.mp3",
		"image": {
		    "file": "sonar.jpg",
		    "credit": "NOAA",
		    "license": "Gemeinfrei",
		    "link": "https://oceanservice.noaa.gov/gallery/image.php?siteName=nosimages&cat=Multibeam%20Sonar"
		}
	    }
	},
	{
	    "qid": 2,
	    "text": "Durch das deutliche Grunzen lassen sich Bartenwale auch einfach mit Schweinen verwechseln!",
	    "correct": {
		"label": "Buckelwal",
		"audio": "buckelwal.mp3",
		"image": {
		    "file": "buckelwal.jpg",
		    "credit": "Dr. Louis M. Herman. - NOAA Photo Library",
		    "license": "Gemeinfrei",
		    "link": "https://de.wikipedia.org/wiki/Buckelwal#/media/Datei:Humpback_whales_in_singing_position.jpg"
		}
	    },
	    "wrong": {
		"label": "Wollschwein",
		"audio": "",
		"image": {
		    "file": "wollschwein2.jpg",
		    "credit": "Nienetwiler",
		    "license": "CC BY",
		    "link": "https://commons.wikimedia.org/wiki/Category:Mangalica?uselang=de#/media/File:101028_Wollschwein-Eber_Alphons_002.jpg"
		}
	    }
	},
	{
	    "qid": 3,
	    "text": "Auch Unterwasser hört man den Einschlag eines Blitzes. Und da sich Schallwellen im Wasser wesentlich schneller ausbreiten als an Land sogar in einem noch größeren Umfeld.",
	    "correct": {
		"label": "Blitz",
		"audio": "blitz.mp3",
		"image": {
		    "file": "blitz2.jpg",
		    "credit": "Ian Boggs",
		    "license": "CC BY",
		    "link": "https://commons.wikimedia.org/wiki/Lightning?uselang=de#/media/File:Phatman_-_Lightning_on_the_Columbia_River_(by-sa).jpg"
		}
	    },
	    "wrong": {
		"label": "Airgun",
		"audio": "airgun.mp3",
		"image": {
		    "file": "airgun2.jpg",
		    "credit": "Dr. Hannes Grobe, Alfred Wegener Institute for Polar and Marine Research, Bremerhaven",
		    "license": "CC BY-SA",
		    "link": "https://en.wikipedia.org/wiki/Seismic_source#/media/File:Air_gun_hg.jpg"
		    
		}
	    }
	},
	{
	    "qid": 4,
	    "text": "Der Schweinswal nutzt Echoortung um sich Unterwasser zu orientieren. Dafür verarbeitet sein Hirn die Echos von sehr hohen Klicklauten, welche er selbst aussendet, zu einem Bild. Er sieht mit seinem Gehör.",
	    "correct": {
		"label": "Schweinswal",
		"audio": "schweinswal.mp3",
		"image": {
		    "file": "schweinswal2.jpg",
		    "credit": "Ecomare/Salko de Wolf",
		    "license": "CC BY-SA",
		    "link": "https://en.wikipedia.org/wiki/Harbour_porpoise#/media/File:Ecomare_-_bruinvis_Michael_in_2015_(bruinvis-michael2015-9313-sw).jpg"
		}
	    },
	    "wrong": {
		"label": "Fliege",
		"audio": "fliege.mp3",
		"image": {
		    "file": "fliege2.jpg",
		    "credit": "Kjetil Fjellheim",
		    "license": "CC BY 2.0",
		    "link": "https://commons.wikimedia.org/wiki/Category:Brachycera?uselang=de#/media/File:Fluer_(Brachycera)_(9233393518).png"
		}
	    }
	},
	{
	    "qid": 5,
	    "text": "Schwertwale nutzen zur Kommunikation auch sogenannte Zwitscher-Laute. Diese sind dem Vogelgezwitscher sehr ähnlich.",
	    "correct": {
		"label": "Orcas",
		"audio": "orcas.mp3",
		"image": {
		    "file": "orcas.jpg",
		    "credit": "Robert Pitman",
		    "license": "Gemeinfrei",
		    "link": "https://commons.wikimedia.org/wiki/File:Type_C_Orcas.jpg?uselang=de"
		}
	    },
	    "wrong": {
		"label": "Papageien",
		"audio": "papagei.mp3",
		"image": {
		    "file": "papageien2.jpg",
		    "credit": "H.Zell",
		    "license": "CC BY-SA 3.0",
		    "link": "https://commons.wikimedia.org/wiki/File:Ara_ararauna_01.jpg?uselang=de"
		}
	    }
	},
	{
	    "qid": 6,
	    "text": "Dieses Geräusch stammt von einer gerade auftauchenden Hawaii-Mönchsrobbe. Es wird häufiger beobachtet, dass sie solche Laute ausstoßen. Nur warum sie das tun, ist noch unklar.",
	    "correct": {
		"label": "Mönchsrobbe",
		"audio": "moenchsrobbe.mp3",
		"image": {
		    "file": "moenchsrobbe.jpg",
		    "credit": "U.S. Fish and Wildlife Service",
		    "license": "Gemeinfrei",
		    "link": "https://digitalmedia.fws.gov/digital/collection/natdiglib/id/4421/rec/6"
		}
	    },
	    "wrong": {
		"label": "ROV",
		"audio": "",
		"image": {
		    "file": "rov.jpg",
		    "credit": "NOAA",
		    "license": "Gemeinfrei",
		    "link": "https://commons.wikimedia.org/wiki/File:ROV_Hercules_2005.JPG"
		}
	    }
	},
	{
	    "qid": 7,
	    "text": "Die Laute des Motors und der durch das Wasser wirbelnden Schiffschraube produzieren einen riesigen Lärm, der durch die gute Schallwellenübertragungsfähigkeit des Wassers noch weithin hörbar ist.",
	    "correct": {
		"label": "Motorboot",
		"audio": "boot.mp3",
		"image": {
		    "file": "boot.jpg",
		    "credit": "Deutsches Meeresmuseum",
		    "license": "unbekannt",
		    "link": "https://www.deutsches-meeresmuseum.de"
		}
	    },
	    "wrong": {
		"label": "Grindwale",
		"audio": "grindwale.mp3",
		"image": {
		    "file": "grindwale.jpg",
		    "credit": "IWDG Marine Mammal Observer",
		    "license": "CC BY-SA 3.0",
		    "link": "https://commons.wikimedia.org/wiki/File:LF_Pilot_Whales_Goban_Spur.jpg"
		}
	    }
	},
	{
	    "qid": 8,
	    "text": "Wenn Pistolenkrebse jagen, betäuben sie ihre Beute mit einem lauten Knall ihrer großen Schere - wenn sich auf einem Gebiet viele Pistolenkrebse befinden, kann das schon mal ein riesen Lärm werden!",
	    "correct": {
		"label": "Pistolenkrebs",
		"audio": "pistolenkrebs.mp3",
		"image": {
		    "file": "pistolenkrebs.jpg",
		    "credit": "Steve Childs",
		    "license": "CC BY 2.0",
		    "link": "https://www.flickr.com/photos/11076453@N00/5386276787"
		}
	    },
	    "wrong": {
		"label": "Regen",
		"audio": "regen.mp3",
		"image": {
		    "file": "regen.jpg",
		    "credit": "jam343",
		    "license": "CC BY",
		    "link": "https://www.flickr.com"
		}
	    }
	},
	{
	    "qid": 9,
	    "text": "Zwitschern ist neben dem Klicken (siehe Schweinswal) und dem Grunzen (siehe Finn- und Buckelwal) eine weitere Art, wie sich Wale verständigen können. Selbst ein riesiges Tier wie der Pottwal kann solche feinen Laute ausstoßen. *Pottwal, Drossel, Fink und Star...*",
	    "correct": {
		"label": "Pottwal",
		"audio": "pottwal.mp3",
		"image": {
		    "file": "pottwal.jpg",
		    "credit": "Gabriel Barathieu",
		    "license": "CC BY-SA 2.0",
		    "link": "https://commons.wikimedia.org/wiki/File:Mother_and_baby_sperm_whale.jpg"
		}
	    },
	    "wrong": {
		"label": "Amsel",
		"audio": "amsel.mp3",
		"image": {
		    "file": "amsel.jpg",
		    "credit": "Andreas Trepte",
		    "license": "CC BY-SA 2.5",
		    "link": "https://de.wikipedia.org/wiki/Amsel#/media/Datei:Common_Blackbird.jpgoutube.com/watch?v=Rro4thc8L7I"
		}
	    }
	},
	{
	    "qid": 10,
	    "text": "Das Knarzen des Hummers wird durch eine Art eingebaute Raspel erzeugt, über die er streicht.",
	    "correct": {
		"label": "Hummer",
		"audio": "hummer.mp3",
		"image": {
		    "file": "hummer.jpg",
		    "credit": "Steven G. Johnson",
		    "license": "CC BY-SA 2.5",
		    "link": "https://commons.wikimedia.org/wiki/File:Blue-lobster.jpg?uselang=de"
		}
	    },
	    "wrong": {
		"label": "Ente",
		"audio": "ente.mp3",
		"image": {
		    "file": "ente.jpg",
		    "credit": "Pixabay",
		    "license": "Pixabay Lizenz",
		    "link": "https://pixabay.com/de/photos/ente-m%C3%A4nnlich-weiblich-teich-natur-70737/"
		}
	    }
	},
	{
	    "qid": 11,
	    "text": "Um das tiefe Brummen zweier aneinander reibender Eisgiganten hörbar zu machen, musste es mit 20facher Geschwindigkeit abgespielt werden.",
	    "correct": {
		"label": "Eisbergkollision",
		"audio": "eisbergkollision.mp3",
		"image": {
		    "file": "eisbergkollision.jpg",
		    "credit": "Michael Haferkamp",
		    "license": "CC BY-SA 3.0",
		    "link": "https://commons.wikimedia.org/w/index.php?curid=12761708"
		}
	    },
	    "wrong": {
		"label": "Seebeben",
		"audio": "seebeben.mp3",
		"image": {
		    "file": "seebeben.jpg",
		    "credit": "Yamaguchi先生",
		    "license": "CC BY-SA 3.0",
		    "link": "https://es.wikipedia.org/wiki/Sism%C3%B3grafo#/media/Archivo:Kinemetrics_seismograph.jpg"
		}
	    }
	},
	{
	    "qid": 12,
	    "text": "Eine spezielle Unterart der Zwergwale macht diese sogenannten Star-Wars-Laute. Wieder wird deutlich, welch riesige Bandbreite an Lauten von Lebewesen unter Wasser produziert wird.",
	    "correct": {
		"label": "Zwergwal",
		"audio": "zwergwal.mp3",
		"image": {
		    "file": "zwergwal.jpg",
		    "credit": "Len2040",
		    "license": "CC BY-ND 2.0",
		    "link": "https://www.flickr.com/photos/lenjoh/8628266356"
		}
	    },
	    "wrong": {
		"label": "Starwars",
		"audio": "",
		"image": {
		    "file": "starwars.jpg",
		    "credit": "Lucasfilm Ltd",
		    "license": "Alle Rechte vorbehalten",
		    "link": "https://www.lucasfilm.com/"
		}
	    }
	},
	{
	    "qid": 13,
	    "text": "Das waren Paarungslaute eines Walrossmännchens - das ein Spieler die schon mal gehört hat, kommt selten vor. Im Gegenbeispiel wird im Verlauf ein Blasenschleier aktiviert um den Lärmpegel der Baustelle zu senken.",
	    "correct": {
		"label": "Walross",
		"audio": "walross.mp3",
		"image": {
		    "file": "walross.jpg",
		    "credit": "Captain Budd Christman, NOAA Corps",
		    "license": "Gemeinfrei",
		    "link": "https://de.wikipedia.org/wiki/Walross#/media/Datei:Noaa-walrus22.jpg"
		}
	    },
	    "wrong": {
		"label": "Pfahlgründung",
		"audio": "pfahlgruendung.mp3",
		"image": {
		    "file": "pfahlgruendung.jpg",
		    "credit": "Ad Meskens",
		    "license": "CC BY-SA 3.0",
		    "link": "https://commons.wikimedia.org/wiki/File:Prinses_Amalia_windmolenpark_4.jpg?uselang=nl"
		}
	    }
	},
	{
	    "qid": 14,
	    "text": "Airguns sind Schallkanonen, die mit aufeinanderfolgenden Explosionen Luft in die Wassersäule schießen und mehrere Kilometer in den Meeresboden eindringen um Erdöl- und Gasvorkommen zu finden.",
	    "correct": {
		"label": "Airgun",
		"audio": "airgun.mp3",
		"image": {
		    "file": "airgun2.jpg",
		    "credit": "Dr. Hannes Grobe, Alfred Wegener Institute for Polar and Marine Research, Bremerhaven",
		    "license": "CC BY-SA",
		    "link": "https://en.wikipedia.org/wiki/Seismic_source#/media/File:Air_gun_hg.jpg"
		    
		}
	    },
	    "wrong": {
		"label": "Blitz",
		"audio": "blitz.mp3",
		"image": {
		    "file": "blitz2.jpg",
		    "credit": "Ian Boggs",
		    "license": "CC BY",
		    "link": "https://commons.wikimedia.org/wiki/Lightning?uselang=de#/media/File:Phatman_-_Lightning_on_the_Columbia_River_(by-sa).jpg"
		}
	    }
	},
	{
	    "qid": 15,
	    "text": "Sonare machen das Unsichtbare sichtbar. Durch Aussenden von Schallwellen und dem Empfangen von Echos zeigen Sonare den Schiffsführern unterschiedliche Entfernungen an. Daraus werden auf Monitoren Fischschwärme, Wracks, U-Boote oder Untiefen sichtbar.",
	    "correct": {
		"label": "Sonar",
		"audio": "sonar.mp3",
		"image": {
		    "file": "sonar.jpg",
		    "credit": "NOAA",
		    "license": "Gemeinfrei",
		    "link": "https://oceanservice.noaa.gov/gallery/image.php?siteName=nosimages&cat=Multibeam%20Sonar"
		}
	    },
	    "wrong": {
		"label": "Finnwal",
		"audio": "finnwal.mp3",
		"image": {
		    "file": "finnwal.jpg",
		    "credit": "Aqqa Rosing-Asvid - Visit Greenland",
		    "license": "CC BY",
		    "link": "https://en.wikipedia.org/wiki/Fin_whale#/media/File:Finhval_(1).jpg"
		}
	    }
	},
	{
	    "qid": 16,
	    "text": "Für den Bau von Offshore-Windkraftanlagen oder Plattformen für die Öl- und Gasförderung werden Pfeiler mehr als 50 Meter tief in den Meeresboden gerammt. Mit mehreren tausend Schlägen vergehen Tage bis ein Pfeiler mit bis zu neun Meter Durchmesser im Boden verankert ist.",
	    "correct": {
		"label": "Pfahlgründung",
		"audio": "pfahlgruendung.mp3",
		"image": {
		    "file": "pfahlgruendung.jpg",
		    "credit": "Ad Meskens",
		    "license": "CC BY-SA 3.0",
		    "link": "https://commons.wikimedia.org/wiki/File:Prinses_Amalia_windmolenpark_4.jpg?uselang=nl"
		}
	    },
	    "wrong": {
		"label": "Walross",
		"audio": "walross.mp3",
		"image": {
		    "file": "walross.jpg",
		    "credit": "Captain Budd Christman, NOAA Corps",
		    "license": "Gemeinfrei",
		    "link": "https://de.wikipedia.org/wiki/Walross#/media/Datei:Noaa-walrus22.jpg"
		}
	    }
	},
	{
	    "qid": 17,
	    "text": "Seebeben sind unterseeische Erdbeben. Durch z.B. Plattentektonik, Vulkanausbrüche und Explosionen kann der Meeresboden erschüttert werden.",
	    "correct": {
		"label": "Seebeben",
		"audio": "seebeben.mp3",
		"image": {
		    "file": "seebeben.jpg",
		    "credit": "Yamaguchi先生",
		    "license": "CC BY-SA 3.0",
		    "link": "https://es.wikipedia.org/wiki/Sism%C3%B3grafo#/media/Archivo:Kinemetrics_seismograph.jpg"
		}
	    },
	    "wrong": {
		"label": "Eisbergkollision",
		"audio": "eisbergkollision.mp3",
		"image": {
		    "file": "eisbergkollision.jpg",
		    "credit": "Michael Haferkamp",
		    "license": "CC BY-SA 3.0",
		    "link": "https://commons.wikimedia.org/w/index.php?curid=12761708"
		}
	    }
	},
	{
	    "qid": 18,
	    "text": "Wenn Regen auf Wasseroberflächen trifft, hört man dies nicht nur an der Luft sondern auch unter Wasser.",
	    "correct": {
		"label": "Regen",
		"audio": "regen.mp3",
		"image": {
		    "file": "regen.jpg",
		    "credit": "jam343",
		    "license": "CC BY",
		    "link": "https://www.flickr.com"
		}
	    },
	    "wrong": {
		"label": "Pistolenkrebs",
		"audio": "pistolenkrebs.mp3",
		"image": {
		    "file": "pistolenkrebs.jpg",
		    "credit": "Steve Childs",
		    "license": "CC BY 2.0",
		    "link": "https://www.flickr.com/photos/11076453@N00/5386276787"
		}
	    }
	},
	{
	    "qid": 19,
	    "text": "Wir sind hier tatsächlich im Meer und nicht in einer Vogelvoliere. Die Pfiffe der Grindwale können ziemlich schrill klingen.",
	    "correct": {
		"label": "Grindwale",
		"audio": "grindwale.mp3",
		"image": {
		    "file": "grindwale.jpg",
		    "credit": "IWDG Marine Mammal Observer",
		    "license": "CC BY-SA 3.0",
		    "link": "https://commons.wikimedia.org/wiki/File:LF_Pilot_Whales_Goban_Spur.jpg"
		}
	    },
	    "wrong": {
		"label": "Papageien",
		"audio": "papagei.mp3",
		"image": {
		    "file": "papageien2.jpg",
		    "credit": "H.Zell",
		    "license": "CC BY-SA 3.0",
		    "link": "https://commons.wikimedia.org/wiki/File:Ara_ararauna_01.jpg?uselang=de"
		}
	    }
	}
    ]
};
