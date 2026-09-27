/**
 * Bharat Heritage Quest - Historical Places & Learning Game Data
 * Comprehensive collection of Indian heritage sites, personalities, stories, trivia, and quizzes.
 */

export const historicalPlaces = [
  // ==========================================
  // MAHARASHTRA
  // ==========================================
  {
    id: 'ajanta-caves',
    name: 'Ajanta Caves',
    hindiName: 'अजंता गुफाएं',
    stateId: 'mh',
    stateName: 'Maharashtra',
    city: 'Chhatrapati Sambhaji Nagar',
    coordinates: { x: 188, y: 400 },
    era: 'Ancient',
    year: '2nd Century BCE - 480 CE',
    dynasty: 'Satavahana & Vakataka Dynasties',
    architectureStyle: 'Rock-cut Buddhist Chaityas & Viharas',
    tagline: 'Ancient Cliff Caves with Glowing Murals of Wisdom',
    badgeIcon: '🎨',
    heroImage: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=800&q=80',
        caption: 'Horseshoe-shaped cliff curve of the 30 rock-cut caves'
      },
      {
        url: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=800&q=80',
        caption: 'Cave 19 Chaitya hall with Buddha stupa and ribbed ceiling'
      },
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        caption: 'Historic rock pillars carved by ancient monk craftsmen'
      }
    ],
    video: {
      title: 'Ajanta: The Whispering Cliff of Ancient Monks',
      youtubeId: 'b6vWzM9n4mU',
      duration: '3:45',
      reelScript: [
        'Over 2,000 years ago, Buddhist monks arrived at this wild horseshoe cliff overlooking the Waghur river.',
        'Using only small hammers and chisels, they carved 30 majestic caves straight into the volcanic rock!',
        'Inside, they painted vivid stories of kindness, courage, and animals from the Jataka tales.',
        'They created glowing paint from powdered gemstones like lapis lazuli and jasper that never faded!'
      ]
    },
    shortStory: 'Imagine walking into a dark mountain cliff in the middle of a jungle and discovering a golden world of kings, flying celestial dancers, and gentle elephants! That is Ajanta. Buddhist monks spent hundreds of years carving these 30 caves to meditate in peace. They painted glorious murals of the Bodhisattva Padmapani holding a blue lotus. Hidden and forgotten for centuries under thick jungle vines, a British officer on a tiger hunt accidentally rediscovered them in 1819!',
    personality: {
      name: 'Emperor Harishena',
      title: 'King of the Vakataka Empire',
      role: 'Royal Patron of the Golden Age of Ajanta',
      avatar: '👑',
      quote: 'Let art and compassion shine brighter than any sword.',
      bio: 'King Harishena ruled central India in the 5th century CE. Under his peaceful and generous patronage, master artists and sculptors flocked to Ajanta to create the finest cave architecture and paintings in all of Asia.'
    },
    funFacts: [
      'The vibrant blue paint in the famous murals was made from crushed lapis lazuli gemstones imported all the way from ancient Afghanistan!',
      'To paint inside dark caves without soot-producing smoky torches, ancient artists used giant polished bronze mirrors placed outside to bounce natural sunlight deep into the chambers!',
      'Captain John Smith rediscovered the forgotten caves in 1819 while chasing a tiger, carving his initials lightly onto Cave 10!'
    ],
    riddles: [
      { clue: 'I am a cluster of 30 caves hidden along a curved river gorge in Maharashtra.', points: 300 },
      { clue: 'My ancient paintings tell the Jataka tales and glow with colors made of crushed gems.', points: 200 },
      { clue: 'A British officer accidentally rediscovered me while hunting a tiger in 1819. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Which river curves gracefully beneath the cliff of the Ajanta Caves?',
        options: ['Ganga', 'Waghur River', 'Godavari', 'Narmada'],
        correct: 1,
        explanation: 'The Waghur River flows below the horseshoe-shaped cliff where the 30 caves were carved into basalt rock.'
      },
      {
        question: 'How did ancient painters light the dark caves without creating black soot?',
        options: ['Electric batteries', 'Magic crystals', 'Polished bronze mirrors reflecting sunlight', 'Bonfires inside'],
        correct: 2,
        explanation: 'Artists cleverly placed polished metal mirrors outside the cave entrances to bounce bright sunlight into the dark interior!'
      },
      {
        question: 'What famous flower is the Bodhisattva Padmapani holding in the iconic Cave 1 mural?',
        options: ['Blue Lotus', 'Red Rose', 'Sunflower', 'Marigold'],
        correct: 0,
        explanation: 'Padmapani literally means "Holder of the Lotus"—he gently holds a delicate blue lotus in his right hand.'
      }
    ]
  },
  {
    id: 'raigad-fort',
    name: 'Raigad Fort',
    hindiName: 'रायगढ़ किला',
    stateId: 'mh',
    stateName: 'Maharashtra',
    city: 'Mahad, Raigad District',
    coordinates: { x: 120, y: 442 },
    era: 'Medieval',
    year: '1674 CE',
    dynasty: 'Maratha Empire',
    architectureStyle: 'Hilltop Bastion & Fortified Citadel',
    tagline: 'The Invincible Capital of Chhatrapati Shivaji Maharaj',
    badgeIcon: '🚩',
    heroImage: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80',
        caption: 'Misty Sahyadri mountain ridges surrounding Raigad Fort'
      },
      {
        url: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
        caption: 'Maha Darwaja - The grand entrance bastion designed with secret zig-zag optical illusions'
      },
      {
        url: 'https://images.unsplash.com/photo-1626014903708-4100d0758462?auto=format&fit=crop&w=800&q=80',
        caption: 'Ramparts and Takmak Tok viewing edge rising into the clouds'
      }
    ],
    video: {
      title: 'Raigad: Gibraltar of the East',
      youtubeId: '3vK1xS_zD7U',
      duration: '4:10',
      reelScript: [
        'High above the clouds in the Sahyadri mountains stands Raigad, the sovereign capital of the Marathas.',
        'On 6th June 1674, the coronation of Chhatrapati Shivaji Maharaj took place here with grand royal ceremonies.',
        'The fort was so high and steep that enemies could never climb its sheer cliffs.',
        ' Shivaji Maharaj honored a brave milkmaid named Hirkani by building a watchtower after she scaled down the cliff in darkness!'
      ]
    },
    shortStory: 'Perched 2,700 feet high in the misty Western Ghats, Raigad was chosen by the great warrior-king Chhatrapati Shivaji Maharaj as the capital of Swarajya (self-rule). With sheer vertical drop-offs on three sides, it was nearly impossible for enemies to conquer. The fort features a grand coronation throne, an ingenious marketplace where horseback shoppers could buy goods without dismounting, and the famous Hirkani Bastion named after a brave mother who scaled the cliffs!',
    personality: {
      name: 'Chhatrapati Shivaji Maharaj',
      title: 'Founder & Sovereign of the Maratha Empire',
      role: 'Pioneered Guerrilla Tactics, Naval Defense & Fair Governance',
      avatar: '🦁',
      quote: 'Never bend your head, always hold it high! Even a small spark can ignite a massive flame of freedom.',
      bio: 'Chhatrapati Shivaji Maharaj (1630–1680) was a visionary king celebrated for his bravery, respect for all religions, progressive code of justice, creation of India’s first major indigenous naval fleet, and legendary hill-fort defense strategy.'
    },
    funFacts: [
      'The British were so awestruck by its natural vertical cliff defenses that they nicknamed Raigad the "Gibraltar of the East"!',
      'The marketplace at Raigad was built on raised stone platforms so that Maratha cavalry soldiers could shop directly while sitting on their horses!',
      'The grand coronation hall (Darbar) had such brilliant natural acoustic architecture that words spoken at the throne could be heard clearly 200 feet away!'
    ],
    riddles: [
      { clue: 'I am a hilltop fort in the Sahyadri mountains of Maharashtra.', points: 300 },
      { clue: 'I was chosen as the royal capital where Chhatrapati Shivaji Maharaj was crowned king in 1674.', points: 200 },
      { clue: 'The British called me the "Gibraltar of the East". Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'In which year did the grand coronation of Chhatrapati Shivaji Maharaj take place at Raigad?',
        options: ['1526', '1674 CE', '1757', '1857'],
        correct: 1,
        explanation: 'Shivaji Maharaj was crowned Chhatrapati (sovereign emperor) on 6th June 1674 CE in a historic ceremony.'
      },
      {
        question: 'What unique feature did the marketplace at Raigad Fort have for shoppers?',
        options: ['Escalators', 'Raised platforms to shop while riding horses', 'Underground canals', 'Flying ropeways'],
        correct: 1,
        explanation: 'The shops were built on high stone plinths so horse riders did not even need to dismount to buy their supplies!'
      },
      {
        question: 'Who was the Hirkani Bastion on Raigad Fort named after?',
        options: ['A queen', 'A brave milkmaid who climbed down the cliff at night', 'A royal architect', 'A war elephant'],
        correct: 1,
        explanation: 'Hirkani was a local milkmaid who climbed down the steep cliff in darkness to reach her crying baby; the King honored her courage with a bastion!'
      }
    ]
  },
  {
    id: 'gateway-of-india',
    name: 'Gateway of India',
    hindiName: 'गेटवे ऑफ इंडिया',
    stateId: 'mh',
    stateName: 'Maharashtra',
    city: 'Mumbai',
    coordinates: { x: 108, y: 432 },
    era: 'Modern',
    year: '1924 CE',
    dynasty: 'British Colonial Era',
    architectureStyle: 'Indo-Saracenic Revival',
    tagline: 'The Triumphal Arch of Mumbai Overlooking the Arabian Sea',
    badgeIcon: '🏛️',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
        caption: 'Gateway of India standing proudly on the Mumbai waterfront'
      },
      {
        url: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
        caption: 'Pigeon flock taking flight in front of the basalt arch at sunrise'
      },
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        caption: 'Detailed view of the yellow basalt stone and perforated Islamic jali screens'
      }
    ],
    video: {
      title: 'Gateway of India: Mumbai’s Crown Arch',
      youtubeId: 'O8JqQJ1G8pQ',
      duration: '3:15',
      reelScript: [
        'Built along the shimmering waters of Mumbai harbor, the Gateway of India stands 26 meters tall.',
        'It was designed in the Indo-Saracenic style, blending traditional Hindu and Muslim arches with European majesty.',
        'In 1948, the final contingent of British soldiers marched through this arch to their ships, marking the complete freedom of India!'
      ]
    },
    shortStory: 'Rising directly out of the Arabian Sea harbor in South Mumbai, the Gateway of India is Mumbai’s most beloved landmark. Made of golden-yellow basalt stone quarried nearby, it stands 85 feet tall. While it was built to welcome visiting royalty, it became an unforgettable symbol of triumph on 28 February 1948, when the last British troops in India passed through its arch onto waiting ships, marking the dawn of free India!',
    personality: {
      name: 'George Wittet',
      title: 'Scottish Architect',
      role: 'Mastermind of Mumbai’s Indo-Saracenic Architecture',
      avatar: '📐',
      quote: 'Architecture should weave together the heritage and soul of the land upon which it stands.',
      bio: 'George Wittet was the Consulting Architect to the Government of Bombay. He masterfully harmonized Gujarati 16th-century stone screens, Islamic domes, and Roman triumphal arch proportions.'
    },
    funFacts: [
      'The arch is built using tough yellow basalt stone and reinforced concrete, costing 2.1 million rupees at the time!',
      'Boats and ferries leave right from the Gateway jetty taking visitors across the bay to the ancient Elephanta Island caves!',
      'The last British ship carrying colonial soldiers sailed away from this very gateway on 28th February 1948, saluting independent India.'
    ],
    riddles: [
      { clue: 'I stand at the edge of the Arabian Sea in the bustling city of Mumbai.', points: 300 },
      { clue: 'I am an 85-foot tall triumphal arch built with yellow basalt stone.', points: 200 },
      { clue: 'The last British troops marched out of India through my grand arch in 1948. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Which sea does the Gateway of India directly face?',
        options: ['Bay of Bengal', 'Arabian Sea', 'Indian Ocean', 'Red Sea'],
        correct: 1,
        explanation: 'The Gateway of India sits on the waterfront of Mumbai overlooking the Arabian Sea.'
      },
      {
        question: 'What major historic event happened at the Gateway of India on 28 February 1948?',
        options: ['First train launched', 'The last British troops departed from India', 'Cricket World Cup', 'First airplane landed'],
        correct: 1,
        explanation: 'The First Battalion of the Somerset Light Infantry marched through the Gateway to board their ship, marking the final departure of British forces.'
      }
    ]
  },
  {
    id: 'ellora-caves',
    name: 'Ellora Caves & Kailasa Temple',
    hindiName: 'एलोरा गुफाएं और कैलास मंदिर',
    stateId: 'mh',
    stateName: 'Maharashtra',
    city: 'Chhatrapati Sambhaji Nagar',
    coordinates: { x: 182, y: 408 },
    era: 'Medieval',
    year: '756–774 CE',
    dynasty: 'Rashtrakuta Dynasty',
    architectureStyle: 'Monolithic Rock-Cut Temple',
    tagline: 'The World’s Largest Single Monolithic Rock Temple Carved Top-Down',
    badgeIcon: '⛰️',
    heroImage: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba809?auto=format&fit=crop&w=800&q=80',
        caption: 'Kailasa Temple - Carved out of a single mountain cliff from top to bottom'
      },
      {
        url: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=800&q=80',
        caption: 'Life-sized elephant sculptures holding up the sacred stone plinth'
      }
    ],
    video: {
      title: 'Kailasa: The Imposssible Mountain Temple',
      youtubeId: 'F1cM8iLwJ70',
      duration: '4:30',
      reelScript: [
        'At Ellora, ancient Indian stone masons performed a feat that still baffles modern engineers.',
        'They did not build this temple with stone blocks. Instead, they hollowed out a mountain from the top down!',
        'Over 200,000 tons of solid rock were chipped away using only hammers and hand chisels.',
        'Cave 16 Kailasa Temple stands twice as large as the Parthenon in Athens!'
      ]
    },
    shortStory: 'Imagine sculpting an entire multi-story palace with courtyards, giant life-sized elephants, two soaring flagstone pillars, and intricate mythological carvings—not by stacking bricks, but by chipping away a whole basalt mountain from top to bottom! If the ancient artists made a single mistake with their chisels, it could never be replaced. That is Cave 16 at Ellora, the world’s most astonishing monolithic wonder.',
    personality: {
      name: 'King Krishna I',
      title: 'Rashtrakuta Emperor',
      role: 'Visionary Patron of Kailasa Temple',
      avatar: '👑',
      quote: 'Let Mount Kailash descend to earth in solid stone for all generations to marvel at.',
      bio: 'King Krishna I of the Rashtrakuta dynasty commissioned the Kailasa temple in the 8th century CE to resemble the Himalayan abode of Lord Shiva.'
    },
    funFacts: [
      'Engineers estimate that over 200,000 tons of rock were removed in just a few decades—without explosives, trucks, or heavy machinery!',
      'Ellora is unique in the world because it features 34 caves representing Buddhist, Hindu, and Jain traditions side by side in harmony!',
      'The entire temple was originally covered in brilliant white plaster so that it gleamed like the snow-capped peak of Mount Kailash!'
    ],
    riddles: [
      { clue: 'I am a temple in Maharashtra carved from a single mountain of rock.', points: 300 },
      { clue: 'My builders started from the very top of the cliff and carved downwards.', points: 200 },
      { clue: 'I am Cave 16 at Ellora, dedicated to Lord Shiva. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'What is unique about how the Kailasa Temple at Ellora was carved?',
        options: ['Built from imported marble bricks', 'Carved top-down out of a single solid mountain of rock', 'Cast in molten bronze', 'Built underwater'],
        correct: 1,
        explanation: 'Ancient masons carved vertically down from the summit of the cliff, removing over 200,000 tons of stone!'
      },
      {
        question: 'Which three religions are represented across the 34 caves of Ellora?',
        options: ['Hinduism, Buddhism, and Jainism', 'Greek, Roman, and Persian', 'Christianity, Islam, and Sikhism', 'Mayan, Aztec, and Inca'],
        correct: 0,
        explanation: 'Ellora celebrates harmony with 12 Buddhist caves, 17 Hindu caves, and 5 Jain caves sitting peacefully side-by-side.'
      }
    ]
  },
  {
    id: 'shaniwar-wada',
    name: 'Shaniwar Wada',
    hindiName: 'शनिवार वाड़ा',
    stateId: 'mh',
    stateName: 'Maharashtra',
    city: 'Pune',
    coordinates: { x: 135, y: 448 },
    era: 'Medieval',
    year: '1732 CE',
    dynasty: 'Maratha Empire (Peshwa Era)',
    architectureStyle: 'Maratha Fortified Palace Architecture',
    tagline: 'The Seven-Story Palace Fortress of the Undefeated Peshwas',
    badgeIcon: '🛡️',
    heroImage: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80',
        caption: 'The mighty Dilli Darwaza with sharp steel spikes to deter war elephants'
      },
      {
        url: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=800&q=80',
        caption: 'Lotus-shaped fountain with sixteen delicate marble petals'
      }
    ],
    video: {
      title: 'Shaniwar Wada: Fortress of the Peshwas',
      youtubeId: 'q9_M3L890P8',
      duration: '3:30',
      reelScript: [
        'Built in 1732 by the undefeated warrior Peshwa Bajirao I, Shaniwar Wada was the grand palace of Pune.',
        'Its massive wooden Dilli Darwaza (Delhi Gate) is studded with 72 sharp steel spikes to stop charging war elephants.',
        'At its peak, thousands of brave soldiers and noble statesmen gathered in its magnificent courtyards.'
      ]
    },
    shortStory: 'Founded on a Saturday (Shaniwar) in 1730 by the fearless Peshwa Bajirao I, this seven-story palace was the nerve center of Maratha power across India. Its huge teakwood entrance gate, the Dilli Darwaza, was angled so that enemy elephants could never build up speed to ram it, and featured 72 lethal anti-elephant steel spikes at the height of an elephant’s forehead!',
    personality: {
      name: 'Peshwa Bajirao I',
      title: 'Prime Minister & Military Commander',
      role: 'Undefeated in 41 Historic Battles',
      avatar: '⚔️',
      quote: 'Strike at the trunk of the withered tree, and the branches will fall by themselves!',
      bio: 'Peshwa Bajirao I (1700–1740) was one of the most brilliant cavalry tacticians in world history, famed for winning 41 battles without a single defeat.'
    },
    funFacts: [
      'The Dilli Darwaza has 72 sharp iron spikes positioned exactly at an elephant’s forehead level to repel charges!',
      'The famous Hazari Karanje fountain was shaped like a 16-petal lotus and could spray 1,000 graceful streams of water simultaneously!',
      'The foundation stone was laid on Saturday, January 10, 1730—which is why it was named "Shaniwar" Wada!'
    ],
    riddles: [
      { clue: 'I was built in Pune as the grand headquarters of the Peshwa rulers.', points: 300 },
      { clue: 'My huge wooden Delhi Gate is covered in 72 steel spikes to protect against war elephants.', points: 200 },
      { clue: 'My founder was the undefeated warrior Peshwa Bajirao I. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Why were sharp steel spikes attached to the Dilli Darwaza of Shaniwar Wada?',
        options: ['To hang decorative flags', 'To stop enemy war elephants from ramming the gate', 'For drying clothes', 'To catch lightning'],
        correct: 1,
        explanation: 'The 72 sharp steel spikes were fixed right at the height of an elephant’s forehead to prevent enemy armies from using elephants to break the wooden gates!'
      },
      {
        question: 'Which legendary undefeated military general built Shaniwar Wada?',
        options: ['Peshwa Bajirao I', 'Alexander the Great', 'Babur', 'Lord Clive'],
        correct: 0,
        explanation: 'Peshwa Bajirao I, who fought and won over 41 battles without losing one, laid the foundation in 1730.'
      }
    ]
  },

  // ==========================================
  // RAJASTHAN
  // ==========================================
  {
    id: 'hawa-mahal',
    name: 'Hawa Mahal (Palace of Winds)',
    hindiName: 'हवा महल',
    stateId: 'rj',
    stateName: 'Rajasthan',
    city: 'Jaipur',
    coordinates: { x: 135, y: 250 },
    era: 'Medieval',
    year: '1799 CE',
    dynasty: 'Kachhwaha Rajput Dynasty',
    architectureStyle: 'Rajput & Mughal Sandstone Architecture',
    tagline: 'The Honeycomb Palace with 953 Breeze Windows',
    badgeIcon: '💨',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        caption: 'The pink and red sandstone honeycomb facade of Hawa Mahal'
      },
      {
        url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
        caption: 'Colorful stained-glass windows scattering rainbow light inside the corridors'
      }
    ],
    video: {
      title: 'Hawa Mahal: The Giant Natural Air Conditioner',
      youtubeId: 'b7U6G2qK9xE',
      duration: '3:20',
      reelScript: [
        'Standing in the heart of the Pink City of Jaipur, Hawa Mahal looks like a royal fairytale crown.',
        'It rises five stories high without any traditional foundation, curving slightly like the crown of Lord Krishna.',
        'With 953 honeycomb windows called jharokhas, it acted as a massive ancient cooling system in desert heat!'
      ]
    },
    shortStory: 'Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal is one of the most ingenious buildings ever constructed. Shaped like the jeweled crown of Lord Krishna, this five-story pink palace has 953 miniature latticed windows called jharokhas. Because of the Venturi wind effect, breezes accelerate through these small openings, keeping the whole palace cool even during blistering 45°C Rajasthani summers!',
    personality: {
      name: 'Maharaja Sawai Pratap Singh',
      title: 'Maharaja of Jaipur & Poet King',
      role: 'Devotee of Lord Krishna & Patron of the Arts',
      avatar: '🪶',
      quote: 'May the cool winds carry the songs of courage and peace across our desert city.',
      bio: 'Maharaja Sawai Pratap Singh ruled Jaipur from 1778 to 1803. A gifted poet who wrote under the pen name "Brijnidhi", he commissioned architect Lal Chand Ustad to design Hawa Mahal.'
    },
    funFacts: [
      'Hawa Mahal has no stairs leading to the upper floors—only gentle sloping ramps so palanquins could be carried up smoothly!',
      'It has 953 small windows decorated with delicate stone latticework that allowed royal ladies to view street festivals without being seen!',
      'Despite standing 50 feet high, the top floors are only about one room deep—it is practically a giant architectural screen wall!'
    ],
    riddles: [
      { clue: 'I am a pink sandstone palace in Jaipur shaped like Lord Krishna’s crown.', points: 300 },
      { clue: 'I have 953 small windows designed to catch the breeze and keep me cool.', points: 200 },
      { clue: 'My name literally translates to "Palace of the Winds". Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'How many honeycomb windows (jharokhas) are carved into Hawa Mahal?',
        options: ['108', '365', '953', '1,200'],
        correct: 2,
        explanation: 'Hawa Mahal boasts exactly 953 intricate jharokha windows that circulate cool mountain and desert breezes.'
      },
      {
        question: 'How do you climb to the upper floors of Hawa Mahal?',
        options: ['Using steep spiral staircases', 'Walking up gentle sloping ramps', 'By rope ladders', 'Through an elevator'],
        correct: 1,
        explanation: 'There are no stairs; instead, smooth sloping ramps were built so that royal ladies and servants carrying palanquins could glide up effortlessly!'
      }
    ]
  },
  {
    id: 'amer-fort',
    name: 'Amer Fort',
    hindiName: 'आमेर किला',
    stateId: 'rj',
    stateName: 'Rajasthan',
    city: 'Jaipur',
    coordinates: { x: 140, y: 242 },
    era: 'Medieval',
    year: '1592 CE',
    dynasty: 'Kachhwaha Dynasty',
    architectureStyle: 'Rajput & Mughal Fortress Architecture',
    tagline: 'The Hilltop Palace of Mirrored Stars and Golden Gates',
    badgeIcon: '✨',
    heroImage: 'https://images.unsplash.com/photo-1585136917145-2f5a5fb04b90?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1585136917145-2f5a5fb04b90?auto=format&fit=crop&w=800&q=80',
        caption: 'Amer Fort reflected on the tranquil waters of Maota Lake'
      },
      {
        url: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        caption: 'Sheesh Mahal - The glittering Hall of Mirrors'
      }
    ],
    video: {
      title: 'Amer Fort: The Hall of Ten Thousand Mirrors',
      youtubeId: 'r4E6o9B3v8M',
      duration: '4:00',
      reelScript: [
        'Amer Fort stands high upon the rugged Aravalli hills overlooking Maota Lake.',
        'Inside its golden courtyards lies the Sheesh Mahal, built with imported Belgian convex glass mirrors.',
        'When a single candle is lit in the dark hall, thousands of glowing reflections turn the ceiling into a dazzling night sky!'
      ]
    },
    shortStory: 'Constructed out of warm yellow and pink sandstone, Amer Fort rises above Maota Lake like a golden dream. Its crown jewel is the Sheesh Mahal (Hall of Mirrors). Master craftsmen set thousands of convex mirrors into the ceilings and walls in floral patterns. At night, when a single lamp or candle was lit, the mirrors multiplied the tiny flame into thousands of twinkling stars, filling the whole palace with magical celestial light!',
    personality: {
      name: 'Raja Man Singh I',
      title: 'Ruler of Amer & Trusted Commander',
      role: 'Built the Grand Amer Fort Citadel',
      avatar: '🛡️',
      quote: 'Strength of stone and courage of heart will guard this land forever.',
      bio: 'Raja Man Singh I began construction of Amer Fort in 1592. He was a valiant warrior, an esteemed diplomat, and a generous patron of Indian classical arts and temple construction.'
    },
    funFacts: [
      'Lighting just two candles in the Sheesh Mahal produces enough multiplied reflections to illuminate the entire hall!',
      'An underground secret tunnel connects Amer Fort to Jaigarh Fort high above, allowing the royal family to safely escape during sieges!',
      'The massive iron cannon Jaivana, kept at neighboring Jaigarh Fort, was the largest wheeled cannon in the world and was fired only once!'
    ],
    riddles: [
      { clue: 'I am a grand hilltop fort overlooking Maota Lake near Jaipur.', points: 300 },
      { clue: 'My Sheesh Mahal turns a single candle flame into thousands of twinkling mirror stars.', points: 200 },
      { clue: 'I am connected by a secret mountain tunnel to Jaigarh Fort. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'What happens in the Sheesh Mahal of Amer Fort when you light a single candle?',
        options: ['The room fills with smoke', 'The thousands of glass mirrors reflect the flame into a starry night sky', 'The candle immediately blows out', 'A trapdoor opens'],
        correct: 1,
        explanation: 'Because the walls and ceilings are covered in convex mirrors, a single candle creates thousands of tiny twinkling reflections that make the ceiling look like a sky of stars!'
      }
    ]
  },

  // ==========================================
  // DELHI
  // ==========================================
  {
    id: 'red-fort',
    name: 'Red Fort (Lal Qila)',
    hindiName: 'लाल किला',
    stateId: 'dl',
    stateName: 'Delhi',
    city: 'Old Delhi',
    coordinates: { x: 186, y: 210 },
    era: 'Medieval',
    year: '1648 CE',
    dynasty: 'Mughal Empire',
    architectureStyle: 'Mughal Red Sandstone & Marble Citadel',
    tagline: 'The Historic Citadel Where the Indian Tricolor Flies Proudly',
    badgeIcon: '🇮🇳',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        caption: 'Lahori Gate - The magnificent main entrance to the Red Fort'
      },
      {
        url: 'https://images.unsplash.com/photo-1592635196078-9fe3d54f2377?auto=format&fit=crop&w=800&q=80',
        caption: 'Diwan-i-Khas - Hall of Private Audiences adorned with white marble arches'
      }
    ],
    video: {
      title: 'Red Fort: The Symbol of Modern India’s Freedom',
      youtubeId: '3zM5uY2W2pQ',
      duration: '3:50',
      reelScript: [
        'Built along the Yamuna River in 1648, the Red Fort was the seat of emperors for two centuries.',
        'Its massive octagonal walls are made of fiery red sandstone rising 33 meters high.',
        'Every year on August 15th, India’s Prime Minister hoists the National Tricolor here and addresses the entire nation!'
      ]
    },
    shortStory: 'Constructed by Emperor Shah Jahan when he shifted his imperial capital from Agra to Delhi, the Red Fort (Lal Qila) is a masterpiece of octagonal urban planning. Inside its massive red sandstone walls lay the famous Stream of Paradise (Nahr-i-Bihisht) cooling royal pavilions with continuous flowing water. Today, the Red Fort stands as the ultimate symbol of independent India, where every Independence Day the Prime Minister hoists the tricolor flag to celebrate freedom!',
    personality: {
      name: 'Shah Jahan',
      title: 'Mughal Emperor & Master Builder',
      role: 'Creator of the Red Fort, Taj Mahal & Jama Masjid',
      avatar: '👑',
      quote: 'If there is a paradise on the face of the earth, it is this, it is this, it is this!',
      bio: 'Emperor Shah Jahan ruled India during the golden age of Mughal architecture. He commissioned the Red Fort in 1638 and inscribed his famous words of wonder on the marble walls of Diwan-i-Khas.'
    },
    funFacts: [
      'The famous Peacock Throne, encrusted with diamonds, emeralds, and the legendary Koh-i-Noor diamond, once stood inside the Diwan-i-Khas here!',
      'On 15 August 1947, Jawaharlal Nehru unfurled the first flag of free India from the ramparts of the Lahori Gate!',
      'The fort originally had two main gates: the Delhi Gate for ceremonial state processions and the Lahori Gate facing the city of Lahore.'
    ],
    riddles: [
      { clue: 'I am an immense red sandstone citadel situated in the heart of Delhi.', points: 300 },
      { clue: 'The Peacock Throne and the Koh-i-Noor diamond once rested inside my marble halls.', points: 200 },
      { clue: 'Every Independence Day on August 15th, the Prime Minister hoists the Tricolor from my ramparts. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Which historic gate of the Red Fort is the site where the Indian National Flag is hoisted every Independence Day?',
        options: ['Ajmeri Gate', 'Lahori Gate', 'Kashmiri Gate', 'Turkman Gate'],
        correct: 1,
        explanation: 'The Prime Minister hoists the national tricolor atop the Lahori Gate of the Red Fort every 15th August.'
      },
      {
        question: 'What famous river originally flowed directly alongside the back walls of the Red Fort?',
        options: ['Ganga', 'Yamuna', 'Godavari', 'Saraswati'],
        correct: 1,
        explanation: 'The Yamuna River flowed directly along the eastern boundary of the Red Fort, supplying water to its royal canals.'
      }
    ]
  },
  {
    id: 'qutub-minar',
    name: 'Qutub Minar & Iron Pillar',
    hindiName: 'कुतुब मीनार और लौह स्तंभ',
    stateId: 'dl',
    stateName: 'Delhi',
    city: 'Mehrauli, South Delhi',
    coordinates: { x: 184, y: 215 },
    era: 'Medieval',
    year: '1192 CE',
    dynasty: 'Delhi Sultanate (Mamluk Dynasty)',
    architectureStyle: 'Indo-Islamic Fluted Minaret',
    tagline: 'The Tallest Brick Tower in the World and the Rustless Iron Miracle',
    badgeIcon: '🗼',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        caption: 'The 72.5-meter fluted red sandstone shaft of the Qutub Minar'
      },
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        caption: 'The mysterious 1,600-year-old Iron Pillar of Chandragupta II that never rusts'
      }
    ],
    video: {
      title: 'Qutub Minar: Tower of Centuries',
      youtubeId: 'bA4yK781H4c',
      duration: '3:40',
      reelScript: [
        'Rising 72.5 meters into the Delhi sky, Qutub Minar is the tallest brick minaret in the world.',
        'Each of its five stories is encircled by balcony corbels carved with Arabic calligraphy and floral swags.',
        'In the courtyard stands a 1,600-year-old Iron Pillar that has stood in rain and scorching sun without a speck of rust!'
      ]
    },
    shortStory: 'Standing 72.5 meters (238 feet) tall with 379 spiral steps inside, Qutub Minar is the tallest brick minaret on the planet. Its fluted red sandstone shaft tapers gracefully from a wide base of 14 meters to just 2.7 meters at the top. Next to it stands the famous 1,600-year-old Iron Pillar of Delhi, forged during the Gupta Empire, which has baffled modern metallurgists by resisting rust and corrosion despite standing out in the open air for over 16 centuries!',
    personality: {
      name: 'Qutb-ud-din Aibak',
      title: 'Founder of the Delhi Sultanate',
      role: 'Began Construction of the Tower in 1192',
      avatar: '👑',
      quote: 'Let stone speak of victory and soaring ambition.',
      bio: 'Qutb-ud-din Aibak founded the Mamluk (Slave) dynasty and laid the foundation of Qutub Minar in 1192. His successor Iltutmish added three more stories, and Firoz Shah Tughlaq restored and crowned the upper level with white marble.'
    },
    funFacts: [
      'The 1,600-year-old Iron Pillar contains high amounts of phosphorus and creates a protective catalytic film that prevents rust!',
      'Qutub Minar tilts slightly to the southwest by about 65 centimeters, but engineers say its sturdy base keeps it completely safe!',
      'Inside the tower, there are exactly 379 spiral stairs leading to the top balcony!'
    ],
    riddles: [
      { clue: 'I am the tallest brick minaret in the world, standing in South Delhi.', points: 300 },
      { clue: 'I have five tapering stories made of red sandstone and white marble with 379 stairs.', points: 200 },
      { clue: 'In my courtyard stands an ancient Iron Pillar that never rusts. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Why is the ancient Iron Pillar standing in the Qutub Minar complex so famous among scientists?',
        options: ['It glows in the dark', 'It has stood in the open air for 1,600 years without rusting', 'It floats on water', 'It is made of pure gold'],
        correct: 1,
        explanation: 'Ancient Indian metallurgists created iron with high phosphorus content that formed a protective barrier, resisting rust for over 16 centuries!'
      },
      {
        question: 'How many spiral steps lead to the top of Qutub Minar?',
        options: ['100', '250', '379', '500'],
        correct: 2,
        explanation: 'There are exactly 379 steps winding inside the towering red minaret.'
      }
    ]
  },

  // ==========================================
  // UTTAR PRADESH
  // ==========================================
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    hindiName: 'ताज महल',
    stateId: 'up',
    stateName: 'Uttar Pradesh',
    city: 'Agra',
    coordinates: { x: 228, y: 248 },
    era: 'Medieval',
    year: '1631–1648 CE',
    dynasty: 'Mughal Empire',
    architectureStyle: 'Mughal Marble Masterpiece',
    tagline: 'The Jewel of World Heritage and One of the New Seven Wonders',
    badgeIcon: '💎',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        caption: 'The white marble dome of the Taj Mahal reflected in the central water mirror pool'
      },
      {
        url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
        caption: 'Delicate Pietra Dura floral inlays crafted from precious jade, lapis, and coral'
      }
    ],
    video: {
      title: 'Taj Mahal: The Poetry in White Marble',
      youtubeId: 'I6iS0r1m4n4',
      duration: '4:15',
      reelScript: [
        'Standing gracefully along the sacred Yamuna River in Agra is the world-renowned Taj Mahal.',
        'Over 20,000 master artisans, calligraphers, and stone carvers labored for 22 years to build this wonder.',
        'Its white Makrana marble changes color throughout the day: blush pink at dawn, milky white at noon, and golden at sunset!'
      ]
    },
    shortStory: 'Celebrated as one of the New Seven Wonders of the World, the Taj Mahal was built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Made of translucent white Makrana marble from Rajasthan, its surfaces are inlaid with 28 varieties of precious and semi-precious gemstones using the intricate Pietra Dura technique. The entire monument is perfectly symmetrical in every single detail—except for the positioning of the Emperor’s own tomb beside his Queen!',
    personality: {
      name: 'Empress Mumtaz Mahal & Shah Jahan',
      title: 'Mughal Empress & Emperor',
      role: 'The Eternal Love Story Behind the Marble Wonder',
      avatar: '👑',
      quote: 'Love and beauty carved in marble to outlast the sands of time.',
      bio: 'Mumtaz Mahal was celebrated for her wisdom and benevolence. Following her passing in 1631, Shah Jahan brought the finest architects and artisans from India, Persia, and Central Asia to create a monument that has captivated humanity for centuries.'
    },
    funFacts: [
      'The four corner minarets were deliberately constructed leaning slightly outwards so that if an earthquake ever hit, they would fall away from the main dome!',
      'The color of the Taj Mahal changes constantly: soft pinkish in the early morning, dazzling pearl-white in the noon sun, and glowing gold under a full moon!',
      'Over 1,000 elephants were used to transport the heavy marble blocks all the way from the quarries of Makrana in Rajasthan to Agra!'
    ],
    riddles: [
      { clue: 'I stand on the banks of the Yamuna River in the city of Agra.', points: 300 },
      { clue: 'I am built of translucent white marble with 28 varieties of precious gemstone inlays.', points: 200 },
      { clue: 'I am one of the New Seven Wonders of the World. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Why were the four minarets of the Taj Mahal built tilting slightly outwards?',
        options: ['Because of an architectural error', 'To protect the main dome from falling towers during an earthquake', 'To look taller', 'To funnel rain water'],
        correct: 1,
        explanation: 'Architect Ustad Ahmad Lahori cleverly tilted the minarets slightly outward so that in the event of an earthquake, they would collapse outward rather than crushing the precious tomb dome!'
      },
      {
        question: 'Which river flows peacefully directly behind the Taj Mahal?',
        options: ['Ganga', 'Yamuna', 'Brahmaputra', 'Narmada'],
        correct: 1,
        explanation: 'The Yamuna River flows along the northern edge of the Taj Mahal gardens.'
      }
    ]
  },
  {
    id: 'fatehpur-sikri',
    name: 'Fatehpur Sikri & Buland Darwaza',
    hindiName: 'फतेहपुर सीकरी और बुलंद दरवाजा',
    stateId: 'up',
    stateName: 'Uttar Pradesh',
    city: 'Agra District',
    coordinates: { x: 220, y: 252 },
    era: 'Medieval',
    year: '1571 CE',
    dynasty: 'Mughal Empire (Akbar)',
    architectureStyle: 'Red Sandstone Imperial City',
    tagline: 'The City of Victory and the Highest Gateway in the World',
    badgeIcon: '🚪',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        caption: 'Buland Darwaza - 54-meter grand Door of Victory'
      },
      {
        url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        caption: 'Panch Mahal - Five-story pyramidal palace supported by 176 unique columns'
      }
    ],
    video: {
      title: 'Fatehpur Sikri: Akbar’s Dream City',
      youtubeId: 'b7V8u12KnQ8',
      duration: '3:45',
      reelScript: [
        'Built entirely out of red sandstone by Emperor Akbar the Great, Fatehpur Sikri was once the bustling capital of an empire.',
        'At its entrance rises Buland Darwaza, the highest gateway in the entire world at 54 meters tall.',
        'Akbar held discussions here with scholars of Hindu, Jain, Christian, and Islamic faiths in the Ibadat Khana.'
      ]
    },
    shortStory: 'Founded in 1571 by Emperor Akbar to honor the Sufi saint Salim Chishti, Fatehpur Sikri ("City of Victory") was a magnificent planned capital carved from glowing red sandstone. Its entrance is guarded by the Buland Darwaza, which towers 54 meters (177 feet) high. Within the city sits the Panch Mahal, a five-story columned open palace where every single one of its 176 pillars is carved with a different whimsical design!',
    personality: {
      name: 'Emperor Akbar the Great',
      title: 'Third Mughal Emperor',
      role: 'Philosopher King, Unifier & Champion of Religious Tolerance',
      avatar: '👑',
      quote: 'True nobility lies not in ruling over others, but in seeking truth and bringing harmony to all beings.',
      bio: 'Emperor Akbar ruled for 49 years, expanding the empire while promoting literature, music, and the harmony of all faiths. He hosted interfaith dialogues in Fatehpur Sikri.'
    },
    funFacts: [
      'Buland Darwaza stands 54 meters (177 feet) tall from the ground, making it the highest triumphal gateway on Earth!',
      'The courtyard features a life-size stone Pachisi board where the emperor used real human courtiers as live chess pieces!',
      'The city was peacefully abandoned after just 14 years because the local water reservoirs and wells dried up!'
    ],
    riddles: [
      { clue: 'I am a grand red sandstone capital city built by Emperor Akbar.', points: 300 },
      { clue: 'My entrance gate, the Buland Darwaza, is the highest gateway in the world at 54 meters.', points: 200 },
      { clue: 'I have a life-sized stone Pachisi board where human pieces were moved. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'How tall is the Buland Darwaza at Fatehpur Sikri?',
        options: ['20 meters', '54 meters (177 feet)', '100 meters', '15 meters'],
        correct: 1,
        explanation: 'Buland Darwaza is 54 meters tall, making it the highest gateway in the world!'
      }
    ]
  },

  // ==========================================
  // KARNATAKA
  // ==========================================
  {
    id: 'hampi',
    name: 'Hampi (Vijayanagara Ruins)',
    hindiName: 'हम्पी (विजयनगर साम्राज्य)',
    stateId: 'ka',
    stateName: 'Karnataka',
    city: 'Vijayanagara District',
    coordinates: { x: 172, y: 505 },
    era: 'Medieval',
    year: '1336–1565 CE',
    dynasty: 'Vijayanagara Empire',
    architectureStyle: 'Dravidian Vijayanagara Architecture',
    tagline: 'The Boulder-Strewn City of Stone Chariots and Musical Pillars',
    badgeIcon: '🏛️',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f44487b3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600100397608-f010f44487b3?auto=format&fit=crop&w=800&q=80',
        caption: 'The iconic Stone Chariot at the Vittala Temple complex'
      },
      {
        url: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        caption: 'Virupaksha Temple tower rising beside the Tungabhadra River'
      }
    ],
    video: {
      title: 'Hampi: The Lost City of Golden Wonders',
      youtubeId: 'yK8_X77pQ9Q',
      duration: '4:20',
      reelScript: [
        'Nestled amidst surreal giant boulders on the Tungabhadra River lies Hampi, the capital of Vijayanagara.',
        'In the 15th century, it was the second largest city in the entire world, filled with riches and traders from Portugal, Persia, and China.',
        'Its Vittala Temple features the famous monolithic Stone Chariot and pillars that ring like musical bells!'
      ]
    },
    shortStory: 'Set against a dramatic fairytale landscape of giant balancing granite boulders, Hampi was once the thriving capital of the Vijayanagara Empire and one of the richest cities on earth. European travelers reported that diamonds, rubies, and pearls were sold by the kilogram in open street bazaars! In the Vittala Temple, an intricately carved Stone Chariot stands ready for flight, while 56 granite musical pillars produce sweet harmonic musical notes when tapped!',
    personality: {
      name: 'Emperor Krishnadevaraya',
      title: 'King of Vijayanagara',
      role: 'Greatest Ruler of South India, Poet & Warrior',
      avatar: '👑',
      quote: 'A king should rule with wisdom, encourage poets, and protect the happiness of every subject.',
      bio: 'Emperor Krishnadevaraya (1509–1529) presided over the golden age of Vijayanagara. He was renowned for military triumphs, building magnificent temples, patronizing Telugu and Sanskrit literature, and his famous court wit, Tenali Rama.'
    },
    funFacts: [
      'The iconic Stone Chariot of Hampi is featured on the reverse side of India’s new teal-colored ₹50 banknote!',
      'The 56 musical pillars at the Vittala Temple were carved from resonant granite rock and produce individual notes (Sa, Re, Ga, Ma) like chiming bells!',
      'In the 16th century, Hampi was the second largest city in the entire world after Beijing, housing over 500,000 people!'
    ],
    riddles: [
      { clue: 'I am an ancient ruined city surrounded by giant granite boulders on the Tungabhadra River.', points: 300 },
      { clue: 'My Vittala Temple has musical pillars and an iconic stone chariot featured on the ₹50 note.', points: 200 },
      { clue: 'I was the capital of the Vijayanagara Empire ruled by Krishnadevaraya. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Which Indian currency banknote features the famous Stone Chariot of Hampi?',
        options: ['₹10 note', '₹50 note', '₹200 note', '₹500 note'],
        correct: 1,
        explanation: 'The Reserve Bank of India placed the Hampi Stone Chariot on the reverse of the modern ₹50 banknote to honor its heritage.'
      },
      {
        question: 'What happens when you gently tap the 56 granite pillars of the Vittala Temple in Hampi?',
        options: ['They emit sweet musical notes like chiming bells', 'They glow green', 'They unlock a secret door', 'They spray water'],
        correct: 0,
        explanation: 'The hollowed resonance of the carved monolithic pillars produces distinct musical frequencies and notes!'
      }
    ]
  },
  {
    id: 'mysore-palace',
    name: 'Mysore Palace (Amba Vilas)',
    hindiName: 'मैसूर पैलेस',
    stateId: 'ka',
    stateName: 'Karnataka',
    city: 'Mysuru',
    coordinates: { x: 170, y: 558 },
    era: 'Modern',
    year: '1912 CE',
    dynasty: 'Wadiyar Dynasty',
    architectureStyle: 'Indo-Saracenic Royal Palace',
    tagline: 'The Palace of Nearly 100,000 Glowing Lights',
    badgeIcon: '💡',
    heroImage: 'https://images.unsplash.com/photo-1600100397608-f010f44487b3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600100397608-f010f44487b3?auto=format&fit=crop&w=800&q=80',
        caption: 'Mysore Palace illuminated by 97,000 golden incandescent bulbs at night'
      }
    ],
    video: {
      title: 'Mysore Palace: The Spectacle of Dasara',
      youtubeId: 'bA4yK781H4c',
      duration: '3:30',
      reelScript: [
        'Mysore Palace is the official residence of the Wadiyar dynasty in Karnataka.',
        'Every Sunday evening and during the grand Dasara festival, nearly 100,000 golden bulbs illuminate the palace all at once!',
        'A decorated royal elephant leads the parade carrying the golden howdah containing 750 kg of pure gold!'
      ]
    },
    shortStory: 'With its pink marble domes, soaring five-story tower, and turquoise blue Durbar Hall, Mysore Palace is one of the most visited royal monuments in all of India. Commissioned after the old wooden palace burned down in 1897, it was designed by British architect Henry Irwin. During the 10-day Dasara festival, the entire palace lights up with 97,000 glowing bulbs while elephants adorned in silk carry the golden royal chariot through cheering crowds!',
    personality: {
      name: 'Maharaja Krishnaraja Wadiyar IV',
      title: 'Maharaja of Mysore',
      role: 'Philosopher King & Pioneer of Modern Industrial Karnataka',
      avatar: '👑',
      quote: 'True royalty is serving the education, dignity, and prosperity of our people.',
      bio: 'Revered as "Rajarshi" (saintly king) by Mahatma Gandhi, Maharaja Krishnaraja Wadiyar IV was celebrated for establishing universities, building Asia’s first hydroelectric plant, and constructing Mysore Palace.'
    },
    funFacts: [
      'Every weekend and during Dasara, exactly 97,000 bulbs light up simultaneously, consuming over $1,000 worth of electricity each night!',
      'The Golden Howdah (elephant carriage) carried in the Dasara parade is made of 750 kilograms of solid gold!',
      'The palace receives more than 6 million visitors every year, second only to the Taj Mahal in all of India!'
    ],
    riddles: [
      { clue: 'I am a royal palace in Karnataka with pink marble domes.', points: 300 },
      { clue: 'Every weekend, nearly 100,000 light bulbs illuminate my exterior all at once.', points: 200 },
      { clue: 'I am the home of the Wadiyar dynasty in Mysuru. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Approximately how many incandescent light bulbs illuminate the exterior of Mysore Palace during celebrations?',
        options: ['1,000', '10,000', 'Nearly 100,000 (97,000)', '500,000'],
        correct: 2,
        explanation: 'Exactly 97,000 incandescent light bulbs illuminate the contours of the palace every Sunday night and during Dasara!'
      }
    ]
  },

  // ==========================================
  // TAMIL NADU
  // ==========================================
  {
    id: 'brihadisvara-temple',
    name: 'Brihadisvara Temple (Big Temple)',
    hindiName: 'बृहदेश्वर मंदिर (तंजावुर)',
    stateId: 'tn',
    stateName: 'Tamil Nadu',
    city: 'Thanjavur',
    coordinates: { x: 218, y: 615 },
    era: 'Medieval',
    year: '1010 CE',
    dynasty: 'Chola Dynasty',
    architectureStyle: 'Dravidian Granite Architecture',
    tagline: 'The 1,000-Year-Old Granite Wonder with an 81-Ton Monolithic Dome Cap',
    badgeIcon: '🕉️',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        caption: 'The 66-meter high granite Vimana tower soaring into the blue sky'
      },
      {
        url: 'https://images.unsplash.com/photo-1600100397608-f010f44487b3?auto=format&fit=crop&w=800&q=80',
        caption: 'Giant sacred Nandi statue carved from a single 25-ton block of granite'
      }
    ],
    video: {
      title: 'Brihadisvara: The Great Living Chola Temple',
      youtubeId: 'm4X_9K7uJ80',
      duration: '4:15',
      reelScript: [
        'Built over 1,000 years ago in 1010 CE by Emperor Raja Raja Chola I, Brihadisvara is built entirely of solid granite.',
        'Its Vimana tower rises 66 meters high without any mortar—each granite block fits together with puzzle-like interlocking precision.',
        'At the very peak sits the Kumbam: an 81-ton single stone carved sphere hoisted up a 6 km long wooden earthen ramp!'
      ]
    },
    shortStory: 'Standing tall for over 1,000 years in Thanjavur, the Brihadisvara Temple is one of the greatest engineering feats in human history. Built entirely of 130,000 tons of solid granite—even though there was no granite quarry within 60 kilometers!—its soaring 216-foot Vimana tower was the tallest building in India when built. At the very summit sits a single monolithic capstone weighing 81 tons, rolled to the top using a 6-kilometer long inclined earthen ramp pulled by thousands of elephants!',
    personality: {
      name: 'Emperor Raja Raja Chola I',
      title: 'Emperor of the Great Chola Dynasty',
      role: 'Visionary Ruler, Naval Conqueror & Temple Patron',
      avatar: '👑',
      quote: 'To honor the divine and inspire our people with everlasting majesty.',
      bio: 'Raja Raja Chola I (reigned 985–1014 CE) turned the Chola Empire into a supreme naval powerhouse across the Indian Ocean while establishing fair land surveys, local self-governing village panchayats, and monumental architecture.'
    },
    funFacts: [
      'The temple is constructed entirely of interlocking granite blocks without using a single ounce of cement or binding mortar!',
      'The 81-ton monolithic dome capstone (Kumbam) was hauled up to the 66-meter summit using a 6-kilometer long gentle inclined earthen ramp with elephants!',
      'The giant Nandi bull sculpture at the entrance is carved from a single 25-ton block of granite!'
    ],
    riddles: [
      { clue: 'I am a 1,000-year-old temple in Tamil Nadu built entirely of solid granite.', points: 300 },
      { clue: 'An 81-ton single stone capstone sits atop my 66-meter high tower.', points: 200 },
      { clue: 'I was built by Emperor Raja Raja Chola I in Thanjavur. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'How did Chola engineers lift the 81-ton single-stone dome cap to the top of the Brihadisvara Temple tower?',
        options: ['Using a steam crane', 'Using a 6-kilometer long inclined earthen ramp with elephants and rollers', 'By helicopter', 'They carved it where it was'],
        correct: 1,
        explanation: 'Engineers built a 6-km long inclined wooden and earthen ramp so teams of elephants and oxen could roll the 81-ton stone up to the top!'
      },
      {
        question: 'Which great Chola emperor commissioned the Big Temple of Thanjavur in 1010 CE?',
        options: ['Raja Raja Chola I', 'Ashoka', 'Harsha', 'Akbar'],
        correct: 0,
        explanation: 'Raja Raja Chola I completed this monumental granite temple in 1010 CE to celebrate his empire.'
      }
    ]
  },

  // ==========================================
  // MADHYA PRADESH
  // ==========================================
  {
    id: 'sanchi-stupa',
    name: 'Great Stupa at Sanchi',
    hindiName: 'सांची का महान स्तूप',
    stateId: 'mp',
    stateName: 'Madhya Pradesh',
    city: 'Raisen District',
    coordinates: { x: 212, y: 325 },
    era: 'Ancient',
    year: '3rd Century BCE',
    dynasty: 'Maurya Empire (Emperor Ashoka)',
    architectureStyle: 'Buddhist Hemispherical Stupa & Toranas',
    tagline: 'The Oldest Stone Structure in India Commissioned by Emperor Ashoka',
    badgeIcon: '☸️',
    heroImage: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=800&q=80',
        caption: 'The Great Stupa dome and South Gateway torana at Sanchi'
      }
    ],
    video: {
      title: 'Sanchi: Ashoka’s Monument of Peace',
      youtubeId: 'b7V8u12KnQ8',
      duration: '3:30',
      reelScript: [
        'Commissioned in the 3rd century BCE by Emperor Ashoka the Great, Sanchi Stupa is the oldest stone structure in India.',
        'Its hemispherical stone dome preserves the sacred relics of the Buddha.',
        'Its four stone torana gateways are carved with intricate stories of kindness, talking animals, and ancient wisdom.'
      ]
    },
    shortStory: 'After the tragic Kalinga war, Emperor Ashoka renounced violence and embraced Buddhism, dedicating his empire to Dhamma (righteousness and peace). At Sanchi, he commissioned this grand hemispherical dome to protect sacred relics of the Buddha. The four famous Toranas (gateways) face the four cardinal directions, carved with thousands of joyful elephants, winged lions, and Jataka tales. Remarkably, the Buddha is never shown in human form in the carvings—only symbolized by a sacred tree, footprints, or the Wheel of Law!',
    personality: {
      name: 'Emperor Ashoka the Great',
      title: 'Third Mauryan Emperor',
      role: 'Embraced Non-Violence, Inscribed Rock Edicts & Built Stupas',
      avatar: '☸️',
      quote: 'All men are my children. Victory through love and righteousness is the only true victory.',
      bio: 'Emperor Ashoka (304–232 BCE) ruled almost the entire Indian subcontinent. After turning toward Buddhism and non-violence, he sent envoys of peace across Asia and erected the Lion Capital that is now India’s national emblem.'
    },
    funFacts: [
      'The Great Stupa at Sanchi is featured on the back of India’s modern bright-green ₹200 banknote!',
      'The four lion emblem sculpted on the nearby Ashoka pillar at Sarnath became the official National Emblem of the Republic of India!',
      'In the intricate carvings on the four stone gateways, Buddha is never shown as a person—only represented by symbols like his footprints or an umbrella!'
    ],
    riddles: [
      { clue: 'I am the oldest stone structure in India, commissioned in the 3rd century BCE.', points: 300 },
      { clue: 'I am a hemispherical dome with four intricately carved stone gateways facing north, south, east, and west.', points: 200 },
      { clue: 'I am featured on the back of India’s ₹200 note. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Which Indian banknote features the Great Stupa at Sanchi on its reverse side?',
        options: ['₹50', '₹100', '₹200', '₹500'],
        correct: 2,
        explanation: 'The Reserve Bank of India chose the Great Stupa of Sanchi to grace the back of the ₹200 currency note.'
      },
      {
        question: 'How is the Buddha represented in the ancient carved stone gateways of Sanchi?',
        options: ['As a tall golden statue', 'Only through symbols like footprints, an umbrella, or the Bodhi tree', 'As a warrior with a bow', 'As a sailing ship'],
        correct: 1,
        explanation: 'In early Buddhist art at Sanchi, artists reverently avoided portraying the Buddha in human form, using aniconic symbols like footprints, the wheel, or a throne under the Bodhi tree!'
      }
    ]
  },

  // ==========================================
  // GUJARAT
  // ==========================================
  {
    id: 'rani-ki-vav',
    name: 'Rani ki Vav (The Queen’s Stepwell)',
    hindiName: 'रानी की वाव',
    stateId: 'gj',
    stateName: 'Gujarat',
    city: 'Patan',
    coordinates: { x: 72, y: 345 },
    era: 'Medieval',
    year: '1063 CE',
    dynasty: 'Chaulukya (Solanki) Dynasty',
    architectureStyle: 'Maru-Gurjara Subterranean Stepwell',
    tagline: 'The Seven-Level Inverted Underground Temple Honoring Water',
    badgeIcon: '💧',
    heroImage: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=800&q=80',
        caption: 'Seven terraced underground levels adorned with over 500 major sculptures'
      }
    ],
    video: {
      title: 'Rani ki Vav: The Inverted Subterranean Wonder',
      youtubeId: 'b7U6G2qK9xE',
      duration: '3:20',
      reelScript: [
        'Hidden beneath the sands of Gujarat for centuries lies Rani ki Vav, an inverted underground temple.',
        'Built by Queen Udayamati in memory of her beloved king, it descends seven stories deep into the earth.',
        'Over 500 principal sculptures of Lord Vishnu, celestial dancers, and geometric pillars decorate its stepped walls!'
      ]
    },
    shortStory: 'While most temples in the world soar up toward the sky, Rani ki Vav ("The Queen’s Stepwell") in Patan was built going deep down into the earth as an inverted subterranean temple! Commissioned in 1063 CE by Queen Udayamati in memory of her husband King Bhima I, it descends through seven levels of carved stairs and pavilions. Covered by flood silt from the Saraswati River for centuries, its sculptures were miraculously preserved like brand new under the mud until archaeologists unearthed them!',
    personality: {
      name: 'Queen Udayamati',
      title: 'Queen of the Chaulukya Dynasty',
      role: 'Commissioned the Monumental Stepwell for Her People and King',
      avatar: '👸',
      quote: 'Water is life, water is sacred; let this subterranean sanctuary quench the thirst of all weary travelers.',
      bio: 'Queen Udayamati of Gujarat built this architectural wonder in the 11th century. Unlike most memorial monuments built by kings for queens, this is a rare, magnificent monument built by a devoted Queen for her King and the welfare of her citizens.'
    },
    funFacts: [
      'Rani ki Vav is depicted on the back of India’s new lavender-colored ₹100 banknote!',
      'Because it was buried under river sand and silt for almost 800 years, its delicate stone carvings did not erode from wind or rain!',
      'There is a 30-kilometer secret underground escape tunnel beneath the final step that originally led straight to the neighboring town of Sidhpur!'
    ],
    riddles: [
      { clue: 'I am an inverted underground temple descending seven levels into the earth in Gujarat.', points: 300 },
      { clue: 'I was built by Queen Udayamati to honor sacred water and my beloved king.', points: 200 },
      { clue: 'I am proudly printed on the reverse side of India’s lavender ₹100 note. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Which Indian currency note features Rani ki Vav on its back?',
        options: ['₹20', '₹50', '₹100', '₹2000'],
        correct: 2,
        explanation: 'Rani ki Vav is featured on the reverse of the lavender-colored ₹100 banknote!'
      },
      {
        question: 'Why was Rani ki Vav designed descending into the ground instead of rising upward?',
        options: ['To hide from birds', 'As a stepwell to harvest, store, and honor sacred water in the dry desert climate', 'Because they ran out of stones', 'To stay warm in winter'],
        correct: 1,
        explanation: 'In arid Gujarat, stepwells were designed as subterranean sanctuaries where travelers could access cool, clean water and rest amidst sculpted temple galleries.'
      }
    ]
  },

  // ==========================================
  // PUNJAB
  // ==========================================
  {
    id: 'golden-temple',
    name: 'Golden Temple (Sri Harmandir Sahib)',
    hindiName: 'स्वर्ण मंदिर (हरमंदिर साहिब)',
    stateId: 'pb',
    stateName: 'Punjab',
    city: 'Amritsar',
    coordinates: { x: 148, y: 150 },
    era: 'Medieval',
    year: '1589–1604 CE',
    dynasty: 'Sikh Heritage',
    architectureStyle: 'Sikh Architecture with Marble & Gold Foil',
    tagline: 'The Sacred Golden Shrine Welcoming All Humanity with Four Open Doors',
    badgeIcon: '✨',
    heroImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80',
        caption: 'The shimmering Golden Temple reflected in the serene waters of the Amrit Sarovar'
      },
      {
        url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        caption: 'The causeway bridge leading across the holy pool to the inner sanctum'
      }
    ],
    video: {
      title: 'The Golden Temple: Langar for 100,000 Souls',
      youtubeId: 'b6vWzM9n4mU',
      duration: '4:00',
      reelScript: [
        'Sri Harmandir Sahib in Amritsar sits in the center of the Amrit Sarovar, the Pool of Nectar.',
        'Its upper two floors are overlaid with 500 kilograms of pure gold leaf foil.',
        'With four open doors facing north, south, east, and west, it warmly welcomes every human being regardless of caste, faith, or nationality.',
        'Its community kitchen (Langar) serves over 100,000 free hot meals every day of the year!'
      ]
    },
    shortStory: 'Surrounded by the peaceful waters of the Amrit Sarovar (Pool of Nectar) in Amritsar, the Golden Temple is the spiritual heart of Sikhism. Built on a lower level than the surrounding land so that visitors walk downward in humility, it features four grand entrances open to the four directions, signifying that people of all faiths, castes, and backgrounds are equally welcome. Its legendary community kitchen (Langar) is the largest free kitchen in the world, preparing and serving over 100,000 hot vegetarian meals daily with love and volunteer service (Seva)!',
    personality: {
      name: 'Guru Arjan Dev & Maharaja Ranjit Singh',
      title: 'Fifth Sikh Guru & Lion of Punjab',
      role: 'Compiled the Adi Granth & Gold-Plated the Sacred Shrine',
      avatar: '☬',
      quote: 'Recognize the whole human race as one.',
      bio: 'Guru Arjan Dev designed Harmandir Sahib and installed the sacred scripture in 1604. Centuries later, Maharaja Ranjit Singh (1780–1839) covered the upper walls and dome with 500 kg of pure gold foil, giving it its famous name.'
    },
    funFacts: [
      'The community kitchen (Langar) runs 24 hours a day, 365 days a year, serving over 100,000 free hot meals daily using automated roti machines and giant cauldrons!',
      'Over 500 kilograms of pure 24-karat gold foil adorn the outer dome and upper walls of the sanctum!',
      'The foundation stone was laid in 1589 by a revered Muslim Sufi saint, Hazrat Mian Mir of Lahore, at the invitation of Guru Arjan Dev to symbolize universal friendship!'
    ],
    riddles: [
      { clue: 'I sit in the middle of the sacred Amrit Sarovar pool in Punjab.', points: 300 },
      { clue: 'My dome is gilded with 500 kilograms of pure gold foil.', points: 200 },
      { clue: 'My Langar serves over 100,000 free hot meals every single day to all people. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'What do the four open doors of the Golden Temple symbolize?',
        options: ['The four seasons', 'That people of all castes, religions, and backgrounds are equally welcome', 'The four winds', 'Four ancient kings'],
        correct: 1,
        explanation: 'Unlike traditional shrines that faced in one direction, Harmandir Sahib was deliberately built with doors facing all four cardinal directions to welcome all humanity equally!'
      },
      {
        question: 'Who laid the foundation stone of the Golden Temple at the invitation of Guru Arjan Dev?',
        options: ['Hazrat Mian Mir (a Muslim Sufi saint)', 'Christopher Columbus', 'Emperor Akbar', 'King George'],
        correct: 0,
        explanation: 'Guru Arjan Dev invited revered Sufi saint Hazrat Mian Mir to lay the foundation stone in 1589, demonstrating universal brotherhood.'
      }
    ]
  },

  // ==========================================
  // BIHAR
  // ==========================================
  {
    id: 'nalanda-university',
    name: 'Ancient Nalanda Mahavihara',
    hindiName: 'प्राचीन नालंदा विश्वविद्यालय',
    stateId: 'br',
    stateName: 'Bihar',
    city: 'Nalanda',
    coordinates: { x: 375, y: 280 },
    era: 'Ancient',
    year: '427–1197 CE',
    dynasty: 'Gupta Empire & King Harsha',
    architectureStyle: 'Ancient Buddhist Residential University & Stupas',
    tagline: 'The World’s First Global Residential University',
    badgeIcon: '📚',
    heroImage: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=800&q=80',
        caption: 'The towering red brick ruins of Temple 3 at Nalanda'
      }
    ],
    video: {
      title: 'Nalanda: The Ancient Oxford of the East',
      youtubeId: 'I6iS0r1m4n4',
      duration: '4:00',
      reelScript: [
        'Established in the 5th century CE, Nalanda was the ancient world’s greatest residential university.',
        'Over 10,000 students and 2,000 teachers lived and studied here completely free of cost.',
        'Scholars traveled thousands of miles across dangerous mountains from China, Korea, Japan, and Persia to study medicine, astronomy, and mathematics.',
        'Its legendary nine-story library, Dharmaganja, held hundreds of thousands of handwritten manuscripts!'
      ]
    },
    shortStory: 'More than 1,500 years ago, Nalanda was the beating heart of global scholarship. Supported by 200 nearby villages that supplied food and resources, over 10,000 students from China, Greece, Persia, Korea, and Tibet received free tuition, room, and board! Students had to pass a notoriously rigorous verbal oral exam given by the university gatekeeper (Dwarapala) just to enter the campus. Its nine-story library, Dharmaganja, was so vast that when it was burned by invaders in 1193, records say the manuscripts smoldered for three whole months!',
    personality: {
      name: 'Xuanzang (Hiuen Tsang) & Aryabhata',
      title: 'Famous Pilgrim Scholar & Astronomer',
      role: 'Chronicled Nalanda’s Grandeur & Discovered Zero',
      avatar: '📜',
      quote: 'Knowledge is the torch that dispels all darkness from the minds of humanity.',
      bio: 'The great Chinese monk Xuanzang walked for years across Central Asia to study and teach at Nalanda in the 7th century CE. Nalanda was also associated with Aryabhata, the genius mathematician who gave the world the concept of Zero and calculated the circumference of the Earth!'
    },
    funFacts: [
      'Admission was so difficult that 7 to 8 out of every 10 hopeful students were turned away at the front door by the gatekeeper scholar!',
      'The university library complex had three massive buildings named Ratnasagara (Ocean of Jewels), Ratnodadhi (Sea of Jewels), and Ratnaranjaka (Jewel-Adorned)!',
      'Tuition, food, clothing, and medicine were 100% free for every single student, funded by the revenue of 200 donated royal villages!'
    ],
    riddles: [
      { clue: 'I was the ancient world’s premier residential university located in Bihar.', points: 300 },
      { clue: 'Over 10,000 students from China, Japan, and Persia studied astronomy and medicine here for free.', points: 200 },
      { clue: 'My nine-story library of ancient manuscripts was called Dharmaganja. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'What was unique about the admission test to enter Nalanda University?',
        options: ['You had to pay 1,000 gold coins', 'You had to pass a tough verbal oral examination given by the university gatekeeper', 'You had to win a wrestling match', 'Anyone could walk in'],
        correct: 1,
        explanation: 'The university gatekeeper (Dwarapala) was himself a brilliant scholar who tested applicants on philosophy and logic at the entrance!'
      },
      {
        question: 'Which famous Chinese Buddhist monk traveled on foot to Nalanda and documented its daily life in the 7th century CE?',
        options: ['Marco Polo', 'Xuanzang (Hiuen Tsang)', 'Ibn Battuta', 'Confucius'],
        correct: 1,
        explanation: 'Xuanzang spent years studying and teaching at Nalanda and carried hundreds of precious manuscripts back to China.'
      }
    ]
  },

  // ==========================================
  // ODISHA
  // ==========================================
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    hindiName: 'कोणार्क सूर्य मंदिर',
    stateId: 'or',
    stateName: 'Odisha',
    city: 'Konark, Puri District',
    coordinates: { x: 350, y: 412 },
    era: 'Medieval',
    year: '1250 CE',
    dynasty: 'Eastern Ganga Dynasty',
    architectureStyle: 'Kalinga Chariot Architecture',
    tagline: 'The Colossal Chariot of the Sun God with 24 Sundial Wheels',
    badgeIcon: '☀️',
    heroImage: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=800&q=80',
        caption: 'Intricately carved stone wheel acting as an accurate solar clock'
      }
    ],
    video: {
      title: 'Konark: The Chariot of the Sun',
      youtubeId: 'b7U6G2qK9xE',
      duration: '3:30',
      reelScript: [
        'Built along the Bay of Bengal coast in 1250 CE, Konark is conceived as an immense stone chariot for Surya, the Sun God.',
        'It features 24 colossal stone wheels pulled by seven galloping war horses.',
        'Each wheel is an astronomical marvel that tells the exact time to the minute using the position of shadows cast by its spokes!'
      ]
    },
    shortStory: 'Carved out of Khondalite stone on the shores of the Bay of Bengal, the Konark Sun Temple was designed as an immense 100-foot-tall chariot belonging to Surya, the solar deity. It is pulled across the heavens by seven spirited stone horses (representing the seven days of the week and the seven colors of light) and rolled on 24 giant stone wheels (representing the hours of the day). Each wheel is a working sundial: by placing a finger or stick at the center hub, you can tell the exact minute of the day by reading the shadow on the spokes!',
    personality: {
      name: 'King Narasimhadeva I',
      title: 'Ruler of the Eastern Ganga Dynasty',
      role: 'Commissioned the Konark Chariot Temple',
      avatar: '👑',
      quote: 'Let our tribute to the life-giving Sun endure as long as the sun itself rises each morning.',
      bio: 'King Narasimhadeva I (1238–1264 CE) commissioned 1,200 master sculptors and architects who laboured for 12 years to create this UNESCO World Heritage marvel.'
    },
    funFacts: [
      'One of the 24 stone wheels of Konark is featured on India’s chocolate-brown ₹10 banknote!',
      'Sailors in ancient times called Konark the "Black Pagoda" because its dark magnetic stone temple served as a landmark visible far out at sea!',
      'The 7 horses pulling the chariot represent the 7 days of the week and the 7 colors of the rainbow, while the 24 wheels represent the 24 hours in a day!'
    ],
    riddles: [
      { clue: 'I am a 13th-century temple carved in the shape of a colossal chariot on the Odisha coast.', points: 300 },
      { clue: 'I have 24 stone wheels that function as accurate solar clocks and 7 galloping stone horses.', points: 200 },
      { clue: 'My famous sundial wheel is printed on the back of India’s ₹10 note. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'Which Indian currency note features the Konark Sun Temple wheel?',
        options: ['₹10 note', '₹20 note', '₹50 note', '₹100 note'],
        correct: 0,
        explanation: 'The iconic 24-spoke stone sundial wheel of Konark is featured on the back of the chocolate-brown ₹10 banknote.'
      },
      {
        question: 'What do the 7 galloping stone horses pulling the Konark chariot represent?',
        options: ['The 7 days of the week and the 7 colors of visible light', 'Seven kings', 'Seven oceans', 'Seven months'],
        correct: 0,
        explanation: 'The 7 horses pulling Surya’s celestial chariot represent both the 7 days of the week and the 7 hues of light that make up white sunlight!'
      }
    ]
  },

  // ==========================================
  // TELANGANA
  // ==========================================
  {
    id: 'charminar',
    name: 'Charminar',
    hindiName: 'चारमीनार',
    stateId: 'tg',
    stateName: 'Telangana',
    city: 'Hyderabad',
    coordinates: { x: 236, y: 462 },
    era: 'Medieval',
    year: '1591 CE',
    dynasty: 'Qutb Shahi Dynasty',
    architectureStyle: 'Indo-Islamic & Cazia Arch Architecture',
    tagline: 'The Four-Minaret Heart of Hyderabad',
    badgeIcon: '🕌',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
        caption: 'The four towering minarets rising above the historic markets of Old Hyderabad'
      }
    ],
    video: {
      title: 'Charminar: The Monument of Hope',
      youtubeId: 'b7U6G2qK9xE',
      duration: '3:10',
      reelScript: [
        'Built in 1591 by Sultan Muhammad Quli Qutb Shah, Charminar is the centerpiece of Hyderabad.',
        'Its name literally means "Four Minarets", each rising 56 meters high with double balconies.',
        'It was built at the intersection of historical trade routes to celebrate the eradication of a deadly plague!'
      ]
    },
    shortStory: 'Standing proud at the lively crossroads of the historic Laad Bazaar in Hyderabad, Charminar ("Four Minarets") is an iconic square structure with four grand arches facing the cardinal directions. Built in 1591 by Sultan Muhammad Quli Qutb Shah, it was commissioned as a prayer of thanksgiving when a devastating epidemic was wiped out. Each of its four graceful minarets stands 56 meters (184 feet) tall, housing 149 spiral steps leading to open balconies overlooking the bustling city of pearls!',
    personality: {
      name: 'Muhammad Quli Qutb Shah',
      title: 'Fifth Sultan of the Qutb Shahi Dynasty',
      role: 'Founder of Hyderabad & Accomplished Poet',
      avatar: '👑',
      quote: 'Fill this city with people of all religions as You have filled the river with fish, O Lord.',
      bio: 'Muhammad Quli Qutb Shah founded Hyderabad in 1591 and built Charminar. A gifted multilingual poet, he wrote verses celebrating festivals like Diwali, Eid, and Basant.'
    },
    funFacts: [
      'Each of the four minarets is four stories high and contains exactly 149 spiral steps leading to the top level!',
      'An ancient secret underground tunnel was rumored to connect Charminar directly to Golconda Fort, 8 kilometers away, as an escape route!',
      'Charminar is built of granite, lime mortar, and pulverized marble, surviving over 430 years without structural damage!'
    ],
    riddles: [
      { clue: 'I am a square monument with four soaring minarets in the heart of Hyderabad.', points: 300 },
      { clue: 'I was built in 1591 to celebrate the end of a deadly plague epidemic.', points: 200 },
      { clue: 'My name literally translates to "Four Minarets". Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'What does the name "Charminar" literally mean?',
        options: ['Four Gates', 'Four Minarets', 'Four Rivers', 'Four Kings'],
        correct: 1,
        explanation: 'In Urdu and Hindi, "Char" means four and "Minar" means minaret or tower—literally "Four Minarets".'
      }
    ]
  },

  // ==========================================
  // ASSAM
  // ==========================================
  {
    id: 'rang-ghar',
    name: 'Rang Ghar',
    hindiName: 'रंग घर',
    stateId: 'as',
    stateName: 'Assam',
    city: 'Sivasagar',
    coordinates: { x: 532, y: 265 },
    era: 'Medieval',
    year: '1746 CE',
    dynasty: 'Ahom Dynasty',
    architectureStyle: 'Ahom Inverted Boat Architecture',
    tagline: 'Asia’s Oldest Surviving Royal Amphitheater',
    badgeIcon: '🏟️',
    heroImage: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1599831109033-7c093a54d5e2?auto=format&fit=crop&w=800&q=80',
        caption: 'The boat-shaped roof of Rang Ghar overlooking the Rupahi Pathar grounds'
      }
    ],
    video: {
      title: 'Rang Ghar: The Colosseum of the East',
      youtubeId: 'b7V8u12KnQ8',
      duration: '3:00',
      reelScript: [
        'Built in 1746 by Ahom King Pramatta Singha in Sivasagar, Rang Ghar is considered Asia’s oldest surviving amphitheater.',
        'Its roof is shaped like an inverted royal Ahom longboat.',
        'Royals sat on the second-story balconies to enjoy traditional Bihu dances and friendly games!'
      ]
    },
    shortStory: 'Constructed in 1746 by Swargadeo Pramatta Singha of the famous Ahom dynasty (who ruled Assam unconquered for 600 years!), Rang Ghar ("House of Entertainment") is celebrated as the oldest surviving royal sports amphitheater in all of Asia! Its distinctive red roof is shaped like an inverted royal dragon boat. The royal court gathered here in the upper tier to watch traditional Assamese Bihu folk dances, wrestling, and buffalo sports on the vast grassy plains below.',
    personality: {
      name: 'Swargadeo Pramatta Singha',
      title: 'King of the Ahom Kingdom',
      role: 'Builder of Rang Ghar & Champion of Assamese Culture',
      avatar: '👑',
      quote: 'Let joy, dance, and valor unite our people under the shelter of the heavens.',
      bio: 'King Pramatta Singha ruled Assam from 1744 to 1751. During his reign, the Ahom Kingdom reached great heights in brick masonry and cultural celebrations.'
    },
    funFacts: [
      'Rang Ghar is recognized by historians as the oldest existing royal sports pavilion in all of Asia, built decades before modern stadiums!',
      'The mortar used to cement the thin baked bricks was made of duck eggs, sticky rice flour (Bora chaul), and special fish paste!',
      'The rooftop has a carved crocodile-dragon finial that mirrors the mythological guardian creatures of the Ahom kings.'
    ],
    riddles: [
      { clue: 'I am Asia’s oldest surviving royal sports amphitheater, located in Assam.', points: 300 },
      { clue: 'My roof looks like an inverted royal longboat and my bricks were stuck together with sticky rice and duck eggs.', points: 200 },
      { clue: 'Ahom kings watched Bihu dances from my upper balconies. Who am I?', points: 100 }
    ],
    quizQuestions: [
      {
        question: 'What special natural ingredients were used in the ancient mortar to build Rang Ghar in Assam?',
        options: ['Cement and sand', 'Sticky rice, duck eggs, and fish paste', 'Molten glass', 'Tree sap and volcanic ash'],
        correct: 1,
        explanation: 'Ancient Ahom builders mixed sticky rice (Bora Chaul), duck eggs, and herbal pastes to create an indestructible natural mortar that has survived earthquakes for centuries!'
      }
    ]
  }
];

// Helper functions for easy querying
export function getPlacesByState(stateId) {
  return historicalPlaces.filter(p => p.stateId === stateId);
}

export function getPlaceById(id) {
  return historicalPlaces.find(p => p.id === id);
}

export function getAllQuizzes() {
  const all = [];
  historicalPlaces.forEach(p => {
    p.quizQuestions.forEach((q, idx) => {
      all.push({
        ...q,
        placeId: p.id,
        placeName: p.name,
        stateName: p.stateName,
        qId: `${p.id}-q${idx}`
      });
    });
  });
  return all;
}

export function getAllRiddles() {
  return historicalPlaces.map(p => ({
    placeId: p.id,
    placeName: p.name,
    stateName: p.stateName,
    heroImage: p.heroImage,
    riddles: p.riddles
  }));
}
