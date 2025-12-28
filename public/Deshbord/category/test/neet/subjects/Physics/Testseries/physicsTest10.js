
const questions = [
  {
    "num": 1,
    "question_en": "A train increases its speed from 10 m/s to 30 m/s in 5 s. What is the acceleration?",
    "question_hi": "एक रेलगाड़ी 10 m/s से 30 m/s तक 5 s में अपनी चाल बढ़ाती है। त्वरण क्या है?",
    "options_en": ["2 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
    "options_hi": ["2 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
    "answer_en": "4 m/s²",
    "answer_hi": "4 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Impulse is equal to:",
    "question_hi": "आवेग बराबर होता है:",
    "options_en": ["Change in momentum", "Rate of change of momentum", "Force × velocity", "Energy"],
    "options_hi": ["संवेग में परिवर्तन", "संवेग परिवर्तन की दर", "बल × वेग", "ऊर्जा"],
    "answer_en": "Change in momentum",
    "answer_hi": "संवेग में परिवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If velocity becomes double, momentum becomes:",
    "question_hi": "यदि वेग दोगुना हो जाए, तो संवेग हो जाता है:",
    "options_en": ["Half", "Same", "Double", "Four times"],
    "options_hi": ["आधा", "समान", "दोगुना", "चार गुना"],
    "answer_en": "Double",
    "answer_hi": "दोगुना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Unit of work:",
    "question_hi": "कार्य की इकाई:",
    "options_en": ["Newton", "Joule", "Pascal", "Watt"],
    "options_hi": ["न्यूटन", "जूल", "पास्कल", "वाट"],
    "answer_en": "Joule",
    "answer_hi": "जूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "A 50 N force moves a body by 4 m. Work done =",
    "question_hi": "50 N बल एक पिंड को 4 m विस्थापित करता है। किया गया कार्य =",
    "options_en": ["100 J", "150 J", "200 J", "250 J"],
    "options_hi": ["100 J", "150 J", "200 J", "250 J"],
    "answer_en": "200 J",
    "answer_hi": "200 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Power is rate of:",
    "question_hi": "शक्ति दर है:",
    "options_en": ["Energy", "Force", "Work", "Momentum"],
    "options_hi": ["ऊर्जा", "बल", "कार्य", "संवेग"],
    "answer_en": "Work",
    "answer_hi": "कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Two resistances 4Ω and 6Ω in series. Equivalent =",
    "question_hi": "4Ω और 6Ω के दो प्रतिरोध श्रृंखला में। तुल्य =",
    "options_en": ["2Ω", "4Ω", "6Ω", "10Ω"],
    "options_hi": ["2Ω", "4Ω", "6Ω", "10Ω"],
    "answer_en": "10Ω",
    "answer_hi": "10Ω",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Two resistances 4Ω and 6Ω in parallel. Equivalent =",
    "question_hi": "4Ω और 6Ω के दो प्रतिरोध समानांतर में। तुल्य =",
    "options_en": ["4Ω", "2.4Ω", "5Ω", "10Ω"],
    "options_hi": ["4Ω", "2.4Ω", "5Ω", "10Ω"],
    "answer_en": "2.4Ω",
    "answer_hi": "2.4Ω",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Acceleration due to gravity at centre of Earth =",
    "question_hi": "पृथ्वी के केंद्र पर गुरुत्वीय त्वरण =",
    "options_en": ["g", "g/2", "2g", "0"],
    "options_hi": ["g", "g/2", "2g", "0"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "A force of 10 N acts on 2 kg body. Acceleration =",
    "question_hi": "10 N बल 2 kg पिंड पर कार्य करता है। त्वरण =",
    "options_en": ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
    "options_hi": ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
    "answer_en": "5 m/s²",
    "answer_hi": "5 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "SI unit of density:",
    "question_hi": "घनत्व का SI मात्रक:",
    "options_en": ["kg", "kg/m²", "kg/m³", "g/cm³"],
    "options_hi": ["kg", "kg/m²", "kg/m³", "g/cm³"],
    "answer_en": "kg/m³",
    "answer_hi": "kg/m³",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "If temperature increases, resistance of metal:",
    "question_hi": "यदि तापमान बढ़ता है, तो धातु का प्रतिरोध:",
    "options_en": ["Increases", "Decreases", "Same", "Becomes zero"],
    "options_hi": ["बढ़ता है", "घटता है", "समान", "शून्य हो जाता है"],
    "answer_en": "Increases",
    "answer_hi": "बढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Frequency × wavelength =",
    "question_hi": "आवृत्ति × तरंगदैर्ध्य =",
    "options_en": ["Speed", "Energy", "Force", "Power"],
    "options_hi": ["चाल", "ऊर्जा", "बल", "शक्ति"],
    "answer_en": "Speed",
    "answer_hi": "चाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Refractive index is:",
    "question_hi": "अपवर्तनांक है:",
    "options_en": ["v/c", "c/v", "f×λ", "P/F"],
    "options_hi": ["v/c", "c/v", "f×λ", "P/F"],
    "answer_en": "c/v",
    "answer_hi": "c/v",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "A lens forms erect and virtual image. It is:",
    "question_hi": "एक लेंस सीधा और आभासी प्रतिबिम्ब बनाता है। यह है:",
    "options_en": ["Concave lens", "Convex lens", "Cylindrical", "None"],
    "options_hi": ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार", "कोई नहीं"],
    "answer_en": "Concave lens",
    "answer_hi": "अवतल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "1 coulomb is equal to how many electrons?",
    "question_hi": "1 कूलम्ब कितने इलेक्ट्रॉनों के बराबर है?",
    "options_en": ["6.25×10¹⁷", "6.25×10¹⁸", "6.25×10¹⁹", "6.25×10²⁰"],
    "options_hi": ["6.25×10¹⁷", "6.25×10¹⁸", "6.25×10¹⁹", "6.25×10²⁰"],
    "answer_en": "6.25×10¹⁸",
    "answer_hi": "6.25×10¹⁸",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "SI unit of electric field:",
    "question_hi": "विद्युत क्षेत्र का SI मात्रक:",
    "options_en": ["J/C", "N/C", "N·m", "C"],
    "options_hi": ["J/C", "N/C", "N·m", "C"],
    "answer_en": "N/C",
    "answer_hi": "N/C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Current is flow of:",
    "question_hi": "धारा प्रवाह है:",
    "options_en": ["Protons", "Electrons", "Neutrons", "Photons"],
    "options_hi": ["प्रोटॉन", "इलेक्ट्रॉन", "न्यूट्रॉन", "फोटॉन"],
    "answer_en": "Electrons",
    "answer_hi": "इलेक्ट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Magnetic field inside a solenoid is:",
    "question_hi": "परिनालिका के अंदर चुंबकीय क्षेत्र होता है:",
    "options_en": ["Zero", "Strong", "Weak", "Irregular"],
    "options_hi": ["शून्य", "प्रबल", "दुर्बल", "अनियमित"],
    "answer_en": "Strong",
    "answer_hi": "प्रबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "A bar magnet is cut in two halves. Pole strength:",
    "question_hi": "एक छड़ चुंबक दो हिस्सों में काटा जाता है। ध्रुव सामर्थ्य:",
    "options_en": ["Doubles", "Halves", "Same", "Zero"],
    "options_hi": ["दोगुना", "आधा", "समान", "शून्य"],
    "answer_en": "Same",
    "answer_hi": "समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "The slope of velocity-time graph gives:",
    "question_hi": "वेग-समय ग्राफ का ढलान देता है:",
    "options_en": ["Velocity", "Distance", "Acceleration", "Force"],
    "options_hi": ["वेग", "दूरी", "त्वरण", "बल"],
    "answer_en": "Acceleration",
    "answer_hi": "त्वरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The slope of displacement-time graph gives:",
    "question_hi": "विस्थापन-समय ग्राफ का ढलान देता है:",
    "options_en": ["Force", "Velocity", "Pressure", "Momentum"],
    "options_hi": ["बल", "वेग", "दाब", "संवेग"],
    "answer_en": "Velocity",
    "answer_hi": "वेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "A body thrown vertically upward has zero velocity at:",
    "question_hi": "ऊर्ध्वाधर ऊपर की ओर फेंका गया पिंड शून्य वेग रखता है:",
    "options_en": ["Start", "End", "Highest point", "Never"],
    "options_hi": ["शुरुआत", "अंत", "उच्चतम बिंदु", "कभी नहीं"],
    "answer_en": "Highest point",
    "answer_hi": "उच्चतम बिंदु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Unit of momentum:",
    "question_hi": "संवेग की इकाई:",
    "options_en": ["N", "Ns", "kg·m/s", "J"],
    "options_hi": ["N", "Ns", "kg·m/s", "J"],
    "answer_en": "kg·m/s",
    "answer_hi": "kg·m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "If mass doubled, momentum becomes:",
    "question_hi": "यदि द्रव्यमान दोगुना हो जाए, तो संवेग हो जाता है:",
    "options_en": ["Double", "Half", "Same", "Zero"],
    "options_hi": ["दोगुना", "आधा", "समान", "शून्य"],
    "answer_en": "Double",
    "answer_hi": "दोगुना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "A wave has speed 300 m/s & wavelength 3 m. Frequency =",
    "question_hi": "एक तरंग की चाल 300 m/s और तरंगदैर्ध्य 3 m है। आवृत्ति =",
    "options_en": ["50 Hz", "100 Hz", "150 Hz", "200 Hz"],
    "options_hi": ["50 Hz", "100 Hz", "150 Hz", "200 Hz"],
    "answer_en": "100 Hz",
    "answer_hi": "100 Hz",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "SI unit of surface tension:",
    "question_hi": "पृष्ठ तनाव का SI मात्रक:",
    "options_en": ["N/m", "J/m²", "N/m²", "Pa"],
    "options_hi": ["N/m", "J/m²", "N/m²", "Pa"],
    "answer_en": "N/m",
    "answer_hi": "N/m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Capacitance SI unit:",
    "question_hi": "धारिता का SI मात्रक:",
    "options_en": ["C", "F", "V", "Ω"],
    "options_hi": ["C", "F", "V", "Ω"],
    "answer_en": "F",
    "answer_hi": "F",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "A capacitor 20 µF charged to 10 V. Charge =",
    "question_hi": "एक 20 µF संधारित्र 10 V तक आवेशित है। आवेश =",
    "options_en": ["100 µC", "200 µC", "150 µC", "250 µC"],
    "options_hi": ["100 µC", "200 µC", "150 µC", "250 µC"],
    "answer_en": "200 µC",
    "answer_hi": "200 µC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which radiation has maximum penetration?",
    "question_hi": "किस विकिरण की अधिकतम भेदन क्षमता होती है?",
    "options_en": ["α", "β", "γ", "X-ray"],
    "options_hi": ["α", "β", "γ", "X-ray"],
    "answer_en": "γ",
    "answer_hi": "γ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Photoelectric effect was discovered by:",
    "question_hi": "प्रकाशविद्युत प्रभाव की खोज की थी:",
    "options_en": ["Maxwell", "Einstein", "Planck", "Hertz"],
    "options_hi": ["मैक्सवेल", "आइंस्टीन", "प्लांक", "हर्ट्ज"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is not a vector?",
    "question_hi": "कौन सी सदिश राशि नहीं है?",
    "options_en": ["Velocity", "Force", "Work", "Acceleration"],
    "options_hi": ["वेग", "बल", "कार्य", "त्वरण"],
    "answer_en": "Work",
    "answer_hi": "कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Relation between force & momentum:",
    "question_hi": "बल और संवेग के बीच संबंध:",
    "options_en": ["F = dp/dt", "F = p/t", "F = p²", "F = mv"],
    "options_hi": ["F = dp/dt", "F = p/t", "F = p²", "F = mv"],
    "answer_en": "F = dp/dt",
    "answer_hi": "F = dp/dt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "A block of mass 5 kg has weight:",
    "question_hi": "5 kg द्रव्यमान के एक ब्लॉक का भार है:",
    "options_en": ["5 N", "25 N", "49 N", "100 N"],
    "options_hi": ["5 N", "25 N", "49 N", "100 N"],
    "answer_en": "49 N",
    "answer_hi": "49 N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "A mirror always forms virtual & erect image:",
    "question_hi": "एक दर्पण हमेशा आभासी और सीधा प्रतिबिम्ब बनाता है:",
    "options_en": ["Convex mirror", "Plane mirror", "Concave mirror", "All"],
    "options_hi": ["उत्तल दर्पण", "समतल दर्पण", "अवतल दर्पण", "सभी"],
    "answer_en": "Convex mirror",
    "answer_hi": "उत्तल दर्पण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "SI unit of pressure:",
    "question_hi": "दाब का SI मात्रक:",
    "options_en": ["J", "Pa", "N", "W"],
    "options_hi": ["J", "Pa", "N", "W"],
    "answer_en": "Pa",
    "answer_hi": "Pa",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Sound cannot travel in:",
    "question_hi": "ध्वनि यात्रा नहीं कर सकती:",
    "options_en": ["Air", "Water", "Steel", "Vacuum"],
    "options_hi": ["वायु", "जल", "स्टील", "निर्वात"],
    "answer_en": "Vacuum",
    "answer_hi": "निर्वात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "If speed doubles, kinetic energy becomes:",
    "question_hi": "यदि चाल दोगुनी हो जाए, तो गतिज ऊर्जा हो जाती है:",
    "options_en": ["Double", "Triple", "Four times", "Half"],
    "options_hi": ["दोगुनी", "तीन गुनी", "चार गुनी", "आधी"],
    "answer_en": "Four times",
    "answer_hi": "चार गुनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Magnitude of displacement can be:",
    "question_hi": "विस्थापन का परिमाण हो सकता है:",
    "options_en": ["Greater than distance", "Less or equal", "Always greater", "Zero only"],
    "options_hi": ["दूरी से अधिक", "कम या बराबर", "हमेशा अधिक", "केवल शून्य"],
    "answer_en": "Less or equal",
    "answer_hi": "कम या बराबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "1 Tesla =",
    "question_hi": "1 टेस्ला =",
    "options_en": ["1 N/C", "1 N/A·m", "1 Wb/m²", "1 J"],
    "options_hi": ["1 N/C", "1 N/A·m", "1 Wb/m²", "1 J"],
    "answer_en": "1 Wb/m²",
    "answer_hi": "1 Wb/m²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "A spring constant is 200 N/m. Stretch 0.1 m force =",
    "question_hi": "एक स्प्रिंग नियतांक 200 N/m है। 0.1 m खिंचाव पर बल =",
    "options_en": ["10 N", "20 N", "30 N", "40 N"],
    "options_hi": ["10 N", "20 N", "30 N", "40 N"],
    "answer_en": "20 N",
    "answer_hi": "20 N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Escape velocity formula:",
    "question_hi": "पलायन वेग सूत्र:",
    "options_en": ["√(2gh)", "√(2GM/R)", "GMm/R²", "gR"],
    "options_hi": ["√(2gh)", "√(2GM/R)", "GMm/R²", "gR"],
    "answer_en": "√(2GM/R)",
    "answer_hi": "√(2GM/R)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Heat transfer without medium:",
    "question_hi": "बिना माध्यम के ऊष्मा स्थानांतरण:",
    "options_en": ["Conduction", "Convection", "Radiation", "Evaporation"],
    "options_hi": ["चालन", "संवहन", "विकिरण", "वाष्पीकरण"],
    "answer_en": "Radiation",
    "answer_hi": "विकिरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Time period of pendulum increases when:",
    "question_hi": "लोलक का आवर्तकाल बढ़ता है जब:",
    "options_en": ["Mass increases", "Length increases", "g increases", "Amplitude decreases"],
    "options_hi": ["द्रव्यमान बढ़ता है", "लंबाई बढ़ती है", "g बढ़ता है", "आयाम घटता है"],
    "answer_en": "Length increases",
    "answer_hi": "लंबाई बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Electron revolves around nucleus due to:",
    "question_hi": "इलेक्ट्रॉन नाभिक के चारों ओर घूमता है:",
    "options_en": ["Magnetic force", "Gravitational force", "Electrostatic force", "Nuclear force"],
    "options_hi": ["चुंबकीय बल", "गुरुत्वाकर्षण बल", "विद्युत्स्थैतिक बल", "नाभिकीय बल"],
    "answer_en": "Electrostatic force",
    "answer_hi": "विद्युत्स्थैतिक बल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "A 2 kg body moving at 5 m/s. Momentum =",
    "question_hi": "2 kg पिंड 5 m/s से चल रहा है। संवेग =",
    "options_en": ["5", "10", "15", "20"],
    "options_hi": ["5", "10", "15", "20"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Magnetic field SI unit:",
    "question_hi": "चुंबकीय क्षेत्र का SI मात्रक:",
    "options_en": ["T", "C", "A", "N"],
    "options_hi": ["T", "C", "A", "N"],
    "answer_en": "T",
    "answer_hi": "T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "A 12 V battery sends current 3 A. Power =",
    "question_hi": "एक 12 V बैटरी 3 A धारा भेजती है। शक्ति =",
    "options_en": ["12 W", "24 W", "36 W", "48 W"],
    "options_hi": ["12 W", "24 W", "36 W", "48 W"],
    "answer_en": "36 W",
    "answer_hi": "36 W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is a longitudinal wave?",
    "question_hi": "कौन सी अनुदैर्ध्य तरंग है?",
    "options_en": ["Light", "Radio wave", "Sound", "X-ray"],
    "options_hi": ["प्रकाश", "रेडियो तरंग", "ध्वनि", "एक्स-किरण"],
    "answer_en": "Sound",
    "answer_hi": "ध्वनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "If wavelength increases, frequency:",
    "question_hi": "यदि तरंगदैर्ध्य बढ़ती है, तो आवृत्ति:",
    "options_en": ["Increases", "Decreases", "Same", "Becomes zero"],
    "options_hi": ["बढ़ती है", "घटती है", "समान", "शून्य हो जाती है"],
    "answer_en": "Decreases",
    "answer_hi": "घटती है",
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