const questions = [
  {
    num: 1,
    question_en: "What is the SI unit of speed?",
    question_hi: "चाल की SI इकाई क्या है?",
    options_en: ["m/s", "km/h", "m", "s"],
    options_hi: ["m/s", "km/h", "m", "s"],
    answer_en: "m/s",
    answer_hi: "m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Impulse is the change in which quantity?",
    question_hi: "आवेग किस राशि में परिवर्तन है?",
    options_en: ["Momentum", "Velocity", "Force", "Energy"],
    options_hi: ["संवेग", "वेग", "बल", "ऊर्जा"],
    answer_en: "Momentum",
    answer_hi: "संवेग",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Static friction is always less than or equal to?",
    question_hi: "स्थैतिक घर्षण हमेशा किसके बराबर या कम होता है?",
    options_en: ["Limiting friction", "Kinetic friction", "Rolling friction", "Viscous force"],
    options_hi: ["सीमांत घर्षण", "गतिज घर्षण", "लोटनिक घर्षण", "श्यान बल"],
    answer_en: "Limiting friction",
    answer_hi: "सीमांत घर्षण",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "When is the work done zero?",
    question_hi: "कार्य कब शून्य होता है?",
    options_en: ["Force ⟂ displacement", "Force = displacement", "Force = 0 but displacement ≠ 0", "Energy is negative"],
    options_hi: ["बल ⟂ विस्थापन", "बल = विस्थापन", "बल = 0 लेकिन विस्थापन ≠ 0", "ऊर्जा ऋणात्मक है"],
    answer_en: "Force ⟂ displacement",
    answer_hi: "बल ⟂ विस्थापन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
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
    num: 6,
    question_en: "A 10 N force acts on a 5 kg object. What is the acceleration?",
    question_hi: "एक 5 kg वस्तु पर 10 N बल कार्य करता है। त्वरण क्या है?",
    options_en: ["2 m/s²", "0.5 m/s²", "4 m/s²", "5 m/s²"],
    options_hi: ["2 m/s²", "0.5 m/s²", "4 m/s²", "5 m/s²"],
    answer_en: "2 m/s²",
    answer_hi: "2 m/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "In Kepler's third law, T² is proportional to?",
    question_hi: "कैपलर के तीसरे नियम में, T² किसके अनुक्रमानुपाती है?",
    options_en: ["R³", "R²", "1/R", "R"],
    options_hi: ["R³", "R²", "1/R", "R"],
    answer_en: "R³",
    answer_hi: "R³",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the approximate escape velocity of Earth?",
    question_hi: "पृथ्वी का अनुमानित पलायन वेग क्या है?",
    options_en: ["11.2 km/s", "5 km/s", "20 km/s", "40 km/s"],
    options_hi: ["11.2 km/s", "5 km/s", "20 km/s", "40 km/s"],
    answer_en: "11.2 km/s",
    answer_hi: "11.2 km/s",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "How many Joules are there in 1 kWh?",
    question_hi: "1 kWh में कितने जूल होते हैं?",
    options_en: ["3.6 × 10⁶ J", "3.6 × 10⁵ J", "360 J", "36 J"],
    options_hi: ["3.6 × 10⁶ J", "3.6 × 10⁵ J", "360 J", "36 J"],
    answer_en: "3.6 × 10⁶ J",
    answer_hi: "3.6 × 10⁶ J",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Sound travels fastest in which medium?",
    question_hi: "ध्वनि किस माध्यम में सबसे तेज चलती है?",
    options_en: ["Solid", "Liquid", "Gas", "Vacuum"],
    options_hi: ["ठोस", "द्रव", "गैस", "निर्वात"],
    answer_en: "Solid",
    answer_hi: "ठोस",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "In which case is buoyant force maximum?",
    question_hi: "किस मामले में उत्प्लावन बल अधिकतम होता है?",
    options_en: ["Water", "Kerosene", "Air", "Alcohol"],
    options_hi: ["जल", "मिट्टी का तेल", "वायु", "अल्कोहल"],
    answer_en: "Water",
    answer_hi: "जल",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the SI unit of pressure?",
    question_hi: "दाब की SI इकाई क्या है?",
    options_en: ["Pascal", "Newton", "Joule", "Watt"],
    options_hi: ["पास्कल", "न्यूटन", "जूल", "वाट"],
    answer_en: "Pascal",
    answer_hi: "पास्कल",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "How many molecules are present in 1 mole?",
    question_hi: "1 मोल में कितने अणु उपस्थित होते हैं?",
    options_en: ["6.022 × 10²³", "6.022 × 10²²", "3 × 10⁸", "1 × 10³"],
    options_hi: ["6.022 × 10²³", "6.022 × 10²²", "3 × 10⁸", "1 × 10³"],
    answer_en: "6.022 × 10²³",
    answer_hi: "6.022 × 10²³",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Electrostatic force follows which law?",
    question_hi: "विद्युत्स्थैतिक बल किस नियम का पालन करता है?",
    options_en: ["Coulomb's law", "Gauss law", "Ampere law", "Faraday law"],
    options_hi: ["कूलॉम का नियम", "गॉस का नियम", "एम्पियर का नियम", "फैराडे का नियम"],
    answer_en: "Coulomb's law",
    answer_hi: "कूलॉम का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the SI unit of electric field?",
    question_hi: "विद्युत क्षेत्र की SI इकाई क्या है?",
    options_en: ["N/C", "C/N", "N·m", "A·s"],
    options_hi: ["N/C", "C/N", "N·m", "A·s"],
    answer_en: "N/C",
    answer_hi: "N/C",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "The resistor colour code is used to determine?",
    question_hi: "प्रतिरोधक रंग कोड का उपयोग क्या निर्धारित करने के लिए किया जाता है?",
    options_en: ["Resistance value", "Weight", "Length", "Power"],
    options_hi: ["प्रतिरोध मान", "भार", "लंबाई", "शक्ति"],
    answer_en: "Resistance value",
    answer_hi: "प्रतिरोध मान",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Ohm's law relates which quantities?",
    question_hi: "ओम का नियम किन राशियों से संबंधित है?",
    options_en: ["V, I, R", "P, V, I", "F, q, v", "E, m, c"],
    options_hi: ["V, I, R", "P, V, I", "F, q, v", "E, m, c"],
    answer_en: "V, I, R",
    answer_hi: "V, I, R",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Electromagnetic waves require which medium?",
    question_hi: "विद्युत चुम्बकीय तरंगों को किस माध्यम की आवश्यकता होती है?",
    options_en: ["No medium", "Solid", "Liquid", "Gas"],
    options_hi: ["कोई माध्यम नहीं", "ठोस", "द्रव", "गैस"],
    answer_en: "No medium",
    answer_hi: "कोई माध्यम नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the nature of light?",
    question_hi: "प्रकाश की प्रकृति क्या है?",
    options_en: ["Dual nature", "Only wave", "Only particle", "None"],
    options_hi: ["द्वैत प्रकृति", "केवल तरंग", "केवल कण", "कोई नहीं"],
    answer_en: "Dual nature",
    answer_hi: "द्वैत प्रकृति",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Refractive index is the ratio of?",
    question_hi: "अपवर्तनांक किसका अनुपात है?",
    options_en: ["c/v", "v/c", "f/λ", "λ/f"],
    options_hi: ["c/v", "v/c", "f/λ", "λ/f"],
    answer_en: "c/v",
    answer_hi: "c/v",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the mirror formula?",
    question_hi: "दर्पण सूत्र क्या है?",
    options_en: ["1/f = 1/v + 1/u", "f = u + v", "f = uv", "1/f = u + v"],
    options_hi: ["1/f = 1/v + 1/u", "f = u + v", "f = uv", "1/f = u + v"],
    answer_en: "1/f = 1/v + 1/u",
    answer_hi: "1/f = 1/v + 1/u",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the unit of lens power?",
    question_hi: "लेंस क्षमता की इकाई क्या है?",
    options_en: ["Dioptre", "Watt", "Joule", "Henry"],
    options_hi: ["डायोप्टर", "वाट", "जूल", "हेनरी"],
    answer_en: "Dioptre",
    answer_hi: "डायोप्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What happens in nuclear fission?",
    question_hi: "नाभिकीय विखंडन में क्या होता है?",
    options_en: ["Heavy nucleus breaks", "Two atoms combine", "Electron emits", "Photon emits"],
    options_hi: ["भारी नाभिक टूटता है", "दो परमाणु संयोजित होते हैं", "इलेक्ट्रॉन उत्सर्जित होता है", "फोटॉन उत्सर्जित होता है"],
    answer_en: "Heavy nucleus breaks",
    answer_hi: "भारी नाभिक टूटता है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the meaning of half-life?",
    question_hi: "अर्ध-आयु का क्या अर्थ है?",
    options_en: ["Time for 50% nuclei to decay", "Full decay time", "Double decay rate", "Energy becomes half"],
    options_hi: ["50% नाभिकों के क्षय होने का समय", "पूर्ण क्षय समय", "दोगुनी क्षय दर", "ऊर्जा आधी हो जाती है"],
    answer_en: "Time for 50% nuclei to decay",
    answer_hi: "50% नाभिकों के क्षय होने का समय",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the SI unit of capacitance?",
    question_hi: "धारिता की SI इकाई क्या है?",
    options_en: ["Farad", "Henry", "Coulomb", "Tesla"],
    options_hi: ["फैरड", "हेनरी", "कूलॉम", "टेस्ला"],
    answer_en: "Farad",
    answer_hi: "फैरड",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "The force between two parallel currents can be?",
    question_hi: "दो समानांतर धाराओं के बीच बल हो सकता है?",
    options_en: ["Attractive/Repulsive", "Only attractive", "Only repulsive", "Zero"],
    options_hi: ["आकर्षक/प्रतिकर्षक", "केवल आकर्षक", "केवल प्रतिकर्षक", "शून्य"],
    answer_en: "Attractive/Repulsive",
    answer_hi: "आकर्षक/प्रतिकर्षक",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the unit of magnetic flux?",
    question_hi: "चुंबकीय फ्लक्स की इकाई क्या है?",
    options_en: ["Weber", "Tesla", "Ampere", "Henry"],
    options_hi: ["वेबर", "टेस्ला", "एम्पियर", "हेनरी"],
    answer_en: "Weber",
    answer_hi: "वेबर",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Transformer works on which principle?",
    question_hi: "ट्रांसफॉर्मर किस सिद्धांत पर काम करता है?",
    options_en: ["Mutual induction", "Self induction", "EMI", "KVL"],
    options_hi: ["पारस्परिक प्रेरण", "स्व-प्रेरण", "EMI", "KVL"],
    answer_en: "Mutual induction",
    answer_hi: "पारस्परिक प्रेरण",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which is the formula of wave speed?",
    question_hi: "तरंग गति का सूत्र कौन सा है?",
    options_en: ["v = fλ", "v = f/λ", "v = λ/f", "v = λ²"],
    options_hi: ["v = fλ", "v = f/λ", "v = λ/f", "v = λ²"],
    answer_en: "v = fλ",
    answer_hi: "v = fλ",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "If current is doubled, heat becomes?",
    question_hi: "यदि धारा दोगुनी हो जाती है, तो ऊष्मा हो जाती है?",
    options_en: ["4 times", "2 times", "8 times", "Same"],
    options_hi: ["4 गुना", "2 गुना", "8 गुना", "समान"],
    answer_en: "4 times",
    answer_hi: "4 गुना",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "1 Tesla equals?",
    question_hi: "1 टेस्ला बराबर है?",
    options_en: ["1 Wb/m²", "1 W/m²", "1 N/C", "1 C/m"],
    options_hi: ["1 Wb/m²", "1 W/m²", "1 N/C", "1 C/m"],
    answer_en: "1 Wb/m²",
    answer_hi: "1 Wb/m²",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Numerical: A wire carries 5A current for 2s. What is the charge?",
    question_hi: "संख्यात्मक: एक तार में 2s के लिए 5A धारा प्रवाहित होती है। आवेश क्या है?",
    options_en: ["10 C", "5 C", "2.5 C", "1 C"],
    options_hi: ["10 C", "5 C", "2.5 C", "1 C"],
    answer_en: "10 C",
    answer_hi: "10 C",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Numerical: Velocity changes from 20 m/s to 30 m/s in 5 s. Acceleration?",
    question_hi: "संख्यात्मक: वेग 20 m/s से 30 m/s तक 5 s में बदलता है। त्वरण?",
    options_en: ["2 m/s²", "5 m/s²", "10 m/s²", "0 m/s²"],
    options_hi: ["2 m/s²", "5 m/s²", "10 m/s²", "0 m/s²"],
    answer_en: "2 m/s²",
    answer_hi: "2 m/s²",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which one is a scalar quantity?",
    question_hi: "कौन सी अदिश राशि है?",
    options_en: ["Speed", "Velocity", "Force", "Momentum"],
    options_hi: ["चाल", "वेग", "बल", "संवेग"],
    answer_en: "Speed",
    answer_hi: "चाल",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Work-energy theorem states?",
    question_hi: "कार्य-ऊर्जा प्रमेय कहती है?",
    options_en: ["Net work = ΔK.E", "Force = ΔP", "Torque = ΔL", "Charge = ΔV"],
    options_hi: ["कुल कार्य = ΔK.E", "बल = ΔP", "बल आघूर्ण = ΔL", "आवेश = ΔV"],
    answer_en: "Net work = ΔK.E",
    answer_hi: "कुल कार्य = ΔK.E",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Terminal velocity is achieved when?",
    question_hi: "टर्मिनल वेग कब प्राप्त होता है?",
    options_en: ["Net force = 0", "Force maximum", "Speed minimum", "Pressure maximum"],
    options_hi: ["कुल बल = 0", "बल अधिकतम", "चाल न्यूनतम", "दाब अधिकतम"],
    answer_en: "Net force = 0",
    answer_hi: "कुल बल = 0",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Bernoulli's equation applies to?",
    question_hi: "बर्नौली का समीकरण किस पर लागू होता है?",
    options_en: ["Fluids in motion", "Static fluids", "Solids", "Only gases"],
    options_hi: ["गतिमान द्रव", "स्थिर द्रव", "ठोस", "केवल गैसें"],
    answer_en: "Fluids in motion",
    answer_hi: "गतिमान द्रव",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the first law of thermodynamics?",
    question_hi: "ऊष्मागतिकी का पहला नियम क्या है?",
    options_en: ["ΔQ = ΔU + W", "Q = W", "U = W", "P = F/A"],
    options_hi: ["ΔQ = ΔU + W", "Q = W", "U = W", "P = F/A"],
    answer_en: "ΔQ = ΔU + W",
    answer_hi: "ΔQ = ΔU + W",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "In an ideal gas, pressure is inversely proportional to?",
    question_hi: "एक आदर्श गैस में, दाब किसके व्युत्क्रमानुपाती होता है?",
    options_en: ["Volume", "Temperature", "Mass", "Energy"],
    options_hi: ["आयतन", "तापमान", "द्रव्यमान", "ऊर्जा"],
    answer_en: "Volume",
    answer_hi: "आयतन",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Photoelectric effect depends on?",
    question_hi: "प्रकाश विद्युत प्रभाव निर्भर करता है?",
    options_en: ["Frequency of light", "Intensity only", "Voltage only", "Temperature"],
    options_hi: ["प्रकाश की आवृत्ति", "केवल तीव्रता", "केवल वोल्टेज", "तापमान"],
    answer_en: "Frequency of light",
    answer_hi: "प्रकाश की आवृत्ति",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Formula for photon energy?",
    question_hi: "फोटॉन ऊर्जा का सूत्र?",
    options_en: ["E = hf", "E = mv²", "E = qV", "E = mc²"],
    options_hi: ["E = hf", "E = mv²", "E = qV", "E = mc²"],
    answer_en: "E = hf",
    answer_hi: "E = hf",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Binding energy represents?",
    question_hi: "बंधन ऊर्जा दर्शाती है?",
    options_en: ["Stability of nucleus", "Charge", "Mass", "Decay"],
    options_hi: ["नाभिक की स्थिरता", "आवेश", "द्रव्यमान", "क्षय"],
    answer_en: "Stability of nucleus",
    answer_hi: "नाभिक की स्थिरता",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Lenz's law explains?",
    question_hi: "लेंज का नियम समझाता है?",
    options_en: ["Opposition to change in flux", "Magnetic force", "Electric heating", "Radiation"],
    options_hi: ["फ्लक्स में परिवर्तन का विरोध", "चुंबकीय बल", "विद्युत तापन", "विकिरण"],
    answer_en: "Opposition to change in flux",
    answer_hi: "फ्लक्स में परिवर्तन का विरोध",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "RMS value of AC current is?",
    question_hi: "AC धारा का RMS मान है?",
    options_en: ["I₀/√2", "I₀", "2I₀", "I₀²"],
    options_hi: ["I₀/√2", "I₀", "2I₀", "I₀²"],
    answer_en: "I₀/√2",
    answer_hi: "I₀/√2",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Radio waves have the ___ wavelength?",
    question_hi: "रेडियो तरंगों की ___ तरंगदैर्ध्य होती है?",
    options_en: ["Longest", "Shortest", "Medium", "None"],
    options_hi: ["सबसे लंबी", "सबसे छोटी", "मध्यम", "कोई नहीं"],
    answer_en: "Longest",
    answer_hi: "सबसे लंबी",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Numerical: A 2 kg object is lifted through 3 m. Work done?",
    question_hi: "संख्यात्मक: एक 2 kg वस्तु को 3 m उठाया जाता है। किया गया कार्य?",
    options_en: ["60 J", "6 J", "20 J", "30 J"],
    options_hi: ["60 J", "6 J", "20 J", "30 J"],
    answer_en: "60 J",
    answer_hi: "60 J",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which of the following is NOT an electromagnetic wave?",
    question_hi: "निम्नलिखित में से कौन सी विद्युत चुम्बकीय तरंग नहीं है?",
    options_en: ["Sound", "Radio", "X-ray", "Light"],
    options_hi: ["ध्वनि", "रेडियो", "एक्स-रे", "प्रकाश"],
    answer_en: "Sound",
    answer_hi: "ध्वनि",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What is emitted in β-decay?",
    question_hi: "β-क्षय में क्या उत्सर्जित होता है?",
    options_en: ["Electron", "Proton", "Neutron", "Photon"],
    options_hi: ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "फोटॉन"],
    answer_en: "Electron",
    answer_hi: "इलेक्ट्रॉन",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "SI unit of angular velocity?",
    question_hi: "कोणीय वेग की SI इकाई?",
    options_en: ["rad/s", "rpm", "rad", "s"],
    options_hi: ["rad/s", "rpm", "rad", "s"],
    answer_en: "rad/s",
    answer_hi: "rad/s",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Numerical: Frequency = 200 Hz, wavelength = 2 m. Speed?",
    question_hi: "संख्यात्मक: आवृत्ति = 200 Hz, तरंगदैर्ध्य = 2 m। गति?",
    options_en: ["400 m/s", "100 m/s", "200 m/s", "50 m/s"],
    options_hi: ["400 m/s", "100 m/s", "200 m/s", "50 m/s"],
    answer_en: "400 m/s",
    answer_hi: "400 m/s",
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