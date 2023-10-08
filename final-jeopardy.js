// Imports 'play-sound' and creates new instance of Player class
const Player = require('play-sound');
const player = new Player();

// Path to sound file
const jeopardy = './final-jeopardy.wav';

// Play audio file using 'player' instance
player.play(jeopardy, (err) => {
  if (err) {
    console.error('Error playing song:', err);
  } else {
    console.log('Enjoy the loading music!');
  }
});