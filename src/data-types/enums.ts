//* Data Types
// Enums - a way to define a set of named constants.

(() => {
  enum AudioLevel {
    min = 1,
    medium = 5,
    max = 10,
  }

  let currentAudioLevel: AudioLevel = AudioLevel.medium;

  console.log(AudioLevel);
  console.log(`Nivel actual de audio: ${currentAudioLevel}`);
})();
