// Create an instance of wavesurfer
/*
var wavesurfer_1;
var audiofile_1 = "/modules/custom/hip_quiz/media/grindwale.mp3";
var SpectrogramPlugin_1 = window.WaveSurfer.spectrogram;
*/
// Init & load audio file
// document.addEventListener('DOMContentLoaded', function() {

// create spectrogram
/*
function initPlayer() {
    wavesurfer_1 = WaveSurfer.create({
	container: document.querySelector('#spectrogram_1'),
	waveColor: '#1D90C0',
        progressColor: '#C1E7BA',
        loaderColor: 'purple',
        cursorColor: 'navy',
	plugins:[
	]
    });
*/
    // Load audio from URL
//    wavesurfer_1.load(audiofile_1);
    
    // show/hide play button over spectrogram
    /*
    document
	.getElementById('spectrogram_1')
	.addEventListener('mouseover', showControls);
    document
	.querySelector('[data-action="play_1"]')
	.addEventListener('mouseover', highlightControls);
    document
	.getElementById('spectrogram_1')
	.addEventListener('mouseout', hideControls);
    document
	.querySelector('[data-action="play_1"]')
	.addEventListener('mouseout', dimControls);
    */

/*
    // play audio
    document
	.querySelector('[data-action="play_1"]')
	.addEventListener('click', wavesurfer_1.playPause.bind(wavesurfer_1));
    // toggle play / pause
    document
	.querySelector('[data-action="play_1"]')
	.addEventListener('click', toggle);
    // check each second if player hasn't reached the end of file
    window.setInterval(function() {
        if (wavesurfer_1.backend.getPlayedPercents() == 1) {
	    showControls();
	}
    }, 1000);
}
//});
*/
