/**
 * Bharat Heritage Quest - Explorer Passport & Progress Tracking System
 * Handles XP points, levels, collectible state stamps, achievements, and certificate generation.
 */

import { sound } from './sound.js';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'bharat_heritage_explorer_progress_v1';

export class ExplorerPassport {
  constructor() {
    this.data = this.loadData();
    this.listeners = [];
  }

  loadData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read localStorage:', e);
    }
    return {
      playerName: 'Brave Explorer',
      xp: 50, // Welcome bonus
      visitedStates: ['mh'], // Maharashtra unlocked as home discovery
      visitedPlaces: [],
      quizzesSolved: 0,
      puzzlesSolved: 0,
      riddlesSolved: 0,
      timelinesSolved: 0,
      earnedBadges: ['first-step'],
      streak: 1,
      lastLoginDate: new Date().toDateString()
    };
  }

  saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    listener(this.data);
  }

  notify() {
    this.listeners.forEach(fn => fn(this.data));
  }

  setPlayerName(name) {
    if (name && name.trim()) {
      this.data.playerName = name.trim();
      this.saveData();
    }
  }

  addXP(amount, reason = '') {
    this.data.xp += amount;
    this.checkBadges();
    this.saveData();
    return this.data.xp;
  }

  visitState(stateId) {
    if (!this.data.visitedStates.includes(stateId)) {
      this.data.visitedStates.push(stateId);
      this.addXP(100, `Visited State: ${stateId.toUpperCase()}`);
      sound.playStamp();
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  }

  visitPlace(placeId) {
    if (!this.data.visitedPlaces.includes(placeId)) {
      this.data.visitedPlaces.push(placeId);
      this.addXP(50, `Explored: ${placeId}`);
      this.checkBadges();
      this.saveData();
    }
  }

  recordQuizSuccess(points = 100) {
    this.data.quizzesSolved += 1;
    this.addXP(points);
    this.checkBadges();
  }

  recordPuzzleSuccess(points = 150) {
    this.data.puzzlesSolved += 1;
    this.addXP(points);
    this.checkBadges();
  }

  recordRiddleSuccess(points = 200) {
    this.data.riddlesSolved += 1;
    this.addXP(points);
    this.checkBadges();
  }

  recordTimelineSuccess(points = 150) {
    this.data.timelinesSolved += 1;
    this.addXP(points);
    this.checkBadges();
  }

  getLevelInfo() {
    const xp = this.data.xp;
    if (xp < 200) {
      return { level: 1, title: 'Village Scout', minXP: 0, nextXP: 200, icon: '🌱' };
    } else if (xp < 500) {
      return { level: 2, title: 'Fort Explorer', minXP: 200, nextXP: 500, icon: '🏰' };
    } else if (xp < 1000) {
      return { level: 3, title: 'Palace Historian', minXP: 500, nextXP: 1000, icon: '👑' };
    } else if (xp < 2000) {
      return { level: 4, title: 'Royal Cartographer', minXP: 1000, nextXP: 2000, icon: '🗺️' };
    } else if (xp < 3500) {
      return { level: 5, title: 'Heritage Guardian', minXP: 2000, nextXP: 3500, icon: '🛡️' };
    } else {
      return { level: 6, title: 'Grand Master of Bharat', minXP: 3500, nextXP: 5000, icon: '⭐' };
    }
  }

  checkBadges() {
    const b = this.data.earnedBadges;
    const p = this.data.visitedPlaces;

    if (!b.includes('first-step')) b.push('first-step');
    if (!b.includes('fort-conqueror') && (p.includes('raigad-fort') || p.includes('amer-fort') || p.includes('shaniwar-wada'))) {
      b.push('fort-conqueror');
    }
    if (!b.includes('cave-detective') && (p.includes('ajanta-caves') || p.includes('ellora-caves'))) {
      b.push('cave-detective');
    }
    if (!b.includes('marble-wonder') && (p.includes('taj-mahal') || p.includes('gateway-of-india'))) {
      b.push('marble-wonder');
    }
    if (!b.includes('quiz-whiz') && this.data.quizzesSolved >= 3) {
      b.push('quiz-whiz');
    }
    if (!b.includes('puzzle-master') && this.data.puzzlesSolved >= 2) {
      b.push('puzzle-master');
    }
    if (!b.includes('detective-eye') && this.data.riddlesSolved >= 2) {
      b.push('detective-eye');
    }
    if (!b.includes('state-voyager') && this.data.visitedStates.length >= 3) {
      b.push('state-voyager');
    }
  }

  getAllBadges() {
    return [
      { id: 'first-step', name: 'First Discovery', desc: 'Started your journey through India', icon: '👣' },
      { id: 'fort-conqueror', name: 'Fort Conqueror', desc: 'Explored historic warrior hill-forts', icon: '🏰' },
      { id: 'cave-detective', name: 'Cave Detective', desc: 'Explored ancient cliff caves of Ajanta & Ellora', icon: '⛰️' },
      { id: 'marble-wonder', name: 'Marble Wonder', desc: 'Discovered the world-famous marble monuments', icon: '💎' },
      { id: 'quiz-whiz', name: 'History Whiz', desc: 'Aced 3 or more monument quizzes', icon: '🧠' },
      { id: 'puzzle-master', name: 'Puzzle Master', desc: 'Assembled 2 or more monument jigsaws', icon: '🧩' },
      { id: 'detective-eye', name: 'Riddle Master', desc: 'Cracked secret riddles from historical clues', icon: '🔎' },
      { id: 'state-voyager', name: 'State Voyager', desc: 'Explored 3 or more Indian states', icon: '🗺️' }
    ];
  }

  // Generates a high-resolution, printable Royal Certificate on HTML5 Canvas
  generateCertificateCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 850;
    const ctx = canvas.getContext('2d');

    // Background Parchment Gradient
    const bgGradient = ctx.createLinearGradient(0, 0, 1200, 850);
    bgGradient.addColorStop(0, '#FFFDF7');
    bgGradient.addColorStop(0.5, '#FFF8E7');
    bgGradient.addColorStop(1, '#FFF2D6');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1200, 850);

    // Ornate Golden Border
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#D97706'; // Warm Amber Gold
    ctx.strokeRect(30, 30, 1140, 790);

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#B45309';
    ctx.strokeRect(45, 45, 1110, 760);

    // Corner Ornaments
    const drawCorner = (x, y) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = '#D97706';
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    drawCorner(50, 50);
    drawCorner(1150, 50);
    drawCorner(50, 800);
    drawCorner(1150, 800);

    // Ashoka Chakra Watermark in Background
    ctx.save();
    ctx.globalAlpha = 0.04;
    ctx.translate(600, 425);
    ctx.beginPath();
    ctx.arc(0, 0, 240, 0, Math.PI * 2);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#1E3A8A';
    ctx.stroke();
    for (let i = 0; i < 24; i++) {
      ctx.rotate((Math.PI * 2) / 24);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -240);
      ctx.stroke();
    }
    ctx.restore();

    // Header Emblem
    ctx.textAlign = 'center';
    ctx.font = '54px serif';
    ctx.fillText('🏛️', 600, 120);

    // Title: CERTIFICATE OF HERITAGE MASTERY
    ctx.fillStyle = '#92400E';
    ctx.font = 'bold 36px "Fredoka", "Outfit", sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('BHARAT HERITAGE QUEST', 600, 180);

    ctx.fillStyle = '#1E1B4B';
    ctx.font = 'bold 44px "Outfit", "Times New Roman", serif';
    ctx.fillText('CERTIFICATE OF EXPLORATION', 600, 240);

    ctx.fillStyle = '#6B7280';
    ctx.font = 'italic 22px Georgia, serif';
    ctx.fillText('This prestigious award is proudly presented to', 600, 310);

    // Child's Name with Highlight Plinth
    ctx.fillStyle = '#B45309';
    ctx.font = 'bold 50px "Fredoka", "Brush Script MT", cursive, sans-serif';
    ctx.fillText(this.data.playerName || 'Brave Explorer', 600, 385);

    // Underline
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(350, 405);
    ctx.lineTo(850, 405);
    ctx.stroke();

    // Achievement text
    const lvl = this.getLevelInfo();
    ctx.fillStyle = '#374151';
    ctx.font = '22px Georgia, serif';
    ctx.fillText(
      `for outstanding historical curiosity, exploring India's monumental wonders,`,
      600,
      460
    );
    ctx.fillText(
      `mastering heritage quizzes, and achieving the distinguished rank of`,
      600,
      500
    );

    // Rank Badge
    ctx.fillStyle = '#1E1B4B';
    ctx.font = 'bold 32px "Fredoka", sans-serif';
    ctx.fillText(`${lvl.icon} ${lvl.title.toUpperCase()} (LEVEL ${lvl.level})`, 600, 560);

    // Stats Bar
    ctx.fillStyle = '#4B5563';
    ctx.font = 'bold 20px "Outfit", sans-serif';
    ctx.fillText(
      `Total XP: ${this.data.xp}  •  States Visited: ${this.data.visitedStates.length}  •  Monuments Discovered: ${this.data.visitedPlaces.length}`,
      600,
      620
    );

    // Seals & Signatures
    ctx.fillStyle = '#92400E';
    ctx.font = '18px "Outfit", sans-serif';
    const dateStr = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    ctx.fillText(`Date: ${dateStr}`, 300, 720);
    ctx.fillText(`Official Seal of Bharat Quest`, 900, 720);

    // Royal Seal Stamp
    ctx.save();
    ctx.translate(900, 660);
    ctx.fillStyle = '#DC2626';
    ctx.beginPath();
    ctx.arc(0, 0, 45, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 28px serif';
    ctx.fillText('🦁', 0, 10);
    ctx.restore();

    return canvas;
  }
}

export const passport = new ExplorerPassport();
