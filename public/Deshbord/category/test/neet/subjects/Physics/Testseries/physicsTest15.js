const questions = [
  {
    "num": 1,
    "question_en": "Which quantity is a pseudo-vector?",
    "question_hi": "कौन सी राशि एक छद्म-सदिश है?",
    "options_en": ["Angular momentum", "Force", "Displacement", "Momentum"],
    "options_hi": ["कोणीय संवेग", "बल", "विस्थापन", "संवेग"],
    "answer_en": "Angular momentum",
    "answer_hi": "कोणीय संवेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which law is used in rocket propulsion?",
    "question_hi": "रॉकेट प्रणोदन में किस नियम का उपयोग किया जाता है?",
    "options_en": ["Newton's 3rd law", "Newton's 1st law", "Hooke's law", "Pascal's law"],
    "options_hi": ["न्यूटन का तीसरा नियम", "न्यूटन का पहला नियम", "हुक का नियम", "पास्कल का नियम"],
    "answer_en": "Newton's 3rd law",
    "answer_hi": "न्यूटन का तीसरा नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "A body of mass 4 kg moves with velocity 5 m/s. Find its kinetic energy.",
    "question_hi": "4 kg द्रव्यमान का एक पिंड 5 m/s वेग से चलता है। इसकी गतिज ऊर्जा ज्ञात कीजिए।",
    "options_en": ["50 J", "25 J", "100 J", "10 J"],
    "options_hi": ["50 J", "25 J", "100 J", "10 J"],
    "answer_en": "50 J",
    "answer_hi": "50 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The slope of position-time graph gives:",
    "question_hi": "स्थिति-समय ग्राफ का ढलान देता है:",
    "options_en": ["Velocity", "Acceleration", "Force", "Momentum"],
    "options_hi": ["वेग", "त्वरण", "बल", "संवेग"],
    "answer_en": "Velocity",
    "answer_hi": "वेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which motion has zero acceleration?",
    "question_hi": "किस गति में शून्य त्वरण होता है?",
    "options_en": ["Uniform motion", "Circular motion", "Oscillatory", "Vibratory"],
    "options_hi": ["एकसमान गति", "वृत्तीय गति", "दोलन गति", "कंपन गति"],
    "answer_en": "Uniform motion",
    "answer_hi": "एकसमान गति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "SI unit of pressure is:",
    "question_hi": "दाब का SI मात्रक है:",
    "options_en": ["Pascal", "Newton", "Joule", "Watt"],
    "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "A 10 Ω resistor carries 2 A current. Voltage across it is:",
    "question_hi": "10 Ω प्रतिरोधक में 2 A धारा प्रवाहित होती है। इसके सिरों पर वोल्टेज है:",
    "options_en": ["20 V", "10 V", "5 V", "15 V"],
    "options_hi": ["20 V", "10 V", "5 V", "15 V"],
    "answer_en": "20 V",
    "answer_hi": "20 V",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which mirrors are used in car headlights?",
    "question_hi": "कार हेडलाइट्स में किस दर्पण का उपयोग किया जाता है?",
    "options_en": ["Concave mirror", "Convex mirror", "Plane mirror", "None"],
    "options_hi": ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "कोई नहीं"],
    "answer_en": "Concave mirror",
    "answer_hi": "अवतल दर्पण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which electromagnetic wave has shortest wavelength?",
    "question_hi": "किस विद्युत चुम्बकीय तरंग की तरंगदैर्ध्य सबसे कम होती है?",
    "options_en": ["Gamma rays", "X-rays", "UV rays", "Radio waves"],
    "options_hi": ["गामा किरणें", "एक्स-किरणें", "पराबैंगनी किरणें", "रेडियो तरंगें"],
    "answer_en": "Gamma rays",
    "answer_hi": "गामा किरणें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Latent heat is associated with:",
    "question_hi": "गुप्त ऊष्मा संबंधित है:",
    "options_en": ["Phase change", "Temperature increase", "Pressure change", "Density change"],
    "options_hi": ["अवस्था परिवर्तन", "तापमान वृद्धि", "दाब परिवर्तन", "घनत्व परिवर्तन"],
    "answer_en": "Phase change",
    "answer_hi": "अवस्था परिवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "1 eV = ?",
    "question_hi": "1 eV = ?",
    "options_en": ["1.6 × 10⁻¹⁹ J", "1.6 × 10⁻¹⁰ J", "1.6 × 10⁻¹⁵ J", "1.6 × 10⁻⁵ J"],
    "options_hi": ["1.6 × 10⁻¹⁹ J", "1.6 × 10⁻¹⁰ J", "1.6 × 10⁻¹⁵ J", "1.6 × 10⁻⁵ J"],
    "answer_en": "1.6 × 10⁻¹⁹ J",
    "answer_hi": "1.6 × 10⁻¹⁹ J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Escape velocity depends on:",
    "question_hi": "पलायन वेग निर्भर करता है:",
    "options_en": ["Mass of planet", "Volume of planet", "Temperature", "Density"],
    "options_hi": ["ग्रह के द्रव्यमान पर", "ग्रह के आयतन पर", "तापमान पर", "घनत्व पर"],
    "answer_en": "Mass of planet",
    "answer_hi": "ग्रह के द्रव्यमान पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "A simple pendulum has time period 2 s. How many oscillations in 10 s?",
    "question_hi": "एक सरल लोलक का आवर्तकाल 2 s है। 10 s में कितने दोलन होंगे?",
    "options_en": ["5", "10", "20", "15"],
    "options_hi": ["5", "10", "20", "15"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Unit of self-inductance:",
    "question_hi": "स्व-प्रेरकत्व की इकाई:",
    "options_en": ["Henry", "Tesla", "Farad", "Weber"],
    "options_hi": ["हेनरी", "टेस्ला", "फैरड", "वेबर"],
    "answer_en": "Henry",
    "answer_hi": "हेनरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which effect produces magnetic field around conductor?",
    "question_hi": "कौन सा प्रभाव चालक के चारों ओर चुंबकीय क्षेत्र उत्पन्न करता है?",
    "options_en": ["Current", "Voltage", "Resistance", "Capacitance"],
    "options_hi": ["धारा", "वोल्टेज", "प्रतिरोध", "धारिता"],
    "answer_en": "Current",
    "answer_hi": "धारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which device stores charge?",
    "question_hi": "कौन सा उपकरण आवेश संचित करता है?",
    "options_en": ["Capacitor", "Inductor", "Resistor", "Transformer"],
    "options_hi": ["संधारित्र", "प्रेरक", "प्रतिरोधक", "ट्रांसफॉर्मर"],
    "answer_en": "Capacitor",
    "answer_hi": "संधारित्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "A force of 6 N acts on mass 2 kg. Acceleration is:",
    "question_hi": "6 N बल 2 kg द्रव्यमान पर कार्य करता है। त्वरण है:",
    "options_en": ["3 m/s²", "12 m/s²", "2 m/s²", "6 m/s²"],
    "options_hi": ["3 m/s²", "12 m/s²", "2 m/s²", "6 m/s²"],
    "answer_en": "3 m/s²",
    "answer_hi": "3 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Waves on string are:",
    "question_hi": "डोरी पर तरंगें होती हैं:",
    "options_en": ["Transverse", "Longitudinal", "Electromagnetic", "None"],
    "options_hi": ["अनुप्रस्थ", "अनुदैर्ध्य", "विद्युत चुम्बकीय", "कोई नहीं"],
    "answer_en": "Transverse",
    "answer_hi": "अनुप्रस्थ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Electric power consumed is:",
    "question_hi": "विद्युत शक्ति खपत है:",
    "options_en": ["VI", "I/R", "V/I", "IR"],
    "options_hi": ["VI", "I/R", "V/I", "IR"],
    "answer_en": "VI",
    "answer_hi": "VI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which law explains diffraction?",
    "question_hi": "कौन सा नियम विवर्तन की व्याख्या करता है?",
    "options_en": ["Huygens principle", "Newton law", "Archimedes law", "Pascal law"],
    "options_hi": ["हाइगेंस सिद्धांत", "न्यूटन नियम", "आर्किमिडीज नियम", "पास्कल नियम"],
    "answer_en": "Huygens principle",
    "answer_hi": "हाइगेंस सिद्धांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which wave travels fastest?",
    "question_hi": "कौन सी तरंग सबसे तेज यात्रा करती है?",
    "options_en": ["Light", "Sound", "Water waves", "Seismic waves"],
    "options_hi": ["प्रकाश", "ध्वनि", "जल तरंगें", "भूकंपीय तरंगें"],
    "answer_en": "Light",
    "answer_hi": "प्रकाश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Time taken for light to travel from Sun to Earth is:",
    "question_hi": "सूर्य से पृथ्वी तक प्रकाश के यात्रा करने में लगने वाला समय है:",
    "options_en": ["8 minutes", "2 minutes", "1 hour", "1 second"],
    "options_hi": ["8 मिनट", "2 मिनट", "1 घंटा", "1 सेकंड"],
    "answer_en": "8 minutes",
    "answer_hi": "8 मिनट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "A spring constant is 100 N/m. If stretched by 0.1 m, force is:",
    "question_hi": "एक स्प्रिंग नियतांक 100 N/m है। यदि 0.1 m तक खींचा जाए, तो बल है:",
    "options_en": ["10 N", "5 N", "50 N", "20 N"],
    "options_hi": ["10 N", "5 N", "50 N", "20 N"],
    "answer_en": "10 N",
    "answer_hi": "10 N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Magnetic field of Earth is due to:",
    "question_hi": "पृथ्वी का चुंबकीय क्षेत्र कारण है:",
    "options_en": ["Molten iron core", "Sun", "Moon", "Stars"],
    "options_hi": ["पिघला हुआ लोहे का केंद्र", "सूर्य", "चंद्रमा", "तारे"],
    "answer_en": "Molten iron core",
    "answer_hi": "पिघला हुआ लोहे का केंद्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Speed of sound in air is maximum at:",
    "question_hi": "वायु में ध्वनि की चाल अधिकतम होती है:",
    "options_en": ["High temperature", "Low temperature", "Humidity zero", "Vacuum"],
    "options_hi": ["उच्च तापमान", "निम्न तापमान", "शून्य आर्द्रता", "निर्वात"],
    "answer_en": "High temperature",
    "answer_hi": "उच्च तापमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which quantity remains constant in uniform motion?",
    "question_hi": "एकसमान गति में कौन सी राशि स्थिर रहती है?",
    "options_en": ["Velocity", "Acceleration", "Force", "Momentum"],
    "options_hi": ["वेग", "त्वरण", "बल", "संवेग"],
    "answer_en": "Velocity",
    "answer_hi": "वेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Radioactivity was discovered by:",
    "question_hi": "रेडियोधर्मिता की खोज की थी:",
    "options_en": ["Henri Becquerel", "Newton", "Einstein", "Curie"],
    "options_hi": ["हेनरी बैकरेल", "न्यूटन", "आइंस्टीन", "क्यूरी"],
    "answer_en": "Henri Becquerel",
    "answer_hi": "हेनरी बैकरेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "A charge of 4 C flows in 2 s. Current is:",
    "question_hi": "4 C आवेश 2 s में प्रवाहित होता है। धारा है:",
    "options_en": ["2 A", "4 A", "8 A", "1 A"],
    "options_hi": ["2 A", "4 A", "8 A", "1 A"],
    "answer_en": "2 A",
    "answer_hi": "2 A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which of the following has least density?",
    "question_hi": "निम्नलिखित में से किसका घनत्व सबसे कम है?",
    "options_en": ["Air", "Water", "Ice", "Iron"],
    "options_hi": ["वायु", "जल", "बर्फ", "लोहा"],
    "answer_en": "Air",
    "answer_hi": "वायु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "For perfectly inelastic collision, e =",
    "question_hi": "पूर्णतः अप्रत्यास्थ संघट्ट के लिए, e =",
    "options_en": ["0", "1", "0.5", "Infinity"],
    "options_hi": ["0", "1", "0.5", "अनंत"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "A boy pushes a wall but wall does not move. Work done is:",
    "question_hi": "एक लड़का दीवार को धकेलता है लेकिन दीवार नहीं हिलती। किया गया कार्य है:",
    "options_en": ["Zero", "Positive", "Negative", "Infinite"],
    "options_hi": ["शून्य", "धनात्मक", "ऋणात्मक", "अनंत"],
    "answer_en": "Zero",
    "answer_hi": "शून्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which lens produces virtual and erect image?",
    "question_hi": "कौन सा लेंस आभासी और सीधा प्रतिबिम्ब बनाता है?",
    "options_en": ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal"],
    "options_hi": ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार लेंस", "द्विफोकसी"],
    "answer_en": "Concave lens",
    "answer_hi": "अवतल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The phenomenon causing twinkling of stars is:",
    "question_hi": "तारों के टिमटिमाने का कारण घटना है:",
    "options_en": ["Atmospheric refraction", "Diffraction", "Scattering", "Reflection"],
    "options_hi": ["वायुमंडलीय अपवर्तन", "विवर्तन", "प्रकीर्णन", "परावर्तन"],
    "answer_en": "Atmospheric refraction",
    "answer_hi": "वायुमंडलीय अपवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "1 Tesla = ?",
    "question_hi": "1 टेस्ला = ?",
    "options_en": ["1 Wb/m²", "1 Wb", "1 V", "1 C"],
    "options_hi": ["1 Wb/m²", "1 Wb", "1 V", "1 C"],
    "answer_en": "1 Wb/m²",
    "answer_hi": "1 Wb/m²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "If frequency doubles, wavelength becomes:",
    "question_hi": "यदि आवृत्ति दोगुनी हो जाए, तो तरंगदैर्ध्य हो जाती है:",
    "options_en": ["Half", "Double", "Same", "Zero"],
    "options_hi": ["आधी", "दोगुनी", "समान", "शून्य"],
    "answer_en": "Half",
    "answer_hi": "आधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the unit of momentum?",
    "question_hi": "संवेग की इकाई क्या है?",
    "options_en": ["kg·m/s", "kg/m²", "N/m²", "J"],
    "options_hi": ["kg·m/s", "kg/m²", "N/m²", "J"],
    "answer_en": "kg·m/s",
    "answer_hi": "kg·m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Electric flux unit is:",
    "question_hi": "विद्युत फ्लक्स की इकाई है:",
    "options_en": ["Weber", "Volt", "Newton", "Henry"],
    "options_hi": ["वेबर", "वोल्ट", "न्यूटन", "हेनरी"],
    "answer_en": "Weber",
    "answer_hi": "वेबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Acceleration due to gravity is highest at:",
    "question_hi": "गुरुत्वीय त्वरण सबसे अधिक होता है:",
    "options_en": ["Poles", "Equator", "Mountains", "Sea"],
    "options_hi": ["ध्रुवों पर", "भूमध्य रेखा पर", "पहाड़ों पर", "समुद्र पर"],
    "answer_en": "Poles",
    "answer_hi": "ध्रुवों पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "A 20 m/s ball hits wall and returns with 10 m/s. Type of collision?",
    "question_hi": "20 m/s की गेंद दीवार से टकराती है और 10 m/s से लौटती है। संघट्ट का प्रकार?",
    "options_en": ["Inelastic", "Elastic", "Perfect elastic", "Explosive"],
    "options_hi": ["अप्रत्यास्थ", "प्रत्यास्थ", "पूर्ण प्रत्यास्थ", "विस्फोटक"],
    "answer_en": "Inelastic",
    "answer_hi": "अप्रत्यास्थ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Time period of second's pendulum:",
    "question_hi": "सेकंड लोलक का आवर्तकाल:",
    "options_en": ["2 s", "1 s", "0.5 s", "4 s"],
    "options_hi": ["2 s", "1 s", "0.5 s", "4 s"],
    "answer_en": "2 s",
    "answer_hi": "2 s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of these is NOT electromagnetic wave?",
    "question_hi": "निम्नलिखित में से कौन सी विद्युत चुम्बकीय तरंग नहीं है?",
    "options_en": ["Sound", "Infrared", "X-ray", "Gamma"],
    "options_hi": ["ध्वनि", "अवरक्त", "एक्स-किरण", "गामा"],
    "answer_en": "Sound",
    "answer_hi": "ध्वनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "A body at rest has:",
    "question_hi": "विरामावस्था में एक पिंड होता है:",
    "options_en": ["Zero momentum", "Zero energy", "Infinite inertia", "Negative force"],
    "options_hi": ["शून्य संवेग", "शून्य ऊर्जा", "अनंत जड़त्व", "ऋणात्मक बल"],
    "answer_en": "Zero momentum",
    "answer_hi": "शून्य संवेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "In nuclear reactor, moderator used is:",
    "question_hi": "नाभिकीय रिएक्टर में, उपयोग किया जाने वाला मंदक है:",
    "options_en": ["Graphite", "Iron", "Copper", "Lead"],
    "options_hi": ["ग्रेफाइट", "लोहा", "तांबा", "सीसा"],
    "answer_en": "Graphite",
    "answer_hi": "ग्रेफाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Refractive index is ratio of:",
    "question_hi": "अपवर्तनांक अनुपात है:",
    "options_en": ["c/v", "v/c", "λf", "f/λ"],
    "options_hi": ["c/v", "v/c", "λf", "f/λ"],
    "answer_en": "c/v",
    "answer_hi": "c/v",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "A force acts for 0.5 s and changes momentum by 10 kg·m/s. Force is:",
    "question_hi": "एक बल 0.5 s तक कार्य करता है और संवेग को 10 kg·m/s से बदल देता है। बल है:",
    "options_en": ["20 N", "5 N", "10 N", "15 N"],
    "options_hi": ["20 N", "5 N", "10 N", "15 N"],
    "answer_en": "20 N",
    "answer_hi": "20 N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Coefficient of friction depends on:",
    "question_hi": "घर्षण गुणांक निर्भर करता है:",
    "options_en": ["Nature of surfaces", "Area", "Velocity", "Temperature"],
    "options_hi": ["सतहों की प्रकृति", "क्षेत्रफल", "वेग", "तापमान"],
    "answer_en": "Nature of surfaces",
    "answer_hi": "सतहों की प्रकृति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Unit of electric field:",
    "question_hi": "विद्युत क्षेत्र की इकाई:",
    "options_en": ["N/C", "Wb", "T", "H"],
    "options_hi": ["N/C", "Wb", "T", "H"],
    "answer_en": "N/C",
    "answer_hi": "N/C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which mirror gives wider field of view?",
    "question_hi": "कौन सा दर्पण व्यापक दृष्टि क्षेत्र देता है?",
    "options_en": ["Convex", "Concave", "Plane", "None"],
    "options_hi": ["उत्तल", "अवतल", "समतल", "कोई नहीं"],
    "answer_en": "Convex",
    "answer_hi": "उत्तल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "A ray bends towards normal when:",
    "question_hi": "एक किरण अभिलंब की ओर मुड़ती है जब:",
    "options_en": ["It enters denser medium", "It enters rarer medium", "Reflected", "Diffracted"],
    "options_hi": ["यह सघन माध्यम में प्रवेश करती है", "यह विरल माध्यम में प्रवेश करती है", "परावर्तित", "विवर्तित"],
    "answer_en": "It enters denser medium",
    "answer_hi": "यह सघन माध्यम में प्रवेश करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which colour has least frequency?",
    "question_hi": "किस रंग की आवृत्ति सबसे कम होती है?",
    "options_en": ["Red", "Blue", "Green", "Violet"],
    "options_hi": ["लाल", "नीला", "हरा", "बैंगनी"],
    "answer_en": "Red",
    "answer_hi": "लाल",
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