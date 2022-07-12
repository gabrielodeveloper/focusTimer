import Sound from './sound.js';

const iconLightMode = document.querySelector('.iconLightMode');
const iconDarkMode = document.querySelector('.iconDarkMode');
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const buttonStop = document.querySelector('#stop');
const plusMinutes = document.querySelector('#plusMinutes');
const minusMinutes = document.querySelector('#minusMinutes');

const forest = document.querySelector('#forest');
const rain = document.querySelector('#rain');
const coffeeshop = document.querySelector('#coffeeshop');
const fireplace = document.querySelector('#fireplace');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

let minutes = Number(minutesDisplay.textContent);

let timerTimeout;

let sound = Sound();

function UpdateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes;
  seconds = seconds === undefined ? 0 : seconds;
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function resetTimer() {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  clearTimeout(timerTimeout);
  UpdateDisplay(minutes, 0);
}

function CountDown() {
 timerTimeout = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let isFinished = minutes <= 0 && seconds <= 0;
   
    UpdateDisplay(minutes, 0);
  
    if(isFinished) {
      resetTimer();
      sound.timerEnd.play();
      return
    }

    if(seconds <= 0) {
      seconds = 4;
      --minutes
    }

    UpdateDisplay(minutes, String(seconds - 1));
  
    CountDown();
  }, 1000);
}

function handleAddMinutes() {
  minutesDisplay.textContent = String((++minutes * 5) - 100).padStart(2, '0');
}

function handleRemoveMinutes() {
  minutesDisplay.textContent = String((--minutes * 5) - 100).padStart(2, '0');
}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  CountDown();
});

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');
  clearTimeout(timerTimeout);
});

buttonStop.addEventListener('click', function() {
  resetTimer();
});

plusMinutes.addEventListener('click', function() {
  handleAddMinutes();
});

minusMinutes.addEventListener('click', function() {
  handleRemoveMinutes();
});

forest.addEventListener('click', function() {
  forest.classList.add('active');
  sound.forest.play();

  rain.classList.remove('active');
  sound.rain.pause();

  coffeeshop.classList.remove('active');
  sound.coffeeshop.pause();

  fireplace.classList.remove('active');
  sound.fireplace.pause();
});

rain.addEventListener('click', function() {
  rain.classList.add('active');
  sound.rain.play();
  sound.forest.pause();
  sound.coffeeshop.pause();
  sound.fireplace.pause();
});

coffeeshop.addEventListener('click', function() {
  coffeeshop.classList.add('active');
  sound.coffeeshop.play();
  sound.forest.pause();
  sound.rain.pause();
  sound.fireplace.pause();
});

fireplace.addEventListener('click', function() {
  coffeeshop.classList.add('active');
  sound.fireplace.play();
  sound.forest.pause();
  sound.rain.pause();
  sound.coffeeshop.pause();
})

iconLightMode.addEventListener('click', function() {
  document.body.classList.remove('lightMode');
  document.body.classList.add('darkMode');
  iconLightMode.classList.add('hide');
  iconDarkMode.classList.remove('hide');
});

iconDarkMode.addEventListener('click', function() {
  document.body.classList.add('lightMode');
  document.body.classList.remove('darkMode');
  iconDarkMode.classList.add('hide');
  iconLightMode.classList.remove('hide');
});
