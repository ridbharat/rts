const questions = [
  {
    "num": 1,
    "question_en": "Which law states that 'Mass can neither be created nor destroyed'?",
    "question_hi": "कौन सा नियम कहता है कि 'द्रव्यमान न तो उत्पन्न किया जा सकता है और न ही नष्ट'?",
    "options_en": ["Dalton's Law", "Law of Conservation of Mass", "Gay-Lussac Law", "Henry's Law"],
    "options_hi": ["डाल्टन का नियम", "द्रव्यमान संरक्षण का नियम", "गे-लुसाक का नियम", "हेनरी का नियम"],
    "answer_en": "Law of Conservation of Mass",
    "answer_hi": "द्रव्यमान संरक्षण का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Avogadro's number is?",
    "question_hi": "अवोगाद्रो संख्या है?",
    "options_en": ["6.022 × 10^19", "6.022 × 10^23", "9.11 × 10^-31", "1.6 × 10^-19"],
    "options_hi": ["6.022 × 10^19", "6.022 × 10^23", "9.11 × 10^-31", "1.6 × 10^-19"],
    "answer_en": "6.022 × 10^23",
    "answer_hi": "6.022 × 10^23",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which orbital is spherical in shape?",
    "question_hi": "कौन सा कक्षक गोलाकार आकृति का होता है?",
    "options_en": ["p", "s", "d", "f"],
    "options_hi": ["p", "s", "d", "f"],
    "answer_en": "s",
    "answer_hi": "s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which element has the highest electronegativity?",
    "question_hi": "किस तत्व की विद्युत ऋणात्मकता सबसे अधिक होती है?",
    "options_en": ["Oxygen", "Chlorine", "Nitrogen", "Fluorine"],
    "options_hi": ["ऑक्सीजन", "क्लोरीन", "नाइट्रोजन", "फ्लोरीन"],
    "answer_en": "Fluorine",
    "answer_hi": "फ्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "pH of a neutral solution at 25°C is?",
    "question_hi": "25°C पर उदासीन विलयन का pH होता है?",
    "options_en": ["3", "5", "7", "9"],
    "options_hi": ["3", "5", "7", "9"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Atomic radius decreases across the period because of?",
    "question_hi": "आवर्त में परमाणु त्रिज्या कम होती है क्योंकि?",
    "options_en": ["Decrease in nuclear charge", "Increase in nuclear charge", "Addition of new shell", "Shielding effect"],
    "options_hi": ["नाभिकीय आवेश में कमी", "नाभिकीय आवेश में वृद्धि", "नए कोश का जुड़ना", "परिरक्षण प्रभाव"],
    "answer_en": "Increase in nuclear charge",
    "answer_hi": "नाभिकीय आवेश में वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The gas that deviates most from ideal behavior is?",
    "question_hi": "वह गैस जो आदर्श व्यवहार से सबसे अधिक विचलन करती है?",
    "options_en": ["H₂", "O₂", "NH₃", "He"],
    "options_hi": ["H₂", "O₂", "NH₃", "He"],
    "answer_en": "NH₃",
    "answer_hi": "NH₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is the strongest acid?",
    "question_hi": "सबसे प्रबल अम्ल कौन सा है?",
    "options_en": ["HCl", "H₂SO₄", "HNO₃", "HClO₄"],
    "options_hi": ["HCl", "H₂SO₄", "HNO₃", "HClO₄"],
    "answer_en": "HClO₄",
    "answer_hi": "HClO₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Example of a covalent bond is?",
    "question_hi": "सहसंयोजक बंध का उदाहरण है?",
    "options_en": ["NaCl", "KBr", "H₂O", "CaO"],
    "options_hi": ["NaCl", "KBr", "H₂O", "CaO"],
    "answer_en": "H₂O",
    "answer_hi": "H₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is an extensive property?",
    "question_hi": "निम्नलिखित में से कौन सा एक विस्तारित गुण है?",
    "options_en": ["Temperature", "Pressure", "Density", "Mass"],
    "options_hi": ["तापमान", "दाब", "घनत्व", "द्रव्यमान"],
    "answer_en": "Mass",
    "answer_hi": "द्रव्यमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which law explains pressure-volume relationship?",
    "question_hi": "कौन सा नियम दाब-आयतन संबंध को समझाता है?",
    "options_en": ["Boyle's Law", "Charle's Law", "Avogadro Law", "Graham's Law"],
    "options_hi": ["बॉयल का नियम", "चार्ल्स का नियम", "अवोगाद्रो नियम", "ग्राहम का नियम"],
    "answer_en": "Boyle's Law",
    "answer_hi": "बॉयल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Oxidation involves?",
    "question_hi": "ऑक्सीकरण में शामिल है?",
    "options_en": ["Loss of electrons", "Gain of electrons", "Gain of protons", "Loss of neutrons"],
    "options_hi": ["इलेक्ट्रॉनों की हानि", "इलेक्ट्रॉनों की प्राप्ति", "प्रोटॉनों की प्राप्ति", "न्यूट्रॉनों की हानि"],
    "answer_en": "Loss of electrons",
    "answer_hi": "इलेक्ट्रॉनों की हानि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which is an example of a strong electrolyte?",
    "question_hi": "प्रबल विद्युत अपघट्य का उदाहरण है?",
    "options_en": ["Glucose", "Urea", "HCl", "CH₃OH"],
    "options_hi": ["ग्लूकोज", "यूरिया", "HCl", "CH₃OH"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Hybridization of carbon in methane is?",
    "question_hi": "मीथेन में कार्बन का संकरण है?",
    "options_en": ["sp", "sp²", "sp³", "sp³d"],
    "options_hi": ["sp", "sp²", "sp³", "sp³d"],
    "answer_en": "sp³",
    "answer_hi": "sp³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which one is an ideal gas?",
    "question_hi": "कौन सी एक आदर्श गैस है?",
    "options_en": ["Real gas", "O₂", "H₂", "None"],
    "options_hi": ["वास्तविक गैस", "O₂", "H₂", "कोई नहीं"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Milk is an example of?",
    "question_hi": "दूध किसका उदाहरण है?",
    "options_en": ["Solution", "Colloid", "Suspension", "Solid"],
    "options_hi": ["विलयन", "कोलॉइड", "निलंबन", "ठोस"],
    "answer_en": "Colloid",
    "answer_hi": "कोलॉइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which process involves removal of electrons?",
    "question_hi": "किस प्रक्रिया में इलेक्ट्रॉनों का निष्कासन शामिल है?",
    "options_en": ["Oxidation", "Reduction", "Hydrolysis", "Sublimation"],
    "options_hi": ["ऑक्सीकरण", "अपचयन", "जल-अपघटन", "उर्ध्वपातन"],
    "answer_en": "Oxidation",
    "answer_hi": "ऑक्सीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The strongest intermolecular force is?",
    "question_hi": "सबसे प्रबल अंतरा-आणविक बल है?",
    "options_en": ["London force", "Dipole-dipole", "Hydrogen bond", "Ion-ion"],
    "options_hi": ["लंदन बल", "द्विध्रुव-द्विध्रुव", "हाइड्रोजन बंध", "आयन-आयन"],
    "answer_en": "Ion-ion",
    "answer_hi": "आयन-आयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The element used in pencil lead is?",
    "question_hi": "पेंसिल की लीड में प्रयुक्त तत्व है?",
    "options_en": ["Lead", "Graphite", "Carbon black", "Silicon"],
    "options_hi": ["लेड", "ग्रेफाइट", "कार्बन ब्लैक", "सिलिकॉन"],
    "answer_en": "Graphite",
    "answer_hi": "ग्रेफाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is the hardest form of carbon?",
    "question_hi": "कार्बन का सबसे कठोर रूप कौन सा है?",
    "options_en": ["Graphite", "Diamond", "Coke", "Fullerene"],
    "options_hi": ["ग्रेफाइट", "हीरा", "कोक", "फुलरीन"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which metal is stored under kerosene?",
    "question_hi": "कौन सी धातु मिट्टी के तेल के नीचे संग्रहीत की जाती है?",
    "options_en": ["Fe", "Cu", "Na", "Zn"],
    "options_hi": ["Fe", "Cu", "Na", "Zn"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "कौन सी गैस हास्य गैस के नाम से जानी जाती है?",
    "options_en": ["CO₂", "NO", "N₂O", "NH₃"],
    "options_hi": ["CO₂", "NO", "N₂O", "NH₃"],
    "answer_en": "N₂O",
    "answer_hi": "N₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Bond angle in water is approx.?",
    "question_hi": "जल में बंध कोण लगभग होता है?",
    "options_en": ["90°", "104.5°", "120°", "180°"],
    "options_hi": ["90°", "104.5°", "120°", "180°"],
    "answer_en": "104.5°",
    "answer_hi": "104.5°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which is a non-metal?",
    "question_hi": "कौन सा एक अधातु है?",
    "options_en": ["Na", "Mg", "Cl", "Al"],
    "options_hi": ["Na", "Mg", "Cl", "Al"],
    "answer_en": "Cl",
    "answer_hi": "Cl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is a noble gas?",
    "question_hi": "निम्नलिखित में से कौन सी एक उत्कृष्ट गैस है?",
    "options_en": ["O₂", "N₂", "Ne", "Cl₂"],
    "options_hi": ["O₂", "N₂", "Ne", "Cl₂"],
    "answer_en": "Ne",
    "answer_hi": "Ne",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["HCl", "Acetic acid", "Citric acid", "Oxalic acid"],
    "options_hi": ["HCl", "एसिटिक अम्ल", "साइट्रिक अम्ल", "ऑक्सैलिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which is the electron-deficient molecule?",
    "question_hi": "कौन सा अणु इलेक्ट्रॉन-न्यून है?",
    "options_en": ["CH₄", "NH₃", "BF₃", "H₂O"],
    "options_hi": ["CH₄", "NH₃", "BF₃", "H₂O"],
    "answer_en": "BF₃",
    "answer_hi": "BF₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which ion gives blue colour to solution?",
    "question_hi": "कौन सा आयन विलयन को नीला रंग देता है?",
    "options_en": ["Fe²⁺", "Cu²⁺", "Zn²⁺", "Na⁺"],
    "options_hi": ["Fe²⁺", "Cu²⁺", "Zn²⁺", "Na⁺"],
    "answer_en": "Cu²⁺",
    "answer_hi": "Cu²⁺",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which is a greenhouse gas?",
    "question_hi": "कौन सी एक ग्रीनहाउस गैस है?",
    "options_en": ["N₂", "O₂", "CO₂", "Ar"],
    "options_hi": ["N₂", "O₂", "CO₂", "Ar"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Hydrogen is placed in which group?",
    "question_hi": "हाइड्रोजन किस समूह में रखा गया है?",
    "options_en": ["1", "2", "17", "18"],
    "options_hi": ["1", "2", "17", "18"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which compound shows hydrogen bonding?",
    "question_hi": "कौन सा यौगिक हाइड्रोजन बंधन दर्शाता है?",
    "options_en": ["CH₄", "NH₃", "C₂H₆", "CO₂"],
    "options_hi": ["CH₄", "NH₃", "C₂H₆", "CO₂"],
    "answer_en": "NH₃",
    "answer_hi": "NH₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Example of endothermic process?",
    "question_hi": "ऊष्माशोषी प्रक्रिया का उदाहरण?",
    "options_en": ["Freezing", "Condensation", "Melting", "Deposition"],
    "options_hi": ["जमना", "संघनन", "पिघलना", "निक्षेपण"],
    "answer_en": "Melting",
    "answer_hi": "पिघलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which is an amphoteric oxide?",
    "question_hi": "कौन सा एक उभयधर्मी ऑक्साइड है?",
    "options_en": ["Na₂O", "MgO", "Al₂O₃", "CO₂"],
    "options_hi": ["Na₂O", "MgO", "Al₂O₃", "CO₂"],
    "answer_en": "Al₂O₃",
    "answer_hi": "Al₂O₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which has maximum electron affinity?",
    "question_hi": "किसकी इलेक्ट्रॉन बंधुता सबसे अधिक होती है?",
    "options_en": ["O", "N", "Cl", "F"],
    "options_hi": ["O", "N", "Cl", "F"],
    "answer_en": "Cl",
    "answer_hi": "Cl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The pH of lemon juice is approx.?",
    "question_hi": "नींबू के रस का pH लगभग होता है?",
    "options_en": ["2", "5", "7", "10"],
    "options_hi": ["2", "5", "7", "10"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which metal reacts with water at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर पानी के साथ अभिक्रिया करती है?",
    "options_en": ["Cu", "Fe", "Mg", "Na"],
    "options_hi": ["Cu", "Fe", "Mg", "Na"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which is a biodegradable polymer?",
    "question_hi": "कौन सा एक जैव निम्नीकरणीय बहुलक है?",
    "options_en": ["Nylon", "Bakelite", "PHBV", "PVC"],
    "options_hi": ["नायलॉन", "बेकलाइट", "PHBV", "PVC"],
    "answer_en": "PHBV",
    "answer_hi": "PHBV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is a Lewis acid?",
    "question_hi": "कौन सा एक लुईस अम्ल है?",
    "options_en": ["NH₃", "H₂O", "BF₃", "OH⁻"],
    "options_hi": ["NH₃", "H₂O", "BF₃", "OH⁻"],
    "answer_en": "BF₃",
    "answer_hi": "BF₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which carbon compound is used as fuel?",
    "question_hi": "कौन सा कार्बन यौगिक ईंधन के रूप में प्रयोग किया जाता है?",
    "options_en": ["CCl₄", "CH₄", "C₂H₅Cl", "CH₃OH"],
    "options_hi": ["CCl₄", "CH₄", "C₂H₅Cl", "CH₃OH"],
    "answer_en": "CH₄",
    "answer_hi": "CH₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which gas turns lime water milky?",
    "question_hi": "कौन सी गैस चूने के पानी को दूधिया कर देती है?",
    "options_en": ["CO₂", "SO₂", "NH₃", "Cl₂"],
    "options_hi": ["CO₂", "SO₂", "NH₃", "Cl₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which vitamin contains cobalt?",
    "question_hi": "किस विटामिन में कोबाल्ट होता है?",
    "options_en": ["A", "B₁₂", "C", "D"],
    "options_hi": ["A", "B₁₂", "C", "D"],
    "answer_en": "B₁₂",
    "answer_hi": "B₁₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which is the purest form of iron?",
    "question_hi": "लोहे का सबसे शुद्ध रूप कौन सा है?",
    "options_en": ["Wrought iron", "Steel", "Pig iron", "Cast iron"],
    "options_hi": ["ढलवाँ लोहा", "इस्पात", "पिग आयरन", "कच्चा लोहा"],
    "answer_en": "Wrought iron",
    "answer_hi": "ढलवाँ लोहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which element shows variable valency?",
    "question_hi": "कौन सा तत्व परिवर्तनशील संयोजकता दर्शाता है?",
    "options_en": ["Na", "Ca", "Fe", "Mg"],
    "options_hi": ["Na", "Ca", "Fe", "Mg"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Organic chemistry deals with compounds of?",
    "question_hi": "कार्बनिक रसायन किसके यौगिकों से संबंधित है?",
    "options_en": ["Na", "Ca", "Carbon", "Al"],
    "options_hi": ["Na", "Ca", "कार्बन", "Al"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is an allotrope of Carbon?",
    "question_hi": "कार्बन का अपररूप कौन सा है?",
    "options_en": ["Diamond", "Quartz", "Ag", "Li"],
    "options_hi": ["हीरा", "क्वार्ट्ज", "Ag", "Li"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which halogen is liquid at room temperature?",
    "question_hi": "कौन सा हैलोजन कमरे के तापमान पर तरल होता है?",
    "options_en": ["F₂", "Cl₂", "Br₂", "I₂"],
    "options_hi": ["F₂", "Cl₂", "Br₂", "I₂"],
    "answer_en": "Br₂",
    "answer_hi": "Br₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Molality unit is?",
    "question_hi": "मोललता की इकाई है?",
    "options_en": ["mol/L", "mol/kg", "g/L", "kg/mol"],
    "options_hi": ["mol/L", "mol/kg", "g/L", "kg/mol"],
    "answer_en": "mol/kg",
    "answer_hi": "mol/kg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which is not a state function?",
    "question_hi": "कौन सा अवस्था फलन नहीं है?",
    "options_en": ["Temperature", "Work", "Pressure", "Energy"],
    "options_hi": ["तापमान", "कार्य", "दाब", "ऊर्जा"],
    "answer_en": "Work",
    "answer_hi": "कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "The hardest known natural substance is?",
    "question_hi": "ज्ञात सबसे कठोर प्राकृतिक पदार्थ है?",
    "options_en": ["Diamond", "Glass", "Steel", "Graphite"],
    "options_hi": ["हीरा", "कांच", "इस्पात", "ग्रेफाइट"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which metal is used in thermometers?",
    "question_hi": "थर्मामीटर में कौन सी धातु प्रयोग की जाती है?",
    "options_en": ["Copper", "Mercury", "Zinc", "Lead"],
    "options_hi": ["तांबा", "पारा", "जस्ता", "सीसा"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
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