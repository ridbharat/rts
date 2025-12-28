const questions = [
  {
    "num": 1,
    "question_en": "Lenz's law gives the direction of which quantity?",
    "question_hi": "लेंज का नियम किस राशि की दिशा देता है?",
    "options_en": ["Induced EMF", "Induced current", "Magnetic flux", "Resistance"],
    "options_hi": ["प्रेरित विद्युत वाहक बल", "प्रेरित धारा", "चुंबकीय फ्लक्स", "प्रतिरोध"],
    "answer_en": "Induced current",
    "answer_hi": "प्रेरित धारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the SI unit of magnetic flux?",
    "question_hi": "चुंबकीय फ्लक्स का SI मात्रक क्या है?",
    "options_en": ["Tesla", "Weber", "Henry", "Volt"],
    "options_hi": ["टेस्ला", "वेबर", "हेनरी", "वोल्ट"],
    "answer_en": "Weber",
    "answer_hi": "वेबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which physical quantity has unit N·m?",
    "question_hi": "किस भौतिक राशि की इकाई N·m है?",
    "options_en": ["Work", "Torque", "Power", "Pressure"],
    "options_hi": ["कार्य", "बल आघूर्ण", "शक्ति", "दाब"],
    "answer_en": "Torque",
    "answer_hi": "बल आघूर्ण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Projectile motion has which type of path?",
    "question_hi": "प्रक्षेप्य गति में किस प्रकार का पथ होता है?",
    "options_en": ["Circular", "Parabolic", "Linear", "Elliptical"],
    "options_hi": ["वृत्ताकार", "परवलयिक", "रैखिक", "दीर्घवृत्तीय"],
    "answer_en": "Parabolic",
    "answer_hi": "परवलयिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "In SHM, acceleration is proportional to:",
    "question_hi": "सरल आवर्त गति में, त्वरण समानुपाती होता है:",
    "options_en": ["Velocity", "Displacement", "Energy", "Frequency"],
    "options_hi": ["वेग", "विस्थापन", "ऊर्जा", "आवृत्ति"],
    "answer_en": "Displacement",
    "answer_hi": "विस्थापन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "A 4 kg body has a force of 8 N acting on it. What is acceleration?",
    "question_hi": "4 kg द्रव्यमान के पिंड पर 8 N बल कार्य कर रहा है। त्वरण क्या है?",
    "options_en": ["1 m/s²", "2 m/s²", "4 m/s²", "8 m/s²"],
    "options_hi": ["1 m/s²", "2 m/s²", "4 m/s²", "8 m/s²"],
    "answer_en": "2 m/s²",
    "answer_hi": "2 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Escape velocity on Earth is approximately:",
    "question_hi": "पृथ्वी पर पलायन वेग लगभग है:",
    "options_en": ["9.8 km/s", "11.2 km/s", "7.8 km/s", "3 km/s"],
    "options_hi": ["9.8 km/s", "11.2 km/s", "7.8 km/s", "3 km/s"],
    "answer_en": "11.2 km/s",
    "answer_hi": "11.2 km/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Convex mirror always gives which image?",
    "question_hi": "उत्तल दर्पण हमेशा कौन सा प्रतिबिम्ब देता है?",
    "options_en": ["Real & inverted", "Virtual & erect", "Real & erect", "Sometimes real"],
    "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "कभी-कभी वास्तविक"],
    "answer_en": "Virtual & erect",
    "answer_hi": "आभासी और सीधा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which particle has least penetration?",
    "question_hi": "किस कण की भेदन क्षमता सबसे कम होती है?",
    "options_en": ["Alpha", "Beta", "Gamma", "Neutron"],
    "options_hi": ["अल्फा", "बीटा", "गामा", "न्यूट्रॉन"],
    "answer_en": "Alpha",
    "answer_hi": "अल्फा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Power factor of pure inductor is:",
    "question_hi": "शुद्ध प्रेरक का पावर फैक्टर होता है:",
    "options_en": ["0", "1", "-1", "0.5"],
    "options_hi": ["0", "1", "-1", "0.5"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "A 3 m long wire has resistance 6 Ω. What is resistance of 6 m long wire?",
    "question_hi": "3 m लंबे तार का प्रतिरोध 6 Ω है। 6 m लंबे तार का प्रतिरोध क्या है?",
    "options_en": ["6 Ω", "9 Ω", "12 Ω", "18 Ω"],
    "options_hi": ["6 Ω", "9 Ω", "12 Ω", "18 Ω"],
    "answer_en": "12 Ω",
    "answer_hi": "12 Ω",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Sonar pulse takes 2 seconds to return. Speed = 1500 m/s. Depth?",
    "question_hi": "सोनार स्पंद को वापस आने में 2 सेकंड लगते हैं। चाल = 1500 m/s। गहराई?",
    "options_en": ["750 m", "1500 m", "3000 m", "6000 m"],
    "options_hi": ["750 m", "1500 m", "3000 m", "6000 m"],
    "answer_en": "1500 m",
    "answer_hi": "1500 m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Energy of photon is expressed as:",
    "question_hi": "फोटॉन की ऊर्जा व्यक्त की जाती है:",
    "options_en": ["hf", "f/h", "h²f", "1/hf"],
    "options_hi": ["hf", "f/h", "h²f", "1/hf"],
    "answer_en": "hf",
    "answer_hi": "hf",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "A couple produces:",
    "question_hi": "एक युगल उत्पन्न करता है:",
    "options_en": ["Acceleration", "Rotation", "Translation", "Vibration"],
    "options_hi": ["त्वरण", "घूर्णन", "सरण", "कंपन"],
    "answer_en": "Rotation",
    "answer_hi": "घूर्णन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Phase difference between displacement & acceleration in SHM is:",
    "question_hi": "सरल आवर्त गति में विस्थापन और त्वरण के बीच कलांतर होता है:",
    "options_en": ["0", "π", "π/2", "2π"],
    "options_hi": ["0", "π", "π/2", "2π"],
    "answer_en": "π",
    "answer_hi": "π",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "A body oscillates with frequency 2 Hz. Time period?",
    "question_hi": "एक पिंड 2 Hz आवृत्ति से दोलन करता है। आवर्तकाल?",
    "options_en": ["0.25 s", "0.5 s", "1 s", "2 s"],
    "options_hi": ["0.25 s", "0.5 s", "1 s", "2 s"],
    "answer_en": "0.5 s",
    "answer_hi": "0.5 s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Drift velocity increases when:",
    "question_hi": "अपवाह वेग बढ़ता है जब:",
    "options_en": ["Area increases", "Temperature increases", "Potential difference increases", "Resistance increases"],
    "options_hi": ["क्षेत्रफल बढ़ता है", "तापमान बढ़ता है", "विभवांतर बढ़ता है", "प्रतिरोध बढ़ता है"],
    "answer_en": "Potential difference increases",
    "answer_hi": "विभवांतर बढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "A diode conducts current in:",
    "question_hi": "एक डायोड धारा का चालन करता है:",
    "options_en": ["Both directions", "Only forward direction", "Only reverse", "Random"],
    "options_hi": ["दोनों दिशाओं में", "केवल अग्र दिशा में", "केवल उत्क्रम", "यादृच्छिक"],
    "answer_en": "Only forward direction",
    "answer_hi": "केवल अग्र दिशा में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Speed of light is maximum in:",
    "question_hi": "प्रकाश की चाल अधिकतम होती है:",
    "options_en": ["Water", "Glass", "Air", "Vacuum"],
    "options_hi": ["जल", "कांच", "वायु", "निर्वात"],
    "answer_en": "Vacuum",
    "answer_hi": "निर्वात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Coulomb's law holds for:",
    "question_hi": "कूलम्ब का नियम मान्य है:",
    "options_en": ["Static charges", "Moving charges", "Neutral bodies", "Conductors"],
    "options_hi": ["स्थिर आवेशों के लिए", "गतिमान आवेशों के लिए", "उदासीन पिंडों के लिए", "चालकों के लिए"],
    "answer_en": "Static charges",
    "answer_hi": "स्थिर आवेशों के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "2 C charge passes in 0.5 s. Current?",
    "question_hi": "2 C आवेश 0.5 s में प्रवाहित होता है। धारा?",
    "options_en": ["1 A", "2 A", "3 A", "4 A"],
    "options_hi": ["1 A", "2 A", "3 A", "4 A"],
    "answer_en": "4 A",
    "answer_hi": "4 A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Carnot efficiency depends on:",
    "question_hi": "कार्नोट दक्षता निर्भर करती है:",
    "options_en": ["Pressure", "Temperature", "Volume", "Entropy"],
    "options_hi": ["दाब", "तापमान", "आयतन", "एन्ट्रॉपी"],
    "answer_en": "Temperature",
    "answer_hi": "तापमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which EM wave has highest energy?",
    "question_hi": "किस विद्युत चुम्बकीय तरंग की ऊर्जा सबसे अधिक होती है?",
    "options_en": ["Radio", "Visible", "UV", "Gamma"],
    "options_hi": ["रेडियो", "दृश्य", "पराबैंगनी", "गामा"],
    "answer_en": "Gamma",
    "answer_hi": "गामा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Moment of inertia depends on:",
    "question_hi": "जड़त्व आघूर्ण निर्भर करता है:",
    "options_en": ["Mass", "Mass distribution", "Axis of rotation", "All of these"],
    "options_hi": ["द्रव्यमान", "द्रव्यमान वितरण", "घूर्णन अक्ष", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is a vector?",
    "question_hi": "कौन सी सदिश राशि है?",
    "options_en": ["Work", "Energy", "Momentum", "Power"],
    "options_hi": ["कार्य", "ऊर्जा", "संवेग", "शक्ति"],
    "answer_en": "Momentum",
    "answer_hi": "संवेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "A 2 kg object lifted to 5 m (g=10). Potential energy?",
    "question_hi": "2 kg वस्तु को 5 m ऊपर उठाया जाता है (g=10)। स्थितिज ऊर्जा?",
    "options_en": ["50 J", "100 J", "150 J", "200 J"],
    "options_hi": ["50 J", "100 J", "150 J", "200 J"],
    "answer_en": "100 J",
    "answer_hi": "100 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Refractive index of vacuum is:",
    "question_hi": "निर्वात का अपवर्तनांक होता है:",
    "options_en": ["0", "1", "2", "Infinity"],
    "options_hi": ["0", "1", "2", "अनंत"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is contact force?",
    "question_hi": "कौन सा सम्पर्क बल है?",
    "options_en": ["Friction", "Magnetic", "Electrostatic", "Gravitational"],
    "options_hi": ["घर्षण", "चुंबकीय", "विद्युत्स्थैतिक", "गुरुत्वाकर्षण"],
    "answer_en": "Friction",
    "answer_hi": "घर्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "AC to DC conversion is done by:",
    "question_hi": "AC से DC रूपांतरण किया जाता है:",
    "options_en": ["Transformer", "Rectifier", "Inductor", "Oscillator"],
    "options_hi": ["ट्रांसफॉर्मर", "दिष्टकारी", "प्रेरक", "दोलक"],
    "answer_en": "Rectifier",
    "answer_hi": "दिष्टकारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
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
    "num": 31,
    "question_en": "A 100 W bulb used for 2 hours consumes energy:",
    "question_hi": "100 W बल्ब 2 घंटे तक उपयोग करने पर ऊर्जा खपत:",
    "options_en": ["200 J", "7200 J", "720000 J", "20000 J"],
    "options_hi": ["200 J", "7200 J", "720000 J", "20000 J"],
    "answer_en": "720000 J",
    "answer_hi": "720000 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Net torque in equilibrium is:",
    "question_hi": "संतुलन में नेट बल आघूर्ण होता है:",
    "options_en": ["Zero", "Max", "Min", "Infinite"],
    "options_hi": ["शून्य", "अधिकतम", "न्यूनतम", "अनंत"],
    "answer_en": "Zero",
    "answer_hi": "शून्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Least penetrating radiation:",
    "question_hi": "सबसे कम भेदन वाला विकिरण:",
    "options_en": ["Alpha", "Beta", "Gamma", "X-ray"],
    "options_hi": ["अल्फा", "बीटा", "गामा", "एक्स-किरण"],
    "answer_en": "Alpha",
    "answer_hi": "अल्फा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Semiconductors have:",
    "question_hi": "अर्धचालकों में होता है:",
    "options_en": ["Zero resistance", "Infinite resistance", "Moderate resistance", "Random resistance"],
    "options_hi": ["शून्य प्रतिरोध", "अनंत प्रतिरोध", "मध्यम प्रतिरोध", "यादृच्छिक प्रतिरोध"],
    "answer_en": "Moderate resistance",
    "answer_hi": "मध्यम प्रतिरोध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Sound needs which medium?",
    "question_hi": "ध्वनि को किस माध्यम की आवश्यकता होती है?",
    "options_en": ["Vacuum", "Iron", "None", "Vacuum only"],
    "options_hi": ["निर्वात", "लोहा", "कोई नहीं", "केवल निर्वात"],
    "answer_en": "Iron",
    "answer_hi": "लोहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "A body moves 10 m in 2 s (from rest). Acceleration?",
    "question_hi": "एक पिंड 2 s में 10 m चलता है (विराम से)। त्वरण?",
    "options_en": ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    "options_hi": ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    "answer_en": "5 m/s²",
    "answer_hi": "5 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Power is rate of:",
    "question_hi": "शक्ति दर है:",
    "options_en": ["Force", "Work done", "Mass", "Displacement"],
    "options_hi": ["बल", "किए गए कार्य", "द्रव्यमान", "विस्थापन"],
    "answer_en": "Work done",
    "answer_hi": "किए गए कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Magnetic field inside long solenoid is:",
    "question_hi": "लंबी परिनालिका के अंदर चुंबकीय क्षेत्र होता है:",
    "options_en": ["Zero", "Decreases", "Increases", "Uniform"],
    "options_hi": ["शून्य", "घटता है", "बढ़ता है", "समान"],
    "answer_en": "Uniform",
    "answer_hi": "समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Work done when displacement is ⟂ to force:",
    "question_hi": "जब विस्थापन बल के लंबवत हो तो किया गया कार्य:",
    "options_en": ["Maximum", "Minimum", "Zero", "Infinite"],
    "options_hi": ["अधिकतम", "न्यूनतम", "शून्य", "अनंत"],
    "answer_en": "Zero",
    "answer_hi": "शून्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Electric field lines never:",
    "question_hi": "विद्युत क्षेत्र रेखाएं कभी नहीं:",
    "options_en": ["Begin on + charge", "Intersect", "End on – charge", "Curve"],
    "options_hi": ["+ आवेश से शुरू", "प्रतिच्छेद करती हैं", "- आवेश पर समाप्त", "मुड़ती हैं"],
    "answer_en": "Intersect",
    "answer_hi": "प्रतिच्छेद करती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "A 10 Ω resistor carries 3 A current. Power?",
    "question_hi": "10 Ω प्रतिरोधक में 3 A धारा प्रवाहित होती है। शक्ति?",
    "options_en": ["10 W", "30 W", "60 W", "90 W"],
    "options_hi": ["10 W", "30 W", "60 W", "90 W"],
    "answer_en": "90 W",
    "answer_hi": "90 W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Time period of geostationary orbit:",
    "question_hi": "भू-स्थिर कक्षा का आवर्तकाल:",
    "options_en": ["6 h", "12 h", "18 h", "24 h"],
    "options_hi": ["6 h", "12 h", "18 h", "24 h"],
    "answer_en": "24 h",
    "answer_hi": "24 h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Unit of angular momentum:",
    "question_hi": "कोणीय संवेग की इकाई:",
    "options_en": ["J", "N·m", "kg m²/s", "W"],
    "options_hi": ["J", "N·m", "kg m²/s", "W"],
    "answer_en": "kg m²/s",
    "answer_hi": "kg m²/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Capacitance increases when:",
    "question_hi": "धारिता बढ़ती है जब:",
    "options_en": ["Area decreases", "Plate distance increases", "Dielectric increases", "None"],
    "options_hi": ["क्षेत्रफल घटता है", "प्लेट दूरी बढ़ती है", "परावैद्युत बढ़ता है", "कोई नहीं"],
    "answer_en": "Dielectric increases",
    "answer_hi": "परावैद्युत बढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Longitudinal wave example:",
    "question_hi": "अनुदैर्ध्य तरंग उदाहरण:",
    "options_en": ["Light", "X-ray", "Sound", "Gamma"],
    "options_hi": ["प्रकाश", "एक्स-किरण", "ध्वनि", "गामा"],
    "answer_en": "Sound",
    "answer_hi": "ध्वनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "For a convex lens, u = –30 cm, f = 15 cm. Magnification?",
    "question_hi": "उत्तल लेंस के लिए, u = –30 cm, f = 15 cm। आवर्धन?",
    "options_en": ["2", "1", "0.5", "-1"],
    "options_hi": ["2", "1", "0.5", "-1"],
    "answer_en": "0.5",
    "answer_hi": "0.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which law explains fluid pressure?",
    "question_hi": "कौन सा नियम द्रव दाब की व्याख्या करता है?",
    "options_en": ["Hooke", "Pascal", "Newton", "Faraday"],
    "options_hi": ["हुक", "पास्कल", "न्यूटन", "फैराडे"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Minimum angle for TIR:",
    "question_hi": "पूर्ण आंतरिक परावर्तन के लिए न्यूनतम कोण:",
    "options_en": ["Polarizing angle", "Critical angle", "Glancing angle", "Acute angle"],
    "options_hi": ["ध्रुवण कोण", "क्रांतिक कोण", "सरसरी कोण", "न्यून कोण"],
    "answer_en": "Critical angle",
    "answer_hi": "क्रांतिक कोण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Unit of potential difference:",
    "question_hi": "विभवांतर की इकाई:",
    "options_en": ["Ampere", "Volt", "Coulomb", "Newton"],
    "options_hi": ["एम्पियर", "वोल्ट", "कूलम्ब", "न्यूटन"],
    "answer_en": "Volt",
    "answer_hi": "वोल्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Dual nature of light was explained by:",
    "question_hi": "प्रकाश की द्वैत प्रकृति की व्याख्या की थी:",
    "options_en": ["Bohr", "Maxwell", "Einstein", "Newton"],
    "options_hi": ["बोहर", "मैक्सवेल", "आइंस्टीन", "न्यूटन"],
    "answer_en": "Einstein",
    "answer_hi": "आइंस्टीन",
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