const questions = [
  {
    num: 1,
    question_en: "Which physical quantity has the unit N·m?",
    question_hi: "किस भौतिक राशि की इकाई N·m है?",
    options_en: ["Work", "Power", "Momentum", "Pressure"],
    options_hi: ["कार्य", "शक्ति", "संवेग", "दाब"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "The dimensional formula of force is:",
    question_hi: "बल का विमीय सूत्र है:",
    options_en: ["[ML²T⁻²]", "[MLT⁻²]", "[M¹L¹T⁻¹]", "[M⁰L¹T⁻²]"],
    options_hi: ["[ML²T⁻²]", "[MLT⁻²]", "[M¹L¹T⁻¹]", "[M⁰L¹T⁻²]"],
    answer_en: "[MLT⁻²]",
    answer_hi: "[MLT⁻²]",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "A ball is thrown vertically upward with 20 m/s. What is the maximum height? (g = 10 m/s²)",
    question_hi: "एक गेंद 20 m/s से ऊर्ध्वाधर ऊपर की ओर फेंकी जाती है। अधिकतम ऊंचाई क्या है? (g = 10 m/s²)",
    options_en: ["10 m", "20 m", "15 m", "5 m"],
    options_hi: ["10 m", "20 m", "15 m", "5 m"],
    answer_en: "20 m",
    answer_hi: "20 m",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which law explains the bending of light at an interface?",
    question_hi: "कौन सा नियम एक इंटरफेस पर प्रकाश के मुड़ने की व्याख्या करता है?",
    options_en: ["Snell's Law", "Newton's First Law", "Faraday's Law", "Gauss's Law"],
    options_hi: ["स्नेल का नियम", "न्यूटन का पहला नियम", "फैराडे का नियम", "गॉस का नियम"],
    answer_en: "Snell's Law",
    answer_hi: "स्नेल का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "The slope of a velocity-time graph gives:",
    question_hi: "वेग-समय ग्राफ का ढलान देता है:",
    options_en: ["Distance", "Acceleration", "Speed", "Displacement"],
    options_hi: ["दूरी", "त्वरण", "चाल", "विस्थापन"],
    answer_en: "Acceleration",
    answer_hi: "त्वरण",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "If momentum doubles and mass remains same, then velocity:",
    question_hi: "यदि संवेग दोगुना हो जाता है और द्रव्यमान समान रहता है, तो वेग:",
    options_en: ["Remains same", "Doubles", "Becomes half", "Becomes zero"],
    options_hi: ["समान रहता है", "दोगुना हो जाता है", "आधा हो जाता है", "शून्य हो जाता है"],
    answer_en: "Doubles",
    answer_hi: "दोगुना हो जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "A 2 kg object accelerates at 5 m/s². What is the force applied?",
    question_hi: "एक 2 kg वस्तु 5 m/s² पर त्वरित होती है। लगाया गया बल क्या है?",
    options_en: ["2 N", "5 N", "10 N", "20 N"],
    options_hi: ["2 N", "5 N", "10 N", "20 N"],
    answer_en: "10 N",
    answer_hi: "10 N",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "The SI unit of electric flux is:",
    question_hi: "विद्युत फ्लक्स की SI इकाई है:",
    options_en: ["Volt", "Coulomb", "N·m²/C", "N/C"],
    options_hi: ["वोल्ट", "कूलॉम", "N·m²/C", "N/C"],
    answer_en: "N·m²/C",
    answer_hi: "N·m²/C",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which type of lens is used to correct myopia?",
    question_hi: "निकट दृष्टि दोष को सही करने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
    options_en: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
    options_hi: ["उत्तल लेंस", "अवतल लेंस", "बेलनाकार लेंस", "द्विफोकसी लेंस"],
    answer_en: "Concave lens",
    answer_hi: "अवतल लेंस",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "A wire of resistance 4 Ω is doubled in length. New resistance is:",
    question_hi: "4 Ω प्रतिरोध के एक तार की लंबाई दोगुनी कर दी जाती है। नया प्रतिरोध है:",
    options_en: ["4 Ω", "8 Ω", "16 Ω", "2 Ω"],
    options_hi: ["4 Ω", "8 Ω", "16 Ω", "2 Ω"],
    answer_en: "16 Ω",
    answer_hi: "16 Ω",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which process is responsible for rainbow formation?",
    question_hi: "इंद्रधनुष बनने के लिए कौन सी प्रक्रिया जिम्मेदार है?",
    options_en: ["Dispersion", "Reflection", "Diffusion", "Scattering"],
    options_hi: ["विक्षेपण", "परावर्तन", "प्रसार", "प्रकीर्णन"],
    answer_en: "Dispersion",
    answer_hi: "विक्षेपण",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The unit of current is:",
    question_hi: "धारा की इकाई है:",
    options_en: ["Volt", "Coulomb", "Ampere", "Ohm"],
    options_hi: ["वोल्ट", "कूलॉम", "एम्पियर", "ओम"],
    answer_en: "Ampere",
    answer_hi: "एम्पियर",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Two resistors 4 Ω and 6 Ω in series give equivalent resistance:",
    question_hi: "4 Ω और 6 Ω के दो प्रतिरोधक श्रृंखला में समतुल्य प्रतिरोध देते हैं:",
    options_en: ["2.4 Ω", "1.5 Ω", "10 Ω", "24 Ω"],
    options_hi: ["2.4 Ω", "1.5 Ω", "10 Ω", "24 Ω"],
    answer_en: "10 Ω",
    answer_hi: "10 Ω",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "A body moves with constant speed in a circle. What remains constant?",
    question_hi: "एक पिंड एक वृत्त में नियत चाल से चलता है। क्या स्थिर रहता है?",
    options_en: ["Velocity", "Displacement", "Acceleration", "Speed"],
    options_hi: ["वेग", "विस्थापन", "त्वरण", "चाल"],
    answer_en: "Speed",
    answer_hi: "चाल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "The dimensional formula of energy is:",
    question_hi: "ऊर्जा का विमीय सूत्र है:",
    options_en: ["[ML²T⁻²]", "[MLT⁻²]", "[MT⁻¹]", "[L²T⁻²]"],
    options_hi: ["[ML²T⁻²]", "[MLT⁻²]", "[MT⁻¹]", "[L²T⁻²]"],
    answer_en: "[ML²T⁻²]",
    answer_hi: "[ML²T⁻²]",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "If frequency of a wave is doubled, wavelength becomes:",
    question_hi: "यदि किसी तरंग की आवृत्ति दोगुनी हो जाती है, तो तरंगदैर्ध्य हो जाती है:",
    options_en: ["Half", "Double", "Same", "Zero"],
    options_hi: ["आधा", "दोगुना", "समान", "शून्य"],
    answer_en: "Half",
    answer_hi: "आधा",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the escape velocity on Earth? (approx)",
    question_hi: "पृथ्वी पर पलायन वेग क्या है? (लगभग)",
    options_en: ["11.2 km/s", "5 km/s", "2 km/s", "20 km/s"],
    options_hi: ["11.2 km/s", "5 km/s", "2 km/s", "20 km/s"],
    answer_en: "11.2 km/s",
    answer_hi: "11.2 km/s",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "A 10 kg mass lifted by 2 m. What is work done? (g = 10)",
    question_hi: "10 kg द्रव्यमान को 2 m उठाया जाता है। किया गया कार्य क्या है? (g = 10)",
    options_en: ["20 J", "100 J", "200 J", "10 J"],
    options_hi: ["20 J", "100 J", "200 J", "10 J"],
    answer_en: "200 J",
    answer_hi: "200 J",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which radiation has maximum penetrating power?",
    question_hi: "किस विकिरण की अधिकतम भेदन क्षमता होती है?",
    options_en: ["Alpha", "Beta", "Gamma", "Neutrons"],
    options_hi: ["अल्फा", "बीटा", "गामा", "न्यूट्रॉन"],
    answer_en: "Gamma",
    answer_hi: "गामा",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which instrument measures electric current?",
    question_hi: "कौन सा उपकरण विद्युत धारा मापता है?",
    options_en: ["Voltmeter", "Ammeter", "Galvanometer", "Hygrometer"],
    options_hi: ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "हाइग्रोमीटर"],
    answer_en: "Ammeter",
    answer_hi: "एमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "The speed of sound is maximum in:",
    question_hi: "ध्वनि की गति अधिकतम होती है:",
    options_en: ["Air", "Water", "Steel", "Vacuum"],
    options_hi: ["वायु", "जल", "स्टील", "निर्वात"],
    answer_en: "Steel",
    answer_hi: "स्टील",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "If a wave has frequency 50 Hz and speed 200 m/s, wavelength is:",
    question_hi: "यदि किसी तरंग की आवृत्ति 50 Hz और गति 200 m/s है, तो तरंगदैर्ध्य है:",
    options_en: ["2 m", "4 m", "5 m", "10 m"],
    options_hi: ["2 m", "4 m", "5 m", "10 m"],
    answer_en: "4 m",
    answer_hi: "4 m",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which physical quantity is conserved in elastic collision?",
    question_hi: "प्रत्यास्थ संघट्ट में कौन सी भौतिक राशि संरक्षित रहती है?",
    options_en: ["Momentum", "Kinetic energy", "Both", "Neither"],
    options_hi: ["संवेग", "गतिज ऊर्जा", "दोनों", "कोई नहीं"],
    answer_en: "Both",
    answer_hi: "दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the unit of magnetic field?",
    question_hi: "चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Weber", "Henry", "Ampere"],
    options_hi: ["टेस्ला", "वेबर", "हेनरी", "एम्पियर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "A body of mass 5 kg has momentum 20 kg·m/s. Velocity is:",
    question_hi: "5 kg द्रव्यमान के एक पिंड का संवेग 20 kg·m/s है। वेग है:",
    options_en: ["2 m/s", "4 m/s", "5 m/s", "10 m/s"],
    options_hi: ["2 m/s", "4 m/s", "5 m/s", "10 m/s"],
    answer_en: "4 m/s",
    answer_hi: "4 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which mirror is used in vehicle headlights?",
    question_hi: "वाहन हेडलाइट्स में किस दर्पण का उपयोग किया जाता है?",
    options_en: ["Convex", "Concave", "Plane", "Cylindrical"],
    options_hi: ["उत्तल", "अवतल", "समतल", "बेलनाकार"],
    answer_en: "Concave",
    answer_hi: "अवतल",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "The universal gravitational constant is:",
    question_hi: "सार्वत्रिक गुरुत्वाकर्षण नियतांक है:",
    options_en: ["6.67 × 10⁻¹¹", "9.8", "3×10⁸", "1.6×10⁻¹⁹"],
    options_hi: ["6.67 × 10⁻¹¹", "9.8", "3×10⁸", "1.6×10⁻¹⁹"],
    answer_en: "6.67 × 10⁻¹¹",
    answer_hi: "6.67 × 10⁻¹¹",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "A transformer works on the principle of:",
    question_hi: "एक ट्रांसफॉर्मर किस सिद्धांत पर काम करता है?",
    options_en: ["Mutual induction", "Heating effect", "Photoelectric effect", "Interference"],
    options_hi: ["पारस्परिक प्रेरण", "तापन प्रभाव", "प्रकाश विद्युत प्रभाव", "व्यतिकरण"],
    answer_en: "Mutual induction",
    answer_hi: "पारस्परिक प्रेरण",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Unit of pressure is:",
    question_hi: "दाब की इकाई है:",
    options_en: ["Newton", "Pascal", "Joule", "Watt"],
    options_hi: ["न्यूटन", "पास्कल", "जूल", "वाट"],
    answer_en: "Pascal",
    answer_hi: "पास्कल",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Light year is a unit of:",
    question_hi: "प्रकाश वर्ष किसकी इकाई है?",
    options_en: ["Time", "Intensity", "Distance", "Speed"],
    options_hi: ["समय", "तीव्रता", "दूरी", "गति"],
    answer_en: "Distance",
    answer_hi: "दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "If resistance = 10 Ω and current = 2 A, voltage = ?",
    question_hi: "यदि प्रतिरोध = 10 Ω और धारा = 2 A, वोल्टेज = ?",
    options_en: ["5 V", "10 V", "15 V", "20 V"],
    options_hi: ["5 V", "10 V", "15 V", "20 V"],
    answer_en: "20 V",
    answer_hi: "20 V",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which gas is used in discharge tubes?",
    question_hi: "डिस्चार्ज ट्यूबों में किस गैस का उपयोग किया जाता है?",
    options_en: ["Hydrogen", "Helium", "Neon", "Oxygen"],
    options_hi: ["हाइड्रोजन", "हीलियम", "नियॉन", "ऑक्सीजन"],
    answer_en: "Neon",
    answer_hi: "नियॉन",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Escape velocity depends on:",
    question_hi: "पलायन वेग निर्भर करता है:",
    options_en: ["Mass of object", "Mass of planet", "Both", "None"],
    options_hi: ["वस्तु के द्रव्यमान", "ग्रह के द्रव्यमान", "दोनों", "कोई नहीं"],
    answer_en: "Mass of planet",
    answer_hi: "ग्रह के द्रव्यमान",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "If a car goes from 0 to 20 m/s in 4 seconds, acceleration is:",
    question_hi: "यदि एक कार 0 से 20 m/s तक 4 सेकंड में जाती है, तो त्वरण है:",
    options_en: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    options_hi: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
    answer_en: "5 m/s²",
    answer_hi: "5 m/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which law is used in calculating buoyant force?",
    question_hi: "उत्प्लावन बल की गणना में किस नियम का उपयोग किया जाता है?",
    options_en: ["Archimedes' Law", "Pascal's Law", "Snell's Law", "Newton's Law"],
    options_hi: ["आर्किमिडीज का नियम", "पास्कल का नियम", "स्नेल का नियम", "न्यूटन का नियम"],
    answer_en: "Archimedes' Law",
    answer_hi: "आर्किमिडीज का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "A convex lens is also called:",
    question_hi: "उत्तल लेंस को भी कहा जाता है:",
    options_en: ["Diverging lens", "Converging lens", "Neutral lens", "Zero lens"],
    options_hi: ["अपसारी लेंस", "अभिसारी लेंस", "तटस्थ लेंस", "शून्य लेंस"],
    answer_en: "Converging lens",
    answer_hi: "अभिसारी लेंस",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Gravitational force is:",
    question_hi: "गुरुत्वाकर्षण बल है:",
    options_en: ["Attractive", "Repulsive", "Both", "None"],
    options_hi: ["आकर्षक", "प्रतिकर्षक", "दोनों", "कोई नहीं"],
    answer_en: "Attractive",
    answer_hi: "आकर्षक",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which electromagnetic wave is used in cooking?",
    question_hi: "खाना पकाने में किस विद्युत चुम्बकीय तरंग का उपयोग किया जाता है?",
    options_en: ["Gamma rays", "Microwaves", "X-rays", "UV rays"],
    options_hi: ["गामा किरणें", "माइक्रोवेव", "एक्स-रे", "पराबैंगनी किरणें"],
    answer_en: "Microwaves",
    answer_hi: "माइक्रोवेव",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "1 horsepower ≈ ?",
    question_hi: "1 अश्वशक्ति ≈ ?",
    options_en: ["746 W", "1000 W", "500 W", "250 W"],
    options_hi: ["746 W", "1000 W", "500 W", "250 W"],
    answer_en: "746 W",
    answer_hi: "746 W",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "If wavelength = 600 nm, the wave is in:",
    question_hi: "यदि तरंगदैर्ध्य = 600 nm, तो तरंग है:",
    options_en: ["UV", "Infrared", "Visible", "Microwave"],
    options_hi: ["पराबैंगनी", "अवरक्त", "दृश्यमान", "माइक्रोवेव"],
    answer_en: "Visible",
    answer_hi: "दृश्यमान",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which instrument measures pressure?",
    question_hi: "कौन सा उपकरण दाब मापता है?",
    options_en: ["Barometer", "Hygrometer", "Voltmeter", "Ammeter"],
    options_hi: ["बैरोमीटर", "हाइग्रोमीटर", "वोल्टमीटर", "एमीटर"],
    answer_en: "Barometer",
    answer_hi: "बैरोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "A body of weight 50 N on Earth. Weight on Moon is:",
    question_hi: "पृथ्वी पर 50 N भार का एक पिंड। चंद्रमा पर भार है:",
    options_en: ["50 N", "30 N", "10 N", "8.3 N"],
    options_hi: ["50 N", "30 N", "10 N", "8.3 N"],
    answer_en: "8.3 N",
    answer_hi: "8.3 N",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "SI unit of capacitance:",
    question_hi: "धारिता की SI इकाई:",
    options_en: ["Ohm", "Henry", "Farad", "Coulomb"],
    options_hi: ["ओम", "हेनरी", "फैरड", "कूलॉम"],
    answer_en: "Farad",
    answer_hi: "फैरड",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which phenomenon proves that light has wave nature?",
    question_hi: "कौन सी घटना सिद्ध करती है कि प्रकाश में तरंग प्रकृति है?",
    options_en: ["Interference", "Photoelectric effect", "Rectilinear propagation", "Reflection"],
    options_hi: ["व्यतिकरण", "प्रकाश विद्युत प्रभाव", "रेखीय संचरण", "परावर्तन"],
    answer_en: "Interference",
    answer_hi: "व्यतिकरण",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "A charge of 2 C at potential 5 V has energy:",
    question_hi: "5 V विभव पर 2 C आवेश की ऊर्जा है:",
    options_en: ["2 J", "5 J", "7 J", "10 J"],
    options_hi: ["2 J", "5 J", "7 J", "10 J"],
    answer_en: "10 J",
    answer_hi: "10 J",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Current carrying conductor produces:",
    question_hi: "धारावाही चालक उत्पन्न करता है:",
    options_en: ["Heat only", "Electric field only", "Magnetic field", "Sound"],
    options_hi: ["केवल ऊष्मा", "केवल विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "ध्वनि"],
    answer_en: "Magnetic field",
    answer_hi: "चुंबकीय क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "If density = 500 kg/m³ and volume = 2 m³, mass = ?",
    question_hi: "यदि घनत्व = 500 kg/m³ और आयतन = 2 m³, द्रव्यमान = ?",
    options_en: ["200 kg", "500 kg", "1000 kg", "1500 kg"],
    options_hi: ["200 kg", "500 kg", "1000 kg", "1500 kg"],
    answer_en: "1000 kg",
    answer_hi: "1000 kg",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "β-particles are:",
    question_hi: "β-कण हैं:",
    options_en: ["Helium nuclei", "Electrons", "Photons", "Protons"],
    options_hi: ["हीलियम नाभिक", "इलेक्ट्रॉन", "फोटॉन", "प्रोटॉन"],
    answer_en: "Electrons",
    answer_hi: "इलेक्ट्रॉन",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which quantity is a vector?",
    question_hi: "कौन सी राशि एक सदिश है?",
    options_en: ["Work", "Energy", "Momentum", "Power"],
    options_hi: ["कार्य", "ऊर्जा", "संवेग", "शक्ति"],
    answer_en: "Momentum",
    answer_hi: "संवेग",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "A force of 50 N moves a body by 3 m. Work done is:",
    question_hi: "50 N का बल एक पिंड को 3 m से चलाता है। किया गया कार्य है:",
    options_en: ["10 J", "20 J", "150 J", "50 J"],
    options_hi: ["10 J", "20 J", "150 J", "50 J"],
    answer_en: "150 J",
    answer_hi: "150 J",
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