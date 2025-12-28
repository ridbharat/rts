const questions = [
  {
    "num": 1,
    "question_en": "Which bond is the strongest among the following?",
    "question_hi": "निम्न में से कौन सा बंध सबसे मजबूत है?",
    "options_en": ["C≡C", "C=C", "C–C", "H–H"],
    "options_hi": ["C≡C", "C=C", "C–C", "H–H"],
    "answer_en": "C≡C",
    "answer_hi": "C≡C",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 2,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "कौन सी गैस 'लाफिंग गैस' कहलाती है?",
    "options_en": ["N₂O", "NO₂", "CO₂", "SO₂"],
    "options_hi": ["N₂O", "NO₂", "CO₂", "SO₂"],
    "answer_en": "N₂O",
    "answer_hi": "N₂O",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 3,
    "question_en": "Which metal is stored under kerosene?",
    "question_hi": "कौन सी धातु को मिट्टी के तेल में रखा जाता है?",
    "options_en": ["Sodium", "Calcium", "Iron", "Copper"],
    "options_hi": ["सोडियम", "कैल्शियम", "लोहा", "तांबा"],
    "answer_en": "Sodium",
    "answer_hi": "सोडियम",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 4,
    "question_en": "pH of a neutral solution at 25°C is?",
    "question_hi": "25°C पर एक तटस्थ विलयन का pH कितना होता है?",
    "options_en": ["7", "1", "14", "0"],
    "options_hi": ["7", "1", "14", "0"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 5,
    "question_en": "Which of the following is a Lewis acid?",
    "question_hi": "निम्न में से कौन एक लुईस अम्ल है?",
    "options_en": ["BF₃", "NH₃", "H₂O", "OH⁻"],
    "options_hi": ["BF₃", "NH₃", "H₂O", "OH⁻"],
    "answer_en": "BF₃",
    "answer_hi": "BF₃",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which orbital has spherical shape?",
    "question_hi": "कौन सा ऑर्बिटल गोलाकार आकार का होता है?",
    "options_en": ["s-orbital", "p-orbital", "d-orbital", "f-orbital"],
    "options_hi": ["s-ऑर्बिटल", "p-ऑर्बिटल", "d-ऑर्बिटल", "f-ऑर्बिटल"],
    "answer_en": "s-orbital",
    "answer_hi": "s-ऑर्बिटल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 7,
    "question_en": "Which element has the highest electronegativity?",
    "question_hi": "किस तत्व की विद्युतऋणात्मकता सबसे अधिक होती है?",
    "options_en": ["Fluorine", "Oxygen", "Nitrogen", "Chlorine"],
    "options_hi": ["फ्लोरीन", "ऑक्सीजन", "नाइट्रोजन", "क्लोरीन"],
    "answer_en": "Fluorine",
    "answer_hi": "फ्लोरीन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 8,
    "question_en": "Which gas turns lime water milky?",
    "question_hi": "कौन सी गैस चूने के पानी को दूधिया बनाती है?",
    "options_en": ["CO₂", "NO₂", "SO₂", "H₂S"],
    "options_hi": ["CO₂", "NO₂", "SO₂", "H₂S"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 9,
    "question_en": "Which acid is present in ant sting?",
    "question_hi": "चींटी के डंक में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Methanoic acid", "Acetic acid", "Oxalic acid", "Citric acid"],
    "options_hi": ["मीथेनोइक अम्ल", "एसिटिक अम्ल", "ऑक्सैलिक अम्ल", "सिट्रिक अम्ल"],
    "answer_en": "Methanoic acid",
    "answer_hi": "मीथेनोइक अम्ल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 10,
    "question_en": "Which catalyst is used in the Haber process?",
    "question_hi": "हेबर प्रक्रिया में किस उत्प्रेरक का उपयोग किया जाता है?",
    "options_en": ["Iron", "Platinum", "Nickel", "Vanadium oxide"],
    "options_hi": ["लोहा", "प्लैटिनम", "निकल", "वैनाडियम ऑक्साइड"],
    "answer_en": "Iron",
    "answer_hi": "लोहा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Avogadro number is?",
    "question_hi": "एवोगैड्रो संख्या कितनी होती है?",
    "options_en": ["6.022×10²³", "3.14", "9.8", "1.6×10⁻¹⁹"],
    "options_hi": ["6.022×10²³", "3.14", "9.8", "1.6×10⁻¹⁹"],
    "answer_en": "6.022×10²³",
    "answer_hi": "6.022×10²³",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 12,
    "question_en": "Which molecule has a linear shape?",
    "question_hi": "कौन सा अणु रेखीय संरचना का होता है?",
    "options_en": ["CO₂", "NH₃", "H₂O", "SO₂"],
    "options_hi": ["CO₂", "NH₃", "H₂O", "SO₂"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 13,
    "question_en": "Which of the following is an extensive property?",
    "question_hi": "निम्न में से कौन एक व्यापक गुण है?",
    "options_en": ["Mass", "Temperature", "Density", "Boiling point"],
    "options_hi": ["द्रव्यमान", "तापमान", "घनत्व", "उबलने का बिंदु"],
    "answer_en": "Mass",
    "answer_hi": "द्रव्यमान",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 14,
    "question_en": "Which of the following is a noble gas?",
    "question_hi": "निम्न में से कौन सी एक निष्क्रिय गैस है?",
    "options_en": ["Argon", "Nitrogen", "Hydrogen", "Oxygen"],
    "options_hi": ["आर्गन", "नाइट्रोजन", "हाइड्रोजन", "ऑक्सीजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 15,
    "question_en": "Which oxide is amphoteric?",
    "question_hi": "निम्न में से कौन सा ऑक्साइड उभयधर्मी होता है?",
    "options_en": ["Al₂O₃", "CaO", "Na₂O", "CO₂"],
    "options_hi": ["Al₂O₃", "CaO", "Na₂O", "CO₂"],
    "answer_en": "Al₂O₃",
    "answer_hi": "Al₂O₃",
    "attempted": false,
    "selected": ""
  },
  
{
    "num": 11,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कक्ष तापमान पर द्रव होती है?",
    "options_en": ["Mercury", "Sodium", "Aluminium", "Potassium"],
    "options_hi": ["पारा", "सोडियम", "एल्युमिनियम", "पोटैशियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which gas turns lime water milky?",
    "question_hi": "कौन सी गैस चूना पानी को दूधिया बनाती है?",
    "options_en": ["CO2", "O2", "H2", "N2"],
    "options_hi": ["CO2", "O2", "H2", "N2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Bleaching powder is chemically known as:",
    "question_hi": "ब्लीचिंग पाउडर को रासायनिक रूप से क्या कहा जाता है?",
    "options_en": ["Calcium hypochlorite", "Calcium carbonate", "Calcium oxide", "Calcium chloride"],
    "options_hi": ["कैल्शियम हाइपोक्लोराइट", "कैल्शियम कार्बोनेट", "कैल्शियम ऑक्साइड", "कैल्शियम क्लोराइड"],
    "answer_en": "Calcium hypochlorite",
    "answer_hi": "कैल्शियम हाइपोक्लोराइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of the following is an alkaline earth metal?",
    "question_hi": "निम्न में से कौन एक क्षारीय मृदा धातु है?",
    "options_en": ["Magnesium", "Iron", "Copper", "Silver"],
    "options_hi": ["मैग्नीशियम", "लोहा", "ताँबा", "चांदी"],
    "answer_en": "Magnesium",
    "answer_hi": "मैग्नीशियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which acid is present in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Citric acid", "Acetic acid", "Lactic acid", "Formic acid"],
    "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "सिट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of the following is not an allotrope of carbon?",
    "question_hi": "निम्न में से कौन कार्बन का रूपांतर नहीं है?",
    "options_en": ["Graphite", "Diamond", "Fullerene", "Limestone"],
    "options_hi": ["ग्रेफाइट", "हीरा", "फुलरीन", "चूना पत्थर"],
    "answer_en": "Limestone",
    "answer_hi": "चूना पत्थर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the pH of pure water at 25°C?",
    "question_hi": "25°C पर शुद्ध जल का pH कितना होता है?",
    "options_en": ["5", "7", "9", "3"],
    "options_hi": ["5", "7", "9", "3"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which element is used in making pencil lead?",
    "question_hi": "पेंसिल की नोक बनाने में कौन सा तत्व उपयोग होता है?",
    "options_en": ["Graphite", "Lead", "Zinc", "Sulphur"],
    "options_hi": ["ग्रेफाइट", "सीसा", "जस्ता", "गंधक"],
    "answer_en": "Graphite",
    "answer_hi": "ग्रेफाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "हंसाने वाली गैस किसे कहते हैं?",
    "options_en": ["N2O", "NO2", "CO", "CO2"],
    "options_hi": ["N2O", "NO2", "CO", "CO2"],
    "answer_en": "N2O",
    "answer_hi": "N2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following is the hardest natural substance?",
    "question_hi": "निम्न में से सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    "options_en": ["Iron", "Diamond", "Quartz", "Graphite"],
    "options_hi": ["लोहा", "हीरा", "क्वार्ट्ज", "ग्रेफाइट"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which particle has no charge?",
    "question_hi": "किस कण पर कोई आवेश नहीं होता?",
    "options_en": ["Proton", "Electron", "Neutron", "Ion"],
    "options_hi": ["प्रोटॉन", "इलेक्ट्रॉन", "न्यूट्रॉन", "आयन"],
    "answer_en": "Neutron",
    "answer_hi": "न्यूट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which vitamin is also known as ascorbic acid?",
    "question_hi": "कौन सा विटामिन एस्कॉर्बिक अम्ल कहलाता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which metal reacts vigorously with water?",
    "question_hi": "कौन सी धातु पानी के साथ तीव्र प्रतिक्रिया करती है?",
    "options_en": ["Gold", "Silver", "Sodium", "Copper"],
    "options_hi": ["सोना", "चांदी", "सोडियम", "तांबा"],
    "answer_en": "Sodium",
    "answer_hi": "सोडियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of the following is a greenhouse gas?",
    "question_hi": "निम्न में से कौन एक ग्रीनहाउस गैस है?",
    "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is a noble metal?",
    "question_hi": "कौन एक महान धातु है?",
    "options_en": ["Iron", "Silver", "Sodium", "Magnesium"],
    "options_hi": ["लोहा", "चांदी", "सोडियम", "मैग्नीशियम"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Rust is chemically:",
    "question_hi": "जंग रासायनिक रूप से क्या है?",
    "options_en": ["Iron oxide", "Copper oxide", "Aluminium oxide", "Sodium oxide"],
    "options_hi": ["लौह ऑक्साइड", "तांबा ऑक्साइड", "एल्युमिनियम ऑक्साइड", "सोडियम ऑक्साइड"],
    "answer_en": "Iron oxide",
    "answer_hi": "लौह ऑक्साइड",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 27,
    "question_en": "The atomic number represents:",
    "question_hi": "परमाणु क्रमांक किसे दर्शाता है?",
    "options_en": ["Neutrons", "Electrons", "Protons", "Isotopes"],
    "options_hi": ["न्यूट्रॉन", "इलेक्ट्रॉन", "प्रोटॉन", "समस्थानिक"],
    "answer_en": "Protons",
    "answer_hi": "प्रोटॉन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 28,
    "question_en": "Which acid is known as the king of chemicals?",
    "question_hi": "कौन सा अम्ल रसायनों का राजा कहलाता है?",
    "options_en": ["HCl", "HNO3", "H2SO4", "H3PO4"],
    "options_hi": ["HCl", "HNO3", "H2SO4", "H3PO4"],
    "answer_en": "H2SO4",
    "answer_hi": "H2SO4",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 29,
    "question_en": "Which of the following is a base?",
    "question_hi": "निम्न में से कौन एक क्षार है?",
    "options_en": ["HCl", "NaOH", "H2SO4", "CH3COOH"],
    "options_hi": ["HCl", "NaOH", "H2SO4", "CH3COOH"],
    "answer_en": "NaOH",
    "answer_hi": "NaOH",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 30,
    "question_en": "Which chemical is known as washing soda?",
    "question_hi": "वॉशिंग सोडा किसे कहते हैं?",
    "options_en": ["NaHCO3", "Na2CO3·10H2O", "NaCl", "K2CO3"],
    "options_hi": ["NaHCO3", "Na2CO3·10H2O", "NaCl", "K2CO3"],
    "answer_en": "Na2CO3·10H2O",
    "answer_hi": "Na2CO3·10H2O",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which gas is used in soft drinks?",
    "question_hi": "सॉफ्ट ड्रिंक्स में कौन सी गैस उपयोग की जाती है?",
    "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हीलियम"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 32,
    "question_en": "Which of the following is an organic compound?",
    "question_hi": "निम्न में से कौन एक कार्बनिक यौगिक है?",
    "options_en": ["NaCl", "H2O", "C6H12O6", "KCl"],
    "options_hi": ["NaCl", "H2O", "C6H12O6", "KCl"],
    "answer_en": "C6H12O6",
    "answer_hi": "C6H12O6",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 33,
    "question_en": "Which metal is used in thermometers?",
    "question_hi": "थर्मामीटर में किस धातु का उपयोग होता है?",
    "options_en": ["Mercury", "Lead", "Copper", "Iron"],
    "options_hi": ["पारा", "सीसा", "तांबा", "लोहा"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 34,
    "question_en": "Which element is essential for bones and teeth?",
    "question_hi": "हड्डियों और दाँतों के लिए कौन सा तत्व आवश्यक है?",
    "options_en": ["Iron", "Phosphorus", "Copper", "Magnesium"],
    "options_hi": ["लोहा", "फॉस्फोरस", "तांबा", "मैग्नीशियम"],
    "answer_en": "Phosphorus",
    "answer_hi": "फॉस्फोरस",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 35,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में कौन सी गैस उपयोग होती है?",
    "options_en": ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
    "options_hi": ["ऑक्सीजन", "हीलियम", "हाइड्रोजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which of the following is a liquid non-metal?",
    "question_hi": "निम्न में से कौन सा एक द्रव अधातु है?",
    "options_en": ["Bromine", "Iodine", "Sulphur", "Carbon"],
    "options_hi": ["ब्रोमीन", "आयोडीन", "गंधक", "कार्बन"],
    "answer_en": "Bromine",
    "answer_hi": "ब्रोमीन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 37,
    "question_en": "Which metal is used to make coins?",
    "question_hi": "सिक्के बनाने में किस धातु का उपयोग होता है?",
    "options_en": ["Copper", "Mercury", "Sodium", "Potassium"],
    "options_hi": ["तांबा", "पारा", "सोडियम", "पोटैशियम"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 38,
    "question_en": "Which element is used for water purification?",
    "question_hi": "जल शोधन में किस तत्व का उपयोग होता है?",
    "options_en": ["Fluorine", "Chlorine", "Nitrogen", "Hydrogen"],
    "options_hi": ["फ्लोरीन", "क्लोरीन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Chlorine",
    "answer_hi": "क्लोरीन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 39,
    "question_en": "Which of the following is a strong acid?",
    "question_hi": "निम्न में से कौन एक प्रबल अम्ल है?",
    "options_en": ["HCl", "CH3COOH", "H2CO3", "H3PO4"],
    "options_hi": ["HCl", "CH3COOH", "H2CO3", "H3PO4"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 40,
    "question_en": "Which chemical is used to preserve food?",
    "question_hi": "खाद्य पदार्थों को संरक्षित करने के लिए किस रसायन का उपयोग किया जाता है?",
    "options_en": ["Salt", "Sugar", "Sodium benzoate", "Vinegar"],
    "options_hi": ["नमक", "चीनी", "सोडियम बेंजोएट", "सिरका"],
    "answer_en": "Sodium benzoate",
    "answer_hi": "सोडियम बेंजोएट",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which metal is used in making batteries?",
    "question_hi": "बैटरियों में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Zinc", "Gold", "Silver", "Iron"],
    "options_hi": ["जस्ता", "सोना", "चांदी", "लोहा"],
    "answer_en": "Zinc",
    "answer_hi": "जस्ता",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 42,
    "question_en": "Which gas is used for welding?",
    "question_hi": "वेल्डिंग में कौन सी गैस उपयोग होती है?",
    "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Helium"],
    "options_hi": ["ऑक्सीजन", "एसीटिलीन", "नाइट्रोजन", "हीलियम"],
    "answer_en": "Acetylene",
    "answer_hi": "एसीटिलीन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 43,
    "question_en": "The chemical used in cold packs is:",
    "question_hi": "कोल्ड पैक में किस रसायन का उपयोग होता है?",
    "options_en": ["Ammonium nitrate", "Calcium carbonate", "Copper sulphate", "Magnesium chloride"],
    "options_hi": ["अमोनियम नाइट्रेट", "कैल्शियम कार्बोनेट", "कॉपर सल्फेट", "मैग्नीशियम क्लोराइड"],
    "answer_en": "Ammonium nitrate",
    "answer_hi": "अमोनियम नाइट्रेट",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 44,
    "question_en": "Which acid is found in ant sting?",
    "question_hi": "चींटी के डंक में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Formic acid", "Citric acid", "Sulphuric acid", "Nitric acid"],
    "options_hi": ["फॉर्मिक अम्ल", "सिट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
    "answer_en": "Formic acid",
    "answer_hi": "फॉर्मिक अम्ल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 45,
    "question_en": "Which gas is responsible for acid rain?",
    "question_hi": "अम्ल वर्षा के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["CO", "SO2", "N2", "H2"],
    "options_hi": ["CO", "SO2", "N2", "H2"],
    "answer_en": "SO2",
    "answer_hi": "SO2",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which is a radioactive element?",
    "question_hi": "कौन सा तत्व रेडियोधर्मी है?",
    "options_en": ["Uranium", "Calcium", "Magnesium", "Iron"],
    "options_hi": ["यूरेनियम", "कैल्शियम", "मैग्नीशियम", "लोहा"],
    "answer_en": "Uranium",
    "answer_hi": "यूरेनियम",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 47,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "आग बुझाने वाले यंत्रों में कौन सी गैस उपयोग की जाती है?",
    "options_en": ["O2", "H2", "CO2", "N2"],
    "options_hi": ["O2", "H2", "CO2", "N2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 48,
    "question_en": "Which of the following is a weak acid?",
    "question_hi": "निम्न में से कौन सा एक कमजोर अम्ल है?",
    "options_en": ["HCl", "HNO3", "H2SO4", "CH3COOH"],
    "options_hi": ["HCl", "HNO3", "H2SO4", "CH3COOH"],
    "answer_en": "CH3COOH",
    "answer_hi": "CH3COOH",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 49,
    "question_en": "Which indicator turns pink in basic solution?",
    "question_hi": "कौन सा सूचक क्षारीय विलयन में गुलाबी हो जाता है?",
    "options_en": ["Methyl orange", "Litmus", "Phenolphthalein", "Turmeric"],
    "options_hi": ["मेथिल ऑरेंज", "लिटमस", "फिनॉल्फ्थलीन", "हल्दी"],
    "answer_en": "Phenolphthalein",
    "answer_hi": "फिनॉल्फ्थलीन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 50,
    "question_en": "Which gas is known as sewer gas?",
    "question_hi": "कौन सी गैस सीवर गैस के नाम से जानी जाती है?",
    "options_en": ["Hydrogen sulphide", "Methane", "Nitrogen", "Oxygen"],
    "options_hi": ["हाइड्रोजन सल्फाइड", "मीथेन", "नाइट्रोजन", "ऑक्सीजन"],
    "answer_en": "Hydrogen sulphide",
    "answer_hi": "हाइड्रोजन सल्फाइड",
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