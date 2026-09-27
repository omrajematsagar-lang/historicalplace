/**
 * Bharat Heritage Quest - Chrono-Timeline Challenge
 * Children arrange monuments in order of history: from Ancient India to the Modern Era.
 */

import { sound } from './sound.js';
import { passport } from './passport.js';
import { historicalPlaces } from '../data/placesData.js';
import confetti from 'canvas-confetti';

export class TimelineGame {
  constructor(containerEl) {
    this.container = containerEl;
    this.monuments = [];
    this.userOrder = [];
    this.isSubmitted = false;
    this.onCompleteCallback = null;
  }

  start() {
    this.isSubmitted = false;
    // Pick 4 monuments with clear chronological eras:
    // e.g. Sanchi (Ancient), Brihadisvara/Ellora (Medieval), Taj Mahal/Raigad (Medieval-Late), Gateway of India (Modern)
    const candidates = [
      historicalPlaces.find(p => p.id === 'sanchi-stupa'),
      historicalPlaces.find(p => p.id === 'ajanta-caves'),
      historicalPlaces.find(p => p.id === 'brihadisvara-temple'),
      historicalPlaces.find(p => p.id === 'taj-mahal'),
      historicalPlaces.find(p => p.id === 'raigad-fort'),
      historicalPlaces.find(p => p.id === 'gateway-of-india')
    ].filter(Boolean);

    // Pick 4 distinct
    this.monuments = candidates.sort(() => Math.random() - 0.5).slice(0, 4);

    // Sort chronologically to get correct sequence
    const getYearNum = (str) => {
      if (str.includes('BCE')) {
        const n = parseInt(str.replace(/\D/g, ''), 10) || 300;
        return -n;
      }
      const n = parseInt(str.replace(/\D/g, ''), 10) || 1000;
      return n;
    };

    this.correctOrder = [...this.monuments].sort((a, b) => getYearNum(a.year) - getYearNum(b.year));

    // Scramble user order initially
    this.userOrder = [...this.monuments].sort(() => Math.random() - 0.5);

    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="timeline-game-card animate-fade-in">
        <div class="timeline-header">
          <div class="timeline-tag">⏳ Time Machine Challenge</div>
          <h2>Arrange Monuments from Oldest to Newest!</h2>
          <p>Drag or use the ⬆️ ⬇️ arrows to re-order the historical places in chronological sequence.</p>
        </div>

        <div class="timeline-slots-container" id="timelineSlots">
          ${this.userOrder.map((m, idx) => `
            <div class="timeline-item-card" data-index="${idx}">
              <div class="order-badge">${idx + 1}</div>
              <img src="${m.heroImage}" alt="${m.name}" class="item-thumb" />
              <div class="item-info">
                <h4>${m.name}</h4>
                <div class="item-meta">${m.stateName} • ${m.dynasty}</div>
                ${this.isSubmitted ? `<div class="item-year-reveal">Built: <b>${m.year}</b> (${m.era} Era)</div>` : ''}
              </div>
              ${!this.isSubmitted ? `
                <div class="order-arrows">
                  <button class="arrow-btn move-up" data-idx="${idx}" ${idx === 0 ? 'disabled' : ''}>⬆️</button>
                  <button class="arrow-btn move-down" data-idx="${idx}" ${idx === this.userOrder.length - 1 ? 'disabled' : ''}>⬇️</button>
                </div>
              ` : `
                <div class="result-check">
                  ${m.id === this.correctOrder[idx].id ? '✅ Correct!' : '❌ Missed'}
                </div>
              `}
            </div>
          `).join('')}
        </div>

        <div class="timeline-actions">
          ${!this.isSubmitted ? `
            <button class="btn btn-primary" id="submitTimelineBtn">Verify Time Machine 🚀</button>
          ` : `
            <button class="btn btn-primary" id="playAgainTimelineBtn">Play Again 🔄</button>
            <button class="btn btn-secondary" id="backMapTimelineBtn">Return to Map 🗺️</button>
          `}
        </div>
      </div>
    `;

    // Hook up move buttons
    if (!this.isSubmitted) {
      const upBtns = this.container.querySelectorAll('.move-up');
      const downBtns = this.container.querySelectorAll('.move-down');

      upBtns.forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.idx, 10);
          if (idx > 0) {
            sound.playSlide();
            [this.userOrder[idx], this.userOrder[idx - 1]] = [this.userOrder[idx - 1], this.userOrder[idx]];
            this.render();
          }
        };
      });

      downBtns.forEach(btn => {
        btn.onclick = () => {
          const idx = parseInt(btn.dataset.idx, 10);
          if (idx < this.userOrder.length - 1) {
            sound.playSlide();
            [this.userOrder[idx], this.userOrder[idx + 1]] = [this.userOrder[idx + 1], this.userOrder[idx]];
            this.render();
          }
        };
      });

      const submitBtn = this.container.querySelector('#submitTimelineBtn');
      submitBtn.onclick = () => this.checkOrder();
    } else {
      const playAgainBtn = this.container.querySelector('#playAgainTimelineBtn');
      if (playAgainBtn) playAgainBtn.onclick = () => {
        sound.playClick();
        this.start();
      };

      const backBtn = this.container.querySelector('#backMapTimelineBtn');
      if (backBtn) backBtn.onclick = () => {
        sound.playClick();
        if (this.onCompleteCallback) this.onCompleteCallback();
      };
    }
  }

  checkOrder() {
    this.isSubmitted = true;
    let correctCount = 0;
    this.userOrder.forEach((m, idx) => {
      if (m.id === this.correctOrder[idx].id) {
        correctCount++;
      }
    });

    if (correctCount === this.correctOrder.length) {
      sound.playFanfare();
      passport.recordTimelineSuccess(150);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    } else {
      sound.playChime();
      passport.addXP(correctCount * 30, 'Partial Timeline Success');
    }

    this.render();
  }
}
