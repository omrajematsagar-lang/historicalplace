const fs = require('fs');

const raw = fs.readFileSync('src/data/mapData.js', 'utf8');
const jsonMatch = raw.match(/export const statesData = (\[[\s\S]*?\]);/);
const statesData = JSON.parse(jsonMatch[1]);

function approxCenter(path) {
  let curX = 0, curY = 0;
  let ptsX = [], ptsY = [];
  const tokens = path.trim().split(/\s+/);
  let mode = 'm';
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (/^[a-z]$/i.test(t)) {
      mode = t;
      continue;
    }
    const parts = t.split(',');
    if (parts.length === 2) {
      const px = parseFloat(parts[0]);
      const py = parseFloat(parts[1]);
      if (!isNaN(px) && !isNaN(py)) {
        if (mode === 'm' || mode === 'l') {
          curX += px;
          curY += py;
        } else if (mode === 'M' || mode === 'L') {
          curX = px;
          curY = py;
        }
        ptsX.push(curX);
        ptsY.push(curY);
      }
    }
  }
  if (ptsX.length === 0) return { x: 300, y: 350 };
  const minX = Math.min(...ptsX), maxX = Math.max(...ptsX);
  const minY = Math.min(...ptsY), maxY = Math.max(...ptsY);
  return {
    x: Math.round((minX + maxX) / 2),
    y: Math.round((minY + maxY) / 2),
    minX: Math.round(minX), maxX: Math.round(maxX),
    minY: Math.round(minY), maxY: Math.round(maxY),
    w: Math.round(maxX - minX),
    h: Math.round(maxY - minY)
  };
}

const centers = {};
for (const s of statesData) {
  centers[s.id] = approxCenter(s.path);
}

fs.writeFileSync('src/data/stateCenters.json', JSON.stringify(centers, null, 2));
console.log('Sample centers:');
['mh', 'rj', 'dl', 'up', 'ka', 'tn', 'mp', 'gj', 'wb', 'pb', 'br', 'kl', 'or', 'tg', 'as'].forEach(id => {
  console.log(id, ':', centers[id]);
});
