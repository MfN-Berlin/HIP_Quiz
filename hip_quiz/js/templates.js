/** 
Use javascript templates, as quiz should run standalone as well as in Drupal. 
*/

/** Path to media folder */
const MEDIA_PATH = "/modules/custom/hip_quiz/media";

PLAYER_TPL = `
<div class="player-wrapper" id="player_1">
  <div id="spectrogram_1" class="specVisibleWindowDiv"><div id="controls">
    <button class="playButton" data-action="play_1" id="1">
      <svg class="buttonIcon Icon Icon--play" role="img">
        <use xlink:href="/modules/custom/hip_quiz/images/sprites.svg#Icon--play"></use>
      </svg>
    </button>
  </div>
</div>
`;

var choice = new Object();

CHOICE_TPL = `
<img src="${MEDIA_PATH}/${choice.image}" class="imgButton" onclick="controller.recordAnswer('${choice.label}')"/>
<div class="answ_button" onclick="controller.recordAnswer('${choice.label}')">{1}</div>
`;
