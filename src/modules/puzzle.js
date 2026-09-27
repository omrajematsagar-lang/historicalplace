/**
 * Bharat Heritage Quest - Monument Jigsaw / Tile Puzzle
 * Children reconstruct historic monuments by sliding/swapping puzzle tiles.
 */

import { sound } from './sound.js';
import { passport } from './passport.js';
import confetti from 'canvas-confetti';

export class PuzzleGame {
  constructor(containerEl) {
    this.container = containerEl;
    this.gridSize = 3; // 3x3 = 9 pieces
    this.tiles = [];
    this.moves = 0;
    this.timer = 0;
    this.timerInterval = null;
    this.isSolved = false;
    this.selectedTileIndex = null;
    this.currentPlace = null;
  }

  start(place) {
    this.currentPlace = place;
    this.moves = 0;
    this.timer = 0;
    this.isSolved = false;
    this.selectedTileIndex = null;

    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (!this.isSolved) {
        this.timer++;
        const timerEl = this.container.querySelector('#puzzleTimer');
        if (timerEl) {
          const mins = Math.floor(this.timer / 60).toString().padStart(2, '0');
          const secs = (this.timer % 60).toString().padStart(2, '0');
          timerEl.textContent = `${mins}:${secs}`;
        }
      }
    }, 1000);

    // Initial solved order: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    this.tiles = Array.from({ length: 9 }, (_, i) => i);
    // Shuffle tiles ensuring solvable permutation
    this.shuffleTiles();

    this.render();
  }

  shuffleTiles() {
    for (let i = this.tiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.tiles[i], this.tiles[j]] = [this.tiles[j], this.tiles[i]];
    }
    // If it accidentally ends up solved, swap first two
    if (this.checkSolved()) {
      [this.tiles[0], this.tiles[1]] = [this.tiles[1], this.tiles[0]];
    }
  }

  checkSolved() {
    return this.tiles.every((val, idx) => val === idx);
  }

  render() {
    const p = this.currentPlace;
    const imageUrl = p.heroImage;

    this.container.innerHTML = `
      <div class="puzzle-wrapper animate-fade-in">
        <div class="puzzle-header">
          <div class="puzzle-meta">
            <h3>🧩 Monument Puzzle: ${p.name}</h3>
            <p>${p.tagline || 'Reconstruct this historic wonder!'}</p>
          </div>
          <div class="puzzle-stats">
            <span class="stat-badge">⏱️ <b id="puzzleTimer">00:00</b></span>
            <span class="stat-badge">🔄 Moves: <b id="puzzleMoves">${this.moves}</b></span>
            <button class="btn btn-secondary btn-sm" id="toggleGuideBtn">👁️ Show Guide</button>
          </div>
        </div>

        <div class="puzzle-main-stage">
          <div class="puzzle-board" id="puzzleBoard">
            ${this.tiles.map((tileNum, slotIdx) => {
              const row = Math.floor(tileNum / 3);
              const col = tileNum % 3;
              // Background position percentage for 3x3: 0%, 50%, 100%
              const bgX = (col * 50);
              const bgY = (row * 50);

              return `
                <div class="puzzle-tile" 
                     data-slot="${slotIdx}" 
                     data-tile="${tileNum}"
                     style="background-image: url('${imageUrl}'); background-position: ${bgX}% ${bgY}%;"
                     tabindex="0">
                  <span class="tile-number">${tileNum + 1}</span>
                </div>
              `;
            }).join('')}
          </div>

          <div class="puzzle-reference-card hidden" id="puzzleReferenceCard">
            <div class="guide-header">Original Image Guide</div>
            <img src="${imageUrl}" alt="${p.name}" class="guide-img" />
          </div>
        </div>

        <div class="puzzle-instructions">
          💡 <b>How to Play:</b> Click any piece to select it, then click another piece to swap them into the right order!
        </div>

        <div class="puzzle-win-overlay hidden" id="puzzleWinOverlay">
          <div class="win-card animate-bounce-in">
            <div class="win-emoji">🎉</div>
            <h2>Puzzle Assembled!</h2>
            <p>You restored the grandeur of <b>${p.name}</b>!</p>
            <div class="reward-pill">+150 Explorer XP 🏆</div>
            <div class="win-stats">
              <span>Time: ${Math.floor(this.timer / 60)}m ${this.timer % 60}s</span> • 
              <span>Moves: ${this.moves}</span>
            </div>
            <button class="btn btn-primary" id="puzzleWinContinueBtn">Awesome! Continue ➡️</button>
          </div>
        </div>
      </div>
    `;

    // Attach event listeners
    const tilesEl = this.container.querySelectorAll('.puzzle-tile');
    tilesEl.forEach(tileEl => {
      tileEl.addEventListener('click', () => {
        const slot = parseInt(tileEl.dataset.slot, 10);
        this.handleTileClick(slot);
      });
    });

    const guideBtn = this.container.querySelector('#toggleGuideBtn');
    const guideCard = this.container.querySelector('#puzzleReferenceCard');
    guideBtn.onclick = () => {
      sound.playClick();
      guideCard.classList.toggle('hidden');
      guideBtn.textContent = guideCard.classList.contains('hidden') ? '👁️ Show Guide' : '🙈 Hide Guide';
    };

    const continueBtn = this.container.querySelector('#puzzleWinContinueBtn');
    if (continueBtn) {
      continueBtn.onclick = () => {
        sound.playClick();
        if (this.onCompleteCallback) this.onCompleteCallback();
      };
    }
  }

  handleTileClick(slotIdx) {
    if (this.isSolved) return;

    if (this.selectedTileIndex === null) {
      // First selection
      this.selectedTileIndex = slotIdx;
      sound.playClick();
      const currentSelected = this.container.querySelector(`[data-slot="${slotIdx}"]`);
      if (currentSelected) currentSelected.classList.add('selected');
    } else {
      // Second selection -> Swap!
      const slot1 = this.selectedTileIndex;
      const slot2 = slotIdx;
      this.selectedTileIndex = null;

      if (slot1 !== slot2) {
        sound.playSlide();
        [this.tiles[slot1], this.tiles[slot2]] = [this.tiles[slot2], this.tiles[slot1]];
        this.moves++;
        const movesEl = this.container.querySelector('#puzzleMoves');
        if (movesEl) movesEl.textContent = this.moves;

        // Check if solved
        if (this.checkSolved()) {
          this.handleSolved();
        } else {
          this.renderBoardOnly();
        }
      } else {
        const currentSelected = this.container.querySelector(`[data-slot="${slot1}"]`);
        if (currentSelected) currentSelected.classList.remove('selected');
      }
    }
  }

  renderBoardOnly() {
    const board = this.container.querySelector('#puzzleBoard');
    if (!board) return;
    const imageUrl = this.currentPlace.heroImage;

    board.innerHTML = this.tiles.map((tileNum, slotIdx) => {
      const row = Math.floor(tileNum / 3);
      const col = tileNum % 3;
      const bgX = (col * 50);
      const bgY = (row * 50);

      return `
        <div class="puzzle-tile" 
             data-slot="${slotIdx}" 
             data-tile="${tileNum}"
             style="background-image: url('${imageUrl}'); background-position: ${bgX}% ${bgY}%;"
             tabindex="0">
          <span class="tile-number">${tileNum + 1}</span>
        </div>
      `;
    }).join('');

    const tilesEl = board.querySelectorAll('.puzzle-tile');
    tilesEl.forEach(tileEl => {
      tileEl.addEventListener('click', () => {
        const slot = parseInt(tileEl.dataset.slot, 10);
        this.handleTileClick(slot);
      });
    });
  }

  handleSolved() {
    this.isSolved = true;
    if (this.timerInterval) clearInterval(this.timerInterval);
    sound.playFanfare();
    passport.recordPuzzleSuccess(150);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    const overlay = this.container.querySelector('#puzzleWinOverlay');
    if (overlay) {
      overlay.classList.remove('hidden');
    }
  }

  stop() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }
}
