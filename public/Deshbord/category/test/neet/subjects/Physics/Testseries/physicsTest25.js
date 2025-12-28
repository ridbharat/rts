const questions = [
  {
    num: 1,
    question_en: "Which physical quantity has the unit J·s?",
    question_hi: "किस भौतिक राशि की इकाई J·s है?",
    options_en: ["Action", "Power", "Torque", "Pressure"],
    options_hi: ["क्रिया", "शक्ति", "बल आघूर्ण", "दाब"],
    answer_en: "Action",
    answer_hi: "क्रिया",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "The dimensional formula of density is:",
    question_hi: "घनत्व का विमीय सूत्र है:",
    options_en: ["[ML⁻³]", "[ML²T⁻²]", "[M⁰L¹T⁻¹]", "[MT⁻²]"],
    options_hi: ["[ML⁻³]", "[ML²T⁻²]", "[M⁰L¹T⁻¹]", "[MT⁻²]"],
    answer_en: "[ML⁻³]",
    answer_hi: "[ML⁻³]",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "A body starts from rest and accelerates at 6 m/s². Distance covered in 3 seconds?",
    question_hi: "एक पिंड विराम से शुरू होता है और 6 m/s² पर त्वरित होता है। 3 सेकंड में तय दूरी?",
    options_en: ["9 m", "18 m", "27 m", "36 m"],
    options_hi: ["9 m", "18 m", "27 m", "36 m"],
    answer_en: "27 m",
    answer_hi: "27 m",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which phenomenon makes the bottom of a water tank appear raised?",
    question_hi: "कौन सी घटना पानी की टंकी के तल को उठा हुआ दिखाती है?",
    options_en: ["Refraction", "Reflection", "Dispersion", "Interference"],
    options_hi: ["अपवर्तन", "परावर्तन", "विक्षेपण", "व्यतिकरण"],
    answer_en: "Refraction",
    answer_hi: "अपवर्तन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Slope of force-time graph gives:",
    question_hi: "बल-समय ग्राफ का ढलान देता है:",
    options_en: ["Momentum", "Impulse", "Power", "Rate of change of force"],
    options_hi: ["संवेग", "आवेग", "शक्ति", "बल के परिवर्तन की दर"],
    answer_en: "Rate of change of force",
    answer_hi: "बल के परिवर्तन की दर",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "If mass is doubled and velocity doubled, momentum becomes:",
    question_hi: "यदि द्रव्यमान दोगुना और वेग दोगुना हो जाता है, तो संवेग हो जाता है:",
    options_en: ["Same", "Double", "Four times", "Half"],
    options_hi: ["समान", "दोगुना", "चार गुना", "आधा"],
    answer_en: "Four times",
    answer_hi: "चार गुना",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "The SI unit of charge is:",
    question_hi: "आवेश की SI इकाई है:",
    options_en: ["Ampere", "Coulomb", "Volt", "Farad"],
    options_hi: ["एम्पियर", "कूलॉम", "वोल्ट", "फैरड"],
    answer_en: "Coulomb",
    answer_hi: "कूलॉम",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
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
    num: 9,
    question_en: "A concave mirror produces an enlarged real image. Object position must be:",
    question_hi: "एक अवतल दर्पण एक बड़ा वास्तविक प्रतिबिंब बनाता है। वस्तु की स्थिति होनी चाहिए:",
    options_en: ["Between pole & focus", "At focus", "Between focus & centre", "Beyond centre"],
    options_hi: ["ध्रुव और फोकस के बीच", "फोकस पर", "फोकस और केंद्र के बीच", "केंद्र से परे"],
    answer_en: "Beyond centre",
    answer_hi: "केंद्र से परे",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "A resistor of 12 Ω and 12 Ω in parallel give:",
    question_hi: "समानांतर में 12 Ω और 12 Ω प्रतिरोधक देते हैं:",
    options_en: ["6 Ω", "12 Ω", "24 Ω", "3 Ω"],
    options_hi: ["6 Ω", "12 Ω", "24 Ω", "3 Ω"],
    answer_en: "6 Ω",
    answer_hi: "6 Ω",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which process causes blue color of sky?",
    question_hi: "कौन सी प्रक्रिया आकाश के नीले रंग का कारण बनती है?",
    options_en: ["Interference", "Scattering", "Diffraction", "Polarisation"],
    options_hi: ["व्यतिकरण", "प्रकीर्णन", "विवर्तन", "ध्रुवण"],
    answer_en: "Scattering",
    answer_hi: "प्रकीर्णन",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which quantity is measured in farads?",
    question_hi: "किस राशि को फैरड में मापा जाता है?",
    options_en: ["Resistance", "Capacitance", "Inductance", "Flux"],
    options_hi: ["प्रतिरोध", "धारिता", "प्रेरकत्व", "फ्लक्स"],
    answer_en: "Capacitance",
    answer_hi: "धारिता",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Two capacitors 6 μF and 3 μF in parallel have equivalent capacitance:",
    question_hi: "समानांतर में 6 μF और 3 μF के दो संधारित्रों की समतुल्य धारिता है:",
    options_en: ["2 μF", "3 μF", "6 μF", "9 μF"],
    options_hi: ["2 μF", "3 μF", "6 μF", "9 μF"],
    answer_en: "9 μF",
    answer_hi: "9 μF",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which remains constant in free-fall motion?",
    question_hi: "मुक्त पतन गति में क्या स्थिर रहता है?",
    options_en: ["Speed", "Acceleration", "Force", "Height"],
    options_hi: ["चाल", "त्वरण", "बल", "ऊंचाई"],
    answer_en: "Acceleration",
    answer_hi: "त्वरण",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Dimensional formula of power is:",
    question_hi: "शक्ति का विमीय सूत्र है:",
    options_en: ["[ML²T⁻²]", "[ML²T⁻³]", "[MT⁻²]", "[MLT⁻¹]"],
    options_hi: ["[ML²T⁻²]", "[ML²T⁻³]", "[MT⁻²]", "[MLT⁻¹]"],
    answer_en: "[ML²T⁻³]",
    answer_hi: "[ML²T⁻³]",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "If a sound wave frequency increases, its wavelength:",
    question_hi: "यदि ध्वनि तरंग की आवृत्ति बढ़ती है, तो इसकी तरंगदैर्ध्य:",
    options_en: ["Increases", "Decreases", "Becomes zero", "Same"],
    options_hi: ["बढ़ती है", "घटती है", "शून्य हो जाती है", "समान रहती है"],
    answer_en: "Decreases",
    answer_hi: "घटती है",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Escape velocity on Moon is approx:",
    question_hi: "चंद्रमा पर पलायन वेग लगभग है:",
    options_en: ["2.3 km/s", "11.2 km/s", "5 km/s", "1 km/s"],
    options_hi: ["2.3 km/s", "11.2 km/s", "5 km/s", "1 km/s"],
    answer_en: "2.3 km/s",
    answer_hi: "2.3 km/s",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "A force of 20 N moves an object 4 m in direction of force. Work done?",
    question_hi: "20 N का बल एक वस्तु को बल की दिशा में 4 m चलाता है। किया गया कार्य?",
    options_en: ["5 J", "20 J", "40 J", "80 J"],
    options_hi: ["5 J", "20 J", "40 J", "80 J"],
    answer_en: "80 J",
    answer_hi: "80 J",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the speed of light?",
    question_hi: "प्रकाश की गति क्या है?",
    options_en: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10² m/s"],
    options_hi: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10² m/s"],
    answer_en: "3×10⁸ m/s",
    answer_hi: "3×10⁸ m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which device increases or decreases AC voltage?",
    question_hi: "कौन सा उपकरण AC वोल्टेज बढ़ाता या घटाता है?",
    options_en: ["Rectifier", "Transformer", "Capacitor", "Motor"],
    options_hi: ["रेक्टिफायर", "ट्रांसफॉर्मर", "संधारित्र", "मोटर"],
    answer_en: "Transformer",
    answer_hi: "ट्रांसफॉर्मर",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Rotational analogue of force is:",
    question_hi: "बल का घूर्णी अनुरूप है:",
    options_en: ["Work", "Power", "Torque", "Impulse"],
    options_hi: ["कार्य", "शक्ति", "बल आघूर्ण", "आवेग"],
    answer_en: "Torque",
    answer_hi: "बल आघूर्ण",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "A body at rest has:",
    question_hi: "विरामावस्था में एक पिंड के पास होता है:",
    options_en: ["Zero velocity", "Non-zero velocity", "Negative velocity", "Infinite velocity"],
    options_hi: ["शून्य वेग", "गैर-शून्य वेग", "ऋणात्मक वेग", "अनंत वेग"],
    answer_en: "Zero velocity",
    answer_hi: "शून्य वेग",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Unit of heat energy commonly used:",
    question_hi: "ऊष्मा ऊर्जा की सामान्यतः प्रयुक्त इकाई:",
    options_en: ["Calorie", "Newton", "Ampere", "Tesla"],
    options_hi: ["कैलोरी", "न्यूटन", "एम्पियर", "टेस्ला"],
    answer_en: "Calorie",
    answer_hi: "कैलोरी",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Polarisation is possible only for:",
    question_hi: "ध्रुवण केवल संभव है:",
    options_en: ["Longitudinal waves", "Transverse waves", "All waves", "Microwaves only"],
    options_hi: ["अनुदैर्ध्य तरंगें", "अनुप्रस्थ तरंगें", "सभी तरंगें", "केवल माइक्रोवेव"],
    answer_en: "Transverse waves",
    answer_hi: "अनुप्रस्थ तरंगें",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "If current is doubled and resistance same, power becomes:",
    question_hi: "यदि धारा दोगुनी हो जाती है और प्रतिरोध समान रहता है, तो शक्ति हो जाती है:",
    options_en: ["Half", "Double", "Four times", "Same"],
    options_hi: ["आधा", "दोगुना", "चार गुना", "समान"],
    answer_en: "Four times",
    answer_hi: "चार गुना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Speed = 15 m/s and time = 4 s. Distance?",
    question_hi: "चाल = 15 m/s और समय = 4 s। दूरी?",
    options_en: ["30 m", "45 m", "60 m", "75 m"],
    options_hi: ["30 m", "45 m", "60 m", "75 m"],
    answer_en: "60 m",
    answer_hi: "60 m",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which mirror gives widest field of view?",
    question_hi: "कौन सा दर्पण सबसे व्यापक दृष्टि क्षेत्र देता है?",
    options_en: ["Plane", "Concave", "Convex", "None"],
    options_hi: ["समतल", "अवतल", "उत्तल", "कोई नहीं"],
    answer_en: "Convex",
    answer_hi: "उत्तल",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Refractive index of vacuum is:",
    question_hi: "निर्वात का अपवर्तनांक है:",
    options_en: ["0", "1", "2", "∞"],
    options_hi: ["0", "1", "2", "∞"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Magnification of plane mirror is:",
    question_hi: "समतल दर्पण का आवर्धन है:",
    options_en: ["0", "1", "2", "Infinite"],
    options_hi: ["0", "1", "2", "अनंत"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Radio waves are produced by:",
    question_hi: "रेडियो तरंगें उत्पन्न होती हैं:",
    options_en: ["Nuclear transitions", "Electronic oscillations", "Ionisation", "Gamma decay"],
    options_hi: ["नाभिकीय संक्रमण", "इलेक्ट्रॉनिक दोलन", "आयनीकरण", "गामा क्षय"],
    answer_en: "Electronic oscillations",
    answer_hi: "इलेक्ट्रॉनिक दोलन",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Force between two charges is directly proportional to:",
    question_hi: "दो आवेशों के बीच बल सीधे आनुपातिक है:",
    options_en: ["Distance", "Square of distance", "Product of charges", "Mass"],
    options_hi: ["दूरी", "दूरी का वर्ग", "आवेशों का गुणनफल", "द्रव्यमान"],
    answer_en: "Product of charges",
    answer_hi: "आवेशों का गुणनफल",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Unit of magnetic field is:",
    question_hi: "चुंबकीय क्षेत्र की इकाई है:",
    options_en: ["Tesla", "Volt", "Ohm", "Henry"],
    options_hi: ["टेस्ला", "वोल्ट", "ओम", "हेनरी"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "A wave travels with speed 300 m/s and wavelength 3 m. Frequency?",
    question_hi: "एक तरंग 300 m/s गति और 3 m तरंगदैर्ध्य से यात्रा करती है। आवृत्ति?",
    options_en: ["50 Hz", "100 Hz", "150 Hz", "200 Hz"],
    options_hi: ["50 Hz", "100 Hz", "150 Hz", "200 Hz"],
    answer_en: "100 Hz",
    answer_hi: "100 Hz",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Resistance is directly proportional to:",
    question_hi: "प्रतिरोध सीधे आनुपातिक है:",
    options_en: ["Area", "Temperature", "Length", "Voltage"],
    options_hi: ["क्षेत्रफल", "तापमान", "लंबाई", "वोल्टेज"],
    answer_en: "Length",
    answer_hi: "लंबाई",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Speed of sound in water is approx:",
    question_hi: "जल में ध्वनि की गति लगभग है:",
    options_en: ["1500 m/s", "340 m/s", "100 m/s", "3000 m/s"],
    options_hi: ["1500 m/s", "340 m/s", "100 m/s", "3000 m/s"],
    answer_en: "1500 m/s",
    answer_hi: "1500 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Planck's constant is approximately:",
    question_hi: "प्लैंक नियतांक लगभग है:",
    options_en: ["6.63×10⁻³⁴ J·s", "3×10⁸ J·s", "9.1×10⁻³¹ J·s", "1.6×10⁻¹⁹ J·s"],
    options_hi: ["6.63×10⁻³⁴ J·s", "3×10⁸ J·s", "9.1×10⁻³¹ J·s", "1.6×10⁻¹⁹ J·s"],
    answer_en: "6.63×10⁻³⁴ J·s",
    answer_hi: "6.63×10⁻³⁴ J·s",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Angular acceleration SI unit:",
    question_hi: "कोणीय त्वरण SI इकाई:",
    options_en: ["rad/s²", "m/s²", "N/s", "J/s"],
    options_hi: ["rad/s²", "m/s²", "N/s", "J/s"],
    answer_en: "rad/s²",
    answer_hi: "rad/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Inertia of rotation depends on:",
    question_hi: "घूर्णन का जड़त्व निर्भर करता है:",
    options_en: ["Mass only", "Distribution of mass", "Velocity", "Density"],
    options_hi: ["केवल द्रव्यमान", "द्रव्यमान का वितरण", "वेग", "घनत्व"],
    answer_en: "Distribution of mass",
    answer_hi: "द्रव्यमान का वितरण",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which force acts towards centre of circle?",
    question_hi: "कौन सा बल वृत्त के केंद्र की ओर कार्य करता है?",
    options_en: ["Centrifugal", "Centripetal", "Friction", "Upthrust"],
    options_hi: ["अपकेंद्रीय", "अभिकेंद्रीय", "घर्षण", "उत्प्लावन बल"],
    answer_en: "Centripetal",
    answer_hi: "अभिकेंद्रीय",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Kepler's third law relates:",
    question_hi: "कैपलर का तीसरा नियम संबंधित है:",
    options_en: ["Force & velocity", "Period & radius", "Mass & acceleration", "Torque & inertia"],
    options_hi: ["बल और वेग", "आवर्तकाल और त्रिज्या", "द्रव्यमान और त्वरण", "बल आघूर्ण और जड़त्व"],
    answer_en: "Period & radius",
    answer_hi: "आवर्तकाल और त्रिज्या",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "S.I. unit of latent heat:",
    question_hi: "गुप्त ऊष्मा की S.I. इकाई:",
    options_en: ["J/kg", "J/mol", "J/m", "J/s"],
    options_hi: ["J/kg", "J/mol", "J/m", "J/s"],
    answer_en: "J/kg",
    answer_hi: "J/kg",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which effect proves dual nature of radiation?",
    question_hi: "कौन सा प्रभाव विकिरण की द्वैत प्रकृति सिद्ध करता है?",
    options_en: ["Diffraction", "Polarisation", "Photoelectric effect", "Scattering"],
    options_hi: ["विवर्तन", "ध्रुवण", "प्रकाश विद्युत प्रभाव", "प्रकीर्णन"],
    answer_en: "Photoelectric effect",
    answer_hi: "प्रकाश विद्युत प्रभाव",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Energy consumed by a 200 W bulb in 10 seconds:",
    question_hi: "10 सेकंड में 200 W बल्ब द्वारा खपत ऊर्जा:",
    options_en: ["100 J", "2000 J", "200 J", "20 J"],
    options_hi: ["100 J", "2000 J", "200 J", "20 J"],
    answer_en: "2000 J",
    answer_hi: "2000 J",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which is NOT a vector?",
    question_hi: "कौन सा सदिश नहीं है?",
    options_en: ["Velocity", "Displacement", "Force", "Time"],
    options_hi: ["वेग", "विस्थापन", "बल", "समय"],
    answer_en: "Time",
    answer_hi: "समय",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Critical angle depends on:",
    question_hi: "क्रांतिक कोण निर्भर करता है:",
    options_en: ["Angle of incidence", "Material", "Distance", "Temperature"],
    options_hi: ["आपतन कोण", "पदार्थ", "दूरी", "तापमान"],
    answer_en: "Material",
    answer_hi: "पदार्थ",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Boiling point of water at sea level:",
    question_hi: "समुद्र तल पर जल का क्वथनांक:",
    options_en: ["50°C", "90°C", "100°C", "150°C"],
    options_hi: ["50°C", "90°C", "100°C", "150°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the value of g at centre of Earth?",
    question_hi: "पृथ्वी के केंद्र पर g का मान क्या है?",
    options_en: ["Zero", "9.8 m/s²", "4.9 m/s²", "Infinity"],
    options_hi: ["शून्य", "9.8 m/s²", "4.9 m/s²", "अनंत"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which quantity changes in Doppler effect?",
    question_hi: "डॉप्लर प्रभाव में कौन सी राशि बदलती है?",
    options_en: ["Frequency", "Wavelength", "Both A & B", "Amplitude"],
    options_hi: ["आवृत्ति", "तरंगदैर्ध्य", "A और B दोनों", "आयाम"],
    answer_en: "Both A & B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "SI unit of stress is same as:",
    question_hi: "प्रतिबल की SI इकाई समान है:",
    options_en: ["Energy", "Pressure", "Force", "Charge"],
    options_hi: ["ऊर्जा", "दाब", "बल", "आवेश"],
    answer_en: "Pressure",
    answer_hi: "दाब",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Magnetic field inside a toroid is:",
    question_hi: "टोरॉयड के अंदर चुंबकीय क्षेत्र होता है:",
    options_en: ["Zero", "Constant", "Non-uniform", "Infinite"],
    options_hi: ["शून्य", "स्थिर", "असमान", "अनंत"],
    answer_en: "Constant",
    answer_hi: "स्थिर",
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