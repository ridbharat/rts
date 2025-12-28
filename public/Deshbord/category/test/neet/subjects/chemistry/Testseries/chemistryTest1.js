const questions = [
  {
    "num": 1,
    "question_en": "Atomic number represents the number of?",
    "question_hi": "परमाणु संख्या किसकी संख्या को दर्शाती है?",
    "options_en": ["Protons", "Neutrons", "Electrons", "Nucleus"],
    "options_hi": ["प्रोटॉन", "न्यूट्रॉन", "इलेक्ट्रॉन", "नाभिक"],
    "answer_en": "Protons",
    "answer_hi": "प्रोटॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the value of Avogadro number?",
    "question_hi": "अवोगाद्रो संख्या का मान क्या है?",
    "options_en": ["6.022 × 10²³", "3.14", "9.31 × 10⁸", "1.6 × 10⁻¹⁹"],
    "options_hi": ["6.022 × 10²³", "3.14", "9.31 × 10⁸", "1.6 × 10⁻¹⁹"],
    "answer_en": "6.022 × 10²³",
    "answer_hi": "6.022 × 10²³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the formula of laughing gas?",
    "question_hi": "हास्य गैस का सूत्र क्या है?",
    "options_en": ["N₂O", "NO₂", "CO₂", "SO₂"],
    "options_hi": ["N₂O", "NO₂", "CO₂", "SO₂"],
    "answer_en": "N₂O",
    "answer_hi": "N₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "A solution with pH < 7 is?",
    "question_hi": "pH < 7 वाला विलयन होता है?",
    "options_en": ["Acidic", "Basic", "Neutral", "Salt"],
    "options_hi": ["अम्लीय", "क्षारीय", "उदासीन", "लवण"],
    "answer_en": "Acidic",
    "answer_hi": "अम्लीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "How many molecules are present in 1 mole of H₂?",
    "question_hi": "H₂ के 1 मोल में कितने अणु उपस्थित होते हैं?",
    "options_en": ["6.022×10²³", "3.011×10²³", "1.6×10⁻¹⁹", "10"],
    "options_hi": ["6.022×10²³", "3.011×10²³", "1.6×10⁻¹⁹", "10"],
    "answer_en": "6.022×10²³",
    "answer_hi": "6.022×10²³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which is the strongest bond?",
    "question_hi": "सबसे मजबूत बंधन कौन सा है?",
    "options_en": ["Covalent", "Ionic", "Hydrogen", "Van der Waals"],
    "options_hi": ["सहसंयोजक", "आयनिक", "हाइड्रोजन", "वैन डर वाल्स"],
    "answer_en": "Covalent",
    "answer_hi": "सहसंयोजक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the formula of water?",
    "question_hi": "जल का सूत्र क्या है?",
    "options_en": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
    "options_hi": ["H₂O", "H₂O₂", "HO₂", "H₃O"],
    "answer_en": "H₂O",
    "answer_hi": "H₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which one is a noble gas?",
    "question_hi": "कौन सी एक उत्कृष्ट गैस है?",
    "options_en": ["Neon", "Nitrogen", "Oxygen", "Hydrogen"],
    "options_hi": ["नियॉन", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which one is an alkali metal?",
    "question_hi": "कौन सी एक क्षार धातु है?",
    "options_en": ["Sodium", "Calcium", "Iron", "Copper"],
    "options_hi": ["सोडियम", "कैल्शियम", "लोहा", "तांबा"],
    "answer_en": "Sodium",
    "answer_hi": "सोडियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Rate of reaction depends on?",
    "question_hi": "अभिक्रिया की दर निर्भर करती है?",
    "options_en": ["Temperature", "Concentration", "Pressure", "All"],
    "options_hi": ["तापमान", "सांद्रता", "दाब", "सभी"],
    "answer_en": "All",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the mass of 1 mole of oxygen (O₂)?",
    "question_hi": "ऑक्सीजन (O₂) के 1 मोल का द्रव्यमान क्या है?",
    "options_en": ["32 g", "16 g", "64 g", "8 g"],
    "options_hi": ["32 g", "16 g", "64 g", "8 g"],
    "answer_en": "32 g",
    "answer_hi": "32 g",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Convert 25°C into Kelvin:",
    "question_hi": "25°C को केल्विन में बदलें:",
    "options_en": ["298 K", "273 K", "250 K", "100 K"],
    "options_hi": ["298 K", "273 K", "250 K", "100 K"],
    "answer_en": "298 K",
    "answer_hi": "298 K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Approximate mass of hydrogen atom?",
    "question_hi": "हाइड्रोजन परमाणु का अनुमानित द्रव्यमान?",
    "options_en": ["1 u", "2 u", "0.5 u", "4 u"],
    "options_hi": ["1 u", "2 u", "0.5 u", "4 u"],
    "answer_en": "1 u",
    "answer_hi": "1 u",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "How many moles are present in 100 g water? (M=18)",
    "question_hi": "100 g जल में कितने मोल उपस्थित हैं? (M=18)",
    "options_en": ["5.55 mol", "10 mol", "2 mol", "1 mol"],
    "options_hi": ["5.55 mol", "10 mol", "2 mol", "1 mol"],
    "answer_en": "5.55 mol",
    "answer_hi": "5.55 mol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "At STP, 22.4 L gas contains how many moles?",
    "question_hi": "STP पर, 22.4 L गैस में कितने मोल होते हैं?",
    "options_en": ["1 mol", "2 mol", "0.5 mol", "3 mol"],
    "options_hi": ["1 mol", "2 mol", "0.5 mol", "3 mol"],
    "answer_en": "1 mol",
    "answer_hi": "1 mol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Formula units in 0.5 mol NaCl?",
    "question_hi": "0.5 mol NaCl में सूत्र इकाइयाँ?",
    "options_en": ["3.011×10²³", "6.022×10²³", "1×10¹⁹", "10⁶"],
    "options_hi": ["3.011×10²³", "6.022×10²³", "1×10¹⁹", "10⁶"],
    "answer_en": "3.011×10²³",
    "answer_hi": "3.011×10²³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the pH of 10⁻³ M HCl?",
    "question_hi": "10⁻³ M HCl का pH क्या है?",
    "options_en": ["3", "1", "10", "7"],
    "options_hi": ["3", "1", "10", "7"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Value of gas constant R?",
    "question_hi": "गैस स्थिरांक R का मान?",
    "options_en": ["0.0821 L atm/K mol", "8.31 J/K mol", "Both", "None"],
    "options_hi": ["0.0821 L atm/K mol", "8.31 J/K mol", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Formula of molarity?",
    "question_hi": "मोलरता का सूत्र?",
    "options_en": ["mol/L", "g/L", "mol×L", "g/mol"],
    "options_hi": ["mol/L", "g/L", "mol×L", "g/mol"],
    "answer_en": "mol/L",
    "answer_hi": "mol/L",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Mass of 2 moles CO₂? (M=44)",
    "question_hi": "2 मोल CO₂ का द्रव्यमान? (M=44)",
    "options_en": ["88 g", "44 g", "22 g", "100 g"],
    "options_hi": ["88 g", "44 g", "22 g", "100 g"],
    "answer_en": "88 g",
    "answer_hi": "88 g",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which acid is present in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Citric acid", "Formic acid", "Acetic acid", "Oxalic acid"],
    "options_hi": ["साइट्रिक अम्ल", "फॉर्मिक अम्ल", "एसिटिक अम्ल", "ऑक्सैलिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "साइट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which is a neutral oxide?",
    "question_hi": "कौन सा एक उदासीन ऑक्साइड है?",
    "options_en": ["CO", "CO₂", "Na₂O", "MgO"],
    "options_hi": ["CO", "CO₂", "Na₂O", "MgO"],
    "answer_en": "CO",
    "answer_hi": "CO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Meaning of oxidation?",
    "question_hi": "ऑक्सीकरण का अर्थ?",
    "options_en": ["Loss of electrons", "Gain of electrons", "Gain of protons", "Loss of neutrons"],
    "options_hi": ["इलेक्ट्रॉनों की हानि", "इलेक्ट्रॉनों की प्राप्ति", "प्रोटॉनों की प्राप्ति", "न्यूट्रॉनों की हानि"],
    "answer_en": "Loss of electrons",
    "answer_hi": "इलेक्ट्रॉनों की हानि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which forms coloured compounds?",
    "question_hi": "कौन रंगीन यौगिक बनाते हैं?",
    "options_en": ["Transition metals", "S-block", "P-block", "Noble gases"],
    "options_hi": ["संक्रमण धातुएं", "S-ब्लॉक", "P-ब्लॉक", "उत्कृष्ट गैसें"],
    "answer_en": "Transition metals",
    "answer_hi": "संक्रमण धातुएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is the strongest acid?",
    "question_hi": "सबसे प्रबल अम्ल कौन सा है?",
    "options_en": ["HI", "HCl", "H₂SO₄", "HNO₃"],
    "options_hi": ["HI", "HCl", "H₂SO₄", "HNO₃"],
    "answer_en": "HI",
    "answer_hi": "HI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "pH of a neutral solution?",
    "question_hi": "उदासीन विलयन का pH?",
    "options_en": ["7", "1", "14", "4"],
    "options_hi": ["7", "1", "14", "4"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which is NOT an allotrope of carbon?",
    "question_hi": "कार्बन का अपररूप कौन सा नहीं है?",
    "options_en": ["CO₂", "Graphite", "Diamond", "Fullerene"],
    "options_hi": ["CO₂", "ग्रेफाइट", "हीरा", "फुलरीन"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "CO₂ turns lime water?",
    "question_hi": "CO₂ चूने के पानी को कर देता है?",
    "options_en": ["Milky", "Pink", "Blue", "Green"],
    "options_hi": ["दूधिया", "गुलाबी", "नीला", "हरा"],
    "answer_en": "Milky",
    "answer_hi": "दूधिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Highest electronegativity?",
    "question_hi": "सबसे अधिक विद्युत ऋणात्मकता?",
    "options_en": ["Fluorine", "Oxygen", "Nitrogen", "Chlorine"],
    "options_hi": ["फ्लोरीन", "ऑक्सीजन", "नाइट्रोजन", "क्लोरीन"],
    "answer_en": "Fluorine",
    "answer_hi": "फ्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Electrolysis of water gives?",
    "question_hi": "जल का विद्युत अपघटन देता है?",
    "options_en": ["H₂ + O₂", "H₂ + CO₂", "H₂O₂", "CO₂"],
    "options_hi": ["H₂ + O₂", "H₂ + CO₂", "H₂O₂", "CO₂"],
    "answer_en": "H₂ + O₂",
    "answer_hi": "H₂ + O₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "pH of 0.1 M HCl?",
    "question_hi": "0.1 M HCl का pH?",
    "options_en": ["1", "0.1", "10", "7"],
    "options_hi": ["1", "0.1", "10", "7"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Molar mass of CaCO₃? (Ca=40, C=12, O₃=48)",
    "question_hi": "CaCO₃ का मोलर द्रव्यमान? (Ca=40, C=12, O₃=48)",
    "options_en": ["100 g", "50 g", "72 g", "88 g"],
    "options_hi": ["100 g", "50 g", "72 g", "88 g"],
    "answer_en": "100 g",
    "answer_hi": "100 g",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "How many moles are in 44 g CO₂? (M=44)",
    "question_hi": "44 g CO₂ में कितने मोल हैं? (M=44)",
    "options_en": ["1 mol", "2 mol", "0.5 mol", "3 mol"],
    "options_hi": ["1 mol", "2 mol", "0.5 mol", "3 mol"],
    "answer_en": "1 mol",
    "answer_hi": "1 mol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Volume of 0.5 mol gas at STP?",
    "question_hi": "STP पर 0.5 मोल गैस का आयतन?",
    "options_en": ["11.2 L", "22.4 L", "5 L", "1 L"],
    "options_hi": ["11.2 L", "22.4 L", "5 L", "1 L"],
    "answer_en": "11.2 L",
    "answer_hi": "11.2 L",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Molar mass of NaCl? (23 + 35.5)",
    "question_hi": "NaCl का मोलर द्रव्यमान? (23 + 35.5)",
    "options_en": ["58.5 g", "40 g", "12 g", "23 g"],
    "options_hi": ["58.5 g", "40 g", "12 g", "23 g"],
    "answer_en": "58.5 g",
    "answer_hi": "58.5 g",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "pOH when pH = 4?",
    "question_hi": "pOH जब pH = 4?",
    "options_en": ["10", "4", "14", "8"],
    "options_hi": ["10", "4", "14", "8"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Moles in 9 g water? (M=18)",
    "question_hi": "9 g जल में मोल? (M=18)",
    "options_en": ["0.5 mol", "1 mol", "9 mol", "0.1 mol"],
    "options_hi": ["0.5 mol", "1 mol", "9 mol", "0.1 mol"],
    "answer_en": "0.5 mol",
    "answer_hi": "0.5 mol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Gas expands when?",
    "question_hi": "गैस फैलती है जब?",
    "options_en": ["Temperature increases", "Temperature decreases", "Pressure increases", "None"],
    "options_hi": ["तापमान बढ़ता है", "तापमान घटता है", "दाब बढ़ता है", "कोई नहीं"],
    "answer_en": "Temperature increases",
    "answer_hi": "तापमान बढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which is an endothermic process?",
    "question_hi": "कौन सी एक ऊष्माशोषी प्रक्रिया है?",
    "options_en": ["Melting of ice", "Combustion", "Neutralisation", "Burning"],
    "options_hi": ["बर्फ का पिघलना", "दहन", "उदासीनीकरण", "जलना"],
    "answer_en": "Melting of ice",
    "answer_hi": "बर्फ का पिघलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Combustion is which type of process?",
    "question_hi": "दहन किस प्रकार की प्रक्रिया है?",
    "options_en": ["Exothermic", "Endothermic", "Neutral", "None"],
    "options_hi": ["ऊष्माक्षेपी", "ऊष्माशोषी", "उदासीन", "कोई नहीं"],
    "answer_en": "Exothermic",
    "answer_hi": "ऊष्माक्षेपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Highest ionization energy?",
    "question_hi": "सबसे अधिक आयनन ऊर्जा?",
    "options_en": ["Helium", "Fluorine", "Neon", "Oxygen"],
    "options_hi": ["हीलियम", "फ्लोरीन", "नियॉन", "ऑक्सीजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Hybridization of CH₄?",
    "question_hi": "CH₄ का संकरण?",
    "options_en": ["sp³", "sp²", "sp", "dsp²"],
    "options_hi": ["sp³", "sp²", "sp", "dsp²"],
    "answer_en": "sp³",
    "answer_hi": "sp³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Oxidation state of oxygen in H₂O?",
    "question_hi": "H₂O में ऑक्सीजन की ऑक्सीकरण अवस्था?",
    "options_en": ["-2", "+2", "0", "-1"],
    "options_hi": ["-2", "+2", "0", "-1"],
    "answer_en": "-2",
    "answer_hi": "-2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is a reducing agent?",
    "question_hi": "कौन सा एक अपचायक है?",
    "options_en": ["H₂", "Cl₂", "O₂", "HNO₃"],
    "options_hi": ["H₂", "Cl₂", "O₂", "HNO₃"],
    "answer_en": "H₂",
    "answer_hi": "H₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Example of an electrolyte?",
    "question_hi": "विद्युत अपघट्य का उदाहरण?",
    "options_en": ["NaCl solution", "Sugar solution", "Alcohol", "Benzene"],
    "options_hi": ["NaCl विलयन", "चीनी विलयन", "अल्कोहल", "बेंजीन"],
    "answer_en": "NaCl solution",
    "answer_hi": "NaCl विलयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Shape of CH₄?",
    "question_hi": "CH₄ की आकृति?",
    "options_en": ["Tetrahedral", "Linear", "Trigonal", "Bent"],
    "options_hi": ["चतुष्फलकीय", "रैखिक", "त्रिकोणीय", "वक्र"],
    "answer_en": "Tetrahedral",
    "answer_hi": "चतुष्फलकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Most reactive metal?",
    "question_hi": "सबसे अधिक अभिक्रियाशील धातु?",
    "options_en": ["Francium", "Sodium", "Potassium", "Calcium"],
    "options_hi": ["फ्रांसियम", "सोडियम", "पोटैशियम", "कैल्शियम"],
    "answer_en": "Francium",
    "answer_hi": "फ्रांसियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Green colour in plants is due to?",
    "question_hi": "पौधों में हरा रंग किसके कारण होता है?",
    "options_en": ["Chlorophyll", "Haemoglobin", "Protein", "Starch"],
    "options_hi": ["क्लोरोफिल", "हीमोग्लोबिन", "प्रोटीन", "स्टार्च"],
    "answer_en": "Chlorophyll",
    "answer_hi": "क्लोरोफिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is a strong base?",
    "question_hi": "कौन सा एक प्रबल क्षार है?",
    "options_en": ["NaOH", "NH₄OH", "Mg(OH)₂", "Ca(OH)₂"],
    "options_hi": ["NaOH", "NH₄OH", "Mg(OH)₂", "Ca(OH)₂"],
    "answer_en": "NaOH",
    "answer_hi": "NaOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is an amphoteric oxide?",
    "question_hi": "कौन सा एक उभयधर्मी ऑक्साइड है?",
    "options_en": ["Al₂O₃", "Na₂O", "CO₂", "SO₃"],
    "options_hi": ["Al₂O₃", "Na₂O", "CO₂", "SO₃"],
    "answer_en": "Al₂O₃",
    "answer_hi": "Al₂O₃",
    "attempted": false,
    "selected": ""
  }
];


let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix
   questions[index].visited = true;
    document.getElementById("question").textContent =
       `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
       ` Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray"; // default: not visited

        if (i === currentQuestion) {
            color = "blue"; // current question
        } 
        else if (q.attempted) {
            color = "green"; // answered
        } 
        else if (q.visited) {
            color = "white"; // visited but not answered
        }

        nav.innerHTML += `
            <div class="circle" style="background:${color}; border:1px solid black;"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};