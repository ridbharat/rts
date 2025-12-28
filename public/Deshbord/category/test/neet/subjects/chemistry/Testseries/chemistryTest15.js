const questions =[
  {
    "num": 1,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "H2O2", "HO2", "OH"],
    "options_hi": ["H2O", "H2O2", "HO2", "OH"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the formula of ethyl alcohol?",
    "question_hi": "एथिल अल्कोहल का सूत्र क्या है?",
    "options_en": ["C2H5OH", "CH3OH", "C3H7OH", "C2H6"],
    "options_hi": ["C2H5OH", "CH3OH", "C3H7OH", "C2H6"],
    "answer_en": "C2H5OH",
    "answer_hi": "C2H5OH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
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
    "num": 4,
    "question_en": "Atomic number represents what?",
    "question_hi": "परमाणु संख्या क्या दर्शाती है?",
    "options_en": ["Number of protons", "Number of neutrons", "Number of electrons", "Mass"],
    "options_hi": ["प्रोटॉन की संख्या", "न्यूट्रॉन की संख्या", "इलेक्ट्रॉन की संख्या", "द्रव्यमान"],
    "answer_en": "Number of protons",
    "answer_hi": "प्रोटॉन की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the formula of ammonia?",
    "question_hi": "अमोनिया का सूत्र क्या है?",
    "options_en": ["NH3", "N2H4", "NH4+", "NO2"],
    "options_hi": ["NH3", "N2H4", "NH4+", "NO2"],
    "answer_en": "NH3",
    "answer_hi": "NH3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which acid is known as the king of chemicals?",
    "question_hi": "किस अम्ल को रसायनों का राजा कहा जाता है?",
    "options_en": ["Sulfuric acid", "HCl", "Nitric acid", "Acetic acid"],
    "options_hi": ["सल्फ्यूरिक एसिड", "HCl", "नाइट्रिक एसिड", "एसिटिक एसिड"],
    "answer_en": "Sulfuric acid",
    "answer_hi": "सल्फ्यूरिक एसिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Allotropes of carbon include?",
    "question_hi": "कार्बन के अपरूपों में शामिल हैं?",
    "options_en": ["Graphite & Diamond", "CO & CO2", "CH4 & C2H6", "Only Diamond"],
    "options_hi": ["ग्रेफाइट और हीरा", "CO और CO2", "CH4 और C2H6", "केवल हीरा"],
    "answer_en": "Graphite & Diamond",
    "answer_hi": "ग्रेफाइट और हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the formula of ozone?",
    "question_hi": "ओजोन का सूत्र क्या है?",
    "options_en": ["O3", "O2", "O4", "O2−"],
    "options_hi": ["O3", "O2", "O4", "O2−"],
    "answer_en": "O3",
    "answer_hi": "O3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which gas is called the 'king of poisons'?",
    "question_hi": "किस गैस को 'विषों का राजा' कहा जाता है?",
    "options_en": ["CO", "CO2", "SO2", "NO"],
    "options_hi": ["CO", "CO2", "SO2", "NO"],
    "answer_en": "CO",
    "answer_hi": "CO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which catalyst is used in the Haber process?",
    "question_hi": "हैबर प्रक्रिया में किस उत्प्रेरक का उपयोग किया जाता है?",
    "options_en": ["Fe", "Ni", "Pt", "Cu"],
    "options_hi": ["Fe", "Ni", "Pt", "Cu"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Vinegar mainly contains which acid?",
    "question_hi": "सिरका में मुख्य रूप से कौन सा अम्ल होता है?",
    "options_en": ["Acetic acid", "Formic acid", "Citric acid", "Sulfuric acid"],
    "options_hi": ["एसिटिक एसिड", "फॉर्मिक एसिड", "सिट्रिक एसिड", "सल्फ्यूरिक एसिड"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक एसिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Helium", "Hydrogen", "Nitrogen", "Oxygen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "नाइट्रोजन", "ऑक्सीजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which chemical test is used for unsaturation?",
    "question_hi": "असंतृप्तता के लिए किस रासायनिक परीक्षण का उपयोग किया जाता है?",
    "options_en": ["Baeyer's test", "Tollen's test", "Benedict test", "Biuret test"],
    "options_hi": ["बेयर परीक्षण", "टोलेन परीक्षण", "बेनेडिक्ट परीक्षण", "बायुरेट परीक्षण"],
    "answer_en": "Baeyer's test",
    "answer_hi": "बेयर परीक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
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
    "num": 15,
    "question_en": "Which element forms the maximum number of compounds?",
    "question_hi": "कौन सा तत्व सबसे अधिक संख्या में यौगिक बनाता है?",
    "options_en": ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is present in milk of magnesia?",
    "question_hi": "मिल्क ऑफ मैग्नीशिया में क्या मौजूद होता है?",
    "options_en": ["Mg(OH)2", "MgO", "MgCO3", "MgCl2"],
    "options_hi": ["Mg(OH)2", "MgO", "MgCO3", "MgCl2"],
    "answer_en": "Mg(OH)2",
    "answer_hi": "Mg(OH)2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which gas turns lime water milky?",
    "question_hi": "कौन सी गैस चूने के पानी को दूधिया बना देती है?",
    "options_en": ["CO2", "H2", "O2", "N2"],
    "options_hi": ["CO2", "H2", "O2", "N2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Mercury", "Sodium", "Aluminum", "Iron"],
    "options_hi": ["पारा", "सोडियम", "एल्युमिनियम", "लोहा"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which acid is used for cleaning toilets?",
    "question_hi": "टॉयलेट साफ करने के लिए किस अम्ल का उपयोग किया जाता है?",
    "options_en": ["HCl", "H2SO4", "HNO3", "CH3COOH"],
    "options_hi": ["HCl", "H2SO4", "HNO3", "CH3COOH"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which bond is the strongest?",
    "question_hi": "कौन सा बंधन सबसे मजबूत होता है?",
    "options_en": ["Covalent bond", "Ionic bond", "Hydrogen bond", "Van der Waals"],
    "options_hi": ["सहसंयोजक बंध", "आयनिक बंध", "हाइड्रोजन बंध", "वैन डर वाल्स"],
    "answer_en": "Covalent bond",
    "answer_hi": "सहसंयोजक बंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Electrolysis of water produces what?",
    "question_hi": "पानी के विद्युत अपघटन से क्या उत्पन्न होता है?",
    "options_en": ["H2 & O2", "H2 only", "O2 only", "CO2"],
    "options_hi": ["H2 और O2", "केवल H2", "केवल O2", "CO2"],
    "answer_en": "H2 & O2",
    "answer_hi": "H2 और O2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which element is present in proteins?",
    "question_hi": "प्रोटीन में कौन सा तत्व मौजूद होता है?",
    "options_en": ["Nitrogen", "Calcium", "Sodium", "Chlorine"],
    "options_hi": ["नाइट्रोजन", "कैल्शियम", "सोडियम", "क्लोरीन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which is the most abundant gas in the atmosphere?",
    "question_hi": "वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?",
    "options_en": ["Nitrogen", "Oxygen", "CO2", "Argon"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "CO2", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the main cause of hard water?",
    "question_hi": "कठोर जल का मुख्य कारण क्या है?",
    "options_en": ["Ca2+ & Mg2+", "Na+", "K+", "Fe2+"],
    "options_hi": ["Ca2+ और Mg2+", "Na+", "K+", "Fe2+"],
    "answer_en": "Ca2+ & Mg2+",
    "answer_hi": "Ca2+ और Mg2+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Aqua regia is a mixture of?",
    "question_hi": "अम्लराज किसका मिश्रण है?",
    "options_en": ["HCl + HNO3", "H2SO4 + HCl", "HNO3 + H2O", "HCl + H2O2"],
    "options_hi": ["HCl + HNO3", "H2SO4 + HCl", "HNO3 + H2O", "HCl + H2O2"],
    "answer_en": "HCl + HNO3",
    "answer_hi": "HCl + HNO3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What type of bond is present in ethene?",
    "question_hi": "ईथीन में किस प्रकार का बंधन मौजूद होता है?",
    "options_en": ["Double bond", "Single bond", "Triple bond", "Ionic bond"],
    "options_hi": ["द्वि-बंध", "एकल बंध", "त्रि-बंध", "आयनिक बंध"],
    "answer_en": "Double bond",
    "answer_hi": "द्वि-बंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which metal reacts vigorously with water?",
    "question_hi": "कौन सी धातु पानी के साथ तीव्रता से अभिक्रिया करती है?",
    "options_en": ["Potassium", "Copper", "Silver", "Gold"],
    "options_hi": ["पोटैशियम", "तांबा", "चांदी", "सोना"],
    "answer_en": "Potassium",
    "answer_hi": "पोटैशियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which gas is known as a greenhouse gas?",
    "question_hi": "किस गैस को ग्रीनहाउस गैस के रूप में जाना जाता है?",
    "options_en": ["CO2", "N2", "H2", "O2"],
    "options_hi": ["CO2", "N2", "H2", "O2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the formula of rust?",
    "question_hi": "जंग का सूत्र क्या है?",
    "options_en": ["Fe2O3·nH2O", "FeO", "Fe3O4", "Fe2O"],
    "options_hi": ["Fe2O3·nH2O", "FeO", "Fe3O4", "Fe2O"],
    "answer_en": "Fe2O3·nH2O",
    "answer_hi": "Fe2O3·nH2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which of the following is a noble gas?",
    "question_hi": "निम्नलिखित में से कौन सी एक उत्कृष्ट गैस है?",
    "options_en": ["Neon", "Nitrogen", "Chlorine", "Hydrogen"],
    "options_hi": ["नियॉन", "नाइट्रोजन", "क्लोरीन", "हाइड्रोजन"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which acid is used in making fertilizers?",
    "question_hi": "उर्वरक बनाने में किस अम्ल का उपयोग किया जाता है?",
    "options_en": ["HNO3", "HCl", "H2SO4", "CH3COOH"],
    "options_hi": ["HNO3", "HCl", "H2SO4", "CH3COOH"],
    "answer_en": "HNO3",
    "answer_hi": "HNO3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which compound decolorizes bromine water?",
    "question_hi": "कौन सा यौगिक ब्रोमीन जल का रंग हटाता है?",
    "options_en": ["Alkene", "Alkane", "Alcohol", "Ether"],
    "options_hi": ["एल्कीन", "एल्केन", "अल्कोहल", "ईथर"],
    "answer_en": "Alkene",
    "answer_hi": "एल्कीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which ion gives a green flame?",
    "question_hi": "कौन सा आयन हरी लौ देता है?",
    "options_en": ["Ba2+", "Cu2+", "Na+", "K+"],
    "options_hi": ["Ba2+", "Cu2+", "Na+", "K+"],
    "answer_en": "Ba2+",
    "answer_hi": "Ba2+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "आग बुझाने के उपकरणों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["CO2", "N2", "O2", "CO"],
    "options_hi": ["CO2", "N2", "O2", "CO"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Soap is made by which process?",
    "question_hi": "साबुन किस प्रक्रिया द्वारा बनाया जाता है?",
    "options_en": ["Saponification", "Substitution", "Hydrogenation", "Oxidation"],
    "options_hi": ["साबुनीकरण", "प्रतिस्थापन", "हाइड्रोजनीकरण", "ऑक्सीकरण"],
    "answer_en": "Saponification",
    "answer_hi": "साबुनीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which metal has the highest conductivity?",
    "question_hi": "किस धातु की चालकता सबसे अधिक होती है?",
    "options_en": ["Silver", "Copper", "Aluminium", "Gold"],
    "options_hi": ["चांदी", "तांबा", "एल्युमिनियम", "सोना"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which acid is present in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल मौजूद होता है?",
    "options_en": ["Citric acid", "Tartaric acid", "Acetic acid", "Formic acid"],
    "options_hi": ["सिट्रिक एसिड", "टार्टरिक एसिड", "एसिटिक एसिड", "फॉर्मिक एसिड"],
    "answer_en": "Citric acid",
    "answer_hi": "सिट्रिक एसिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which indicator turns pink in a basic solution?",
    "question_hi": "कौन सा सूचक क्षारीय विलयन में गुलाबी हो जाता है?",
    "options_en": ["Phenolphthalein", "Methyl orange", "Litmus", "Starch"],
    "options_hi": ["फिनॉल्फथेलिन", "मिथाइल ऑरेंज", "लिटमस", "स्टार्च"],
    "answer_en": "Phenolphthalein",
    "answer_hi": "फिनॉल्फथेलिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the formula of glucose?",
    "question_hi": "ग्लूकोज का सूत्र क्या है?",
    "options_en": ["C6H12O6", "C12H22O11", "C2H5OH", "CH3OH"],
    "options_hi": ["C6H12O6", "C12H22O11", "C2H5OH", "CH3OH"],
    "answer_en": "C6H12O6",
    "answer_hi": "C6H12O6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which gas has the least density?",
    "question_hi": "किस गैस का घनत्व सबसे कम होता है?",
    "options_en": ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which metal forms amphoteric oxide?",
    "question_hi": "कौन सी धातु उभयधर्मी ऑक्साइड बनाती है?",
    "options_en": ["Aluminium", "Calcium", "Potassium", "Zinc"],
    "options_hi": ["एल्युमिनियम", "कैल्शियम", "पोटैशियम", "जिंक"],
    "answer_en": "Aluminium",
    "answer_hi": "एल्युमिनियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which chemical is used to purify water?",
    "question_hi": "पानी को शुद्ध करने के लिए किस रसायन का उपयोग किया जाता है?",
    "options_en": ["Chlorine", "Bromine", "Iodine", "Ozone"],
    "options_hi": ["क्लोरीन", "ब्रोमीन", "आयोडीन", "ओजोन"],
    "answer_en": "Chlorine",
    "answer_hi": "क्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Acid + Metal → ?",
    "question_hi": "अम्ल + धातु → ?",
    "options_en": ["Salt + H2", "Salt + H2O", "Base + Water", "Hydrogen gas only"],
    "options_hi": ["लवण + H2", "लवण + H2O", "क्षार + पानी", "केवल हाइड्रोजन गैस"],
    "answer_en": "Salt + H2",
    "answer_hi": "लवण + H2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which element forms coloured compounds?",
    "question_hi": "कौन सा तत्व रंगीन यौगिक बनाता है?",
    "options_en": ["Transition metals", "Alkali metals", "Noble gases", "Alkaline earth metals"],
    "options_hi": ["संक्रमण धातुएं", "क्षार धातुएं", "उत्कृष्ट गैसें", "क्षारीय मृदा धातुएं"],
    "answer_en": "Transition metals",
    "answer_hi": "संक्रमण धातुएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which compound is known as quicklime?",
    "question_hi": "किस यौगिक को बिना बुझा चूना कहा जाता है?",
    "options_en": ["CaO", "CaCO3", "Ca(OH)2", "CaSO4"],
    "options_hi": ["CaO", "CaCO3", "Ca(OH)2", "CaSO4"],
    "answer_en": "CaO",
    "answer_hi": "CaO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which element is liquid at room temperature?",
    "question_hi": "कौन सा तत्व कमरे के तापमान पर तरल होता है?",
    "options_en": ["Bromine", "Chlorine", "Fluorine", "Iodine"],
    "options_hi": ["ब्रोमीन", "क्लोरीन", "फ्लोरीन", "आयोडीन"],
    "answer_en": "Bromine",
    "answer_hi": "ब्रोमीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which gas smells like rotten eggs?",
    "question_hi": "किस गैस में सड़े अंडे जैसी गंध आती है?",
    "options_en": ["H2S", "NH3", "SO2", "CO"],
    "options_hi": ["H2S", "NH3", "SO2", "CO"],
    "answer_en": "H2S",
    "answer_hi": "H2S",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which hydrocarbon has formula C3H8?",
    "question_hi": "किस हाइड्रोकार्बन का सूत्र C3H8 है?",
    "options_en": ["Propane", "Butane", "Ethane", "Methane"],
    "options_hi": ["प्रोपेन", "ब्यूटेन", "ईथेन", "मीथेन"],
    "answer_en": "Propane",
    "answer_hi": "प्रोपेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which salt turns blue litmus red?",
    "question_hi": "कौन सा लवण नीले लिटमस को लाल कर देता है?",
    "options_en": ["Acidic salt", "Basic salt", "Neutral salt", "All"],
    "options_hi": ["अम्लीय लवण", "क्षारीय लवण", "उदासीन लवण", "सभी"],
    "answer_en": "Acidic salt",
    "answer_hi": "अम्लीय लवण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which process converts solid into gas?",
    "question_hi": "कौन सी प्रक्रिया ठोस को गैस में परिवर्तित करती है?",
    "options_en": ["Sublimation", "Evaporation", "Condensation", "Deposition"],
    "options_hi": ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "निक्षेपण"],
    "answer_en": "Sublimation",
    "answer_hi": "उर्ध्वपातन",
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