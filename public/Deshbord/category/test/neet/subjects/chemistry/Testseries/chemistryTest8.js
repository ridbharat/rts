const questions =[
  {
    "num": 1,
    "question_en": "What is the value of Avogadro's number?",
    "question_hi": "अवोगाद्रो संख्या का मान क्या होता है?",
    "options_en": ["6.022×10^23", "3.14", "9.8", "1.6×10^-19"],
    "options_hi": ["6.022×10^23", "3.14", "9.8", "1.6×10^-19"],
    "answer_en": "6.022×10^23",
    "answer_hi": "6.022×10^23",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "How is atomic number defined?",
    "question_hi": "परमाणु संख्या किससे परिभाषित होती है?",
    "options_en": ["Protons", "Neutrons", "Electrons", "Mass"],
    "options_hi": ["प्रोटॉन", "न्यूट्रॉन", "इलेक्ट्रॉन", "द्रव्यमान"],
    "answer_en": "Protons",
    "answer_hi": "प्रोटॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does pH < 7 mean?",
    "question_hi": "pH < 7 का मतलब क्या होता है?",
    "options_en": ["Acidic", "Basic", "Neutral", "Buffer"],
    "options_hi": ["अम्लीय", "क्षारीय", "उदासीन", "बफर"],
    "answer_en": "Acidic",
    "answer_hi": "अम्लीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What type of acid is HCl?",
    "question_hi": "HCl किस प्रकार का अम्ल है?",
    "options_en": ["Strong acid", "Weak acid", "Organic acid", "Lewis acid"],
    "options_hi": ["प्रबल अम्ल", "दुर्बल अम्ल", "कार्बनिक अम्ल", "लुईस अम्ल"],
    "answer_en": "Strong acid",
    "answer_hi": "प्रबल अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What type of bond is in NaCl?",
    "question_hi": "NaCl में किस प्रकार का बंधन होता है?",
    "options_en": ["Ionic", "Covalent", "Metallic", "Hydrogen"],
    "options_hi": ["आयनिक", "सहसंयोजक", "धात्विक", "हाइड्रोजन"],
    "answer_en": "Ionic",
    "answer_hi": "आयनिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the shape of water molecule?",
    "question_hi": "जल के अणु की आकृति क्या है?",
    "options_en": ["Bent", "Linear", "Tetrahedral", "Trigonal"],
    "options_hi": ["मुड़ी हुई", "रैखिक", "चतुष्फलकीय", "त्रिकोणीय"],
    "answer_en": "Bent",
    "answer_hi": "मुड़ी हुई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the ideal gas equation?",
    "question_hi": "आदर्श गैस समीकरण क्या है?",
    "options_en": ["PV = nRT", "P = mv", "V = IR", "F = ma"],
    "options_hi": ["PV = nRT", "P = mv", "V = IR", "F = ma"],
    "answer_en": "PV = nRT",
    "answer_hi": "PV = nRT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "How many total oxygen atoms are in CaCO3?",
    "question_hi": "CaCO3 में कुल ऑक्सीजन परमाणु कितने होते हैं?",
    "options_en": ["3", "2", "1", "4"],
    "options_hi": ["3", "2", "1", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is a noble gas?",
    "question_hi": "कौन सी नोबल गैस है?",
    "options_en": ["Neon", "Nitrogen", "Fluorine", "Hydrogen"],
    "options_hi": ["नियॉन", "नाइट्रोजन", "फ्लोरीन", "हाइड्रोजन"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which element has the highest electronegativity?",
    "question_hi": "विद्युत ऋणात्मकता सबसे अधिक किसकी होती है?",
    "options_en": ["Fluorine", "Oxygen", "Nitrogen", "Chlorine"],
    "options_hi": ["फ्लोरीन", "ऑक्सीजन", "नाइट्रोजन", "क्लोरीन"],
    "answer_en": "Fluorine",
    "answer_hi": "फ्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What happens in oxidation?",
    "question_hi": "ऑक्सीकरण में क्या होता है?",
    "options_en": ["Electron loss", "Electron gain", "Neutron loss", "Proton gain"],
    "options_hi": ["इलेक्ट्रॉन की हानि", "इलेक्ट्रॉन की प्राप्ति", "न्यूट्रॉन की हानि", "प्रोटॉन की प्राप्ति"],
    "answer_en": "Electron loss",
    "answer_hi": "इलेक्ट्रॉन की हानि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which impurity is added in p-type semiconductor?",
    "question_hi": "p-प्रकार अर्धचालक में कौन सी अशुद्धि मिलाई जाती है?",
    "options_en": ["Trivalent", "Pentavalent", "Hexavalent", "Divalent"],
    "options_hi": ["त्रिसंयोजी", "पंचसंयोजी", "षट्संयोजी", "द्विसंयोजी"],
    "answer_en": "Trivalent",
    "answer_hi": "त्रिसंयोजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of these is a strong base?",
    "question_hi": "इनमें से कौन सा प्रबल क्षार है?",
    "options_en": ["NaOH", "NH4OH", "Mg(OH)2", "Ca(OH)2"],
    "options_hi": ["NaOH", "NH4OH", "Mg(OH)2", "Ca(OH)2"],
    "answer_en": "NaOH",
    "answer_hi": "NaOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
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
    "num": 15,
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
    "num": 16,
    "question_en": "In which element do allotropes occur?",
    "question_hi": "अपररूप किस तत्व में पाए जाते हैं?",
    "options_en": ["Carbon", "Sodium", "Calcium", "Neon"],
    "options_hi": ["कार्बन", "सोडियम", "कैल्शियम", "नियॉन"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the formula of ammonia?",
    "question_hi": "अमोनिया का सूत्र क्या है?",
    "options_en": ["NH3", "NO2", "HNO3", "NH4"],
    "options_hi": ["NH3", "NO2", "HNO3", "NH4"],
    "answer_en": "NH3",
    "answer_hi": "NH3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is a greenhouse gas?",
    "question_hi": "कौन सी ग्रीनहाउस गैस है?",
    "options_en": ["CO2", "N2", "O2", "He"],
    "options_hi": ["CO2", "N2", "O2", "He"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does a buffer solution do?",
    "question_hi": "बफर विलयन क्या करता है?",
    "options_en": ["Maintains stable pH", "Increases boiling point", "Decreases freezing point", "Increases reaction speed"],
    "options_hi": ["pH स्थिर रखता है", "क्वथनांक बढ़ाता है", "हिमांक कम करता है", "अभिक्रिया गति बढ़ाता है"],
    "answer_en": "Maintains stable pH",
    "answer_hi": "pH स्थिर रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is a Bronsted base?",
    "question_hi": "ब्रॉन्स्टेड क्षार कौन होता है?",
    "options_en": ["Proton acceptor", "Proton donor", "Electron donor", "Electron pair acceptor"],
    "options_hi": ["प्रोटॉन स्वीकारक", "प्रोटॉन दाता", "इलेक्ट्रॉन दाता", "इलेक्ट्रॉन युग्म स्वीकारक"],
    "answer_en": "Proton acceptor",
    "answer_hi": "प्रोटॉन स्वीकारक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the structure of diamond?",
    "question_hi": "हीरे की संरचना क्या होती है?",
    "options_en": ["3D network", "Linear", "Ring", "Layered"],
    "options_hi": ["3D नेटवर्क", "रैखिक", "वलय", "स्तरित"],
    "answer_en": "3D network",
    "answer_hi": "3D नेटवर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "In which group are alkali metals found?",
    "question_hi": "क्षार धातुएँ किस समूह में होती हैं?",
    "options_en": ["Group 1", "Group 2", "Group 13", "Group 17"],
    "options_hi": ["समूह 1", "समूह 2", "समूह 13", "समूह 17"],
    "answer_en": "Group 1",
    "answer_hi": "समूह 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the formula of bleaching powder?",
    "question_hi": "ब्लीचिंग पाउडर का सूत्र क्या है?",
    "options_en": ["CaOCl2", "CaCl2", "CaCO3", "CaO"],
    "options_hi": ["CaOCl2", "CaCl2", "CaCO3", "CaO"],
    "answer_en": "CaOCl2",
    "answer_hi": "CaOCl2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which element is liquid at room temperature?",
    "question_hi": "कौन सा तत्व कमरे के तापमान पर द्रव होता है?",
    "options_en": ["Bromine", "Iodine", "Carbon", "Sodium"],
    "options_hi": ["ब्रोमीन", "आयोडीन", "कार्बन", "सोडियम"],
    "answer_en": "Bromine",
    "answer_hi": "ब्रोमीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does pH 7 indicate?",
    "question_hi": "pH 7 क्या दर्शाता है?",
    "options_en": ["Neutral", "Acidic", "Basic", "Buffer"],
    "options_hi": ["उदासीन", "अम्लीय", "क्षारीय", "बफर"],
    "answer_en": "Neutral",
    "answer_hi": "उदासीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is an electron pair donor?",
    "question_hi": "इलेक्ट्रॉन युग्म दाता कौन होता है?",
    "options_en": ["Lewis base", "Lewis acid", "Bronsted acid", "None"],
    "options_hi": ["लुईस क्षार", "लुईस अम्ल", "ब्रॉन्स्टेड अम्ल", "कोई नहीं"],
    "answer_en": "Lewis base",
    "answer_hi": "लुईस क्षार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What happens at the cathode during electrolysis?",
    "question_hi": "विद्युत अपघटन में कैथोड पर क्या होता है?",
    "options_en": ["Reduction", "Oxidation", "Neutralisation", "Decomposition"],
    "options_hi": ["अपचयन", "ऑक्सीकरण", "उदासीनीकरण", "विघटन"],
    "answer_en": "Reduction",
    "answer_hi": "अपचयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the chemical name of rust?",
    "question_hi": "जंग का रासायनिक नाम क्या है?",
    "options_en": ["Fe2O3·xH2O", "FeO", "Fe3O4", "Fe(OH)2"],
    "options_hi": ["Fe2O3·xH2O", "FeO", "Fe3O4", "Fe(OH)2"],
    "answer_en": "Fe2O3·xH2O",
    "answer_hi": "Fe2O3·xH2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which bond is the strongest?",
    "question_hi": "कौन सा बंधन सबसे मजबूत होता है?",
    "options_en": ["Covalent", "Ionic", "Hydrogen", "van der Waals"],
    "options_hi": ["सहसंयोजक", "आयनिक", "हाइड्रोजन", "वैन डर वाल्स"],
    "answer_en": "Covalent",
    "answer_hi": "सहसंयोजक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the trend of atomic radius across a period?",
    "question_hi": "आवर्त में परमाणु त्रिज्या का रुझान क्या है?",
    "options_en": ["Decrease", "Increase", "Constant", "Random"],
    "options_hi": ["घटती है", "बढ़ती है", "स्थिर रहती है", "अनियमित"],
    "answer_en": "Decrease",
    "answer_hi": "घटती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which is a noble metal?",
    "question_hi": "कौन सी उत्कृष्ट धातु है?",
    "options_en": ["Gold", "Iron", "Copper", "Lead"],
    "options_hi": ["सोना", "लोहा", "तांबा", "सीसा"],
    "answer_en": "Gold",
    "answer_hi": "सोना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the Haber process used for?",
    "question_hi": "हैबर प्रक्रिया किसके लिए उपयोग होती है?",
    "options_en": ["Ammonia", "Nitric acid", "Sulfuric acid", "Methane"],
    "options_hi": ["अमोनिया", "नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "मीथेन"],
    "answer_en": "Ammonia",
    "answer_hi": "अमोनिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the green pigment in plants?",
    "question_hi": "पौधों में हरा वर्णक क्या है?",
    "options_en": ["Chlorophyll", "Hemoglobin", "Protein", "Carbohydrate"],
    "options_hi": ["क्लोरोफिल", "हीमोग्लोबिन", "प्रोटीन", "कार्बोहाइड्रेट"],
    "answer_en": "Chlorophyll",
    "answer_hi": "क्लोरोफिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which is an organic compound?",
    "question_hi": "कौन सा कार्बनिक यौगिक है?",
    "options_en": ["CH4", "NaCl", "K2SO4", "MgO"],
    "options_hi": ["CH4", "NaCl", "K2SO4", "MgO"],
    "answer_en": "CH4",
    "answer_hi": "CH4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the oxidation state in O2?",
    "question_hi": "O2 में ऑक्सीकरण अवस्था क्या है?",
    "options_en": ["0", "-1", "+1", "-2"],
    "options_hi": ["0", "-1", "+1", "-2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which is amphoteric?",
    "question_hi": "कौन सा उभयधर्मी है?",
    "options_en": ["Al2O3", "Na2O", "MgO", "CO2"],
    "options_hi": ["Al2O3", "Na2O", "MgO", "CO2"],
    "answer_en": "Al2O3",
    "answer_hi": "Al2O3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Sulphuric acid is a ___ acid.",
    "question_hi": "सल्फ्यूरिक अम्ल एक ___ अम्ल है।",
    "options_en": ["Diprotic", "Triprotic", "Monoprotic", "None"],
    "options_hi": ["द्विप्रोटॉनिक", "त्रिप्रोटॉनिक", "एकप्रोटॉनिक", "कोई नहीं"],
    "answer_en": "Diprotic",
    "answer_hi": "द्विप्रोटॉनिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the shape of CCl4?",
    "question_hi": "CCl4 की आकृति क्या है?",
    "options_en": ["Tetrahedral", "Linear", "Bent", "Trigonal"],
    "options_hi": ["चतुष्फलकीय", "रैखिक", "मुड़ी हुई", "त्रिकोणीय"],
    "answer_en": "Tetrahedral",
    "answer_hi": "चतुष्फलकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the atomic number of Fe?",
    "question_hi": "Fe का परमाणु क्रमांक क्या है?",
    "options_en": ["26", "20", "24", "28"],
    "options_hi": ["26", "20", "24", "28"],
    "answer_en": "26",
    "answer_hi": "26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is obtained from electrolysis of water?",
    "question_hi": "जल के विद्युत अपघटन से क्या प्राप्त होता है?",
    "options_en": ["H2 + O2", "H2 only", "O2 only", "CO2"],
    "options_hi": ["H2 + O2", "केवल H2", "केवल O2", "CO2"],
    "answer_en": "H2 + O2",
    "answer_hi": "H2 + O2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which has the highest ionization energy?",
    "question_hi": "आयनन ऊर्जा सबसे अधिक किसकी होती है?",
    "options_en": ["He", "Cs", "Na", "Li"],
    "options_hi": ["He", "Cs", "Na", "Li"],
    "answer_en": "He",
    "answer_hi": "He",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which substance is used as a desiccant?",
    "question_hi": "किस पदार्थ का उपयोग शोषक के रूप में किया जाता है?",
    "options_en": ["CaCl2", "NaCl", "HCl", "NH3"],
    "options_hi": ["CaCl2", "NaCl", "HCl", "NH3"],
    "answer_en": "CaCl2",
    "answer_hi": "CaCl2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is the most electronegative element?",
    "question_hi": "सबसे अधिक विद्युत ऋणात्मक तत्व कौन सा है?",
    "options_en": ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
    "options_hi": ["फ्लोरीन", "क्लोरीन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Fluorine",
    "answer_hi": "फ्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is an aromatic compound?",
    "question_hi": "कौन सा ऐरोमैटिक यौगिक है?",
    "options_en": ["Benzene", "Ethane", "Propane", "Butane"],
    "options_hi": ["बेंजीन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
    "answer_en": "Benzene",
    "answer_hi": "बेंजीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the carboxylic acid group?",
    "question_hi": "कार्बोक्सिलिक अम्ल समूह क्या होता है?",
    "options_en": ["–COOH", "–OH", "–NH2", "–CHO"],
    "options_hi": ["–COOH", "–OH", "–NH2", "–CHO"],
    "answer_en": "–COOH",
    "answer_hi": "–COOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which has sp³ hybridization?",
    "question_hi": "किसमें sp³ संकरण होता है?",
    "options_en": ["CH4", "CO2", "C2H2", "BF3"],
    "options_hi": ["CH4", "CO2", "C2H2", "BF3"],
    "answer_en": "CH4",
    "answer_hi": "CH4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What causes the bleaching effect?",
    "question_hi": "विरंजन प्रभाव किसके कारण होता है?",
    "options_en": ["Oxidation", "Reduction", "Sublimation", "Hydrolysis"],
    "options_hi": ["ऑक्सीकरण", "अपचयन", "उर्ध्वपातन", "जल-अपघटन"],
    "answer_en": "Oxidation",
    "answer_hi": "ऑक्सीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is not an alkali metal?",
    "question_hi": "कौन सी क्षार धातु नहीं है?",
    "options_en": ["Mg", "Na", "K", "Li"],
    "options_hi": ["Mg", "Na", "K", "Li"],
    "answer_en": "Mg",
    "answer_hi": "Mg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Atomic mass unit is based on?",
    "question_hi": "परमाणु द्रव्यमान इकाई किस पर आधारित है?",
    "options_en": ["Carbon-12", "Hydrogen-1", "Oxygen-16", "Helium-4"],
    "options_hi": ["कार्बन-12", "हाइड्रोजन-1", "ऑक्सीजन-16", "हीलियम-4"],
    "answer_en": "Carbon-12",
    "answer_hi": "कार्बन-12",
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