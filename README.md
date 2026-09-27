# 🇮🇳 Bharat Heritage Quest — Interactive India Historical Places Learning Game

An interactive, educational game designed to make Indian history fascinating, visual, and memorable for children!

![Bharat Heritage Quest Banner](https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Overview & Key Features

### 1. 🗺️ Interactive India Vector Map
- **All 36 States & Union Territories**: High-precision vector SVG map with smooth zoom, pan, and reset controls.
- **State Selection**: Selecting any state (such as **Maharashtra**, **Rajasthan**, **Delhi**, **Uttar Pradesh**, **Karnataka**, **Tamil Nadu**, etc.) smoothly zooms into the region and opens the **State Explorer Hub**.
- **Pulsing Monument Pins**: Animated radar beacons on the map indicating historical places and architectural wonders.
- **Regional Filters**: Quick filter tabs for *All India*, *West*, *North*, *South*, *Central*, *East*, and *North-East*.
- **Live Search with Autocomplete**: Search for any state, city, or monument with instant results.

---

### 2. 🏛️ State Explorer & Monument Deep Dives (Featured: Maharashtra)
Selecting **Maharashtra** opens an explorer hub with curated historical places:
- **Ajanta Caves**: 30 ancient rock-cut Buddhist temples with glowing gemstone murals (*Patron: Emperor Harishena*).
- **Raigad Fort**: Sovereign hill-fort capital of *Chhatrapati Shivaji Maharaj* and site of his 1674 coronation.
- **Gateway of India**: Mumbai's iconic basalt waterfront arch marking India's complete independence in 1948.
- **Ellora Caves & Kailasa Temple**: The world's largest monolithic rock temple carved top-down from a single mountain (*King Krishna I*).
- **Shaniwar Wada**: Seven-story Peshwa palace fortress in Pune built by undefeated general *Peshwa Bajirao I*.

**Each monument deep dive includes**:
- **High-Definition Photos & Architecture Badges**: Visual gallery with era and dynasty tags.
- **Story for Young Explorers**: Simple, engaging storytelling written for children.
- **🔊 Read Story Aloud (Text-to-Speech)**: Child-friendly natural voice narrator with play/stop controls.
- **🎥 Video Capsule & Virtual Tour**: Interactive multimedia documentary player with subtitles and ambient soundscapes.
- **👑 Historical Hero Spotlight**: Personality card featuring their title, role, famous deeds, and inspirational quote.
- **✨ "Did You Know?" Mystery Facts**: Curiosity cards revealing fun historical secrets.

---

### 3. 🎮 Gamified Learning & Activity Arcade
- **🎯 Quiz Arena (MCQs)**:
  - 4 multiple-choice options with instant feedback (green for correct, red for incorrect).
  - Explanations on every question so children learn from their answers.
  - Combo streaks (e.g. `2x Combo! 🔥`), Web Audio sound effects, and confetti celebrations.
- **🧩 Puzzle Arcade (Jigsaw Tile Puzzle)**:
  - 3x3 interactive sliding/swapping puzzle tiles.
  - Real-time timer, move counter, and reference guide toggle.
  - Victory celebration screen awarding **+150 Explorer XP**.
- **🕵️ Riddle Detective (Question-Answer Activity)**:
  - 3 progressive mystery clues (Dynasty/Era $\rightarrow$ Architecture/Secret $\rightarrow$ Unique Trivia).
  - Rewards children with higher points (up to **300 XP**) for solving mysteries with fewer clues.
- **⏳ Time Machine (Chrono-Timeline Quest)**:
  - Drag or arrow-order historical monuments from oldest (Ancient BCE) to newest (Modern Era).

---

### 4. 🛂 Explorer Passport & Certificate of Mastery
- **Explorer XP & Levels**: Progression from *Village Scout (Level 1)* up to *Grand Master of Bharat (Level 6)*.
- **State Visa Stamps**: Collectible royal visa stamps stamped into the passport for every visited state.
- **Heritage Badges**: Unlockable badges like *Fort Conqueror*, *Cave Detective*, *Marble Wonder*, *Quiz Whiz*, and *Puzzle Master*.
- **📜 Canvas Certificate of Mastery**:
  - Automatically generates an official **Certificate of Exploration** on an HTML5 canvas with the child's name, rank, total XP, date, Ashoka Chakra watermark, and royal seal.
  - Built-in **Download PNG** and **Print** capabilities.

---

### 5. 🔊 Sound, Ambient Music & Dark Mode
- **Synthesized Audio (Web Audio API)**: Sound effects (chimes, fanfare, buzzers, puzzle slides, stamp thuds) that work 100% offline.
- **🪕 Indian Classical Melody**: Gentle Tanpura ambient drone with a toggle button.
- **🌙 Dark & Light Theme**: Toggle between daylight parchment and midnight indigo modes.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/omrajematsagar-lang/historicalplace.git

# Navigate to project directory
cd historicalplace

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production
```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack
- **HTML5 & Vanilla JavaScript (ES6 Modules)**
- **Vanilla CSS (Custom Design System with Glassmorphism & Dark Mode)**
- **Vite 6** (Development Server & Bundler)
- **Web Audio API** (Procedural Sound & Ambient Synthesizer)
- **Web Speech API** (Natural Text-To-Speech Narrator)
- **HTML5 Canvas** (Dynamic Certificate Generator)
- **@svg-maps/india** (Vector Cartography Coordinates)
- **canvas-confetti** (Celebration Particles)

---

## 📜 License
This project is licensed under the ISC License.
