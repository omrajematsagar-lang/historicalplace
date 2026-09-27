/**
 * Bharat Heritage Quest - Main Application Controller
 * Wires together the interactive map, state explorer, multimedia modals, quizzes, puzzles, and passport.
 */

import { statesData } from './data/mapData.js';
import { historicalPlaces, getPlacesByState, getPlaceById } from './data/placesData.js';
import { IndiaMap } from './modules/map.js';
import { sound } from './modules/sound.js';
import { narrator } from './modules/speech.js';
import { passport } from './modules/passport.js';
import { QuizGame } from './modules/quiz.js';
import { PuzzleGame } from './modules/puzzle.js';
import { RiddleGame } from './modules/riddle.js';
import { TimelineGame } from './modules/timeline.js';

class App {
  constructor() {
    this.currentView = 'map'; // 'map', 'monuments', 'quiz', 'puzzle', 'riddle', 'timeline', 'passport'
    this.selectedState = null;
    this.selectedPlace = null;

    this.initDOM();
    this.initMap();
    this.initGames();
    this.initPassportSubscriber();
    this.initNavigation();
    this.initSearch();
    this.initAudioToggles();

    // Default selection: Maharashtra as highlighted in user request!
    setTimeout(() => {
      this.map.selectState('mh', false);
    }, 400);
  }

  initDOM() {
    // Top Bar Stats
    this.playerXpEl = document.getElementById('topPlayerXp');
    this.playerLevelEl = document.getElementById('topPlayerLevel');
    this.playerLevelIconEl = document.getElementById('topPlayerLevelIcon');

    // Main View Sections
    this.mapViewEl = document.getElementById('mapViewSection');
    this.activitiesViewEl = document.getElementById('activitiesViewSection');
    this.monumentModal = document.getElementById('monumentDetailModal');
    this.passportModal = document.getElementById('passportModal');
    this.certificateModal = document.getElementById('certificateModal');

    // State Hub Drawer
    this.stateDrawer = document.getElementById('stateExplorerDrawer');
    this.stateDrawerTitle = document.getElementById('drawerStateName');
    this.stateDrawerTagline = document.getElementById('drawerStateTagline');
    this.stateDrawerCapital = document.getElementById('drawerStateCapital');
    this.statePlacesList = document.getElementById('drawerPlacesList');
    this.stateQuizBtn = document.getElementById('drawerStateQuizBtn');
  }

  initMap() {
    const mapContainer = document.getElementById('mapContainer');
    this.map = new IndiaMap(
      mapContainer,
      (state, places) => this.handleStateSelected(state, places),
      (place) => this.openMonumentModal(place)
    );
  }

  initGames() {
    const activityContainer = document.getElementById('activityGameContainer');
    this.quizGame = new QuizGame(activityContainer);
    this.puzzleGame = new PuzzleGame(activityContainer);
    this.riddleGame = new RiddleGame(activityContainer);
    this.timelineGame = new TimelineGame(activityContainer);

    // On complete callbacks to return to map
    const returnToMap = () => {
      this.switchView('map');
    };
    this.quizGame.onCompleteCallback = returnToMap;
    this.puzzleGame.onCompleteCallback = returnToMap;
    this.riddleGame.onCompleteCallback = returnToMap;
    this.timelineGame.onCompleteCallback = returnToMap;
  }

  initPassportSubscriber() {
    passport.subscribe((data) => {
      const lvl = passport.getLevelInfo();
      if (this.playerXpEl) this.playerXpEl.textContent = `${data.xp} XP`;
      if (this.playerLevelEl) this.playerLevelEl.textContent = lvl.title;
      if (this.playerLevelIconEl) this.playerLevelIconEl.textContent = lvl.icon;

      this.updatePassportUI(data, lvl);
    });
  }

  initNavigation() {
    const navBtns = document.querySelectorAll('.nav-tab-btn');
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        const view = btn.dataset.view;
        this.switchView(view);
      });
    });

    // Close drawers & modals
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', () => {
        sound.playClick();
        this.closeStateDrawer();
      });
    }

    const closeMonumentModalBtn = document.getElementById('closeMonumentModalBtn');
    if (closeMonumentModalBtn) {
      closeMonumentModalBtn.addEventListener('click', () => {
        sound.playClick();
        narrator.stop();
        this.monumentModal.classList.add('hidden');
      });
    }

    const closePassportModalBtn = document.getElementById('closePassportModalBtn');
    if (closePassportModalBtn) {
      closePassportModalBtn.addEventListener('click', () => {
        sound.playClick();
        this.passportModal.classList.add('hidden');
      });
    }

    const openPassportBtn = document.getElementById('openPassportBtn');
    if (openPassportBtn) {
      openPassportBtn.addEventListener('click', () => {
        sound.playClick();
        this.openPassport();
      });
    }

    const closeCertificateBtn = document.getElementById('closeCertificateBtn');
    if (closeCertificateBtn) {
      closeCertificateBtn.addEventListener('click', () => {
        sound.playClick();
        this.certificateModal.classList.add('hidden');
      });
    }
  }

  initSearch() {
    const searchInput = document.getElementById('heritageSearchInput');
    const searchResults = document.getElementById('searchResultsDropdown');

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', () => {
      const val = searchInput.value.trim().toLowerCase();
      if (val.length < 1) {
        searchResults.classList.add('hidden');
        return;
      }

      // Match states
      const matchingStates = statesData.filter(s =>
        s.name.toLowerCase().includes(val) || s.capital.toLowerCase().includes(val)
      );

      // Match places
      const matchingPlaces = historicalPlaces.filter(p =>
        p.name.toLowerCase().includes(val) ||
        p.hindiName.includes(val) ||
        p.city.toLowerCase().includes(val)
      );

      if (matchingStates.length === 0 && matchingPlaces.length === 0) {
        searchResults.innerHTML = `<div class="search-empty">No monuments found matching "${val}"</div>`;
        searchResults.classList.remove('hidden');
        return;
      }

      let html = '';
      if (matchingPlaces.length > 0) {
        html += `<div class="search-category-title">Historical Places</div>`;
        matchingPlaces.slice(0, 5).forEach(p => {
          html += `
            <div class="search-item" data-type="place" data-id="${p.id}">
              <span class="search-icon">${p.badgeIcon || '📍'}</span>
              <div class="search-text">
                <span class="main">${p.name}</span>
                <span class="sub">${p.stateName} • ${p.dynasty}</span>
              </div>
            </div>
          `;
        });
      }

      if (matchingStates.length > 0) {
        html += `<div class="search-category-title">States & Territories</div>`;
        matchingStates.slice(0, 4).forEach(s => {
          html += `
            <div class="search-item" data-type="state" data-id="${s.id}">
              <span class="search-icon">🗺️</span>
              <div class="search-text">
                <span class="main">${s.name}</span>
                <span class="sub">Capital: ${s.capital}</span>
              </div>
            </div>
          `;
        });
      }

      searchResults.innerHTML = html;
      searchResults.classList.remove('hidden');

      // Click handlers
      searchResults.querySelectorAll('.search-item').forEach(item => {
        item.addEventListener('click', () => {
          sound.playClick();
          const type = item.dataset.type;
          const id = item.dataset.id;
          searchResults.classList.add('hidden');
          searchInput.value = '';

          if (type === 'state') {
            this.switchView('map');
            this.map.selectState(id, true);
          } else if (type === 'place') {
            const place = getPlaceById(id);
            if (place) {
              this.switchView('map');
              this.map.selectState(place.stateId, true);
              this.openMonumentModal(place);
            }
          }
        });
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.add('hidden');
      }
    });

    // Region Filter Tabs
    const regionButtons = document.querySelectorAll('.region-pill');
    regionButtons.forEach(pill => {
      pill.addEventListener('click', () => {
        sound.playClick();
        regionButtons.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const region = pill.dataset.region;
        this.map.filterByRegion(region);
      });
    });
  }

  initAudioToggles() {
    const soundToggleBtn = document.getElementById('soundToggleBtn');
    const musicToggleBtn = document.getElementById('musicToggleBtn');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        const isMuted = sound.toggleMute();
        soundToggleBtn.innerHTML = isMuted ? '🔇 Muted' : '🔊 Sound FX';
        soundToggleBtn.classList.toggle('active', !isMuted);
      });
    }

    if (musicToggleBtn) {
      musicToggleBtn.addEventListener('click', () => {
        sound.init();
        const isPlaying = sound.toggleAmbient();
        musicToggleBtn.innerHTML = isPlaying ? '🪕 Playing Indian Melody' : '🪕 Ambient Tone';
        musicToggleBtn.classList.toggle('active', isPlaying);
      });
    }

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        sound.playClick();
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggleBtn.innerHTML = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
      });
    }
  }

  switchView(viewName) {
    this.currentView = viewName;
    narrator.stop();

    // Update Nav Tab Active classes
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    if (viewName === 'map') {
      this.mapViewEl.classList.remove('hidden');
      this.activitiesViewEl.classList.add('hidden');
    } else {
      this.mapViewEl.classList.add('hidden');
      this.activitiesViewEl.classList.remove('hidden');

      if (viewName === 'quiz') {
        const stateId = this.selectedState ? this.selectedState.id : 'mh';
        const stateName = this.selectedState ? this.selectedState.name : 'Maharashtra';
        this.quizGame.startStateQuiz(stateId, stateName);
      } else if (viewName === 'puzzle') {
        const place = this.selectedPlace || historicalPlaces[0];
        this.puzzleGame.start(place);
      } else if (viewName === 'riddle') {
        this.riddleGame.start();
      } else if (viewName === 'timeline') {
        this.timelineGame.start();
      } else if (viewName === 'passport') {
        this.openPassport();
      }
    }
  }

  handleStateSelected(state, places) {
    this.selectedState = state;
    passport.visitState(state.id);

    this.stateDrawerTitle.textContent = state.name;
    this.stateDrawerTagline.textContent = state.tagline;
    this.stateDrawerCapital.textContent = `Capital: ${state.capital}`;

    if (places.length === 0) {
      this.statePlacesList.innerHTML = `
        <div class="empty-state-notice">
          <span class="icon">🗺️</span>
          <h4>Exploring ${state.name}</h4>
          <p>We are unearthing ancient archives for this state! Explore Maharashtra, Rajasthan, Delhi, or Uttar Pradesh to see grand monuments.</p>
        </div>
      `;
      this.stateQuizBtn.style.display = 'none';
    } else {
      this.stateQuizBtn.style.display = 'inline-flex';
      this.stateQuizBtn.onclick = () => {
        sound.playClick();
        this.switchView('quiz');
        this.quizGame.startStateQuiz(state.id, state.name);
      };

      this.statePlacesList.innerHTML = places.map(p => `
        <div class="place-preview-card" data-id="${p.id}">
          <div class="thumb-wrapper">
            <img src="${p.heroImage}" alt="${p.name}" class="place-thumb-img" loading="lazy" />
            <span class="era-chip">${p.era}</span>
          </div>
          <div class="place-preview-info">
            <div class="name-row">
              <h4>${p.name}</h4>
              <span class="badge-icon">${p.badgeIcon || '🏛️'}</span>
            </div>
            <div class="hindi-name">${p.hindiName}</div>
            <p class="tagline">${p.tagline}</p>
            <div class="preview-actions">
              <button class="btn btn-primary btn-sm open-monument-btn" data-id="${p.id}">
                Explore Story & Video 🎬
              </button>
            </div>
          </div>
        </div>
      `).join('');

      // Attach click listeners to cards
      this.statePlacesList.querySelectorAll('.place-preview-card').forEach(card => {
        card.addEventListener('click', (e) => {
          const placeId = card.dataset.id;
          const place = getPlaceById(placeId);
          if (place) {
            sound.playClick();
            this.openMonumentModal(place);
          }
        });
      });
    }

    this.stateDrawer.classList.remove('hidden');
    this.stateDrawer.classList.add('open');
  }

  closeStateDrawer() {
    this.stateDrawer.classList.remove('open');
    setTimeout(() => {
      this.stateDrawer.classList.add('hidden');
    }, 300);
  }

  openMonumentModal(place) {
    this.selectedPlace = place;
    passport.visitPlace(place.id);

    const m = this.monumentModal;
    m.querySelector('#modalHeroImg').src = place.heroImage;
    m.querySelector('#modalPlaceName').textContent = place.name;
    m.querySelector('#modalHindiName').textContent = place.hindiName;
    m.querySelector('#modalLocation').textContent = `📍 ${place.city}, ${place.stateName}`;
    m.querySelector('#modalEra').textContent = `⏳ ${place.period} (${place.dynasty})`;
    m.querySelector('#modalStyle').textContent = `🏛️ ${place.architectureStyle}`;
    m.querySelector('#modalStoryText').textContent = place.shortStory;

    // Personality Card
    const pers = place.personality;
    const persCard = m.querySelector('#modalPersonalityCard');
    if (pers) {
      persCard.innerHTML = `
        <div class="pers-avatar">${pers.avatar || '👑'}</div>
        <div class="pers-details">
          <h4>${pers.name}</h4>
          <span class="pers-title">${pers.title}</span>
          <p class="pers-bio">${pers.bio}</p>
          <div class="pers-quote">"${pers.quote}"</div>
        </div>
      `;
      persCard.classList.remove('hidden');
    } else {
      persCard.classList.add('hidden');
    }

    // Fun Facts Grid
    const factsGrid = m.querySelector('#modalFunFactsGrid');
    factsGrid.innerHTML = place.funFacts.map(fact => `
      <div class="fun-fact-card">
        <span class="fact-bulb">💡</span>
        <p>${fact}</p>
      </div>
    `).join('');

    // Video Capsule Setup
    const videoContainer = m.querySelector('#modalVideoSection');
    const reel = place.video;
    videoContainer.innerHTML = `
      <div class="video-capsule-box">
        <div class="video-reel-display" style="background-image: url('${place.heroImage}')">
          <div class="reel-overlay">
            <div class="reel-badge">🎥 Historical Video Capsule</div>
            <h3 class="reel-title">${reel.title}</h3>
            <div class="reel-subtitles" id="reelSubtitleText">${reel.reelScript[0]}</div>
            <div class="reel-controls">
              <button class="reel-btn" id="startReelBtn">▶️ Play Virtual Tour</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Hook up Reel Player
    const startReelBtn = videoContainer.querySelector('#startReelBtn');
    let reelStep = 0;
    let reelTimer = null;
    startReelBtn.onclick = () => {
      sound.playClick();
      reelStep = 0;
      const subEl = videoContainer.querySelector('#reelSubtitleText');
      narrator.speak(reel.reelScript[0]);

      if (reelTimer) clearInterval(reelTimer);
      reelTimer = setInterval(() => {
        reelStep++;
        if (reelStep < reel.reelScript.length) {
          subEl.textContent = reel.reelScript[reelStep];
          narrator.speak(reel.reelScript[reelStep]);
        } else {
          clearInterval(reelTimer);
          subEl.textContent = '✨ Tour Completed! Take the quiz below to earn badges.';
        }
      }, 5000);
    };

    // Narrator Button for the main story
    const narratorBtn = m.querySelector('#narrateStoryBtn');
    narratorBtn.onclick = () => {
      sound.playClick();
      if (narrator.isSpeaking) {
        narrator.stop();
        narratorBtn.innerHTML = '🔊 Read Aloud';
        narratorBtn.classList.remove('active');
      } else {
        narratorBtn.innerHTML = '⏹️ Stop Reading';
        narratorBtn.classList.add('active');
        narrator.speak(
          `${place.name}. ${place.shortStory}. Personality: ${place.personality.name}. ${place.personality.bio}`,
          () => {
            narratorBtn.innerHTML = '⏹️ Stop Reading';
            narratorBtn.classList.add('active');
          },
          () => {
            narratorBtn.innerHTML = '🔊 Read Aloud';
            narratorBtn.classList.remove('active');
          }
        );
      }
    };

    // Action buttons inside modal
    m.querySelector('#modalQuizBtn').onclick = () => {
      sound.playClick();
      narrator.stop();
      m.classList.add('hidden');
      this.switchView('quiz');
      this.quizGame.start(place.quizQuestions, `${place.name} Mastery Quiz`);
    };

    m.querySelector('#modalPuzzleBtn').onclick = () => {
      sound.playClick();
      narrator.stop();
      m.classList.add('hidden');
      this.switchView('puzzle');
      this.puzzleGame.start(place);
    };

    m.classList.remove('hidden');
  }

  openPassport() {
    this.passportModal.classList.remove('hidden');
    this.updatePassportUI(passport.data, passport.getLevelInfo());
  }

  updatePassportUI(data, lvl) {
    const pModal = this.passportModal;
    if (!pModal) return;

    // Header info
    const nameInput = pModal.querySelector('#passportPlayerName');
    if (nameInput && document.activeElement !== nameInput) {
      nameInput.value = data.playerName;
    }
    if (nameInput) {
      nameInput.onchange = () => passport.setPlayerName(nameInput.value);
    }

    pModal.querySelector('#passportLevelBadge').textContent = `${lvl.icon} Level ${lvl.level}: ${lvl.title}`;
    pModal.querySelector('#passportTotalXp').textContent = `${data.xp} XP`;
    pModal.querySelector('#passportStatesCount').textContent = `${data.visitedStates.length} / 36`;
    pModal.querySelector('#passportPlacesCount').textContent = `${data.visitedPlaces.length} Wonders`;

    // Stamps Grid
    const stampsGrid = pModal.querySelector('#passportStampsGrid');
    stampsGrid.innerHTML = statesData.slice(0, 15).map(state => {
      const isVisited = data.visitedStates.includes(state.id);
      return `
        <div class="passport-stamp ${isVisited ? 'stamped' : 'locked'}">
          <div class="stamp-inner">
            <span class="stamp-icon">${isVisited ? '⭐' : '🔒'}</span>
            <span class="stamp-state">${state.name}</span>
            <span class="stamp-date">${isVisited ? 'VISITED' : 'Unexplored'}</span>
          </div>
        </div>
      `;
    }).join('');

    // Badges Showcase
    const badgesGrid = pModal.querySelector('#passportBadgesGrid');
    const allBadges = passport.getAllBadges();
    badgesGrid.innerHTML = allBadges.map(b => {
      const isEarned = data.earnedBadges.includes(b.id);
      return `
        <div class="badge-item ${isEarned ? 'earned' : 'locked'}">
          <div class="badge-icon">${b.icon}</div>
          <div class="badge-meta">
            <h5>${b.name}</h5>
            <p>${b.desc}</p>
          </div>
        </div>
      `;
    }).join('');

    // Claim Certificate Button
    const claimCertBtn = pModal.querySelector('#claimCertificateBtn');
    if (claimCertBtn) {
      claimCertBtn.onclick = () => {
        sound.playFanfare();
        this.openCertificate();
      };
    }
  }

  openCertificate() {
    const certModal = this.certificateModal;
    const canvasContainer = certModal.querySelector('#certificateCanvasWrapper');
    const canvas = passport.generateCertificateCanvas();
    canvasContainer.innerHTML = '';
    canvas.classList.add('certificate-rendered-canvas');
    canvasContainer.appendChild(canvas);

    // Download Certificate
    const downloadBtn = certModal.querySelector('#downloadCertificateBtn');
    downloadBtn.onclick = () => {
      sound.playClick();
      const link = document.createElement('a');
      link.download = `Bharat_Heritage_Master_${passport.data.playerName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };

    // Print Certificate
    const printBtn = certModal.querySelector('#printCertificateBtn');
    printBtn.onclick = () => {
      sound.playClick();
      const win = window.open('', '_blank');
      win.document.write(`
        <html>
          <head><title>Certificate of Heritage Mastery</title></head>
          <body style="margin:0; display:flex; align-items:center; justify-content:center; height:100vh;">
            <img src="${canvas.toDataURL('image/png')}" style="max-width:100%; height:auto;" />
            <script>window.print();</script>
          </body>
        </html>
      `);
    };

    certModal.classList.remove('hidden');
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
