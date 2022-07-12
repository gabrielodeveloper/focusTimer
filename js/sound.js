export default function Sound() {
  const forest = new Audio('../audio/Floresta.wav');
  const rain = new Audio('../audio/Chuva.wav');
  const coffeeshop = new Audio('../audio/Cafeteria.wav');
  const fireplace = new Audio('../audio/Lareira.wav');
  const timerEnd = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true');


  return {
    forest,
    rain,
    coffeeshop,
    fireplace,
    timerEnd
  }
}  

