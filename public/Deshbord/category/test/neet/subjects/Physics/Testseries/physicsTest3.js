const questions = [
  {
    "num": 1,
    "question_en": "Which physical quantity is measured in Henry?",
    "question_hi": "हेनरी किस भौतिक राशि का मात्रक है?",
    "options_en": ["Capacitance", "Inductance", "Resistance", "Conductance"],
    "options_hi": ["कैपेसिटेंस", "इंडक्टेंस", "रेज़िस्टेंस", "कंडक्टेंस"],
    "answer_en": "Inductance",
    "answer_hi": "इंडक्टेंस",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 2,
    "question_en": "Which law explains the force between two current-carrying conductors?",
    "question_hi": "दो धारा-वाहक चालकों के बीच बल किस नियम से समझाया जाता है?",
    "options_en": ["Ampere's law", "Coulomb's law", "Lenz's law", "Faraday's law"],
    "options_hi": ["एम्पियर का नियम", "कूलॉम्ब का नियम", "लेन्ज का नियम", "फैराडे का नियम"],
    "answer_en": "Ampere's law",
    "answer_hi": "एम्पियर का नियम",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 3,
    "question_en": "In a transistor, which region is lightly doped?",
    "question_hi": "ट्रांजिस्टर में कौन-सा क्षेत्र हल्का डोप्ड होता है?",
    "options_en": ["Emitter", "Base", "Collector", "All are equally doped"],
    "options_hi": ["एमिटर", "बेस", "कलेक्टर", "सभी समान रूप से डोप्ड"],
    "answer_en": "Base",
    "answer_hi": "बेस",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 4,
    "question_en": "Which type of mirror is used in car headlights?",
    "question_hi": "कार की हेडलाइट में किस प्रकार का दर्पण उपयोग होता है?",
    "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Cylindrical mirror"],
    "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "सिलिंड्रिकल दर्पण"],
    "answer_en": "Concave mirror",
    "answer_hi": "अवतल दर्पण",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 5,
    "question_en": "SI unit of angular momentum?",
    "question_hi": "कोणीय संवेग का SI मात्रक क्या है?",
    "options_en": ["kg m/s", "kg m/s²", "kg m²/s", "kg m²/s²"],
    "options_hi": ["kg m/s", "kg m/s²", "kg m²/s", "kg m²/s²"],
    "answer_en": "kg m²/s",
    "answer_hi": "kg m²/s",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which principle does hydraulic lift work on?",
    "question_hi": "हाइड्रोलिक लिफ्ट किस सिद्धांत पर कार्य करती है?",
    "options_en": ["Bernoulli’s principle", "Archimedes principle", "Pascals law", "Hooke's law"],
    "options_hi": ["बर्नौली सिद्धांत", "आर्किमिडीज़ सिद्धांत", "पास्कल का नियम", "हुक का नियम"],
    "answer_en": "Pascals law",
    "answer_hi": "पास्कल का नियम",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 7,
    "question_en": "The speed of light in a medium depends on:",
    "question_hi": "किसी माध्यम में प्रकाश की गति किस पर निर्भर करती है?",
    "options_en": ["Frequency", "Wavelength", "Refractive index", "Amplitude"],
    "options_hi": ["आवृत्ति", "तरंगदैर्ध्य", "अपवर्तक सूचकांक", "आयाम"],
    "answer_en": "Refractive index",
    "answer_hi": "अपवर्तक सूचकांक",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 8,
    "question_en": "Which type of wave is sound in air?",
    "question_hi": "वायु में ध्वनि किस प्रकार की तरंग होती है?",
    "options_en": ["Transverse", "Longitudinal", "Electromagnetic", "Matter wave"],
    "options_hi": ["अनुप्रस्थ", "अनुदैर्ध्य", "विद्युतचुम्बकीय", "मैटर वेव"],
    "answer_en": "Longitudinal",
    "answer_hi": "अनुदैर्ध्य",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 9,
    "question_en": "The work function is measured in:",
    "question_hi": "वर्क फंक्शन किस इकाई में मापा जाता है?",
    "options_en": ["Joule", "eV", "Coulomb", "Watt"],
    "options_hi": ["जूल", "eV", "कूलॉम्ब", "वाट"],
    "answer_en": "eV",
    "answer_hi": "eV",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 10,
    "question_en": "Which gas is used in discharge tubes for neon signs?",
    "question_hi": "नीऑन साइन वाले डिस्चार्ज ट्यूब में कौन-सी गैस उपयोग होती है?",
    "options_en": ["Helium", "Neon", "Argon", "Krypton"],
    "options_hi": ["हीलियम", "नीऑन", "आर्गन", "क्रिप्टन"],
    "answer_en": "Neon",
    "answer_hi": "नीऑन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Friction is a:",
    "question_hi": "घर्षण किस प्रकार का बल है?",
    "options_en": ["Conservative force", "Non-conservative force", "Centripetal force", "Gravitational force"],
    "options_hi": ["संरक्षी बल", "असंरक्षी बल", "केन्द्रीय बल", "गुरुत्वाकर्षण बल"],
    "answer_en": "Non-conservative force",
    "answer_hi": "असंरक्षी बल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 12,
    "question_en": "Which electromagnetic wave has the longest wavelength?",
    "question_hi": "किस विद्युतचुम्बकीय तरंग की तरंगदैर्ध्य सबसे अधिक होती है?",
    "options_en": ["X-rays", "Gamma rays", "Microwaves", "Radio waves"],
    "options_hi": ["एक्स-रे", "गामा किरणें", "माइक्रोवेव", "रेडियो वेव"],
    "answer_en": "Radio waves",
    "answer_hi": "रेडियो वेव",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 13,
    "question_en": "Bohr model explains:",
    "question_hi": "बोर का मॉडल किसको समझाता है?",
    "options_en": ["Photoelectric effect", "Hydrogen spectrum", "Blackbody radiation", "X-ray emission"],
    "options_hi": ["फोटोइलेक्ट्रिक प्रभाव", "हाइड्रोजन स्पेक्ट्रम", "ब्लैकबॉडी विकिरण", "एक्स-रे उत्सर्जन"],
    "answer_en": "Hydrogen spectrum",
    "answer_hi": "हाइड्रोजन स्पेक्ट्रम",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 14,
    "question_en": "Magnetic field inside a long solenoid is:",
    "question_hi": "लंबे सोलोनॉयड के अंदर चुंबकीय क्षेत्र कैसा होता है?",
    "options_en": ["Zero", "Constant", "Inversely proportional to current", "Directly proportional to length"],
    "options_hi": ["शून्य", "समान", "धारा के व्युत्क्रमानुपाती", "लंबाई के समानुपाती"],
    "answer_en": "Constant",
    "answer_hi": "समान",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 15,
    "question_en": "Which property of a material opposes current flow?",
    "question_hi": "किस पदार्थ का कौन-सा गुण धारा के प्रवाह का विरोध करता है?",
    "options_en": ["Conductivity", "Permittivity", "Resistivity", "Inductance"],
    "options_hi": ["कंडक्टिविटी", "परमिटिविटी", "रेज़िस्टिविटी", "इंडक्टेंस"],
    "answer_en": "Resistivity",
    "answer_hi": "रेज़िस्टिविटी",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which nuclear reaction powers the Sun?",
    "question_hi": "सूर्य किस नाभिकीय अभिक्रिया से ऊर्जा प्राप्त करता है?",
    "options_en": ["Fission", "Fusion", "Beta decay", "Gamma emission"],
    "options_hi": ["विखंडन", "संलयन", "बीटा क्षय", "गामा उत्सर्जन"],
    "answer_en": "Fusion",
    "answer_hi": "संलयन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 17,
    "question_en": "The lens used to correct myopia is:",
    "question_hi": "मायोपिया को सुधारने के लिए कौन-सा लेंस उपयोग होता है?",
    "options_en": ["Convex lens", "Concave lens", "Cylindrical lens", "Plano-convex lens"],
    "options_hi": ["उत्तल लेंस", "अवतल लेंस", "सिलिंड्रिकल लेंस", "प्लेनो-कन्वेक्स"],
    "answer_en": "Concave lens",
    "answer_hi": "अवतल लेंस",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 18,
    "question_en": "Torque is the rotational analogue of:",
    "question_hi": "टॉर्क किसका घूर्णीय समकक्ष है?",
    "options_en": ["Force", "Work", "Power", "Momentum"],
    "options_hi": ["बल", "कार्य", "शक्ति", "संवेग"],
    "answer_en": "Force",
    "answer_hi": "बल",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 19,
    "question_en": "Light year is a unit of:",
    "question_hi": "लाइट ईयर किसका मात्रक है?",
    "options_en": ["Time", "Intensity", "Distance", "Velocity"],
    "options_hi": ["समय", "तीव्रता", "दूरी", "वेग"],
    "answer_en": "Distance",
    "answer_hi": "दूरी",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 20,
    "question_en": "Which device converts AC to DC?",
    "question_hi": "कौन-सा उपकरण AC को DC में बदलता है?",
    "options_en": ["Transformer", "Rectifier", "Oscillator", "Amplifier"],
    "options_hi": ["ट्रांसफॉर्मर", "रेक्टिफायर", "ऑस्सिलेटर", "एम्प्लीफायर"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which quantity remains constant in uniform circular motion?",
    "question_hi": "समान वृत्तीय गति में कौन-सी राशि स्थिर रहती है?",
    "options_en": ["Velocity", "Speed", "Force", "Energy"],
    "options_hi": ["वेग", "गति", "बल", "ऊर्जा"],
    "answer_en": "Speed",
    "answer_hi": "गति",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 22,
    "question_en": "In which process is heat transferred without medium?",
    "question_hi": "किस प्रक्रिया में ऊष्मा बिना माध्यम के स्थानांतरित होती है?",
    "options_en": ["Conduction", "Convection", "Radiation", "All of these"],
    "options_hi": ["चालन", "संवहन", "विकिरण", "सभी"],
    "answer_en": "Radiation",
    "answer_hi": "विकिरण",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 23,
    "question_en": "Terminal velocity depends on:",
    "question_hi": "टर्मिनल वेग किस पर निर्भर करता है?",
    "options_en": ["Mass", "Shape", "Fluid density", "All of these"],
    "options_hi": ["द्रव्यमान", "आकार", "द्रव का घनत्व", "सभी"],
    "answer_en": "All of these",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 24,
    "question_en": "The dimensional formula of pressure is:",
    "question_hi": "दाब का विमीय सूत्र क्या है?",
    "options_en": ["MLT⁻²", "ML⁻¹T⁻²", "M⁰LT⁻¹", "ML²T⁻¹"],
    "options_hi": ["MLT⁻²", "ML⁻¹T⁻²", "M⁰LT⁻¹", "ML²T⁻¹"],
    "answer_en": "ML⁻¹T⁻²",
    "answer_hi": "ML⁻¹T⁻²",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 25,
    "question_en": "A body floats when:",
    "question_hi": "एक वस्तु कब तैरती है?",
    "options_en": ["Weight > upthrust", "Weight < upthrust", "Weight = upthrust", "Density is zero"],
    "options_hi": ["वज़न > अपथ्रस्ट", "वज़न < अपथ्रस्ट", "वज़न = अपथ्रस्ट", "घनत्व शून्य"],
    "answer_en": "Weight < upthrust",
    "answer_hi": "वज़न < अपथ्रस्ट",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which is a scalar quantity?",
    "question_hi": "इनमें से कौन-सी राशि अदिश है?",
    "options_en": ["Torque", "Momentum", "Electric field", "Work"],
    "options_hi": ["टॉर्क", "संवेग", "विद्युत क्षेत्र", "कार्य"],
    "answer_en": "Work",
    "answer_hi": "कार्य",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 27,
    "question_en": "Unit of magnetic flux:",
    "question_hi": "चुंबकीय फ्लक्स का मात्रक क्या है?",
    "options_en": ["Tesla", "Weber", "Henry", "Farad"],
    "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैराड"],
    "answer_en": "Weber",
    "answer_hi": "वेबर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 28,
    "question_en": "For a diode, forward bias means:",
    "question_hi": "डायोड में फॉरवर्ड बायस का क्या मतलब है?",
    "options_en": ["p-side positive", "n-side positive", "Both sides equal", "None"],
    "options_hi": ["p-साइड पॉज़िटिव", "n-साइड पॉज़िटिव", "दोनों समान", "कोई नहीं"],
    "answer_en": "p-side positive",
    "answer_hi": "p-साइड पॉज़िटिव",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 29,
    "question_en": "Electrical conductivity of metals is due to:",
    "question_hi": "धातुओं की विद्युत चालकता किस कारण होती है?",
    "options_en": ["Ions", "Free electrons", "Atoms", "Lattice vibration"],
    "options_hi": ["आयन", "मुक्त इलेक्ट्रॉन", "परमाणु", "लैटिस कंपन"],
    "answer_en": "Free electrons",
    "answer_hi": "मुक्त इलेक्ट्रॉन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 30,
    "question_en": "Value of Avogadro number?",
    "question_hi": "एवोगाद्रो संख्या का मान क्या है?",
    "options_en": ["9.3×10²³", "6.022×10²३", "3×10⁸", "1.6×10⁻¹⁹"],
    "options_hi": ["9.3×10²³", "6.022×10²³", "3×10⁸", "1.6×10⁻¹⁹"],
    "answer_en": "6.022×10²³",
    "answer_hi": "6.022×10²³",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which radiation has no charge?",
    "question_hi": "किस विकिरण पर कोई आवेश नहीं होता?",
    "options_en": ["Alpha", "Beta", "Gamma", "Proton"],
    "options_hi": ["अल्फा", "बीटा", "गामा", "प्रोटॉन"],
    "answer_en": "Gamma",
    "answer_hi": "गामा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 32,
    "question_en": "What is the speed of EM waves in vacuum?",
    "question_hi": "निर्वात में EM तरंगों की गति क्या होती है?",
    "options_en": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10² m/s"],
    "options_hi": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10² m/s"],
    "answer_en": "3×10⁸ m/s",
    "answer_hi": "3×10⁸ m/s",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 33,
    "question_en": "The device that measures current is:",
    "question_hi": "धारा को मापने वाला उपकरण कौन सा है?",
    "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Wattmeter"],
    "options_hi": ["वोल्टमीटर", "एमीटर", "ओहममीटर", "वॉटमीटर"],
    "answer_en": "Ammeter",
    "answer_hi": "एमीटर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 34,
    "question_en": "Which quantity changes during refraction?",
    "question_hi": "अपवर्तन के दौरान कौन-सी राशि बदलती है?",
    "options_en": ["Frequency", "Speed", "Time period", "Mass"],
    "options_hi": ["आवृत्ति", "गति", "आवर्तकाल", "द्रव्यमान"],
    "answer_en": "Speed",
    "answer_hi": "गति",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 35,
    "question_en": "Which metal is used in thermocouples?",
    "question_hi": "थर्मोकपलों में कौन-सी धातु प्रयोग होती है?",
    "options_en": ["Copper", "Iron", "Constantan", "Silver"],
    "options_hi": ["तांबा", "लोहा", "कॉनस्टैन्टन", "चांदी"],
    "answer_en": "Constantan",
    "answer_hi": "कॉनस्टैन्टन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "A photocell works on:",
    "question_hi": "फोटोसेल किस प्रभाव पर काम करता है?",
    "options_en": ["Photoelectric effect", "Compton effect", "Pair production", "Diffraction"],
    "options_hi": ["फोटोइलेक्ट्रिक प्रभाव", "कॉम्पटन प्रभाव", "पेयर प्रोडक्शन", "विवर्तन"],
    "answer_en": "Photoelectric effect",
    "answer_hi": "फोटोइलेक्ट्रिक प्रभाव",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 37,
    "question_en": "Coulomb is unit of:",
    "question_hi": "कूलॉम्ब किसका इकाई है?",
    "options_en": ["Charge", "Current", "Resistance", "Power"],
    "options_hi": ["आवेश", "धारा", "प्रतिरोध", "शक्ति"],
    "answer_en": "Charge",
    "answer_hi": "आवेश",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 38,
    "question_en": "Which fundamental force is strongest?",
    "question_hi": "कौन-सा मूलभूत बल सबसे मजबूत है?",
    "options_en": ["Gravitational", "Weak nuclear", "Strong nuclear", "Electromagnetic"],
    "options_hi": ["गुरुत्वीय", "दुर्बल नाभिकीय", "सशक्त नाभिकीय", "विद्युतचुंबकीय"],
    "answer_en": "Strong nuclear",
    "answer_hi": "सशक्त नाभिकीय",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 39,
    "question_en": "Which component stores energy in magnetic form?",
    "question_hi": "कौन-सा अवयव ऊर्जा को चुंबकीय रूप में संग्रहीत करता है?",
    "options_en": ["Resistor", "Capacitor", "Inductor", "Diode"],
    "options_hi": ["रेज़िस्टर", "कैपेसिटर", "इंडक्टर", "डायोड"],
    "answer_en": "Inductor",
    "answer_hi": "इंडक्टर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 40,
    "question_en": "For a satellite in orbit, which force acts?",
    "question_hi": "कक्षा में स्थित उपग्रह पर कौन-सा बल कार्य करता है?",
    "options_en": ["Centrifugal", "Gravitational", "Friction", "Magnetic"],
    "options_hi": ["अपकेन्द्रीय", "गुरुत्वीय", "घर्षण", "चुंबकीय"],
    "answer_en": "Gravitational",
    "answer_hi": "गुरुत्वीय",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which material is diamagnetic?",
    "question_hi": "कौन-सा पदार्थ डायमैग्नेटिक है?",
    "options_en": ["Copper", "Aluminium", "Iron", "Cobalt"],
    "options_hi": ["तांबा", "एल्युमिनियम", "लोहा", "कोबाल्ट"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 42,
    "question_en": "Which motion is periodic?",
    "question_hi": "कौन-सी गति आवधिक होती है?",
    "options_en": ["Free fall", "Pendulum", "Constant acceleration", "Projectile"],
    "options_hi": ["मुक्त पतन", "लोलक", "समान त्वरण", "प्रक्षेप्य"],
    "answer_en": "Pendulum",
    "answer_hi": "लोलक",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 43,
    "question_en": "X-rays are produced by:",
    "question_hi": "एक्स-रे का उत्पादन किससे होता है?",
    "options_en": ["Nuclear reaction", "Electron transitions", "Braking of electrons", "Gamma decay"],
    "options_hi": ["नाभिकीय प्रतिक्रिया", "इलेक्ट्रॉन संक्रमण", "इलेक्ट्रॉनों की ब्रेकिंग", "गामा क्षय"],
    "answer_en": "Braking of electrons",
    "answer_hi": "इलेक्ट्रॉनों की ब्रेकिंग",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 44,
    "question_en": "The ratio of speed to frequency is:",
    "question_hi": "गति और आवृत्ति का अनुपात क्या कहलाता है?",
    "options_en": ["Force", "Energy", "Wavelength", "Amplitude"],
    "options_hi": ["बल", "ऊर्जा", "तरंगदैर्ध्य", "आयाम"],
    "answer_en": "Wavelength",
    "answer_hi": "तरंगदैर्ध्य",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 45,
    "question_en": "Transformer works on:",
    "question_hi": "ट्रांसफॉर्मर किस पर कार्य करता है?",
    "options_en": ["AC only", "DC only", "Both AC & DC", "Static charge"],
    "options_hi": ["केवल AC", "केवल DC", "AC और DC दोनों", "स्थैतिक आवेश"],
    "answer_en": "AC only",
    "answer_hi": "केवल AC",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which process causes sky to appear blue?",
    "question_hi": "आसमान नीला क्यों दिखाई देता है?",
    "options_en": ["Reflection", "Refraction", "Scattering", "Interference"],
    "options_hi": ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "हस्तक्षेप"],
    "answer_en": "Scattering",
    "answer_hi": "प्रकीर्णन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 47,
    "question_en": "Which wave is used in radar?",
    "question_hi": "रडार में कौन-सी तरंग उपयोग होती है?",
    "options_en": ["Infrared", "Microwave", "X-ray", "UV"],
    "options_hi": ["इन्फ्रारेड", "माइक्रोवेव", "एक्स-रे", "यूवी"],
    "answer_en": "Microwave",
    "answer_hi": "माइक्रोवेव",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 48,
    "question_en": "Electron was discovered by:",
    "question_hi": "इलेक्ट्रॉन की खोज किसने की?",
    "options_en": ["Rutherford", "Bohr", "Thomson", "Chadwick"],
    "options_hi": ["रदरफोर्ड", "बोर", "थॉमसन", "चैडविक"],
    "answer_en": "Thomson",
    "answer_hi": "थॉमसन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 49,
    "question_en": "Which device converts sound energy to electrical energy?",
    "question_hi": "ध्वनि ऊर्जा को विद्युत ऊर्जा में कौन बदलता है?",
    "options_en": ["Speaker", "Microphone", "Amplifier", "Transformer"],
    "options_hi": ["स्पीकर", "माइक्रोफोन", "एम्प्लीफायर", "ट्रांसफॉर्मर"],
    "answer_en": "Microphone",
    "answer_hi": "माइक्रोफोन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 50,
    "question_en": "Which has the shortest wavelength?",
    "question_hi": "किसकी तरंगदैर्ध्य सबसे कम होती है?",
    "options_en": ["UV", "Visible", "Infrared", "Gamma rays"],
    "options_hi": ["यूवी", "दृश्य", "इन्फ्रारेड", "गामा किरणें"],
    "answer_en": "Gamma rays",
    "answer_hi": "गामा किरणें",
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