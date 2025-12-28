const questions = [
  {
    "num": 1,
    "question_en": "Which is the most abundant gas in the atmosphere?",
    "question_hi": "वायुमंडल में सबसे अधिक मात्रा में पाई जाने वाली गैस कौन सी है?",
    "options_en": ["Oxygen", "Nitrogen", "CO₂", "Argon"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "CO₂", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which quantum number describes the shape of an orbital?",
    "question_hi": "कौन सा क्वांटम संख्या कक्षक के आकार का वर्णन करती है?",
    "options_en": ["Principal", "Azimuthal", "Magnetic", "Spin"],
    "options_hi": ["मुख्य", "अज़ीमुथल", "चुंबकीय", "स्पिन"],
    "answer_en": "Azimuthal",
    "answer_hi": "अज़ीमुथल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which element has no neutron?",
    "question_hi": "किस तत्व में न्यूट्रॉन नहीं होता है?",
    "options_en": ["Hydrogen", "Helium", "Lithium", "Beryllium"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "लिथियम", "बेरिलियम"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of the following has highest ionization energy?",
    "question_hi": "निम्नलिखित में से किसकी आयनन ऊर्जा सबसे अधिक है?",
    "options_en": ["Na", "K", "Li", "Rb"],
    "options_hi": ["Na", "K", "Li", "Rb"],
    "answer_en": "Li",
    "answer_hi": "Li",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which process converts solid directly to gas?",
    "question_hi": "कौन सी प्रक्रिया ठोस को सीधे गैस में परिवर्तित करती है?",
    "options_en": ["Condensation", "Sublimation", "Evaporation", "Deposition"],
    "options_hi": ["संघनन", "उर्ध्वपातन", "वाष्पीकरण", "निक्षेपण"],
    "answer_en": "Sublimation",
    "answer_hi": "उर्ध्वपातन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which is a buffer solution?",
    "question_hi": "कौन सा एक बफर विलयन है?",
    "options_en": ["HCl + NaOH", "CH₃COOH + CH₃COONa", "NH₃ + HCl", "NaOH + NaCl"],
    "options_hi": ["HCl + NaOH", "CH₃COOH + CH₃COONa", "NH₃ + HCl", "NaOH + NaCl"],
    "answer_en": "CH₃COOH + CH₃COONa",
    "answer_hi": "CH₃COOH + CH₃COONa",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which is not an alkali metal?",
    "question_hi": "कौन सी एक क्षार धातु नहीं है?",
    "options_en": ["Na", "K", "Li", "Mg"],
    "options_hi": ["Na", "K", "Li", "Mg"],
    "answer_en": "Mg",
    "answer_hi": "Mg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the oxidation number of oxygen in peroxides?",
    "question_hi": "पेरोक्साइड में ऑक्सीजन की ऑक्सीकरण संख्या क्या है?",
    "options_en": ["-2", "-1", "0", "+1"],
    "options_hi": ["-2", "-1", "0", "+1"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which gas bleaches by reduction?",
    "question_hi": "कौन सी गैस अपचयन द्वारा विरंजन करती है?",
    "options_en": ["Cl₂", "SO₂", "O₃", "NO₂"],
    "options_hi": ["Cl₂", "SO₂", "O₃", "NO₂"],
    "answer_en": "SO₂",
    "answer_hi": "SO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which block element is iron?",
    "question_hi": "लोहा कौन सा ब्लॉक तत्व है?",
    "options_en": ["s-block", "p-block", "d-block", "f-block"],
    "options_hi": ["s-ब्लॉक", "p-ब्लॉक", "d-ब्लॉक", "f-ब्लॉक"],
    "answer_en": "d-block",
    "answer_hi": "d-ब्लॉक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which acid is known as Aqua Fortis?",
    "question_hi": "किस अम्ल को एक्वा फोर्टिस के नाम से जाना जाता है?",
    "options_en": ["HCl", "H₂SO₄", "HNO₃", "HClO₄"],
    "options_hi": ["HCl", "H₂SO₄", "HNO₃", "HClO₄"],
    "answer_en": "HNO₃",
    "answer_hi": "HNO₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is the simplest carbohydrate?",
    "question_hi": "सबसे सरल कार्बोहाइड्रेट कौन सा है?",
    "options_en": ["Glucose", "Fructose", "Sucrose", "Glyceraldehyde"],
    "options_hi": ["ग्लूकोज", "फ्रुक्टोज", "सुक्रोज", "ग्लिसराल्डिहाइड"],
    "answer_en": "Glyceraldehyde",
    "answer_hi": "ग्लिसराल्डिहाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which vitamin is also called Ascorbic Acid?",
    "question_hi": "किस विटामिन को एस्कॉर्बिक अम्ल भी कहा जाता है?",
    "options_en": ["A", "C", "D", "K"],
    "options_hi": ["A", "C", "D", "K"],
    "answer_en": "C",
    "answer_hi": "C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The hybridization of carbon in ethene is?",
    "question_hi": "ईथीन में कार्बन का संकरण है?",
    "options_en": ["sp", "sp²", "sp³", "sp³d"],
    "options_hi": ["sp", "sp²", "sp³", "sp³d"],
    "answer_en": "sp²",
    "answer_hi": "sp²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which is the strongest reducing agent?",
    "question_hi": "सबसे प्रबल अपचायक कौन सा है?",
    "options_en": ["F⁻", "Cl⁻", "Na", "Li"],
    "options_hi": ["F⁻", "Cl⁻", "Na", "Li"],
    "answer_en": "Li",
    "answer_hi": "Li",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of the following is used as a coolant?",
    "question_hi": "निम्नलिखित में से किसका उपयोग शीतलक के रूप में किया जाता है?",
    "options_en": ["NaCl", "Dry Ice", "Kerosene", "H₂O"],
    "options_hi": ["NaCl", "ड्राई आइस", "मिट्टी का तेल", "H₂O"],
    "answer_en": "Dry Ice",
    "answer_hi": "ड्राई आइस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which gas is known as Marsh Gas?",
    "question_hi": "कौन सी गैस मार्श गैस के नाम से जानी जाती है?",
    "options_en": ["CO₂", "CH₄", "NH₃", "CO"],
    "options_hi": ["CO₂", "CH₄", "NH₃", "CO"],
    "answer_en": "CH₄",
    "answer_hi": "CH₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which compound is used for water softening?",
    "question_hi": "जल मृदुकरण के लिए किस यौगिक का उपयोग किया जाता है?",
    "options_en": ["Baking soda", "Washing soda", "Bleaching powder", "Caustic soda"],
    "options_hi": ["बेकिंग सोडा", "धावन सोडा", "ब्लीचिंग पाउडर", "कास्टिक सोडा"],
    "answer_en": "Washing soda",
    "answer_hi": "धावन सोडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which catalyst is used in the Haber process?",
    "question_hi": "हैबर प्रक्रिया में किस उत्प्रेरक का उपयोग किया जाता है?",
    "options_en": ["Pt", "Fe", "Ni", "Cu"],
    "options_hi": ["Pt", "Fe", "Ni", "Cu"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which metal is liquid at room temperature other than mercury?",
    "question_hi": "पारा के अलावा कौन सी धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Na", "Ga", "Al", "K"],
    "options_hi": ["Na", "Ga", "Al", "K"],
    "answer_en": "Ga",
    "answer_hi": "Ga",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which is the heaviest noble gas?",
    "question_hi": "सबसे भारी उत्कृष्ट गैस कौन सी है?",
    "options_en": ["Ne", "Ar", "Kr", "Rn"],
    "options_hi": ["Ne", "Ar", "Kr", "Rn"],
    "answer_en": "Rn",
    "answer_hi": "Rn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which element shows maximum number of oxidation states?",
    "question_hi": "कौन सा तत्व ऑक्सीकरण अवस्थाओं की अधिकतम संख्या दर्शाता है?",
    "options_en": ["Mn", "Fe", "Cr", "Co"],
    "options_hi": ["Mn", "Fe", "Cr", "Co"],
    "answer_en": "Mn",
    "answer_hi": "Mn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of the following is used as an anaesthetic?",
    "question_hi": "निम्नलिखित में से किसका उपयोग संवेदनाहारी के रूप में किया जाता है?",
    "options_en": ["CO₂", "NO", "N₂O", "O₃"],
    "options_hi": ["CO₂", "NO", "N₂O", "O₃"],
    "answer_en": "N₂O",
    "answer_hi": "N₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Tyndall effect is shown by?",
    "question_hi": "टिंडल प्रभाव किसके द्वारा दिखाया जाता है?",
    "options_en": ["True solutions", "Colloids", "Suspensions", "Gases"],
    "options_hi": ["वास्तविक विलयन", "कोलॉइड", "निलंबन", "गैसें"],
    "answer_en": "Colloids",
    "answer_hi": "कोलॉइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is formed when Na reacts with water?",
    "question_hi": "Na के पानी के साथ अभिक्रिया करने पर क्या बनता है?",
    "options_en": ["NaOH + H₂", "Na₂O", "NaCl", "NaH"],
    "options_hi": ["NaOH + H₂", "Na₂O", "NaCl", "NaH"],
    "answer_en": "NaOH + H₂",
    "answer_hi": "NaOH + H₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The pH of human blood is approx.?",
    "question_hi": "मानव रक्त का pH लगभग होता है?",
    "options_en": ["5.5", "7.4", "8.5", "6.0"],
    "options_hi": ["5.5", "7.4", "8.5", "6.0"],
    "answer_en": "7.4",
    "answer_hi": "7.4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which is an example of heterogeneous catalyst?",
    "question_hi": "विषमांगी उत्प्रेरक का उदाहरण है?",
    "options_en": ["Pt in H₂O₂", "Fe in Haber process", "Ni in hydrogenation", "All"],
    "options_hi": ["H₂O₂ में Pt", "हैबर प्रक्रिया में Fe", "हाइड्रोजनीकरण में Ni", "सभी"],
    "answer_en": "All",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is a non-biodegradable polymer?",
    "question_hi": "कौन सा एक गैर-जैव निम्नीकरणीय बहुलक है?",
    "options_en": ["PHBV", "Nylon-6", "Starch", "Cellulose"],
    "options_hi": ["PHBV", "नायलॉन-6", "स्टार्च", "सेलूलोज़"],
    "answer_en": "Nylon-6",
    "answer_hi": "नायलॉन-6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which isotope is used in cancer treatment?",
    "question_hi": "कैंसर उपचार में किस समस्थानिक का उपयोग किया जाता है?",
    "options_en": ["U-235", "I-131", "C-14", "Co-60"],
    "options_hi": ["U-235", "I-131", "C-14", "Co-60"],
    "answer_en": "Co-60",
    "answer_hi": "Co-60",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which has maximum conductivity?",
    "question_hi": "किसकी चालकता सबसे अधिक होती है?",
    "options_en": ["Strong electrolyte", "Weak electrolyte", "Non-electrolyte", "Pure water"],
    "options_hi": ["प्रबल विद्युत अपघट्य", "दुर्बल विद्युत अपघट्य", "अविद्युत अपघट्य", "शुद्ध जल"],
    "answer_en": "Strong electrolyte",
    "answer_hi": "प्रबल विद्युत अपघट्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which is an aromatic compound?",
    "question_hi": "कौन सा एक ऐरोमैटिक यौगिक है?",
    "options_en": ["CH₄", "C₂H₆", "Benzene", "C₂H₂"],
    "options_hi": ["CH₄", "C₂H₆", "बेंजीन", "C₂H₂"],
    "answer_en": "Benzene",
    "answer_hi": "बेंजीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which metal is used in Galvanization?",
    "question_hi": "गैल्वनीकरण में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Zn", "Cu", "Ag", "Al"],
    "options_hi": ["Zn", "Cu", "Ag", "Al"],
    "answer_en": "Zn",
    "answer_hi": "Zn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which is known as Greenhouse gas?",
    "question_hi": "कौन सी ग्रीनहाउस गैस के नाम से जानी जाती है?",
    "options_en": ["He", "CO₂", "N₂", "O₂"],
    "options_hi": ["He", "CO₂", "N₂", "O₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which acid is used in car batteries?",
    "question_hi": "कार बैटरियों में किस अम्ल का उपयोग किया जाता है?",
    "options_en": ["HCl", "HNO₃", "H₂SO₄", "HClO₄"],
    "options_hi": ["HCl", "HNO₃", "H₂SO₄", "HClO₄"],
    "answer_en": "H₂SO₄",
    "answer_hi": "H₂SO₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which gas is used for ripening of fruits?",
    "question_hi": "फलों के पकने के लिए किस गैस का उपयोग किया जाता है?",
    "options_en": ["CO₂", "Ethylene", "CO", "NO₂"],
    "options_hi": ["CO₂", "एथिलीन", "CO", "NO₂"],
    "answer_en": "Ethylene",
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which element is present in all amino acids?",
    "question_hi": "कौन सा तत्व सभी अमीनो अम्लों में उपस्थित होता है?",
    "options_en": ["S", "P", "N", "Cl"],
    "options_hi": ["S", "P", "N", "Cl"],
    "answer_en": "N",
    "answer_hi": "N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which is the smallest particle of an element?",
    "question_hi": "किसी तत्व का सबसे छोटा कण कौन सा है?",
    "options_en": ["Proton", "Atom", "Molecule", "Ion"],
    "options_hi": ["प्रोटॉन", "परमाणु", "अणु", "आयन"],
    "answer_en": "Atom",
    "answer_hi": "परमाणु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which salt is used in cooking?",
    "question_hi": "खाना पकाने में किस लवण का उपयोग किया जाता है?",
    "options_en": ["KCl", "NaCl", "MgCl₂", "CaCl₂"],
    "options_hi": ["KCl", "NaCl", "MgCl₂", "CaCl₂"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which has a linear shape?",
    "question_hi": "किसकी रैखिक आकृति होती है?",
    "options_en": ["CO₂", "H₂O", "NH₃", "CH₄"],
    "options_hi": ["CO₂", "H₂O", "NH₃", "CH₄"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Ozone contains how many oxygen atoms?",
    "question_hi": "ओजोन में कितने ऑक्सीजन परमाणु होते हैं?",
    "options_en": ["1", "2", "3", "4"],
    "options_hi": ["1", "2", "3", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which gas has the lowest density?",
    "question_hi": "किस गैस का घनत्व सबसे कम होता है?",
    "options_en": ["O₂", "N₂", "He", "CO₂"],
    "options_hi": ["O₂", "N₂", "He", "CO₂"],
    "answer_en": "He",
    "answer_hi": "He",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which is used to extinguish fire?",
    "question_hi": "आग बुझाने के लिए किसका उपयोग किया जाता है?",
    "options_en": ["CO₂", "O₂", "N₂", "H₂"],
    "options_hi": ["CO₂", "O₂", "N₂", "H₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of the following is radioactive?",
    "question_hi": "निम्नलिखित में से कौन सा रेडियोधर्मी है?",
    "options_en": ["Uranium", "Copper", "Iron", "Aluminium"],
    "options_hi": ["यूरेनियम", "तांबा", "लोहा", "एल्युमिनियम"],
    "answer_en": "Uranium",
    "answer_hi": "यूरेनियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which acid is present in milk?",
    "question_hi": "दूध में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Lactic Acid", "Acetic Acid", "Citric Acid", "Formic Acid"],
    "options_hi": ["लैक्टिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_en": "Lactic Acid",
    "answer_hi": "लैक्टिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which type of bond is present in NaCl?",
    "question_hi": "NaCl में किस प्रकार का बंधन उपस्थित होता है?",
    "options_en": ["Covalent", "Ionic", "Metallic", "Hydrogen"],
    "options_hi": ["सहसंयोजक", "आयनिक", "धात्विक", "हाइड्रोजन"],
    "answer_en": "Ionic",
    "answer_hi": "आयनिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is used to detect radiation?",
    "question_hi": "विकिरण का पता लगाने के लिए किसका उपयोग किया जाता है?",
    "options_en": ["pH meter", "Geiger counter", "Spectrometer", "Thermometer"],
    "options_hi": ["pH मीटर", "गाइगर काउंटर", "स्पेक्ट्रोमीटर", "थर्मामीटर"],
    "answer_en": "Geiger counter",
    "answer_hi": "गाइगर काउंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which has highest boiling point?",
    "question_hi": "किसका क्वथनांक सबसे अधिक होता है?",
    "options_en": ["H₂O", "H₂S", "HCl", "NH₃"],
    "options_hi": ["H₂O", "H₂S", "HCl", "NH₃"],
    "answer_en": "H₂O",
    "answer_hi": "H₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which compound is used for bleaching?",
    "question_hi": "विरंजन के लिए किस यौगिक का उपयोग किया जाता है?",
    "options_en": ["CaO", "Ca(OH)₂", "CaOCl₂", "NaCl"],
    "options_hi": ["CaO", "Ca(OH)₂", "CaOCl₂", "NaCl"],
    "answer_en": "CaOCl₂",
    "answer_hi": "CaOCl₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Hydrogen", "Helium", "Methane", "Nitrogen"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "मीथेन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which metal forms amphoteric oxide?",
    "question_hi": "कौन सी धातु उभयधर्मी ऑक्साइड बनाती है?",
    "options_en": ["Na", "K", "Al", "Ca"],
    "options_hi": ["Na", "K", "Al", "Ca"],
    "answer_en": "Al",
    "answer_hi": "Al",
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