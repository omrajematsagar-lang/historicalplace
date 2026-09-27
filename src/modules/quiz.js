/**
 * Bharat Heritage Quest - MCQ Quiz Arena
 * Gamified quiz engine with instant feedback, streak multipliers, sound effects, and confetti celebrations.
 */

import { sound } from './sound.js';
import { passport } from './passport.js';
import { getAllQuizzes, getPlacesByState } from '../data/placesData.js';
import confetti from 'canvas-confetti';

export class QuizGame {
  constructor(containerEl) {
    this.container = containerEl;
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.selectedOption = null;
    this.isAnswered = false;
    this.onCompleteCallback = null;
  }

  startStateQuiz(stateId, stateName) {
    const places = getPlacesByState(stateId);
    let qs = [];
    places.forEach(p => {
      p.quizQuestions.forEach((q, idx) => {
        qs.push({
          ...q,
          placeName: p.name,
          stateName: p.stateName,
          heroImage: p.heroImage
        });
      });
    });

    if (qs.length === 0) {
      qs = getAllQuizzes().slice(0, 5);
    }
    this.start(qs, `${stateName} Heritage Quiz`);
  }

  startGrandQuiz() {
    const all = getAllQuizzes();
    // Shuffle and pick 6-8 questions
    const shuffled = [...all].sort(() => Math.random() - 0.5).slice(0, 8);
    this.start(shuffled, 'Grand Bharat Heritage Quiz');
  }

  start(questionsList, title = 'Heritage Quiz') {
    this.title = title;
    this.questions = questionsList;
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.selectedOption = null;
    this.isAnswered = false;
    this.renderQuestion();
  }

  renderQuestion() {
    if (this.currentIndex >= this.questions.length) {
      this.renderSummary();
      return;
    }

    const q = this.questions[this.currentIndex];
    this.isAnswered = false;
    this.selectedOption = null;

    const progressPercent = Math.round(((this.currentIndex) / this.questions.length) * 100);

    this.container.innerHTML = `
      <div class="quiz-card animate-fade-in">
        <div class="quiz-header">
          <div class="quiz-badge-row">
            <span class="quiz-title-badge">🎯 ${this.title}</span>
            <span class="quiz-step-badge">Question ${this.currentIndex + 1} of ${this.questions.length}</span>
            ${this.streak > 1 ? `<span class="quiz-streak-badge pulse">🔥 ${this.streak}x Combo!</span>` : ''}
          </div>
          <div class="quiz-progress-bar-bg">
            <div class="quiz-progress-bar-fill" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <div class="quiz-body">
          <div class="quiz-topic-tag">📍 ${q.placeName || 'India Heritage'} • ${q.stateName || 'Bharat'}</div>
          <h3 class="quiz-question-text">${q.question}</h3>

          <div class="quiz-options-grid" id="quizOptionsGrid">
            ${q.options.map((opt, idx) => `
              <button class="quiz-opt-btn" data-index="${idx}" id="quizOpt_${idx}">
                <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-text">${opt}</span>
              </button>
            `).join('')}
          </div>

          <div class="quiz-feedback-box hidden" id="quizFeedbackBox">
            <div class="feedback-title" id="feedbackTitle"></div>
            <div class="feedback-desc" id="feedbackDesc"></div>
            <button class="btn btn-primary" id="quizNextBtn">
              ${this.currentIndex === this.questions.length - 1 ? 'See Your Results 🏆' : 'Next Question ➡️'}
            </button>
          </div>
        </div>
      </div>
    `;

    // Attach click listeners to options
    const optionBtns = this.container.querySelectorAll('.quiz-opt-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        this.selectAnswer(idx);
      });
    });
  }

  selectAnswer(selectedIdx) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.selectedOption = selectedIdx;

    const q = this.questions[this.currentIndex];
    const isCorrect = (selectedIdx === q.correct);

    const optionBtns = this.container.querySelectorAll('.quiz-opt-btn');
    optionBtns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('wrong');
      }
    });

    const feedbackBox = this.container.querySelector('#quizFeedbackBox');
    const feedbackTitle = this.container.querySelector('#feedbackTitle');
    const feedbackDesc = this.container.querySelector('#feedbackDesc');
    const nextBtn = this.container.querySelector('#quizNextBtn');

    if (isCorrect) {
      sound.playChime();
      this.streak += 1;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      const pts = 50 + (this.streak > 1 ? (this.streak - 1) * 20 : 0);
      this.score += pts;

      feedbackTitle.innerHTML = `<span class="icon">🎉</span> Awesome! That is Correct! (+${pts} XP)`;
      feedbackTitle.className = 'feedback-title text-success';

      try {
        confetti({
          particleCount: 40,
          spread: 55,
          origin: { y: 0.65 }
        });
      } catch (e) {}
    } else {
      sound.playBuzzer();
      this.streak = 0;
      feedbackTitle.innerHTML = `<span class="icon">💡</span> Good try! Learn from this:`;
      feedbackTitle.className = 'feedback-title text-warning';
    }

    feedbackDesc.textContent = q.explanation || 'Great effort! Keep exploring to discover more history.';
    feedbackBox.classList.remove('hidden');

    nextBtn.onclick = () => {
      sound.playClick();
      this.currentIndex += 1;
      this.renderQuestion();
    };
  }

  renderSummary() {
    sound.playFanfare();
    const totalXP = this.score;
    passport.recordQuizSuccess(totalXP);

    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (e) {}

    const accuracy = Math.round((this.score / (this.questions.length * 50)) * 100);

    this.container.innerHTML = `
      <div class="quiz-summary-card animate-bounce-in">
        <div class="summary-trophy">🏆</div>
        <h2>Quiz Completed!</h2>
        <p class="summary-subtitle">You showed great curiosity for Indian history!</p>

        <div class="summary-stats-grid">
          <div class="stat-pill">
            <span class="label">Total XP Earned</span>
            <span class="value text-amber">+${totalXP} XP</span>
          </div>
          <div class="stat-pill">
            <span class="label">Best Combo Streak</span>
            <span class="value text-orange">${this.maxStreak} 🔥</span>
          </div>
          <div class="stat-pill">
            <span class="label">Questions</span>
            <span class="value">${this.questions.length}</span>
          </div>
        </div>

        <div class="summary-actions">
          <button class="btn btn-primary" id="playAgainBtn">🔄 Play Again</button>
          <button class="btn btn-secondary" id="backToMapBtn">🗺️ Return to Map</button>
        </div>
      </div>
    `;

    this.container.querySelector('#playAgainBtn').onclick = () => {
      sound.playClick();
      this.start(this.questions, this.title);
    };

    this.container.querySelector('#backToMapBtn').onclick = () => {
      sound.playClick();
      if (this.onCompleteCallback) this.onCompleteCallback();
    };
  }
}
