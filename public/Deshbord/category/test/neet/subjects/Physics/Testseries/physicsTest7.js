
const questions = [
  {
    "num": 1,
    "question_en": "Which law states that pressure at a point in a fluid is equal in all directions?",
    "question_hi": "कौन सा नियम कहता है कि एक तरल में एक बिंदु पर दाब सभी दिशाओं में समान होता है?",
    "options_en": ["Pascal's law", "Boyle's law", "Archimedes' principle", "Hooke's law"],
    "options_hi": ["पास्कल का नियम", "बॉयल का नियम", "आर्किमिडीज का सिद्धांत", "हुक का नियम"],
    "answer_en": "Pascal's law",
    "answer_hi": "पास्कल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which is a vector quantity?",
    "question_hi": "कौन सी सदिश राशि है?",
    "options_en": ["Speed", "Work", "Acceleration", "Temperature"],
    "options_hi": ["चाल", "कार्य", "त्वरण", "तापमान"],
    "answer_en": "Acceleration",
    "answer_hi": "त्वरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "The slope of displacement-time graph gives:",
    "question_hi": "विस्थापन-समय ग्राफ का ढलान देता है:",
    "options_en": ["Velocity", "Acceleration", "Speed", "Force"],
    "options_hi": ["वेग", "त्वरण", "चाल", "बल"],
    "answer_en": "Velocity",
    "answer_hi": "वेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Two equal forces act at 60°. The resultant is:",
    "question_hi": "दो समान बल 60° पर कार्य करते हैं। परिणामी है:",
    "options_en": ["2F", "F", "F√3", "F/2"],
    "options_hi": ["2F", "F", "F√3", "F/2"],
    "answer_en": "F√3",
    "answer_hi": "F√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Coefficient of friction depends on:",
    "question_hi": "घर्षण गुणांक निर्भर करता है:",
    "options_en": ["Area", "Velocity", "Nature of surfaces", "Mass"],
    "options_hi": ["क्षेत्रफल पर", "वेग पर", "सतहों की प्रकृति पर", "द्रव्यमान पर"],
    "answer_en": "Nature of surfaces",
    "answer_hi": "सतहों की प्रकृति पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "In free fall, acceleration of body is:",
    "question_hi": "मुक्त पतन में, पिंड का त्वरण होता है:",
    "options_en": ["Zero", "Constant", "Increasing", "Decreasing"],
    "options_hi": ["शून्य", "स्थिर", "बढ़ता हुआ", "घटता हुआ"],
    "answer_en": "Constant",
    "answer_hi": "स्थिर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "For a satellite in circular orbit, acceleration is:",
    "question_hi": "वृत्ताकार कक्षा में उपग्रह के लिए, त्वरण होता है:",
    "options_en": ["Zero", "Centripetal", "Gravity-free", "Tangential"],
    "options_hi": ["शून्य", "अभिकेंद्रीय", "गुरुत्वाकर्षण मुक्त", "स्पर्शरेखीय"],
    "answer_en": "Centripetal",
    "answer_hi": "अभिकेंद्रीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The value of acceleration due to gravity is maximum at:",
    "question_hi": "गुरुत्वीय त्वरण का मान अधिकतम होता है:",
    "options_en": ["Poles", "Equator", "Mountains", "Sea level"],
    "options_hi": ["ध्रुवों पर", "भूमध्य रेखा पर", "पहाड़ों पर", "समुद्र तल पर"],
    "answer_en": "Poles",
    "answer_hi": "ध्रुवों पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Dimension of force constant (k) is:",
    "question_hi": "बल नियतांक (k) की विमा है:",
    "options_en": ["MT⁻²", "MLT⁻²", "MT⁻¹", "M²L⁻²T⁻²"],
    "options_hi": ["MT⁻²", "MLT⁻²", "MT⁻¹", "M²L⁻²T⁻²"],
    "answer_en": "MT⁻²",
    "answer_hi": "MT⁻²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Unit of surface tension:",
    "question_hi": "पृष्ठ तनाव की इकाई:",
    "options_en": ["N/m", "N·m", "J/m²", "Pa"],
    "options_hi": ["N/m", "N·m", "J/m²", "Pa"],
    "answer_en": "N/m",
    "answer_hi": "N/m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The rise of liquid in capillary is due to:",
    "question_hi": "केशिका में द्रव का चढ़ना किसके कारण होता है?",
    "options_en": ["Viscosity", "Surface tension", "Osmosis", "Buoyancy"],
    "options_hi": ["श्यानता", "पृष्ठ तनाव", "परासरण", "उत्प्लावन"],
    "answer_en": "Surface tension",
    "answer_hi": "पृष्ठ तनाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Kelvin is the unit of:",
    "question_hi": "केल्विन इकाई है:",
    "options_en": ["Heat", "Temperature", "Energy", "Entropy"],
    "options_hi": ["ऊष्मा", "तापमान", "ऊर्जा", "एन्ट्रॉपी"],
    "answer_en": "Temperature",
    "answer_hi": "तापमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Gas law PV = constant at constant temperature is:",
    "question_hi": "गैस नियम PV = नियतांक स्थिर तापमान पर है:",
    "options_en": ["Boyle's law", "Charles' law", "Gay Lussac's law", "Avogadro's law"],
    "options_hi": ["बॉयल का नियम", "चार्ल्स का नियम", "गे लुसाक का नियम", "अवोगाद्रो का नियम"],
    "answer_en": "Boyle's law",
    "answer_hi": "बॉयल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The efficiency of Carnot engine depends on:",
    "question_hi": "कार्नोट इंजन की दक्षता निर्भर करती है:",
    "options_en": ["Pressure difference", "Temperature difference", "Volume ratio", "Gas used"],
    "options_hi": ["दाब अंतर पर", "तापमान अंतर पर", "आयतन अनुपात पर", "प्रयुक्त गैस पर"],
    "answer_en": "Temperature difference",
    "answer_hi": "तापमान अंतर पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Sound waves cannot travel through:",
    "question_hi": "ध्वनि तरंगें यात्रा नहीं कर सकती:",
    "options_en": ["Air", "Water", "Steel", "Vacuum"],
    "options_hi": ["वायु", "जल", "स्टील", "निर्वात"],
    "answer_en": "Vacuum",
    "answer_hi": "निर्वात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Beats are produced due to:",
    "question_hi": "विस्पंद उत्पन्न होते हैं:",
    "options_en": ["Interference", "Diffraction", "Polarisation", "Reflection"],
    "options_hi": ["व्यतिकरण", "विवर्तन", "ध्रुवण", "परावर्तन"],
    "answer_en": "Interference",
    "answer_hi": "व्यतिकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The minimum distance to hear two sounds separately is:",
    "question_hi": "दो ध्वनियों को अलग-अलग सुनने के लिए न्यूनतम दूरी है:",
    "options_en": ["Frequency", "Time period", "Limit of resolution", "Echo"],
    "options_hi": ["आवृत्ति", "आवर्तकाल", "विभेदन सीमा", "प्रतिध्वनि"],
    "answer_en": "Limit of resolution",
    "answer_hi": "विभेदन सीमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The focal length of a plane mirror is:",
    "question_hi": "समतल दर्पण की फोकस दूरी होती है:",
    "options_en": ["Zero", "Infinity", "Negative", "Positive"],
    "options_hi": ["शून्य", "अनंत", "ऋणात्मक", "धनात्मक"],
    "answer_en": "Infinity",
    "answer_hi": "अनंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The unit of magnetic field intensity (H) is:",
    "question_hi": "चुंबकीय क्षेत्र तीव्रता (H) की इकाई है:",
    "options_en": ["Tesla", "A/m", "Weber", "Henry"],
    "options_hi": ["टेस्ला", "A/m", "वेबर", "हेनरी"],
    "answer_en": "A/m",
    "answer_hi": "A/m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which device converts AC to DC?",
    "question_hi": "कौन सा उपकरण AC को DC में बदलता है?",
    "options_en": ["Motor", "Transformer", "Rectifier", "Relay"],
    "options_hi": ["मोटर", "ट्रांसफॉर्मर", "रेक्टिफायर", "रिले"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Ohm's law fails for:",
    "question_hi": "ओम का नियम विफल होता है:",
    "options_en": ["Copper", "Nichrome", "Diodes", "Resistors"],
    "options_hi": ["तांबा", "नाइक्रोम", "डायोड", "प्रतिरोधक"],
    "answer_en": "Diodes",
    "answer_hi": "डायोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Coulomb's law is valid for:",
    "question_hi": "कूलम्ब का नियम मान्य है:",
    "options_en": ["Large charges", "Stationary charges", "Moving charges", "Magnetic poles"],
    "options_hi": ["बड़े आवेशों के लिए", "स्थिर आवेशों के लिए", "गतिमान आवेशों के लिए", "चुंबकीय ध्रुवों के लिए"],
    "answer_en": "Stationary charges",
    "answer_hi": "स्थिर आवेशों के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Electric flux unit is:",
    "question_hi": "विद्युत फ्लक्स की इकाई है:",
    "options_en": ["Volt", "Weber", "Farad", "N·m²/C"],
    "options_hi": ["वोल्ट", "वेबर", "फैरड", "N·m²/C"],
    "answer_en": "N·m²/C",
    "answer_hi": "N·m²/C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "In series combination, resistance:",
    "question_hi": "श्रृंखला संयोजन में, प्रतिरोध:",
    "options_en": ["Decreases", "Becomes zero", "Increases", "Becomes constant"],
    "options_hi": ["घटता है", "शून्य हो जाता है", "बढ़ता है", "स्थिर हो जाता है"],
    "answer_en": "Increases",
    "answer_hi": "बढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Drift velocity is directly proportional to:",
    "question_hi": "अपवाह वेग सीधे आनुपातिक है:",
    "options_en": ["Electric field", "Temperature", "Area", "Pressure"],
    "options_hi": ["विद्युत क्षेत्र", "तापमान", "क्षेत्रफल", "दाब"],
    "answer_en": "Electric field",
    "answer_hi": "विद्युत क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The SI unit of conductivity is:",
    "question_hi": "चालकता का SI मात्रक है:",
    "options_en": ["Ohm-meter", "Siemens/m", "Farad", "Weber"],
    "options_hi": ["ओम-मीटर", "सीमेंस/मी", "फैरड", "वेबर"],
    "answer_en": "Siemens/m",
    "answer_hi": "सीमेंस/मी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Magnetic moment formula for current loop:",
    "question_hi": "धारा लूप के लिए चुंबकीय आघूर्ण सूत्र:",
    "options_en": ["IA", "I/A", "I²A", "A/I"],
    "options_hi": ["IA", "I/A", "I²A", "A/I"],
    "answer_en": "IA",
    "answer_hi": "IA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Electromagnetic waves are:",
    "question_hi": "विद्युत चुम्बकीय तरंगें होती हैं:",
    "options_en": ["Longitudinal", "Transverse", "Mechanical", "Random"],
    "options_hi": ["अनुदैर्ध्य", "अनुप्रस्थ", "यांत्रिक", "यादृच्छिक"],
    "answer_en": "Transverse",
    "answer_hi": "अनुप्रस्थ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The device used for measuring magnetic field:",
    "question_hi": "चुंबकीय क्षेत्र मापने के लिए उपयोग किया जाने वाला उपकरण:",
    "options_en": ["Ammeter", "Voltmeter", "Fluxmeter", "Hydrometer"],
    "options_hi": ["अमीटर", "वोल्टमीटर", "फ्लक्समीटर", "हाइड्रोमीटर"],
    "answer_en": "Fluxmeter",
    "answer_hi": "फ्लक्समीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Transformer core is made of:",
    "question_hi": "ट्रांसफॉर्मर कोर बना होता है:",
    "options_en": ["Copper", "Soft iron", "Aluminum", "Steel"],
    "options_hi": ["तांबा", "नर्म लोहा", "एल्युमिनियम", "स्टील"],
    "answer_en": "Soft iron",
    "answer_hi": "नर्म लोहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which quantity remains constant in resonance?",
    "question_hi": "अनुनाद में कौन सी राशि स्थिर रहती है?",
    "options_en": ["Impedance minimum", "Voltage maximum", "Frequency variable", "Resistance zero"],
    "options_hi": ["प्रतिबाधा न्यूनतम", "वोल्टेज अधिकतम", "आवृत्ति परिवर्तनशील", "प्रतिरोध शून्य"],
    "answer_en": "Impedance minimum",
    "answer_hi": "प्रतिबाधा न्यूनतम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The threshold frequency depends on:",
    "question_hi": "देहली आवृत्ति निर्भर करती है:",
    "options_en": ["Material", "Voltage", "Intensity", "Current"],
    "options_hi": ["पदार्थ पर", "वोल्टेज पर", "तीव्रता पर", "धारा पर"],
    "answer_en": "Material",
    "answer_hi": "पदार्थ पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which wave has highest energy?",
    "question_hi": "किस तरंग की ऊर्जा सबसे अधिक होती है?",
    "options_en": ["Radio waves", "Microwaves", "UV rays", "Gamma rays"],
    "options_hi": ["रेडियो तरंगें", "माइक्रोवेव", "पराबैंगनी किरणें", "गामा किरणें"],
    "answer_en": "Gamma rays",
    "answer_hi": "गामा किरणें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Hydrogen spectrum Lyman series lies in:",
    "question_hi": "हाइड्रोजन स्पेक्ट्रम लाइमन श्रेणी स्थित है:",
    "options_en": ["IR", "Visible", "UV", "Microwave"],
    "options_hi": ["अवरक्त", "दृश्य", "पराबैंगनी", "माइक्रोवेव"],
    "answer_en": "UV",
    "answer_hi": "पराबैंगनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which has zero rest mass?",
    "question_hi": "किसका शून्य विराम द्रव्यमान होता है?",
    "options_en": ["Electron", "Neutron", "Proton", "Photon"],
    "options_hi": ["इलेक्ट्रॉन", "न्यूट्रॉन", "प्रोटॉन", "फोटॉन"],
    "answer_en": "Photon",
    "answer_hi": "फोटॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Alpha particle is:",
    "question_hi": "अल्फा कण होता है:",
    "options_en": ["Electron", "Helium nucleus", "Proton", "Neutrino"],
    "options_hi": ["इलेक्ट्रॉन", "हीलियम नाभिक", "प्रोटॉन", "न्यूट्रिनो"],
    "answer_en": "Helium nucleus",
    "answer_hi": "हीलियम नाभिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The nucleus is held by:",
    "question_hi": "नाभिक बंधा रहता है:",
    "options_en": ["Gravitational force", "Electrostatic force", "Strong nuclear force", "Weak force"],
    "options_hi": ["गुरुत्वाकर्षण बल", "विद्युत्स्थैतिक बल", "प्रबल नाभिकीय बल", "दुर्बल बल"],
    "answer_en": "Strong nuclear force",
    "answer_hi": "प्रबल नाभिकीय बल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "SI unit of luminous intensity:",
    "question_hi": "ज्योति तीव्रता का SI मात्रक:",
    "options_en": ["Candela", "Lux", "Lumen", "Joule"],
    "options_hi": ["कैंडेला", "लक्स", "लुमेन", "जूल"],
    "answer_en": "Candela",
    "answer_hi": "कैंडेला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Force acting on a moving charge in magnetic field is:",
    "question_hi": "चुंबकीय क्षेत्र में गतिमान आवेश पर कार्यरत बल है:",
    "options_en": ["qE", "qvB", "q/v", "Ev/B"],
    "options_hi": ["qE", "qvB", "q/v", "Ev/B"],
    "answer_en": "qvB",
    "answer_hi": "qvB",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Electron in an atom revolves due to:",
    "question_hi": "परमाणु में इलेक्ट्रॉन घूमता है:",
    "options_en": ["Magnetic force", "Gravitational force", "Electrostatic force", "Nuclear force"],
    "options_hi": ["चुंबकीय बल", "गुरुत्वाकर्षण बल", "विद्युत्स्थैतिक बल", "नाभिकीय बल"],
    "answer_en": "Electrostatic force",
    "answer_hi": "विद्युत्स्थैतिक बल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The speed of light depends on:",
    "question_hi": "प्रकाश की चाल निर्भर करती है:",
    "options_en": ["Density", "Temperature", "Medium", "Pressure"],
    "options_hi": ["घनत्व", "तापमान", "माध्यम", "दाब"],
    "answer_en": "Medium",
    "answer_hi": "माध्यम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which metal shows photoelectric effect easily?",
    "question_hi": "कौन सी धातु आसानी से प्रकाशविद्युत प्रभाव दर्शाती है?",
    "options_en": ["Copper", "Aluminium", "Cesium", "Iron"],
    "options_hi": ["तांबा", "एल्युमिनियम", "सीज़ियम", "लोहा"],
    "answer_en": "Cesium",
    "answer_hi": "सीज़ियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "PN junction acts as:",
    "question_hi": "PN संधि कार्य करती है:",
    "options_en": ["Conductor", "Rectifier", "Amplifier", "Resistor"],
    "options_hi": ["चालक", "दिष्टकारी", "प्रवर्धक", "प्रतिरोधक"],
    "answer_en": "Rectifier",
    "answer_hi": "दिष्टकारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Binary number system base is:",
    "question_hi": "द्विआधारी संख्या प्रणाली का आधार है:",
    "options_en": ["4", "8", "2", "10"],
    "options_hi": ["4", "8", "2", "10"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Forward bias decreases:",
    "question_hi": "अग्र अभिनति घटाती है:",
    "options_en": ["Barrier potential", "Current", "Conductivity", "Temperature"],
    "options_hi": ["अवरोध विभव", "धारा", "चालकता", "तापमान"],
    "answer_en": "Barrier potential",
    "answer_hi": "अवरोध विभव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Half-wave rectifier efficiency is:",
    "question_hi": "अर्ध-तरंग दिष्टकारी की दक्षता है:",
    "options_en": ["40.6%", "81.2%", "20%", "10%"],
    "options_hi": ["40.6%", "81.2%", "20%", "10%"],
    "answer_en": "40.6%",
    "answer_hi": "40.6%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Zener diode is used for:",
    "question_hi": "जेनर डायोड उपयोग किया जाता है:",
    "options_en": ["Amplification", "Voltage regulation", "Oscillation", "Switching"],
    "options_hi": ["प्रवर्धन", "वोल्टेज नियमन", "दोलन", "स्विचिंग"],
    "answer_en": "Voltage regulation",
    "answer_hi": "वोल्टेज नियमन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Logic gate performing OR operation gives output:",
    "question_hi": "OR संक्रिया करने वाला लॉजिक गेट आउटपुट देता है:",
    "options_en": ["1 if both inputs 1", "1 if any input 1", "0 always", "1 only if both input 0"],
    "options_hi": ["1 यदि दोनों इनपुट 1", "1 यदि कोई इनपुट 1", "0 हमेशा", "1 केवल यदि दोनों इनपुट 0"],
    "answer_en": "1 if any input 1",
    "answer_hi": "1 यदि कोई इनपुट 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Dimensional formula of electric field:",
    "question_hi": "विद्युत क्षेत्र का विमीय सूत्र:",
    "options_en": ["MLT⁻²", "MLT⁻³A⁻¹", "MLA⁻¹T⁻³", "MLT⁻²A⁻¹"],
    "options_hi": ["MLT⁻²", "MLT⁻³A⁻¹", "MLA⁻¹T⁻³", "MLT⁻²A⁻¹"],
    "answer_en": "MLT⁻³A⁻¹",
    "answer_hi": "MLT⁻³A⁻¹",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which ray has no charge?",
    "question_hi": "किस किरण पर कोई आवेश नहीं होता?",
    "options_en": ["Alpha", "Beta", "Gamma", "Proton"],
    "options_hi": ["अल्फा", "बीटा", "गामा", "प्रोटॉन"],
    "answer_en": "Gamma",
    "answer_hi": "गामा",
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