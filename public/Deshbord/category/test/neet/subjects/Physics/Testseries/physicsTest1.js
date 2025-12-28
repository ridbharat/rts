const questions = [
  {
    num: 1,
    question_en: "What is the speed of light in vacuum?",
    question_hi: "निर्वात में प्रकाश की गति कितनी होती है?",
    options_en: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10⁴ m/s"],
    options_hi: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10⁴ m/s"],
    answer_en: "3 × 10⁸ m/s",
    answer_hi: "3 × 10⁸ m/s",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "Which law gives the relationship between voltage, current and resistance?",
    question_hi: "कौन-सा नियम वोल्टेज, करंट और रेजिस्टेंस के बीच संबंध बताता है?",
    options_en: ["Ohm's law", "Newton's law", "Hooke's law", "Faraday's law"],
    options_hi: ["ओम का नियम", "न्यूटन का नियम", "हुक का नियम", "फैराडे का नियम"],
    answer_en: "Ohm's law",
    answer_hi: "ओम का नियम",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "Which quantity remains constant in uniform motion?",
    question_hi: "समान गति में कौन-सी राशि स्थिर रहती है?",
    options_en: ["Speed", "Acceleration", "Force", "Momentum"],
    options_hi: ["गति", "त्वरण", "बल", "संवेग"],
    answer_en: "Speed",
    answer_hi: "गति",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "The unit of electric field is?",
    question_hi: "विद्युत क्षेत्र की इकाई क्या है?",
    options_en: ["N/C", "Volt", "Ampere", "Tesla"],
    options_hi: ["N/C", "वोल्ट", "एम्पीयर", "टेस्ला"],
    answer_en: "N/C",
    answer_hi: "N/C",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "Which law explains the bending of light?",
    question_hi: "कौन-सा नियम प्रकाश के मुड़ने को समझाता है?",
    options_en: ["Snell's law", "Ohm's law", "Boyle's law", "Coulomb's law"],
    options_hi: ["स्नेल का नियम", "ओम का नियम", "बॉयल का नियम", "कूलॉम्ब का नियम"],
    answer_en: "Snell's law",
    answer_hi: "स्नेल का नियम",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "Which has the maximum speed in a medium?",
    question_hi: "किसकी गति किसी माध्यम में सबसे अधिक होती है?",
    options_en: ["Light", "Sound", "Water waves", "Mechanical waves"],
    options_hi: ["प्रकाश", "ध्वनि", "जल तरंगें", "यांत्रिक तरंगें"],
    answer_en: "Light",
    answer_hi: "प्रकाश",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "Electric current is measured in?",
    question_hi: "विद्युत धारा किसमें मापी जाती है?",
    options_en: ["Ampere", "Volt", "Ohm", "Coulomb"],
    options_hi: ["एम्पीयर", "वोल्ट", "ओम", "कूलॉम्ब"],
    answer_en: "Ampere",
    answer_hi: "एम्पीयर",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which particle has no charge?",
    question_hi: "किस कण पर कोई आवेश नहीं होता?",
    options_en: ["Neutron", "Proton", "Electron", "Positron"],
    options_hi: ["न्यूट्रॉन", "प्रोटॉन", "इलेक्ट्रॉन", "पॉज़िट्रॉन"],
    answer_en: "Neutron",
    answer_hi: "न्यूट्रॉन",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "What is the SI unit of pressure?",
    question_hi: "दबाव की SI इकाई क्या है?",
    options_en: ["Pascal", "Newton", "Joule", "Watt"],
    options_hi: ["पास्कल", "न्यूटन", "जूल", "वाट"],
    answer_en: "Pascal",
    answer_hi: "पास्कल",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "Which device converts electrical energy to mechanical energy?",
    question_hi: "कौन-सा उपकरण विद्युत ऊर्जा को यांत्रिक ऊर्जा में बदलता है?",
    options_en: ["Motor", "Generator", "Transformer", "Battery"],
    options_hi: ["मोटर", "जनरेटर", "ट्रांसफॉर्मर", "बैटरी"],
    answer_en: "Motor",
    answer_hi: "मोटर",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which device converts mechanical energy to electrical energy?",
    question_hi: "कौन-सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलता है?",
    options_en: ["Generator", "Motor", "Heater", "Battery"],
    options_hi: ["जनरेटर", "मोटर", "हीटर", "बैटरी"],
    answer_en: "Generator",
    answer_hi: "जनरेटर",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which physical quantity is measured in Hertz?",
    question_hi: "हर्ट्ज किस भौतिक राशि की इकाई है?",
    options_en: ["Frequency", "Speed", "Force", "Pressure"],
    options_hi: ["आवृत्ति", "गति", "बल", "दबाव"],
    answer_en: "Frequency",
    answer_hi: "आवृत्ति",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "Which force acts towards the center in circular motion?",
    question_hi: "वृत्तीय गति में केंद्र की ओर कौन-सा बल कार्य करता है?",
    options_en: ["Centripetal force", "Centrifugal force", "Friction", "Gravity"],
    options_hi: ["केन्द्राभिमुख बल", "केन्द्रातिगामी बल", "घर्षण", "गुरुत्वाकर्षण"],
    answer_en: "Centripetal force",
    answer_hi: "केन्द्राभिमुख बल",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "What is the SI unit of power?",
    question_hi: "शक्ति की SI इकाई क्या है?",
    options_en: ["Watt", "Joule", "Newton", "Volt"],
    options_hi: ["वाट", "जूल", "न्यूटन", "वोल्ट"],
    answer_en: "Watt",
    answer_hi: "वाट",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "Which quantity is Work?",
    question_hi: "कार्य किस राशि को दर्शाता है?",
    options_en: ["Force × Distance", "Mass × Velocity", "Force × Time", "Pressure × Area"],
    options_hi: ["बल × दूरी", "द्रव्यमान × वेग", "बल × समय", "दबाव × क्षेत्रफल"],
    answer_en: "Force × Distance",
    answer_hi: "बल × दूरी",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which wave can travel through vacuum?",
    question_hi: "कौन-सी तरंग निर्वात में चल सकती है?",
    options_en: ["Light wave", "Sound wave", "Water wave", "Mechanical wave"],
    options_hi: ["प्रकाश तरंग", "ध्वनि तरंग", "जल तरंग", "यांत्रिक तरंग"],
    answer_en: "Light wave",
    answer_hi: "प्रकाश तरंग",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "The unit of magnetic field is?",
    question_hi: "चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Weber", "Henry", "Ohm"],
    options_hi: ["टेस्ला", "वेबर", "हेनरी", "ओम"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "Which quantity is measured in Coulomb?",
    question_hi: "कूलॉम्ब किस राशि की इकाई है?",
    options_en: ["Charge", "Current", "Resistance", "Power"],
    options_hi: ["आवेश", "धारा", "प्रतिरोध", "शक्ति"],
    answer_en: "Charge",
    answer_hi: "आवेश",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "Which type of lens is used to correct myopia?",
    question_hi: "मायोपिया (निकट दृष्टि दोष) को सुधारने के लिए कौन-सा लेंस उपयोग होता है?",
    options_en: ["Concave lens", "Convex lens", "Cylindrical lens", "Plano lens"],
    options_hi: ["अवतल लेंस", "उत्तल लेंस", "सिलिंड्रिकल लेंस", "प्लानो लेंस"],
    answer_en: "Concave lens",
    answer_hi: "अवतल लेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which type of lens is used to correct hypermetropia?",
    question_hi: "हाइपरमेट्रोपिया (दूर दृष्टि दोष) को सुधारने के लिए कौन-सा लेंस उपयोग होता है?",
    options_en: ["Convex lens", "Concave lens", "Bi-concave lens", "Cylindrical lens"],
    options_hi: ["उत्तल लेंस", "अवतल लेंस", "बाई-अवतल लेंस", "सिलिंड्रिकल लेंस"],
    answer_en: "Convex lens",
    answer_hi: "उत्तल लेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "The unit of force constant of spring is?",
    question_hi: "स्प्रिंग के फोर्स कॉन्स्टेंट की इकाई क्या है?",
    options_en: ["N/m", "N", "J", "W"],
    options_hi: ["N/m", "N", "J", "W"],
    answer_en: "N/m",
    answer_hi: "N/m",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "Which gas causes greenhouse effect?",
    question_hi: "ग्रीनहाउस प्रभाव किस गैस की वजह से होता है?",
    options_en: ["CO₂", "O₂", "N₂", "He"],
    options_hi: ["CO₂", "O₂", "N₂", "He"],
    answer_en: "CO₂",
    answer_hi: "CO₂",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "Which law explains the relationship between force and acceleration?",
    question_hi: "बल और त्वरण के संबंध को कौन-सा नियम बताता है?",
    options_en: ["Newton's second law", "Newton's first law", "Newton's third law", "Kepler's law"],
    options_hi: ["न्यूटन का दूसरा नियम", "न्यूटन का पहला नियम", "न्यूटन का तीसरा नियम", "केप्लर का नियम"],
    answer_en: "Newton's second law",
    answer_hi: "न्यूटन का दूसरा नियम",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "Which law explains action and reaction?",
    question_hi: "क्रिया और प्रतिक्रिया को कौन-सा नियम बताता है?",
    options_en: ["Newton's third law", "Newton's first law", "Coulomb's law", "Archimedes' principle"],
    options_hi: ["न्यूटन का तीसरा नियम", "न्यूटन का पहला नियम", "कूलॉम्ब का नियम", "आर्किमिडीज़ सिद्धांत"],
    answer_en: "Newton's third law",
    answer_hi: "न्यूटन का तीसरा नियम",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "Which quantity is measured in Ohm?",
    question_hi: "ओम किस राशि की इकाई है?",
    options_en: ["Resistance", "Current", "Power", "Velocity"],
    options_hi: ["प्रतिरोध", "धारा", "शक्ति", "वेग"],
    answer_en: "Resistance",
    answer_hi: "प्रतिरोध",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "What is the SI unit of frequency?",
    question_hi: "आवृत्ति की SI इकाई क्या है?",
    options_en: ["Hertz", "Watt", "Volt", "Newton"],
    options_hi: ["हर्ट्ज़", "वाट", "वोल्ट", "न्यूटन"],
    answer_en: "Hertz",
    answer_hi: "हर्ट्ज़",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "Which is the weakest force in nature?",
    question_hi: "प्रकृति में सबसे कमजोर बल कौन-सा है?",
    options_en: ["Gravitational force", "Electromagnetic force", "Strong force", "Weak force"],
    options_hi: ["गुरुत्वाकर्षण बल", "वैद्युत-चुंबकीय बल", "सशक्त बल", "दुर्बल बल"],
    answer_en: "Gravitational force",
    answer_hi: "गुरुत्वाकर्षण बल",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "Which is the strongest force?",
    question_hi: "सबसे सशक्त बल कौन-सा है?",
    options_en: ["Strong nuclear force", "Electromagnetic force", "Gravitational force", "Weak force"],
    options_hi: ["सशक्त नाभिकीय बल", "वैद्युत-चुंबकीय बल", "गुरुत्वाकर्षण बल", "दुर्बल बल"],
    answer_en: "Strong nuclear force",
    answer_hi: "सशक्त नाभिकीय बल",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "Which energy is stored in a stretched string?",
    question_hi: "खींची हुई डोरी में कौन-सी ऊर्जा संग्रहीत होती है?",
    options_en: ["Potential energy", "Kinetic energy", "Heat energy", "Chemical energy"],
    options_hi: ["स्थितिज ऊर्जा", "गतिज ऊर्जा", "ऊष्मा ऊर्जा", "रासायनिक ऊर्जा"],
    answer_en: "Potential energy",
    answer_hi: "स्थितिज ऊर्जा",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "Which form of energy is produced by friction?",
    question_hi: "घर्षण से कौन-सी ऊर्जा उत्पन्न होती है?",
    options_en: ["Heat", "Light", "Sound", "Electrical"],
    options_hi: ["ऊष्मा", "प्रकाश", "ध्वनि", "विद्युत"],
    answer_en: "Heat",
    answer_hi: "ऊष्मा",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which phenomenon explains the blue color of sky?",
    question_hi: "आसमान का नीला रंग किस घटना से समझाया जाता है?",
    options_en: ["Scattering", "Reflection", "Refraction", "Dispersion"],
    options_hi: ["प्रकीर्णन", "परावर्तन", "अपवर्तन", "प्रकीर्णन"],
    answer_en: "Scattering",
    answer_hi: "प्रकीर्णन",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "Which phenomenon forms a rainbow?",
    question_hi: "इंद्रधनुष किस घटना से बनता है?",
    options_en: ["Dispersion", "Reflection", "Diffraction", "Interference"],
    options_hi: ["प्रकीर्णन", "परावर्तन", "व्यतिकरण", "हस्तक्षेप"],
    answer_en: "Dispersion",
    answer_hi: "प्रकीर्णन",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "Which ray has the maximum penetrating power?",
    question_hi: "किस किरण की अभेद्यता शक्ति सबसे अधिक होती है?",
    options_en: ["Gamma rays", "X-rays", "UV rays", "Beta rays"],
    options_hi: ["गामा किरणें", "एक्स-किरणें", "यूवी किरणें", "बीटा किरणें"],
    answer_en: "Gamma rays",
    answer_hi: "गामा किरणें",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "The bending of light around obstacles is called?",
    question_hi: "बाधाओं के आसपास प्रकाश का मुड़ना क्या कहलाता है?",
    options_en: ["Diffraction", "Refraction", "Reflection", "Interference"],
    options_hi: ["व्यतिकरण", "अपवर्तन", "परावर्तन", "हस्तक्षेप"],
    answer_en: "Diffraction",
    answer_hi: "व्यतिकरण",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "Which device increases or decreases AC voltage?",
    question_hi: "कौन-सा उपकरण AC वोल्टेज को बढ़ाता या घटाता है?",
    options_en: ["Transformer", "Generator", "Motor", "Rectifier"],
    options_hi: ["ट्रांसफॉर्मर", "जनरेटर", "मोटर", "रेक्टिफ़ायर"],
    answer_en: "Transformer",
    answer_hi: "ट्रांसफॉर्मर",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which device converts AC to DC?",
    question_hi: "कौन-सा उपकरण AC को DC में बदलता है?",
    options_en: ["Rectifier", "Transformer", "Generator", "Motor"],
    options_hi: ["रेक्टिफ़ायर", "ट्रांसफॉर्मर", "जनरेटर", "मोटर"],
    answer_en: "Rectifier",
    answer_hi: "रेक्टिफ़ायर",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "Unit of gravitational constant (G) is?",
    question_hi: "गुरुत्वाकर्षण नियतांक (G) की इकाई क्या है?",
    options_en: ["N m²/kg²", "N/kg", "m/s²", "J/kg"],
    options_hi: ["N m²/kg²", "N/kg", "m/s²", "J/kg"],
    answer_en: "N m²/kg²",
    answer_hi: "N m²/kg²",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "Acceleration due to gravity is?",
    question_hi: "गुरुत्वजनित त्वरण कितना होता है?",
    options_en: ["9.8 m/s²", "9.8 m/s", "10 m/s", "10 m/s²"],
    options_hi: ["9.8 m/s²", "9.8 m/s", "10 m/s", "10 m/s²"],
    answer_en: "9.8 m/s²",
    answer_hi: "9.8 m/s²",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "Which quantity is measured in Henry?",
    question_hi: "हेनरी किस राशि की इकाई है?",
    options_en: ["Inductance", "Capacitance", "Resistance", "Frequency"],
    options_hi: ["इंडक्टेंस", "कैपेसिटेंस", "रेजिस्टेंस", "आवृत्ति"],
    answer_en: "Inductance",
    answer_hi: "इंडक्टेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "Capacitance is measured in?",
    question_hi: "कैपेसिटेंस किसमें मापा जाता है?",
    options_en: ["Farad", "Henry", "Weber", "Tesla"],
    options_hi: ["फैरेड", "हेनरी", "वेबर", "टेस्ला"],
    answer_en: "Farad",
    answer_hi: "फैरेड",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Unit of impulse is?",
    question_hi: "आवेग की इकाई क्या है?",
    options_en: ["N·s", "Joule", "Watt", "Volt"],
    options_hi: ["N·s", "जूल", "वाट", "वोल्ट"],
    answer_en: "N·s",
    answer_hi: "N·s",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "Which physical quantity is measured in lumen?",
    question_hi: "ल्यूमेन किस राशि की इकाई है?",
    options_en: ["Luminous flux", "Power", "Work", "Energy"],
    options_hi: ["प्रकाश फ्लक्स", "शक्ति", "कार्य", "ऊर्जा"],
    answer_en: "Luminous flux",
    answer_hi: "प्रकाश फ्लक्स",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "Which mirror is used in vehicle headlights?",
    question_hi: "वाहनों की हेडलाइट्स में कौन-सा दर्पण उपयोग होता है?",
    options_en: ["Concave mirror", "Convex mirror", "Plane mirror", "Parabolic mirror"],
    options_hi: ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "पैराबोलिक दर्पण"],
    answer_en: "Concave mirror",
    answer_hi: "अवतल दर्पण",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "Which lens is used in magnifying glass?",
    question_hi: "मैग्निफाइंग ग्लास में कौन-सा लेंस उपयोग किया जाता है?",
    options_en: ["Convex lens", "Concave lens", "Plano lens", "Cylindrical lens"],
    options_hi: ["उत्तल लेंस", "अवतल लेंस", "प्लानो लेंस", "सिलिंड्रिकल लेंस"],
    answer_en: "Convex lens",
    answer_hi: "उत्तल लेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "Which wave requires a medium?",
    question_hi: "किस तरंग को माध्यम की आवश्यकता होती है?",
    options_en: ["Sound wave", "Light wave", "Radio wave", "Gamma rays"],
    options_hi: ["ध्वनि तरंग", "प्रकाश तरंग", "रेडियो तरंग", "गामा किरणें"],
    answer_en: "Sound wave",
    answer_hi: "ध्वनि तरंग",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which force is responsible for tides?",
    question_hi: "ज्वार-भाटा किस बल के कारण उत्पन्न होते हैं?",
    options_en: ["Gravitational force", "Friction", "Magnetic force", "Electrostatic force"],
    options_hi: ["गुरुत्वाकर्षण बल", "घर्षण", "चुंबकीय बल", "वैद्युतस्थैतिक बल"],
    answer_en: "Gravitational force",
    answer_hi: "गुरुत्वाकर्षण बल",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "Which device measures atmospheric pressure?",
    question_hi: "वायुमंडलीय दाब को कौन-सा उपकरण मापता है?",
    options_en: ["Barometer", "Hygrometer", "Anemometer", "Thermometer"],
    options_hi: ["बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर", "थर्मामीटर"],
    answer_en: "Barometer",
    answer_hi: "बैरोमीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "Which device measures wind speed?",
    question_hi: "पवन गति को कौन-सा उपकरण मापता है?",
    options_en: ["Anemometer", "Barometer", "Ammeter", "Hygrometer"],
    options_hi: ["एनीमोमीटर", "बैरोमीटर", "एमीटर", "हाइग्रोमीटर"],
    answer_en: "Anemometer",
    answer_hi: "एनीमोमीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "The unit of electric potential is?",
    question_hi: "विद्युत विभव की इकाई क्या है?",
    options_en: ["Volt", "Watt", "Coulomb", "Ampere"],
    options_hi: ["वोल्ट", "वाट", "कूलॉम्ब", "एम्पीयर"],
    answer_en: "Volt",
    answer_hi: "वोल्ट",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "Which physical quantity is measured in Joule per second?",
    question_hi: "जूल प्रति सेकंड किस राशि की इकाई है?",
    options_en: ["Power", "Work", "Energy", "Force"],
    options_hi: ["शक्ति", "कार्य", "ऊर्जा", "बल"],
    answer_en: "Power",
    answer_hi: "शक्ति",
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