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
    document.querySelector("#spectrogram_1 wave").style.display="none";
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

/*
setPauseSprite = function(id) {
    var data_action = "play_" + id;
    // console.log("setPauseSprite " + data_action)
    document
	.querySelector('[data-action="'+data_action+'"]')
	.innerHTML = "<svg class=\"buttonIcon Icon Icon--play\" role=\"img\"><use xlink:href=\"/modules/custom/hip_quiz/images/sprites.svg#Icon--pause\"></use></svg>";
}
setPlaySprite = function(id) {
    var data_action = "play_" + id;
    document
	.querySelector('[data-action="'+data_action+'"]').
	innerHTML = "<svg class=\"buttonIcon Icon Icon--play\" role=\"img\"><use xlink:href=\"/modules/custom/hip_quiz/images/sprites.svg#Icon--play\"></use></svg>";
}
showControls = function() {
    var data_action = this.id.replace("spectrogram", "play");
    document
	.querySelector('[data-action="'+data_action+'"]').style.visibility='visible';
}
highlightControls = function() {
    var data_action = "play_" + this.id;
    document
	.querySelector('[data-action="'+data_action+'"]').style.visibility='visible';
    document
	.querySelector('[data-action="'+data_action+'"]').style.opacity=1;	  
}
hideControls = function() {
    var data_action = this.id.replace("spectrogram", "play");
    document
	.querySelector('[data-action="'+data_action+'"]').style.visibility='hidden';
}
dimControls = function() {
    var data_action = "play_" + this.id;
    document
	.querySelector('[data-action="'+data_action+'"]').style.opacity=.5;
}
*/

// Show / hide metadata details from player menu
/*
function show_details(player_id) {
    var player = document.getElementById("player_" + player_id);
    player.querySelector(".meta_fields").style.display = "block";
    player.querySelector(".description").style.maxWidth = "50%";
    document.getElementById("show_details_" + player_id).style.display = "none";
    document.getElementById("hide_details_" + player_id).style.display = "block";
}
function hide_details(player_id) {
    var player = document.getElementById("player_" + player_id);
    player.querySelector(".meta_fields").style.display = "none";
    player.querySelector(".description").style.maxWidth = "100%";
    document.getElementById("show_details_" + player_id).style.display = "block";
    document.getElementById("hide_details_" + player_id).style.display = "none";
}
*/
