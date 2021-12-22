var drumArr = document.querySelectorAll(".drum");

/* Add listeners */

document.addEventListener("keydown", charType);

for (const drum of drumArr) {
  drum.addEventListener("click", mouseClick);
}

/* Call back functions */

/**
 * The mouse click does not rely on the actual 'event' triggered
 * because the listeners are added to individual buttons
 */
function mouseClick() {
  var msg = this.innerHTML;
  selectAudioToPlay(msg);
  buttonAnimation(msg);
}

/**
 * The keypress does rely on the actual event -
 * we need to know which key got pressed!
 * @param {*} event
 */
function charType(event) {
  var msg = event.key;
  selectAudioToPlay(msg);
  buttonAnimation(msg);
}

/* Helper functions */

function playAudio(audioURL) {
  var audio = new Audio(audioURL);
  audio.play();
}

function selectAudioToPlay(msg) {
  switch (msg) {
    case "w":
      playAudio("sounds/tom-1.mp3");
      break;
    case "a":
      playAudio("sounds/tom-2.mp3");
      break;
    case "s":
      playAudio("sounds/tom-3.mp3");
      break;
    case "d":
      playAudio("sounds/tom-4.mp3");
      break;
    case "j":
      playAudio("sounds/snare.mp3");
      break;
    case "k":
      playAudio("sounds/crash.mp3");
      break;
    case "l":
      playAudio("sounds/kick-bass.mp3");
      break;
  }
}

function buttonAnimation(btnClass) {
  var activeBtn = document.querySelector("." + btnClass);
  activeBtn.classList.add("pressed");
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100); /* time out in milliseconds */
}
