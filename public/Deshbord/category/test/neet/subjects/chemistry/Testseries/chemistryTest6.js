const questions = [
  {
    "num": 1,
    "question_en": "Which element has the largest atomic radius?",
    "question_hi": "किस तत्व की परमाणु त्रिज्या सबसे अधिक होती है?",
    "options_en": ["Cs", "Li", "Na", "K"],
    "options_hi": ["Cs", "Li", "Na", "K"],
    "answer_en": "Cs",
    "answer_hi": "Cs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which has the highest electron affinity?",
    "question_hi": "किसकी इलेक्ट्रॉन बंधुता सबसे अधिक होती है?",
    "options_en": ["Cl", "F", "O", "N"],
    "options_hi": ["Cl", "F", "O", "N"],
    "answer_en": "Cl",
    "answer_hi": "Cl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What shape does AX2 type represent?",
    "question_hi": "AX2 प्रकार किस आकृति को दर्शाता है?",
    "options_en": ["Linear", "Bent", "Tetrahedral", "Trigonal planar"],
    "options_hi": ["रैखिक", "वक्र", "चतुष्फलकीय", "त्रिकोणीय समतलीय"],
    "answer_en": "Linear",
    "answer_hi": "रैखिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the bond angle of H2O?",
    "question_hi": "H2O का बंध कोण कितना होता है?",
    "options_en": ["109.5°", "104.5°", "120°", "180°"],
    "options_hi": ["109.5°", "104.5°", "120°", "180°"],
    "answer_en": "104.5°",
    "answer_hi": "104.5°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which molecule is non-polar?",
    "question_hi": "कौन सा अणु अध्रुवीय है?",
    "options_en": ["H2O", "CO2", "SO2", "NH3"],
    "options_hi": ["H2O", "CO2", "SO2", "NH3"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What causes the flame color of alkali metals?",
    "question_hi": "क्षार धातुओं के लौ रंग का कारण क्या है?",
    "options_en": ["Ionization", "Excitation of electrons", "Oxidation", "Reduction"],
    "options_hi": ["आयनन", "इलेक्ट्रॉनों का उत्तेजन", "ऑक्सीकरण", "अपचयन"],
    "answer_en": "Excitation of electrons",
    "answer_hi": "इलेक्ट्रॉनों का उत्तेजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which has the highest ionization energy?",
    "question_hi": "किसकी आयनन ऊर्जा सबसे अधिक होती है?",
    "options_en": ["He", "Ne", "F", "Ar"],
    "options_hi": ["He", "Ne", "F", "Ar"],
    "answer_en": "He",
    "answer_hi": "He",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which molecule forms a triple bond?",
    "question_hi": "कौन सा अणु त्रि‍बंध बनाता है?",
    "options_en": ["N2", "O2", "F2", "Cl2"],
    "options_hi": ["N2", "O2", "F2", "Cl2"],
    "answer_en": "N2",
    "answer_hi": "N2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the hybridization of carbon in CH4?",
    "question_hi": "CH4 में कार्बन का संकरण क्या है?",
    "options_en": ["sp", "sp2", "sp3", "dsp2"],
    "options_hi": ["sp", "sp2", "sp3", "dsp2"],
    "answer_en": "sp3",
    "answer_hi": "sp3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the formula of ozone?",
    "question_hi": "ओजोन का सूत्र क्या है?",
    "options_en": ["O", "O2", "O3", "O4"],
    "options_hi": ["O", "O2", "O3", "O4"],
    "answer_en": "O3",
    "answer_hi": "O3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is a liquid metal?",
    "question_hi": "कौन सी तरल धातु है?",
    "options_en": ["Na", "Ca", "Hg", "Ga"],
    "options_hi": ["Na", "Ca", "Hg", "Ga"],
    "answer_en": "Hg",
    "answer_hi": "Hg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What type of solution is pH = 7?",
    "question_hi": "pH = 7 वाला विलयन किस प्रकार का होता है?",
    "options_en": ["Acidic", "Basic", "Neutral", "Buffer"],
    "options_hi": ["अम्लीय", "क्षारीय", "उदासीन", "बफर"],
    "answer_en": "Neutral",
    "answer_hi": "उदासीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which gas is used for bleaching?",
    "question_hi": "विरंजन के लिए किस गैस का उपयोग किया जाता है?",
    "options_en": ["Cl2", "O2", "H2", "CO2"],
    "options_hi": ["Cl2", "O2", "H2", "CO2"],
    "answer_en": "Cl2",
    "answer_hi": "Cl2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which is the weakest intermolecular force?",
    "question_hi": "सबसे कमजोर अंतरा-आणविक बल कौन सा है?",
    "options_en": ["Covalent", "Ionic", "Van der Waals", "Metallic"],
    "options_hi": ["सहसंयोजक", "आयनिक", "वैन डर वाल्स", "धात्विक"],
    "answer_en": "Van der Waals",
    "answer_hi": "वैन डर वाल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does a catalyst do?",
    "question_hi": "उत्प्रेरक क्या करता है?",
    "options_en": ["Increases activation energy", "Decreases activation energy", "Stops reaction", "Breaks equilibrium"],
    "options_hi": ["सक्रियण ऊर्जा बढ़ाता है", "सक्रियण ऊर्जा कम करता है", "अभिक्रिया रोकता है", "साम्यावस्था तोड़ता है"],
    "answer_en": "Decreases activation energy",
    "answer_hi": "सक्रियण ऊर्जा कम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "At what temperature does water have maximum density?",
    "question_hi": "किस तापमान पर जल का घनत्व अधिकतम होता है?",
    "options_en": ["0°C", "4°C", "10°C", "25°C"],
    "options_hi": ["0°C", "4°C", "10°C", "25°C"],
    "answer_en": "4°C",
    "answer_hi": "4°C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which oxide is amphoteric?",
    "question_hi": "कौन सा ऑक्साइड उभयधर्मी है?",
    "options_en": ["Na2O", "ZnO", "CaO", "MgO"],
    "options_hi": ["Na2O", "ZnO", "CaO", "MgO"],
    "answer_en": "ZnO",
    "answer_hi": "ZnO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which noble gas is reactive?",
    "question_hi": "कौन सी उत्कृष्ट गैस अभिक्रियाशील है?",
    "options_en": ["He", "Ne", "Ar", "Xe"],
    "options_hi": ["He", "Ne", "Ar", "Xe"],
    "answer_en": "Xe",
    "answer_hi": "Xe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is high in hard water?",
    "question_hi": "कठोर जल में क्या अधिक होता है?",
    "options_en": ["Na+", "K+", "Ca2+ & Mg2+", "Cl-"],
    "options_hi": ["Na+", "K+", "Ca2+ & Mg2+", "Cl-"],
    "answer_en": "Ca2+ & Mg2+",
    "answer_hi": "Ca2+ & Mg2+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the oxidation number of oxygen in H2O2?",
    "question_hi": "H2O2 में ऑक्सीजन की ऑक्सीकरण संख्या क्या है?",
    "options_en": ["-2", "-1", "0", "+1"],
    "options_hi": ["-2", "-1", "0", "+1"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which gas is known for brown color?",
    "question_hi": "कौन सी गैस भूरे रंग के लिए जानी जाती है?",
    "options_en": ["NO", "NO2", "SO2", "CO"],
    "options_hi": ["NO", "NO2", "SO2", "CO"],
    "answer_en": "NO2",
    "answer_hi": "NO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the hybridization of nitrogen in NH3?",
    "question_hi": "NH3 में नाइट्रोजन का संकरण क्या है?",
    "options_en": ["sp", "sp2", "sp3", "dsp2"],
    "options_hi": ["sp", "sp2", "sp3", "dsp2"],
    "answer_en": "sp3",
    "answer_hi": "sp3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which is the strongest hydrohalic acid?",
    "question_hi": "सबसे प्रबल हाइड्रोहैलिक अम्ल कौन सा है?",
    "options_en": ["HCl", "HBr", "HI", "HF"],
    "options_hi": ["HCl", "HBr", "HI", "HF"],
    "answer_en": "HI",
    "answer_hi": "HI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which is paramagnetic?",
    "question_hi": "कौन सा अनुचुंबकीय है?",
    "options_en": ["N2", "O2", "CO2", "F2"],
    "options_hi": ["N2", "O2", "CO2", "F2"],
    "answer_en": "O2",
    "answer_hi": "O2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which reaction is exothermic?",
    "question_hi": "कौन सी अभिक्रिया ऊष्माक्षेपी है?",
    "options_en": ["N2 + O2 → NO", "C + O2 → CO2", "CaCO3 → CaO + CO2", "2KClO3 → KCl + O2"],
    "options_hi": ["N2 + O2 → NO", "C + O2 → CO2", "CaCO3 → CaO + CO2", "2KClO3 → KCl + O2"],
    "answer_en": "C + O2 → CO2",
    "answer_hi": "C + O2 → CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is a greenhouse gas?",
    "question_hi": "कौन सी ग्रीनहाउस गैस है?",
    "options_en": ["O2", "N2", "CO2", "He"],
    "options_hi": ["O2", "N2", "CO2", "He"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What type of reaction is HCl + NaOH?",
    "question_hi": "HCl + NaOH अभिक्रिया किस प्रकार की है?",
    "options_en": ["Redox", "Neutralization", "Precipitation", "Combustion"],
    "options_hi": ["रेडॉक्स", "उदासीनीकरण", "अवक्षेपण", "दहन"],
    "answer_en": "Neutralization",
    "answer_hi": "उदासीनीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does Avogadro number represent?",
    "question_hi": "अवोगाद्रो संख्या किसकी संख्या बताती है?",
    "options_en": ["Ions", "Atoms", "Particles in a mole", "Mass"],
    "options_hi": ["आयन", "परमाणु", "एक मोल में कण", "द्रव्यमान"],
    "answer_en": "Particles in a mole",
    "answer_hi": "एक मोल में कण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which is the most electronegative element?",
    "question_hi": "सबसे अधिक विद्युत ऋणात्मक तत्व कौन सा है?",
    "options_en": ["O", "N", "F", "Cl"],
    "options_hi": ["O", "N", "F", "Cl"],
    "answer_en": "F",
    "answer_hi": "F",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the shape of SO2?",
    "question_hi": "SO2 की आकृति क्या है?",
    "options_en": ["Linear", "Bent", "Tetrahedral", "Trigonal"],
    "options_hi": ["रैखिक", "वक्र", "चतुष्फलकीय", "त्रिकोणीय"],
    "answer_en": "Bent",
    "answer_hi": "वक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the shape of BF3?",
    "question_hi": "BF3 की आकृति क्या है?",
    "options_en": ["Linear", "Tetrahedral", "Trigonal planar", "Bent"],
    "options_hi": ["रैखिक", "चतुष्फलकीय", "त्रिकोणीय समतलीय", "वक्र"],
    "answer_en": "Trigonal planar",
    "answer_hi": "त्रिकोणीय समतलीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is converting gas to liquid called?",
    "question_hi": "गैस को द्रव में परिवर्तित करना क्या कहलाता है?",
    "options_en": ["Evaporation", "Condensation", "Sublimation", "Deposition"],
    "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "निक्षेपण"],
    "answer_en": "Condensation",
    "answer_hi": "संघनन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is dry ice?",
    "question_hi": "ड्राई आइस क्या है?",
    "options_en": ["Solid O2", "Solid CO2", "Frozen N2", "Solid CH4"],
    "options_hi": ["ठोस O2", "ठोस CO2", "जमी हुई N2", "ठोस CH4"],
    "answer_en": "Solid CO2",
    "answer_hi": "ठोस CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What happens at cathode in electrolysis?",
    "question_hi": "विद्युत अपघटन में कैथोड पर क्या होता है?",
    "options_en": ["Oxidation", "Reduction", "Neutralization", "Hydrolysis"],
    "options_hi": ["ऑक्सीकरण", "अपचयन", "उदासीनीकरण", "जल-अपघटन"],
    "answer_en": "Reduction",
    "answer_hi": "अपचयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What type of bond is in KCl?",
    "question_hi": "KCl में किस प्रकार का बंधन है?",
    "options_en": ["Ionic", "Covalent", "Metallic", "Van der Waals"],
    "options_hi": ["आयनिक", "सहसंयोजक", "धात्विक", "वैन डर वाल्स"],
    "answer_en": "Ionic",
    "answer_hi": "आयनिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the bond order of O2?",
    "question_hi": "O2 का बंध क्रम कितना है?",
    "options_en": ["1", "2", "3", "1.5"],
    "options_hi": ["1", "2", "3", "1.5"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What type of bond is in H2?",
    "question_hi": "H2 में किस प्रकार का बंधन है?",
    "options_en": ["Ionic", "Covalent", "Metallic", "Hydrogen bond"],
    "options_hi": ["आयनिक", "सहसंयोजक", "धात्विक", "हाइड्रोजन बंध"],
    "answer_en": "Covalent",
    "answer_hi": "सहसंयोजक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Atomic mass unit is based on?",
    "question_hi": "परमाणु द्रव्यमान इकाई किस पर आधारित है?",
    "options_en": ["C-12", "H-1", "O-16", "N-14"],
    "options_hi": ["C-12", "H-1", "O-16", "N-14"],
    "answer_en": "C-12",
    "answer_hi": "C-12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which is the strongest acid?",
    "question_hi": "सबसे प्रबल अम्ल कौन सा है?",
    "options_en": ["HClO4", "H2SO4", "HCl", "HF"],
    "options_hi": ["HClO4", "H2SO4", "HCl", "HF"],
    "answer_en": "HClO4",
    "answer_hi": "HClO4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the shape of CCl4?",
    "question_hi": "CCl4 की आकृति क्या है?",
    "options_en": ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
    "options_hi": ["रैखिक", "त्रिकोणीय समतलीय", "चतुष्फलकीय", "वक्र"],
    "answer_en": "Tetrahedral",
    "answer_hi": "चतुष्फलकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which gas is used as anesthetic?",
    "question_hi": "किस गैस का उपयोग संवेदनाहारी के रूप में किया जाता है?",
    "options_en": ["N2O", "CO", "CO2", "SO2"],
    "options_hi": ["N2O", "CO", "CO2", "SO2"],
    "answer_en": "N2O",
    "answer_hi": "N2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the oxidation state of S in H2SO4?",
    "question_hi": "H2SO4 में S की ऑक्सीकरण अवस्था क्या है?",
    "options_en": ["+2", "+4", "+6", "+8"],
    "options_hi": ["+2", "+4", "+6", "+8"],
    "answer_en": "+6",
    "answer_hi": "+6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Number of valence electrons in Na?",
    "question_hi": "Na में संयोजकता इलेक्ट्रॉनों की संख्या?",
    "options_en": ["1", "2", "5", "3"],
    "options_hi": ["1", "2", "5", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is a strong reducing agent?",
    "question_hi": "कौन सा प्रबल अपचायक है?",
    "options_en": ["F2", "Cl2", "Na", "O2"],
    "options_hi": ["F2", "Cl2", "Na", "O2"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the monomer of PVC?",
    "question_hi": "PVC का मोनोमर क्या है?",
    "options_en": ["Ethene", "Chloroethene", "Styrene", "Propene"],
    "options_hi": ["ईथीन", "क्लोरोईथीन", "स्टाइरीन", "प्रोपीन"],
    "answer_en": "Chloroethene",
    "answer_hi": "क्लोरोईथीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is the first element of p-block?",
    "question_hi": "p-ब्लॉक का पहला तत्व कौन सा है?",
    "options_en": ["B", "C", "N", "O"],
    "options_hi": ["B", "C", "N", "O"],
    "answer_en": "B",
    "answer_hi": "B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the hybridization of carbon in diamond?",
    "question_hi": "हीरे में कार्बन का संकरण क्या है?",
    "options_en": ["sp", "sp2", "sp3", "dsp2"],
    "options_hi": ["sp", "sp2", "sp3", "dsp2"],
    "answer_en": "sp3",
    "answer_hi": "sp3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the hybridization of carbon in graphite?",
    "question_hi": "ग्रेफाइट में कार्बन का संकरण क्या है?",
    "options_en": ["sp", "sp2", "sp3", "sp3d"],
    "options_hi": ["sp", "sp2", "sp3", "sp3d"],
    "answer_en": "sp2",
    "answer_hi": "sp2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is the main gas for air pollution?",
    "question_hi": "वायु प्रदूषण की मुख्य गैस कौन सी है?",
    "options_en": ["SO2", "N2", "O2", "Ar"],
    "options_hi": ["SO2", "N2", "O2", "Ar"],
    "answer_en": "SO2",
    "answer_hi": "SO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the formula of milk of magnesia?",
    "question_hi": "मिल्क ऑफ मैग्नीशिया का सूत्र क्या है?",
    "options_en": ["MgO", "Mg(OH)2", "MgCO3", "MgSO4"],
    "options_hi": ["MgO", "Mg(OH)2", "MgCO3", "MgSO4"],
    "answer_en": "Mg(OH)2",
    "answer_hi": "Mg(OH)2",
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