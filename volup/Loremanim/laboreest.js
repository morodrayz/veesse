const confetti = require('canvas-confetti');
const canvas = confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true
});

function launchConfetti() {
  canvas({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Call this function when you want to celebrate something.
launchConfetti();
