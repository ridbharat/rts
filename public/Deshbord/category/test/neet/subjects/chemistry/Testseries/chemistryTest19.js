const questions = [
  {
    num: 1,
    question_en: "Which element has the highest ionization enthalpy?",
    question_hi: "किस तत्व की आयनीकरण एंथैल्पी सबसे अधिक होती है?",
    options_en: ["Helium", "Neon", "Fluorine", "Oxygen"],
    options_hi: ["हीलियम", "नियॉन", "फ्लोरीन", "ऑक्सीजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "Which element has the largest atomic radius?",
    question_hi: "किस तत्व का परमाणु त्रिज्या सबसे बड़ा होता है?",
    options_en: ["Cesium", "Potassium", "Sodium", "Rubidium"],
    options_hi: ["सीज़ियम", "पोटैशियम", "सोडियम", "रूबिडियम"],
    answer_en: "Cesium",
    answer_hi: "सीज़ियम",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "Which bond is the weakest?",
    question_hi: "कौन सा बंधन सबसे कमजोर होता है?",
    options_en: ["Van der Waals", "Ionic", "Covalent", "Metallic"],
    options_hi: ["वैन डर वॉल्स", "आयनिक", "सहसंयोजक", "धात्विक"],
    answer_en: "Van der Waals",
    answer_hi: "वैन डर वॉल्स",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "Which molecule is linear?",
    question_hi: "कौन सा अणु रैखिक होता है?",
    options_en: ["CO2", "H2O", "NH3", "SO2"],
    options_hi: ["CO2", "H2O", "NH3", "SO2"],
    answer_en: "CO2",
    answer_hi: "CO2",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "Which is a polar molecule?",
    question_hi: "इनमें से कौन सा ध्रुवीय अणु है?",
    options_en: ["H2O", "CO2", "BF3", "CCl4"],
    options_hi: ["H2O", "CO2", "BF3", "CCl4"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "Which gas is known as laughing gas?",
    question_hi: "कौन सी गैस को 'लाफिंग गैस' कहा जाता है?",
    options_en: ["N2O", "NO", "NO2", "N2"],
    options_hi: ["N2O", "NO", "NO2", "N2"],
    answer_en: "N2O",
    answer_hi: "N2O",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "Which form of carbon is the hardest?",
    question_hi: "कार्बन का सबसे कठोर रूप कौन सा है?",
    options_en: ["Diamond", "Graphite", "Fullerene", "Charcoal"],
    options_hi: ["हीरा", "ग्रेफाइट", "फुलरीन", "चारकोल"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which of the following is an alloy?",
    question_hi: "निम्न में से कौन एक मिश्रधातु है?",
    options_en: ["Brass", "Copper", "Aluminium", "Iron"],
    options_hi: ["पीतल", "तांबा", "एल्युमिनियम", "लोहा"],
    answer_en: "Brass",
    answer_hi: "पीतल",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "pH of neutral solution is?",
    question_hi: "तटस्थ विलयन का pH कितना होता है?",
    options_en: ["7", "1", "14", "3"],
    options_hi: ["7", "1", "14", "3"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "Which gas is used in balloons?",
    question_hi: "गुब्बारों में कौन सी गैस उपयोग की जाती है?",
    options_en: ["Helium", "Nitrogen", "Oxygen", "Hydrogen"],
    options_hi: ["हीलियम", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which element shows allotropy?",
    question_hi: "कौन सा तत्व अलोट्रॉपी दर्शाता है?",
    options_en: ["Carbon", "Argon", "Sodium", "Magnesium"],
    options_hi: ["कार्बन", "आर्गन", "सोडियम", "मैग्नीशियम"],
    answer_en: "Carbon",
    answer_hi: "कार्बन",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which acid is found in vinegar?",
    question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
    options_en: ["Acetic acid", "Formic acid", "Oxalic acid", "Tartaric acid"],
    options_hi: ["ऐसिटिक अम्ल", "फॉर्मिक अम्ल", "ऑक्सैलिक अम्ल", "टार्टरिक अम्ल"],
    answer_en: "Acetic acid",
    answer_hi: "ऐसिटिक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "Which metal reacts with cold water?",
    question_hi: "कौन सी धातु ठंडे पानी से अभिक्रिया करती है?",
    options_en: ["Sodium", "Magnesium", "Copper", "Silver"],
    options_hi: ["सोडियम", "मैग्नीशियम", "तांबा", "चांदी"],
    answer_en: "Sodium",
    answer_hi: "सोडियम",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
    options_en: ["Mercury", "Sodium", "Calcium", "Aluminium"],
    options_hi: ["पारा", "सोडियम", "कैल्शियम", "एल्युमिनियम"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "Which oxide is amphoteric?",
    question_hi: "कौन सा ऑक्साइड अम्फोटेरिक है?",
    options_en: ["Al2O3", "Na2O", "MgO", "CO2"],
    options_hi: ["Al2O3", "Na2O", "MgO", "CO2"],
    answer_en: "Al2O3",
    answer_hi: "Al2O3",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which gas turns lime water milky?",
    question_hi: "कौन सी गैस चूना पानी को दूधिया बनाती है?",
    options_en: ["CO2", "SO2", "H2S", "NO2"],
    options_hi: ["CO2", "SO2", "H2S", "NO2"],
    answer_en: "CO2",
    answer_hi: "CO2",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "Which compound is known as quicklime?",
    question_hi: "कौन यौगिक क्विक्लाइम के नाम से जाना जाता है?",
    options_en: ["CaO", "CaCO3", "Ca(OH)2", "CaCl2"],
    options_hi: ["CaO", "CaCO3", "Ca(OH)2", "CaCl2"],
    answer_en: "CaO",
    answer_hi: "CaO",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "Which is the strongest acid?",
    question_hi: "कौन सा अम्ल सबसे प्रबल है?",
    options_en: ["HI", "HCl", "HBr", "H2SO4"],
    options_hi: ["HI", "HCl", "HBr", "H2SO4"],
    answer_en: "HI",
    answer_hi: "HI",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "Which gas has the lowest density?",
    question_hi: "किस गैस का घनत्व सबसे कम होता है?",
    options_en: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
    options_hi: ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"],
    answer_en: "Hydrogen",
    answer_hi: "हाइड्रोजन",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which bond is present in O2?",
    question_hi: "O2 में कौन सा बंधन उपस्थित होता है?",
    options_en: ["Double bond", "Single bond", "Triple bond", "Ionic bond"],
    options_hi: ["डबल बंध", "सिंगल बंध", "ट्रिपल बंध", "आयनिक बंध"],
    answer_en: "Double bond",
    answer_hi: "डबल बंध",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which acid is present in ant sting?",
    question_hi: "चींटी के डंक में कौन सा अम्ल होता है?",
    options_en: ["Methanoic acid", "Acetic acid", "Citric acid", "Sulfuric acid"],
    options_hi: ["मीथेनोइक अम्ल", "ऐसिटिक अम्ल", "सिट्रिक अम्ल", "सल्फ्यूरिक अम्ल"],
    answer_en: "Methanoic acid",
    answer_hi: "मीथेनोइक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "Which ion is responsible for hardness of water?",
    question_hi: "कौन से आयन पानी की कठोरता के लिए जिम्मेदार हैं?",
    options_en: ["Ca2+ and Mg2+", "Na+", "K+", "Cl−"],
    options_hi: ["Ca2+ और Mg2+", "Na+", "K+", "Cl−"],
    answer_en: "Ca2+ and Mg2+",
    answer_hi: "Ca2+ और Mg2+",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "Which gas is used for welding?",
    question_hi: "वेल्डिंग में कौन सी गैस उपयोग की जाती है?",
    options_en: ["Acetylene", "Oxygen", "Chlorine", "Nitrogen"],
    options_hi: ["ऐसीटिलीन", "ऑक्सीजन", "क्लोरीन", "नाइट्रोजन"],
    answer_en: "Acetylene",
    answer_hi: "ऐसीटिलीन",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "Which element forms colored compounds?",
    question_hi: "कौन सा तत्व रंगीन यौगिक बनाता है?",
    options_en: ["Transition metals", "Alkali metals", "Alkaline earth metals", "Noble gases"],
    options_hi: ["संक्रमण धातुएं", "क्षारीय धातुएं", "क्षारीय पृथ्वी धातुएं", "निष्क्रिय गैसें"],
    answer_en: "Transition metals",
    answer_hi: "संक्रमण धातुएं",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "Which salt is used in plaster of Paris?",
    question_hi: "प्लास्टर ऑफ पेरिस में कौन सा नमक उपयोग होता है?",
    options_en: ["CaSO4·½H2O", "CaCO3", "Na2SO4", "MgSO4"],
    options_hi: ["CaSO4·½H2O", "CaCO3", "Na2SO4", "MgSO4"],
    answer_en: "CaSO4·½H2O",
    answer_hi: "CaSO4·½H2O",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which gas causes acid rain?",
    question_hi: "कौन सी गैस अम्लीय वर्षा का कारण बनती है?",
    options_en: ["SO2", "N2", "CO", "O2"],
    options_hi: ["SO2", "N2", "CO", "O2"],
    answer_en: "SO2",
    answer_hi: "SO2",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "Which is the purest form of carbon?",
    question_hi: "कार्बन का सबसे शुद्ध रूप कौन सा है?",
    options_en: ["Diamond", "Coke", "Coal", "Charcoal"],
    options_hi: ["हीरा", "कोक", "कोयला", "चारकोल"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "Which of the following is a noble gas?",
    question_hi: "निम्न में से कौन सी निष्क्रिय गैस है?",
    options_en: ["Argon", "Nitrogen", "Oxygen", "Chlorine"],
    options_hi: ["आर्गन", "नाइट्रोजन", "ऑक्सीजन", "क्लोरीन"],
    answer_en: "Argon",
    answer_hi: "आर्गन",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "Which solution gives blue color with copper sulfate?",
    question_hi: "कौन सा विलयन कॉपर सल्फेट के साथ नीला रंग देता है?",
    options_en: ["Ammonia", "HCl", "NaOH", "Ethanol"],
    options_hi: ["अमोनिया", "HCl", "NaOH", "एथेनॉल"],
    answer_en: "Ammonia",
    answer_hi: "अमोनिया",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "Which element is used in pencils?",
    question_hi: "पेंसिल में कौन सा तत्व उपयोग होता है?",
    options_en: ["Graphite", "Diamond", "Coal", "Coke"],
    options_hi: ["ग्रेफाइट", "हीरा", "कोयला", "कोक"],
    answer_en: "Graphite",
    answer_hi: "ग्रेफाइट",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which vitamin contains cobalt?",
    question_hi: "कौन से विटामिन में कोबाल्ट पाया जाता है?",
    options_en: ["Vitamin B12", "Vitamin C", "Vitamin A", "Vitamin D"],
    options_hi: ["विटामिन B12", "विटामिन C", "विटामिन A", "विटामिन D"],
    answer_en: "Vitamin B12",
    answer_hi: "विटामिन B12",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "Which ion gives green flame?",
    question_hi: "कौन सा आयन हरी लौ देता है?",
    options_en: ["Barium", "Sodium", "Potassium", "Copper"],
    options_hi: ["बेरियम", "सोडियम", "पोटैशियम", "तांबा"],
    answer_en: "Barium",
    answer_hi: "बेरियम",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "Which compound is used to soften hard water?",
    question_hi: "कठोर पानी को मुलायम बनाने के लिए किस यौगिक का उपयोग किया जाता है?",
    options_en: ["Washing soda", "Baking soda", "Bleaching powder", "Lime"],
    options_hi: ["वॉशिंग सोडा", "बेकिंग सोडा", "ब्लीचिंग पाउडर", "चूना"],
    answer_en: "Washing soda",
    answer_hi: "वॉशिंग सोडा",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "Which element is called king of chemicals?",
    question_hi: "कौन सा रसायन 'केमिकल्स का राजा' कहलाता है?",
    options_en: ["Sulfuric acid", "Nitric acid", "HCl", "Phosphoric acid"],
    options_hi: ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "HCl", "फॉस्फोरिक अम्ल"],
    answer_en: "Sulfuric acid",
    answer_hi: "सल्फ्यूरिक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "अग्निशामक यंत्रों में कौन सी गैस प्रयोग की जाती है?",
    options_en: ["CO2", "O2", "H2", "N2"],
    options_hi: ["CO2", "O2", "H2", "N2"],
    answer_en: "CO2",
    answer_hi: "CO2",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which metal does not react with water?",
    question_hi: "कौन सी धातु पानी के साथ अभिक्रिया नहीं करती?",
    options_en: ["Copper", "Sodium", "Calcium", "Potassium"],
    options_hi: ["तांबा", "सोडियम", "कैल्शियम", "पोटैशियम"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "Which reaction is endothermic?",
    question_hi: "कौन सी अभिक्रिया उष्माशोषी है?",
    options_en: ["Melting of ice", "Burning of coal", "Neutralization", "Respiration"],
    options_hi: ["बर्फ का पिघलना", "कोयले का जलना", "उदासीनीकरण", "श्वसन"],
    answer_en: "Melting of ice",
    answer_hi: "बर्फ का पिघलना",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "Which acid is present in lemons?",
    question_hi: "नींबू में कौन सा अम्ल पाया जाता है?",
    options_en: ["Citric acid", "Acetic acid", "Formic acid", "Oxalic acid"],
    options_hi: ["सिट्रिक अम्ल", "ऐसिटिक अम्ल", "फॉर्मिक अम्ल", "ऑक्सैलिक अम्ल"],
    answer_en: "Citric acid",
    answer_hi: "सिट्रिक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "Which chemical is used for bleaching clothes?",
    question_hi: "कपड़े धोने में कौन सा रसायन ब्लीचिंग के लिए उपयोग होता है?",
    options_en: ["Bleaching powder", "Washing soda", "Plaster of Paris", "Baking soda"],
    options_hi: ["ब्लीचिंग पाउडर", "वॉशिंग सोडा", "प्लास्टर ऑफ पेरिस", "बेकिंग सोडा"],
    answer_en: "Bleaching powder",
    answer_hi: "ब्लीचिंग पाउडर",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "Which metal forms a protective oxide layer?",
    question_hi: "कौन सी धातु एक सुरक्षात्मक ऑक्साइड परत बनाती है?",
    options_en: ["Aluminium", "Zinc", "Copper", "Silver"],
    options_hi: ["एल्युमिनियम", "जस्ता", "तांबा", "चांदी"],
    answer_en: "Aluminium",
    answer_hi: "एल्युमिनियम",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "What is the formula of washing soda?",
    question_hi: "वॉशिंग सोडा का सूत्र क्या है?",
    options_en: ["Na2CO3·10H2O", "NaHCO3", "NaCl", "Na2SO4"],
    options_hi: ["Na2CO3·10H2O", "NaHCO3", "NaCl", "Na2SO4"],
    answer_en: "Na2CO3·10H2O",
    answer_hi: "Na2CO3·10H2O",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "Which gas smells like rotten eggs?",
    question_hi: "कौन सी गैस सड़े अंडे जैसी गंध देती है?",
    options_en: ["H2S", "NH3", "CO2", "SO2"],
    options_hi: ["H2S", "NH3", "CO2", "SO2"],
    answer_en: "H2S",
    answer_hi: "H2S",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "Which is the most electronegative element?",
    question_hi: "सबसे अधिक विद्युतऋणात्मक तत्व कौन सा है?",
    options_en: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
    options_hi: ["फ्लोरीन", "ऑक्सीजन", "क्लोरीन", "नाइट्रोजन"],
    answer_en: "Fluorine",
    answer_hi: "फ्लोरीन",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "Which mixture is homogeneous?",
    question_hi: "कौन सा मिश्रण सजातीय है?",
    options_en: ["Salt water", "Oil and water", "Sand and iron", "Sugar + chalk powder"],
    options_hi: ["नमक का पानी", "तेल और पानी", "रेत और लोहा", "चीनी + चॉक पाउडर"],
    answer_en: "Salt water",
    answer_hi: "नमक का पानी",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "Which metal is used in thermometers?",
    question_hi: "थर्मामीटर में कौन सी धातु उपयोग होती है?",
    options_en: ["Mercury", "Silver", "Iron", "Zinc"],
    options_hi: ["पारा", "चांदी", "लोहा", "जस्ता"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which gas is responsible for ozone depletion?",
    question_hi: "ओज़ोन परत को नष्ट करने के लिए कौन सी गैस जिम्मेदार है?",
    options_en: ["CFCs", "CO2", "NO2", "SO2"],
    options_hi: ["CFCs", "CO2", "NO2", "SO2"],
    answer_en: "CFCs",
    answer_hi: "CFCs",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "Which oxide is acidic?",
    question_hi: "कौन सा ऑक्साइड अम्लीय है?",
    options_en: ["SO2", "Na2O", "MgO", "CaO"],
    options_hi: ["SO2", "Na2O", "MgO", "CaO"],
    answer_en: "SO2",
    answer_hi: "SO2",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "Which element forms the highest number of compounds?",
    question_hi: "कौन सा तत्व सबसे अधिक यौगिक बनाता है?",
    options_en: ["Carbon", "Silicon", "Oxygen", "Hydrogen"],
    options_hi: ["कार्बन", "सिलिकॉन", "ऑक्सीजन", "हाइड्रोजन"],
    answer_en: "Carbon",
    answer_hi: "कार्बन",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "Which gas is used in refrigerators?",
    question_hi: "रेफ्रिजरेटर में कौन सी गैस उपयोग होती है?",
    options_en: ["Freon", "O2", "H2", "CO"],
    options_hi: ["फ्रेयॉन", "O2", "H2", "CO"],
    answer_en: "Freon",
    answer_hi: "फ्रेयॉन",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "Which acid is used in car batteries?",
    question_hi: "कार की बैटरी में कौन सा अम्ल उपयोग होता है?",
    options_en: ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Phosphoric acid"],
    options_hi: ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "फॉस्फोरिक अम्ल"],
    answer_en: "Sulfuric acid",
    answer_hi: "सल्फ्यूरिक अम्ल",
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