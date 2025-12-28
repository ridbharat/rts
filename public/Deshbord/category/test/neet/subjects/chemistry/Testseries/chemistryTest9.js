
const questions =[
  {
    "num": 1,
    "question_en": "Which element has the highest atomic number in Period 2?",
    "question_hi": "आवर्त 2 में किस तत्व का परमाणु क्रमांक सबसे अधिक है?",
    "options_en": ["Neon", "Fluorine", "Oxygen", "Carbon"],
    "options_hi": ["नियॉन", "फ्लोरीन", "ऑक्सीजन", "कार्बन"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which acid is present in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Citric acid", "Acetic acid", "Sulfuric acid", "Lactic acid"],
    "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "लैक्टिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "सिट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which gas is released when HCl reacts with Zn?",
    "question_hi": "HCl के Zn के साथ अभिक्रिया करने पर कौन सी गैस निकलती है?",
    "options_en": ["Hydrogen", "Oxygen", "Chlorine", "Nitrogen"],
    "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "क्लोरीन", "नाइट्रोजन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the formula of molarity?",
    "question_hi": "मोलरता का सूत्र क्या है?",
    "options_en": ["M = moles/volume(L)", "M = mass/volume", "M = moles×volume", "M = mass×moles"],
    "options_hi": ["M = मोल/आयतन(L)", "M = द्रव्यमान/आयतन", "M = मोल×आयतन", "M = द्रव्यमान×मोल"],
    "answer_en": "M = moles/volume(L)",
    "answer_hi": "M = मोल/आयतन(L)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which element is liquid at room temperature?",
    "question_hi": "कौन सा तत्व कमरे के तापमान पर द्रव होता है?",
    "options_en": ["Mercury", "Bromine", "Chlorine", "Francium"],
    "options_hi": ["पारा", "ब्रोमीन", "क्लोरीन", "फ्रान्सियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which halogen is most reactive?",
    "question_hi": "कौन सा हैलोजन सबसे अधिक अभिक्रियाशील है?",
    "options_en": ["Fluorine", "Chlorine", "Bromine", "Iodine"],
    "options_hi": ["फ्लोरीन", "क्लोरीन", "ब्रोमीन", "आयोडीन"],
    "answer_en": "Fluorine",
    "answer_hi": "फ्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the common name of Na2CO3?",
    "question_hi": "Na2CO3 का सामान्य नाम क्या है?",
    "options_en": ["Soda ash", "Baking soda", "Caustic soda", "Washing soda"],
    "options_hi": ["सोडा ऐश", "बेकिंग सोडा", "कास्टिक सोडा", "धावन सोडा"],
    "answer_en": "Soda ash",
    "answer_hi": "सोडा ऐश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is amphiprotic?",
    "question_hi": "कौन सा उभयप्रोटिक है?",
    "options_en": ["HCO3−", "HCl", "NaOH", "NH3"],
    "options_hi": ["HCO3−", "HCl", "NaOH", "NH3"],
    "answer_en": "HCO3−",
    "answer_hi": "HCO3−",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "In Bohr model, where are electrons located?",
    "question_hi": "बोहर मॉडल में इलेक्ट्रॉन किस कक्षा में होते हैं?",
    "options_en": ["Stationary orbit", "Random", "Spiral", "Linear"],
    "options_hi": ["स्थिर कक्षा", "यादृच्छिक", "सर्पिल", "रैखिक"],
    "answer_en": "Stationary orbit",
    "answer_hi": "स्थिर कक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What type of bond is in H2O?",
    "question_hi": "H2O में किस प्रकार का बंधन होता है?",
    "options_en": ["Covalent", "Ionic", "Hydrogen", "Metallic"],
    "options_hi": ["सहसंयोजक", "आयनिक", "हाइड्रोजन", "धात्विक"],
    "answer_en": "Covalent",
    "answer_hi": "सहसंयोजक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is a reducing agent?",
    "question_hi": "कौन सा अपचायक है?",
    "options_en": ["Na", "Cl2", "O2", "F2"],
    "options_hi": ["Na", "Cl2", "O2", "F2"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is an oxidizing agent?",
    "question_hi": "कौन सा ऑक्सीकारक है?",
    "options_en": ["Cl2", "H2", "Na", "Mg"],
    "options_hi": ["Cl2", "H2", "Na", "Mg"],
    "answer_en": "Cl2",
    "answer_hi": "Cl2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the meaning of empirical formula?",
    "question_hi": "मूलानुपाती सूत्र का क्या अर्थ है?",
    "options_en": ["Simplest ratio of atoms", "Exact number of atoms", "Molecular weight", "Mass ratio"],
    "options_hi": ["परमाणुओं का सरलतम अनुपात", "परमाणुओं की सटीक संख्या", "आणविक भार", "द्रव्यमान अनुपात"],
    "answer_en": "Simplest ratio of atoms",
    "answer_hi": "परमाणुओं का सरलतम अनुपात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which gas causes greenhouse effect?",
    "question_hi": "कौन सी गैस ग्रीनहाउस प्रभाव का कारण बनती है?",
    "options_en": ["CO2", "O2", "N2", "H2"],
    "options_hi": ["CO2", "O2", "N2", "H2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which alkali metal is most reactive?",
    "question_hi": "कौन सी क्षार धातु सबसे अधिक अभिक्रियाशील है?",
    "options_en": ["Francium", "Lithium", "Sodium", "Potassium"],
    "options_hi": ["फ्रान्सियम", "लिथियम", "सोडियम", "पोटैशियम"],
    "answer_en": "Francium",
    "answer_hi": "फ्रान्सियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Between which elements does covalent bond form?",
    "question_hi": "सहसंयोजक बंधन किनके बीच होती है?",
    "options_en": ["Two non-metals", "Metal + Non-metal", "Two metals", "Metal + Metalloid"],
    "options_hi": ["दो अधातु", "धातु + अधातु", "दो धातु", "धातु + उपधातु"],
    "answer_en": "Two non-metals",
    "answer_hi": "दो अधातु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is produced when NH4Cl is heated?",
    "question_hi": "NH4Cl को गर्म करने पर क्या उत्पन्न होता है?",
    "options_en": ["NH3 + HCl", "N2 + H2", "H2 + Cl2", "N2 + Cl2"],
    "options_hi": ["NH3 + HCl", "N2 + H2", "H2 + Cl2", "N2 + Cl2"],
    "answer_en": "NH3 + HCl",
    "answer_hi": "NH3 + HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is an example of electrolyte?",
    "question_hi": "विद्युत अपघट्य का उदाहरण क्या है?",
    "options_en": ["NaCl solution", "Glucose solution", "Ethanol", "Benzene"],
    "options_hi": ["NaCl विलयन", "ग्लूकोज विलयन", "एथनॉल", "बेंजीन"],
    "answer_en": "NaCl solution",
    "answer_hi": "NaCl विलयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which element is most metallic?",
    "question_hi": "कौन सा तत्व सबसे अधिक धात्विक है?",
    "options_en": ["Francium", "Potassium", "Calcium", "Magnesium"],
    "options_hi": ["फ्रान्सियम", "पोटैशियम", "कैल्शियम", "मैग्नीशियम"],
    "answer_en": "Francium",
    "answer_hi": "फ्रान्सियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which gas is used in dry ice?",
    "question_hi": "ड्राई आइस में कौन सी गैस प्रयोग होती है?",
    "options_en": ["CO2", "O2", "N2", "H2"],
    "options_hi": ["CO2", "O2", "N2", "H2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which is a strong electrolyte?",
    "question_hi": "कौन सा प्रबल विद्युत अपघट्य है?",
    "options_en": ["HCl", "CH3COOH", "H2O", "NH3"],
    "options_hi": ["HCl", "CH3COOH", "H2O", "NH3"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which is a weak acid?",
    "question_hi": "कौन सा दुर्बल अम्ल है?",
    "options_en": ["CH3COOH", "HCl", "H2SO4", "HNO3"],
    "options_hi": ["CH3COOH", "HCl", "H2SO4", "HNO3"],
    "answer_en": "CH3COOH",
    "answer_hi": "CH3COOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which element has maximum electron affinity?",
    "question_hi": "किस तत्व की इलेक्ट्रॉन बंधुता सबसे अधिक होती है?",
    "options_en": ["Chlorine", "Fluorine", "Oxygen", "Bromine"],
    "options_hi": ["क्लोरीन", "फ्लोरीन", "ऑक्सीजन", "ब्रोमीन"],
    "answer_en": "Chlorine",
    "answer_hi": "क्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is an assumption of kinetic molecular theory?",
    "question_hi": "गतिज आणविक सिद्धांत की क्या मान्यता है?",
    "options_en": ["Gas particles move randomly", "Particles are static", "Particles attract strongly", "Particles are fixed"],
    "options_hi": ["गैस कण यादृच्छिक गति करते हैं", "कण स्थिर होते हैं", "कण प्रबलता से आकर्षित करते हैं", "कण स्थिर होते हैं"],
    "answer_en": "Gas particles move randomly",
    "answer_hi": "गैस कण यादृच्छिक गति करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which metal reacts with cold water?",
    "question_hi": "कौन सी धातु ठंडे पानी के साथ अभिक्रिया करती है?",
    "options_en": ["Sodium", "Potassium", "Calcium", "Iron"],
    "options_hi": ["सोडियम", "पोटैशियम", "कैल्शियम", "लोहा"],
    "answer_en": "Sodium",
    "answer_hi": "सोडियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is a polar molecule?",
    "question_hi": "कौन सा ध्रुवीय अणु है?",
    "options_en": ["H2O", "CO2", "O2", "N2"],
    "options_hi": ["H2O", "CO2", "O2", "N2"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which acid reacts with metal carbonate to release CO2?",
    "question_hi": "कौन सा अम्ल धातु कार्बोनेट के साथ अभिक्रिया कर CO2 मुक्त करता है?",
    "options_en": ["HCl", "H2O", "NH3", "NaOH"],
    "options_hi": ["HCl", "H2O", "NH3", "NaOH"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is a Lewis acid?",
    "question_hi": "कौन सा लुईस अम्ल है?",
    "options_en": ["BF3", "NH3", "H2O", "CH4"],
    "options_hi": ["BF3", "NH3", "H2O", "CH4"],
    "answer_en": "BF3",
    "answer_hi": "BF3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the molecular formula of methane?",
    "question_hi": "मीथेन का आणविक सूत्र क्या है?",
    "options_en": ["CH4", "C2H6", "C3H8", "C4H10"],
    "options_hi": ["CH4", "C2H6", "C3H8", "C4H10"],
    "answer_en": "CH4",
    "answer_hi": "CH4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which solution is basic?",
    "question_hi": "कौन सा विलयन क्षारीय है?",
    "options_en": ["NaOH", "HCl", "H2SO4", "NH4Cl"],
    "options_hi": ["NaOH", "HCl", "H2SO4", "NH4Cl"],
    "answer_en": "NaOH",
    "answer_hi": "NaOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which element is a metalloid?",
    "question_hi": "कौन सा तत्व उपधातु है?",
    "options_en": ["Boron", "Sodium", "Calcium", "Aluminium"],
    "options_hi": ["बोरॉन", "सोडियम", "कैल्शियम", "एल्युमिनियम"],
    "answer_en": "Boron",
    "answer_hi": "बोरॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which reaction absorbs heat?",
    "question_hi": "कौन सी अभिक्रिया ऊष्मा अवशोषित करती है?",
    "options_en": ["Endothermic", "Exothermic", "Neutralization", "Precipitation"],
    "options_hi": ["ऊष्माशोषी", "ऊष्माक्षेपी", "उदासीनीकरण", "अवक्षेपण"],
    "answer_en": "Endothermic",
    "answer_hi": "ऊष्माशोषी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which reaction releases heat?",
    "question_hi": "कौन सी अभिक्रिया ऊष्मा मुक्त करती है?",
    "options_en": ["Exothermic", "Endothermic", "Dissociation", "Decomposition"],
    "options_hi": ["ऊष्माक्षेपी", "ऊष्माशोषी", "वियोजन", "विघटन"],
    "answer_en": "Exothermic",
    "answer_hi": "ऊष्माक्षेपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which compound is ionic?",
    "question_hi": "कौन सा यौगिक आयनिक है?",
    "options_en": ["NaCl", "CH4", "H2O", "NH3"],
    "options_hi": ["NaCl", "CH4", "H2O", "NH3"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which molecule shows hydrogen bonding?",
    "question_hi": "कौन सा अणु हाइड्रोजन बंधन दर्शाता है?",
    "options_en": ["H2O", "CO2", "CH4", "O2"],
    "options_hi": ["H2O", "CO2", "CH4", "O2"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which element is lightest?",
    "question_hi": "कौन सा तत्व सबसे हल्का है?",
    "options_en": ["Hydrogen", "Helium", "Lithium", "Beryllium"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "लिथियम", "बेरिलियम"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Acetic acid", "HCl", "Citric acid", "H2SO4"],
    "options_hi": ["एसिटिक अम्ल", "HCl", "सिट्रिक अम्ल", "H2SO4"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
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
    "num": 39,
    "question_en": "Which is an alkane?",
    "question_hi": "कौन सा ऐल्केन है?",
    "options_en": ["CH4", "C2H4", "C2H2", "CH3OH"],
    "options_hi": ["CH4", "C2H4", "C2H2", "CH3OH"],
    "answer_en": "CH4",
    "answer_hi": "CH4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is an alcohol?",
    "question_hi": "कौन सा ऐल्कोहॉल है?",
    "options_en": ["CH3OH", "CH4", "CO2", "C2H4"],
    "options_hi": ["CH3OH", "CH4", "CO2", "C2H4"],
    "answer_en": "CH3OH",
    "answer_hi": "CH3OH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which compound is a neutral salt?",
    "question_hi": "कौन सा यौगिक उदासीन लवण है?",
    "options_en": ["NaCl", "Na2CO3", "NH4Cl", "K2SO4"],
    "options_hi": ["NaCl", "Na2CO3", "NH4Cl", "K2SO4"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which element has the lowest electronegativity?",
    "question_hi": "किस तत्व की विद्युत ऋणात्मकता सबसे कम होती है?",
    "options_en": ["Francium", "Cesium", "Sodium", "Potassium"],
    "options_hi": ["फ्रान्सियम", "सीज़ियम", "सोडियम", "पोटैशियम"],
    "answer_en": "Francium",
    "answer_hi": "फ्रान्सियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which halide is most soluble in water?",
    "question_hi": "कौन सा हैलाइड जल में सबसे अधिक घुलनशील है?",
    "options_en": ["NaF", "NaCl", "NaBr", "NaI"],
    "options_hi": ["NaF", "NaCl", "NaBr", "NaI"],
    "answer_en": "NaF",
    "answer_hi": "NaF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which gas is obtained in lab from heating KClO3?",
    "question_hi": "KClO3 को गर्म करने से प्रयोगशाला में कौन सी गैस प्राप्त होती है?",
    "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "CO2"],
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "CO2"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which element is most abundant in Earth's crust?",
    "question_hi": "पृथ्वी की पपड़ी में कौन सा तत्व सबसे अधिक मात्रा में पाया जाता है?",
    "options_en": ["Oxygen", "Silicon", "Aluminium", "Iron"],
    "options_hi": ["ऑक्सीजन", "सिलिकॉन", "एल्युमिनियम", "लोहा"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which polymer is natural?",
    "question_hi": "कौन सा बहुलक प्राकृतिक है?",
    "options_en": ["Rubber", "PVC", "Nylon", "Polyethylene"],
    "options_hi": ["रबर", "PVC", "नायलॉन", "पॉलीइथिलीन"],
    "answer_en": "Rubber",
    "answer_hi": "रबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which is a synthetic polymer?",
    "question_hi": "कौन सा संश्लेषित बहुलक है?",
    "options_en": ["Nylon", "Cellulose", "Protein", "Starch"],
    "options_hi": ["नायलॉन", "सेलुलोज", "प्रोटीन", "स्टार्च"],
    "answer_en": "Nylon",
    "answer_hi": "नायलॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which gas is collected by downward displacement of water?",
    "question_hi": "कौन सी गैस जल के अधो विस्थापन द्वारा एकत्र की जाती है?",
    "options_en": ["H2", "CO2", "O2", "Cl2"],
    "options_hi": ["H2", "CO2", "O2", "Cl2"],
    "answer_en": "H2",
    "answer_hi": "H2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which acid is monoprotic?",
    "question_hi": "कौन सा अम्ल एकप्रोटॉनिक है?",
    "options_en": ["HCl", "H2SO4", "H3PO4", "H2CO3"],
    "options_hi": ["HCl", "H2SO4", "H3PO4", "H2CO3"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which element has the highest melting point?",
    "question_hi": "किस तत्व का गलनांक सबसे अधिक होता है?",
    "options_en": ["Carbon", "Iron", "Tungsten", "Copper"],
    "options_hi": ["कार्बन", "लोहा", "टंगस्टन", "तांबा"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
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