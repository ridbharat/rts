const questions = [
  {
    num: 1,
    question_en: "Which physical quantity is measured in Farad?",
    question_hi: "कौन-सी भौतिक राशि फैरड में मापी जाती है?",
    options_en: ["Capacitance", "Inductance", "Resistance", "Power"],
    options_hi: ["कैपेसिटेंस", "इंडक्टेंस", "रेज़िस्टेंस", "पावर"],
    answer_en: "Capacitance",
    answer_hi: "कैपेसिटेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "Which physical quantity is measured in Tesla?",
    question_hi: "कौन-सी भौतिक राशि टेस्ला में मापी जाती है?",
    options_en: ["Magnetic field", "Electric field", "Capacitance", "Inductance"],
    options_hi: ["चुंबकीय क्षेत्र", "विद्युत क्षेत्र", "कैपेसिटेंस", "इंडक्टेंस"],
    answer_en: "Magnetic field",
    answer_hi: "चुंबकीय क्षेत्र",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "Which gas is filled in electric bulbs?",
    question_hi: "इलेक्ट्रिक बल्बों में कौन-सी गैस भरी जाती है?",
    options_en: ["Argon", "Oxygen", "Hydrogen", "Nitrogen"],
    options_hi: ["आर्गन", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
    answer_en: "Argon",
    answer_hi: "आर्गन",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "What is the SI unit of angular velocity?",
    question_hi: "कोणीय वेग का SI मात्रक क्या है?",
    options_en: ["rad/s", "m/s", "m/s²", "N"],
    options_hi: ["rad/s", "m/s", "m/s²", "N"],
    answer_en: "rad/s",
    answer_hi: "rad/s",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "Which quantity is measured in decibel (dB)?",
    question_hi: "कौन-सी राशि डेसिबल (dB) में मापी जाती है?",
    options_en: ["Sound intensity", "Temperature", "Magnetic field", "Light intensity"],
    options_hi: ["ध्वनि तीव्रता", "तापमान", "चुंबकीय क्षेत्र", "प्रकाश तीव्रता"],
    answer_en: "Sound intensity",
    answer_hi: "ध्वनि तीव्रता",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "Which law is related to electromagnetic induction?",
    question_hi: "कौन-सा नियम विद्युत चुंबकीय प्रेरण से संबंधित है?",
    options_en: ["Faraday's law", "Newton's law", "Boyle's law", "Snell's law"],
    options_hi: ["फैराडे का नियम", "न्यूटन का नियम", "बॉयल का नियम", "स्नेल का नियम"],
    answer_en: "Faraday's law",
    answer_hi: "फैराडे का नियम",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "Which device is used to store electric charge?",
    question_hi: "कौन-सा यंत्र विद्युत आवेश को संग्रहीत करता है?",
    options_en: ["Capacitor", "Battery", "Transformer", "Motor"],
    options_hi: ["कैपेसिटर", "बैटरी", "ट्रांसफॉर्मर", "मोटर"],
    answer_en: "Capacitor",
    answer_hi: "कैपेसिटर",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which type of motion does a pendulum perform?",
    question_hi: "लोलक किस प्रकार की गति करता है?",
    options_en: ["Periodic motion", "Random motion", "Uniform motion", "Translational motion"],
    options_hi: ["आवधिक गति", "अनियमित गति", "समान गति", "अनुवाद गति"],
    answer_en: "Periodic motion",
    answer_hi: "आवधिक गति",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "What is the unit of gravitational potential energy?",
    question_hi: "गुरुत्वीय स्थितिज ऊर्जा का मात्रक क्या है?",
    options_en: ["Joule", "Watt", "Newton", "Pascal"],
    options_hi: ["जूल", "वाट", "न्यूटन", "पास्कल"],
    answer_en: "Joule",
    answer_hi: "जूल",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "Which instrument is used to measure angle?",
    question_hi: "कौन-सा उपकरण कोण मापने के लिए उपयोग किया जाता है?",
    options_en: ["Protractor", "Barometer", "Hygrometer", "Ammeter"],
    options_hi: ["प्रोट्रैक्टर", "बैरोमीटर", "हाइग्रोमीटर", "एमीटर"],
    answer_en: "Protractor",
    answer_hi: "प्रोट्रैक्टर",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which device measures altitude?",
    question_hi: "कौन-सा यंत्र ऊँचाई मापता है?",
    options_en: ["Altimeter", "Hygrometer", "Voltmeter", "Ammeter"],
    options_hi: ["एल्टीमीटर", "हाइग्रोमीटर", "वोल्टमीटर", "एमीटर"],
    answer_en: "Altimeter",
    answer_hi: "एल्टीमीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which quantity is measured in Siemens?",
    question_hi: "सीमेंस किस भौतिक राशि का मात्रक है?",
    options_en: ["Conductance", "Resistance", "Power", "Energy"],
    options_hi: ["कंडक्टेंस", "रेज़िस्टेंस", "पावर", "ऊर्जा"],
    answer_en: "Conductance",
    answer_hi: "कंडक्टेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "What is the SI unit of impulse?",
    question_hi: "आवेग का SI मात्रक क्या है?",
    options_en: ["N·s", "Joule", "Watt", "Volt"],
    options_hi: ["N·s", "जूल", "वाट", "वोल्ट"],
    answer_en: "N·s",
    answer_hi: "N·s",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "Which metal is best conductor of electricity?",
    question_hi: "कौन-सी धातु विद्युत की सर्वश्रेष्ठ चालक है?",
    options_en: ["Silver", "Copper", "Iron", "Aluminum"],
    options_hi: ["चांदी", "तांबा", "लोहा", "एल्यूमिनियम"],
    answer_en: "Silver",
    answer_hi: "चांदी",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "Which device is used to measure extremely low temperature?",
    question_hi: "अत्यंत कम तापमान मापने के लिए कौन-सा यंत्र उपयोग होता है?",
    options_en: ["Cryometer", "Pyrometer", "Barometer", "Hydrometer"],
    options_hi: ["क्रायोमीटर", "पाइरोमीटर", "बैरोमीटर", "हाइड्रोमीटर"],
    answer_en: "Cryometer",
    answer_hi: "क्रायोमीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "What is the SI unit of luminous intensity?",
    question_hi: "द्युति तीव्रता का SI मात्रक क्या है?",
    options_en: ["Candela", "Lumen", "Lux", "Watt"],
    options_hi: ["कैंडेला", "ल्यूमेन", "लक्स", "वाट"],
    answer_en: "Candela",
    answer_hi: "कैंडेला",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "The unit of electric flux is?",
    question_hi: "विद्युत फ्लक्स का मात्रक क्या है?",
    options_en: ["Volt-meter", "Tesla", "Coulomb", "Henry"],
    options_hi: ["वोल्ट-मीटर", "टेस्ला", "कूलॉम्ब", "हेनरी"],
    answer_en: "Volt-meter",
    answer_hi: "वोल्ट-मीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "Which physical quantity is measured in Lux?",
    question_hi: "कौन-सी भौतिक राशि लक्स में मापी जाती है?",
    options_en: ["Illuminance", "Luminous flux", "Power", "Energy"],
    options_hi: ["इल्युमिनेंस", "ल्यूमिनस फ्लक्स", "पावर", "ऊर्जा"],
    answer_en: "Illuminance",
    answer_hi: "इल्युमिनेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "Which substance has the highest thermal conductivity?",
    question_hi: "किस पदार्थ की ऊष्मीय चालकता सबसे अधिक होती है?",
    options_en: ["Silver", "Wood", "Glass", "Plastic"],
    options_hi: ["चांदी", "लकड़ी", "काँच", "प्लास्टिक"],
    answer_en: "Silver",
    answer_hi: "चांदी",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which instrument measures rotational speed?",
    question_hi: "कौन-सा उपकरण घूर्णीय गति मापता है?",
    options_en: ["Tachometer", "Barometer", "Hygrometer", "Thermometer"],
    options_hi: ["टैकोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
    answer_en: "Tachometer",
    answer_hi: "टैकोमीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "The unit of surface tension is?",
    question_hi: "पृष्ठ तनाव का मात्रक क्या है?",
    options_en: ["N/m", "N", "J", "kg/m³"],
    options_hi: ["N/m", "N", "J", "kg/m³"],
    answer_en: "N/m",
    answer_hi: "N/m",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "Which type of mirror is used in rear-view mirrors?",
    question_hi: "रियर-व्यू मिरर में किस प्रकार का दर्पण उपयोग होता है?",
    options_en: ["Convex mirror", "Concave mirror", "Plane mirror", "None"],
    options_hi: ["उत्तल दर्पण", "अवतल दर्पण", "समतल दर्पण", "कोई नहीं"],
    answer_en: "Convex mirror",
    answer_hi: "उत्तल दर्पण",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "Which process converts solid directly into vapor?",
    question_hi: "कौन-सी प्रक्रिया ठोस को सीधे वाष्प में बदल देती है?",
    options_en: ["Sublimation", "Evaporation", "Condensation", "Deposition"],
    options_hi: ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "अवक्षेपण"],
    answer_en: "Sublimation",
    answer_hi: "उर्ध्वपातन",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "Which law explains buoyant force?",
    question_hi: "उत्प्लावन बल को कौन-सा सिद्धांत समझाता है?",
    options_en: ["Archimedes' principle", "Newton's law", "Hooke's law", "Coulomb's law"],
    options_hi: ["आर्किमिडीज़ सिद्धांत", "न्यूटन का नियम", "हुक का नियम", "कूलॉम्ब का नियम"],
    answer_en: "Archimedes' principle",
    answer_hi: "आर्किमिडीज़ सिद्धांत",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "Which instrument measures atmospheric humidity?",
    question_hi: "कौन-सा उपकरण वायुमंडलीय आर्द्रता मापता है?",
    options_en: ["Hygrometer", "Thermometer", "Barometer", "Voltmeter"],
    options_hi: ["हाइग्रोमीटर", "थर्मामीटर", "बैरोमीटर", "वोल्टमीटर"],
    answer_en: "Hygrometer",
    answer_hi: "हाइग्रोमीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "What is the SI unit of stress?",
    question_hi: "तनाव का SI मात्रक क्या है?",
    options_en: ["Pascal", "Newton", "Joule", "Watt"],
    options_hi: ["पास्कल", "न्यूटन", "जूल", "वाट"],
    answer_en: "Pascal",
    answer_hi: "पास्कल",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "The ability of a material to return to original shape is?",
    question_hi: "किसी पदार्थ की मूल आकार में लौटने की क्षमता क्या कहलाती है?",
    options_en: ["Elasticity", "Plasticity", "Rigidity", "Ductility"],
    options_hi: ["लोच", "प्लास्टिसिटी", "कठोरता", "नम्यता"],
    answer_en: "Elasticity",
    answer_hi: "लोच",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "The phenomenon of splitting white light into colors is?",
    question_hi: "सफेद प्रकाश के रंगों में विभाजन की घटना क्या कहलाती है?",
    options_en: ["Dispersion", "Refraction", "Reflection", "Absorption"],
    options_hi: ["विक्षेपण", "अपवर्तन", "परावर्तन", "अवशोषण"],
    answer_en: "Dispersion",
    answer_hi: "विक्षेपण",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "Which color has the shortest wavelength?",
    question_hi: "किस रंग की तरंग दैर्ध्य सबसे कम होती है?",
    options_en: ["Violet", "Red", "Yellow", "Green"],
    options_hi: ["बैंगनी", "लाल", "पीला", "हरा"],
    answer_en: "Violet",
    answer_hi: "बैंगनी",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "Which physical quantity is measured in Weber?",
    question_hi: "वेबर किस भौतिक राशि का मात्रक है?",
    options_en: ["Magnetic flux", "Magnetic field", "Inductance", "Resistance"],
    options_hi: ["चुंबकीय फ्लक्स", "चुंबकीय क्षेत्र", "इंडक्टेंस", "रेज़िस्टेंस"],
    answer_en: "Magnetic flux",
    answer_hi: "चुंबकीय फ्लक्स",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which process produces echo?",
    question_hi: "गूंज किस प्रक्रिया से उत्पन्न होती है?",
    options_en: ["Reflection of sound", "Refraction of sound", "Diffraction of sound", "Interference of sound"],
    options_hi: ["ध्वनि का परावर्तन", "ध्वनि का अपवर्तन", "ध्वनि का विवर्तन", "ध्वनि का व्यतिकरण"],
    answer_en: "Reflection of sound",
    answer_hi: "ध्वनि का परावर्तन",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "What is the SI unit of angular acceleration?",
    question_hi: "कोणीय त्वरण का SI मात्रक क्या है?",
    options_en: ["rad/s²", "m/s²", "Hz", "N"],
    options_hi: ["rad/s²", "m/s²", "Hz", "N"],
    answer_en: "rad/s²",
    answer_hi: "rad/s²",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "Which electromagnetic wave has the least energy?",
    question_hi: "किस विद्युतचुंबकीय तरंग की ऊर्जा सबसे कम होती है?",
    options_en: ["Radio waves", "X-rays", "Gamma rays", "UV rays"],
    options_hi: ["रेडियो तरंगें", "एक्स-किरणें", "गामा किरणें", "यूवी किरणें"],
    answer_en: "Radio waves",
    answer_hi: "रेडियो तरंगें",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "Which device measures electric power?",
    question_hi: "कौन-सा यंत्र विद्युत शक्ति मापता है?",
    options_en: ["Wattmeter", "Ammeter", "Voltmeter", "Hygrometer"],
    options_hi: ["वॉटमीटर", "एमीटर", "वोल्टमीटर", "हाइग्रोमीटर"],
    answer_en: "Wattmeter",
    answer_hi: "वॉटमीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "Which metal is used in thermometers?",
    question_hi: "थर्मामीटर में कौन-सी धातु उपयोग होती है?",
    options_en: ["Mercury", "Lead", "Silver", "Gold"],
    options_hi: ["पारा", "सीसा", "चांदी", "सोना"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which law explains stretching of spring?",
    question_hi: "स्प्रिंग के खिंचाव को कौन-सा नियम समझाता है?",
    options_en: ["Hooke's law", "Newton's law", "Faraday's law", "Snell's law"],
    options_hi: ["हुक का नियम", "न्यूटन का नियम", "फैराडे का नियम", "स्नेल का नियम"],
    answer_en: "Hooke's law",
    answer_hi: "हुक का नियम",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "What is the SI unit of heat capacity?",
    question_hi: "ऊष्मा धारिता का SI मात्रक क्या है?",
    options_en: ["J/K", "Joule", "Watt", "N"],
    options_hi: ["J/K", "जूल", "वाट", "N"],
    answer_en: "J/K",
    answer_hi: "J/K",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "Which quantity is measured in Ohm-meter?",
    question_hi: "ओम-मीटर किस भौतिक राशि का मात्रक है?",
    options_en: ["Resistivity", "Conductivity", "Resistance", "Voltage"],
    options_hi: ["रेज़िस्टिविटी", "कंडक्टिविटी", "रेज़िस्टेंस", "वोल्टेज"],
    answer_en: "Resistivity",
    answer_hi: "रेज़िस्टिविटी",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "Which wave travels fastest?",
    question_hi: "कौन-सी तरंग सबसे तेज चलती है?",
    options_en: ["Light wave", "Sound wave", "Water wave", "Seismic wave"],
    options_hi: ["प्रकाश तरंग", "ध्वनि तरंग", "जल तरंग", "भूकंपीय तरंग"],
    answer_en: "Light wave",
    answer_hi: "प्रकाश तरंग",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "Which device measures electric current accurately?",
    question_hi: "कौन-सा उपकरण विद्युत धारा को सटीक मापता है?",
    options_en: ["Ammeter", "Voltmeter", "Galvanometer", "Wattmeter"],
    options_hi: ["एमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "वॉटमीटर"],
    answer_en: "Ammeter",
    answer_hi: "एमीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which property of liquid causes capillary rise?",
    question_hi: "किस गुण के कारण द्रव में केशिकीय उत्थान होता है?",
    options_en: ["Surface tension", "Viscosity", "Density", "Pressure"],
    options_hi: ["पृष्ठ तनाव", "सांद्रता", "घनत्व", "दबाव"],
    answer_en: "Surface tension",
    answer_hi: "पृष्ठ तनाव",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "Which instrument measures frequency?",
    question_hi: "कौन-सा उपकरण आवृत्ति मापता है?",
    options_en: ["Frequency meter", "Ammeter", "Voltmeter", "Barometer"],
    options_hi: ["फ्रीक्वेंसी मीटर", "एमीटर", "वोल्टमीटर", "बैरोमीटर"],
    answer_en: "Frequency meter",
    answer_hi: "फ्रीक्वेंसी मीटर",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "Which radiation is used for sterilization?",
    question_hi: "किस विकिरण का उपयोग सैनिटाइजेशन (स्टरलाइज़ेशन) में होता है?",
    options_en: ["UV rays", "Infrared", "X-rays", "Microwaves"],
    options_hi: ["यूवी किरणें", "इन्फ्रारेड", "एक्स-किरणें", "माइक्रोवेव्स"],
    answer_en: "UV rays",
    answer_hi: "यूवी किरणें",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "Which electromagnetic wave is used in remote controls?",
    question_hi: "रिमोट कंट्रोल में कौन-सी विद्युतचुंबकीय तरंग उपयोग होती है?",
    options_en: ["Infrared", "Microwaves", "Radio waves", "Gamma rays"],
    options_hi: ["इन्फ्रारेड", "माइक्रोवेव्स", "रेडियो तरंगें", "गामा किरणें"],
    answer_en: "Infrared",
    answer_hi: "इन्फ्रारेड",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "What is the SI unit of momentum?",
    question_hi: "संवेग का SI मात्रक क्या है?",
    options_en: ["kg·m/s", "Newton", "Joule", "Watt"],
    options_hi: ["kg·m/s", "न्यूटन", "जूल", "वाट"],
    answer_en: "kg·m/s",
    answer_hi: "kg·m/s",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which form of heat transfer occurs in fluids?",
    question_hi: "द्रवों में कौन-सा ऊष्मा संचरण होता है?",
    options_en: ["Convection", "Conduction", "Radiation", "Absorption"],
    options_hi: ["संवहन", "सुचालकता", "विकिरण", "अवशोषण"],
    answer_en: "Convection",
    answer_hi: "संवहन",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "What is the SI unit of electric potential energy?",
    question_hi: "विद्युत स्थितिज ऊर्जा का SI मात्रक क्या है?",
    options_en: ["Joule", "Volt", "Watt", "Ampere"],
    options_hi: ["जूल", "वोल्ट", "वाट", "एंपियर"],
    answer_en: "Joule",
    answer_hi: "जूल",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "Which device is used to detect radiation?",
    question_hi: "कौन-सा उपकरण विकिरण का पता लगाने के लिए उपयोग होता है?",
    options_en: ["Geiger counter", "Voltmeter", "Ammeter", "Barometer"],
    options_hi: ["गाइगर काउंटर", "वोल्टमीटर", "एमीटर", "बैरोमीटर"],
    answer_en: "Geiger counter",
    answer_hi: "गाइगर काउंटर",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "Which force holds planets around Sun?",
    question_hi: "कौन-सा बल ग्रहों को सूर्य के चारों ओर बनाए रखता है?",
    options_en: ["Gravitational force", "Electrostatic force", "Friction", "Magnetic force"],
    options_hi: ["गुरुत्वाकर्षण बल", "वैद्युत स्थैतिक बल", "घर्षण", "चुंबकीय बल"],
    answer_en: "Gravitational force",
    answer_hi: "गुरुत्वाकर्षण बल",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "Which device measures the refractive index of liquids?",
    question_hi: "कौन-सा यंत्र द्रवों का अपवर्तनांक मापता है?",
    options_en: ["Refractometer", "Barometer", "Pyrometer", "Hydrometer"],
    options_hi: ["रिफ्रैक्टोमीटर", "बैरोमीटर", "पाइरोमीटर", "हाइड्रोमीटर"],
    answer_en: "Refractometer",
    answer_hi: "रिफ्रैक्टोमीटर",
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