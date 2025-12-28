const questions = [
  {
    num: 1,
    question_en: "A body moves 20 m in 4 seconds. What is its speed?",
    question_hi: "एक पिंड 4 सेकंड में 20 m चलता है। इसकी चाल क्या है?",
    options_en: ["4 m/s", "5 m/s", "10 m/s", "2 m/s"],
    options_hi: ["4 m/s", "5 m/s", "10 m/s", "2 m/s"],
    answer_en: "5 m/s",
    answer_hi: "5 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which physical quantity is conserved in all types of collisions?",
    question_hi: "कौन सी भौतिक राशि सभी प्रकार के संघट्टों में संरक्षित रहती है?",
    options_en: ["Momentum", "Energy", "Power", "Force"],
    options_hi: ["संवेग", "ऊर्जा", "शक्ति", "बल"],
    answer_en: "Momentum",
    answer_hi: "संवेग",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "The SI unit of electric charge is:",
    question_hi: "विद्युत आवेश की SI इकाई है:",
    options_en: ["Volt", "Coulomb", "Ohm", "Ampere"],
    options_hi: ["वोल्ट", "कूलॉम", "ओम", "एम्पियर"],
    answer_en: "Coulomb",
    answer_hi: "कूलॉम",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "A spring constant is 200 N/m. Its extension under 10 N force?",
    question_hi: "एक स्प्रिंग नियतांक 200 N/m है। 10 N बल के अंतर्गत इसका विस्तार?",
    options_en: ["0.05 m", "0.1 m", "0.2 m", "0.5 m"],
    options_hi: ["0.05 m", "0.1 m", "0.2 m", "0.5 m"],
    answer_en: "0.05 m",
    answer_hi: "0.05 m",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which law gives the direction of induced emf?",
    question_hi: "कौन सा नियम प्रेरित विद्युत वाहक बल की दिशा देता है?",
    options_en: ["Faraday's law", "Lenz's law", "Ampere's law", "Coulomb's law"],
    options_hi: ["फैराडे का नियम", "लेंज का नियम", "एम्पियर का नियम", "कूलॉम का नियम"],
    answer_en: "Lenz's law",
    answer_hi: "लेंज का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the force on a 2 C charge placed in electric field 5 N/C?",
    question_hi: "5 N/C विद्युत क्षेत्र में रखे 2 C आवेश पर बल क्या है?",
    options_en: ["2 N", "5 N", "10 N", "7 N"],
    options_hi: ["2 N", "5 N", "10 N", "7 N"],
    answer_en: "10 N",
    answer_hi: "10 N",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "The dimensional formula of power is:",
    question_hi: "शक्ति का विमीय सूत्र है:",
    options_en: ["ML²T⁻³", "MLT⁻²", "ML⁻¹T⁻²", "M⁻¹LT⁻³"],
    options_hi: ["ML²T⁻³", "MLT⁻²", "ML⁻¹T⁻²", "M⁻¹LT⁻³"],
    answer_en: "ML²T⁻³",
    answer_hi: "ML²T⁻³",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which lens is used to correct myopia?",
    question_hi: "निकट दृष्टि दोष को सही करने के लिए किस लेंस का उपयोग किया जाता है?",
    options_en: ["Convex", "Concave", "Cylindrical", "Plane"],
    options_hi: ["उत्तल", "अवतल", "बेलनाकार", "समतल"],
    answer_en: "Concave",
    answer_hi: "अवतल",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "A ball thrown upward with 15 m/s. Maximum height? (g = 10)",
    question_hi: "15 m/s से ऊपर फेंकी गई गेंद। अधिकतम ऊंचाई? (g = 10)",
    options_en: ["10 m", "11.25 m", "12.5 m", "15 m"],
    options_hi: ["10 m", "11.25 m", "12.5 m", "15 m"],
    answer_en: "11.25 m",
    answer_hi: "11.25 m",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the unit of magnetic induction?",
    question_hi: "चुंबकीय प्रेरण की इकाई क्या है?",
    options_en: ["Volt", "Tesla", "Henry", "Weber"],
    options_hi: ["वोल्ट", "टेस्ला", "हेनरी", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which motion has constant velocity?",
    question_hi: "किस गति में वेग स्थिर होता है?",
    options_en: ["Straight line with constant speed", "Circular motion", "Oscillatory motion", "Projectile motion"],
    options_hi: ["नियत चाल से सीधी रेखा", "वृत्तीय गति", "दोलन गति", "प्रक्षेप्य गति"],
    answer_en: "Straight line with constant speed",
    answer_hi: "नियत चाल से सीधी रेखा",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "A gas pressure decreases when?",
    question_hi: "गैस का दाब कब घटता है?",
    options_en: ["Volume decreases", "Temperature decreases", "Number of molecules increases", "Speed increases"],
    options_hi: ["आयतन घटता है", "तापमान घटता है", "अणुओं की संख्या बढ़ती है", "चाल बढ़ती है"],
    answer_en: "Temperature decreases",
    answer_hi: "तापमान घटता है",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "The unit of refractive index is:",
    question_hi: "अपवर्तनांक की इकाई है:",
    options_en: ["m/s", "No unit", "Hz", "m"],
    options_hi: ["m/s", "कोई इकाई नहीं", "Hz", "m"],
    answer_en: "No unit",
    answer_hi: "कोई इकाई नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which quantity is vector?",
    question_hi: "कौन सी राशि सदिश है?",
    options_en: ["Energy", "Power", "Momentum", "Mass"],
    options_hi: ["ऊर्जा", "शक्ति", "संवेग", "द्रव्यमान"],
    answer_en: "Momentum",
    answer_hi: "संवेग",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "A force of 30 N acts on a mass of 6 kg. Acceleration?",
    question_hi: "6 kg द्रव्यमान पर 30 N बल कार्य करता है। त्वरण?",
    options_en: ["2 m/s²", "5 m/s²", "10 m/s²", "6 m/s²"],
    options_hi: ["2 m/s²", "5 m/s²", "10 m/s²", "6 m/s²"],
    answer_en: "5 m/s²",
    answer_hi: "5 m/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "The resistance of a conductor depends on:",
    question_hi: "एक चालक का प्रतिरोध निर्भर करता है:",
    options_en: ["Material", "Length", "Area", "All"],
    options_hi: ["पदार्थ", "लंबाई", "क्षेत्रफल", "सभी"],
    answer_en: "All",
    answer_hi: "सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Work done in lifting a 10 N weight by 2 m:",
    question_hi: "10 N भार को 2 m उठाने में किया गया कार्य:",
    options_en: ["5 J", "20 J", "10 J", "2 J"],
    options_hi: ["5 J", "20 J", "10 J", "2 J"],
    answer_en: "20 J",
    answer_hi: "20 J",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Unit of frequency:",
    question_hi: "आवृत्ति की इकाई:",
    options_en: ["s", "Hz", "m/s", "J"],
    options_hi: ["s", "Hz", "m/s", "J"],
    answer_en: "Hz",
    answer_hi: "Hz",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "A convex lens of focal length 20 cm. Power?",
    question_hi: "20 cm फोकस दूरी के उत्तल लेंस की क्षमता?",
    options_en: ["2 D", "5 D", "3 D", "10 D"],
    options_hi: ["2 D", "5 D", "3 D", "10 D"],
    answer_en: "5 D",
    answer_hi: "5 D",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which radiation has maximum wavelength?",
    question_hi: "किस विकिरण की तरंगदैर्ध्य अधिकतम होती है?",
    options_en: ["Gamma rays", "X-rays", "Infrared", "Radio waves"],
    options_hi: ["गामा किरणें", "एक्स-रे", "अवरक्त", "रेडियो तरंगें"],
    answer_en: "Radio waves",
    answer_hi: "रेडियो तरंगें",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Circuit element that opposes current:",
    question_hi: "सर्किट अवयव जो धारा का विरोध करता है:",
    options_en: ["Battery", "Capacitor", "Inductor", "Resistor"],
    options_hi: ["बैटरी", "संधारित्र", "प्रेरक", "प्रतिरोधक"],
    answer_en: "Resistor",
    answer_hi: "प्रतिरोधक",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which law states V ∝ T at constant pressure?",
    question_hi: "कौन सा नियम कहता है कि नियत दाब पर V ∝ T?",
    options_en: ["Boyle's law", "Charles' law", "Ohm's law", "Hooke's law"],
    options_hi: ["बॉयल का नियम", "चार्ल्स का नियम", "ओम का नियम", "हुक का नियम"],
    answer_en: "Charles' law",
    answer_hi: "चार्ल्स का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "The force constant of a spring depends on:",
    question_hi: "स्प्रिंग का बल नियतांक निर्भर करता है:",
    options_en: ["Length", "Material", "Radius", "All"],
    options_hi: ["लंबाई", "पदार्थ", "त्रिज्या", "सभी"],
    answer_en: "All",
    answer_hi: "सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "A wave has frequency 50 Hz. Time period?",
    question_hi: "एक तरंग की आवृत्ति 50 Hz है। आवर्तकाल?",
    options_en: ["0.2 s", "0.5 s", "0.02 s", "2 s"],
    options_hi: ["0.2 s", "0.5 s", "0.02 s", "2 s"],
    answer_en: "0.02 s",
    answer_hi: "0.02 s",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Unit of electric flux:",
    question_hi: "विद्युत फ्लक्स की इकाई:",
    options_en: ["Weber", "N m²/C", "Tesla", "Volt"],
    options_hi: ["वेबर", "N m²/C", "टेस्ला", "वोल्ट"],
    answer_en: "N m²/C",
    answer_hi: "N m²/C",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which effect helps in AC generator?",
    question_hi: "कौन सा प्रभाव AC जनरेटर में मदद करता है?",
    options_en: ["Magnetic effect", "Heating effect", "Induction", "Chemical"],
    options_hi: ["चुंबकीय प्रभाव", "तापन प्रभाव", "प्रेरण", "रासायनिक"],
    answer_en: "Induction",
    answer_hi: "प्रेरण",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Escape velocity depends on:",
    question_hi: "पलायन वेग निर्भर करता है:",
    options_en: ["Mass of planet", "Radius of planet", "Both", "None"],
    options_hi: ["ग्रह का द्रव्यमान", "ग्रह की त्रिज्या", "दोनों", "कोई नहीं"],
    answer_en: "Both",
    answer_hi: "दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "A resistor of 10 Ω carries 2 A. Voltage?",
    question_hi: "10 Ω प्रतिरोधक में 2 A धारा प्रवाहित होती है। वोल्टेज?",
    options_en: ["5 V", "10 V", "20 V", "15 V"],
    options_hi: ["5 V", "10 V", "20 V", "15 V"],
    answer_en: "20 V",
    answer_hi: "20 V",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Dimension of momentum:",
    question_hi: "संवेग का विमीय सूत्र:",
    options_en: ["MLT⁻²", "MLT⁻¹", "M⁰L¹T¹", "ML⁻¹T⁻¹"],
    options_hi: ["MLT⁻²", "MLT⁻¹", "M⁰L¹T¹", "ML⁻¹T⁻¹"],
    answer_en: "MLT⁻¹",
    answer_hi: "MLT⁻¹",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "A 2 kg mass has kinetic energy 50 J. Speed?",
    question_hi: "2 kg द्रव्यमान की गतिज ऊर्जा 50 J है। चाल?",
    options_en: ["5 m/s", "10 m/s", "7 m/s", "√50 m/s"],
    options_hi: ["5 m/s", "10 m/s", "7 m/s", "√50 m/s"],
    answer_en: "√50 m/s",
    answer_hi: "√50 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which mirror always forms erect diminished image?",
    question_hi: "कौन सा दर्पण हमेशा सीधा और छोटा प्रतिबिंब बनाता है?",
    options_en: ["Concave", "Convex", "Plane", "None"],
    options_hi: ["अवतल", "उत्तल", "समतल", "कोई नहीं"],
    answer_en: "Convex",
    answer_hi: "उत्तल",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "SI unit of pressure:",
    question_hi: "दाब की SI इकाई:",
    options_en: ["Newton", "Pascal", "Joule", "Watt"],
    options_hi: ["न्यूटन", "पास्कल", "जूल", "वाट"],
    answer_en: "Pascal",
    answer_hi: "पास्कल",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Heat transfer through vacuum occurs by:",
    question_hi: "निर्वात के माध्यम से ऊष्मा स्थानांतरण होता है:",
    options_en: ["Conduction", "Radiation", "Convection", "Friction"],
    options_hi: ["चालन", "विकिरण", "संवहन", "घर्षण"],
    answer_en: "Radiation",
    answer_hi: "विकिरण",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "A wave speed 300 m/s, wavelength 3 m. Frequency?",
    question_hi: "एक तरंग की गति 300 m/s, तरंगदैर्ध्य 3 m। आवृत्ति?",
    options_en: ["50 Hz", "100 Hz", "300 Hz", "600 Hz"],
    options_hi: ["50 Hz", "100 Hz", "300 Hz", "600 Hz"],
    answer_en: "100 Hz",
    answer_hi: "100 Hz",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which law gives direction of force in magnetic field?",
    question_hi: "कौन सा नियम चुंबकीय क्षेत्र में बल की दिशा देता है?",
    options_en: ["Coulomb's law", "Fleming's left-hand rule", "Faraday's law", "Ampere's law"],
    options_hi: ["कूलॉम का नियम", "फ्लेमिंग का बाएं हाथ का नियम", "फैराडे का नियम", "एम्पियर का नियम"],
    answer_en: "Fleming's left-hand rule",
    answer_hi: "फ्लेमिंग का बाएं हाथ का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Capacitor stores:",
    question_hi: "संधारित्र संग्रहीत करता है:",
    options_en: ["Charge", "Energy", "Both", "None"],
    options_hi: ["आवेश", "ऊर्जा", "दोनों", "कोई नहीं"],
    answer_en: "Both",
    answer_hi: "दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Pendulum time period depends on:",
    question_hi: "लोलक का आवर्तकाल निर्भर करता है:",
    options_en: ["Mass", "Length", "Angle", "Bob size"],
    options_hi: ["द्रव्यमान", "लंबाई", "कोण", "गोलक आकार"],
    answer_en: "Length",
    answer_hi: "लंबाई",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which is not a derived quantity?",
    question_hi: "कौन सी व्युत्पन्न राशि नहीं है?",
    options_en: ["Speed", "Area", "Mass", "Force"],
    options_hi: ["चाल", "क्षेत्रफल", "द्रव्यमान", "बल"],
    answer_en: "Mass",
    answer_hi: "द्रव्यमान",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "A body falls freely for 2 s. Distance?",
    question_hi: "एक पिंड 2 s के लिए स्वतंत्र रूप से गिरता है। दूरी?",
    options_en: ["10 m", "20 m", "19.6 m", "40 m"],
    options_hi: ["10 m", "20 m", "19.6 m", "40 m"],
    answer_en: "19.6 m",
    answer_hi: "19.6 m",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Magnetic field inside solenoid is:",
    question_hi: "परिनालिका के अंदर चुंबकीय क्षेत्र है:",
    options_en: ["Zero", "Maximum at ends", "Uniform", "Random"],
    options_hi: ["शून्य", "सिरों पर अधिकतम", "एकसमान", "यादृच्छिक"],
    answer_en: "Uniform",
    answer_hi: "एकसमान",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Lens power = 2D. Focal length?",
    question_hi: "लेंस क्षमता = 2D। फोकस दूरी?",
    options_en: ["20 cm", "50 cm", "100 cm", "200 cm"],
    options_hi: ["20 cm", "50 cm", "100 cm", "200 cm"],
    answer_en: "50 cm",
    answer_hi: "50 cm",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which is a fundamental unit?",
    question_hi: "कौन सी मौलिक इकाई है?",
    options_en: ["Newton", "Watt", "Ampere", "Volt"],
    options_hi: ["न्यूटन", "वाट", "एम्पियर", "वोल्ट"],
    answer_en: "Ampere",
    answer_hi: "एम्पियर",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Ideal gas equation:",
    question_hi: "आदर्श गैस समीकरण:",
    options_en: ["PV = nRT", "PV = constant", "P/T = constant", "None"],
    options_hi: ["PV = nRT", "PV = constant", "P/T = constant", "कोई नहीं"],
    answer_en: "PV = nRT",
    answer_hi: "PV = nRT",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Value of g decreases when:",
    question_hi: "g का मान घटता है जब:",
    options_en: ["Height increases", "Depth increases", "Latitude increases", "All"],
    options_hi: ["ऊंचाई बढ़ती है", "गहराई बढ़ती है", "अक्षांश बढ़ता है", "सभी"],
    answer_en: "All",
    answer_hi: "सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "A 5 µF capacitor at 10 V. Charge stored?",
    question_hi: "10 V पर 5 µF संधारित्र। संग्रहीत आवेश?",
    options_en: ["50 µC", "10 µC", "5 µC", "500 µC"],
    options_hi: ["50 µC", "10 µC", "5 µC", "500 µC"],
    answer_en: "50 µC",
    answer_hi: "50 µC",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Speed of light is maximum in:",
    question_hi: "प्रकाश की गति अधिकतम होती है:",
    options_en: ["Glass", "Water", "Air", "Diamond"],
    options_hi: ["कांच", "जल", "वायु", "हीरा"],
    answer_en: "Air",
    answer_hi: "वायु",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "SI unit of power:",
    question_hi: "शक्ति की SI इकाई:",
    options_en: ["Joule", "Watt", "Newton", "Ampere"],
    options_hi: ["जूल", "वाट", "न्यूटन", "एम्पियर"],
    answer_en: "Watt",
    answer_hi: "वाट",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Displacement can be:",
    question_hi: "विस्थापन हो सकता है:",
    options_en: ["Only positive", "Only negative", "Zero", "All"],
    options_hi: ["केवल धनात्मक", "केवल ऋणात्मक", "शून्य", "सभी"],
    answer_en: "All",
    answer_hi: "सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Electron charge value:",
    question_hi: "इलेक्ट्रॉन आवेश मान:",
    options_en: ["1.6×10⁻¹⁹ C", "9.1×10⁻³¹ C", "6.02×10²³ C", "1 C"],
    options_hi: ["1.6×10⁻¹⁹ C", "9.1×10⁻³¹ C", "6.02×10²³ C", "1 C"],
    answer_en: "1.6×10⁻¹⁹ C",
    answer_hi: "1.6×10⁻¹⁹ C",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Work done in uniform circular motion:",
    question_hi: "एकसमान वृत्तीय गति में किया गया कार्य:",
    options_en: ["Positive", "Negative", "Zero", "Variable"],
    options_hi: ["धनात्मक", "ऋणात्मक", "शून्य", "परिवर्तनशील"],
    answer_en: "Zero",
    answer_hi: "शून्य",
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