const questions = [
  {
    num: 1,
    question_en: "Which of the following is not a vector quantity?",
    question_hi: "निम्नलिखित में से कौन सी सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "SI unit of angular momentum is?",
    question_hi: "कोणीय संवेग की SI इकाई है?",
    options_en: ["kg m/s", "N m", "J s", "kg m²/s"],
    options_hi: ["kg m/s", "N m", "J s", "kg m²/s"],
    answer_en: "kg m²/s",
    answer_hi: "kg m²/s",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "A body of mass 2 kg accelerates at 3 m/s². What is the net force?",
    question_hi: "2 kg द्रव्यमान का एक पिंड 3 m/s² पर त्वरित होता है। नेट बल क्या है?",
    options_en: ["5 N", "6 N", "3 N", "2 N"],
    options_hi: ["5 N", "6 N", "3 N", "2 N"],
    answer_en: "6 N",
    answer_hi: "6 N",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Power is the rate of doing ______.",
    question_hi: "शक्ति ______ करने की दर है।",
    options_en: ["Work", "Heat", "Energy", "Force"],
    options_hi: ["कार्य", "ऊष्मा", "ऊर्जा", "बल"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which law explains rocket propulsion?",
    question_hi: "कौन सा नियम रॉकेट प्रणोदन की व्याख्या करता है?",
    options_en: ["Newton's 1st Law", "Newton's 2nd Law", "Newton's 3rd Law", "Law of Gravitation"],
    options_hi: ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "गुरुत्वाकर्षण का नियम"],
    answer_en: "Newton's 3rd Law",
    answer_hi: "न्यूटन का तीसरा नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Dimension of pressure is?",
    question_hi: "दाब का विमीय सूत्र है?",
    options_en: ["ML⁻¹T⁻²", "MLT⁻²", "ML²T⁻²", "M⁻¹LT"],
    options_hi: ["ML⁻¹T⁻²", "MLT⁻²", "ML²T⁻²", "M⁻¹LT"],
    answer_en: "ML⁻¹T⁻²",
    answer_hi: "ML⁻¹T⁻²",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "A car slows from 20 m/s to 10 m/s in 5 s. What is acceleration?",
    question_hi: "एक कार 20 m/s से 10 m/s तक 5 s में धीमी हो जाती है। त्वरण क्या है?",
    options_en: ["2 m/s²", "-2 m/s²", "5 m/s²", "-5 m/s²"],
    options_hi: ["2 m/s²", "-2 m/s²", "5 m/s²", "-5 m/s²"],
    answer_en: "-2 m/s²",
    answer_hi: "-2 m/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which is a conservative force?",
    question_hi: "कौन सा संरक्षी बल है?",
    options_en: ["Friction", "Tension", "Gravitational", "Air drag"],
    options_hi: ["घर्षण", "तनाव", "गुरुत्वाकर्षण", "वायु प्रतिरोध"],
    answer_en: "Gravitational",
    answer_hi: "गुरुत्वाकर्षण",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the escape velocity on earth?",
    question_hi: "पृथ्वी पर पलायन वेग क्या है?",
    options_en: ["5 km/s", "7 km/s", "8.9 km/s", "11.2 km/s"],
    options_hi: ["5 km/s", "7 km/s", "8.9 km/s", "11.2 km/s"],
    answer_en: "11.2 km/s",
    answer_hi: "11.2 km/s",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "A ball thrown up returns to the thrower. Work done by gravity is?",
    question_hi: "ऊपर फेंकी गई गेंद फेंकने वाले के पास लौट आती है। गुरुत्व द्वारा किया गया कार्य है?",
    options_en: ["Zero", "Positive", "Negative", "Data insufficient"],
    options_hi: ["शून्य", "धनात्मक", "ऋणात्मक", "डेटा अपर्याप्त"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "1 kWh = ?",
    question_hi: "1 kWh = ?",
    options_en: ["3.6 × 10³ J", "3.6 × 10⁶ J", "360 J", "36 J"],
    options_hi: ["3.6 × 10³ J", "3.6 × 10⁶ J", "360 J", "36 J"],
    answer_en: "3.6 × 10⁶ J",
    answer_hi: "3.6 × 10⁶ J",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "A 5 Ω resistor carries 2 A current. Power?",
    question_hi: "एक 5 Ω प्रतिरोधक में 2 A धारा प्रवाहित होती है। शक्ति?",
    options_en: ["5 W", "10 W", "20 W", "40 W"],
    options_hi: ["5 W", "10 W", "20 W", "40 W"],
    answer_en: "20 W",
    answer_hi: "20 W",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which of these has the highest frequency?",
    question_hi: "इनमें से किसकी आवृत्ति सबसे अधिक है?",
    options_en: ["UV", "X-ray", "Gamma rays", "Microwaves"],
    options_hi: ["पराबैंगनी", "एक्स-रे", "गामा किरणें", "माइक्रोवेव"],
    answer_en: "Gamma rays",
    answer_hi: "गामा किरणें",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Heat transfer in vacuum occurs via?",
    question_hi: "निर्वात में ऊष्मा स्थानांतरण किसके माध्यम से होता है?",
    options_en: ["Conduction", "Convection", "Radiation", "All"],
    options_hi: ["चालन", "संवहन", "विकिरण", "सभी"],
    answer_en: "Radiation",
    answer_hi: "विकिरण",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Young's modulus relates to?",
    question_hi: "यंग मापांक किससे संबंधित है?",
    options_en: ["Shear", "Bulk", "Tension/Compression", "Twist"],
    options_hi: ["कर्तन", "आयतन", "तनाव/संपीड़न", "मरोड़"],
    answer_en: "Tension/Compression",
    answer_hi: "तनाव/संपीड़न",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Capacitance of parallel plates is proportional to?",
    question_hi: "समानांतर प्लेटों की धारिता किसके समानुपाती होती है?",
    options_en: ["Distance", "Area", "Charge", "Voltage"],
    options_hi: ["दूरी", "क्षेत्रफल", "आवेश", "वोल्टेज"],
    answer_en: "Area",
    answer_hi: "क्षेत्रफल",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Refractive index is always?",
    question_hi: "अपवर्तनांक हमेशा होता है?",
    options_en: [">0", ">1", "<1", "=0"],
    options_hi: [">0", ">1", "<1", "=0"],
    answer_en: ">1",
    answer_hi: ">1",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "A 10 μF capacitor is charged to 5 V. Charge stored?",
    question_hi: "एक 10 μF संधारित्र 5 V तक आवेशित है। संग्रहीत आवेश?",
    options_en: ["10 μC", "50 μC", "5 μC", "25 μC"],
    options_hi: ["10 μC", "50 μC", "5 μC", "25 μC"],
    answer_en: "50 μC",
    answer_hi: "50 μC",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Bohr model applies to?",
    question_hi: "बोहर मॉडल किस पर लागू होता है?",
    options_en: ["Hydrogen", "Helium", "Neon", "All atoms"],
    options_hi: ["हाइड्रोजन", "हीलियम", "नियॉन", "सभी परमाणु"],
    answer_en: "Hydrogen",
    answer_hi: "हाइड्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the value of μ₀?",
    question_hi: "μ₀ का मान क्या है?",
    options_en: ["4π × 10⁻⁵", "4π × 10⁻⁶", "10⁻⁷", "4π × 10⁻⁷"],
    options_hi: ["4π × 10⁻⁵", "4π × 10⁻⁶", "10⁻⁷", "4π × 10⁻⁷"],
    answer_en: "4π × 10⁻⁷",
    answer_hi: "4π × 10⁻⁷",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which of these is a scalar?",
    question_hi: "इनमें से कौन सी अदिश राशि है?",
    options_en: ["Momentum", "Electric field", "Work", "Current density"],
    options_hi: ["संवेग", "विद्युत क्षेत्र", "कार्य", "धारा घनत्व"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "A body weighs 10 N on Earth. On moon it weighs?",
    question_hi: "एक पिंड पृथ्वी पर 10 N वजन का है। चंद्रमा पर इसका वजन?",
    options_en: ["1.6 N", "5 N", "10 N", "0 N"],
    options_hi: ["1.6 N", "5 N", "10 N", "0 N"],
    answer_en: "1.6 N",
    answer_hi: "1.6 N",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Unit of magnetic flux?",
    question_hi: "चुंबकीय फ्लक्स की इकाई?",
    options_en: ["Tesla", "Weber", "Henry", "Coulomb"],
    options_hi: ["टेस्ला", "वेबर", "हेनरी", "कूलॉम"],
    answer_en: "Weber",
    answer_hi: "वेबर",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "A spring constant k = 200 N/m and extension x = 0.1 m. Force?",
    question_hi: "एक स्प्रिंग नियतांक k = 200 N/m और विस्तार x = 0.1 m। बल?",
    options_en: ["10 N", "20 N", "30 N", "40 N"],
    options_hi: ["10 N", "20 N", "30 N", "40 N"],
    answer_en: "20 N",
    answer_hi: "20 N",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which mirror gives erect & diminished image?",
    question_hi: "कौन सा दर्पण सीधा और छोटा प्रतिबिंब देता है?",
    options_en: ["Concave", "Convex", "Plane", "All"],
    options_hi: ["अवतल", "उत्तल", "समतल", "सभी"],
    answer_en: "Convex",
    answer_hi: "उत्तल",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Electric field inside a conductor?",
    question_hi: "चालक के अंदर विद्युत क्षेत्र?",
    options_en: ["Zero", "Infinite", "Constant", "Varies"],
    options_hi: ["शून्य", "अनंत", "स्थिर", "परिवर्तनशील"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Work-energy theorem applies to?",
    question_hi: "कार्य-ऊर्जा प्रमेय किस पर लागू होता है?",
    options_en: ["Only translational", "Only rotational", "Both", "None"],
    options_hi: ["केवल स्थानांतरीय", "केवल घूर्णी", "दोनों", "कोई नहीं"],
    answer_en: "Both",
    answer_hi: "दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "1 dioptre = focal length of?",
    question_hi: "1 डायोप्टर = कितनी फोकस दूरी?",
    options_en: ["1 m", "2 m", "10 cm", "0.5 m"],
    options_hi: ["1 m", "2 m", "10 cm", "0.5 m"],
    answer_en: "1 m",
    answer_hi: "1 m",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which quantum number gives shape of orbital?",
    question_hi: "कौन सा क्वांटम संख्या ऑर्बिटल का आकार देता है?",
    options_en: ["n", "l", "m", "s"],
    options_hi: ["n", "l", "m", "s"],
    answer_en: "l",
    answer_hi: "l",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Speed of sound depends on?",
    question_hi: "ध्वनि की गति किस पर निर्भर करती है?",
    options_en: ["Pressure", "Temperature", "Frequency", "Amplitude"],
    options_hi: ["दाब", "तापमान", "आवृत्ति", "आयाम"],
    answer_en: "Temperature",
    answer_hi: "तापमान",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "A wire of R resistance is stretched to double length. New resistance?",
    question_hi: "R प्रतिरोध के एक तार को दोगुनी लंबाई तक खींचा जाता है। नया प्रतिरोध?",
    options_en: ["R/2", "R", "2R", "4R"],
    options_hi: ["R/2", "R", "2R", "4R"],
    answer_en: "4R",
    answer_hi: "4R",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Intensity ∝ ?",
    question_hi: "तीव्रता ∝ ?",
    options_en: ["Amplitude²", "Frequency", "Wavelength", "Velocity"],
    options_hi: ["आयाम²", "आवृत्ति", "तरंगदैर्ध्य", "वेग"],
    answer_en: "Amplitude²",
    answer_hi: "आयाम²",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which device uses Fleming's left-hand rule?",
    question_hi: "कौन सा उपकरण फ्लेमिंग के बाएं हाथ के नियम का उपयोग करता है?",
    options_en: ["Motor", "Generator", "Transformer", "Inductor"],
    options_hi: ["मोटर", "जनरेटर", "ट्रांसफॉर्मर", "प्रेरक"],
    answer_en: "Motor",
    answer_hi: "मोटर",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Transformer works on?",
    question_hi: "ट्रांसफॉर्मर किस पर काम करता है?",
    options_en: ["AC only", "DC only", "Both", "None"],
    options_hi: ["केवल AC", "केवल DC", "दोनों", "कोई नहीं"],
    answer_en: "AC only",
    answer_hi: "केवल AC",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Half-life is the time for?",
    question_hi: "अर्ध-आयु वह समय है जिसमें?",
    options_en: ["Mass to double", "Activity to double", "Mass to reduce to half", "Mass to become zero"],
    options_hi: ["द्रव्यमान दोगुना हो जाता है", "सक्रियता दोगुनी हो जाती है", "द्रव्यमान आधा रह जाता है", "द्रव्यमान शून्य हो जाता है"],
    answer_en: "Mass to reduce to half",
    answer_hi: "द्रव्यमान आधा रह जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "A ball thrown at 20 m/s at 60°. Horizontal component?",
    question_hi: "एक गेंद 20 m/s की गति से 60° पर फेंकी जाती है। क्षैतिज घटक?",
    options_en: ["10 m/s", "15 m/s", "20 m/s", "17 m/s"],
    options_hi: ["10 m/s", "15 m/s", "20 m/s", "17 m/s"],
    answer_en: "10 m/s",
    answer_hi: "10 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Unit of momentum?",
    question_hi: "संवेग की इकाई?",
    options_en: ["kg m", "kg m/s", "N s", "Both 2 & 3"],
    options_hi: ["kg m", "kg m/s", "N s", "2 और 3 दोनों"],
    answer_en: "Both 2 & 3",
    answer_hi: "2 और 3 दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "A 2 C charge in 5 Ω resistor. Potential difference?",
    question_hi: "5 Ω प्रतिरोधक में 2 C आवेश। विभवांतर?",
    options_en: ["5 V", "10 V", "2.5 V", "None"],
    options_hi: ["5 V", "10 V", "2.5 V", "कोई नहीं"],
    answer_en: "None",
    answer_hi: "कोई नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Critical angle occurs when?",
    question_hi: "क्रांतिक कोण कब होता है?",
    options_en: ["i > r", "i = r", "i = 90°", "r = 90°"],
    options_hi: ["i > r", "i = r", "i = 90°", "r = 90°"],
    answer_en: "r = 90°",
    answer_hi: "r = 90°",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Wavelength of red light?",
    question_hi: "लाल प्रकाश की तरंगदैर्ध्य?",
    options_en: ["400 nm", "500 nm", "650 nm", "300 nm"],
    options_hi: ["400 nm", "500 nm", "650 nm", "300 nm"],
    answer_en: "650 nm",
    answer_hi: "650 nm",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which force is non-conservative?",
    question_hi: "कौन सा बल असंरक्षी है?",
    options_en: ["Gravity", "Elastic", "Electrostatic", "Friction"],
    options_hi: ["गुरुत्वाकर्षण", "प्रत्यास्थ", "विद्युत्स्थैतिक", "घर्षण"],
    answer_en: "Friction",
    answer_hi: "घर्षण",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Harmonic motion must have?",
    question_hi: "सरल आवर्त गति में अवश्य होना चाहिए?",
    options_en: ["Linear restoring force", "Constant velocity", "Damping", "No force"],
    options_hi: ["रैखिक प्रत्यानयन बल", "नियत वेग", "अवमंदन", "कोई बल नहीं"],
    answer_en: "Linear restoring force",
    answer_hi: "रैखिक प्रत्यानयन बल",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "A 3 μF cap in series with 6 μF. Equivalent?",
    question_hi: "3 μF संधारित्र 6 μF के साथ श्रृंखला में। समतुल्य?",
    options_en: ["9 μF", "4 μF", "2 μF", "1 μF"],
    options_hi: ["9 μF", "4 μF", "2 μF", "1 μF"],
    answer_en: "2 μF",
    answer_hi: "2 μF",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "SI unit of angular velocity?",
    question_hi: "कोणीय वेग की SI इकाई?",
    options_en: ["rpm", "rad/s", "degree/sec", "turns/sec"],
    options_hi: ["rpm", "rad/s", "डिग्री/सेकंड", "चक्कर/सेकंड"],
    answer_en: "rad/s",
    answer_hi: "rad/s",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Binding energy per nucleon highest for?",
    question_hi: "प्रति न्यूक्लियॉन बंधन ऊर्जा किसके लिए सबसे अधिक है?",
    options_en: ["Fe", "U", "He", "C"],
    options_hi: ["Fe", "U", "He", "C"],
    answer_en: "Fe",
    answer_hi: "Fe",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Flux through closed surface is?",
    question_hi: "बंद सतह के माध्यम से फ्लक्स है?",
    options_en: ["Non-zero", "Zero", "Infinite", "Depends"],
    options_hi: ["गैर-शून्य", "शून्य", "अनंत", "निर्भर करता है"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "If temperature ↑, resistance of semiconductor?",
    question_hi: "यदि तापमान ↑, अर्धचालक का प्रतिरोध?",
    options_en: ["Increases", "Decreases", "Constant", "Becomes zero"],
    options_hi: ["बढ़ता है", "घटता है", "स्थिर", "शून्य हो जाता है"],
    answer_en: "Decreases",
    answer_hi: "घटता है",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which lens forms real image always?",
    question_hi: "कौन सा लेंस हमेशा वास्तविक प्रतिबिंब बनाता है?",
    options_en: ["Convex", "Concave", "Cylindrical", "None"],
    options_hi: ["उत्तल", "अवतल", "बेलनाकार", "कोई नहीं"],
    answer_en: "Convex",
    answer_hi: "उत्तल",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Photoelectric effect depends on?",
    question_hi: "प्रकाश विद्युत प्रभाव किस पर निर्भर करता है?",
    options_en: ["Intensity", "Frequency", "Both", "None"],
    options_hi: ["तीव्रता", "आवृत्ति", "दोनों", "कोई नहीं"],
    answer_en: "Frequency",
    answer_hi: "आवृत्ति",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "A wave has frequency 100 Hz and wavelength 2 m. Speed?",
    question_hi: "एक तरंग की आवृत्ति 100 Hz और तरंगदैर्ध्य 2 m है। गति?",
    options_en: ["20 m/s", "100 m/s", "200 m/s", "50 m/s"],
    options_hi: ["20 m/s", "100 m/s", "200 m/s", "50 m/s"],
    answer_en: "200 m/s",
    answer_hi: "200 m/s",
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