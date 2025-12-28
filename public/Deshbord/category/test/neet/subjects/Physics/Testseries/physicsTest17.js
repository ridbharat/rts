const questions = [
  {
    num: 1,
    question_en: "Which physical quantity has the unit J/kg?",
    question_hi: "किस भौतिक राशि की इकाई J/kg है?",
    options_en: ["Force", "Energy density", "Specific energy", "Pressure"],
    options_hi: ["बल", "ऊर्जा घनत्व", "विशिष्ट ऊर्जा", "दाब"],
    answer_en: "Specific energy",
    answer_hi: "विशिष्ट ऊर्जा",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "A body moves 20 m in 4 s with uniform acceleration. If initial speed was 2 m/s, find acceleration.",
    question_hi: "एक पिंड एकसमान त्वरण से 4 s में 20 m चलता है। यदि प्रारंभिक चाल 2 m/s थी, त्वरण ज्ञात कीजिए।",
    options_en: ["1 m/s²", "2 m/s²", "0.5 m/s²", "3 m/s²"],
    options_hi: ["1 m/s²", "2 m/s²", "0.5 m/s²", "3 m/s²"],
    answer_en: "1 m/s²",
    answer_hi: "1 m/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which law states that 'stress is directly proportional to strain'?",
    question_hi: "कौन सा नियम कहता है कि 'प्रतिबल, विकृति के अनुक्रमानुपाती होता है'?",
    options_en: ["Hooke's law", "Boyle's law", "Kepler's law", "Ampere's law"],
    options_hi: ["हुक का नियम", "बॉयल का नियम", "कैपलर का नियम", "एम्पियर का नियम"],
    answer_en: "Hooke's law",
    answer_hi: "हुक का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Unit of angular momentum is?",
    question_hi: "कोणीय संवेग की इकाई है?",
    options_en: ["kg m²/s", "N m", "W s", "J m"],
    options_hi: ["kg m²/s", "N m", "W s", "J m"],
    answer_en: "kg m²/s",
    answer_hi: "kg m²/s",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "A stone dropped from rest covers 45 m. What is time taken? (g = 10 m/s²)",
    question_hi: "विराम से गिराया गया एक पत्थर 45 m दूरी तय करता है। लिया गया समय क्या है? (g = 10 m/s²)",
    options_en: ["3 s", "2 s", "4 s", "1.5 s"],
    options_hi: ["3 s", "2 s", "4 s", "1.5 s"],
    answer_en: "3 s",
    answer_hi: "3 s",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which is a non-contact force?",
    question_hi: "कौन सा बल असंपर्क बल है?",
    options_en: ["Tension", "Friction", "Magnetic", "Normal reaction"],
    options_hi: ["तनाव", "घर्षण", "चुंबकीय", "अभिलंब प्रतिक्रिया"],
    answer_en: "Magnetic",
    answer_hi: "चुंबकीय",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "If momentum is doubled, kinetic energy becomes?",
    question_hi: "यदि संवेग दोगुना हो जाता है, तो गतिज ऊर्जा हो जाती है?",
    options_en: ["Four times", "Double", "Half", "Eight times"],
    options_hi: ["चार गुना", "दोगुना", "आधा", "आठ गुना"],
    answer_en: "Four times",
    answer_hi: "चार गुना",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Dimension of power is?",
    question_hi: "शक्ति का विमीय सूत्र है?",
    options_en: ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "M⁻¹L³T"],
    options_hi: ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "M⁻¹L³T"],
    answer_en: "ML²T⁻³",
    answer_hi: "ML²T⁻³",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "A 10 N force acts on area 2 m². Pressure?",
    question_hi: "10 N बल 2 m² क्षेत्रफल पर कार्य करता है। दाब?",
    options_en: ["5 Pa", "2 Pa", "10 Pa", "20 Pa"],
    options_hi: ["5 Pa", "2 Pa", "10 Pa", "20 Pa"],
    answer_en: "5 Pa",
    answer_hi: "5 Pa",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Escape velocity depends on?",
    question_hi: "पलायन वेग निर्भर करता है?",
    options_en: ["Radius only", "Mass only", "Both mass and radius", "None"],
    options_hi: ["केवल त्रिज्या", "केवल द्रव्यमान", "द्रव्यमान और त्रिज्या दोनों", "कोई नहीं"],
    answer_en: "Both mass and radius",
    answer_hi: "द्रव्यमान और त्रिज्या दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which is NOT a thermodynamic variable?",
    question_hi: "कौन सा ऊष्मागतिक चर नहीं है?",
    options_en: ["Pressure", "Temperature", "Volume", "Heat"],
    options_hi: ["दाब", "तापमान", "आयतन", "ऊष्मा"],
    answer_en: "Heat",
    answer_hi: "ऊष्मा",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The slope of velocity-time graph gives?",
    question_hi: "वेग-समय ग्राफ का ढलान देता है?",
    options_en: ["Displacement", "Acceleration", "Speed", "Force"],
    options_hi: ["विस्थापन", "त्वरण", "चाल", "बल"],
    answer_en: "Acceleration",
    answer_hi: "त्वरण",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "A 5 μF capacitor charged to 10 V. Energy stored?",
    question_hi: "एक 5 μF संधारित्र 10 V तक आवेशित है। संग्रहीत ऊर्जा?",
    options_en: ["250 μJ", "50 μJ", "500 μJ", "100 μJ"],
    options_hi: ["250 μJ", "50 μJ", "500 μJ", "100 μJ"],
    answer_en: "250 μJ",
    answer_hi: "250 μJ",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "A concave mirror forms image of an object between focus and pole. Image is?",
    question_hi: "एक अवतल दर्पण फोकस और ध्रुव के बीच स्थित वस्तु का प्रतिबिंब बनाता है। प्रतिबिंब है?",
    options_en: ["Real enlarged", "Virtual enlarged", "Real diminished", "Virtual diminished"],
    options_hi: ["वास्तविक बड़ा", "आभासी बड़ा", "वास्तविक छोटा", "आभासी छोटा"],
    answer_en: "Virtual enlarged",
    answer_hi: "आभासी बड़ा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which particle has zero rest mass?",
    question_hi: "किस कण का शेष द्रव्यमान शून्य है?",
    options_en: ["Electron", "Proton", "Photon", "Neutron"],
    options_hi: ["इलेक्ट्रॉन", "प्रोटॉन", "फोटॉन", "न्यूट्रॉन"],
    answer_en: "Photon",
    answer_hi: "फोटॉन",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Magnetic field inside a solenoid is?",
    question_hi: "परिनालिका के अंदर चुंबकीय क्षेत्र है?",
    options_en: ["Zero", "Uniform", "Increasing", "Non-uniform"],
    options_hi: ["शून्य", "एकसमान", "बढ़ता हुआ", "असमान"],
    answer_en: "Uniform",
    answer_hi: "एकसमान",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which is the unit of electric flux?",
    question_hi: "विद्युत फ्लक्स की इकाई कौन सी है?",
    options_en: ["N/C", "C/m²", "Volt", "N m²/C"],
    options_hi: ["N/C", "C/m²", "वोल्ट", "N m²/C"],
    answer_en: "N m²/C",
    answer_hi: "N m²/C",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "A wire of resistance 5 Ω is doubled in length. New resistance?",
    question_hi: "5 Ω प्रतिरोध के एक तार की लंबाई दोगुनी कर दी जाती है। नया प्रतिरोध?",
    options_en: ["5 Ω", "10 Ω", "20 Ω", "2.5 Ω"],
    options_hi: ["5 Ω", "10 Ω", "20 Ω", "2.5 Ω"],
    answer_en: "20 Ω",
    answer_hi: "20 Ω",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "If wavelength doubles, frequency becomes?",
    question_hi: "यदि तरंगदैर्ध्य दोगुनी हो जाती है, तो आवृत्ति हो जाती है?",
    options_en: ["Four times", "Half", "Double", "No change"],
    options_hi: ["चार गुना", "आधा", "दोगुना", "कोई परिवर्तन नहीं"],
    answer_en: "Half",
    answer_hi: "आधा",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "The work done by centripetal force is?",
    question_hi: "अभिकेंद्री बल द्वारा किया गया कार्य है?",
    options_en: ["Positive", "Negative", "Zero", "Constant"],
    options_hi: ["धनात्मक", "ऋणात्मक", "शून्य", "स्थिर"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which of these is NOT a unit of energy?",
    question_hi: "इनमें से कौन सी ऊर्जा की इकाई नहीं है?",
    options_en: ["Calorie", "Joule", "eV", "Weber"],
    options_hi: ["कैलोरी", "जूल", "eV", "वेबर"],
    answer_en: "Weber",
    answer_hi: "वेबर",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Unit of surface tension?",
    question_hi: "पृष्ठ तनाव की इकाई?",
    options_en: ["N/m", "N/m²", "J", "Pa"],
    options_hi: ["N/m", "N/m²", "J", "Pa"],
    answer_en: "N/m",
    answer_hi: "N/m",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Moment of inertia depends on?",
    question_hi: "जड़त्व आघूर्ण निर्भर करता है?",
    options_en: ["Mass only", "Axis of rotation", "Velocity", "Time"],
    options_hi: ["केवल द्रव्यमान", "घूर्णन अक्ष", "वेग", "समय"],
    answer_en: "Axis of rotation",
    answer_hi: "घूर्णन अक्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "A body of mass 3 kg moves with speed 4 m/s. Momentum?",
    question_hi: "3 kg द्रव्यमान का एक पिंड 4 m/s की चाल से चलता है। संवेग?",
    options_en: ["3 kgm/s", "7 kgm/s", "12 kgm/s", "4 kgm/s"],
    options_hi: ["3 kgm/s", "7 kgm/s", "12 kgm/s", "4 kgm/s"],
    answer_en: "12 kgm/s",
    answer_hi: "12 kgm/s",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which EM wave is used in cooking?",
    question_hi: "किस विद्युत चुम्बकीय तरंग का उपयोग खाना पकाने में होता है?",
    options_en: ["Microwave", "UV rays", "Gamma rays", "Infrared"],
    options_hi: ["माइक्रोवेव", "पराबैंगनी किरणें", "गामा किरणें", "अवरक्त"],
    answer_en: "Microwave",
    answer_hi: "माइक्रोवेव",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Refractive index depends on?",
    question_hi: "अपवर्तनांक निर्भर करता है?",
    options_en: ["Wavelength", "Intensity", "Amplitude", "Speed"],
    options_hi: ["तरंगदैर्ध्य", "तीव्रता", "आयाम", "गति"],
    answer_en: "Wavelength",
    answer_hi: "तरंगदैर्ध्य",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Critical angle is associated with?",
    question_hi: "क्रांतिक कोण किससे संबंधित है?",
    options_en: ["Reflection", "Refraction", "Total internal reflection", "Diffraction"],
    options_hi: ["परावर्तन", "अपवर्तन", "पूर्ण आंतरिक परावर्तन", "विवर्तन"],
    answer_en: "Total internal reflection",
    answer_hi: "पूर्ण आंतरिक परावर्तन",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Resistance is inversely proportional to?",
    question_hi: "प्रतिरोध किसके व्युत्क्रमानुपाती होता है?",
    options_en: ["Length", "Area", "Temperature", "Voltage"],
    options_hi: ["लंबाई", "क्षेत्रफल", "तापमान", "वोल्टेज"],
    answer_en: "Area",
    answer_hi: "क्षेत्रफल",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Unit of electric potential?",
    question_hi: "विद्युत विभव की इकाई?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलॉम", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Volt",
    answer_hi: "वोल्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "A 2 A current flows for 5 s. Charge transferred?",
    question_hi: "2 A धारा 5 s के लिए प्रवाहित होती है। स्थानांतरित आवेश?",
    options_en: ["5 C", "10 C", "12 C", "7 C"],
    options_hi: ["5 C", "10 C", "12 C", "7 C"],
    answer_en: "10 C",
    answer_hi: "10 C",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which particle has negative charge?",
    question_hi: "किस कण पर ऋणात्मक आवेश होता है?",
    options_en: ["Proton", "Neutron", "Electron", "Alpha particle"],
    options_hi: ["प्रोटॉन", "न्यूट्रॉन", "इलेक्ट्रॉन", "अल्फा कण"],
    answer_en: "Electron",
    answer_hi: "इलेक्ट्रॉन",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which law gives induced emf?",
    question_hi: "कौन सा नियम प्रेरित विद्युत वाहक बल देता है?",
    options_en: ["Faraday's law", "Gauss law", "Coulomb's law", "Ampere's law"],
    options_hi: ["फैराडे का नियम", "गॉस का नियम", "कूलॉम का नियम", "एम्पियर का नियम"],
    answer_en: "Faraday's law",
    answer_hi: "फैराडे का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Sound travels fastest in?",
    question_hi: "ध्वनि सबसे तेज चलती है?",
    options_en: ["Air", "Water", "Vacuum", "Steel"],
    options_hi: ["वायु", "जल", "निर्वात", "स्टील"],
    answer_en: "Steel",
    answer_hi: "स्टील",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "For SHM, acceleration is maximum at?",
    question_hi: "सरल आवर्त गति में, त्वरण अधिकतम होता है?",
    options_en: ["Mean position", "Extreme position", "Both", "None"],
    options_hi: ["माध्य स्थिति", "चरम स्थिति", "दोनों", "कोई नहीं"],
    answer_en: "Extreme position",
    answer_hi: "चरम स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "A ball thrown up reaches 20 m height. Initial velocity? (g=10)",
    question_hi: "ऊपर फेंकी गई गेंद 20 m ऊंचाई तक पहुँचती है। प्रारंभिक वेग? (g=10)",
    options_en: ["10 m/s", "20 m/s", "√200", "20√2"],
    options_hi: ["10 m/s", "20 m/s", "√200", "20√2"],
    answer_en: "20 m/s",
    answer_hi: "20 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Bohr radius corresponds to which orbit?",
    question_hi: "बोहर त्रिज्या किस कक्षा से संबंधित है?",
    options_en: ["n = 2", "n = 3", "n = 1", "n = 0"],
    options_hi: ["n = 2", "n = 3", "n = 1", "n = 0"],
    answer_en: "n = 1",
    answer_hi: "n = 1",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Thermal conductivity is highest for?",
    question_hi: "तापीय चालकता किसके लिए सबसे अधिक है?",
    options_en: ["Air", "Glass", "Diamond", "Copper"],
    options_hi: ["वायु", "कांच", "हीरा", "तांबा"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Unit of capacitance?",
    question_hi: "धारिता की इकाई?",
    options_en: ["Volt", "Farad", "Henry", "Newton"],
    options_hi: ["वोल्ट", "फैरड", "हेनरी", "न्यूटन"],
    answer_en: "Farad",
    answer_hi: "फैरड",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "If force is constant and distance doubles, work done?",
    question_hi: "यदि बल स्थिर है और दूरी दोगुनी हो जाती है, तो किया गया कार्य?",
    options_en: ["Half", "Double", "Constant", "Zero"],
    options_hi: ["आधा", "दोगुना", "स्थिर", "शून्य"],
    answer_en: "Double",
    answer_hi: "दोगुना",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "A 2 kg mass has momentum 8 kgm/s. Its speed?",
    question_hi: "2 kg द्रव्यमान का संवेग 8 kgm/s है। इसकी चाल?",
    options_en: ["2 m/s", "4 m/s", "16 m/s", "8 m/s"],
    options_hi: ["2 m/s", "4 m/s", "16 m/s", "8 m/s"],
    answer_en: "4 m/s",
    answer_hi: "4 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which is NOT a unit of pressure?",
    question_hi: "कौन सी दाब की इकाई नहीं है?",
    options_en: ["Pascal", "Bar", "ATM", "Joule"],
    options_hi: ["पास्कल", "बार", "ATM", "जूल"],
    answer_en: "Joule",
    answer_hi: "जूल",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which quantity is conserved in elastic collision?",
    question_hi: "प्रत्यास्थ संघट्ट में कौन सी राशि संरक्षित रहती है?",
    options_en: ["Momentum", "Kinetic energy", "Both", "Only mass"],
    options_hi: ["संवेग", "गतिज ऊर्जा", "दोनों", "केवल द्रव्यमान"],
    answer_en: "Both",
    answer_hi: "दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "The radius of curvature of plane mirror is?",
    question_hi: "समतल दर्पण की वक्रता त्रिज्या है?",
    options_en: ["0", "∞", "1", "2"],
    options_hi: ["0", "∞", "1", "2"],
    answer_en: "∞",
    answer_hi: "∞",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "A 60 W bulb glows for 2 hours. Energy used?",
    question_hi: "एक 60 W बल्ब 2 घंटे तक जलता है। उपयोग की गई ऊर्जा?",
    options_en: ["120 J", "432000 J", "7200 J", "360 J"],
    options_hi: ["120 J", "432000 J", "7200 J", "360 J"],
    answer_en: "432000 J",
    answer_hi: "432000 J",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which of the following is paramagnetic?",
    question_hi: "निम्नलिखित में से कौन सा अनुचुंबकीय है?",
    options_en: ["Water", "Bismuth", "CO₂", "O₂"],
    options_hi: ["जल", "बिस्मथ", "CO₂", "O₂"],
    answer_en: "O₂",
    answer_hi: "O₂",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Dimension of charge is?",
    question_hi: "आवेश का विमीय सूत्र है?",
    options_en: ["IT", "MLT⁻²", "A²T", "I²T"],
    options_hi: ["IT", "MLT⁻²", "A²T", "I²T"],
    answer_en: "IT",
    answer_hi: "IT",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which nuclear particle has highest penetration?",
    question_hi: "किस नाभिकीय कण की भेदन क्षमता सबसे अधिक है?",
    options_en: ["Alpha", "Beta", "Gamma", "Neutron"],
    options_hi: ["अल्फा", "बीटा", "गामा", "न्यूट्रॉन"],
    answer_en: "Gamma",
    answer_hi: "गामा",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Torque = ?",
    question_hi: "बल आघूर्ण = ?",
    options_en: ["F×d", "F/v", "m×a", "F×t"],
    options_hi: ["F×d", "F/v", "m×a", "F×t"],
    answer_en: "F×d",
    answer_hi: "F×d",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "If velocity tripled, kinetic energy becomes?",
    question_hi: "यदि वेग तीन गुना हो जाता है, तो गतिज ऊर्जा हो जाती है?",
    options_en: ["3 times", "9 times", "6 times", "12 times"],
    options_hi: ["3 गुना", "9 गुना", "6 गुना", "12 गुना"],
    answer_en: "9 times",
    answer_hi: "9 गुना",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Speed of light in vacuum?",
    question_hi: "निर्वात में प्रकाश की गति?",
    options_en: ["3×10⁶", "3×10⁸", "3×10¹⁰", "3×10³"],
    options_hi: ["3×10⁶", "3×10⁸", "3×10¹⁰", "3×10³"],
    answer_en: "3×10⁸",
    answer_hi: "3×10⁸",
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