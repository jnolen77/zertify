export function speak(text: string) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE"; // German
  utterance.rate = 0.95; // Slightly slower for clarity
  speechSynthesis.speak(utterance);
}
