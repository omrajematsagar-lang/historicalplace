/**
 * Bharat Heritage Quest - Riddle Detective (Question-Answer Activity)
 * Children guess the monument based on progressive historical mystery clues.
 */

import { sound } from './sound.js';
import { passport } from './passport.js';
import { historicalPlaces } from '../data/placesData.js';
import confetti from 'canvas-confetti';

export class RiddleGame {
  constructor(containerEl) {
    this.container = containerEl;
    this.places = [];
    this.currentIndex = 0;
    this.revealedClues = 1;
    this.score = 0;
    this.isAnswered = false;
    this.onCompleteCallback = null;
  }

  start() {
    // Pick 5 random places with riddles
    const shuffled = [...historicalPlaces].sort(() => Math.random() - 0.5).slice(0, 5);
    this.places = shuffled;
    this.currentIndex = 0;
    this.score = 0;
    this.renderRound();
  }

  renderRound() {
    if (this.currentIndex >= this.places.length) {
      this.renderSummary();
      return;
    }

    const currentPlace = this.places[this.currentIndex];
    this.revealedClues = 1;
    this.isAnswered = false;

    // Generate 4 choices (1 correct, 3 decoys)
    const decoys = historicalPlaces
      .filter(p => p.id !== currentPlace.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const options = [currentPlace, ...decoys].sort(() => Math.random() - 0.5);

    this.container.innerHTML = `
      <div class="riddle-card animate-fade-in">
        <div class="riddle-header">
          <div class="badge-row">
            <span class="badge-tag">🔎 Mystery Case #${this.currentIndex + 1} of ${this.places.length}</span>
            <span class="badge-score">Score: +${this.score} XP</span>
          </div>
          <h2>Can you identify this historic wonder?</h2>
          <p>The earlier you guess correctly, the more Explorer XP you earn!</p>
        </div>

        <div class="clues-container" id="cluesContainer">
          ${currentPlace.riddles.map((r, idx) => `
            <div class="clue-box ${idx === 0 ? 'revealed' : 'locked'}" id="clueBox_${idx}">
              <div class="clue-tag">
                <span class="clue-icon">${idx === 0 ? '🔓' : '🔒'}</span>
                <span>Clue #${idx + 1} (${r.points} XP)</span>
              </div>
              <div class="clue-text">${idx === 0 ? r.clue : 'Locked! Reveal this clue if you need more help.'}</div>
            </div>
          `).join('')}
        </div>

        <div class="clue-actions">
          <button class="btn btn-secondary btn-sm" id="revealNextClueBtn">
            💡 Need a Hint? Reveal Clue #${this.revealedClues + 1}
          </button>
        </div>

        <div class="riddle-choices-section">
          <h4>Select your answer:</h4>
          <div class="riddle-options-grid" id="riddleOptionsGrid">
            ${options.map((opt, idx) => `
              <button class="riddle-opt-btn" data-place-id="${opt.id}">
                <span class="opt-bullet">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-label">${opt.name} (${opt.stateName})</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="riddle-feedback-box hidden" id="riddleFeedbackBox">
          <div class="feedback-content" id="riddleFeedbackContent"></div>
          <button class="btn btn-primary" id="riddleNextBtn">
            ${this.currentIndex === this.places.length - 1 ? 'See Detective Score 🏆' : 'Next Mystery ➡️'}
          </button>
        </div>
      </div>
    `;

    // Hook up Reveal Clue Button
    const revealBtn = this.container.querySelector('#revealNextClueBtn');
    revealBtn.onclick = () => {
      sound.playClick();
      if (this.revealedClues < currentPlace.riddles.length) {
        const nextBox = this.container.querySelector(`#clueBox_${this.revealedClues}`);
        if (nextBox) {
          nextBox.classList.remove('locked');
          nextBox.classList.add('revealed');
          nextBox.querySelector('.clue-icon').textContent = '🔓';
          nextBox.querySelector('.clue-text').textContent = currentPlace.riddles[this.revealedClues].clue;
        }
        this.revealedClues++;
        if (this.revealedClues >= currentPlace.riddles.length) {
          revealBtn.disabled = true;
          revealBtn.textContent = 'All Clues Revealed';
        } else {
          revealBtn.textContent = `💡 Need a Hint? Reveal Clue #${this.revealedClues + 1}`;
        }
      }
    };

    // Hook up option buttons
    const optBtns = this.container.querySelectorAll('.riddle-opt-btn');
    optBtns.forEach(btn => {
      btn.onclick = () => {
        this.handleAnswer(btn.dataset.placeId, currentPlace);
      };
    });
  }

  handleAnswer(selectedId, correctPlace) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const isCorrect = (selectedId === correctPlace.id);
    const optBtns = this.container.querySelectorAll('.riddle-opt-btn');
    optBtns.forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.placeId === correctPlace.id) {
        btn.classList.add('correct');
      } else if (btn.dataset.placeId === selectedId) {
        btn.classList.add('wrong');
      }
    });

    const feedbackBox = this.container.querySelector('#riddleFeedbackBox');
    const feedbackContent = this.container.querySelector('#riddleFeedbackContent');
    const nextBtn = this.container.querySelector('#riddleNextBtn');

    if (isCorrect) {
      sound.playChime();
      // Points based on how few clues were revealed:
      // 1 clue = 300 pts, 2 clues = 200 pts, 3 clues = 100 pts
      const pts = (this.revealedClues === 1) ? 300 : (this.revealedClues === 2 ? 200 : 100);
      this.score += pts;

      feedbackContent.innerHTML = `
        <div class="result-title text-success">🎉 Brilliant Detective Work! (+${pts} XP)</div>
        <p>You correctly deduced: <b>${correctPlace.name}</b> in ${correctPlace.stateName}!</p>
        <p class="result-extra">${correctPlace.shortStory.slice(0, 140)}...</p>
      `;

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    } else {
      sound.playBuzzer();
      feedbackContent.innerHTML = `
        <div class="result-title text-warning">🧐 Not quite!</div>
        <p>The mystery place was actually <b>${correctPlace.name}</b> (${correctPlace.stateName}).</p>
        <p class="result-extra">${correctPlace.shortStory.slice(0, 140)}...</p>
      `;
    }

    feedbackBox.classList.remove('hidden');

    nextBtn.onclick = () => {
      sound.playClick();
      this.currentIndex++;
      this.renderRound();
    };
  }

  renderSummary() {
    sound.playFanfare();
    passport.recordRiddleSuccess(this.score);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 }
      });
    } catch (e) {}

    this.container.innerHTML = `
      <div class="riddle-summary-card animate-bounce-in">
        <div class="summary-emoji">🕵️‍♂️</div>
        <h2>Investigation Complete!</h2>
        <p>Your keen historical eye solved the mystery riddles!</p>
        <div class="score-banner">+${this.score} Explorer XP Awarded 🏆</div>
        <div class="summary-actions">
          <button class="btn btn-primary" id="riddleAgainBtn">🔄 Solve New Riddles</button>
          <button class="btn btn-secondary" id="riddleBackBtn">🗺️ Return to Map</button>
        </div>
      </div>
    `;

    this.container.querySelector('#riddleAgainBtn').onclick = () => {
      sound.playClick();
      this.start();
    };
    this.container.querySelector('#riddleBackBtn').onclick = () => {
      sound.playClick();
      if (this.onCompleteCallback) this.onCompleteCallback();
    };
  }
}
