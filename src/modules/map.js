/**
 * Bharat Heritage Quest - Interactive Vector SVG Map Component
 * Handles rendering, zooming, panning, state selection, hover tooltips, and monument pins.
 */

import { viewBox, statesData } from '../data/mapData.js';
import { historicalPlaces } from '../data/placesData.js';
import stateCenters from '../data/stateCenters.json';
import { sound } from './sound.js';

export class IndiaMap {
  constructor(containerEl, onSelectState, onSelectMonument) {
    this.container = containerEl;
    this.onSelectState = onSelectState;
    this.onSelectMonument = onSelectMonument;

    this.currentRegion = 'all';
    this.selectedStateId = null;
    this.currentViewBox = { x: 0, y: 0, w: 612, h: 696 };
    this.defaultViewBox = { x: 0, y: 0, w: 612, h: 696 };
    this.isZoomed = false;

    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="map-viewport-container">
        <svg id="indiaSvgMap" 
             viewBox="${this.defaultViewBox.x} ${this.defaultViewBox.y} ${this.defaultViewBox.w} ${this.defaultViewBox.h}" 
             preserveAspectRatio="xMidYMid meet"
             class="india-svg">
          <defs>
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="stateGradDefault" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#1D4ED8" stop-opacity="0.35" />
            </linearGradient>
            <linearGradient id="stateGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#D97706" stop-opacity="0.9" />
            </linearGradient>
          </defs>

          <!-- Group of States -->
          <g id="statesGroup">
            ${statesData.map(state => {
              const hasMonuments = historicalPlaces.some(p => p.stateId === state.id);
              return `
                <path id="state_${state.id}"
                      data-id="${state.id}"
                      data-name="${state.name}"
                      data-region="${state.region}"
                      data-has-monuments="${hasMonuments}"
                      class="state-path ${hasMonuments ? 'has-monuments' : ''}"
                      d="${state.path}"
                      tabindex="0"
                      role="button"
                      aria-label="${state.name}">
                </path>
              `;
            }).join('')}
          </g>

          <!-- Group of Monument Pins -->
          <g id="pinsGroup">
            ${historicalPlaces.map(p => {
              return `
                <g class="monument-pin" 
                   id="pin_${p.id}" 
                   data-id="${p.id}" 
                   data-state="${p.stateId}"
                   transform="translate(${p.coordinates.x}, ${p.coordinates.y})">
                  <circle class="pin-pulse" r="14" />
                  <circle class="pin-base" r="8" />
                  <text class="pin-icon" text-anchor="middle" dy="4">${p.badgeIcon || '📍'}</text>
                  <text class="pin-label" text-anchor="middle" y="-12">${p.name}</text>
                </g>
              `;
            }).join('')}
          </g>
        </svg>

        <!-- Hover Tooltip -->
        <div class="map-tooltip hidden" id="mapTooltip">
          <div class="tooltip-badge" id="tooltipBadge">Maharashtra</div>
          <div class="tooltip-title" id="tooltipTitle">Capital: Mumbai</div>
          <div class="tooltip-sub" id="tooltipSub">5 Historical Places</div>
        </div>

        <!-- Map Navigation Controls -->
        <div class="map-controls">
          <button class="map-ctrl-btn" id="mapZoomInBtn" title="Zoom In">➕</button>
          <button class="map-ctrl-btn" id="mapZoomOutBtn" title="Zoom Out">➖</button>
          <button class="map-ctrl-btn" id="mapResetBtn" title="Reset Entire India View">🔄 Reset</button>
        </div>
      </div>
    `;

    this.svg = this.container.querySelector('#indiaSvgMap');
    this.tooltip = this.container.querySelector('#mapTooltip');

    this.attachEventListeners();
  }

  attachEventListeners() {
    const paths = this.container.querySelectorAll('.state-path');
    paths.forEach(p => {
      // Hover effects
      p.addEventListener('mouseenter', (e) => this.handleStateHover(e, p));
      p.addEventListener('mousemove', (e) => this.handleStateMouseMove(e));
      p.addEventListener('mouseleave', () => this.handleStateLeave(p));

      // Click to select
      p.addEventListener('click', () => {
        sound.playClick();
        this.selectState(p.dataset.id);
      });
      p.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          sound.playClick();
          this.selectState(p.dataset.id);
        }
      });
    });

    // Pin click handlers
    const pins = this.container.querySelectorAll('.monument-pin');
    pins.forEach(pin => {
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        sound.playClick();
        const placeId = pin.dataset.id;
        const place = historicalPlaces.find(item => item.id === placeId);
        if (place && this.onSelectMonument) {
          this.onSelectMonument(place);
        }
      });
    });

    // Zoom Controls
    this.container.querySelector('#mapZoomInBtn').onclick = () => this.zoom(0.75);
    this.container.querySelector('#mapZoomOutBtn').onclick = () => this.zoom(1.33);
    this.container.querySelector('#mapResetBtn').onclick = () => this.resetView();
  }

  handleStateHover(e, path) {
    const stateId = path.dataset.id;
    const state = statesData.find(s => s.id === stateId);
    if (!state) return;

    const places = historicalPlaces.filter(p => p.stateId === stateId);

    const badge = this.tooltip.querySelector('#tooltipBadge');
    const title = this.tooltip.querySelector('#tooltipTitle');
    const sub = this.tooltip.querySelector('#tooltipSub');

    badge.textContent = state.name;
    title.textContent = `Capital: ${state.capital}`;
    sub.textContent = places.length > 0
      ? `⭐ ${places.length} Historical Places to Explore!`
      : `Explore & Discover Heritage`;

    this.tooltip.classList.remove('hidden');
    this.updateTooltipPosition(e);
  }

  handleStateMouseMove(e) {
    this.updateTooltipPosition(e);
  }

  updateTooltipPosition(e) {
    const rect = this.container.getBoundingClientRect();
    const x = e.clientX - rect.left + 15;
    const y = e.clientY - rect.top - 35;
    this.tooltip.style.left = `${x}px`;
    this.tooltip.style.top = `${y}px`;
  }

  handleStateLeave(path) {
    this.tooltip.classList.add('hidden');
  }

  selectState(stateId, zoomIntoState = true) {
    this.selectedStateId = stateId;

    // Highlight path
    const paths = this.container.querySelectorAll('.state-path');
    paths.forEach(p => {
      if (p.dataset.id === stateId) {
        p.classList.add('selected');
      } else {
        p.classList.remove('selected');
      }
    });

    // Highlight pins
    const pins = this.container.querySelectorAll('.monument-pin');
    pins.forEach(pin => {
      if (pin.dataset.state === stateId) {
        pin.classList.add('active-state-pin');
      } else {
        pin.classList.remove('active-state-pin');
      }
    });

    const state = statesData.find(s => s.id === stateId);
    const places = historicalPlaces.filter(p => p.stateId === stateId);

    if (zoomIntoState) {
      this.zoomToState(stateId);
    }

    if (this.onSelectState && state) {
      this.onSelectState(state, places);
    }
  }

  zoomToState(stateId) {
    const center = stateCenters[stateId];
    if (!center) return;

    // Compute bounding box with padding
    const pad = 40;
    const w = Math.max(center.w + pad * 2, 140);
    const h = Math.max(center.h + pad * 2, 140);
    const x = Math.max(center.x - w / 2, 0);
    const y = Math.max(center.y - h / 2, 0);

    this.animateViewBox(x, y, w, h);
    this.isZoomed = true;
  }

  zoom(factor) {
    const cur = this.currentViewBox;
    const newW = cur.w * factor;
    const newH = cur.h * factor;
    const newX = cur.x + (cur.w - newW) / 2;
    const newY = cur.y + (cur.h - newH) / 2;

    this.animateViewBox(newX, newY, newW, newH);
  }

  resetView() {
    sound.playClick();
    this.selectedStateId = null;
    const paths = this.container.querySelectorAll('.state-path');
    paths.forEach(p => p.classList.remove('selected'));
    const pins = this.container.querySelectorAll('.monument-pin');
    pins.forEach(pin => pin.classList.remove('active-state-pin'));

    this.animateViewBox(
      this.defaultViewBox.x,
      this.defaultViewBox.y,
      this.defaultViewBox.w,
      this.defaultViewBox.h
    );
    this.isZoomed = false;
  }

  animateViewBox(targetX, targetY, targetW, targetH) {
    this.currentViewBox = { x: targetX, y: targetY, w: targetW, h: targetH };
    this.svg.style.transition = 'viewBox 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    this.svg.setAttribute('viewBox', `${targetX} ${targetY} ${targetW} ${targetH}`);
  }

  filterByRegion(region) {
    this.currentRegion = region;
    const paths = this.container.querySelectorAll('.state-path');
    paths.forEach(p => {
      if (region === 'all' || p.dataset.region === region) {
        p.classList.remove('region-dimmed');
      } else {
        p.classList.add('region-dimmed');
      }
    });
  }
}
