import confetti from 'canvas-confetti';

export function fireConfetti() {
  try {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.65 }
    });
  } catch {
    // Ignore in unsupported environments
  }
}
