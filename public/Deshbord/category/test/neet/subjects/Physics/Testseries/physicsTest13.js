const questions = [
  {
    "num": 1,
    "question_en": "Which law states that pressure at a point in a fluid is equal in all directions?",
    "question_hi": "कौन सा नियम कहता है कि एक तरल में एक बिंदु पर दाब सभी दिशाओं में समान होता है?",
    "options_en": ["Pascal's law", "Boyle's law", "Hooke's law", "Newton's law"],
    "options_hi": ["पास्कल का नियम", "बॉयल का नियम", "हुक का नियम", "न्यूटन का नियम"],
    "answer_en": "Pascal's law",
    "answer_hi": "पास्कल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Magnetic field at the center of a circular coil is directly proportional to:",
    "question_hi": "एक वृत्ताकार कुंडली के केंद्र पर चुंबकीय क्षेत्र सीधे आनुपातिक होता है:",
    "options_en": ["Radius", "Current", "Resistance", "Voltage"],
    "options_hi": ["त्रिज्या", "धारा", "प्रतिरोध", "वोल्टेज"],
    "answer_en": "Current",
    "answer_hi": "धारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which device is used to convert mechanical energy into electrical energy?",
    "question_hi": "कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलने के लिए उपयोग किया जाता है?",
    "options_en": ["Generator", "Motor", "Transformer", "Rectifier"],
    "options_hi": ["जनरेटर", "मोटर", "ट्रांसफॉर्मर", "दिष्टकारी"],
    "answer_en": "Generator",
    "answer_hi": "जनरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which type of lens is used to correct myopia?",
    "question_hi": "निकटदृष्टि को सही करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
    "options_en": ["Concave lens", "Convex lens", "Cylindrical lens", "Bifocal lens"],
    "options_hi": ["अवतल लेंस", "उत्तल लेंस", "बेलनाकार लेंस", "द्विफोकसी लेंस"],
    "answer_en": "Concave lens",
    "answer_hi": "अवतल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which quantity is conserved in elastic collision?",
    "question_hi": "प्रत्यास्थ संघट्ट में कौन सी राशि संरक्षित रहती है?",
    "options_en": ["Momentum", "Kinetic energy", "Both", "Neither"],
    "options_hi": ["संवेग", "गतिज ऊर्जा", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "A car accelerates from rest to 20 m/s in 4 s. Acceleration?",
    "question_hi": "एक कार विराम से 20 m/s तक 4 s में त्वरित होती है। त्वरण?",
    "options_en": ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    "options_hi": ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    "answer_en": "5 m/s²",
    "answer_hi": "5 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "SI unit of pressure?",
    "question_hi": "दाब का SI मात्रक?",
    "options_en": ["Pascal", "Atmosphere", "Bar", "N/cm²"],
    "options_hi": ["पास्कल", "वायुमंडल", "बार", "N/cm²"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which radiation is used for food sterilization?",
    "question_hi": "भोजन की जीवाणुरहितकरण के लिए किस विकिरण का उपयोग किया जाता है?",
    "options_en": ["Gamma rays", "X-rays", "Microwaves", "Infrared"],
    "options_hi": ["गामा किरणें", "एक्स-किरणें", "माइक्रोवेव", "अवरक्त"],
    "answer_en": "Gamma rays",
    "answer_hi": "गामा किरणें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the nature of light?",
    "question_hi": "प्रकाश की प्रकृति क्या है?",
    "options_en": ["Wave", "Particle", "Both", "None"],
    "options_hi": ["तरंग", "कण", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is dimensionless?",
    "question_hi": "निम्नलिखित में से कौन सा विमाहीन है?",
    "options_en": ["Refractive index", "Velocity", "Momentum", "Work"],
    "options_hi": ["अपवर्तनांक", "वेग", "संवेग", "कार्य"],
    "answer_en": "Refractive index",
    "answer_hi": "अपवर्तनांक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Mass = 10 kg, velocity = 3 m/s. Momentum?",
    "question_hi": "द्रव्यमान = 10 kg, वेग = 3 m/s। संवेग?",
    "options_en": ["10 kg m/s", "30 kg m/s", "3 kg m/s", "13 kg m/s"],
    "options_hi": ["10 kg m/s", "30 kg m/s", "3 kg m/s", "13 kg m/s"],
    "answer_en": "30 kg m/s",
    "answer_hi": "30 kg m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Work done when force is at 90° to displacement:",
    "question_hi": "जब बल विस्थापन के 90° पर हो तो किया गया कार्य:",
    "options_en": ["Maximum", "Minimum", "Zero", "Infinite"],
    "options_hi": ["अधिकतम", "न्यूनतम", "शून्य", "अनंत"],
    "answer_en": "Zero",
    "answer_hi": "शून्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Capacitor stores:",
    "question_hi": "संधारित्र संचित करता है:",
    "options_en": ["Charge", "Voltage", "Energy", "Current"],
    "options_hi": ["आवेश", "वोल्टेज", "ऊर्जा", "धारा"],
    "answer_en": "Energy",
    "answer_hi": "ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Derivative of displacement with respect to time is:",
    "question_hi": "समय के सापेक्ष विस्थापन का अवकलज है:",
    "options_en": ["Acceleration", "Velocity", "Force", "Momentum"],
    "options_hi": ["त्वरण", "वेग", "बल", "संवेग"],
    "answer_en": "Velocity",
    "answer_hi": "वेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which law gives direction of magnetic field?",
    "question_hi": "कौन सा नियम चुंबकीय क्षेत्र की दिशा देता है?",
    "options_en": ["Right-hand thumb rule", "Lenz's law", "Faraday's law", "Kirchhoff's law"],
    "options_hi": ["दायें हाथ का अंगूठा नियम", "लेंज का नियम", "फैराडे का नियम", "किरचॉफ का नियम"],
    "answer_en": "Right-hand thumb rule",
    "answer_hi": "दायें हाथ का अंगूठा नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "A body of weight 50 N is lifted 2 m. Work done?",
    "question_hi": "50 N भार के एक पिंड को 2 m उठाया जाता है। किया गया कार्य?",
    "options_en": ["50 J", "100 J", "150 J", "200 J"],
    "options_hi": ["50 J", "100 J", "150 J", "200 J"],
    "answer_en": "100 J",
    "answer_hi": "100 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Resistance increases with:",
    "question_hi": "प्रतिरोध बढ़ता है:",
    "options_en": ["Increase in temperature", "Decrease in length", "Decrease in resistivity", "Increase in area"],
    "options_hi": ["तापमान में वृद्धि", "लंबाई में कमी", "प्रतिरोधकता में कमी", "क्षेत्रफल में वृद्धि"],
    "answer_en": "Increase in temperature",
    "answer_hi": "तापमान में वृद्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is a scalar quantity?",
    "question_hi": "कौन सी अदिश राशि है?",
    "options_en": ["Displacement", "Velocity", "Force", "Speed"],
    "options_hi": ["विस्थापन", "वेग", "बल", "चाल"],
    "answer_en": "Speed",
    "answer_hi": "चाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which gas is used in discharge tubes?",
    "question_hi": "डिस्चार्ज ट्यूबों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Neon", "Oxygen", "Hydrogen", "Carbon dioxide"],
    "options_hi": ["नियॉन", "ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Sound is produced due to:",
    "question_hi": "ध्वनि उत्पन्न होती है:",
    "options_en": ["Vibrations", "Heat", "Pressure difference", "Flow of electrons"],
    "options_hi": ["कंपन", "ऊष्मा", "दाब अंतर", "इलेक्ट्रॉनों का प्रवाह"],
    "answer_en": "Vibrations",
    "answer_hi": "कंपन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Speed = 60 m/s, time = 2 s. Distance?",
    "question_hi": "चाल = 60 m/s, समय = 2 s। दूरी?",
    "options_en": ["30 m", "60 m", "90 m", "120 m"],
    "options_hi": ["30 m", "60 m", "90 m", "120 m"],
    "answer_en": "120 m",
    "answer_hi": "120 m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Radioactivity is measured in:",
    "question_hi": "रेडियोधर्मिता मापी जाती है:",
    "options_en": ["Becquerel", "Tesla", "Weber", "Henry"],
    "options_hi": ["बेकरेल", "टेस्ला", "वेबर", "हेनरी"],
    "answer_en": "Becquerel",
    "answer_hi": "बेकरेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Unit of angular velocity:",
    "question_hi": "कोणीय वेग की इकाई:",
    "options_en": ["rad/s", "m/s", "N·m", "Hz"],
    "options_hi": ["rad/s", "m/s", "N·m", "Hz"],
    "answer_en": "rad/s",
    "answer_hi": "rad/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Light year measures:",
    "question_hi": "प्रकाश वर्ष मापता है:",
    "options_en": ["Time", "Distance", "Velocity", "Acceleration"],
    "options_hi": ["समय", "दूरी", "वेग", "त्वरण"],
    "answer_en": "Distance",
    "answer_hi": "दूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which wave is used in TV remote?",
    "question_hi": "TV रिमोट में किस तरंग का उपयोग किया जाता है?",
    "options_en": ["Infrared", "Gamma", "UV", "X-rays"],
    "options_hi": ["अवरक्त", "गामा", "पराबैंगनी", "एक्स-किरणें"],
    "answer_en": "Infrared",
    "answer_hi": "अवरक्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "A wire has R resistance. If length doubled, R becomes:",
    "question_hi": "एक तार का प्रतिरोध R है। यदि लंबाई दोगुनी कर दी जाए, तो R हो जाता है:",
    "options_en": ["R/2", "R", "2R", "4R"],
    "options_hi": ["R/2", "R", "2R", "4R"],
    "answer_en": "2R",
    "answer_hi": "2R",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Property of wave that changes in refraction:",
    "question_hi": "तरंग का वह गुण जो अपवर्तन में बदलता है:",
    "options_en": ["Wavelength", "Amplitude", "Frequency", "Time period"],
    "options_hi": ["तरंगदैर्ध्य", "आयाम", "आवृत्ति", "आवर्तकाल"],
    "answer_en": "Wavelength",
    "answer_hi": "तरंगदैर्ध्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which radiation has highest frequency?",
    "question_hi": "किस विकिरण की आवृत्ति सबसे अधिक होती है?",
    "options_en": ["Microwave", "Infrared", "X-ray", "Gamma"],
    "options_hi": ["माइक्रोवेव", "अवरक्त", "एक्स-किरण", "गामा"],
    "answer_en": "Gamma",
    "answer_hi": "गामा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the angle of refraction when light enters a denser medium?",
    "question_hi": "जब प्रकाश सघन माध्यम में प्रवेश करता है तो अपवर्तन कोण क्या होता है?",
    "options_en": ["Less than incidence", "Greater", "Equal", "Zero"],
    "options_hi": ["आपतन से कम", "अधिक", "बराबर", "शून्य"],
    "answer_en": "Less than incidence",
    "answer_hi": "आपतन से कम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Ohm's law relates:",
    "question_hi": "ओम का नियम संबंधित करता है:",
    "options_en": ["Voltage & current", "Resistance & charge", "Power & energy", "Current & frequency"],
    "options_hi": ["वोल्टेज और धारा", "प्रतिरोध और आवेश", "शक्ति और ऊर्जा", "धारा और आवृत्ति"],
    "answer_en": "Voltage & current",
    "answer_hi": "वोल्टेज और धारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Current = 5 A, resistance = 4 Ω. Voltage?",
    "question_hi": "धारा = 5 A, प्रतिरोध = 4 Ω। वोल्टेज?",
    "options_en": ["5 V", "10 V", "15 V", "20 V"],
    "options_hi": ["5 V", "10 V", "15 V", "20 V"],
    "answer_en": "20 V",
    "answer_hi": "20 V",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Minimum speed to escape gravity:",
    "question_hi": "गुरुत्वाकर्षण से बचने के लिए न्यूनतम चाल:",
    "options_en": ["Orbital velocity", "Escape velocity", "Terminal velocity", "Drift velocity"],
    "options_hi": ["कक्षीय वेग", "पलायन वेग", "टर्मिनल वेग", "अपवाह वेग"],
    "answer_en": "Escape velocity",
    "answer_hi": "पलायन वेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Speed of light is:",
    "question_hi": "प्रकाश की चाल है:",
    "options_en": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3000 m/s"],
    "options_hi": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3000 m/s"],
    "answer_en": "3×10⁸ m/s",
    "answer_hi": "3×10⁸ m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which device detects current?",
    "question_hi": "कौन सा उपकरण धारा का पता लगाता है?",
    "options_en": ["Galvanometer", "Voltmeter", "Ammeter", "Hygrometer"],
    "options_hi": ["गैल्वेनोमीटर", "वोल्टमीटर", "अमीटर", "आर्द्रतामापी"],
    "answer_en": "Galvanometer",
    "answer_hi": "गैल्वेनोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which material is a good conductor?",
    "question_hi": "कौन सा पदार्थ एक अच्छा चालक है?",
    "options_en": ["Copper", "Rubber", "Wood", "Plastic"],
    "options_hi": ["तांबा", "रबर", "लकड़ी", "प्लास्टिक"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "If frequency = 50 Hz, time period?",
    "question_hi": "यदि आवृत्ति = 50 Hz, तो आवर्तकाल?",
    "options_en": ["0.02 s", "0.5 s", "2 s", "50 s"],
    "options_hi": ["0.02 s", "0.5 s", "2 s", "50 s"],
    "answer_en": "0.02 s",
    "answer_hi": "0.02 s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Heat transfer in vacuum occurs by:",
    "question_hi": "निर्वात में ऊष्मा स्थानांतरण होता है:",
    "options_en": ["Conduction", "Convection", "Radiation", "Reflection"],
    "options_hi": ["चालन", "संवहन", "विकिरण", "परावर्तन"],
    "answer_en": "Radiation",
    "answer_hi": "विकिरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which has maximum inertia?",
    "question_hi": "किसमें अधिकतम जड़त्व होता है?",
    "options_en": ["Bus", "Car", "Cycle", "Bullet"],
    "options_hi": ["बस", "कार", "साइकिल", "गोली"],
    "answer_en": "Bus",
    "answer_hi": "बस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is unit of electric charge?",
    "question_hi": "विद्युत आवेश की इकाई क्या है?",
    "options_en": ["Coulomb", "Ampere", "Volt", "Tesla"],
    "options_hi": ["कूलम्ब", "एम्पियर", "वोल्ट", "टेस्ला"],
    "answer_en": "Coulomb",
    "answer_hi": "कूलम्ब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which has highest refractive index?",
    "question_hi": "किसका अपवर्तनांक सबसे अधिक होता है?",
    "options_en": ["Water", "Glass", "Diamond", "Alcohol"],
    "options_hi": ["जल", "कांच", "हीरा", "अल्कोहल"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Power = 50 W, time = 4 s. Energy used?",
    "question_hi": "शक्ति = 50 W, समय = 4 s। उपयोग की गई ऊर्जा?",
    "options_en": ["50 J", "100 J", "150 J", "200 J"],
    "options_hi": ["50 J", "100 J", "150 J", "200 J"],
    "answer_en": "200 J",
    "answer_hi": "200 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which state has maximum density?",
    "question_hi": "किस अवस्था में अधिकतम घनत्व होता है?",
    "options_en": ["Solid", "Liquid", "Gas", "Plasma"],
    "options_hi": ["ठोस", "द्रव", "गैस", "प्लाज्मा"],
    "answer_en": "Solid",
    "answer_hi": "ठोस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Elasticity is property of:",
    "question_hi": "प्रत्यास्थता गुण है:",
    "options_en": ["Rubber", "Glass", "Plastic", "Iron"],
    "options_hi": ["रबर", "कांच", "प्लास्टिक", "लोहा"],
    "answer_en": "Iron",
    "answer_hi": "लोहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Diffraction is bending of light around:",
    "question_hi": "विवर्तन प्रकाश का मुड़ना है:",
    "options_en": ["Corners", "Mirrors", "Lenses", "Wires"],
    "options_hi": ["कोनों", "दर्पणों", "लेंसों", "तारों"],
    "answer_en": "Corners",
    "answer_hi": "कोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Ammeter is connected in:",
    "question_hi": "अमीटर जुड़ा होता है:",
    "options_en": ["Series", "Parallel", "Both", "Neither"],
    "options_hi": ["श्रृंखला", "समानांतर", "दोनों", "कोई नहीं"],
    "answer_en": "Series",
    "answer_hi": "श्रृंखला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Wave speed = 300 m/s, wavelength = 3 m. Frequency?",
    "question_hi": "तरंग चाल = 300 m/s, तरंगदैर्ध्य = 3 m। आवृत्ति?",
    "options_en": ["10 Hz", "50 Hz", "100 Hz", "300 Hz"],
    "options_hi": ["10 Hz", "50 Hz", "100 Hz", "300 Hz"],
    "answer_en": "100 Hz",
    "answer_hi": "100 Hz",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Value of g on moon?",
    "question_hi": "चंद्रमा पर g का मान?",
    "options_en": ["1.6 m/s²", "3.5 m/s²", "9.8 m/s²", "12 m/s²"],
    "options_hi": ["1.6 m/s²", "3.5 m/s²", "9.8 m/s²", "12 m/s²"],
    "answer_en": "1.6 m/s²",
    "answer_hi": "1.6 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Instrument used to measure humidity?",
    "question_hi": "आर्द्रता मापने के लिए उपयोग किया जाने वाला उपकरण?",
    "options_en": ["Hygrometer", "Manometer", "Anemometer", "Barometer"],
    "options_hi": ["आर्द्रतामापी", "मैनोमीटर", "एनीमोमीटर", "बैरोमीटर"],
    "answer_en": "Hygrometer",
    "answer_hi": "आर्द्रतामापी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Radiation emitted by hot bodies:",
    "question_hi": "गर्म पिंडों द्वारा उत्सर्जित विकिरण:",
    "options_en": ["Infrared", "Gamma", "X-ray", "Microwave"],
    "options_hi": ["अवरक्त", "गामा", "एक्स-किरण", "माइक्रोवेव"],
    "answer_en": "Infrared",
    "answer_hi": "अवरक्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which law explains photoelectric effect?",
    "question_hi": "कौन सा नियम प्रकाशविद्युत प्रभाव की व्याख्या करता है?",
    "options_en": ["Einstein's equation", "Newton's law", "Kepler's law", "Gauss's law"],
    "options_hi": ["आइंस्टीन का समीकरण", "न्यूटन का नियम", "केप्लर का नियम", "गॉस का नियम"],
    "answer_en": "Einstein's equation",
    "answer_hi": "आइंस्टीन का समीकरण",
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