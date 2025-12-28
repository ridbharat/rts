const questions = [
  {
    "num": 1,
    "question_en": "Which orbital has spherical shape?",
    "question_hi": "कौन सा कक्षक गोलाकार आकृति का होता है?",
    "options_en": ["s-orbital", "p-orbital", "d-orbital", "f-orbital"],
    "options_hi": ["s-कक्षक", "p-कक्षक", "d-कक्षक", "f-कक्षक"],
    "answer_en": "s-orbital",
    "answer_hi": "s-कक्षक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which law states that equal volumes of gases contain equal number of molecules?",
    "question_hi": "कौन सा नियम कहता है कि गैसों के समान आयतन में अणुओं की समान संख्या होती है?",
    "options_en": ["Boyle's Law", "Charles' Law", "Avogadro's Law", "Gay-Lussac Law"],
    "options_hi": ["बॉयल का नियम", "चार्ल्स का नियम", "अवोगाद्रो का नियम", "गे-लुसाक का नियम"],
    "answer_en": "Avogadro's Law",
    "answer_hi": "अवोगाद्रो का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following is a noble gas?",
    "question_hi": "निम्नलिखित में से कौन सी एक उत्कृष्ट गैस है?",
    "options_en": ["N₂", "O₂", "He", "CO₂"],
    "options_hi": ["N₂", "O₂", "He", "CO₂"],
    "answer_en": "He",
    "answer_hi": "He",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the oxidation state of hydrogen in NaH?",
    "question_hi": "NaH में हाइड्रोजन की ऑक्सीकरण अवस्था क्या है?",
    "options_en": ["+1", "-1", "0", "+2"],
    "options_hi": ["+1", "-1", "0", "+2"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which is the heaviest halogen?",
    "question_hi": "सबसे भारी हैलोजन कौन सा है?",
    "options_en": ["Cl", "Br", "I", "F"],
    "options_hi": ["Cl", "Br", "I", "F"],
    "answer_en": "I",
    "answer_hi": "I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The pH of a neutral solution at 25°C is?",
    "question_hi": "25°C पर उदासीन विलयन का pH होता है?",
    "options_en": ["6", "7", "8", "5"],
    "options_hi": ["6", "7", "8", "5"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which type of bond is present in O₂?",
    "question_hi": "O₂ में किस प्रकार का बंधन उपस्थित होता है?",
    "options_en": ["Single", "Double", "Triple", "Ionic"],
    "options_hi": ["एकल", "द्वि", "त्रि", "आयनिक"],
    "answer_en": "Double",
    "answer_hi": "द्वि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which element is used in pencils?",
    "question_hi": "पेंसिल में किस तत्व का उपयोग किया जाता है?",
    "options_en": ["Carbon", "Lead", "Silicon", "Tin"],
    "options_hi": ["कार्बन", "लेड", "सिलिकॉन", "टिन"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which gas turns lime water milky?",
    "question_hi": "कौन सी गैस चूने के पानी को दूधिया कर देती है?",
    "options_en": ["Oxygen", "CO₂", "N₂", "H₂"],
    "options_hi": ["ऑक्सीजन", "CO₂", "N₂", "H₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which is a Lewis acid?",
    "question_hi": "कौन सा एक लुईस अम्ल है?",
    "options_en": ["NH₃", "BF₃", "H₂O", "CH₄"],
    "options_hi": ["NH₃", "BF₃", "H₂O", "CH₄"],
    "answer_en": "BF₃",
    "answer_hi": "BF₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which metal is extracted from bauxite?",
    "question_hi": "बॉक्साइट से किस धातु का निष्कर्षण किया जाता है?",
    "options_en": ["Cu", "Fe", "Al", "Zn"],
    "options_hi": ["Cu", "Fe", "Al", "Zn"],
    "answer_en": "Al",
    "answer_hi": "Al",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "कौन सी गैस हास्य गैस के नाम से जानी जाती है?",
    "options_en": ["NO", "N₂O", "SO₂", "O₃"],
    "options_hi": ["NO", "N₂O", "SO₂", "O₃"],
    "answer_en": "N₂O",
    "answer_hi": "N₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of the following is not a greenhouse gas?",
    "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
    "options_en": ["CO₂", "CH₄", "N₂", "O₃"],
    "options_hi": ["CO₂", "CH₄", "N₂", "O₃"],
    "answer_en": "N₂",
    "answer_hi": "N₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Formic acid", "Acetic acid", "Oxalic acid", "Citric acid"],
    "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "ऑक्सैलिक अम्ल", "साइट्रिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which base is known as caustic soda?",
    "question_hi": "किस क्षार को कास्टिक सोडा के नाम से जाना जाता है?",
    "options_en": ["NaOH", "KOH", "Ca(OH)₂", "NH₄OH"],
    "options_hi": ["NaOH", "KOH", "Ca(OH)₂", "NH₄OH"],
    "answer_en": "NaOH",
    "answer_hi": "NaOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which chemical causes hardness of water?",
    "question_hi": "कौन सा रसायन जल की कठोरता का कारण बनता है?",
    "options_en": ["Ca²⁺", "Na⁺", "K⁺", "H⁺"],
    "options_hi": ["Ca²⁺", "Na⁺", "K⁺", "H⁺"],
    "answer_en": "Ca²⁺",
    "answer_hi": "Ca²⁺",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which gas is responsible for ozone layer depletion?",
    "question_hi": "ओजोन परत क्षरण के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["CO₂", "SO₂", "CFCs", "NO₂"],
    "options_hi": ["CO₂", "SO₂", "CFCs", "NO₂"],
    "answer_en": "CFCs",
    "answer_hi": "CFCs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of the following is an aromatic compound?",
    "question_hi": "निम्नलिखित में से कौन सा एक ऐरोमैटिक यौगिक है?",
    "options_en": ["CH₄", "C₂H₆", "C₆H₆", "C₃H₈"],
    "options_hi": ["CH₄", "C₂H₆", "C₆H₆", "C₃H₈"],
    "answer_en": "C₆H₆",
    "answer_hi": "C₆H₆",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which particle has no charge?",
    "question_hi": "किस कण पर कोई आवेश नहीं होता है?",
    "options_en": ["Electron", "Proton", "Neutron", "Alpha particle"],
    "options_hi": ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "अल्फा कण"],
    "answer_en": "Neutron",
    "answer_hi": "न्यूट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which is a strong electrolyte?",
    "question_hi": "कौन सा एक प्रबल विद्युत अपघट्य है?",
    "options_en": ["HCl", "CH₃COOH", "NH₃", "H₂O"],
    "options_hi": ["HCl", "CH₃COOH", "NH₃", "H₂O"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which is the lightest metal?",
    "question_hi": "सबसे हल्की धातु कौन सी है?",
    "options_en": ["Na", "K", "Li", "Mg"],
    "options_hi": ["Na", "K", "Li", "Mg"],
    "answer_en": "Li",
    "answer_hi": "Li",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which bond is the strongest?",
    "question_hi": "सबसे मजबूत बंधन कौन सा है?",
    "options_en": ["Hydrogen", "Ionic", "Covalent", "Metallic"],
    "options_hi": ["हाइड्रोजन", "आयनिक", "सहसंयोजक", "धात्विक"],
    "answer_en": "Covalent",
    "answer_hi": "सहसंयोजक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which metal forms amalgam with mercury?",
    "question_hi": "कौन सी धातु पारा के साथ अमलगम बनाती है?",
    "options_en": ["Na", "Cu", "Zn", "Fe"],
    "options_hi": ["Na", "Cu", "Zn", "Fe"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which is used to purify drinking water?",
    "question_hi": "पीने के पानी को शुद्ध करने के लिए किसका उपयोग किया जाता है?",
    "options_en": ["Bleaching powder", "CaCl₂", "NH₄Cl", "CO₂"],
    "options_hi": ["ब्लीचिंग पाउडर", "CaCl₂", "NH₄Cl", "CO₂"],
    "answer_en": "Bleaching powder",
    "answer_hi": "ब्लीचिंग पाउडर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which compound is known as quicklime?",
    "question_hi": "किस यौगिक को क्विकलाइम के नाम से जाना जाता है?",
    "options_en": ["Ca(OH)₂", "CaCO₃", "CaO", "CaCl₂"],
    "options_hi": ["Ca(OH)₂", "CaCO₃", "CaO", "CaCl₂"],
    "answer_en": "CaO",
    "answer_hi": "CaO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which gas burns with a pop sound?",
    "question_hi": "कौन सी गैस पॉप ध्वनि के साथ जलती है?",
    "options_en": ["O₂", "H₂", "CO₂", "N₂"],
    "options_hi": ["O₂", "H₂", "CO₂", "N₂"],
    "answer_en": "H₂",
    "answer_hi": "H₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which is the most electronegative element?",
    "question_hi": "सबसे अधिक विद्युत ऋणात्मक तत्व कौन सा है?",
    "options_en": ["O", "Cl", "F", "N"],
    "options_hi": ["O", "Cl", "F", "N"],
    "answer_en": "F",
    "answer_hi": "F",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is used as a fertilizer?",
    "question_hi": "किसका उपयोग उर्वरक के रूप में किया जाता है?",
    "options_en": ["NaCl", "KNO₃", "MgO", "ZnO"],
    "options_hi": ["NaCl", "KNO₃", "MgO", "ZnO"],
    "answer_en": "KNO₃",
    "answer_hi": "KNO₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which compound is used to extinguish fire?",
    "question_hi": "आग बुझाने के लिए किस यौगिक का उपयोग किया जाता है?",
    "options_en": ["CO₂", "O₂", "NH₃", "H₂"],
    "options_hi": ["CO₂", "O₂", "NH₃", "H₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which alloy is used in making coins?",
    "question_hi": "सिक्के बनाने में किस मिश्रधातु का उपयोग किया जाता है?",
    "options_en": ["Brass", "Bronze", "German silver", "Stainless steel"],
    "options_hi": ["पीतल", "कांस्य", "जर्मन सिल्वर", "स्टेनलेस स्टील"],
    "answer_en": "German silver",
    "answer_hi": "जर्मन सिल्वर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which has highest melting point?",
    "question_hi": "किसका गलनांक सबसे अधिक होता है?",
    "options_en": ["NaCl", "KCl", "MgO", "CaO"],
    "options_hi": ["NaCl", "KCl", "MgO", "CaO"],
    "answer_en": "MgO",
    "answer_hi": "MgO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is a reducing agent?",
    "question_hi": "कौन सा एक अपचायक है?",
    "options_en": ["O₂", "H₂", "Cl₂", "O₃"],
    "options_hi": ["O₂", "H₂", "Cl₂", "O₃"],
    "answer_en": "H₂",
    "answer_hi": "H₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which is a pure substance?",
    "question_hi": "कौन सा एक शुद्ध पदार्थ है?",
    "options_en": ["Air", "Milk", "Water", "Soil"],
    "options_hi": ["वायु", "दूध", "जल", "मिट्टी"],
    "answer_en": "Water",
    "answer_hi": "जल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which type of reaction is rusting?",
    "question_hi": "जंग लगना किस प्रकार की अभिक्रिया है?",
    "options_en": ["Oxidation", "Reduction", "Neutralization", "Combination"],
    "options_hi": ["ऑक्सीकरण", "अपचयन", "उदासीनीकरण", "संयोजन"],
    "answer_en": "Oxidation",
    "answer_hi": "ऑक्सीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which metal is used in thermometers?",
    "question_hi": "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Hg", "Ga", "Na", "K"],
    "options_hi": ["Hg", "Ga", "Na", "K"],
    "answer_en": "Hg",
    "answer_hi": "Hg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which gas is used in welding?",
    "question_hi": "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
    "options_en": ["CO₂", "O₂", "Acetylene", "NO₂"],
    "options_hi": ["CO₂", "O₂", "एसिटिलीन", "NO₂"],
    "answer_en": "Acetylene",
    "answer_hi": "एसिटिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
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
    "num": 38,
    "question_en": "Which compound is known as Plaster of Paris?",
    "question_hi": "किस यौगिक को प्लास्टर ऑफ पेरिस के नाम से जाना जाता है?",
    "options_en": ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃", "CaCl₂"],
    "options_hi": ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃", "CaCl₂"],
    "answer_en": "CaSO₄·½H₂O",
    "answer_hi": "CaSO₄·½H₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which gas is used in the Haber process?",
    "question_hi": "हैबर प्रक्रिया में किस गैस का उपयोग किया जाता है?",
    "options_en": ["O₂", "N₂", "H₂", "CO"],
    "options_hi": ["O₂", "N₂", "H₂", "CO"],
    "answer_en": "N₂",
    "answer_hi": "N₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which element has maximum number of isotopes?",
    "question_hi": "किस तत्व के समस्थानिकों की संख्या सबसे अधिक है?",
    "options_en": ["Sn", "Cl", "C", "N"],
    "options_hi": ["Sn", "Cl", "C", "N"],
    "answer_en": "Sn",
    "answer_hi": "Sn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which ion gives a brick-red flame?",
    "question_hi": "कौन सा आयन ईंट-लाल लौ देता है?",
    "options_en": ["Na⁺", "Ca²⁺", "Li⁺", "K⁺"],
    "options_hi": ["Na⁺", "Ca²⁺", "Li⁺", "K⁺"],
    "answer_en": "Ca²⁺",
    "answer_hi": "Ca²⁺",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which ion gives a lilac flame?",
    "question_hi": "कौन सा आयन बैंगनी लौ देता है?",
    "options_en": ["K⁺", "Na⁺", "Ca²⁺", "Cu²⁺"],
    "options_hi": ["K⁺", "Na⁺", "Ca²⁺", "Cu²⁺"],
    "answer_en": "K⁺",
    "answer_hi": "K⁺",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which law is used for calculating gas diffusion?",
    "question_hi": "गैस विसरण की गणना के लिए किस नियम का उपयोग किया जाता है?",
    "options_en": ["Boyle's law", "Graham's law", "Charles' law", "Dalton's law"],
    "options_hi": ["बॉयल का नियम", "ग्राहम का नियम", "चार्ल्स का नियम", "डाल्टन का नियम"],
    "answer_en": "Graham's law",
    "answer_hi": "ग्राहम का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which gas is responsible for acid rain?",
    "question_hi": "अम्लीय वर्षा के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["CO₂", "SO₂", "O₂", "He"],
    "options_hi": ["CO₂", "SO₂", "O₂", "He"],
    "answer_en": "SO₂",
    "answer_hi": "SO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which compound is used as antifreeze?",
    "question_hi": "एंटीफ्‍रीज के रूप में किस यौगिक का उपयोग किया जाता है?",
    "options_en": ["Ethanol", "Methanol", "Glycerol", "Ethylene glycol"],
    "options_hi": ["एथेनॉल", "मेथनॉल", "ग्लिसरॉल", "एथिलीन ग्लाइकॉल"],
    "answer_en": "Ethylene glycol",
    "answer_hi": "एथिलीन ग्लाइकॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which hydrocarbon has triple bond?",
    "question_hi": "किस हाइड्रोकार्बन में त्रि‍बंध होता है?",
    "options_en": ["Alkane", "Alkene", "Alkyne", "Arene"],
    "options_hi": ["एल्केन", "एल्कीन", "एल्काइन", "एरीन"],
    "answer_en": "Alkyne",
    "answer_hi": "एल्काइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which metal is used for making filaments in bulbs?",
    "question_hi": "बल्बों में फिलामेंट बनाने के लिए किस धातु का उपयोग किया जाता है?",
    "options_en": ["Cu", "Al", "Fe", "W"],
    "options_hi": ["Cu", "Al", "Fe", "W"],
    "answer_en": "W",
    "answer_hi": "W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which is a biodegradable polymer?",
    "question_hi": "कौन सा एक जैव निम्नीकरणीय बहुलक है?",
    "options_en": ["Nylon", "PVC", "PHBV", "Teflon"],
    "options_hi": ["नायलॉन", "PVC", "PHBV", "टेफ्लॉन"],
    "answer_en": "PHBV",
    "answer_hi": "PHBV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is used in soft drinks?",
    "question_hi": "सॉफ्ट ड्रिंक्स में किसका उपयोग किया जाता है?",
    "options_en": ["CO₂", "O₂", "N₂", "He"],
    "options_hi": ["CO₂", "O₂", "N₂", "He"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is the hardest natural substance?",
    "question_hi": "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    "options_en": ["Graphite", "Diamond", "Quartz", "Corundum"],
    "options_hi": ["ग्रेफाइट", "हीरा", "क्वार्ट्ज", "कुरुन्डम"],
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