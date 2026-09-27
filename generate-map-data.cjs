const fs = require('fs');

const txt = fs.readFileSync('node_modules/@svg-maps/india/index.js', 'utf8').replace('export default', '');
const raw = JSON.parse(txt.trim());

// Metadata dictionary for states
const stateMeta = {
  'mh': { name: 'Maharashtra', region: 'west', capital: 'Mumbai', tagline: 'Land of Brave Forts & Ancient Cave Wonders', monuments: ['ajanta-caves', 'raigad-fort', 'gateway-of-india', 'ellora-caves', 'shaniwar-wada'] },
  'rj': { name: 'Rajasthan', region: 'west', capital: 'Jaipur', tagline: 'The Royal Desert Kingdom of Palaces & Valor', monuments: ['hawa-mahal', 'amer-fort', 'mehrangarh-fort', 'chittorgarh-fort'] },
  'dl': { name: 'Delhi', region: 'north', capital: 'New Delhi', tagline: 'The Historic Heart of Bharat Across Dynasties', monuments: ['red-fort', 'qutub-minar', 'humayuns-tomb', 'india-gate'] },
  'up': { name: 'Uttar Pradesh', region: 'north', capital: 'Lucknow', tagline: 'Cradle of Empires, Sacred Rivers & Timeless Wonders', monuments: ['taj-mahal', 'fatehpur-sikri', 'varanasi-ghats', 'jhansi-fort'] },
  'ka': { name: 'Karnataka', region: 'south', capital: 'Bengaluru', tagline: 'Realm of Vijayanagara Splendor & Grand Temples', monuments: ['hampi', 'mysore-palace', 'gol-gumbaz', 'badami-caves'] },
  'tn': { name: 'Tamil Nadu', region: 'south', capital: 'Chennai', tagline: 'Land of Soaring Gopurams & Great Living Chola Temples', monuments: ['brihadisvara-temple', 'mahabalipuram', 'meenakshi-temple'] },
  'mp': { name: 'Madhya Pradesh', region: 'central', capital: 'Bhopal', tagline: 'Heart of India with Ancient Stupas & Invincible Forts', monuments: ['sanchi-stupa', 'gwalior-fort', 'khajuraho'] },
  'gj': { name: 'Gujarat', region: 'west', capital: 'Gandhinagar', tagline: 'Land of Stepwells, Sun Temples & Freedom Quest', monuments: ['rani-ki-vav', 'sun-temple-modhera', 'sabarmati-ashram'] },
  'wb': { name: 'West Bengal', region: 'east', capital: 'Kolkata', tagline: 'Hub of Art, Renaissance & Palaces of A Thousand Doors', monuments: ['victoria-memorial', 'hazarduari-palace', 'dakshineswar'] },
  'pb': { name: 'Punjab', region: 'north', capital: 'Chandigarh', tagline: 'Land of Five Rivers, Golden Shrines & Courage', monuments: ['golden-temple', 'jallianwala-bagh'] },
  'br': { name: 'Bihar', region: 'east', capital: 'Patna', tagline: 'Ancient Seat of Wisdom, Nalanda & Enlightenment', monuments: ['nalanda-university', 'mahabodhi-temple'] },
  'kl': { name: 'Kerala', region: 'south', capital: 'Thiruvananthapuram', tagline: 'Coast of Spices, Sea Forts & Historic Temples', monuments: ['bekal-fort', 'padmanabhaswamy'] },
  'or': { name: 'Odisha', region: 'east', capital: 'Bhubaneswar', tagline: 'Kingdom of Sun Chariots & Kalinga Artistry', monuments: ['konark-sun-temple', 'jagannath-puri'] },
  'tg': { name: 'Telangana', region: 'south', capital: 'Hyderabad', tagline: 'Citadel of Charminar & Echoing Fort Acoustics', monuments: ['charminar', 'golconda-fort'] },
  'ap': { name: 'Andhra Pradesh', region: 'south', capital: 'Amaravati', tagline: 'Coast of Buddhist Heritage & Tirupati Temples', monuments: [] },
  'as': { name: 'Assam', region: 'northeast', capital: 'Dispur', tagline: 'Kingdom of Ahom Amphitheaters & Mighty Brahmaputra', monuments: ['rang-ghar'] },
  'ga': { name: 'Goa', region: 'west', capital: 'Panaji', tagline: 'Coast of Portuguese Forts & Heritage Cathedrals', monuments: [] },
  'ut': { name: 'Uttarakhand', region: 'north', capital: 'Dehradun', tagline: 'Devbhoomi: Sacred Peaks & Ancient Shrines', monuments: [] },
  'hp': { name: 'Himachal Pradesh', region: 'north', capital: 'Shimla', tagline: 'Snowy Valleys & Ancient Himalayan Temples', monuments: [] },
  'jk': { name: 'Jammu and Kashmir', region: 'north', capital: 'Srinagar / Jammu', tagline: 'Paradise on Earth with Mughal Gardens & Forts', monuments: [] },
  'jh': { name: 'Jharkhand', region: 'east', capital: 'Ranchi', tagline: 'Land of Forests, Tribal Heritage & Waterfalls', monuments: [] },
  'ct': { name: 'Chhattisgarh', region: 'central', capital: 'Raipur', tagline: 'Ancient Temples, Tribal Lore & Waterfalls', monuments: [] },
  'hr': { name: 'Haryana', region: 'north', capital: 'Chandigarh', tagline: 'Historic Battlefield of Kurukshetra & Panipat', monuments: [] },
  'sk': { name: 'Sikkim', region: 'northeast', capital: 'Gangtok', tagline: 'Monasteries Under the Guard of Kanchenjunga', monuments: [] },
  'ar': { name: 'Arunachal Pradesh', region: 'northeast', capital: 'Itanagar', tagline: 'Land of Dawn-Lit Mountains & Tawang Monastery', monuments: [] },
  'mn': { name: 'Manipur', region: 'northeast', capital: 'Imphal', tagline: 'Jeweled Land with Kangla Fort & Floating Lakes', monuments: [] },
  'ml': { name: 'Meghalaya', region: 'northeast', capital: 'Shillong', tagline: 'Abode of Clouds & Living Root Bridges', monuments: [] },
  'mz': { name: 'Mizoram', region: 'northeast', capital: 'Aizawl', tagline: 'Land of Rolling Blue Hills & Ancient Folk Lore', monuments: [] },
  'nl': { name: 'Nagaland', region: 'northeast', capital: 'Kohima', tagline: 'Land of Brave Warriors & Hornbill Heritage', monuments: [] },
  'tr': { name: 'Tripura', region: 'northeast', capital: 'Agartala', tagline: 'Water Palaces of Neermahal & Ujjayanta', monuments: [] },
  'ch': { name: 'Chandigarh', region: 'north', capital: 'Chandigarh', tagline: 'City Beautiful & Modern Heritage City', monuments: [] },
  'dn': { name: 'Dadra and Nagar Haveli', region: 'west', capital: 'Silvassa', tagline: 'Tribal Art & Nature Retreats', monuments: [] },
  'dd': { name: 'Daman and Diu', region: 'west', capital: 'Daman', tagline: 'Portuguese Sea Forts & Historic Lighthouses', monuments: [] },
  'ld': { name: 'Lakshadweep', region: 'south', capital: 'Kavaratti', tagline: 'Coral Islands of the Arabian Sea', monuments: [] },
  'py': { name: 'Puducherry', region: 'south', capital: 'Puducherry', tagline: 'French Heritage Town & Seaside Promenades', monuments: [] },
  'an': { name: 'Andaman and Nicobar Islands', region: 'south', capital: 'Port Blair', tagline: 'Historic Cellular Jail & Emerald Islands', monuments: [] }
};

const processed = raw.locations.map(loc => {
  const meta = stateMeta[loc.id] || { name: loc.name, region: 'other', capital: 'Capital', tagline: 'Discover Indian Heritage', monuments: [] };
  return {
    id: loc.id,
    name: meta.name || loc.name,
    path: loc.path,
    region: meta.region,
    capital: meta.capital,
    tagline: meta.tagline,
    monuments: meta.monuments || []
  };
});

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/mapData.js', `export const viewBox = "${raw.viewBox}";\nexport const statesData = ${JSON.stringify(processed, null, 2)};\n`);
console.log('Successfully wrote src/data/mapData.js with', processed.length, 'states!');
