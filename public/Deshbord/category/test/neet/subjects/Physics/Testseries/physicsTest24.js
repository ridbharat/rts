const questions = [
  {
    num: 1,
    question_en: "Which quantity has the SI unit kg·m/s?",
    question_hi: "किस राशि की SI इकाई kg·m/s है?",
    options_en: ["Work", "Force", "Momentum", "Pressure"],
    options_hi: ["कार्य", "बल", "संवेग", "दाब"],
    answer_en: "Momentum",
    answer_hi: "संवेग",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "The dimensional formula of pressure is:",
    question_hi: "दाब का विमीय सूत्र है:",
    options_en: ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[M⁰L¹T⁻²]", "[ML²T⁻²]"],
    options_hi: ["[ML⁻¹T⁻²]", "[MLT⁻²]", "[M⁰L¹T⁻²]", "[ML²T⁻²]"],
    answer_en: "[ML⁻¹T⁻²]",
    answer_hi: "[ML⁻¹T⁻²]",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "A car accelerates from rest at 4 m/s². Distance covered in 5 s?",
    question_hi: "एक कार विराम से 4 m/s² पर त्वरित होती है। 5 s में तय दूरी?",
    options_en: ["25 m", "50 m", "75 m", "100 m"],
    options_hi: ["25 m", "50 m", "75 m", "100 m"],
    answer_en: "50 m",
    answer_hi: "50 m",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which of the following is a vector quantity?",
    question_hi: "निम्नलिखित में से कौन सी सदिश राशि है?",
    options_en: ["Speed", "Mass", "Work", "Acceleration"],
    options_hi: ["चाल", "द्रव्यमान", "कार्य", "त्वरण"],
    answer_en: "Acceleration",
    answer_hi: "त्वरण",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "The slope of a displacement-time graph gives:",
    question_hi: "विस्थापन-समय ग्राफ का ढलान देता है:",
    options_en: ["Acceleration", "Speed", "Jerk", "Force"],
    options_hi: ["त्वरण", "चाल", "झटका", "बल"],
    answer_en: "Speed",
    answer_hi: "चाल",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "A 3 kg object has velocity 10 m/s. What is momentum?",
    question_hi: "एक 3 kg वस्तु का वेग 10 m/s है। संवेग क्या है?",
    options_en: ["30 kg m/s", "10 kg m/s", "3 kg m/s", "0 kg m/s"],
    options_hi: ["30 kg m/s", "10 kg m/s", "3 kg m/s", "0 kg m/s"],
    answer_en: "30 kg m/s",
    answer_hi: "30 kg m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "The unit of power is:",
    question_hi: "शक्ति की इकाई है:",
    options_en: ["Watt", "Newton", "Ampere", "Volt"],
    options_hi: ["वाट", "न्यूटन", "एम्पियर", "वोल्ट"],
    answer_en: "Watt",
    answer_hi: "वाट",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which law explains reflection of light?",
    question_hi: "कौन सा नियम प्रकाश के परावर्तन की व्याख्या करता है?",
    options_en: ["Snell's Law", "Lenz's Law", "Kirchhoff's Law", "Law of Reflection"],
    options_hi: ["स्नेल का नियम", "लेंज का नियम", "किरचॉफ का नियम", "परावर्तन का नियम"],
    answer_en: "Law of Reflection",
    answer_hi: "परावर्तन का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "A convex mirror always forms which type of image?",
    question_hi: "उत्तल दर्पण हमेशा किस प्रकार का प्रतिबिंब बनाता है?",
    options_en: ["Real & inverted", "Virtual & erect", "Real & erect", "Variable"],
    options_hi: ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "परिवर्तनशील"],
    answer_en: "Virtual & erect",
    answer_hi: "आभासी और सीधा",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "A 10 Ω resistor and 20 Ω resistor in parallel have equivalent resistance:",
    question_hi: "समानांतर में 10 Ω और 20 Ω प्रतिरोधक का समतुल्य प्रतिरोध है:",
    options_en: ["6.67 Ω", "10 Ω", "20 Ω", "30 Ω"],
    options_hi: ["6.67 Ω", "10 Ω", "20 Ω", "30 Ω"],
    answer_en: "6.67 Ω",
    answer_hi: "6.67 Ω",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which process produces twinkling of stars?",
    question_hi: "कौन सी प्रक्रिया तारों के टिमटिमाने का कारण बनती है?",
    options_en: ["Interference", "Dispersion", "Atmospheric refraction", "Polarisation"],
    options_hi: ["व्यतिकरण", "विक्षेपण", "वायुमंडलीय अपवर्तन", "ध्रुवण"],
    answer_en: "Atmospheric refraction",
    answer_hi: "वायुमंडलीय अपवर्तन",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The unit of electric potential is:",
    question_hi: "विद्युत विभव की इकाई है:",
    options_en: ["Coulomb", "Joule", "Volt", "Ampere"],
    options_hi: ["कूलॉम", "जूल", "वोल्ट", "एम्पियर"],
    answer_en: "Volt",
    answer_hi: "वोल्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the equivalent capacitance of two 4 μF capacitors in series?",
    question_hi: "श्रृंखला में दो 4 μF संधारित्रों की समतुल्य धारिता क्या है?",
    options_en: ["2 μF", "4 μF", "8 μF", "1 μF"],
    options_hi: ["2 μF", "4 μF", "8 μF", "1 μF"],
    answer_en: "2 μF",
    answer_hi: "2 μF",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which remains constant in uniform circular motion?",
    question_hi: "एकसमान वृत्तीय गति में क्या स्थिर रहता है?",
    options_en: ["Velocity", "Acceleration", "Speed", "Momentum"],
    options_hi: ["वेग", "त्वरण", "चाल", "संवेग"],
    answer_en: "Speed",
    answer_hi: "चाल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Dimensional formula of impulse is:",
    question_hi: "आवेग का विमीय सूत्र है:",
    options_en: ["[MLT⁻¹]", "[ML²T⁻²]", "[MT⁻¹]", "[L²T⁻²]"],
    options_hi: ["[MLT⁻¹]", "[ML²T⁻²]", "[MT⁻¹]", "[L²T⁻²]"],
    answer_en: "[MLT⁻¹]",
    answer_hi: "[MLT⁻¹]",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "If wavelength of light decreases, frequency:",
    question_hi: "यदि प्रकाश की तरंगदैर्ध्य घटती है, तो आवृत्ति:",
    options_en: ["Increases", "Decreases", "Becomes zero", "Remains same"],
    options_hi: ["बढ़ती है", "घटती है", "शून्य हो जाती है", "समान रहती है"],
    answer_en: "Increases",
    answer_hi: "बढ़ती है",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Value of g on Moon is approximately:",
    question_hi: "चंद्रमा पर g का मान लगभग है:",
    options_en: ["9.8 m/s²", "4.9 m/s²", "1.6 m/s²", "2.2 m/s²"],
    options_hi: ["9.8 m/s²", "4.9 m/s²", "1.6 m/s²", "2.2 m/s²"],
    answer_en: "1.6 m/s²",
    answer_hi: "1.6 m/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "A 5 kg mass lifted by 3 m. Work done? (g=10)",
    question_hi: "5 kg द्रव्यमान को 3 m उठाया जाता है। किया गया कार्य? (g=10)",
    options_en: ["15 J", "30 J", "150 J", "300 J"],
    options_hi: ["15 J", "30 J", "150 J", "300 J"],
    answer_en: "150 J",
    answer_hi: "150 J",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which wave is longitudinal?",
    question_hi: "कौन सी तरंग अनुदैर्ध्य है?",
    options_en: ["Light wave", "Radio wave", "Sound wave", "X-ray"],
    options_hi: ["प्रकाश तरंग", "रेडियो तरंग", "ध्वनि तरंग", "एक्स-रे"],
    answer_en: "Sound wave",
    answer_hi: "ध्वनि तरंग",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which device converts AC to DC?",
    question_hi: "कौन सा उपकरण AC को DC में परिवर्तित करता है?",
    options_en: ["Transformer", "Rectifier", "Amplifier", "Oscillator"],
    options_hi: ["ट्रांसफॉर्मर", "रेक्टिफायर", "एम्पलीफायर", "ऑसिलेटर"],
    answer_en: "Rectifier",
    answer_hi: "रेक्टिफायर",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Torque is equal to:",
    question_hi: "बल आघूर्ण बराबर है:",
    options_en: ["Force × mass", "Force × time", "Force × distance", "Force × velocity"],
    options_hi: ["बल × द्रव्यमान", "बल × समय", "बल × दूरी", "बल × वेग"],
    answer_en: "Force × distance",
    answer_hi: "बल × दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Inertia depends on:",
    question_hi: "जड़त्व निर्भर करता है:",
    options_en: ["Mass", "Velocity", "Pressure", "Temperature"],
    options_hi: ["द्रव्यमान", "वेग", "दाब", "तापमान"],
    answer_en: "Mass",
    answer_hi: "द्रव्यमान",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Unit of heat is:",
    question_hi: "ऊष्मा की इकाई है:",
    options_en: ["Joule", "Ampere", "Volt", "Newton"],
    options_hi: ["जूल", "एम्पियर", "वोल्ट", "न्यूटन"],
    answer_en: "Joule",
    answer_hi: "जूल",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which phenomenon supports wave nature of light?",
    question_hi: "कौन सी घटना प्रकाश की तरंग प्रकृति का समर्थन करती है?",
    options_en: ["Photoelectric effect", "Compton effect", "Interference", "Atomic spectra"],
    options_hi: ["प्रकाश विद्युत प्रभाव", "कॉम्पटन प्रभाव", "व्यतिकरण", "परमाण्विक स्पेक्ट्रा"],
    answer_en: "Interference",
    answer_hi: "व्यतिकरण",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "If resistance is doubled and voltage constant, current becomes:",
    question_hi: "यदि प्रतिरोध दोगुना हो जाता है और वोल्टेज स्थिर रहता है, तो धारा हो जाती है:",
    options_en: ["Double", "Same", "Half", "Zero"],
    options_hi: ["दोगुना", "समान", "आधा", "शून्य"],
    answer_en: "Half",
    answer_hi: "आधा",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "A body moves 20 m in 4 s. What is average speed?",
    question_hi: "एक पिंड 4 s में 20 m चलता है। औसत चाल क्या है?",
    options_en: ["4 m/s", "5 m/s", "10 m/s", "2 m/s"],
    options_hi: ["4 m/s", "5 m/s", "10 m/s", "2 m/s"],
    answer_en: "5 m/s",
    answer_hi: "5 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which lens forms always real image?",
    question_hi: "कौन सा लेंस हमेशा वास्तविक प्रतिबिंब बनाता है?",
    options_en: ["Convex", "Concave", "Cylindrical", "Plano-convex"],
    options_hi: ["उत्तल", "अवतल", "बेलनाकार", "समतल-उत्तल"],
    answer_en: "Convex",
    answer_hi: "उत्तल",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "The unit of refractive index is:",
    question_hi: "अपवर्तनांक की इकाई है:",
    options_en: ["m", "No unit", "m/s", "Hz"],
    options_hi: ["m", "कोई इकाई नहीं", "m/s", "Hz"],
    answer_en: "No unit",
    answer_hi: "कोई इकाई नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "A 2 m mirror produces 1 m image. Magnification =",
    question_hi: "एक 2 m दर्पण 1 m प्रतिबिंब बनाता है। आवर्धन =",
    options_en: ["0.5", "1", "2", "4"],
    options_hi: ["0.5", "1", "2", "4"],
    answer_en: "0.5",
    answer_hi: "0.5",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which electromagnetic wave has highest frequency?",
    question_hi: "किस विद्युत चुम्बकीय तरंग की आवृत्ति सबसे अधिक है?",
    options_en: ["Radio", "X-ray", "Gamma", "Microwave"],
    options_hi: ["रेडियो", "एक्स-रे", "गामा", "माइक्रोवेव"],
    answer_en: "Gamma",
    answer_hi: "गामा",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "The force between two charges decreases if distance:",
    question_hi: "दो आवेशों के बीच बल घटता है यदि दूरी:",
    options_en: ["Decreases", "Remains same", "Increases", "Becomes zero"],
    options_hi: ["घटती है", "समान रहती है", "बढ़ती है", "शून्य हो जाती है"],
    answer_en: "Increases",
    answer_hi: "बढ़ती है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "The unit of magnetic flux is:",
    question_hi: "चुंबकीय फ्लक्स की इकाई है:",
    options_en: ["Tesla", "Weber", "Henry", "Ohm"],
    options_hi: ["टेस्ला", "वेबर", "हेनरी", "ओम"],
    answer_en: "Weber",
    answer_hi: "वेबर",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "A wave of frequency 200 Hz travels with speed 400 m/s. Wavelength?",
    question_hi: "200 Hz आवृत्ति की एक तरंग 400 m/s गति से यात्रा करती है। तरंगदैर्ध्य?",
    options_en: ["1 m", "2 m", "4 m", "0.5 m"],
    options_hi: ["1 m", "2 m", "4 m", "0.5 m"],
    answer_en: "2 m",
    answer_hi: "2 m",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which law gives relation between current and potential difference?",
    question_hi: "कौन सा नियम धारा और विभवांतर के बीच संबंध देता है?",
    options_en: ["Coulomb's law", "Ohm's law", "Hooke's law", "Newton's law"],
    options_hi: ["कूलॉम का नियम", "ओम का नियम", "हुक का नियम", "न्यूटन का नियम"],
    answer_en: "Ohm's law",
    answer_hi: "ओम का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Speed of sound in air at room temperature:",
    question_hi: "कमरे के तापमान पर वायु में ध्वनि की गति:",
    options_en: ["100 m/s", "340 m/s", "1000 m/s", "3000 m/s"],
    options_hi: ["100 m/s", "340 m/s", "1000 m/s", "3000 m/s"],
    answer_en: "340 m/s",
    answer_hi: "340 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "What is the value of 1 eV in Joules?",
    question_hi: "1 eV का मान जूल में क्या है?",
    options_en: ["1.6×10⁻¹⁹ J", "3×10⁸ J", "9.1×10⁻³¹ J", "6.67×10⁻¹¹ J"],
    options_hi: ["1.6×10⁻¹⁹ J", "3×10⁸ J", "9.1×10⁻³¹ J", "6.67×10⁻¹¹ J"],
    answer_en: "1.6×10⁻¹⁹ J",
    answer_hi: "1.6×10⁻¹⁹ J",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "The S.I. unit of angular velocity is:",
    question_hi: "कोणीय वेग की S.I. इकाई है:",
    options_en: ["rad/s", "m/s", "N/s", "J/s"],
    options_hi: ["rad/s", "m/s", "N/s", "J/s"],
    answer_en: "rad/s",
    answer_hi: "rad/s",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "If a body is in uniform motion, net force on it is:",
    question_hi: "यदि कोई पिंड एकसमान गति में है, तो उस पर कुल बल है:",
    options_en: ["Zero", "Minimum", "Maximum", "Infinity"],
    options_hi: ["शून्य", "न्यूनतम", "अधिकतम", "अनंत"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "The force acting perpendicular to velocity is:",
    question_hi: "वेग के लंबवत कार्य करने वाला बल है:",
    options_en: ["Friction", "Gravity", "Centripetal force", "Applied force"],
    options_hi: ["घर्षण", "गुरुत्वाकर्षण", "अभिकेंद्रीय बल", "लगाया गया बल"],
    answer_en: "Centripetal force",
    answer_hi: "अभिकेंद्रीय बल",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Gravitational force is always:",
    question_hi: "गुरुत्वाकर्षण बल हमेशा होता है:",
    options_en: ["Repulsive", "Attractive", "Neutral", "Zero"],
    options_hi: ["प्रतिकर्षक", "आकर्षक", "तटस्थ", "शून्य"],
    answer_en: "Attractive",
    answer_hi: "आकर्षक",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "The value of universal gas constant R is:",
    question_hi: "सार्वत्रिक गैस नियतांक R का मान है:",
    options_en: ["8.314 J/mol·K", "9.8 J/mol·K", "6.67 J/mol·K", "1.6 J/mol·K"],
    options_hi: ["8.314 J/mol·K", "9.8 J/mol·K", "6.67 J/mol·K", "1.6 J/mol·K"],
    answer_en: "8.314 J/mol·K",
    answer_hi: "8.314 J/mol·K",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which phenomenon proves particle nature of light?",
    question_hi: "कौन सी घटना प्रकाश की कण प्रकृति सिद्ध करती है?",
    options_en: ["Diffraction", "Photoelectric effect", "Interference", "Polarisation"],
    options_hi: ["विवर्तन", "प्रकाश विद्युत प्रभाव", "व्यतिकरण", "ध्रुवण"],
    answer_en: "Photoelectric effect",
    answer_hi: "प्रकाश विद्युत प्रभाव",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "A 100 W bulb uses 100 W of:",
    question_hi: "एक 100 W बल्ब 100 W का उपयोग करता है:",
    options_en: ["Charge", "Energy per second", "Voltage", "Resistance"],
    options_hi: ["आवेश", "प्रति सेकंड ऊर्जा", "वोल्टेज", "प्रतिरोध"],
    answer_en: "Energy per second",
    answer_hi: "प्रति सेकंड ऊर्जा",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which is NOT a scalar quantity?",
    question_hi: "कौन सी अदिश राशि नहीं है?",
    options_en: ["Mass", "Energy", "Velocity", "Temperature"],
    options_hi: ["द्रव्यमान", "ऊर्जा", "वेग", "तापमान"],
    answer_en: "Velocity",
    answer_hi: "वेग",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "One horsepower =",
    question_hi: "एक अश्वशक्ति =",
    options_en: ["746 W", "1000 W", "1 W", "500 W"],
    options_hi: ["746 W", "1000 W", "1 W", "500 W"],
    answer_en: "746 W",
    answer_hi: "746 W",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which factor does NOT affect resistance of a wire?",
    question_hi: "कौन सा कारक तार के प्रतिरोध को प्रभावित नहीं करता है?",
    options_en: ["Length", "Material", "Colour", "Temperature"],
    options_hi: ["लंबाई", "पदार्थ", "रंग", "तापमान"],
    answer_en: "Colour",
    answer_hi: "रंग",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Acceleration of free fall on Earth is:",
    question_hi: "पृथ्वी पर मुक्त पतन का त्वरण है:",
    options_en: ["8 m/s²", "9.8 m/s²", "12 m/s²", "15 m/s²"],
    options_hi: ["8 m/s²", "9.8 m/s²", "12 m/s²", "15 m/s²"],
    answer_en: "9.8 m/s²",
    answer_hi: "9.8 m/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "The unit of surface tension is:",
    question_hi: "पृष्ठ तनाव की इकाई है:",
    options_en: ["N/m", "N·m", "J/kg", "W/m"],
    options_hi: ["N/m", "N·m", "J/kg", "W/m"],
    answer_en: "N/m",
    answer_hi: "N/m",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "The loudness of sound depends on:",
    question_hi: "ध्वनि की प्रबलता निर्भर करती है:",
    options_en: ["Frequency", "Wavelength", "Amplitude", "Phase"],
    options_hi: ["आवृत्ति", "तरंगदैर्ध्य", "आयाम", "कला"],
    answer_en: "Amplitude",
    answer_hi: "आयाम",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Magnetic field inside a solenoid is:",
    question_hi: "परिनालिका के अंदर चुंबकीय क्षेत्र होता है:",
    options_en: ["Zero", "Non-uniform", "Uniform", "Negative"],
    options_hi: ["शून्य", "असमान", "एकसमान", "ऋणात्मक"],
    answer_en: "Uniform",
    answer_hi: "एकसमान",
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