const questions =[
  {
    "num": 1,
    "question_en": "The atomic number of Neon is?",
    "question_hi": "नियॉन की परमाणु संख्या क्या है?",
    "options_en": ["10", "12", "8", "14"],
    "options_hi": ["10", "12", "8", "14"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Mass number is equal to?",
    "question_hi": "द्रव्यमान संख्या किसके बराबर होती है?",
    "options_en": ["Protons + Neutrons", "Electrons + Protons", "Electrons × Neutrons", "Protons − Electrons"],
    "options_hi": ["प्रोटॉन + न्यूट्रॉन", "इलेक्ट्रॉन + प्रोटॉन", "इलेक्ट्रॉन × न्यूट्रॉन", "प्रोटॉन − इलेक्ट्रॉन"],
    "answer_en": "Protons + Neutrons",
    "answer_hi": "प्रोटॉन + न्यूट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Avogadro number is?",
    "question_hi": "अवोगाद्रो संख्या क्या है?",
    "options_en": ["6.022×10²³", "3.14", "9.81", "1.38×10⁻²³"],
    "options_hi": ["6.022×10²³", "3.14", "9.81", "1.38×10⁻²³"],
    "answer_en": "6.022×10²³",
    "answer_hi": "6.022×10²³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which quantum number denotes shape of orbital?",
    "question_hi": "कौन सी क्वांटम संख्या कक्षक के आकार को दर्शाती है?",
    "options_en": ["Azimuthal", "Principal", "Magnetic", "Spin"],
    "options_hi": ["अज़ीमुथल", "प्रिंसिपल", "मैग्नेटिक", "स्पिन"],
    "answer_en": "Azimuthal",
    "answer_hi": "अज़ीमुथल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "p-subshell contains maximum ___ electrons.",
    "question_hi": "p-उपकोश में अधिकतम ___ इलेक्ट्रॉन होते हैं।",
    "options_en": ["6", "2", "10", "14"],
    "options_hi": ["6", "2", "10", "14"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which gas is used for welding?",
    "question_hi": "वेल्डिंग के लिए कौन सी गैस प्रयोग होती है?",
    "options_en": ["Acetylene", "Hydrogen", "Nitrogen", "Helium"],
    "options_hi": ["एसिटिलीन", "हाइड्रोजन", "नाइट्रोजन", "हीलियम"],
    "answer_en": "Acetylene",
    "answer_hi": "एसिटिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which is electron-deficient molecule?",
    "question_hi": "कौन सा इलेक्ट्रॉन-न्यून अणु है?",
    "options_en": ["BF3", "CH4", "NH3", "H2O"],
    "options_hi": ["BF3", "CH4", "NH3", "H2O"],
    "answer_en": "BF3",
    "answer_hi": "BF3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is strongest acid?",
    "question_hi": "सबसे प्रबल अम्ल कौन सा है?",
    "options_en": ["HCl", "H2SO4", "HNO3", "HClO4"],
    "options_hi": ["HCl", "H2SO4", "HNO3", "HClO4"],
    "answer_en": "HClO4",
    "answer_hi": "HClO4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is strongest base?",
    "question_hi": "सबसे प्रबल क्षार कौन सा है?",
    "options_en": ["KOH", "Ca(OH)2", "Mg(OH)2", "NH4OH"],
    "options_hi": ["KOH", "Ca(OH)2", "Mg(OH)2", "NH4OH"],
    "answer_en": "KOH",
    "answer_hi": "KOH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which element has zero electron affinity?",
    "question_hi": "किस तत्व की इलेक्ट्रॉन बंधुता शून्य होती है?",
    "options_en": ["Neon", "Nitrogen", "Fluorine", "Chlorine"],
    "options_hi": ["नियॉन", "नाइट्रोजन", "फ्लोरीन", "क्लोरीन"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is most stable cation?",
    "question_hi": "सबसे स्थायी धनायन कौन सा है?",
    "options_en": ["3° carbocation", "2° carbocation", "1° carbocation", "Methyl carbocation"],
    "options_hi": ["3° कार्बोकैटायन", "2° कार्बोकैटायन", "1° कार्बोकैटायन", "मेथिल कार्बोकैटायन"],
    "answer_en": "3° carbocation",
    "answer_hi": "3° कार्बोकैटायन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is most stable free radical?",
    "question_hi": "सबसे स्थायी मुक्त मूलक कौन सा है?",
    "options_en": ["3°", "2°", "1°", "Methyl"],
    "options_hi": ["3°", "2°", "1°", "मेथिल"],
    "answer_en": "3°",
    "answer_hi": "3°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which bond is strongest?",
    "question_hi": "कौन सा बंधन सबसे मजबूत होता है?",
    "options_en": ["σ-bond", "π-bond", "Hydrogen bond", "Ionic bond"],
    "options_hi": ["σ-बंध", "π-बंध", "हाइड्रोजन बंध", "आयनिक बंध"],
    "answer_en": "σ-bond",
    "answer_hi": "σ-बंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which has highest ionization energy?",
    "question_hi": "किसकी आयनन ऊर्जा सबसे अधिक होती है?",
    "options_en": ["He", "Ne", "Ar", "Kr"],
    "options_hi": ["He", "Ne", "Ar", "Kr"],
    "answer_en": "He",
    "answer_hi": "He",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which molecule is linear?",
    "question_hi": "कौन सा अणु रैखिक होता है?",
    "options_en": ["CO2", "H2O", "SO2", "NH3"],
    "options_hi": ["CO2", "H2O", "SO2", "NH3"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which molecule is bent?",
    "question_hi": "कौन सा अणु मुड़ा हुआ होता है?",
    "options_en": ["H2O", "CO2", "C2H2", "C2H4"],
    "options_hi": ["H2O", "CO2", "C2H2", "C2H4"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which is greenhouse gas?",
    "question_hi": "कौन सी ग्रीनहाउस गैस है?",
    "options_en": ["CO2", "N2", "O2", "H2"],
    "options_hi": ["CO2", "N2", "O2", "H2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which element has maximum oxidation state?",
    "question_hi": "किस तत्व की अधिकतम ऑक्सीकरण अवस्था होती है?",
    "options_en": ["Mn", "Fe", "Cu", "Zn"],
    "options_hi": ["Mn", "Fe", "Cu", "Zn"],
    "answer_en": "Mn",
    "answer_hi": "Mn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which metal reacts with cold water?",
    "question_hi": "कौन सी धातु ठंडे पानी से अभिक्रिया करती है?",
    "options_en": ["Na", "Mg", "Al", "Fe"],
    "options_hi": ["Na", "Mg", "Al", "Fe"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which salt gives brown ring test?",
    "question_hi": "कौन सा लवण ब्राउन रिंग टेस्ट देता है?",
    "options_en": ["Nitrate", "Chloride", "Sulfate", "Carbonate"],
    "options_hi": ["नाइट्रेट", "क्लोराइड", "सल्फेट", "कार्बोनेट"],
    "answer_en": "Nitrate",
    "answer_hi": "नाइट्रेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which gas burns with pop sound?",
    "question_hi": "कौन सी गैस पॉप ध्वनि के साथ जलती है?",
    "options_en": ["H2", "O2", "CO2", "N2"],
    "options_hi": ["H2", "O2", "CO2", "N2"],
    "answer_en": "H2",
    "answer_hi": "H2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
    "options_en": ["Mercury", "Sodium", "Zinc", "Lead"],
    "options_hi": ["पारा", "सोडियम", "जिंक", "लेड"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which non-metal is liquid at room temp?",
    "question_hi": "कौन सी अधातु कमरे के तापमान पर द्रव होती है?",
    "options_en": ["Bromine", "Chlorine", "Iodine", "Carbon"],
    "options_hi": ["ब्रोमीन", "क्लोरीन", "आयोडीन", "कार्बन"],
    "answer_en": "Bromine",
    "answer_hi": "ब्रोमीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which compound shows resonance?",
    "question_hi": "कौन सा यौगिक अनुनाद दर्शाता है?",
    "options_en": ["O3", "NaCl", "HCl", "KBr"],
    "options_hi": ["O3", "NaCl", "HCl", "KBr"],
    "answer_en": "O3",
    "answer_hi": "O3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which bond is weakest?",
    "question_hi": "कौन सा बंधन सबसे कमजोर होता है?",
    "options_en": ["Hydrogen bond", "Van der Waals", "Covalent", "Ionic"],
    "options_hi": ["हाइड्रोजन बंध", "वैन डर वाल्स", "सहसंयोजक", "आयनिक"],
    "answer_en": "Van der Waals",
    "answer_hi": "वैन डर वाल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which acid is used in car batteries?",
    "question_hi": "कार बैटरियों में कौन सा अम्ल प्रयोग होता है?",
    "options_en": ["H2SO4", "HCl", "HNO3", "CH3COOH"],
    "options_hi": ["H2SO4", "HCl", "HNO3", "CH3COOH"],
    "answer_en": "H2SO4",
    "answer_hi": "H2SO4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which metal forms amphoteric oxide?",
    "question_hi": "कौन सी धातु उभयधर्मी ऑक्साइड बनाती है?",
    "options_en": ["Al", "Na", "K", "Mg"],
    "options_hi": ["Al", "Na", "K", "Mg"],
    "answer_en": "Al",
    "answer_hi": "Al",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is strongest reducing agent?",
    "question_hi": "सबसे प्रबल अपचायक कौन सा है?",
    "options_en": ["Li", "Na", "K", "Mg"],
    "options_hi": ["Li", "Na", "K", "Mg"],
    "answer_en": "Li",
    "answer_hi": "Li",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which is strongest oxidizing agent?",
    "question_hi": "सबसे प्रबल ऑक्सीकारक कौन सा है?",
    "options_en": ["F2", "Cl2", "Br2", "I2"],
    "options_hi": ["F2", "Cl2", "Br2", "I2"],
    "answer_en": "F2",
    "answer_hi": "F2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which metal is used in galvanization?",
    "question_hi": "गैल्वनीकरण में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Zinc", "Copper", "Aluminium", "Iron"],
    "options_hi": ["जिंक", "कॉपर", "एल्युमिनियम", "आयरन"],
    "answer_en": "Zinc",
    "answer_hi": "जिंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which gas is used in food packaging?",
    "question_hi": "भोजन पैकेजिंग में कौन सी गैस प्रयोग होती है?",
    "options_en": ["N2", "O2", "CO2", "H2"],
    "options_hi": ["N2", "O2", "CO2", "H2"],
    "answer_en": "N2",
    "answer_hi": "N2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which element forms coloured salts?",
    "question_hi": "कौन सा तत्व रंगीन लवण बनाता है?",
    "options_en": ["Transition metals", "Alkali metals", "Noble gases", "Alkaline earth metals"],
    "options_hi": ["संक्रमण धातुएँ", "क्षार धातुएँ", "नोबल गैसें", "क्षारीय मृदा धातुएँ"],
    "answer_en": "Transition metals",
    "answer_hi": "संक्रमण धातुएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which reagent is used for alcohol test?",
    "question_hi": "ऐल्कोहॉल टेस्ट के लिए कौन सा अभिकर्मक प्रयोग होता है?",
    "options_en": ["Lucas reagent", "Fehling solution", "Tollens reagent", "Benedict reagent"],
    "options_hi": ["लुकास अभिकर्मक", "फेहलिंग विलयन", "टोलेन्स अभिकर्मक", "बेनेडिक्ट अभिकर्मक"],
    "answer_en": "Lucas reagent",
    "answer_hi": "लुकास अभिकर्मक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which reagent gives silver mirror test?",
    "question_hi": "कौन सा अभिकर्मक सिल्वर मिरर टेस्ट देता है?",
    "options_en": ["Tollens reagent", "Fehling reagent", "Lucas reagent", "KMnO4"],
    "options_hi": ["टोलेन्स अभिकर्मक", "फेहलिंग अभिकर्मक", "लुकास अभिकर्मक", "KMnO4"],
    "answer_en": "Tollens reagent",
    "answer_hi": "टोलेन्स अभिकर्मक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which is primary alcohol?",
    "question_hi": "कौन सा प्राथमिक ऐल्कोहॉल है?",
    "options_en": ["CH3CH2OH", "CH3OH", "Isopropyl alcohol", "Tertiary butyl alcohol"],
    "options_hi": ["CH3CH2OH", "CH3OH", "आइसोप्रोपिल ऐल्कोहॉल", "टर्शियरी ब्यूटिल ऐल्कोहॉल"],
    "answer_en": "CH3CH2OH",
    "answer_hi": "CH3CH2OH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which has maximum boiling point?",
    "question_hi": "किसका क्वथनांक सबसे अधिक होता है?",
    "options_en": ["H2O", "H2S", "H2Se", "H2Te"],
    "options_hi": ["H2O", "H2S", "H2Se", "H2Te"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Acetic acid", "Citric acid", "Tartaric acid", "Sulphuric acid"],
    "options_hi": ["एसिटिक अम्ल", "सिट्रिक अम्ल", "टार्टरिक अम्ल", "सल्फ्यूरिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which gas turns lime water milky?",
    "question_hi": "कौन सी गैस चूने के पानी को दूधिया बनाती है?",
    "options_en": ["CO2", "O2", "H2", "N2"],
    "options_hi": ["CO2", "O2", "H2", "N2"],
    "answer_en": "CO2",
    "answer_hi": "CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which metal is used in thermometers?",
    "question_hi": "थर्मामीटरों में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Mercury", "Al", "Zn", "Cu"],
    "options_hi": ["पारा", "Al", "Zn", "Cu"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which compound is used in glass making?",
    "question_hi": "कांच बनाने में कौन सा यौगिक प्रयोग होता है?",
    "options_en": ["Silica", "Sodium bicarbonate", "Calcium oxide", "All of these"],
    "options_hi": ["सिलिका", "सोडियम बाइकार्बोनेट", "कैल्शियम ऑक्साइड", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which has tetrahedral shape?",
    "question_hi": "किसकी चतुष्फलकीय आकृति होती है?",
    "options_en": ["CH4", "NH3", "H2O", "CO2"],
    "options_hi": ["CH4", "NH3", "H2O", "CO2"],
    "answer_en": "CH4",
    "answer_hi": "CH4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which has trigonal pyramidal shape?",
    "question_hi": "किसकी त्रिकोणीय पिरामिड आकृति होती है?",
    "options_en": ["NH3", "CH4", "CO2", "H2O"],
    "options_hi": ["NH3", "CH4", "CO2", "H2O"],
    "answer_en": "NH3",
    "answer_hi": "NH3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which has V-shape?",
    "question_hi": "किसकी V-आकृति होती है?",
    "options_en": ["H2O", "CO2", "C2H2", "BeCl2"],
    "options_hi": ["H2O", "CO2", "C2H2", "BeCl2"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which element forms maximum compounds?",
    "question_hi": "कौन सा तत्व सबसे अधिक यौगिक बनाता है?",
    "options_en": ["Carbon", "Silicon", "Sulphur", "Nitrogen"],
    "options_hi": ["कार्बन", "सिलिकॉन", "सल्फर", "नाइट्रोजन"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which isotope is radioactive?",
    "question_hi": "कौन सा समस्थानिक रेडियोधर्मी है?",
    "options_en": ["C-14", "C-12", "O-16", "N-14"],
    "options_hi": ["C-14", "C-12", "O-16", "N-14"],
    "answer_en": "C-14",
    "answer_hi": "C-14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which element is used in pencils?",
    "question_hi": "पेंसिलों में कौन सा तत्व प्रयोग होता है?",
    "options_en": ["Graphite", "Diamond", "Carbon black", "Soot"],
    "options_hi": ["ग्रेफाइट", "हीरा", "कार्बन ब्लैक", "काजल"],
    "answer_en": "Graphite",
    "answer_hi": "ग्रेफाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which gas is produced in Haber process?",
    "question_hi": "हैबर प्रक्रिया में कौन सी गैस उत्पन्न होती है?",
    "options_en": ["NH3", "H2", "O2", "CO"],
    "options_hi": ["NH3", "H2", "O2", "CO"],
    "answer_en": "NH3",
    "answer_hi": "NH3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which gas is evolved when metal reacts with acid?",
    "question_hi": "धातु के अम्ल से अभिक्रिया करने पर कौन सी गैस निकलती है?",
    "options_en": ["H2", "O2", "CO2", "N2"],
    "options_hi": ["H2", "O2", "CO2", "N2"],
    "answer_en": "H2",
    "answer_hi": "H2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which reaction is exothermic?",
    "question_hi": "कौन सी अभिक्रिया ऊष्माक्षेपी होती है?",
    "options_en": ["Neutralization", "Decomposition of CaCO3", "Photosynthesis", "Evaporation"],
    "options_hi": ["उदासीनीकरण", "CaCO3 का विघटन", "प्रकाश संश्लेषण", "वाष्पीकरण"],
    "answer_en": "Neutralization",
    "answer_hi": "उदासीनीकरण",
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