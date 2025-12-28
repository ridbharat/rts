const questions = [
  {
    num: 1,
    question_en: "What is the dimensional formula of force?",
    question_hi: "बल का विमीय सूत्र क्या है?",
    options_en: ["MLT⁻²", "ML²T⁻²", "MLT⁻¹", "M⁰L¹T⁻²"],
    options_hi: ["MLT⁻²", "ML²T⁻²", "MLT⁻¹", "M⁰L¹T⁻²"],
    answer_en: "MLT⁻²",
    answer_hi: "MLT⁻²",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "A car accelerates from rest to 20 m/s in 5 s. Acceleration?",
    question_hi: "एक कार विराम से 20 m/s तक 5 s में त्वरित होती है। त्वरण?",
    options_en: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
    options_hi: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
    answer_en: "4 m/s²",
    answer_hi: "4 m/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which physical quantity has the unit Henry?",
    question_hi: "किस भौतिक राशि की इकाई हेनरी है?",
    options_en: ["Capacitance", "Inductance", "Resistance", "Charge"],
    options_hi: ["धारिता", "प्रेरकत्व", "प्रतिरोध", "आवेश"],
    answer_en: "Inductance",
    answer_hi: "प्रेरकत्व",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "The value of universal gravitational constant G is:",
    question_hi: "सार्वत्रिक गुरुत्वाकर्षण नियतांक G का मान है:",
    options_en: ["6.67×10⁻¹¹", "9.8", "3×10⁸", "1.6×10⁻¹⁹"],
    options_hi: ["6.67×10⁻¹¹", "9.8", "3×10⁸", "1.6×10⁻¹⁹"],
    answer_en: "6.67×10⁻¹¹",
    answer_hi: "6.67×10⁻¹¹",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the speed of light in vacuum?",
    question_hi: "निर्वात में प्रकाश की गति क्या है?",
    options_en: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10⁹ m/s"],
    options_hi: ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10⁹ m/s"],
    answer_en: "3×10⁸ m/s",
    answer_hi: "3×10⁸ m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "If wavelength = 2 m and frequency = 100 Hz, wave speed?",
    question_hi: "यदि तरंगदैर्ध्य = 2 m और आवृत्ति = 100 Hz, तरंग गति?",
    options_en: ["50 m/s", "100 m/s", "200 m/s", "400 m/s"],
    options_hi: ["50 m/s", "100 m/s", "200 m/s", "400 m/s"],
    answer_en: "200 m/s",
    answer_hi: "200 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which radiation is used in TV remote sensors?",
    question_hi: "TV रिमोट सेंसर में किस विकिरण का उपयोग किया जाता है?",
    options_en: ["Infrared", "Gamma rays", "UV rays", "X-rays"],
    options_hi: ["अवरक्त", "गामा किरणें", "पराबैंगनी किरणें", "एक्स-रे"],
    answer_en: "Infrared",
    answer_hi: "अवरक्त",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Unit of coefficient of friction:",
    question_hi: "घर्षण गुणांक की इकाई:",
    options_en: ["No unit", "Newton", "Pascal", "Joule"],
    options_hi: ["कोई इकाई नहीं", "न्यूटन", "पास्कल", "जूल"],
    answer_en: "No unit",
    answer_hi: "कोई इकाई नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "In SHM, acceleration is maximum at:",
    question_hi: "सरल आवर्त गति में, त्वरण अधिकतम होता है:",
    options_en: ["Mean position", "Extreme position", "Between mean and extreme", "Middle 1/3"],
    options_hi: ["माध्य स्थिति", "चरम स्थिति", "माध्य और चरम के बीच", "मध्य 1/3"],
    answer_en: "Extreme position",
    answer_hi: "चरम स्थिति",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which mirror is used in headlamps?",
    question_hi: "हेडलैंप में किस दर्पण का उपयोग किया जाता है?",
    options_en: ["Concave", "Convex", "Plane", "Cylindrical"],
    options_hi: ["अवतल", "उत्तल", "समतल", "बेलनाकार"],
    answer_en: "Concave",
    answer_hi: "अवतल",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the SI unit of energy?",
    question_hi: "ऊर्जा की SI इकाई क्या है?",
    options_en: ["Joule", "Watt", "Pascal", "Henry"],
    options_hi: ["जूल", "वाट", "पास्कल", "हेनरी"],
    answer_en: "Joule",
    answer_hi: "जूल",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "A force acts on a 4 kg body producing acceleration 3 m/s². Force?",
    question_hi: "एक बल 4 kg पिंड पर कार्य करता है जिससे 3 m/s² त्वरण उत्पन्न होता है। बल?",
    options_en: ["6 N", "8 N", "12 N", "15 N"],
    options_hi: ["6 N", "8 N", "12 N", "15 N"],
    answer_en: "12 N",
    answer_hi: "12 N",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which wave cannot travel in vacuum?",
    question_hi: "कौन सी तरंग निर्वात में यात्रा नहीं कर सकती?",
    options_en: ["Sound", "Light", "Radio", "X-rays"],
    options_hi: ["ध्वनि", "प्रकाश", "रेडियो", "एक्स-रे"],
    answer_en: "Sound",
    answer_hi: "ध्वनि",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which quantity is conserved in elastic collision?",
    question_hi: "प्रत्यास्थ संघट्ट में कौन सी राशि संरक्षित रहती है?",
    options_en: ["Kinetic energy", "Heat", "Potential energy", "None"],
    options_hi: ["गतिज ऊर्जा", "ऊष्मा", "स्थितिज ऊर्जा", "कोई नहीं"],
    answer_en: "Kinetic energy",
    answer_hi: "गतिज ऊर्जा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the SI unit of power?",
    question_hi: "शक्ति की SI इकाई क्या है?",
    options_en: ["Watt", "Joule", "Newton", "Volt"],
    options_hi: ["वाट", "जूल", "न्यूटन", "वोल्ट"],
    answer_en: "Watt",
    answer_hi: "वाट",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Faraday's law is related to:",
    question_hi: "फैराडे का नियम संबंधित है:",
    options_en: ["Electromagnetic induction", "Heating effect", "Chemical effect", "Magnetic force"],
    options_hi: ["विद्युत चुम्बकीय प्रेरण", "तापन प्रभाव", "रासायनिक प्रभाव", "चुंबकीय बल"],
    answer_en: "Electromagnetic induction",
    answer_hi: "विद्युत चुम्बकीय प्रेरण",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the escape velocity on Earth?",
    question_hi: "पृथ्वी पर पलायन वेग क्या है?",
    options_en: ["11.2 km/s", "9.8 km/s", "3 km/s", "5 km/s"],
    options_hi: ["11.2 km/s", "9.8 km/s", "3 km/s", "5 km/s"],
    answer_en: "11.2 km/s",
    answer_hi: "11.2 km/s",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "If current = 2 A for 10 seconds, charge transferred?",
    question_hi: "यदि धारा = 2 A, 10 सेकंड के लिए, स्थानांतरित आवेश?",
    options_en: ["10 C", "20 C", "5 C", "15 C"],
    options_hi: ["10 C", "20 C", "5 C", "15 C"],
    answer_en: "20 C",
    answer_hi: "20 C",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Unit of magnetic flux:",
    question_hi: "चुंबकीय फ्लक्स की इकाई:",
    options_en: ["Weber", "Tesla", "Newton", "Henry"],
    options_hi: ["वेबर", "टेस्ला", "न्यूटन", "हेनरी"],
    answer_en: "Weber",
    answer_hi: "वेबर",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "The refractive index of diamond is about:",
    question_hi: "हीरे का अपवर्तनांक लगभग है:",
    options_en: ["2.42", "1", "1.33", "1.5"],
    options_hi: ["2.42", "1", "1.33", "1.5"],
    answer_en: "2.42",
    answer_hi: "2.42",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which lens diverges light rays?",
    question_hi: "कौन सा लेंस प्रकाश किरणों को अपसारित करता है?",
    options_en: ["Concave", "Convex", "Plano-convex", "None"],
    options_hi: ["अवतल", "उत्तल", "समतल-उत्तल", "कोई नहीं"],
    answer_en: "Concave",
    answer_hi: "अवतल",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which of the following is a vector?",
    question_hi: "निम्नलिखित में से कौन सा सदिश है?",
    options_en: ["Work", "Power", "Displacement", "Energy"],
    options_hi: ["कार्य", "शक्ति", "विस्थापन", "ऊर्जा"],
    answer_en: "Displacement",
    answer_hi: "विस्थापन",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Unit of impulse:",
    question_hi: "आवेग की इकाई:",
    options_en: ["N·s", "N/m", "W", "J"],
    options_hi: ["N·s", "N/m", "W", "J"],
    answer_en: "N·s",
    answer_hi: "N·s",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "A 2 μF capacitor charged to 100 V. Energy stored?",
    question_hi: "100 V तक आवेशित 2 μF संधारित्र। संग्रहीत ऊर्जा?",
    options_en: ["0.01 J", "0.02 J", "0.002 J", "1 J"],
    options_hi: ["0.01 J", "0.02 J", "0.002 J", "1 J"],
    answer_en: "0.01 J",
    answer_hi: "0.01 J",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "For a concave mirror, focal length is:",
    question_hi: "अवतल दर्पण के लिए, फोकस दूरी होती है:",
    options_en: ["Positive", "Negative", "Zero", "Infinite"],
    options_hi: ["धनात्मक", "ऋणात्मक", "शून्य", "अनंत"],
    answer_en: "Negative",
    answer_hi: "ऋणात्मक",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which law states P ∝ 1/V?",
    question_hi: "कौन सा नियम कहता है कि P ∝ 1/V?",
    options_en: ["Boyle's law", "Charles' law", "Newton's law", "Hooke's law"],
    options_hi: ["बॉयल का नियम", "चार्ल्स का नियम", "न्यूटन का नियम", "हुक का नियम"],
    answer_en: "Boyle's law",
    answer_hi: "बॉयल का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "In a transformer, which remains constant?",
    question_hi: "ट्रांसफॉर्मर में, क्या स्थिर रहता है?",
    options_en: ["Power", "Voltage", "Current", "Resistance"],
    options_hi: ["शक्ति", "वोल्टेज", "धारा", "प्रतिरोध"],
    answer_en: "Power",
    answer_hi: "शक्ति",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "If mass = 5 kg and velocity = 6 m/s, momentum?",
    question_hi: "यदि द्रव्यमान = 5 kg और वेग = 6 m/s, संवेग?",
    options_en: ["30 kg m/s", "11 kg m/s", "20 kg m/s", "15 kg m/s"],
    options_hi: ["30 kg m/s", "11 kg m/s", "20 kg m/s", "15 kg m/s"],
    answer_en: "30 kg m/s",
    answer_hi: "30 kg m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Dimension of pressure:",
    question_hi: "दाब का विमीय सूत्र:",
    options_en: ["ML⁻¹T⁻²", "MLT⁻²", "ML²T⁻³", "M⁰L⁰T⁻²"],
    options_hi: ["ML⁻¹T⁻²", "MLT⁻²", "ML²T⁻³", "M⁰L⁰T⁻²"],
    answer_en: "ML⁻¹T⁻²",
    answer_hi: "ML⁻¹T⁻²",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Capacitor stores energy in:",
    question_hi: "संधारित्र ऊर्जा संग्रहीत करता है:",
    options_en: ["Electric field", "Magnetic field", "Kinetic form", "Heat"],
    options_hi: ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "गतिज रूप", "ऊष्मा"],
    answer_en: "Electric field",
    answer_hi: "विद्युत क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which electromagnetic wave has highest frequency?",
    question_hi: "किस विद्युत चुम्बकीय तरंग की आवृत्ति सबसे अधिक है?",
    options_en: ["Gamma rays", "Radio waves", "Infrared", "Microwaves"],
    options_hi: ["गामा किरणें", "रेडियो तरंगें", "अवरक्त", "माइक्रोवेव"],
    answer_en: "Gamma rays",
    answer_hi: "गामा किरणें",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Inertia depends on:",
    question_hi: "जड़त्व निर्भर करता है:",
    options_en: ["Mass", "Velocity", "Force", "Acceleration"],
    options_hi: ["द्रव्यमान", "वेग", "बल", "त्वरण"],
    answer_en: "Mass",
    answer_hi: "द्रव्यमान",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "A stone thrown horizontally travels 20 m in 2 s. Horizontal velocity?",
    question_hi: "क्षैतिज रूप से फेंका गया पत्थर 2 s में 20 m यात्रा करता है। क्षैतिज वेग?",
    options_en: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
    options_hi: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
    answer_en: "10 m/s",
    answer_hi: "10 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "If R = 10 Ω and V = 50 V, current?",
    question_hi: "यदि R = 10 Ω और V = 50 V, धारा?",
    options_en: ["0.2 A", "2 A", "5 A", "10 A"],
    options_hi: ["0.2 A", "2 A", "5 A", "10 A"],
    answer_en: "5 A",
    answer_hi: "5 A",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which device converts mechanical energy to electrical energy?",
    question_hi: "कौन सा उपकरण यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
    options_en: ["Generator", "Motor", "Transformer", "Rectifier"],
    options_hi: ["जनरेटर", "मोटर", "ट्रांसफॉर्मर", "रेक्टिफायर"],
    answer_en: "Generator",
    answer_hi: "जनरेटर",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "The frequency of AC in India is:",
    question_hi: "भारत में AC की आवृत्ति है:",
    options_en: ["50 Hz", "60 Hz", "100 Hz", "25 Hz"],
    options_hi: ["50 Hz", "60 Hz", "100 Hz", "25 Hz"],
    answer_en: "50 Hz",
    answer_hi: "50 Hz",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "If g = 10 m/s², time to fall 20 m?",
    question_hi: "यदि g = 10 m/s², 20 m गिरने में समय?",
    options_en: ["2 s", "2.5 s", "3 s", "4 s"],
    options_hi: ["2 s", "2.5 s", "3 s", "4 s"],
    answer_en: "2 s",
    answer_hi: "2 s",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which force acts towards the center in circular motion?",
    question_hi: "वृत्तीय गति में कौन सा बल केंद्र की ओर कार्य करता है?",
    options_en: ["Centripetal force", "Centrifugal force", "Friction", "Normal force"],
    options_hi: ["अभिकेंद्रीय बल", "अपकेंद्रीय बल", "घर्षण", "अभिलंब बल"],
    answer_en: "Centripetal force",
    answer_hi: "अभिकेंद्रीय बल",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which radiation is used for sterilization?",
    question_hi: "बंध्याकरण के लिए किस विकिरण का उपयोग किया जाता है?",
    options_en: ["Gamma rays", "Infrared", "Ultraviolet", "Microwaves"],
    options_hi: ["गामा किरणें", "अवरक्त", "पराबैंगनी", "माइक्रोवेव"],
    answer_en: "Gamma rays",
    answer_hi: "गामा किरणें",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Unit of electric field:",
    question_hi: "विद्युत क्षेत्र की इकाई:",
    options_en: ["N/C", "J/C", "W/C", "C/N"],
    options_hi: ["N/C", "J/C", "W/C", "C/N"],
    answer_en: "N/C",
    answer_hi: "N/C",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Speed of sound is maximum in:",
    question_hi: "ध्वनि की गति अधिकतम होती है:",
    options_en: ["Solid", "Liquid", "Gas", "Vacuum"],
    options_hi: ["ठोस", "द्रव", "गैस", "निर्वात"],
    answer_en: "Solid",
    answer_hi: "ठोस",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "What is the unit of angular velocity?",
    question_hi: "कोणीय वेग की इकाई क्या है?",
    options_en: ["rad/s", "m/s", "N/s", "Hz"],
    options_hi: ["rad/s", "m/s", "N/s", "Hz"],
    answer_en: "rad/s",
    answer_hi: "rad/s",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which law governs refraction?",
    question_hi: "कौन सा नियम अपवर्तन को नियंत्रित करता है?",
    options_en: ["Snell's law", "Hooke's law", "Faraday's law", "Newton's law"],
    options_hi: ["स्नेल का नियम", "हुक का नियम", "फैराडे का नियम", "न्यूटन का नियम"],
    answer_en: "Snell's law",
    answer_hi: "स्नेल का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "If work = 50 J and time = 5 s, power?",
    question_hi: "यदि कार्य = 50 J और समय = 5 s, शक्ति?",
    options_en: ["5 W", "10 W", "20 W", "50 W"],
    options_hi: ["5 W", "10 W", "20 W", "50 W"],
    answer_en: "10 W",
    answer_hi: "10 W",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which metal is used in thermometers?",
    question_hi: "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
    options_en: ["Mercury", "Copper", "Iron", "Aluminium"],
    options_hi: ["पारा", "तांबा", "लोहा", "एल्युमीनियम"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Electric current is the flow of:",
    question_hi: "विद्युत धारा का प्रवाह है:",
    options_en: ["Electrons", "Protons", "Neutrons", "Atoms"],
    options_hi: ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "परमाणु"],
    answer_en: "Electrons",
    answer_hi: "इलेक्ट्रॉन",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Unit of latent heat:",
    question_hi: "गुप्त ऊष्मा की इकाई:",
    options_en: ["J/kg", "J", "W", "N"],
    options_hi: ["J/kg", "J", "W", "N"],
    answer_en: "J/kg",
    answer_hi: "J/kg",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which particle has no charge?",
    question_hi: "किस कण पर कोई आवेश नहीं होता?",
    options_en: ["Neutron", "Electron", "Proton", "Positron"],
    options_hi: ["न्यूट्रॉन", "इलेक्ट्रॉन", "प्रोटॉन", "पॉजिट्रॉन"],
    answer_en: "Neutron",
    answer_hi: "न्यूट्रॉन",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the time period of a 2 Hz wave?",
    question_hi: "2 Hz तरंग का आवर्तकाल क्या है?",
    options_en: ["0.5 s", "1 s", "2 s", "0.2 s"],
    options_hi: ["0.5 s", "1 s", "2 s", "0.2 s"],
    answer_en: "0.5 s",
    answer_hi: "0.5 s",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "In which medium does light travel fastest?",
    question_hi: "किस माध्यम में प्रकाश सबसे तेज यात्रा करता है?",
    options_en: ["Air", "Water", "Glass", "Diamond"],
    options_hi: ["वायु", "जल", "कांच", "हीरा"],
    answer_en: "Air",
    answer_hi: "वायु",
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