const questions = [
  {
    num: 1,
    question_en: "Which gas is known as the ‘King of Chemicals’?",
    question_hi: "कौन सी गैस ‘रसायनों का राजा’ कहलाती है?",
    options_en: ["HCl", "H2SO4", "HNO3", "NH3"],
    options_hi: ["HCl", "H2SO4", "HNO3", "NH3"],
    answer_en: "H2SO4",
    answer_hi: "H2SO4",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which element has the highest electronegativity?",
    question_hi: "किस तत्व की विद्युतऋणात्मकता सबसे अधिक होती है?",
    options_en: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    options_hi: ["ऑक्सीजन", "फ्लोरीन", "क्लोरीन", "नाइट्रोजन"],
    answer_en: "Fluorine",
    answer_hi: "फ्लोरीन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "HCl is which type of acid?",
    question_hi: "HCl किस प्रकार का अम्ल है?",
    options_en: ["Weak", "Strong", "Organic", "Lewis"],
    options_hi: ["कमज़ोर", "मज़बूत", "कार्बनिक", "लुईस"],
    answer_en: "Strong",
    answer_hi: "मज़बूत",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which substance is used to test CO2 gas?",
    question_hi: "CO2 गैस की जांच के लिए किस पदार्थ का उपयोग किया जाता है?",
    options_en: ["Blue litmus", "Lime water", "Starch", "Ammonia"],
    options_hi: ["नीला लिटमस", "चूना पानी", "स्टार्च", "अमोनिया"],
    answer_en: "Lime water",
    answer_hi: "चूना पानी",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which metal is stored in kerosene?",
    question_hi: "कौन सी धातु को मिट्टी के तेल में रखा जाता है?",
    options_en: ["Na", "Fe", "Cu", "Al"],
    options_hi: ["Na", "Fe", "Cu", "Al"],
    answer_en: "Na",
    answer_hi: "Na",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "What is the formula of ozone?",
    question_hi: "ओज़ोन का सूत्र क्या है?",
    options_en: ["O", "O2", "O3", "O4"],
    options_hi: ["O", "O2", "O3", "O4"],
    answer_en: "O3",
    answer_hi: "O3",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "Bauxite is the ore of which metal?",
    question_hi: "बॉक्साइट किस धातु का अयस्क है?",
    options_en: ["Iron", "Aluminium", "Copper", "Zinc"],
    options_hi: ["लोहा", "एल्युमिनियम", "तांबा", "जस्ता"],
    answer_en: "Aluminium",
    answer_hi: "एल्युमिनियम",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which of the following is a noble gas?",
    question_hi: "निम्न में से कौन सी एक निष्क्रिय गैस है?",
    options_en: ["O2", "N2", "Ar", "CO"],
    options_hi: ["O2", "N2", "Ar", "CO"],
    answer_en: "Ar",
    answer_hi: "Ar",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "What is the formula of sodium bicarbonate?",
    question_hi: "सोडियम बाइकार्बोनेट का सूत्र क्या है?",
    options_en: ["Na2CO3", "NaHCO3", "NaCl", "NaOH"],
    options_hi: ["Na2CO3", "NaHCO3", "NaCl", "NaOH"],
    answer_en: "NaHCO3",
    answer_hi: "NaHCO3",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "Which acid is present in vinegar?",
    question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
    options_en: ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"],
    options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
    answer_en: "Acetic acid",
    answer_hi: "एसिटिक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "What is the atomic number of Fe?",
    question_hi: "Fe का परमाणु क्रमांक क्या है?",
    options_en: ["24", "25", "26", "27"],
    options_hi: ["24", "25", "26", "27"],
    answer_en: "26",
    answer_hi: "26",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which metal reacts with cold water to produce hydrogen?",
    question_hi: "कौन सी धातु ठंडे पानी से अभिक्रिया करके हाइड्रोजन बनाती है?",
    options_en: ["Mg", "Al", "Cu", "Na"],
    options_hi: ["Mg", "Al", "Cu", "Na"],
    answer_en: "Na",
    answer_hi: "Na",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "The bleaching action of chlorine is due to?",
    question_hi: "क्लोरीन की ब्लीचिंग क्रिया किस कारण होती है?",
    options_en: ["Oxidation", "Reduction", "Neutralization", "Hydrolysis"],
    options_hi: ["ऑक्सीकरण", "अपचयन", "न्यूट्रलाइज़ेशन", "हाइड्रोलिसिस"],
    answer_en: "Oxidation",
    answer_hi: "ऑक्सीकरण",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "Which of the following is a greenhouse gas?",
    question_hi: "निम्न में से कौन सी गैस ग्रीनहाउस गैस है?",
    options_en: ["CO2", "O2", "N2", "Ar"],
    options_hi: ["CO2", "O2", "N2", "Ar"],
    answer_en: "CO2",
    answer_hi: "CO2",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "Atomic mass number represents?",
    question_hi: "द्रव्यमान संख्या क्या दर्शाती है?",
    options_en: ["Neutrons", "Protons + Neutrons", "Electrons", "Protons"],
    options_hi: ["न्यूट्रॉन", "प्रोटॉन + न्यूट्रॉन", "इलेक्ट्रॉन", "प्रोटॉन"],
    answer_en: "Protons + Neutrons",
    answer_hi: "प्रोटॉन + न्यूट्रॉन",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which acid is used in car batteries?",
    question_hi: "कार बैटरियों में कौन सा अम्ल उपयोग होता है?",
    options_en: ["HNO3", "H2SO4", "HCl", "HF"],
    options_hi: ["HNO3", "H2SO4", "HCl", "HF"],
    answer_en: "H2SO4",
    answer_hi: "H2SO4",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "Which element forms the maximum number of compounds?",
    question_hi: "कौन सा तत्व सबसे अधिक यौगिक बनाता है?",
    options_en: ["Hydrogen", "Carbon", "Oxygen", "Nitrogen"],
    options_hi: ["हाइड्रोजन", "कार्बन", "ऑक्सीजन", "नाइट्रोजन"],
    answer_en: "Carbon",
    answer_hi: "कार्बन",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "Which bond is present in proteins?",
    question_hi: "प्रोटीन्स में कौन सा बॉन्ड पाया जाता है?",
    options_en: ["Peptide bond", "Glycosidic bond", "Ionic bond", "Metallic bond"],
    options_hi: ["पेप्टाइड बॉन्ड", "ग्लाइकोसिडिक बॉन्ड", "आयनिक बॉन्ड", "धात्विक बॉन्ड"],
    answer_en: "Peptide bond",
    answer_hi: "पेप्टाइड बॉन्ड",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "Water gas is a mixture of?",
    question_hi: "वाटर गैस किसका मिश्रण है?",
    options_en: ["CO + H2", "CO2 + O2", "H2 + O2", "CH4 + CO"],
    options_hi: ["CO + H2", "CO2 + O2", "H2 + O2", "CH4 + CO"],
    answer_en: "CO + H2",
    answer_hi: "CO + H2",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which gas is used in food preservation?",
    question_hi: "खाद्य संरक्षण में किस गैस का उपयोग होता है?",
    options_en: ["O2", "CO2", "N2", "H2"],
    options_hi: ["O2", "CO2", "N2", "H2"],
    answer_en: "N2",
    answer_hi: "N2",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which alcohol is poisonous?",
    question_hi: "कौन सा अल्कोहल विषाक्त होता है?",
    options_en: ["Ethanol", "Methanol", "Butanol", "Propanol"],
    options_hi: ["एथेनॉल", "मेथेनॉल", "ब्यूटानॉल", "प्रोपानॉल"],
    answer_en: "Methanol",
    answer_hi: "मेथेनॉल",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "What is the hybridization of carbon in diamond?",
    question_hi: "हीरे में कार्बन की संकरण अवस्था क्या है?",
    options_en: ["sp", "sp2", "sp3", "sp3d"],
    options_hi: ["sp", "sp2", "sp3", "sp3d"],
    answer_en: "sp3",
    answer_hi: "sp3",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "What is the structure of graphite?",
    question_hi: "ग्रेफाइट की संरचना कैसी होती है?",
    options_en: ["Tetrahedral", "Layered", "Linear", "Trigonal"],
    options_hi: ["टेट्राहेड्रल", "स्तरीय", "रैखिक", "त्रिगोनल"],
    answer_en: "Layered",
    answer_hi: "स्तरीय",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "Which of the following is a colloid?",
    question_hi: "निम्न में से कौन सा एक कोलॉइड है?",
    options_en: ["Sugar solution", "Milk", "Salt solution", "Alcohol"],
    options_hi: ["शक्कर घोल", "दूध", "नमक घोल", "अल्कोहल"],
    answer_en: "Milk",
    answer_hi: "दूध",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "Which gas has the lowest density?",
    question_hi: "किस गैस का घनत्व सबसे कम होता है?",
    options_en: ["H2", "He", "N2", "O2"],
    options_hi: ["H2", "He", "N2", "O2"],
    answer_en: "H2",
    answer_hi: "H2",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which oxide is amphoteric?",
    question_hi: "कौन सा ऑक्साइड एम्फोटेरिक है?",
    options_en: ["CO2", "Na2O", "ZnO", "CaO"],
    options_hi: ["CO2", "Na2O", "ZnO", "CaO"],
    answer_en: "ZnO",
    answer_hi: "ZnO",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "Which alkali is the strongest?",
    question_hi: "सबसे प्रबल क्षार कौन सा है?",
    options_en: ["NaOH", "KOH", "NH4OH", "Mg(OH)2"],
    options_hi: ["NaOH", "KOH", "NH4OH", "Mg(OH)2"],
    answer_en: "KOH",
    answer_hi: "KOH",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "Which gas is used in welding?",
    question_hi: "वेल्डिंग में किस गैस का उपयोग होता है?",
    options_en: ["CO2", "O2", "Acetylene", "N2"],
    options_hi: ["CO2", "O2", "एसीटिलीन", "N2"],
    answer_en: "Acetylene",
    answer_hi: "एसीटिलीन",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "Which is an example of an exothermic reaction?",
    question_hi: "उष्माक्षेपी अभिक्रिया का उदाहरण कौन सा है?",
    options_en: ["Melting ice", "Respiration", "Evaporation", "Photosynthesis"],
    options_hi: ["बर्फ पिघलना", "श्वसन", "वाष्पीकरण", "प्रकाश संश्लेषण"],
    answer_en: "Respiration",
    answer_hi: "श्वसन",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "Which substance is used as an antiseptic?",
    question_hi: "कौन सा पदार्थ एंटीसेप्टिक के रूप में उपयोग होता है?",
    options_en: ["Iodine", "Copper sulfate", "Sodium chloride", "Alum"],
    options_hi: ["आयोडीन", "कॉपर सल्फेट", "सोडियम क्लोराइड", "फिटकिरी"],
    answer_en: "Iodine",
    answer_hi: "आयोडीन",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which is the most reactive metal?",
    question_hi: "सबसे अधिक अभिक्रियाशील धातु कौन सी है?",
    options_en: ["K", "Na", "Mg", "Ca"],
    options_hi: ["K", "Na", "Mg", "Ca"],
    answer_en: "K",
    answer_hi: "K",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "Which halogen is the most reactive?",
    question_hi: "सबसे अधिक अभिक्रियाशील हैलोजन कौन सा है?",
    options_en: ["F2", "Cl2", "Br2", "I2"],
    options_hi: ["F2", "Cl2", "Br2", "I2"],
    answer_en: "F2",
    answer_hi: "F2",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "What is the structure of NaCl crystal?",
    question_hi: "NaCl क्रिस्टल की संरचना क्या है?",
    options_en: ["Cubic", "Hexagonal", "Tetragonal", "Monoclinic"],
    options_hi: ["घनाकार", "षट्कोणीय", "टेट्रागोनल", "मोनोंक्लिनिक"],
    answer_en: "Cubic",
    answer_hi: "घनाकार",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "Which acid is used in pickles?",
    question_hi: "अचार में कौन सा अम्ल उपयोग होता है?",
    options_en: ["Benzoic acid", "Citric acid", "Acetic acid", "Formic acid"],
    options_hi: ["बेंज़ोइक अम्ल", "सिट्रिक अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल"],
    answer_en: "Acetic acid",
    answer_hi: "एसिटिक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "What is used as dry ice?",
    question_hi: "ड्राई आइस के रूप में क्या उपयोग होता है?",
    options_en: ["Solid CO2", "Solid O2", "Solid N2", "Solid H2"],
    options_hi: ["ठोस CO2", "ठोस O2", "ठोस N2", "ठोस H2"],
    answer_en: "Solid CO2",
    answer_hi: "ठोस CO2",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which compound is used to soften hard water?",
    question_hi: "कठोर पानी को मुलायम करने के लिए कौन सा यौगिक उपयोग होता है?",
    options_en: ["NaCl", "Na2CO3", "NaOH", "CaO"],
    options_hi: ["NaCl", "Na2CO3", "NaOH", "CaO"],
    answer_en: "Na2CO3",
    answer_hi: "Na2CO3",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "Which is a biodegradable polymer?",
    question_hi: "कौन सा एक बायोडिग्रेडेबल पॉलिमर है?",
    options_en: ["Nylon", "Polythene", "PHBV", "PVC"],
    options_hi: ["नायलॉन", "पॉलीथीन", "PHBV", "PVC"],
    answer_en: "PHBV",
    answer_hi: "PHBV",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "What is called an aliquot?",
    question_hi: "एलिक्वॉट किसे कहते हैं?",
    options_en: ["Exact volume", "High mass", "Atomic number", "Neutral solution"],
    options_hi: ["सटीक आयतन", "अधिक द्रव्यमान", "परमाणु क्रमांक", "न्यूट्रल घोल"],
    answer_en: "Exact volume",
    answer_hi: "सटीक आयतन",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "Which metal gives a green color in the flame test?",
    question_hi: "फ्लेम टेस्ट में कौन सी धातु हरे रंग की आंच देती है?",
    options_en: ["Cu", "Na", "K", "Li"],
    options_hi: ["Cu", "Na", "K", "Li"],
    answer_en: "Cu",
    answer_hi: "Cu",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "Which method removes temporary hardness?",
    question_hi: "अस्थायी कठोरता को दूर करने की कौन सी विधि है?",
    options_en: ["Boiling", "Ion exchange", "Reverse osmosis", "Distillation"],
    options_hi: ["उबालना", "आयन विनिमय", "रिवर्स ऑस्मोसिस", "आसवन"],
    answer_en: "Boiling",
    answer_hi: "उबालना",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which acid is present in grapes?",
    question_hi: "अंगूर में कौन सा अम्ल पाया जाता है?",
    options_en: ["Tartaric acid", "Acetic acid", "Lactic acid", "Formic acid"],
    options_hi: ["टार्टरिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
    answer_en: "Tartaric acid",
    answer_hi: "टार्टरिक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "Which compound has a triple bond?",
    question_hi: "किस यौगिक में त्रि-बंध होता है?",
    options_en: ["C2H2", "C2H4", "C2H6", "CH4"],
    options_hi: ["C2H2", "C2H4", "C2H6", "CH4"],
    answer_en: "C2H2",
    answer_hi: "C2H2",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "Which carbohydrate is a disaccharide?",
    question_hi: "कौन सा कार्बोहाइड्रेट एक डाइसेकेराइड है?",
    options_en: ["Glucose", "Sucrose", "Fructose", "Galactose"],
    options_hi: ["ग्लूकोज़", "सुक्रोज़", "फ्रुक्टोज़", "गैलेक्टोज़"],
    answer_en: "Sucrose",
    answer_hi: "सुक्रोज़",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "अग्निशामक यंत्रों में कौन सी गैस उपयोग होती है?",
    options_en: ["O2", "CO2", "H2", "N2"],
    options_hi: ["O2", "CO2", "H2", "N2"],
    answer_en: "CO2",
    answer_hi: "CO2",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "Which ion gives a brick-red flame?",
    question_hi: "कौन सा आयन ईंट-लाल ज्वाला देता है?",
    options_en: ["Cu2+", "Ca2+", "Ba2+", "Li+"],
    options_hi: ["Cu2+", "Ca2+", "Ba2+", "Li+"],
    answer_en: "Ca2+",
    answer_hi: "Ca2+",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which instrument is used to measure pH?",
    question_hi: "pH मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    options_en: ["Litmus", "Voltmeter", "Hydrometer", "Thermometer"],
    options_hi: ["लिटमस", "वोल्टमीटर", "हाइड्रोमीटर", "थर्मामीटर"],
    answer_en: "Litmus",
    answer_hi: "लिटमस",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "Which hydrocarbon is aromatic?",
    question_hi: "कौन सा हाइड्रोकार्बन एरोमैटिक है?",
    options_en: ["CH4", "C2H6", "C6H6", "C2H4"],
    options_hi: ["CH4", "C2H6", "C6H6", "C2H4"],
    answer_en: "C6H6",
    answer_hi: "C6H6",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "Which compound is used as plaster of Paris?",
    question_hi: "प्लास्टर ऑफ पेरिस किस यौगिक से बनता है?",
    options_en: ["CaSO4·1/2H2O", "CaCO3", "CaO", "Ca(OH)2"],
    options_hi: ["CaSO4·1/2H2O", "CaCO3", "CaO", "Ca(OH)2"],
    answer_en: "CaSO4·1/2H2O",
    answer_hi: "CaSO4·1/2H2O",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "Which acid is present in curd?",
    question_hi: "दही में कौन सा अम्ल पाया जाता है?",
    options_en: ["Acetic acid", "Lactic acid", "Tartaric acid", "Formic acid"],
    options_hi: ["एसिटिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल", "फॉर्मिक अम्ल"],
    answer_en: "Lactic acid",
    answer_hi: "लैक्टिक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "Which element is liquid at room temperature?",
    question_hi: "कमरे के तापमान पर कौन सा तत्व द्रव अवस्था में होता है?",
    options_en: ["Na", "Mg", "Br", "Al"],
    options_hi: ["Na", "Mg", "Br", "Al"],
    answer_en: "Br",
    answer_hi: "Br",
    attempted: false,
    selected: ""
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