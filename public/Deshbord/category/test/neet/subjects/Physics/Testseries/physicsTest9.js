const questions = [
  {
    "num": 1,
    "question_en": "A car accelerates from 5 m/s to 20 m/s in 3 s. What is the acceleration?",
    "question_hi": "एक कार 5 m/s से 20 m/s तक 3 s में त्वरित होती है। त्वरण क्या है?",
    "options_en": ["2 m/s²", "3 m/s²", "5 m/s²", "10 m/s²"],
    "options_hi": ["2 m/s²", "3 m/s²", "5 m/s²", "10 m/s²"],
    "answer_en": "5 m/s²",
    "answer_hi": "5 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which law explains why a person falls backward when a bus starts suddenly?",
    "question_hi": "कौन सा नियम बताता है कि बस के अचानक चलने पर व्यक्ति पीछे की ओर क्यों गिरता है?",
    "options_en": ["Newton's 1st law", "Newton's 2nd law", "Newton's 3rd law", "Law of gravitation"],
    "options_hi": ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "गुरुत्वाकर्षण का नियम"],
    "answer_en": "Newton's 1st law",
    "answer_hi": "न्यूटन का पहला नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "If mass is doubled and velocity becomes half, kinetic energy becomes:",
    "question_hi": "यदि द्रव्यमान दोगुना हो जाए और वेग आधा हो जाए, तो गतिज ऊर्जा हो जाती है:",
    "options_en": ["Same", "Doubled", "Halved", "One-fourth"],
    "options_hi": ["समान", "दोगुनी", "आधी", "एक-चौथाई"],
    "answer_en": "Same",
    "answer_hi": "समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Unit of power is:",
    "question_hi": "शक्ति की इकाई है:",
    "options_en": ["Joule", "Watt", "Newton", "Ampere"],
    "options_hi": ["जूल", "वाट", "न्यूटन", "एम्पियर"],
    "answer_en": "Watt",
    "answer_hi": "वाट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "A 10 N force produces 2 m/s² acceleration. What is the mass?",
    "question_hi": "10 N बल 2 m/s² त्वरण उत्पन्न करता है। द्रव्यमान क्या है?",
    "options_en": ["2 kg", "3 kg", "4 kg", "5 kg"],
    "options_hi": ["2 kg", "3 kg", "4 kg", "5 kg"],
    "answer_en": "5 kg",
    "answer_hi": "5 kg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Momentum depends on:",
    "question_hi": "संवेग निर्भर करता है:",
    "options_en": ["Mass only", "Velocity only", "Mass & velocity", "Force"],
    "options_hi": ["केवल द्रव्यमान", "केवल वेग", "द्रव्यमान और वेग", "बल"],
    "answer_en": "Mass & velocity",
    "answer_hi": "द्रव्यमान और वेग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "If g decreases, weight of object will:",
    "question_hi": "यदि g घटता है, तो वस्तु का भार होगा:",
    "options_en": ["Increase", "Decrease", "Become zero", "Double"],
    "options_hi": ["बढ़ेगा", "घटेगा", "शून्य हो जाएगा", "दोगुना हो जाएगा"],
    "answer_en": "Decrease",
    "answer_hi": "घटेगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Projectile maximum range occurs at angle:",
    "question_hi": "प्रक्षेप्य की अधिकतम परास होती है कोण पर:",
    "options_en": ["30°", "45°", "60°", "90°"],
    "options_hi": ["30°", "45°", "60°", "90°"],
    "answer_en": "45°",
    "answer_hi": "45°",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Work done against gravity depends on:",
    "question_hi": "गुरुत्वाकर्षण के विरुद्ध किया गया कार्य निर्भर करता है:",
    "options_en": ["Mass", "Height", "g", "All of these"],
    "options_hi": ["द्रव्यमान", "ऊंचाई", "g", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "A body of mass 4 kg moves with velocity 3 m/s. Kinetic energy?",
    "question_hi": "4 kg द्रव्यमान का एक पिंड 3 m/s वेग से चलता है। गतिज ऊर्जा?",
    "options_en": ["6 J", "12 J", "18 J", "36 J"],
    "options_hi": ["6 J", "12 J", "18 J", "36 J"],
    "answer_en": "18 J",
    "answer_hi": "18 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "SI unit of impulse?",
    "question_hi": "संवेग का SI मात्रक?",
    "options_en": ["N", "N/s", "N·s", "J"],
    "options_hi": ["N", "N/s", "N·s", "J"],
    "answer_en": "N·s",
    "answer_hi": "N·s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "If frequency doubles, wavelength becomes:",
    "question_hi": "यदि आवृत्ति दोगुनी हो जाए, तो तरंगदैर्ध्य हो जाती है:",
    "options_en": ["Double", "Half", "Same", "Zero"],
    "options_hi": ["दोगुनी", "आधी", "समान", "शून्य"],
    "answer_en": "Half",
    "answer_hi": "आधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Speed of sound is maximum in:",
    "question_hi": "ध्वनि की चाल अधिकतम होती है:",
    "options_en": ["Air", "Water", "Steel", "Vacuum"],
    "options_hi": ["वायु", "जल", "स्टील", "निर्वात"],
    "answer_en": "Steel",
    "answer_hi": "स्टील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "1 horsepower = ?",
    "question_hi": "1 अश्वशक्ति = ?",
    "options_en": ["746 W", "760 W", "700 W", "800 W"],
    "options_hi": ["746 W", "760 W", "700 W", "800 W"],
    "answer_en": "746 W",
    "answer_hi": "746 W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "A 20 m long wire elongates 1 mm. Strain is:",
    "question_hi": "20 m लंबे तार में 1 mm का विस्तार होता है। विकृति है:",
    "options_en": ["0.00005", "0.0001", "0.0005", "0.001"],
    "options_hi": ["0.00005", "0.0001", "0.0005", "0.001"],
    "answer_en": "0.00005",
    "answer_hi": "0.00005",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Gravitational force varies as:",
    "question_hi": "गुरुत्वाकर्षण बल परिवर्तित होता है:",
    "options_en": ["1/r", "1/r²", "r", "r²"],
    "options_hi": ["1/r", "1/r²", "r", "r²"],
    "answer_en": "1/r²",
    "answer_hi": "1/r²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "If radius of a planet becomes half but mass same, g becomes:",
    "question_hi": "यदि किसी ग्रह की त्रिज्या आधी हो जाए लेकिन द्रव्यमान समान रहे, तो g हो जाता है:",
    "options_en": ["Same", "2g", "4g", "1/4 g"],
    "options_hi": ["समान", "2g", "4g", "1/4 g"],
    "answer_en": "4g",
    "answer_hi": "4g",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Escape velocity depends on:",
    "question_hi": "पलायन वेग निर्भर करता है:",
    "options_en": ["Mass of body", "Radius of planet", "Mass of planet", "Both mass & radius of planet"],
    "options_hi": ["वस्तु के द्रव्यमान पर", "ग्रह की त्रिज्या पर", "ग्रह के द्रव्यमान पर", "ग्रह के द्रव्यमान और त्रिज्या दोनों पर"],
    "answer_en": "Both mass & radius of planet",
    "answer_hi": "ग्रह के द्रव्यमान और त्रिज्या दोनों पर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "A wave has wavelength 2 m & frequency 50 Hz. Speed is:",
    "question_hi": "एक तरंग की तरंगदैर्ध्य 2 m और आवृत्ति 50 Hz है। चाल है:",
    "options_en": ["25 m/s", "50 m/s", "75 m/s", "100 m/s"],
    "options_hi": ["25 m/s", "50 m/s", "75 m/s", "100 m/s"],
    "answer_en": "100 m/s",
    "answer_hi": "100 m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Unit of pressure:",
    "question_hi": "दाब की इकाई:",
    "options_en": ["Pascal", "Newton", "Joule", "Watt"],
    "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
    "answer_en": "Pascal",
    "answer_hi": "पास्कल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Equal volumes of two gases have equal:",
    "question_hi": "दो गैसों के समान आयतन में समान होते हैं:",
    "options_en": ["Mass", "Density", "Number of molecules", "Pressure"],
    "options_hi": ["द्रव्यमान", "घनत्व", "अणुओं की संख्या", "दाब"],
    "answer_en": "Number of molecules",
    "answer_hi": "अणुओं की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Boiling point of water decreases when:",
    "question_hi": "पानी का क्वथनांक घटता है जब:",
    "options_en": ["Pressure increases", "Pressure decreases", "Salt is added", "Heat removed"],
    "options_hi": ["दाब बढ़ता है", "दाब घटता है", "नमक मिलाया जाता है", "ऊष्मा हटाई जाती है"],
    "answer_en": "Pressure decreases",
    "answer_hi": "दाब घटता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Electric charge unit:",
    "question_hi": "विद्युत आवेश की इकाई:",
    "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
    "options_hi": ["वोल्ट", "एम्पियर", "कूलम्ब", "ओम"],
    "answer_en": "Coulomb",
    "answer_hi": "कूलम्ब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Resistance formula:",
    "question_hi": "प्रतिरोध सूत्र:",
    "options_en": ["V/I", "I/V", "VI", "QV"],
    "options_hi": ["V/I", "I/V", "VI", "QV"],
    "answer_en": "V/I",
    "answer_hi": "V/I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "A 2 Ω resistor carries 3 A current. Power =",
    "question_hi": "एक 2 Ω प्रतिरोधक में 3 A धारा प्रवाहित होती है। शक्ति =",
    "options_en": ["6 W", "12 W", "18 W", "24 W"],
    "options_hi": ["6 W", "12 W", "18 W", "24 W"],
    "answer_en": "18 W",
    "answer_hi": "18 W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Ohm's law is not valid for:",
    "question_hi": "ओम का नियम मान्य नहीं है:",
    "options_en": ["Copper wire", "Nichrome", "Semiconductors", "Carbon"],
    "options_hi": ["तांबे के तार", "नाइक्रोम", "अर्धचालक", "कार्बन"],
    "answer_en": "Semiconductors",
    "answer_hi": "अर्धचालक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Magnetic field around a current-carrying wire is:",
    "question_hi": "धारावाही तार के चारों ओर चुंबकीय क्षेत्र होता है:",
    "options_en": ["Circular", "Straight", "Random", "Parabolic"],
    "options_hi": ["वृत्ताकार", "सीधा", "यादृच्छिक", "परवलयिक"],
    "answer_en": "Circular",
    "answer_hi": "वृत्ताकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Unit of magnetic flux:",
    "question_hi": "चुंबकीय फ्लक्स की इकाई:",
    "options_en": ["Wb", "T", "A", "H"],
    "options_hi": ["Wb", "T", "A", "H"],
    "answer_en": "Wb",
    "answer_hi": "Wb",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Transformer works on:",
    "question_hi": "ट्रांसफॉर्मर कार्य करता है:",
    "options_en": ["DC", "AC", "Both", "None"],
    "options_hi": ["DC", "AC", "दोनों", "कोई नहीं"],
    "answer_en": "AC",
    "answer_hi": "AC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Speed of light in vacuum:",
    "question_hi": "निर्वात में प्रकाश की चाल:",
    "options_en": ["3×10⁸ m/s", "2×10⁸ m/s", "1×10⁸ m/s", "None"],
    "options_hi": ["3×10⁸ m/s", "2×10⁸ m/s", "1×10⁸ m/s", "कोई नहीं"],
    "answer_en": "3×10⁸ m/s",
    "answer_hi": "3×10⁸ m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Lens used to correct myopia:",
    "question_hi": "निकटदृष्टि को सही करने के लिए उपयोग किया जाने वाला लेंस:",
    "options_en": ["Convex", "Concave", "Plano-convex", "Cylindrical"],
    "options_hi": ["उत्तल", "अवतल", "समतल-उत्तल", "बेलनाकार"],
    "answer_en": "Concave",
    "answer_hi": "अवतल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "SI unit of focal length:",
    "question_hi": "फोकस दूरी का SI मात्रक:",
    "options_en": ["metre", "dioptre", "cm", "m⁻¹"],
    "options_hi": ["मीटर", "डायोप्टर", "cm", "m⁻¹"],
    "answer_en": "metre",
    "answer_hi": "मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "A convex lens of focal length 20 cm. Power?",
    "question_hi": "20 cm फोकस दूरी का एक उत्तल लेंस। क्षमता?",
    "options_en": ["+5 D", "+2 D", "+0.5 D", "+10 D"],
    "options_hi": ["+5 D", "+2 D", "+0.5 D", "+10 D"],
    "answer_en": "+5 D",
    "answer_hi": "+5 D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Photoelectric effect depends on:",
    "question_hi": "प्रकाशविद्युत प्रभाव निर्भर करता है:",
    "options_en": ["Intensity", "Frequency", "Voltage", "Area"],
    "options_hi": ["तीव्रता", "आवृत्ति", "वोल्टेज", "क्षेत्रफल"],
    "answer_en": "Frequency",
    "answer_hi": "आवृत्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Charge of electron:",
    "question_hi": "इलेक्ट्रॉन का आवेश:",
    "options_en": ["1.6×10⁻¹⁹ C", "1.6×10⁻¹⁷ C", "1.6×10⁻²⁰ C", "None"],
    "options_hi": ["1.6×10⁻¹⁹ C", "1.6×10⁻¹⁷ C", "1.6×10⁻²⁰ C", "कोई नहीं"],
    "answer_en": "1.6×10⁻¹⁹ C",
    "answer_hi": "1.6×10⁻¹⁹ C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Half-life depends on:",
    "question_hi": "अर्ध-आयु निर्भर करती है:",
    "options_en": ["Temperature", "Mass", "Nature of nucleus", "Pressure"],
    "options_hi": ["तापमान", "द्रव्यमान", "नाभिक की प्रकृति", "दाब"],
    "answer_en": "Nature of nucleus",
    "answer_hi": "नाभिक की प्रकृति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Beam of charged particle is deflected by:",
    "question_hi": "आवेशित कणों की किरण पुंज विक्षेपित होती है:",
    "options_en": ["Electric field", "Magnetic field", "Both", "None"],
    "options_hi": ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is a scalar?",
    "question_hi": "कौन सी अदिश राशि है?",
    "options_en": ["Velocity", "Displacement", "Momentum", "Work"],
    "options_hi": ["वेग", "विस्थापन", "संवेग", "कार्य"],
    "answer_en": "Work",
    "answer_hi": "कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Binding energy per nucleon highest for:",
    "question_hi": "प्रति न्यूक्लियॉन बंधन ऊर्जा सबसे अधिक होती है:",
    "options_en": ["Uranium", "Iron", "Hydrogen", "Helium"],
    "options_hi": ["यूरेनियम", "आयरन", "हाइड्रोजन", "हीलियम"],
    "answer_en": "Iron",
    "answer_hi": "आयरन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "If distance increases, gravitational force becomes:",
    "question_hi": "यदि दूरी बढ़ती है, तो गुरुत्वाकर्षण बल हो जाता है:",
    "options_en": ["More", "Less", "Constant", "Zero"],
    "options_hi": ["अधिक", "कम", "स्थिर", "शून्य"],
    "answer_en": "Less",
    "answer_hi": "कम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "1 eV =",
    "question_hi": "1 eV =",
    "options_en": ["1.6×10⁻¹⁹ J", "1.6×10⁻¹⁸ J", "1.6×10⁻²⁰ J", "None"],
    "options_hi": ["1.6×10⁻¹⁹ J", "1.6×10⁻¹⁸ J", "1.6×10⁻²⁰ J", "कोई नहीं"],
    "answer_en": "1.6×10⁻¹⁹ J",
    "answer_hi": "1.6×10⁻¹⁹ J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Heat transfer in solids occurs by:",
    "question_hi": "ठोसों में ऊष्मा स्थानांतरण होता है:",
    "options_en": ["Conduction", "Convection", "Radiation", "All"],
    "options_hi": ["चालन", "संवहन", "विकिरण", "सभी"],
    "answer_en": "Conduction",
    "answer_hi": "चालन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Thermal expansion is maximum in:",
    "question_hi": "तापीय प्रसार अधिकतम होता है:",
    "options_en": ["Solids", "Liquids", "Gases", "All same"],
    "options_hi": ["ठोस", "द्रव", "गैस", "सभी समान"],
    "answer_en": "Gases",
    "answer_hi": "गैस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "If area increases, pressure:",
    "question_hi": "यदि क्षेत्रफल बढ़ता है, तो दाब:",
    "options_en": ["Increases", "Decreases", "Same", "Becomes zero"],
    "options_hi": ["बढ़ता है", "घटता है", "समान", "शून्य हो जाता है"],
    "answer_en": "Decreases",
    "answer_hi": "घटता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Unit of coefficient of friction:",
    "question_hi": "घर्षण गुणांक की इकाई:",
    "options_en": ["N", "N/m²", "No unit", "J"],
    "options_hi": ["N", "N/m²", "कोई इकाई नहीं", "J"],
    "answer_en": "No unit",
    "answer_hi": "कोई इकाई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "A sonar sends a pulse and receives echo after 0.4 s. Speed 1500 m/s. Depth?",
    "question_hi": "एक सोनार एक स्पंद भेजता है और 0.4 s के बाद प्रतिध्वनि प्राप्त करता है। चाल 1500 m/s। गहराई?",
    "options_en": ["150 m", "200 m", "300 m", "600 m"],
    "options_hi": ["150 m", "200 m", "300 m", "600 m"],
    "answer_en": "300 m",
    "answer_hi": "300 m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Pendulum time period depends on:",
    "question_hi": "लोलक का आवर्तकाल निर्भर करता है:",
    "options_en": ["Mass", "Length", "Amplitude", "Pressure"],
    "options_hi": ["द्रव्यमान", "लंबाई", "आयाम", "दाब"],
    "answer_en": "Length",
    "answer_hi": "लंबाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "If voltage doubles and resistance same, current:",
    "question_hi": "यदि वोल्टेज दोगुना हो जाए और प्रतिरोध समान रहे, तो धारा:",
    "options_en": ["Halves", "Doubles", "Same", "Zero"],
    "options_hi": ["आधी", "दोगुनी", "समान", "शून्य"],
    "answer_en": "Doubles",
    "answer_hi": "दोगुनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "A 10 µF capacitor charged to 50 V. Charge stored?",
    "question_hi": "एक 10 µF संधारित्र 50 V तक आवेशित है। संचित आवेश?",
    "options_en": ["200 µC", "500 µC", "100 µC", "50 µC"],
    "options_hi": ["200 µC", "500 µC", "100 µC", "50 µC"],
    "answer_en": "500 µC",
    "answer_hi": "500 µC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Energy of photon = ?",
    "question_hi": "फोटॉन की ऊर्जा = ?",
    "options_en": ["mc²", "hf", "mv²", "qV"],
    "options_hi": ["mc²", "hf", "mv²", "qV"],
    "answer_en": "hf",
    "answer_hi": "hf",
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