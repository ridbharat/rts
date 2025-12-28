
const questions = [
  {
    "num": 1,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "CO2", "H2O2", "HO"],
    "options_hi": ["H2O", "CO2", "H2O2", "HO"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the atomic number represent?",
    "question_hi": "परमाणु संख्या क्या दर्शाती है?",
    "options_en": ["Protons", "Neutrons", "Electrons", "Mass number"],
    "options_hi": ["प्रोटॉन", "न्यूट्रॉन", "इलेक्ट्रॉन", "द्रव्यमान संख्या"],
    "answer_en": "Protons",
    "answer_hi": "प्रोटॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which type of bond is present in NaCl?",
    "question_hi": "NaCl में किस प्रकार का बंधन होता है?",
    "options_en": ["Ionic", "Covalent", "Metallic", "Hydrogen"],
    "options_hi": ["आयनिक", "सहसंयोजक", "धात्विक", "हाइड्रोजन"],
    "answer_en": "Ionic",
    "answer_hi": "आयनिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does pH < 7 indicate?",
    "question_hi": "pH < 7 क्या दर्शाता है?",
    "options_en": ["Acidic", "Basic", "Neutral", "Salt"],
    "options_hi": ["अम्लीय", "क्षारीय", "उदासीन", "लवण"],
    "answer_en": "Acidic",
    "answer_hi": "अम्लीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "CO2 is an example of which oxide?",
    "question_hi": "CO2 किस ऑक्साइड का उदाहरण है?",
    "options_en": ["Acidic", "Basic", "Neutral", "Amphoteric"],
    "options_hi": ["अम्लीय", "क्षारीय", "उदासीन", "उभयधर्मी"],
    "answer_en": "Acidic",
    "answer_hi": "अम्लीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the nature of HCl?",
    "question_hi": "HCl की प्रकृति क्या है?",
    "options_en": ["Strong acid", "Weak acid", "Base", "Neutral"],
    "options_hi": ["प्रबल अम्ल", "दुर्बल अम्ल", "क्षार", "उदासीन"],
    "answer_en": "Strong acid",
    "answer_hi": "प्रबल अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Atomic mass mainly depends on which particles?",
    "question_hi": "परमाणु द्रव्यमान मुख्य रूप से किन कणों पर निर्भर करता है?",
    "options_en": ["Protons + Neutrons", "Protons only", "Electrons", "Neutrons only"],
    "options_hi": ["प्रोटॉन + न्यूट्रॉन", "केवल प्रोटॉन", "इलेक्ट्रॉन", "केवल न्यूट्रॉन"],
    "answer_en": "Protons + Neutrons",
    "answer_hi": "प्रोटॉन + न्यूट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "At which temperature is water's density maximum?",
    "question_hi": "किस तापमान पर पानी का घनत्व अधिकतम होता है?",
    "options_en": ["4°C", "0°C", "25°C", "10°C"],
    "options_hi": ["4°C", "0°C", "25°C", "10°C"],
    "answer_en": "4°C",
    "answer_hi": "4°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the formula of ozone?",
    "question_hi": "ओज़ोन का सूत्र क्या है?",
    "options_en": ["O3", "O2", "O4", "O"],
    "options_hi": ["O3", "O2", "O4", "O"],
    "answer_en": "O3",
    "answer_hi": "O3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which property differs in isotopes?",
    "question_hi": "समस्थानिकों में कौन सा गुण भिन्न होता है?",
    "options_en": ["Neutrons", "Protons", "Electrons", "Charge"],
    "options_hi": ["न्यूट्रॉन", "प्रोटॉन", "इलेक्ट्रॉन", "आवेश"],
    "answer_en": "Neutrons",
    "answer_hi": "न्यूट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does a catalyst do to a reaction?",
    "question_hi": "उत्प्रेरक अभिक्रिया पर क्या प्रभाव डालता है?",
    "options_en": ["Increases rate", "Decreases rate", "Stops reaction", "Changes color"],
    "options_hi": ["दर बढ़ाता है", "दर घटाता है", "अभिक्रिया रोकता है", "रंग बदलता है"],
    "answer_en": "Increases rate",
    "answer_hi": "दर बढ़ाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What happens during oxidation?",
    "question_hi": "ऑक्सीकरण के दौरान क्या होता है?",
    "options_en": ["Electron loss", "Electron gain", "Neutron loss", "Proton gain"],
    "options_hi": ["इलेक्ट्रॉन की हानि", "इलेक्ट्रॉन की प्राप्ति", "न्यूट्रॉन की हानि", "प्रोटॉन की प्राप्ति"],
    "answer_en": "Electron loss",
    "answer_hi": "इलेक्ट्रॉन की हानि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does pH = 7 indicate?",
    "question_hi": "pH = 7 क्या दर्शाता है?",
    "options_en": ["Neutral", "Acidic", "Basic", "Strong base"],
    "options_hi": ["उदासीन", "अम्लीय", "क्षारीय", "प्रबल क्षार"],
    "answer_en": "Neutral",
    "answer_hi": "उदासीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the shape of NH3?",
    "question_hi": "NH3 की आकृति क्या है?",
    "options_en": ["Trigonal pyramidal", "Linear", "Bent", "Tetrahedral"],
    "options_hi": ["त्रिकोणीय पिरामिड", "रैखिक", "मुड़ी हुई", "चतुष्फलकीय"],
    "answer_en": "Trigonal pyramidal",
    "answer_hi": "त्रिकोणीय पिरामिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the oxidation state of sulfur in H2SO4?",
    "question_hi": "H2SO4 में सल्फर की ऑक्सीकरण अवस्था क्या है?",
    "options_en": ["+6", "+4", "+2", "0"],
    "options_hi": ["+6", "+4", "+2", "0"],
    "answer_en": "+6",
    "answer_hi": "+6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which element has the highest electronegativity?",
    "question_hi": "किस तत्व की विद्युत ऋणात्मकता सबसे अधिक होती है?",
    "options_en": ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
    "options_hi": ["फ्लोरीन", "ऑक्सीजन", "क्लोरीन", "नाइट्रोजन"],
    "answer_en": "Fluorine",
    "answer_hi": "फ्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Hydrogen bonding occurs between hydrogen and which elements?",
    "question_hi": "हाइड्रोजन बंधन हाइड्रोजन और किन तत्वों के बीच होता है?",
    "options_en": ["H & N/O/F", "H & C", "H & S", "H & Cl"],
    "options_hi": ["H & N/O/F", "H & C", "H & S", "H & Cl"],
    "answer_en": "H & N/O/F",
    "answer_hi": "H & N/O/F",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is shared in a covalent bond?",
    "question_hi": "सहसंयोजक बंधन में क्या साझा होता है?",
    "options_en": ["Electrons", "Protons", "Neutrons", "Charge"],
    "options_hi": ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "आवेश"],
    "answer_en": "Electrons",
    "answer_hi": "इलेक्ट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Diamond is an allotrope of which element?",
    "question_hi": "हीरा किस तत्व का अपररूप है?",
    "options_en": ["Carbon", "Sulfur", "Nitrogen", "Phosphorus"],
    "options_hi": ["कार्बन", "सल्फर", "नाइट्रोजन", "फॉस्फोरस"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the formula of ethene?",
    "question_hi": "ईथीन का सूत्र क्या है?",
    "options_en": ["C2H4", "C2H6", "C3H6", "CH4"],
    "options_hi": ["C2H4", "C2H6", "C3H6", "CH4"],
    "answer_en": "C2H4",
    "answer_hi": "C2H4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the formula of the ideal gas law?",
    "question_hi": "आदर्श गैस नियम का सूत्र क्या है?",
    "options_en": ["PV = nRT", "P = mV", "V = IR", "E = mc²"],
    "options_hi": ["PV = nRT", "P = mV", "V = IR", "E = mc²"],
    "answer_en": "PV = nRT",
    "answer_hi": "PV = nRT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the atomic number of helium?",
    "question_hi": "हीलियम की परमाणु संख्या क्या है?",
    "options_en": ["2", "4", "10", "1"],
    "options_hi": ["2", "4", "10", "1"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the chemical name of rust?",
    "question_hi": "जंग का रासायनिक नाम क्या है?",
    "options_en": ["Iron oxide", "Copper oxide", "Magnesium oxide", "Aluminium oxide"],
    "options_hi": ["आयरन ऑक्साइड", "कॉपर ऑक्साइड", "मैग्नीशियम ऑक्साइड", "एल्युमिनियम ऑक्साइड"],
    "answer_en": "Iron oxide",
    "answer_hi": "आयरन ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "CH4 belongs to which class of hydrocarbons?",
    "question_hi": "CH4 हाइड्रोकार्बन के किस वर्ग से संबंधित है?",
    "options_en": ["Alkane", "Alkene", "Alkyne", "Aromatic"],
    "options_hi": ["ऐल्केन", "ऐल्कीन", "ऐल्काइन", "ऐरोमैटिक"],
    "answer_en": "Alkane",
    "answer_hi": "ऐल्केन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which process converts liquid into gas?",
    "question_hi": "कौन सी प्रक्रिया द्रव को गैस में परिवर्तित करती है?",
    "options_en": ["Evaporation", "Condensation", "Freezing", "Fusion"],
    "options_hi": ["वाष्पीकरण", "संघनन", "जमना", "संलयन"],
    "answer_en": "Evaporation",
    "answer_hi": "वाष्पीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the name of HNO3?",
    "question_hi": "HNO3 का नाम क्या है?",
    "options_en": ["Nitric acid", "Sulfuric acid", "Hydrochloric acid", "Acetic acid"],
    "options_hi": ["नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
    "answer_en": "Nitric acid",
    "answer_hi": "नाइट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which metal has the highest melting point?",
    "question_hi": "किस धातु का गलनांक सबसे अधिक होता है?",
    "options_en": ["Tungsten", "Iron", "Copper", "Gold"],
    "options_hi": ["टंगस्टन", "लोहा", "तांबा", "सोना"],
    "answer_en": "Tungsten",
    "answer_hi": "टंगस्टन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the symbol of aluminium?",
    "question_hi": "एल्युमिनियम का प्रतीक क्या है?",
    "options_en": ["Al", "Au", "Ag", "Am"],
    "options_hi": ["Al", "Au", "Ag", "Am"],
    "answer_en": "Al",
    "answer_hi": "Al",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Helium", "Neon", "Argon", "Hydrogen"],
    "options_hi": ["हीलियम", "नियॉन", "आर्गन", "हाइड्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Aqua regia is a mixture of?",
    "question_hi": "एक्वा रेजिया किसका मिश्रण है?",
    "options_en": ["HCl + HNO3", "HCl + H2SO4", "H2O + HNO3", "H2SO4 + HNO3"],
    "options_hi": ["HCl + HNO3", "HCl + H2SO4", "H2O + HNO3", "H2SO4 + HNO3"],
    "answer_en": "HCl + HNO3",
    "answer_hi": "HCl + HNO3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Acetic acid", "Formic acid", "Sulfuric acid", "Nitric acid"],
    "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which of the following is a noble gas?",
    "question_hi": "निम्नलिखित में से कौन सी नोबल गैस है?",
    "options_en": ["Neon", "Nitrogen", "Hydrogen", "Chlorine"],
    "options_hi": ["नियॉन", "नाइट्रोजन", "हाइड्रोजन", "क्लोरीन"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the boiling point of water at normal pressure?",
    "question_hi": "सामान्य दबाव पर पानी का क्वथनांक क्या है?",
    "options_en": ["100°C", "90°C", "80°C", "120°C"],
    "options_hi": ["100°C", "90°C", "80°C", "120°C"],
    "answer_en": "100°C",
    "answer_hi": "100°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "C6H12O6 is the formula of?",
    "question_hi": "C6H12O6 किसका सूत्र है?",
    "options_en": ["Glucose", "Fructose", "Sucrose", "Lactose"],
    "options_hi": ["ग्लूकोज", "फ्रुक्टोज", "सुक्रोज", "लैक्टोज"],
    "answer_en": "Glucose",
    "answer_hi": "ग्लूकोज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which acid is present in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Citric acid", "Acetic acid", "Nitric acid", "Formic acid"],
    "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "नाइट्रिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "सिट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the nature of NaOH?",
    "question_hi": "NaOH की प्रकृति क्या है?",
    "options_en": ["Strong base", "Weak base", "Acid", "Salt"],
    "options_hi": ["प्रबल क्षार", "दुर्बल क्षार", "अम्ल", "लवण"],
    "answer_en": "Strong base",
    "answer_hi": "प्रबल क्षार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Electrolysis electrodes are usually made of?",
    "question_hi": "विद्युत अपघटन इलेक्ट्रोड आमतौर पर किससे बने होते हैं?",
    "options_en": ["Graphite", "Wood", "Plastic", "Iron"],
    "options_hi": ["ग्रेफाइट", "लकड़ी", "प्लास्टिक", "लोहा"],
    "answer_en": "Graphite",
    "answer_hi": "ग्रेफाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which gas turns lime water milky?",
    "question_hi": "कौन सी गैस चूने के पानी को दूधिया बनाती है?",
    "options_en": ["CO2", "O2", "N2", "H2"],
    "options_hi": ["CO2", "O2", "N2", "H2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the symbol of gold?",
    "question_hi": "सोने का प्रतीक क्या है?",
    "options_en": ["Au", "Ag", "Gd", "Go"],
    "options_hi": ["Au", "Ag", "Gd", "Go"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the atomic number of hydrogen?",
    "question_hi": "हाइड्रोजन की परमाणु संख्या क्या है?",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the name of H2O2?",
    "question_hi": "H2O2 का नाम क्या है?",
    "options_en": ["Hydrogen peroxide", "Water", "Hydronium", "Perchlorate"],
    "options_hi": ["हाइड्रोजन पेरोक्साइड", "पानी", "हाइड्रोनियम", "परक्लोरेट"],
    "answer_en": "Hydrogen peroxide",
    "answer_hi": "हाइड्रोजन पेरोक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which metal reacts vigorously with water?",
    "question_hi": "कौन सी धातु पानी के साथ तीव्रता से अभिक्रिया करती है?",
    "options_en": ["Sodium", "Copper", "Mercury", "Gold"],
    "options_hi": ["सोडियम", "तांबा", "पारा", "सोना"],
    "answer_en": "Sodium",
    "answer_hi": "सोडियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which functional group is present in aldehydes?",
    "question_hi": "ऐल्डिहाइड्स में कौन सा क्रियात्मक समूह होता है?",
    "options_en": ["-CHO", "-OH", "-COOH", "-NH2"],
    "options_hi": ["-CHO", "-OH", "-COOH", "-NH2"],
    "answer_en": "-CHO",
    "answer_hi": "-CHO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Proteins are made up of?",
    "question_hi": "प्रोटीन किससे बने होते हैं?",
    "options_en": ["Amino acids", "Sugar", "Lipid", "Vitamin"],
    "options_hi": ["एमिनो अम्ल", "शर्करा", "लिपिड", "विटामिन"],
    "answer_en": "Amino acids",
    "answer_hi": "एमिनो अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is dry ice?",
    "question_hi": "ड्राई आइस क्या है?",
    "options_en": ["Solid CO2", "Solid O2", "Solid N2", "Solid H2"],
    "options_hi": ["ठोस CO2", "ठोस O2", "ठोस N2", "ठोस H2"],
    "answer_en": "Solid CO2",
    "answer_hi": "ठोस CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the formula of bleaching powder?",
    "question_hi": "ब्लीचिंग पाउडर का सूत्र क्या है?",
    "options_en": ["CaOCl2", "CaCl2", "CaCO3", "Ca(OH)2"],
    "options_hi": ["CaOCl2", "CaCl2", "CaCO3", "Ca(OH)2"],
    "answer_en": "CaOCl2",
    "answer_hi": "CaOCl2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which gas is used in welding?",
    "question_hi": "वेल्डिंग में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Acetylene", "Argon", "CO2", "Nitrogen"],
    "options_hi": ["एसिटिलीन", "आर्गन", "CO2", "नाइट्रोजन"],
    "answer_en": "Acetylene",
    "answer_hi": "एसिटिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which base is present in toothpaste?",
    "question_hi": "टूथपेस्ट में कौन सा क्षार होता है?",
    "options_en": ["Calcium carbonate", "NaCl", "CO2", "MgO"],
    "options_hi": ["कैल्शियम कार्बोनेट", "NaCl", "CO2", "MgO"],
    "answer_en": "Calcium carbonate",
    "answer_hi": "कैल्शियम कार्बोनेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What occurs at the anode?",
    "question_hi": "एनोड पर क्या होता है?",
    "options_en": ["Oxidation", "Reduction", "Both", "None"],
    "options_hi": ["ऑक्सीकरण", "अपचयन", "दोनों", "कोई नहीं"],
    "answer_en": "Oxidation",
    "answer_hi": "ऑक्सीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Why does graphite conduct electricity?",
    "question_hi": "ग्रेफाइट विद्युत का चालन क्यों करता है?",
    "options_en": ["Delocalized electrons", "Protons", "Neutrons", "Packed structure"],
    "options_hi": ["अस्थानीकृत इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "संकुलित संरचना"],
    "answer_en": "Delocalized electrons",
    "answer_hi": "अस्थानीकृत इलेक्ट्रॉन",
    "attempted": false,
    "selected": ""
  }
]


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