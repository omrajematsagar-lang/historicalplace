/**
 * Bharat Heritage Quest - Sound Effects & Audio Synthesizer
 * Built entirely with Web Audio API for 100% offline, zero-latency, reliable sound.
 */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isAmbientPlaying = false;
    this.ambientGainNode = null;
    this.ambientOscillators = [];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.isAmbientPlaying) {
      this.stopAmbient();
    }
    return this.isMuted;
  }

  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  playChime() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Sweet pentatonic chime (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const noteTime = now + idx * 0.08;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0, noteTime);
      gain.gain.linearRampToValueAtTime(0.25, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.65);
    });
  }

  playBuzzer() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.linearRampToValueAtTime(120, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Celebratory victory trumpet arpeggio: C4, G4, C5, E5, G5
    const fanfareNotes = [
      { f: 261.63, t: 0, d: 0.12 },
      { f: 392.00, t: 0.12, d: 0.12 },
      { f: 523.25, t: 0.24, d: 0.12 },
      { f: 659.25, t: 0.36, d: 0.15 },
      { f: 783.99, t: 0.51, d: 0.45 }
    ];

    const now = this.ctx.currentTime;
    fanfareNotes.forEach(({ f, t, d }) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const start = now + t;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, start);

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.3, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, start + d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(start);
      osc.stop(start + d + 0.05);
    });
  }

  playStamp() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    // Heavy passport stamp thud
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.15);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.18);
  }

  playSlide() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.linearRampToValueAtTime(650, now + 0.08);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  toggleAmbient() {
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  startAmbient() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    if (this.isAmbientPlaying) return;

    this.stopAmbient(); // Clean up if any
    this.isAmbientPlaying = true;

    // Soothing Indian classical Tanpura drone (Sa - Pa - Sa' - Sa'')
    // Frequencies: 130.81 (C3), 196.00 (G3), 261.63 (C4)
    const droneFreqs = [130.81, 196.00, 261.63, 131.2]; // Slight detuning for rich natural acoustic beating
    this.ambientGainNode = this.ctx.createGain();
    this.ambientGainNode.gain.setValueAtTime(0.05, this.ctx.currentTime);
    this.ambientGainNode.connect(this.ctx.destination);

    this.ambientOscillators = droneFreqs.map(f => {
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime);
      osc.connect(this.ambientGainNode);
      osc.start();
      return osc;
    });
  }

  stopAmbient() {
    if (this.ambientOscillators && this.ambientOscillators.length > 0) {
      this.ambientOscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {}
      });
      this.ambientOscillators = [];
    }
    if (this.ambientGainNode) {
      try {
        this.ambientGainNode.disconnect();
      } catch (e) {}
      this.ambientGainNode = null;
    }
    this.isAmbientPlaying = false;
  }
}

export const sound = new SoundSystem();
