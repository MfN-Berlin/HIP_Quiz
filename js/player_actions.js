// player actions
toggle = function() {
    var button_el = document.querySelector('[data-action="play_' + this.id + '"]');
    if (button_el.innerHTML.includes('sprites.svg#Icon--play')) {
	// setPauseSprite(this.id);
	hideControls();
    } else {
	// setPlaySprite(this.id);
	showControls();
    }
}

showControls = function() {
    document.getElementById("controls").style.display="block";
    var specEl = document.querySelector("#spectrogram_1 wave");
    if (specEl) {
	specEl.style.display="none";
    }
}

enableAnswerButtons = function() {
    var buttons = document.querySelectorAll(".answ_button");
    for (var i=0; i < buttons.length; i++) { 
	buttons[i].classList.add("answ_button_hover_class");
	buttons[i].style.cursor="pointer";
    }
    controller.unlock();
}

disableAnswerButtons = function() {
    var buttons = document.querySelectorAll(".answ_button");
    for (var i=0; i < buttons.length; i++) { 
	buttons[i].classList.remove("answ_button_hover_class");
	buttons[i].style.cursor="default";
    }
}

hideControls = function() {
    document.getElementById("controls").style.display="none";
    document.querySelector("#spectrogram_1 wave").style.display="block";
}

toggleMiniplayer = function() {
    var button_el = document.querySelector('[data-action="' + this.id + '"]');
    if (button_el.innerHTML.includes('sprites.svg#Icon--play')) {
	// pauseMiniSprite(this.id);
    } else {
	// playMiniSprite(this.id);
    }
}

pauseMiniSprite = function() {}

stopOtherPlayers = function() {
    if (wavesurfer_1 && this.id != "play_1") { wavesurfer_1.pause(); }
    if (wavesurferMini_left && this.id != "miniplay_left") {wavesurferMini_left.pause();}
    if (wavesurferMini_right && this.id != "miniplay_right") {wavesurferMini_right.pause();}
}
