
const questions =[
  {
    "num": 1,
    "question_en": "What is the molecular formula of Pentane?",
    "question_hi": "पेंटेन का आणविक सूत्र क्या है?",
    "options_en": ["C4H10", "C5H12", "C6H14", "C3H8"],
    "options_hi": ["C4H10", "C5H12", "C6H14", "C3H8"],
    "answer_en": "C5H12",
    "answer_hi": "C5H12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which is a Lewis acid?",
    "question_hi": "कौन सा लुईस अम्ल है?",
    "options_en": ["NH3", "BF3", "H2O", "OH-"],
    "options_hi": ["NH3", "BF3", "H2O", "OH-"],
    "answer_en": "BF3",
    "answer_hi": "BF3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Whose ionization enthalpy is the lowest?",
    "question_hi": "आयनन एन्थैल्पी सबसे कम किसकी होती है?",
    "options_en": ["Li", "Na", "K", "Rb"],
    "options_hi": ["Li", "Na", "K", "Rb"],
    "answer_en": "Rb",
    "answer_hi": "Rb",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which molecule is polar?",
    "question_hi": "कौन सा अणु ध्रुवीय है?",
    "options_en": ["CO2", "CF4", "CHCl3", "CCl4"],
    "options_hi": ["CO2", "CF4", "CHCl3", "CCl4"],
    "answer_en": "CHCl3",
    "answer_hi": "CHCl3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What type of bond is in alkanes?",
    "question_hi": "एल्केन्स में बंधन प्रकार क्या होता है?",
    "options_en": ["pi only", "sigma only", "sigma + pi", "ionic"],
    "options_hi": ["केवल pi", "केवल sigma", "sigma + pi", "आयनिक"],
    "answer_en": "sigma only",
    "answer_hi": "केवल sigma",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the catalyst in Haber process?",
    "question_hi": "हैबर प्रक्रिया में उत्प्रेरक क्या होता है?",
    "options_en": ["Fe", "Ni", "Pt", "Cu"],
    "options_hi": ["Fe", "Ni", "Pt", "Cu"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which element is a metalloid?",
    "question_hi": "कौन सा तत्व उपधातु है?",
    "options_en": ["S", "Al", "Si", "K"],
    "options_hi": ["S", "Al", "Si", "K"],
    "answer_en": "Si",
    "answer_hi": "Si",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the functional group of CH3OH?",
    "question_hi": "CH3OH का क्रियात्मक समूह क्या है?",
    "options_en": ["Alcohol", "Aldehyde", "Ketone", "Acid"],
    "options_hi": ["ऐल्कोहॉल", "ऐल्डिहाइड", "कीटोन", "अम्ल"],
    "answer_en": "Alcohol",
    "answer_hi": "ऐल्कोहॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Compare the radius of O2- ion with O atom?",
    "question_hi": "O2- आयन की त्रिज्या O परमाणु से तुलना करें?",
    "options_en": ["Larger", "Smaller", "Same", "Zero"],
    "options_hi": ["बड़ा", "छोटा", "समान", "शून्य"],
    "answer_en": "Larger",
    "answer_hi": "बड़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which gas is an oxidising agent?",
    "question_hi": "कौन सी गैस ऑक्सीकारक है?",
    "options_en": ["O2", "CO", "H2", "CH4"],
    "options_hi": ["O2", "CO", "H2", "CH4"],
    "answer_en": "O2",
    "answer_hi": "O2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Density is an example of which property?",
    "question_hi": "घनत्व किस गुण का उदाहरण है?",
    "options_en": ["Intensive", "Extensive", "Chemical", "Physical + Extensive"],
    "options_hi": ["गहन", "व्यापक", "रासायनिक", "भौतिक + व्यापक"],
    "answer_en": "Intensive",
    "answer_hi": "गहन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is an aromatic compound?",
    "question_hi": "कौन सा ऐरोमैटिक यौगिक है?",
    "options_en": ["CH4", "C6H6", "C2H6", "CH3OH"],
    "options_hi": ["CH4", "C6H6", "C2H6", "CH3OH"],
    "answer_en": "C6H6",
    "answer_hi": "C6H6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is a solution with pH < 7?",
    "question_hi": "pH < 7 का विलयन क्या होता है?",
    "options_en": ["Neutral", "Basic", "Acidic", "Amphoteric"],
    "options_hi": ["उदासीन", "क्षारीय", "अम्लीय", "उभयधर्मी"],
    "answer_en": "Acidic",
    "answer_hi": "अम्लीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is a Brønsted acid?",
    "question_hi": "ब्रॉन्स्टेड अम्ल कौन होता है?",
    "options_en": ["Proton donor", "Proton acceptor", "Electron donor", "Electron pair acceptor"],
    "options_hi": ["प्रोटॉन दाता", "प्रोटॉन स्वीकारक", "इलेक्ट्रॉन दाता", "इलेक्ट्रॉन युग्म स्वीकारक"],
    "answer_en": "Proton donor",
    "answer_hi": "प्रोटॉन दाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which concept was defined by Avogadro?",
    "question_hi": "अवोगाद्रो ने किस अवधारणा को परिभाषित किया?",
    "options_en": ["Mole", "Mass", "Volume", "Entropy"],
    "options_hi": ["मोल", "द्रव्यमान", "आयतन", "एन्ट्रॉपी"],
    "answer_en": "Mole",
    "answer_hi": "मोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is the strongest reducing agent?",
    "question_hi": "सबसे प्रबल अपचायक कौन सा है?",
    "options_en": ["Li", "Na", "K", "Cs"],
    "options_hi": ["Li", "Na", "K", "Cs"],
    "answer_en": "Cs",
    "answer_hi": "Cs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is BaSO4?",
    "question_hi": "BaSO4 क्या है?",
    "options_en": ["Soluble", "Insoluble", "Gas", "Complex"],
    "options_hi": ["विलेय", "अविलेय", "गैस", "संकुल"],
    "answer_en": "Insoluble",
    "answer_hi": "अविलेय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which gas is called lachrymatory gas?",
    "question_hi": "कौन सी गैस लैक्रिमेटरी गैस कहलाती है?",
    "options_en": ["SO3", "NH3", "CO", "SO2"],
    "options_hi": ["SO3", "NH3", "CO", "SO2"],
    "answer_en": "SO2",
    "answer_hi": "SO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the maximum covalency of carbon?",
    "question_hi": "कार्बन की अधिकतम सहसंयोजकता क्या होती है?",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the hybridization of oxygen in O3?",
    "question_hi": "O3 में ऑक्सीजन का संकरण क्या होता है?",
    "options_en": ["sp", "sp2", "sp3", "dsp2"],
    "options_hi": ["sp", "sp2", "sp3", "dsp2"],
    "answer_en": "sp2",
    "answer_hi": "sp2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Brown ring test is for which ion?",
    "question_hi": "ब्राउन रिंग परीक्षण किस आयन के लिए होता है?",
    "options_en": ["NO3-", "SO4--", "Cl-", "CO3--"],
    "options_hi": ["NO3-", "SO4--", "Cl-", "CO3--"],
    "answer_en": "NO3-",
    "answer_hi": "NO3-",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
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
    "num": 23,
    "question_en": "Which is volatile?",
    "question_hi": "कौन सा वाष्पशील है?",
    "options_en": ["NaCl", "KNO3", "NH3", "CaCO3"],
    "options_hi": ["NaCl", "KNO3", "NH3", "CaCO3"],
    "answer_en": "NH3",
    "answer_hi": "NH3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the hybridization of C2H2?",
    "question_hi": "C2H2 का संकरण क्या होता है?",
    "options_en": ["sp", "sp2", "sp3", "sp3d"],
    "options_hi": ["sp", "sp2", "sp3", "sp3d"],
    "answer_en": "sp",
    "answer_hi": "sp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is a greenhouse gas?",
    "question_hi": "कौन सी ग्रीनहाउस गैस है?",
    "options_en": ["O2", "N2", "CH4", "Ar"],
    "options_hi": ["O2", "N2", "CH4", "Ar"],
    "answer_en": "CH4",
    "answer_hi": "CH4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is the strongest bond?",
    "question_hi": "सबसे मजबूत बंधन कौन सा है?",
    "options_en": ["Ionic", "Hydrogen bond", "Covalent bond", "Metallic bond"],
    "options_hi": ["आयनिक", "हाइड्रोजन बंध", "सहसंयोजक बंध", "धात्विक बंध"],
    "answer_en": "Covalent bond",
    "answer_hi": "सहसंयोजक बंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the bond order in C2H4?",
    "question_hi": "C2H4 में बंधन क्रम क्या है?",
    "options_en": ["1", "2", "3", "1.5"],
    "options_hi": ["1", "2", "3", "1.5"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which gas makes water acidic?",
    "question_hi": "कौन सी गैस पानी को अम्लीय बनाती है?",
    "options_en": ["CO2", "N2", "He", "H2"],
    "options_hi": ["CO2", "N2", "He", "H2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the nature of AlCl3?",
    "question_hi": "AlCl3 की प्रकृति क्या है?",
    "options_en": ["Lewis Acid", "Lewis Base", "Neutral", "Amphoteric"],
    "options_hi": ["लुईस अम्ल", "लुईस क्षार", "उदासीन", "उभयधर्मी"],
    "answer_en": "Lewis Acid",
    "answer_hi": "लुईस अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is CH3CHO?",
    "question_hi": "CH3CHO क्या है?",
    "options_en": ["Ketone", "Aldehyde", "Alcohol", "Ether"],
    "options_hi": ["कीटोन", "ऐल्डिहाइड", "ऐल्कोहॉल", "ईथर"],
    "answer_en": "Aldehyde",
    "answer_hi": "ऐल्डिहाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the color of Fe2O3?",
    "question_hi": "Fe2O3 का रंग क्या होता है?",
    "options_en": ["Black", "Red", "White", "Green"],
    "options_hi": ["काला", "लाल", "सफेद", "हरा"],
    "answer_en": "Red",
    "answer_hi": "लाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which acid is a weak acid?",
    "question_hi": "कौन सा अम्ल दुर्बल अम्ल है?",
    "options_en": ["HCl", "HNO3", "HF", "H2SO4"],
    "options_hi": ["HCl", "HNO3", "HF", "H2SO4"],
    "answer_en": "HF",
    "answer_hi": "HF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is green vitriol?",
    "question_hi": "ग्रीन विट्रियल क्या होता है?",
    "options_en": ["FeSO4", "CuSO4", "ZnSO4", "MgSO4"],
    "options_hi": ["FeSO4", "CuSO4", "ZnSO4", "MgSO4"],
    "answer_en": "FeSO4",
    "answer_hi": "FeSO4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Fehling test is for which compound?",
    "question_hi": "फेहलिंग परीक्षण किसके लिए होता है?",
    "options_en": ["Alcohol", "Ketone", "Aldehyde", "Ether"],
    "options_hi": ["ऐल्कोहॉल", "कीटोन", "ऐल्डिहाइड", "ईथर"],
    "answer_en": "Aldehyde",
    "answer_hi": "ऐल्डिहाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which gas is most soluble in water?",
    "question_hi": "कौन सी गैस पानी में सबसे अधिक घुलनशील है?",
    "options_en": ["NH3", "CO2", "O2", "N2"],
    "options_hi": ["NH3", "CO2", "O2", "N2"],
    "answer_en": "NH3",
    "answer_hi": "NH3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What type of hydrogen bonding is in H2O?",
    "question_hi": "H2O में हाइड्रोजन बंधन किस प्रकार का होता है?",
    "options_en": ["Intermolecular", "Intramolecular", "Ionic", "Metallic"],
    "options_hi": ["अंतरा-आणविक", "अंतः-आणविक", "आयनिक", "धात्विक"],
    "answer_en": "Intermolecular",
    "answer_hi": "अंतरा-आणविक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What mixture is called aqua regia?",
    "question_hi": "एक्वा रेजिया किस मिश्रण को बोलते हैं?",
    "options_en": ["HCl + H2SO4", "HCl + HNO3", "HNO3 + H2SO4", "HCl + H3PO4"],
    "options_hi": ["HCl + H2SO4", "HCl + HNO3", "HNO3 + H2SO4", "HCl + H3PO4"],
    "answer_en": "HCl + HNO3",
    "answer_hi": "HCl + HNO3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is the strongest base?",
    "question_hi": "सबसे प्रबल क्षार कौन सा है?",
    "options_en": ["NH3", "OH-", "NaOH", "KOH"],
    "options_hi": ["NH3", "OH-", "NaOH", "KOH"],
    "answer_en": "KOH",
    "answer_hi": "KOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What functional groups are in glucose?",
    "question_hi": "ग्लूकोज में क्रियात्मक समूह कौन से होते हैं?",
    "options_en": ["Alcohol + Ketone", "Alcohol + Aldehyde", "Ester", "Ether"],
    "options_hi": ["ऐल्कोहॉल + कीटोन", "ऐल्कोहॉल + ऐल्डिहाइड", "एस्टर", "ईथर"],
    "answer_en": "Alcohol + Aldehyde",
    "answer_hi": "ऐल्कोहॉल + ऐल्डिहाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is a noble gas?",
    "question_hi": "कौन सी नोबल गैस है?",
    "options_en": ["N2", "CO2", "Ar", "CH4"],
    "options_hi": ["N2", "CO2", "Ar", "CH4"],
    "answer_en": "Ar",
    "answer_hi": "Ar",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which property is a chemical property?",
    "question_hi": "कौन सा गुण रासायनिक गुण है?",
    "options_en": ["Color", "Melting point", "Reactivity", "Density"],
    "options_hi": ["रंग", "गलनांक", "अभिक्रियाशीलता", "घनत्व"],
    "answer_en": "Reactivity",
    "answer_hi": "अभिक्रियाशीलता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the main sugar in milk?",
    "question_hi": "दूध में मुख्य शर्करा क्या है?",
    "options_en": ["Glucose", "Lactose", "Fructose", "Sucrose"],
    "options_hi": ["ग्लूकोज", "लैक्टोज", "फ्रुक्टोज", "सुक्रोज"],
    "answer_en": "Lactose",
    "answer_hi": "लैक्टोज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the common name of ethanoic acid?",
    "question_hi": "एथेनोइक अम्ल का सामान्य नाम क्या है?",
    "options_en": ["Formic acid", "Acetic acid", "Oxalic acid", "Citric acid"],
    "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "ऑक्सैलिक अम्ल", "सिट्रिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the major component of coal?",
    "question_hi": "कोयले का मुख्य घटक क्या है?",
    "options_en": ["Carbon", "Sulphur", "Hydrogen", "Nitrogen"],
    "options_hi": ["कार्बन", "सल्फर", "हाइड्रोजन", "नाइट्रोजन"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is the strongest oxidizing agent?",
    "question_hi": "सबसे प्रबल ऑक्सीकारक कौन सा है?",
    "options_en": ["F2", "Cl2", "O2", "Br2"],
    "options_hi": ["F2", "Cl2", "O2", "Br2"],
    "answer_en": "F2",
    "answer_hi": "F2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which salt is neutral?",
    "question_hi": "कौन सा लवण उदासीन होता है?",
    "options_en": ["NaCl", "NH4Cl", "Na2CO3", "CH3COONa"],
    "options_hi": ["NaCl", "NH4Cl", "Na2CO3", "CH3COONa"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which group is present in TNT?",
    "question_hi": "TNT में कौन सा समूह होता है?",
    "options_en": ["Nitro", "Amino", "Carboxyl", "Hydroxyl"],
    "options_hi": ["नाइट्रो", "एमिनो", "कार्बोक्सिल", "हाइड्रॉक्सिल"],
    "answer_en": "Nitro",
    "answer_hi": "नाइट्रो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the main component of glass?",
    "question_hi": "ग्लास का मुख्य घटक क्या है?",
    "options_en": ["SiO2", "CaO", "Na2O", "Al2O3"],
    "options_hi": ["SiO2", "CaO", "Na2O", "Al2O3"],
    "answer_en": "SiO2",
    "answer_hi": "SiO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the hybridization of ethene?",
    "question_hi": "ईथीन का संकरण क्या है?",
    "options_en": ["sp", "sp2", "sp3", "dsp2"],
    "options_hi": ["sp", "sp2", "sp3", "dsp2"],
    "answer_en": "sp2",
    "answer_hi": "sp2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is a biodegradable polymer?",
    "question_hi": "कौन सा बायोडिग्रेडेबल पॉलिमर है?",
    "options_en": ["PVC", "Nylon", "PHBV", "Teflon"],
    "options_hi": ["PVC", "नायलॉन", "PHBV", "टेफ्लॉन"],
    "answer_en": "PHBV",
    "answer_hi": "PHBV",
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