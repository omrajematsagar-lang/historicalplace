/**
 * Bharat Heritage Quest - Kids Speech Synthesizer & Story Narrator
 * Uses Web SpeechSynthesis to narrate monument tales to children.
 */

class StoryNarrator {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.selectedVoice = null;
    this.isSpeaking = false;
    this.currentUtterance = null;
    this.onStatusChange = null;

    if (this.synth) {
      this.loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
    // Prioritize natural Indian English or friendly English voices
    this.selectedVoice = 
      this.voices.find(v => v.lang === 'en-IN') ||
      this.voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Zira') || v.name.includes('Rishi'))) ||
      this.voices.find(v => v.lang.startsWith('en')) ||
      this.voices[0];
  }

  speak(text, onStart, onEnd, onWord) {
    if (!this.synth) return false;
    this.stop(); // Stop any active speech

    if (!text) return false;

    // Clean text of markdown brackets or unwanted symbols
    const cleanText = text.replace(/[*_#`~]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.rate = 0.95; // Slightly slower, clear and friendly for kids
    utterance.pitch = 1.05; // Cheerful, warm tone

    utterance.onstart = () => {
      this.isSpeaking = true;
      if (onStart) onStart();
      if (this.onStatusChange) this.onStatusChange(true);
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
      if (this.onStatusChange) this.onStatusChange(false);
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      this.isSpeaking = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
      if (this.onStatusChange) this.onStatusChange(false);
    };

    if (onWord) {
      utterance.onboundary = (event) => {
        if (event.name === 'word') {
          onWord(event.charIndex, event.charLength);
        }
      };
    }

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
    return true;
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.currentUtterance = null;
    if (this.onStatusChange) this.onStatusChange(false);
  }
}

export const narrator = new StoryNarrator();
