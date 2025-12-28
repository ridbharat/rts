const questions = [
  {
    "num": 1,
    "question_en": "Atomic number represents what?",
    "question_hi": "परमाणु संख्या क्या दर्शाती है?",
    "options_en": ["Electrons", "Protons", "Neutrons", "Mass"],
    "options_hi": ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "द्रव्यमान"],
    "answer_en": "Protons",
    "answer_hi": "प्रोटॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Mass number is the sum of what?",
    "question_hi": "द्रव्यमान संख्या किसका योग होती है?",
    "options_en": ["Protons + Neutrons", "Electrons + Protons", "Neutrons + Electrons", "Only electrons"],
    "options_hi": ["प्रोटॉन + न्यूट्रॉन", "इलेक्ट्रॉन + प्रोटॉन", "न्यूट्रॉन + इलेक्ट्रॉन", "केवल इलेक्ट्रॉन"],
    "answer_en": "Protons + Neutrons",
    "answer_hi": "प्रोटॉन + न्यूट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the value of Avogadro number?",
    "question_hi": "अवोगाद्रो संख्या का मान क्या है?",
    "options_en": ["6.022×10²³", "9.8 m/s²", "1.6×10⁻¹⁹ C", "3×10⁸ m/s"],
    "options_hi": ["6.022×10²³", "9.8 m/s²", "1.6×10⁻¹⁹ C", "3×10⁸ m/s"],
    "answer_en": "6.022×10²³",
    "answer_hi": "6.022×10²³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does pH < 7 indicate?",
    "question_hi": "pH < 7 क्या दर्शाता है?",
    "options_en": ["Neutral", "Acidic", "Basic", "Salt"],
    "options_hi": ["उदासीन", "अम्लीय", "क्षारीय", "लवण"],
    "answer_en": "Acidic",
    "answer_hi": "अम्लीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What does pH > 7 indicate?",
    "question_hi": "pH > 7 क्या दर्शाता है?",
    "options_en": ["Neutral", "Acidic", "Basic", "Salt"],
    "options_hi": ["उदासीन", "अम्लीय", "क्षारीय", "लवण"],
    "answer_en": "Basic",
    "answer_hi": "क्षारीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the common name of NaCl?",
    "question_hi": "NaCl का सामान्य नाम क्या है?",
    "options_en": ["Baking soda", "Washing soda", "Table salt", "Bleaching powder"],
    "options_hi": ["बेकिंग सोडा", "धावन सोडा", "नमक", "ब्लीचिंग पाउडर"],
    "answer_en": "Table salt",
    "answer_hi": "नमक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the name of H₂SO₄?",
    "question_hi": "H₂SO₄ का नाम क्या है?",
    "options_en": ["Sulphuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
    "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
    "answer_en": "Sulphuric acid",
    "answer_hi": "सल्फ्यूरिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is formed when HCl gas is dissolved in water?",
    "question_hi": "HCl गैस को पानी में घोलने पर क्या बनता है?",
    "options_en": ["Base", "Salt", "Acid", "Neutral"],
    "options_hi": ["क्षार", "लवण", "अम्ल", "उदासीन"],
    "answer_en": "Acid",
    "answer_hi": "अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What varies in isotopes?",
    "question_hi": "समस्थानिकों में क्या भिन्न होता है?",
    "options_en": ["Protons", "Neutrons", "Electrons", "Charge"],
    "options_hi": ["प्रोटॉन", "न्यूट्रॉन", "इलेक्ट्रॉन", "आवेश"],
    "answer_en": "Neutrons",
    "answer_hi": "न्यूट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What varies in ions?",
    "question_hi": "आयनों में क्या भिन्न होता है?",
    "options_en": ["Electrons", "Protons", "Neutrons", "Mass"],
    "options_hi": ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "द्रव्यमान"],
    "answer_en": "Electrons",
    "answer_hi": "इलेक्ट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Periodic table is arranged according to what?",
    "question_hi": "आवर्त सारणी किसके अनुसार व्यवस्थित है?",
    "options_en": ["Atomic mass", "Atomic number", "Density", "Volume"],
    "options_hi": ["परमाणु द्रव्यमान", "परमाणु संख्या", "घनत्व", "आयतन"],
    "answer_en": "Atomic number",
    "answer_hi": "परमाणु संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the property of noble gases?",
    "question_hi": "उत्कृष्ट गैसों का गुण क्या होता है?",
    "options_en": ["Highly reactive", "Inert", "Radioactive", "Metallic"],
    "options_hi": ["अत्यधिक अभिक्रियाशील", "निष्क्रिय", "रेडियोधर्मी", "धात्विक"],
    "answer_en": "Inert",
    "answer_hi": "निष्क्रिय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the ratio of hydrogen to oxygen in H₂O?",
    "question_hi": "H₂O में हाइड्रोजन और ऑक्सीजन का अनुपात क्या है?",
    "options_en": ["1:1", "2:1", "3:1", "1:2"],
    "options_hi": ["1:1", "2:1", "3:1", "1:2"],
    "answer_en": "2:1",
    "answer_hi": "2:1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Covalent bond occurs between what?",
    "question_hi": "सहसंयोजक बंधन किसके बीच होता है?",
    "options_en": ["Metal–metal", "Metal–nonmetal", "Nonmetal–nonmetal", "None"],
    "options_hi": ["धातु-धातु", "धातु-अधातु", "अधातु-अधातु", "कोई नहीं"],
    "answer_en": "Nonmetal–nonmetal",
    "answer_hi": "अधातु-अधातु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Ionic bond occurs between what?",
    "question_hi": "आयनिक बंधन किसके बीच होता है?",
    "options_en": ["Nonmetal–nonmetal", "Metal–metal", "Metal–nonmetal", "None"],
    "options_hi": ["अधातु-अधातु", "धातु-धातु", "धातु-अधातु", "कोई नहीं"],
    "answer_en": "Metal–nonmetal",
    "answer_hi": "धातु-अधातु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is a strong acid?",
    "question_hi": "कौन सा एक प्रबल अम्ल है?",
    "options_en": ["HCl", "CH₃COOH", "H₂CO₃", "H₂S"],
    "options_hi": ["HCl", "CH₃COOH", "H₂CO₃", "H₂S"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is a strong base?",
    "question_hi": "कौन सा एक प्रबल क्षार है?",
    "options_en": ["NaOH", "NH₄OH", "CaCO₃", "H₂O"],
    "options_hi": ["NaOH", "NH₄OH", "CaCO₃", "H₂O"],
    "answer_en": "NaOH",
    "answer_hi": "NaOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Organic chemistry is the study of what?",
    "question_hi": "कार्बनिक रसायन किसका अध्ययन है?",
    "options_en": ["Carbon compounds", "Metals", "Salts", "Gases"],
    "options_hi": ["कार्बन यौगिक", "धातु", "लवण", "गैसें"],
    "answer_en": "Carbon compounds",
    "answer_hi": "कार्बन यौगिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the name of CH₄?",
    "question_hi": "CH₄ का नाम क्या है?",
    "options_en": ["Methane", "Ethane", "Propane", "Butane"],
    "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is an allotrope of carbon?",
    "question_hi": "कार्बन का अपररूप कौन सा है?",
    "options_en": ["Diamond", "CO₂", "CH₄", "Na₂CO₃"],
    "options_hi": ["हीरा", "CO₂", "CH₄", "Na₂CO₃"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which is the heaviest particle?",
    "question_hi": "सबसे भारी कण कौन सा है?",
    "options_en": ["Electron", "Proton", "Neutron", "Photon"],
    "options_hi": ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "फोटॉन"],
    "answer_en": "Neutron",
    "answer_hi": "न्यूट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is formed in neutralization?",
    "question_hi": "उदासीनीकरण में क्या बनता है?",
    "options_en": ["Salt + Water", "Acid + Base", "Gas + Water", "Salt + Gas"],
    "options_hi": ["लवण + जल", "अम्ल + क्षार", "गैस + जल", "लवण + गैस"],
    "answer_en": "Salt + Water",
    "answer_hi": "लवण + जल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What happens in electrolysis?",
    "question_hi": "विद्युत अपघटन में क्या होता है?",
    "options_en": ["Burning", "Chemical decomposition", "Freezing", "Boiling"],
    "options_hi": ["जलना", "रासायनिक अपघटन", "जमना", "उबलना"],
    "answer_en": "Chemical decomposition",
    "answer_hi": "रासायनिक अपघटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does a catalyst do?",
    "question_hi": "उत्प्रेरक क्या करता है?",
    "options_en": ["Increase reaction rate", "Decrease reaction rate", "Stop reaction", "Change product"],
    "options_hi": ["अभिक्रिया दर बढ़ाता है", "अभिक्रिया दर घटाता है", "अभिक्रिया रोकता है", "उत्पाद बदलता है"],
    "answer_en": "Increase reaction rate",
    "answer_hi": "अभिक्रिया दर बढ़ाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is pH 7?",
    "question_hi": "pH 7 क्या होता है?",
    "options_en": ["Acid", "Base", "Neutral", "Salt"],
    "options_hi": ["अम्ल", "क्षार", "उदासीन", "लवण"],
    "answer_en": "Neutral",
    "answer_hi": "उदासीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Chemical formula of bleaching powder?",
    "question_hi": "ब्लीचिंग पाउडर का रासायनिक सूत्र?",
    "options_en": ["CaOCl₂", "Na₂CO₃", "NaHCO₃", "CaCO₃"],
    "options_hi": ["CaOCl₂", "Na₂CO₃", "NaHCO₃", "CaCO₃"],
    "answer_en": "CaOCl₂",
    "answer_hi": "CaOCl₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Formula of washing soda?",
    "question_hi": "धावन सोडा का सूत्र?",
    "options_en": ["Na₂CO₃·10H₂O", "NaHCO₃", "CaCO₃", "K₂CO₃"],
    "options_hi": ["Na₂CO₃·10H₂O", "NaHCO₃", "CaCO₃", "K₂CO₃"],
    "answer_en": "Na₂CO₃·10H₂O",
    "answer_hi": "Na₂CO₃·10H₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Formula of baking soda?",
    "question_hi": "बेकिंग सोडा का सूत्र?",
    "options_en": ["Na₂CO₃", "NaHCO₃", "CaCO₃", "K₂SO₄"],
    "options_hi": ["Na₂CO₃", "NaHCO₃", "CaCO₃", "K₂SO₄"],
    "answer_en": "NaHCO₃",
    "answer_hi": "NaHCO₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Chemical name of rust?",
    "question_hi": "जंग का रासायनिक नाम?",
    "options_en": ["FeO", "Fe₂O₃·nH₂O", "Fe₃O₄", "FeCl₃"],
    "options_hi": ["FeO", "Fe₂O₃·nH₂O", "Fe₃O₄", "FeCl₃"],
    "answer_en": "Fe₂O₃·nH₂O",
    "answer_hi": "Fe₂O₃·nH₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which gas is used in fire extinguisher?",
    "question_hi": "अग्निशामक में कौन सी गैस प्रयोग होती है?",
    "options_en": ["O₂", "CO₂", "N₂", "H₂"],
    "options_hi": ["O₂", "CO₂", "N₂", "H₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Gold", "Mercury", "Iron", "Sodium"],
    "options_hi": ["सोना", "पारा", "लोहा", "सोडियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Most reactive metal group?",
    "question_hi": "सबसे अधिक अभिक्रियाशील धातु समूह?",
    "options_en": ["Group 1", "Group 2", "Group 17", "Group 18"],
    "options_hi": ["समूह 1", "समूह 2", "समूह 17", "समूह 18"],
    "answer_en": "Group 1",
    "answer_hi": "समूह 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which is a noble gas?",
    "question_hi": "कौन सी एक उत्कृष्ट गैस है?",
    "options_en": ["Neon", "Nitrogen", "Chlorine", "Hydrogen"],
    "options_hi": ["नियॉन", "नाइट्रोजन", "क्लोरीन", "हाइड्रोजन"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Citric acid", "Acetic acid", "Sulphuric acid", "Nitric acid"],
    "options_hi": ["साइट्रिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the approximate pH of milk?",
    "question_hi": "दूध का अनुमानित pH क्या होता है?",
    "options_en": ["2", "7", "6.5", "12"],
    "options_hi": ["2", "7", "6.5", "12"],
    "answer_en": "6.5",
    "answer_hi": "6.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which metal reacts vigorously with water?",
    "question_hi": "कौन सी धातु पानी के साथ तीव्रता से अभिक्रिया करती है?",
    "options_en": ["Gold", "Sodium", "Copper", "Silver"],
    "options_hi": ["सोना", "सोडियम", "तांबा", "चांदी"],
    "answer_en": "Sodium",
    "answer_hi": "सोडियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which gas turns lime water milky?",
    "question_hi": "कौन सी गैस चूने के पानी को दूधिया कर देती है?",
    "options_en": ["O₂", "CO₂", "N₂", "H₂"],
    "options_hi": ["O₂", "CO₂", "N₂", "H₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which acid is present in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Acetic acid", "Citric acid", "Oxalic acid", "Formic acid"],
    "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "ऑक्सैलिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "साइट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which is a greenhouse gas?",
    "question_hi": "कौन सी एक ग्रीनहाउस गैस है?",
    "options_en": ["CO₂", "O₂", "N₂", "H₂"],
    "options_hi": ["CO₂", "O₂", "N₂", "H₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which bond is strongest?",
    "question_hi": "कौन सा बंधन सबसे मजबूत है?",
    "options_en": ["Ionic", "Covalent", "Hydrogen", "Metallic"],
    "options_hi": ["आयनिक", "सहसंयोजक", "हाइड्रोजन", "धात्विक"],
    "answer_en": "Covalent",
    "answer_hi": "सहसंयोजक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which is an exothermic reaction?",
    "question_hi": "कौन सी एक ऊष्माक्षेपी अभिक्रिया है?",
    "options_en": ["Ice melting", "Burning of fuel", "Evaporation", "Boiling water"],
    "options_hi": ["बर्फ पिघलना", "ईंधन जलना", "वाष्पीकरण", "पानी उबलना"],
    "answer_en": "Burning of fuel",
    "answer_hi": "ईंधन जलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which process occurs in electroplating?",
    "question_hi": "विद्युत लेपन में कौन सी प्रक्रिया होती है?",
    "options_en": ["Reduction", "Oxidation", "Both", "None"],
    "options_hi": ["अपचयन", "ऑक्सीकरण", "दोनों", "कोई नहीं"],
    "answer_en": "Reduction",
    "answer_hi": "अपचयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is produced in Haber process?",
    "question_hi": "हैबर प्रक्रिया में क्या उत्पन्न होता है?",
    "options_en": ["HNO₃", "NH₃", "H₂SO₄", "CH₄"],
    "options_hi": ["HNO₃", "NH₃", "H₂SO₄", "CH₄"],
    "answer_en": "NH₃",
    "answer_hi": "NH₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is produced in fermentation?",
    "question_hi": "किण्वन में क्या उत्पन्न होता है?",
    "options_en": ["Ethanol", "Methane", "CO₂", "Acid"],
    "options_hi": ["एथेनॉल", "मीथेन", "CO₂", "अम्ल"],
    "answer_en": "Ethanol",
    "answer_hi": "एथेनॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is an aromatic compound?",
    "question_hi": "कौन सा एक ऐरोमैटिक यौगिक है?",
    "options_en": ["Benzene", "Methane", "Ethane", "Propane"],
    "options_hi": ["बेंजीन", "मीथेन", "ईथेन", "प्रोपेन"],
    "answer_en": "Benzene",
    "answer_hi": "बेंजीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which metal is used for making wires?",
    "question_hi": "तार बनाने के लिए कौन सी धातु प्रयोग होती है?",
    "options_en": ["Copper", "Zinc", "Silver", "Lead"],
    "options_hi": ["तांबा", "जस्ता", "चांदी", "सीसा"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which acid is present in ant sting?",
    "question_hi": "चींटी के डंक में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Citric acid", "Formic acid", "Acetic acid", "Lactic acid"],
    "options_hi": ["साइट्रिक अम्ल", "फॉर्मिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल"],
    "answer_en": "Formic acid",
    "answer_hi": "फॉर्मिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which is a radioactive element?",
    "question_hi": "कौन सा एक रेडियोधर्मी तत्व है?",
    "options_en": ["Uranium", "Sodium", "Calcium", "Magnesium"],
    "options_hi": ["यूरेनियम", "सोडियम", "कैल्शियम", "मैग्नीशियम"],
    "answer_en": "Uranium",
    "answer_hi": "यूरेनियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "कौन सी गैस हास्य गैस के नाम से जानी जाती है?",
    "options_en": ["CO₂", "NO₂", "N₂O", "O₃"],
    "options_hi": ["CO₂", "NO₂", "N₂O", "O₃"],
    "answer_en": "N₂O",
    "answer_hi": "N₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Hardest natural substance?",
    "question_hi": "सबसे कठोर प्राकृतिक पदार्थ?",
    "options_en": ["Gold", "Diamond", "Graphite", "Quartz"],
    "options_hi": ["सोना", "हीरा", "ग्रेफाइट", "क्वार्ट्ज"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
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