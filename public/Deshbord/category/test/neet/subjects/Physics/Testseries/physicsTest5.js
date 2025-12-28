const questions = [
  {
    "num": 1,
    "question_en": "Which physical quantity has the unit Tesla?",
    "question_hi": "किस भौतिक राशि का मात्रक टेस्ला है?",
    "options_en": ["Magnetic field", "Electric field", "Pressure", "Force"],
    "options_hi": ["चुंबकीय क्षेत्र", "विद्युत क्षेत्र", "दाब", "बल"],
    "answer_en": "Magnetic field",
    "answer_hi": "चुंबकीय क्षेत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which law explains the direction of induced current?",
    "question_hi": "कौन सा नियम प्रेरित धारा की दिशा बताता है?",
    "options_en": ["Lenz's law", "Coulomb's law", "Ohm's law", "Faraday's law"],
    "options_hi": ["लेंज का नियम", "कूलम्ब का नियम", "ओम का नियम", "फैराडे का नियम"],
    "answer_en": "Lenz's law",
    "answer_hi": "लेंज का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which energy is stored in a capacitor?",
    "question_hi": "संधारित्र में कौन सी ऊर्जा संचित होती है?",
    "options_en": ["Magnetic energy", "Chemical energy", "Electric potential energy", "Mechanical energy"],
    "options_hi": ["चुंबकीय ऊर्जा", "रासायनिक ऊर्जा", "विद्युत स्थितिज ऊर्जा", "यांत्रिक ऊर्जा"],
    "answer_en": "Electric potential energy",
    "answer_hi": "विद्युत स्थितिज ऊर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which particle has no charge?",
    "question_hi": "किस कण पर कोई आवेश नहीं होता?",
    "options_en": ["Electron", "Proton", "Neutron", "Positron"],
    "options_hi": ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "पॉजिट्रॉन"],
    "answer_en": "Neutron",
    "answer_hi": "न्यूट्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "SI unit of angular velocity is:",
    "question_hi": "कोणीय वेग का SI मात्रक है:",
    "options_en": ["rad/s", "m/s²", "m/s", "kg m/s"],
    "options_hi": ["rad/s", "m/s²", "m/s", "kg m/s"],
    "answer_en": "rad/s",
    "answer_hi": "rad/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "If velocity doubles, kinetic energy becomes:",
    "question_hi": "यदि वेग दोगुना हो जाए, तो गतिज ऊर्जा हो जाती है:",
    "options_en": ["Half", "Double", "Four times", "Same"],
    "options_hi": ["आधी", "दोगुनी", "चार गुनी", "समान"],
    "answer_en": "Four times",
    "answer_hi": "चार गुनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which device converts AC to DC?",
    "question_hi": "कौन सा उपकरण AC को DC में बदलता है?",
    "options_en": ["Transformer", "Rectifier", "Motor", "Generator"],
    "options_hi": ["ट्रांसफॉर्मर", "रेक्टिफायर", "मोटर", "जनरेटर"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which radiation is used in night vision?",
    "question_hi": "नाइट विजन में किस विकिरण का उपयोग होता है?",
    "options_en": ["Infrared", "Ultraviolet", "Gamma rays", "Microwaves"],
    "options_hi": ["अवरक्त", "पराबैंगनी", "गामा किरणें", "माइक्रोवेव"],
    "answer_en": "Infrared",
    "answer_hi": "अवरक्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the SI unit of electric flux?",
    "question_hi": "विद्युत फ्लक्स का SI मात्रक क्या है?",
    "options_en": ["Volt", "Coulomb", "Weber", "Newton meter²/C"],
    "options_hi": ["वोल्ट", "कूलम्ब", "वेबर", "न्यूटन मीटर²/C"],
    "answer_en": "Newton meter²/C",
    "answer_hi": "न्यूटन मीटर²/C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which quantity remains constant in uniform circular motion?",
    "question_hi": "एकसमान वृत्तीय गति में कौन सी राशि स्थिर रहती है?",
    "options_en": ["Velocity", "Speed", "Acceleration", "Centripetal force"],
    "options_hi": ["वेग", "चाल", "त्वरण", "अभिकेंद्रीय बल"],
    "answer_en": "Speed",
    "answer_hi": "चाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The slope of displacement-time graph gives:",
    "question_hi": "विस्थापन-समय ग्राफ का ढलान देता है:",
    "options_en": ["Speed", "Force", "Power", "Impulse"],
    "options_hi": ["चाल", "बल", "शक्ति", "संवेग"],
    "answer_en": "Speed",
    "answer_hi": "चाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which instrument is used to measure gas pressure?",
    "question_hi": "गैस दाब मापने के लिए किस उपकरण का उपयोग होता है?",
    "options_en": ["Manometer", "Hygrometer", "Ammeter", "Lactometer"],
    "options_hi": ["मैनोमीटर", "आर्द्रतामापी", "अमीटर", "लैक्टोमीटर"],
    "answer_en": "Manometer",
    "answer_hi": "मैनोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which law states that current is directly proportional to voltage?",
    "question_hi": "कौन सा नियम कहता है कि धारा वोल्टेज के समानुपाती होती है?",
    "options_en": ["Newton's law", "Ohm's law", "Lenz law", "Boyle law"],
    "options_hi": ["न्यूटन का नियम", "ओम का नियम", "लेंज नियम", "बॉयल नियम"],
    "answer_en": "Ohm's law",
    "answer_hi": "ओम का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "In which medium does sound travel fastest?",
    "question_hi": "किस माध्यम में ध्वनि सबसे तेज चलती है?",
    "options_en": ["Air", "Vacuum", "Water", "Steel"],
    "options_hi": ["वायु", "निर्वात", "जल", "स्टील"],
    "answer_en": "Steel",
    "answer_hi": "स्टील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the unit of refractive index?",
    "question_hi": "अपवर्तनांक की इकाई क्या है?",
    "options_en": ["m", "No unit", "m/s", "Hz"],
    "options_hi": ["m", "कोई इकाई नहीं", "m/s", "Hz"],
    "answer_en": "No unit",
    "answer_hi": "कोई इकाई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which effect shows particle nature of light?",
    "question_hi": "कौन सा प्रभाव प्रकाश की कण प्रकृति दर्शाता है?",
    "options_en": ["Interference", "Diffraction", "Photoelectric effect", "Polarization"],
    "options_hi": ["व्यतिकरण", "विवर्तन", "प्रकाशविद्युत प्रभाव", "ध्रुवण"],
    "answer_en": "Photoelectric effect",
    "answer_hi": "प्रकाशविद्युत प्रभाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the unit of gravitational potential energy?",
    "question_hi": "गुरुत्वीय स्थितिज ऊर्जा की इकाई क्या है?",
    "options_en": ["Watt", "Joule", "Newton", "Pascal"],
    "options_hi": ["वाट", "जूल", "न्यूटन", "पास्कल"],
    "answer_en": "Joule",
    "answer_hi": "जूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which device works on mutual induction?",
    "question_hi": "कौन सा उपकरण पारस्परिक प्रेरण पर कार्य करता है?",
    "options_en": ["Inductor", "Transformer", "Battery", "Diode"],
    "options_hi": ["प्रेरक", "ट्रांसफॉर्मर", "बैटरी", "डायोड"],
    "answer_en": "Transformer",
    "answer_hi": "ट्रांसफॉर्मर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which law states pressure is transmitted equally in all directions?",
    "question_hi": "कौन सा नियम कहता है कि दाब सभी दिशाओं में समान रूप से संचरित होता है?",
    "options_en": ["Pascal's law", "Archimedes principle", "Hooke's law", "Boyle's law"],
    "options_hi": ["पास्कल का नियम", "आर्किमिडीज सिद्धांत", "हुक का नियम", "बॉयल का नियम"],
    "answer_en": "Pascal's law",
    "answer_hi": "पास्कल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which type of waves are sound waves?",
    "question_hi": "ध्वनि तरंगें किस प्रकार की तरंगें हैं?",
    "options_en": ["Transverse", "Longitudinal", "Electromagnetic", "Polarized"],
    "options_hi": ["अनुप्रस्थ", "अनुदैर्ध्य", "विद्युत चुम्बकीय", "ध्रुवित"],
    "answer_en": "Longitudinal",
    "answer_hi": "अनुदैर्ध्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the escape velocity on Earth?",
    "question_hi": "पृथ्वी पर पलायन वेग कितना है?",
    "options_en": ["1 km/s", "11.2 km/s", "4 km/s", "2 km/s"],
    "options_hi": ["1 km/s", "11.2 km/s", "4 km/s", "2 km/s"],
    "answer_en": "11.2 km/s",
    "answer_hi": "11.2 km/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which device stores magnetic energy?",
    "question_hi": "कौन सा उपकरण चुंबकीय ऊर्जा संचित करता है?",
    "options_en": ["Inductor", "Capacitor", "Resistor", "Zener diode"],
    "options_hi": ["प्रेरक", "संधारित्र", "प्रतिरोधक", "जेनर डायोड"],
    "answer_en": "Inductor",
    "answer_hi": "प्रेरक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Action and reaction forces act on:",
    "question_hi": "क्रिया और प्रतिक्रिया बल कार्य करते हैं:",
    "options_en": ["Same body", "Different bodies", "Only one body", "None"],
    "options_hi": ["समान पिंड पर", "भिन्न पिंडों पर", "केवल एक पिंड पर", "कोई नहीं"],
    "answer_en": "Different bodies",
    "answer_hi": "भिन्न पिंडों पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "SI unit of latent heat is:",
    "question_hi": "गुप्त ऊष्मा का SI मात्रक है:",
    "options_en": ["J/kg", "W/m²", "N/m", "J"],
    "options_hi": ["J/kg", "W/m²", "N/m", "J"],
    "answer_en": "J/kg",
    "answer_hi": "J/kg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which quantity is conserved in inelastic collision?",
    "question_hi": "अस्थितिस्थापक संघट्ट में कौन सी राशि संरक्षित रहती है?",
    "options_en": ["Momentum only", "Kinetic energy only", "Both momentum & KE", "Energy only"],
    "options_hi": ["केवल संवेग", "केवल गतिज ऊर्जा", "संवेग और गतिज ऊर्जा दोनों", "केवल ऊर्जा"],
    "answer_en": "Momentum only",
    "answer_hi": "केवल संवेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Instrument used to detect charge:",
    "question_hi": "आवेश का पता लगाने के लिए उपयोग किया जाने वाला उपकरण:",
    "options_en": ["Electroscope", "Voltmeter", "Galvanometer", "Hydrometer"],
    "options_hi": ["विद्युतदर्शी", "वोल्टमीटर", "गैल्वेनोमीटर", "हाइड्रोमीटर"],
    "answer_en": "Electroscope",
    "answer_hi": "विद्युतदर्शी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which process transfers heat without medium?",
    "question_hi": "कौन सी प्रक्रिया बिना माध्यम के ऊष्मा स्थानांतरित करती है?",
    "options_en": ["Conduction", "Convection", "Radiation", "Evaporation"],
    "options_hi": ["चालन", "संवहन", "विकिरण", "वाष्पीकरण"],
    "answer_en": "Radiation",
    "answer_hi": "विकिरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the unit of electric field?",
    "question_hi": "विद्युत क्षेत्र की इकाई क्या है?",
    "options_en": ["N/C", "J", "W", "Ω"],
    "options_hi": ["N/C", "J", "W", "Ω"],
    "answer_en": "N/C",
    "answer_hi": "N/C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which mirror is used in solar cookers?",
    "question_hi": "सौर कुकर में किस दर्पण का उपयोग होता है?",
    "options_en": ["Convex", "Concave", "Plane", "Cylindrical"],
    "options_hi": ["उत्तल", "अवतल", "समतल", "बेलनाकार"],
    "answer_en": "Concave",
    "answer_hi": "अवतल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which wave property changes in refraction?",
    "question_hi": "अपवर्तन में कौन सा तरंग गुण बदलता है?",
    "options_en": ["Frequency", "Wavelength", "Time period", "Phase"],
    "options_hi": ["आवृत्ति", "तरंगदैर्ध्य", "आवर्तकाल", "कला"],
    "answer_en": "Wavelength",
    "answer_hi": "तरंगदैर्ध्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Who discovered radioactivity?",
    "question_hi": "रेडियोधर्मिता की खोज किसने की?",
    "options_en": ["Rutherford", "Becquerel", "Bohr", "Fermi"],
    "options_hi": ["रदरफोर्ड", "बैकरेल", "बोहर", "फर्मी"],
    "answer_en": "Becquerel",
    "answer_hi": "बैकरेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which lens is used to correct myopia?",
    "question_hi": "निकटदृष्टि को सही करने के लिए किस लेंस का उपयोग होता है?",
    "options_en": ["Convex lens", "Concave lens", "Cylindrical lens", "Plano-convex"],
    "options_hi": ["उत्तल लेंस", "अवतल लेंस", "बेलनाकार लेंस", "समतल-उत्तल"],
    "answer_en": "Concave lens",
    "answer_hi": "अवतल लेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Resistance depends on:",
    "question_hi": "प्रतिरोध निर्भर करता है:",
    "options_en": ["Length", "Area", "Material", "All of these"],
    "options_hi": ["लंबाई", "क्षेत्रफल", "पदार्थ", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "SI unit of modulus of elasticity:",
    "question_hi": "प्रत्यास्थता मापांक का SI मात्रक:",
    "options_en": ["Pascal", "Newton", "Joule", "Henry"],
    "options_hi": ["पास्कल", "न्यूटन", "जूल", "हेनरी"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which physical quantity is measured in Henry?",
    "question_hi": "कौन सी भौतिक राशि हेनरी में मापी जाती है?",
    "options_en": ["Capacitance", "Inductance", "Resistance", "Flux"],
    "options_hi": ["धारिता", "प्रेरकत्व", "प्रतिरोध", "फ्लक्स"],
    "answer_en": "Inductance",
    "answer_hi": "प्रेरकत्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which force keeps planets in orbit?",
    "question_hi": "कौन सा बल ग्रहों को कक्षा में रखता है?",
    "options_en": ["Normal force", "Gravitational force", "Friction", "Electric force"],
    "options_hi": ["अभिलंब बल", "गुरुत्वाकर्षण बल", "घर्षण बल", "विद्युत बल"],
    "answer_en": "Gravitational force",
    "answer_hi": "गुरुत्वाकर्षण बल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the speed of light in vacuum?",
    "question_hi": "निर्वात में प्रकाश की चाल कितनी है?",
    "options_en": ["3×10⁶ m/s", "3×10⁸ m/s", "3×10⁵ m/s", "3×10⁴ m/s"],
    "options_hi": ["3×10⁶ मी/से", "3×10⁸ मी/से", "3×10⁵ मी/से", "3×10⁴ मी/से"],
    "answer_en": "3×10⁸ m/s",
    "answer_hi": "3×10⁸ मी/से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which instrument measures current?",
    "question_hi": "कौन सा उपकरण धारा मापता है?",
    "options_en": ["Ammeter", "Voltmeter", "Ohmmeter", "Potentiometer"],
    "options_hi": ["अमीटर", "वोल्टमीटर", "ओममीटर", "पोटेंशियोमीटर"],
    "answer_en": "Ammeter",
    "answer_hi": "अमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the force between two parallel current-carrying wires called?",
    "question_hi": "दो समानांतर धारावाही तारों के बीच के बल को क्या कहते हैं?",
    "options_en": ["Electric force", "Gravitational force", "Magnetic force", "Nuclear force"],
    "options_hi": ["विद्युत बल", "गुरुत्वाकर्षण बल", "चुंबकीय बल", "नाभिकीय बल"],
    "answer_en": "Magnetic force",
    "answer_hi": "चुंबकीय बल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which radiation has the shortest wavelength?",
    "question_hi": "किस विकिरण की तरंगदैर्ध्य सबसे कम होती है?",
    "options_en": ["Gamma rays", "UV rays", "Infrared", "Microwaves"],
    "options_hi": ["गामा किरणें", "पराबैंगनी किरणें", "अवरक्त", "माइक्रोवेव"],
    "answer_en": "Gamma rays",
    "answer_hi": "गामा किरणें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "SI unit of torque is:",
    "question_hi": "बल आघूर्ण का SI मात्रक है:",
    "options_en": ["Nm", "N/m", "J", "Pa"],
    "options_hi": ["Nm", "N/m", "J", "Pa"],
    "answer_en": "Nm",
    "answer_hi": "Nm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which effect is used in optical fibers?",
    "question_hi": "ऑप्टिकल फाइबर में किस प्रभाव का उपयोग होता है?",
    "options_en": ["Polarization", "Total internal reflection", "Diffraction", "Interference"],
    "options_hi": ["ध्रुवण", "पूर्ण आंतरिक परावर्तन", "विवर्तन", "व्यतिकरण"],
    "answer_en": "Total internal reflection",
    "answer_hi": "पूर्ण आंतरिक परावर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Equal and opposite forces act on:",
    "question_hi": "समान और विपरीत बल कार्य करते हैं:",
    "options_en": ["Same body", "Two different bodies", "Three bodies", "None"],
    "options_hi": ["समान पिंड पर", "दो भिन्न पिंडों पर", "तीन पिंडों पर", "कोई नहीं"],
    "answer_en": "Two different bodies",
    "answer_hi": "दो भिन्न पिंडों पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the SI unit of activity of radioactive substance?",
    "question_hi": "रेडियोधर्मी पदार्थ की सक्रियता का SI मात्रक क्या है?",
    "options_en": ["Becquerel", "Curie", "Gray", "Sievert"],
    "options_hi": ["बेकरेल", "क्यूरी", "ग्रे", "सीवर्ट"],
    "answer_en": "Becquerel",
    "answer_hi": "बेकरेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Loudness depends on:",
    "question_hi": "प्रबलता निर्भर करती है:",
    "options_en": ["Amplitude", "Frequency", "Velocity", "Pitch"],
    "options_hi": ["आयाम", "आवृत्ति", "वेग", "तारत्व"],
    "answer_en": "Amplitude",
    "answer_hi": "आयाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Pitch of sound depends on:",
    "question_hi": "ध्वनि का तारत्व निर्भर करता है:",
    "options_en": ["Amplitude", "Frequency", "Speed", "Loudness"],
    "options_hi": ["आयाम", "आवृत्ति", "चाल", "प्रबलता"],
    "answer_en": "Frequency",
    "answer_hi": "आवृत्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which device converts sound to electrical signals?",
    "question_hi": "कौन सा उपकरण ध्वनि को विद्युत संकेतों में बदलता है?",
    "options_en": ["Speaker", "Microphone", "Battery", "Transformer"],
    "options_hi": ["स्पीकर", "माइक्रोफोन", "बैटरी", "ट्रांसफॉर्मर"],
    "answer_en": "Microphone",
    "answer_hi": "माइक्रोफोन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Boiling point of water decreases with:",
    "question_hi": "पानी का क्वथनांक कम होता है:",
    "options_en": ["Increase in pressure", "Decrease in pressure", "Increase in density", "Increase in volume"],
    "options_hi": ["दाब बढ़ने से", "दाब घटने से", "घनत्व बढ़ने से", "आयतन बढ़ने से"],
    "answer_en": "Decrease in pressure",
    "answer_hi": "दाब घटने से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which law relates pressure and volume of a gas?",
    "question_hi": "कौन सा नियम गैस के दाब और आयतन को संबंधित करता है?",
    "options_en": ["Boyle's law", "Charles' law", "Pascal's law", "Hooke's law"],
    "options_hi": ["बॉयल का नियम", "चार्ल्स का नियम", "पास्कल का नियम", "हुक का नियम"],
    "answer_en": "Boyle's law",
    "answer_hi": "बॉयल का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which wave can travel through vacuum?",
    "question_hi": "कौन सी तरंग निर्वात में यात्रा कर सकती है?",
    "options_en": ["Sound", "Water wave", "Electromagnetic wave", "Mechanical wave"],
    "options_hi": ["ध्वनि", "जल तरंग", "विद्युत चुम्बकीय तरंग", "यांत्रिक तरंग"],
    "answer_en": "Electromagnetic wave",
    "answer_hi": "विद्युत चुम्बकीय तरंग",
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