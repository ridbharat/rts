
const questions = [
  {
    "num": 1,
    "question_en": "Which law gives the relationship between stress and strain?",
    "question_hi": "कौन सा नियम प्रतिबल और विकृति के बीच संबंध देता है?",
    "options_en": ["Hooke's law", "Ohm's law", "Newton's law", "Boyle's law"],
    "options_hi": ["हुक का नियम", "ओम का नियम", "न्यूटन का नियम", "बॉयल का नियम"],
    "answer_en": "Hooke's law",
    "answer_hi": "हुक का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Bulk modulus is related to:",
    "question_hi": "आयतन प्रत्यास्थता गुणांक संबंधित है:",
    "options_en": ["Compressibility", "Elasticity", "Viscosity", "Conductivity"],
    "options_hi": ["संपीड्यता", "प्रत्यास्थता", "श्यानता", "चालकता"],
    "answer_en": "Compressibility",
    "answer_hi": "संपीड्यता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which quantity is conserved in an elastic collision?",
    "question_hi": "प्रत्यास्थ संघट्ट में कौन सी राशि संरक्षित रहती है?",
    "options_en": ["Momentum only", "Kinetic energy only", "Momentum and kinetic energy", "Potential energy"],
    "options_hi": ["केवल संवेग", "केवल गतिज ऊर्जा", "संवेग और गतिज ऊर्जा", "स्थितिज ऊर्जा"],
    "answer_en": "Momentum and kinetic energy",
    "answer_hi": "संवेग और गतिज ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The moment of inertia depends on:",
    "question_hi": "जड़त्व आघूर्ण निर्भर करता है:",
    "options_en": ["Mass distribution", "Velocity", "Temperature", "Charge"],
    "options_hi": ["द्रव्यमान वितरण", "वेग", "तापमान", "आवेश"],
    "answer_en": "Mass distribution",
    "answer_hi": "द्रव्यमान वितरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "The SI unit of angular velocity is:",
    "question_hi": "कोणीय वेग का SI मात्रक है:",
    "options_en": ["rad/s", "m/s", "s⁻²", "Hz"],
    "options_hi": ["rad/s", "m/s", "s⁻²", "Hz"],
    "answer_en": "rad/s",
    "answer_hi": "rad/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "A body executes SHM. At mean position its:",
    "question_hi": "एक पिंड सरल आवर्त गति करता है। माध्य स्थिति में इसका:",
    "options_en": ["Acceleration is maximum", "Velocity is zero", "Velocity is maximum", "Displacement is maximum"],
    "options_hi": ["त्वरण अधिकतम", "वेग शून्य", "वेग अधिकतम", "विस्थापन अधिकतम"],
    "answer_en": "Velocity is maximum",
    "answer_hi": "वेग अधिकतम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "A simple pendulum has maximum potential energy at:",
    "question_hi": "एक सरल लोलक में अधिकतम स्थितिज ऊर्जा होती है:",
    "options_en": ["Mean position", "Extreme position", "All positions", "None"],
    "options_hi": ["माध्य स्थिति", "चरम स्थिति", "सभी स्थितियों में", "कोई नहीं"],
    "answer_en": "Extreme position",
    "answer_hi": "चरम स्थिति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Escape velocity depends on:",
    "question_hi": "पलायन वेग निर्भर करता है:",
    "options_en": ["Mass of object", "Radius & mass of planet", "Temperature", "Shape of object"],
    "options_hi": ["वस्तु के द्रव्यमान पर", "ग्रह की त्रिज्या और द्रव्यमान पर", "तापमान पर", "वस्तु के आकार पर"],
    "answer_en": "Radius & mass of planet",
    "answer_hi": "ग्रह की त्रिज्या और द्रव्यमान पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Kepler's 3rd law relates:",
    "question_hi": "केप्लर का तीसरा नियम संबंधित करता है:",
    "options_en": ["Velocity & radius", "Period & radius", "Mass & radius", "Force & velocity"],
    "options_hi": ["वेग और त्रिज्या", "आवर्तकाल और त्रिज्या", "द्रव्यमान और त्रिज्या", "बल और वेग"],
    "answer_en": "Period & radius",
    "answer_hi": "आवर्तकाल और त्रिज्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which has highest terminal velocity?",
    "question_hi": "किसकी टर्मिनल वेग सबसे अधिक होती है?",
    "options_en": ["Small sphere", "Large sphere", "Stone", "Balloon"],
    "options_hi": ["छोटा गोला", "बड़ा गोला", "पत्थर", "गुब्बारा"],
    "answer_en": "Large sphere",
    "answer_hi": "बड़ा गोला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The Reynolds number is used to determine:",
    "question_hi": "रेनॉल्ड्स संख्या उपयोग की जाती है निर्धारित करने के लिए:",
    "options_en": ["Viscosity", "Turbulence", "Elasticity", "Conductivity"],
    "options_hi": ["श्यानता", "अशांत प्रवाह", "प्रत्यास्थता", "चालकता"],
    "answer_en": "Turbulence",
    "answer_hi": "अशांत प्रवाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The velocity of sound increases with:",
    "question_hi": "ध्वनि का वेग बढ़ता है:",
    "options_en": ["Humidity", "Dryness", "High pressure", "Vacuum"],
    "options_hi": ["आर्द्रता", "शुष्कता", "उच्च दाब", "निर्वात"],
    "answer_en": "Humidity",
    "answer_hi": "आर्द्रता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Ultrasound frequency is greater than:",
    "question_hi": "पराश्रव्य आवृत्ति अधिक होती है:",
    "options_en": ["20 Hz", "200 Hz", "2000 Hz", "20 kHz"],
    "options_hi": ["20 Hz", "200 Hz", "2000 Hz", "20 kHz"],
    "answer_en": "20 kHz",
    "answer_hi": "20 kHz",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which colour is deviated least in prism?",
    "question_hi": "प्रिज्म में कौन सा रंग सबसे कम विचलित होता है?",
    "options_en": ["Red", "Violet", "Blue", "Green"],
    "options_hi": ["लाल", "बैंगनी", "नीला", "हरा"],
    "answer_en": "Red",
    "answer_hi": "लाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "If magnification is +1, the image is:",
    "question_hi": "यदि आवर्धन +1 है, तो प्रतिबिम्ब होता है:",
    "options_en": ["Real inverted", "Real erect", "Virtual erect same size", "Virtual inverted"],
    "options_hi": ["वास्तविक उल्टा", "वास्तविक सीधा", "आभासी सीधा समान आकार", "आभासी उल्टा"],
    "answer_en": "Virtual erect same size",
    "answer_hi": "आभासी सीधा समान आकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Hypermetropia is corrected by:",
    "question_hi": "दीर्घदृष्टि को सही किया जाता है:",
    "options_en": ["Concave lens", "Convex lens", "Cylindrical lens", "Prism"],
    "options_hi": ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार लेंस", "प्रिज्म"],
    "answer_en": "Convex lens",
    "answer_hi": "उत्तल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The near point of normal eye is:",
    "question_hi": "सामान्य आँख का निकट बिंदु होता है:",
    "options_en": ["5 cm", "10 cm", "25 cm", "100 cm"],
    "options_hi": ["5 cm", "10 cm", "25 cm", "100 cm"],
    "answer_en": "25 cm",
    "answer_hi": "25 cm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Twinkling of stars is due to:",
    "question_hi": "तारों का टिमटिमाना कारण है:",
    "options_en": ["Reflection", "Diffraction", "Atmospheric refraction", "Polarisation"],
    "options_hi": ["परावर्तन", "विवर्तन", "वायुमंडलीय अपवर्तन", "ध्रुवण"],
    "answer_en": "Atmospheric refraction",
    "answer_hi": "वायुमंडलीय अपवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Brewster's angle occurs when reflected light is:",
    "question_hi": "ब्रूस्टर कोण होता है जब परावर्तित प्रकाश होता है:",
    "options_en": ["Unpolarised", "Partially polarised", "Fully polarised", "Not reflected"],
    "options_hi": ["अध्रुवित", "आंशिक रूप से ध्रुवित", "पूर्ण रूप से ध्रुवित", "परावर्तित नहीं"],
    "answer_en": "Fully polarised",
    "answer_hi": "पूर्ण रूप से ध्रुवित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Malus law is related to:",
    "question_hi": "मालस का नियम संबंधित है:",
    "options_en": ["Refraction", "Diffraction", "Polarisation", "Interference"],
    "options_hi": ["अपवर्तन", "विवर्तन", "ध्रुवण", "व्यतिकरण"],
    "answer_en": "Polarisation",
    "answer_hi": "ध्रुवण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "The unit of refractive index is:",
    "question_hi": "अपवर्तनांक की इकाई है:",
    "options_en": ["m/s", "None", "Hz", "rad"],
    "options_hi": ["m/s", "कोई नहीं", "Hz", "rad"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which wave property proves light is a wave?",
    "question_hi": "कौन सा तरंग गुण सिद्ध करता है कि प्रकाश एक तरंग है?",
    "options_en": ["Reflection", "Speed", "Polarisation", "Brightness"],
    "options_hi": ["परावर्तन", "चाल", "ध्रुवण", "चमक"],
    "answer_en": "Polarisation",
    "answer_hi": "ध्रुवण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The SI unit of inductance is:",
    "question_hi": "प्रेरकत्व का SI मात्रक है:",
    "options_en": ["Henry", "Weber", "Tesla", "Volt"],
    "options_hi": ["हेनरी", "वेबर", "टेस्ला", "वोल्ट"],
    "answer_en": "Henry",
    "answer_hi": "हेनरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The relative permeability of diamagnetic materials is:",
    "question_hi": "प्रतिचुम्बकीय पदार्थों की आपेक्षिक चुंबकशीलता होती है:",
    "options_en": ["Greater than 1", "Equal to 1", "Less than 1", "Zero"],
    "options_hi": ["1 से अधिक", "1 के बराबर", "1 से कम", "शून्य"],
    "answer_en": "Less than 1",
    "answer_hi": "1 से कम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "RMS value of AC is:",
    "question_hi": "AC का RMS मान होता है:",
    "options_en": ["Vmax/2", "Vmax/√2", "Vmax√2", "2Vmax"],
    "options_hi": ["Vmax/2", "Vmax/√2", "Vmax√2", "2Vmax"],
    "answer_en": "Vmax/√2",
    "answer_hi": "Vmax/√2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Power factor is:",
    "question_hi": "पावर फैक्टर होता है:",
    "options_en": ["sinϕ", "cosϕ", "tanϕ", "1/cosϕ"],
    "options_hi": ["sinϕ", "cosϕ", "tanϕ", "1/cosϕ"],
    "answer_en": "cosϕ",
    "answer_hi": "cosϕ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Transformer works on:",
    "question_hi": "ट्रांसफॉर्मर कार्य करता है:",
    "options_en": ["DC", "AC", "Both", "Static electricity"],
    "options_hi": ["DC", "AC", "दोनों", "स्थिर विद्युत"],
    "answer_en": "AC",
    "answer_hi": "AC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "SI unit of electric dipole moment:",
    "question_hi": "विद्युत द्विध्रुव आघूर्ण का SI मात्रक:",
    "options_en": ["C·m", "C/m²", "N/C", "F/m"],
    "options_hi": ["C·m", "C/m²", "N/C", "F/m"],
    "answer_en": "C·m",
    "answer_hi": "C·m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Electric lines of force never:",
    "question_hi": "विद्युत बल रेखाएं कभी नहीं:",
    "options_en": ["Start from negative charge", "End on positive charge", "Intersect", "Form closed loops"],
    "options_hi": ["ऋणात्मक आवेश से शुरू", "धनात्मक आवेश पर समाप्त", "प्रतिच्छेद करती हैं", "बंद लूप बनाती हैं"],
    "answer_en": "Intersect",
    "answer_hi": "प्रतिच्छेद करती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Capacitance increases with:",
    "question_hi": "धारिता बढ़ती है:",
    "options_en": ["More distance", "Less area", "More area", "Vacuum"],
    "options_hi": ["अधिक दूरी", "कम क्षेत्रफल", "अधिक क्षेत्रफल", "निर्वात"],
    "answer_en": "More area",
    "answer_hi": "अधिक क्षेत्रफल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "A semiconductor has conductivity:",
    "question_hi": "एक अर्धचालक की चालकता होती है:",
    "options_en": ["High", "Low", "Very high", "Between conductor & insulator"],
    "options_hi": ["उच्च", "निम्न", "बहुत उच्च", "चालक और कुचालक के बीच"],
    "answer_en": "Between conductor & insulator",
    "answer_hi": "चालक और कुचालक के बीच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "De Broglie wavelength increases when:",
    "question_hi": "डी ब्रॉग्ली तरंगदैर्ध्य बढ़ती है जब:",
    "options_en": ["Velocity increases", "Momentum increases", "Mass increases", "Velocity decreases"],
    "options_hi": ["वेग बढ़ता है", "संवेग बढ़ता है", "द्रव्यमान बढ़ता है", "वेग घटता है"],
    "answer_en": "Velocity decreases",
    "answer_hi": "वेग घटता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "In photoelectric effect, stopping potential depends on:",
    "question_hi": "प्रकाशविद्युत प्रभाव में, निरोधी विभव निर्भर करता है:",
    "options_en": ["Intensity", "Frequency", "Area", "Distance"],
    "options_hi": ["तीव्रता", "आवृत्ति", "क्षेत्रफल", "दूरी"],
    "answer_en": "Frequency",
    "answer_hi": "आवृत्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which radiation causes maximum ionisation?",
    "question_hi": "कौन सा विकिरण अधिकतम आयनन करता है?",
    "options_en": ["Gamma", "Alpha", "Beta", "X-rays"],
    "options_hi": ["गामा", "अल्फा", "बीटा", "एक्स-किरणें"],
    "answer_en": "Alpha",
    "answer_hi": "अल्फा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Binding energy per nucleon is maximum for:",
    "question_hi": "प्रति न्यूक्लियॉन बंधन ऊर्जा अधिकतम होती है:",
    "options_en": ["Uranium", "Hydrogen", "Iron", "Gold"],
    "options_hi": ["यूरेनियम", "हाइड्रोजन", "आयरन", "गोल्ड"],
    "answer_en": "Iron",
    "answer_hi": "आयरन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Nuclear fission releases energy due to:",
    "question_hi": "नाभिकीय विखंडन ऊर्जा मुक्त करता है:",
    "options_en": ["Mass defect", "Fusion", "Photon emission", "Friction"],
    "options_hi": ["द्रव्यमान क्षति", "संलयन", "फोटॉन उत्सर्जन", "घर्षण"],
    "answer_en": "Mass defect",
    "answer_hi": "द्रव्यमान क्षति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Half-life depends on:",
    "question_hi": "अर्ध-आयु निर्भर करती है:",
    "options_en": ["Pressure", "Temperature", "Nature of nucleus", "Mass"],
    "options_hi": ["दाब", "तापमान", "नाभिक की प्रकृति", "द्रव्यमान"],
    "answer_en": "Nature of nucleus",
    "answer_hi": "नाभिक की प्रकृति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which logic gate has output 1 only when both inputs are 1?",
    "question_hi": "कौन सा लॉजिक गेट आउटपुट 1 देता है केवल जब दोनों इनपुट 1 हों?",
    "options_en": ["OR", "NOR", "AND", "XOR"],
    "options_hi": ["OR", "NOR", "AND", "XOR"],
    "answer_en": "AND",
    "answer_hi": "AND",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "The output of NOT gate is:",
    "question_hi": "NOT गेट का आउटपुट होता है:",
    "options_en": ["Same as input", "Always 1", "Always 0", "Inverted"],
    "options_hi": ["इनपुट के समान", "हमेशा 1", "हमेशा 0", "उल्टा"],
    "answer_en": "Inverted",
    "answer_hi": "उल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The speed of EM waves in vacuum is:",
    "question_hi": "निर्वात में विद्युत चुम्बकीय तरंगों की चाल है:",
    "options_en": ["2×10⁸ m/s", "3×10⁸ m/s", "4×10⁸ m/s", "5×10⁸ m/s"],
    "options_hi": ["2×10⁸ मी/से", "3×10⁸ मी/से", "4×10⁸ मी/से", "5×10⁸ मी/से"],
    "answer_en": "3×10⁸ m/s",
    "answer_hi": "3×10⁸ मी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "CERN is famous for:",
    "question_hi": "CERN प्रसिद्ध है:",
    "options_en": ["Nuclear bombs", "Particle accelerator", "Solar studies", "Telescope"],
    "options_hi": ["नाभिकीय बम", "कण त्वरक", "सौर अध्ययन", "दूरबीन"],
    "answer_en": "Particle accelerator",
    "answer_hi": "कण त्वरक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Solar cells work on:",
    "question_hi": "सौर सेल कार्य करते हैं:",
    "options_en": ["Photoelectric effect", "Nuclear fusion", "Hall effect", "Thermal effect"],
    "options_hi": ["प्रकाशविद्युत प्रभाव", "नाभिकीय संलयन", "हॉल प्रभाव", "तापीय प्रभाव"],
    "answer_en": "Photoelectric effect",
    "answer_hi": "प्रकाशविद्युत प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Unit of activity of radioactive source:",
    "question_hi": "रेडियोधर्मी स्रोत की सक्रियता की इकाई:",
    "options_en": ["Becquerel", "Curie", "Tesla", "Weber"],
    "options_hi": ["बेकरेल", "क्यूरी", "टेस्ला", "वेबर"],
    "answer_en": "Becquerel",
    "answer_hi": "बेकरेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Hall effect is used to measure:",
    "question_hi": "हॉल प्रभाव उपयोग किया जाता है मापने के लिए:",
    "options_en": ["Frequency", "Magnetic field", "Voltage", "Current"],
    "options_hi": ["आवृत्ति", "चुंबकीय क्षेत्र", "वोल्टेज", "धारा"],
    "answer_en": "Magnetic field",
    "answer_hi": "चुंबकीय क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The charge of neutron is:",
    "question_hi": "न्यूट्रॉन का आवेश होता है:",
    "options_en": ["Positive", "Negative", "Zero", "Variable"],
    "options_hi": ["धनात्मक", "ऋणात्मक", "शून्य", "परिवर्तनशील"],
    "answer_en": "Zero",
    "answer_hi": "शून्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is a strong electrolyte?",
    "question_hi": "कौन सा प्रबल विद्युत अपघट्य है?",
    "options_en": ["NaCl", "CH₃COOH", "NH₄OH", "H₂O"],
    "options_hi": ["NaCl", "CH₃COOH", "NH₄OH", "H₂O"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which ray is used in TV remote?",
    "question_hi": "TV रिमोट में किस किरण का उपयोग होता है?",
    "options_en": ["X-ray", "Gamma", "Infrared", "UV"],
    "options_hi": ["एक्स-किरण", "गामा", "अवरक्त", "पराबैंगनी"],
    "answer_en": "Infrared",
    "answer_hi": "अवरक्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "SI unit of frequency:",
    "question_hi": "आवृत्ति का SI मात्रक:",
    "options_en": ["Hz", "N", "J", "W"],
    "options_hi": ["Hz", "N", "J", "W"],
    "answer_en": "Hz",
    "answer_hi": "Hz",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which has maximum wavelength?",
    "question_hi": "किसकी तरंगदैर्ध्य अधिकतम होती है?",
    "options_en": ["Red light", "Blue light", "Violet light", "Green light"],
    "options_hi": ["लाल प्रकाश", "नीला प्रकाश", "बैंगनी प्रकाश", "हरा प्रकाश"],
    "answer_en": "Red light",
    "answer_hi": "लाल प्रकाश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is not a scalar quantity?",
    "question_hi": "कौन सी अदिश राशि नहीं है?",
    "options_en": ["Temperature", "Pressure", "Work", "Impulse"],
    "options_hi": ["तापमान", "दाब", "कार्य", "संवेग"],
    "answer_en": "Impulse",
    "answer_hi": "संवेग",
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