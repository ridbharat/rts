const questions = [
  {
    "num": 1,
    "question_en": "What is the hybridization of water?",
    "question_hi": "पानी का संकरण क्या है?",
    "options_en": ["sp", "sp2", "sp3", "sp3d"],
    "options_hi": ["sp", "sp2", "sp3", "sp3d"],
    "answer_en": "sp3",
    "answer_hi": "sp3",
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
    "question_en": "What type of oxide is Al2O3?",
    "question_hi": "Al2O3 किस प्रकार का ऑक्साइड है?",
    "options_en": ["Acidic", "Basic", "Amphoteric", "Neutral"],
    "options_hi": ["अम्लीय", "क्षारीय", "उभयधर्मी", "उदासीन"],
    "answer_en": "Amphoteric",
    "answer_hi": "उभयधर्मी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the common name of NaHCO3?",
    "question_hi": "NaHCO3 का सामान्य नाम क्या है?",
    "options_en": ["Washing soda", "Baking soda", "Limestone", "Bleaching powder"],
    "options_hi": ["धावन सोडा", "बेकिंग सोडा", "चूना पत्थर", "ब्लीचिंग पाउडर"],
    "answer_en": "Baking soda",
    "answer_hi": "बेकिंग सोडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the flame color of magnesium metal?",
    "question_hi": "मैग्नीशियम धातु का ज्वाला रंग क्या है?",
    "options_en": ["Green", "White", "Red", "Blue"],
    "options_hi": ["हरा", "सफेद", "लाल", "नीला"],
    "answer_en": "White",
    "answer_hi": "सफेद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the 'oil of vitriol'?",
    "question_hi": "'ऑयल ऑफ विट्रियल' क्या है?",
    "options_en": ["Nitric acid", "Sulfuric acid", "Hydrochloric acid", "Acetic acid"],
    "options_hi": ["नाइट्रिक एसिड", "सल्फ्यूरिक एसिड", "हाइड्रोक्लोरिक एसिड", "एसिटिक एसिड"],
    "answer_en": "Sulfuric acid",
    "answer_hi": "सल्फ्यूरिक एसिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which is the strongest acid?",
    "question_hi": "सबसे प्रबल अम्ल कौन सा है?",
    "options_en": ["HCl", "HNO3", "H2SO4", "HF"],
    "options_hi": ["HCl", "HNO3", "H2SO4", "HF"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Who developed the pH scale?",
    "question_hi": "pH स्केल किसने विकसित किया?",
    "options_en": ["Arrhenius", "Bronsted", "Sorensen", "Lewis"],
    "options_hi": ["अरहेनियस", "ब्रोंस्टेड", "सोरेन्सन", "लुईस"],
    "answer_en": "Sorensen",
    "answer_hi": "सोरेन्सन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the chemical formula of gypsum?",
    "question_hi": "जिप्सम का रासायनिक सूत्र क्या है?",
    "options_en": ["CaSO4", "CaSO4·2H2O", "CaCO3", "CaO"],
    "options_hi": ["CaSO4", "CaSO4·2H2O", "CaCO3", "CaO"],
    "answer_en": "CaSO4·2H2O",
    "answer_hi": "CaSO4·2H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the atomic number of hydrogen?",
    "question_hi": "हाइड्रोजन की परमाणु संख्या क्या है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which gas turns limewater milky?",
    "question_hi": "कौन सी गैस चूने के पानी को दूधिया बना देती है?",
    "options_en": ["O2", "CO2", "H2", "N2"],
    "options_hi": ["O2", "CO2", "H2", "N2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is shared in a covalent bond?",
    "question_hi": "सहसंयोजक बंध में क्या साझा किया जाता है?",
    "options_en": ["Electrons", "Protons", "Neutrons", "Photons"],
    "options_hi": ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "फोटॉन"],
    "answer_en": "Electrons",
    "answer_hi": "इलेक्ट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which molecule has the strongest hydrogen bonding?",
    "question_hi": "किस अणु में सबसे मजबूत हाइड्रोजन बंधन होता है?",
    "options_en": ["HF", "HCl", "HBr", "HI"],
    "options_hi": ["HF", "HCl", "HBr", "HI"],
    "answer_en": "HF",
    "answer_hi": "HF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the main component of natural gas?",
    "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
    "options_en": ["Propane", "Butane", "Methane", "Ethane"],
    "options_hi": ["प्रोपेन", "ब्यूटेन", "मीथेन", "ईथेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which is a noble metal?",
    "question_hi": "कौन सी एक उत्कृष्ट धातु है?",
    "options_en": ["Na", "K", "Au", "Ca"],
    "options_hi": ["Na", "K", "Au", "Ca"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Who discovered the neutron?",
    "question_hi": "न्यूट्रॉन की खोज किसने की?",
    "options_en": ["Thomson", "Chadwick", "Rutherford", "Bohr"],
    "options_hi": ["थॉमसन", "चैडविक", "रदरफोर्ड", "बोहर"],
    "answer_en": "Chadwick",
    "answer_hi": "चैडविक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which element has the highest electron affinity?",
    "question_hi": "किस तत्व की इलेक्ट्रॉन बंधुता सबसे अधिक होती है?",
    "options_en": ["F", "Cl", "Br", "I"],
    "options_hi": ["F", "Cl", "Br", "I"],
    "answer_en": "Cl",
    "answer_hi": "Cl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the formula of laughing gas?",
    "question_hi": "हंसाने वाली गैस का सूत्र क्या है?",
    "options_en": ["NO", "NO2", "N2O", "N2"],
    "options_hi": ["NO", "NO2", "N2O", "N2"],
    "answer_en": "N2O",
    "answer_hi": "N2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the color of MnO2?",
    "question_hi": "MnO2 का रंग क्या है?",
    "options_en": ["Pink", "Black", "White", "Green"],
    "options_hi": ["गुलाबी", "काला", "सफेद", "हरा"],
    "answer_en": "Black",
    "answer_hi": "काला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What type of compound is C2H5OH?",
    "question_hi": "C2H5OH किस प्रकार का यौगिक है?",
    "options_en": ["Alcohol", "Aldehyde", "Ketone", "Acid"],
    "options_hi": ["अल्कोहल", "एल्डिहाइड", "कीटोन", "अम्ल"],
    "answer_en": "Alcohol",
    "answer_hi": "अल्कोहल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "How much water vapor is present in dry air?",
    "question_hi": "शुष्क वायु में कितनी जल वाष्प मौजूद होती है?",
    "options_en": ["0%", "10%", "50%", "90%"],
    "options_hi": ["0%", "10%", "50%", "90%"],
    "answer_en": "0%",
    "answer_hi": "0%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which of the following is a reducing agent?",
    "question_hi": "निम्नलिखित में से कौन सा एक अपचायक है?",
    "options_en": ["H2", "O2", "Cl2", "F2"],
    "options_hi": ["H2", "O2", "Cl2", "F2"],
    "answer_en": "H2",
    "answer_hi": "H2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is released at the cathode during electrolysis of water?",
    "question_hi": "पानी के विद्युत अपघटन के दौरान कैथोड पर क्या मुक्त होता है?",
    "options_en": ["O2", "H2", "Cl2", "CO2"],
    "options_hi": ["O2", "H2", "Cl2", "CO2"],
    "answer_en": "H2",
    "answer_hi": "H2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the color of CuSO4·5H2O?",
    "question_hi": "CuSO4·5H2O का रंग क्या है?",
    "options_en": ["Green", "White", "Blue", "Yellow"],
    "options_hi": ["हरा", "सफेद", "नीला", "पीला"],
    "answer_en": "Blue",
    "answer_hi": "नीला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which gas is known as marsh gas?",
    "question_hi": "किस गैस को मार्श गैस के नाम से जाना जाता है?",
    "options_en": ["Ethane", "Propane", "Methane", "Butane"],
    "options_hi": ["ईथेन", "प्रोपेन", "मीथेन", "ब्यूटेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which form of phosphorus is used in matchsticks?",
    "question_hi": "माचिस की तीलियों में फॉस्फोरस के किस रूप का उपयोग किया जाता है?",
    "options_en": ["White phosphorus", "Red phosphorus", "Black phosphorus", "Yellow phosphorus"],
    "options_hi": ["श्वेत फॉस्फोरस", "लाल फॉस्फोरस", "काला फॉस्फोरस", "पीला फॉस्फोरस"],
    "answer_en": "Red phosphorus",
    "answer_hi": "लाल फॉस्फोरस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the shape of NH3?",
    "question_hi": "NH3 की आकृति क्या है?",
    "options_en": ["Linear", "Trigonal planar", "Trigonal pyramidal", "Bent"],
    "options_hi": ["रैखिक", "त्रिकोणीय समतलीय", "त्रिकोणीय पिरामिडी", "मुड़ी हुई"],
    "answer_en": "Trigonal pyramidal",
    "answer_hi": "त्रिकोणीय पिरामिडी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Why is O2 called paramagnetic?",
    "question_hi": "O2 को अनुचुम्बकीय क्यों कहा जाता है?",
    "options_en": ["Unpaired electrons", "No electrons", "High mass", "Low mass"],
    "options_hi": ["अयुग्मित इलेक्ट्रॉन", "कोई इलेक्ट्रॉन नहीं", "उच्च द्रव्यमान", "कम द्रव्यमान"],
    "answer_en": "Unpaired electrons",
    "answer_hi": "अयुग्मित इलेक्ट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which hydrocarbon has the highest H:C ratio?",
    "question_hi": "किस हाइड्रोकार्बन में H:C अनुपात सबसे अधिक होता है?",
    "options_en": ["Alkane", "Alkene", "Alkyne", "Aromatic"],
    "options_hi": ["एल्केन", "एल्कीन", "एल्काइन", "ऐरोमैटिक"],
    "answer_en": "Alkane",
    "answer_hi": "एल्केन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which acid is present in an ant sting?",
    "question_hi": "चींटी के डंक में कौन सा अम्ल मौजूद होता है?",
    "options_en": ["Acetic acid", "Formic acid", "Citric acid", "Lactic acid"],
    "options_hi": ["एसिटिक एसिड", "फॉर्मिक एसिड", "सिट्रिक एसिड", "लैक्टिक एसिड"],
    "answer_en": "Formic acid",
    "answer_hi": "फॉर्मिक एसिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the main component of coal gas?",
    "question_hi": "कोल गैस का मुख्य घटक क्या है?",
    "options_en": ["CO2", "CO", "H2", "CH4"],
    "options_hi": ["CO2", "CO", "H2", "CH4"],
    "answer_en": "H2",
    "answer_hi": "H2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the catalyst used in the Haber process?",
    "question_hi": "हैबर प्रक्रिया में प्रयुक्त उत्प्रेरक क्या है?",
    "options_en": ["Pt", "Fe", "Ni", "Cu"],
    "options_hi": ["Pt", "Fe", "Ni", "Cu"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the formula of sodium thiosulfate?",
    "question_hi": "सोडियम थायोसल्फेट का सूत्र क्या है?",
    "options_en": ["Na2SO4", "Na2S2O3", "Na2CO3", "NaCl"],
    "options_hi": ["Na2SO4", "Na2S2O3", "Na2CO3", "NaCl"],
    "answer_en": "Na2S2O3",
    "answer_hi": "Na2S2O3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the shape of CCl4?",
    "question_hi": "CCl4 की आकृति क्या है?",
    "options_en": ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
    "options_hi": ["रैखिक", "त्रिकोणीय समतलीय", "चतुष्फलकीय", "मुड़ी हुई"],
    "answer_en": "Tetrahedral",
    "answer_hi": "चतुष्फलकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Bleaching action of SO2 occurs due to?",
    "question_hi": "SO2 की ब्लीचिंग क्रिया किसके कारण होती है?",
    "options_en": ["Oxidation", "Reduction", "Hydrolysis", "Polymerization"],
    "options_hi": ["ऑक्सीकरण", "अपचयन", "जल-अपघटन", "बहुलकीकरण"],
    "answer_en": "Reduction",
    "answer_hi": "अपचयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is milk of magnesia?",
    "question_hi": "मिल्क ऑफ मैग्नीशिया क्या है?",
    "options_en": ["MgO", "MgCl2", "Mg(OH)2", "MgCO3"],
    "options_hi": ["MgO", "MgCl2", "Mg(OH)2", "MgCO3"],
    "answer_en": "Mg(OH)2",
    "answer_hi": "Mg(OH)2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which of the following is a secondary alcohol?",
    "question_hi": "निम्नलिखित में से कौन सा एक द्वितीयक अल्कोहल है?",
    "options_en": ["Ethanol", "Isopropanol", "Methanol", "Propanol"],
    "options_hi": ["एथेनॉल", "आइसोप्रोपेनॉल", "मेथेनॉल", "प्रोपेनॉल"],
    "answer_en": "Isopropanol",
    "answer_hi": "आइसोप्रोपेनॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
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
    "num": 39,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["H2", "Cl2", "He", "O2"],
    "options_hi": ["H2", "Cl2", "He", "O2"],
    "answer_en": "He",
    "answer_hi": "He",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the role of oxygen in rusting?",
    "question_hi": "जंग लगने में ऑक्सीजन की क्या भूमिका है?",
    "options_en": ["Oxidizing agent", "Reducing agent", "Neutral", "None"],
    "options_hi": ["ऑक्सीकारक", "अपचायक", "उदासीन", "कोई नहीं"],
    "answer_en": "Oxidizing agent",
    "answer_hi": "ऑक्सीकारक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the main cause of acid rain?",
    "question_hi": "अम्लीय वर्षा का मुख्य कारण क्या है?",
    "options_en": ["SO2 & NOx", "CO2", "CH4", "O3"],
    "options_hi": ["SO2 और NOx", "CO2", "CH4", "O3"],
    "answer_en": "SO2 & NOx",
    "answer_hi": "SO2 और NOx",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What happens to reaction rate when temperature increases?",
    "question_hi": "तापमान बढ़ने पर अभिक्रिया दर पर क्या प्रभाव पड़ता है?",
    "options_en": ["Decrease", "Increase", "No change", "Zero"],
    "options_hi": ["घटती है", "बढ़ती है", "कोई परिवर्तन नहीं", "शून्य"],
    "answer_en": "Increase",
    "answer_hi": "बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which compound is aromatic?",
    "question_hi": "कौन सा यौगिक ऐरोमैटिक है?",
    "options_en": ["CH4", "C2H6", "C6H6", "C2H2"],
    "options_hi": ["CH4", "C2H6", "C6H6", "C2H2"],
    "answer_en": "C6H6",
    "answer_hi": "C6H6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purity unit of gold?",
    "question_hi": "सोने की शुद्धता की इकाई क्या है?",
    "options_en": ["Meter", "Volt", "Carat", "Joule"],
    "options_hi": ["मीटर", "वोल्ट", "कैरेट", "जूल"],
    "answer_en": "Carat",
    "answer_hi": "कैरेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is an electrolyte?",
    "question_hi": "कौन सा एक विद्युत अपघट्य है?",
    "options_en": ["Sugar solution", "NaCl solution", "Alcohol", "Benzene"],
    "options_hi": ["चीनी विलयन", "NaCl विलयन", "अल्कोहल", "बेंजीन"],
    "answer_en": "NaCl solution",
    "answer_hi": "NaCl विलयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which oxide is acidic?",
    "question_hi": "कौन सा ऑक्साइड अम्लीय है?",
    "options_en": ["CO", "CO2", "Na2O", "MgO"],
    "options_hi": ["CO", "CO2", "Na2O", "MgO"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which reagent is used in the protein test?",
    "question_hi": "प्रोटीन परीक्षण में किस अभिकर्मक का उपयोग किया जाता है?",
    "options_en": ["Biuret", "Fehling", "Tollen", "Benedict"],
    "options_hi": ["बायुरेट", "फेहलिंग", "टोलेन", "बेनेडिक्ट"],
    "answer_en": "Biuret",
    "answer_hi": "बायुरेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the formula of Freon?",
    "question_hi": "फ्रीऑन का सूत्र क्या है?",
    "options_en": ["CCl2F2", "CO2", "NO2", "C2H2"],
    "options_hi": ["CCl2F2", "CO2", "NO2", "C2H2"],
    "answer_en": "CCl2F2",
    "answer_hi": "CCl2F2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "During photosynthesis, CO2 is converted into?",
    "question_hi": "प्रकाश संश्लेषण के दौरान, CO2 किसमें परिवर्तित होता है?",
    "options_en": ["Alcohol", "Sugar", "Protein", "Fat"],
    "options_hi": ["अल्कोहल", "शक्कर", "प्रोटीन", "वसा"],
    "answer_en": "Sugar",
    "answer_hi": "शक्कर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which ions cause hardness of water?",
    "question_hi": "कौन से आयन जल की कठोरता का कारण बनते हैं?",
    "options_en": ["Na+", "K+", "Ca2+ & Mg2+", "Cl-"],
    "options_hi": ["Na+", "K+", "Ca2+ और Mg2+", "Cl-"],
    "answer_en": "Ca2+ & Mg2+",
    "answer_hi": "Ca2+ और Mg2+",
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