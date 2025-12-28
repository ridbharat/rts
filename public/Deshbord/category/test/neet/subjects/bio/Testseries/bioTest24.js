const questions = [
  {
    "num": 1,
    "question_en": "Which of the following is the site of cellular respiration?",
    "question_hi": "निम्नलिखित में से कौन सा कोशिकीय श्वसन का स्थल है?",
    "options_en": ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
    "options_hi": ["सूत्रकणिका", "हरितलवक", "राइबोसोम", "केंद्रक"],
    "answer_en": "Mitochondria",
    "answer_hi": "सूत्रकणिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The process of conversion of glycogen to glucose is called:",
    "question_hi": "ग्लाइकोजन से ग्लूकोज में परिवर्तन की प्रक्रिया कहलाती है:",
    "options_en": ["Glycogenolysis", "Glycogenesis", "Gluconeogenesis", "Glycolysis"],
    "options_hi": ["ग्लाइकोजनोलिसिस", "ग्लाइकोजनेसिस", "ग्लूकोनियोजनेसिस", "ग्लाइकोलाइसिस"],
    "answer_en": "Glycogenolysis",
    "answer_hi": "ग्लाइकोजनोलिसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following is NOT a function of the small intestine?",
    "question_hi": "निम्नलिखित में से कौन सा छोटी आंत का कार्य नहीं है?",
    "options_en": ["Bile production", "Nutrient absorption", "Digestion", "Enzyme secretion"],
    "options_hi": ["पित्त उत्पादन", "पोषक तत्व अवशोषण", "पाचन", "एंजाइम स्राव"],
    "answer_en": "Bile production",
    "answer_hi": "पित्त उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The hormone that stimulates uterine contractions is:",
    "question_hi": "वह हार्मोन जो गर्भाशय संकुचन को उत्तेजित करता है:",
    "options_en": ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
    "options_hi": ["ऑक्सीटोसिन", "प्रोलैक्टिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
    "answer_en": "Oxytocin",
    "answer_hi": "ऑक्सीटोसिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is the site of protein synthesis?",
    "question_hi": "निम्नलिखित में से कौन सा प्रोटीन संश्लेषण का स्थल है?",
    "options_en": ["Ribosome", "Mitochondria", "Chloroplast", "Golgi apparatus"],
    "options_hi": ["राइबोसोम", "सूत्रकणिका", "हरितलवक", "गॉल्जी उपकरण"],
    "answer_en": "Ribosome",
    "answer_hi": "राइबोसोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The process of formation of egg cells is called:",
    "question_hi": "अंड कोशिकाओं के निर्माण की प्रक्रिया कहलाती है:",
    "options_en": ["Oogenesis", "Spermatogenesis", "Gametogenesis", "Ovulation"],
    "options_hi": ["अंडजनन", "शुक्राणुजनन", "युग्मकजनन", "अंडोत्सर्ग"],
    "answer_en": "Oogenesis",
    "answer_hi": "अंडजनन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of the following is a characteristic of the phylum Chordata?",
    "question_hi": "निम्नलिखित में से कौन सा कॉर्डेटा संघ की विशेषता है?",
    "options_en": ["Notochord", "Exoskeleton", "Radial symmetry", "Jointed appendages"],
    "options_hi": ["नोटोकॉर्ड", "बहिःकंकाल", "अरीय सममिति", "संधित उपांग"],
    "answer_en": "Notochord",
    "answer_hi": "नोटोकॉर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The enzyme that digests nucleic acids is:",
    "question_hi": "वह एंजाइम जो न्यूक्लिक अम्लों को पचाता है:",
    "options_en": ["Nuclease", "Protease", "Amylase", "Lipase"],
    "options_hi": ["न्यूक्लिएज", "प्रोटीएज", "एमाइलेज", "लाइपेज"],
    "answer_en": "Nuclease",
    "answer_hi": "न्यूक्लिएज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is NOT a function of the pancreas?",
    "question_hi": "निम्नलिखित में से कौन सा अग्न्याशय का कार्य नहीं है?",
    "options_en": ["Bile production", "Insulin secretion", "Digestive enzyme secretion", "Bicarbonate secretion"],
    "options_hi": ["पित्त उत्पादन", "इंसुलिन स्राव", "पाचक एंजाइम स्राव", "बाइकार्बोनेट स्राव"],
    "answer_en": "Bile production",
    "answer_hi": "पित्त उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The process of movement against concentration gradient is called:",
    "question_hi": "सांद्रता प्रवणता के विरुद्ध गति की प्रक्रिया कहलाती है:",
    "options_en": ["Active transport", "Diffusion", "Osmosis", "Facilitated diffusion"],
    "options_hi": ["सक्रिय परिवहन", "प्रसार", "परासरण", "सुकर प्रसार"],
    "answer_en": "Active transport",
    "answer_hi": "सक्रिय परिवहन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a characteristic of the class Osteichthyes?",
    "question_hi": "निम्नलिखित में से कौन सा ऑस्टीचथीस वर्ग की विशेषता है?",
    "options_en": ["Bony skeleton", "Cartilaginous skeleton", "Placoid scales", "Spiracles"],
    "options_hi": ["बोनी कंकाल", "उपास्थिमय कंकाल", "प्लेकोइड शल्क", "श्वसन रंध्र"],
    "answer_en": "Bony skeleton",
    "answer_hi": "बोनी कंकाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The hormone that regulates sleep-wake cycle is:",
    "question_hi": "वह हार्मोन जो नींद-जागने के चक्र को नियंत्रित करता है:",
    "options_en": ["Melatonin", "Serotonin", "Insulin", "Thyroxine"],
    "options_hi": ["मेलाटोनिन", "सेरोटोनिन", "इंसुलिन", "थायरॉक्सिन"],
    "answer_en": "Melatonin",
    "answer_hi": "मेलाटोनिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of the following is NOT a type of tissue?",
    "question_hi": "निम्नलिखित में से कौन सा ऊतक का प्रकार नहीं है?",
    "options_en": ["Blood", "Bone", "Lymph", "Plasma"],
    "options_hi": ["रक्त", "हड्डी", "लसीका", "प्लाज्मा"],
    "answer_en": "Plasma",
    "answer_hi": "प्लाज्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The process of conversion of glucose to pyruvate is called:",
    "question_hi": "ग्लूकोज से पाइरुवेट में परिवर्तन की प्रक्रिया कहलाती है:",
    "options_en": ["Glycolysis", "Krebs cycle", "Electron transport", "Fermentation"],
    "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन", "किण्वन"],
    "answer_en": "Glycolysis",
    "answer_hi": "ग्लाइकोलाइसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of the following is a characteristic of the family Poaceae?",
    "question_hi": "निम्नलिखित में से कौन सा पोएसी कुल की विशेषता है?",
    "options_en": ["Spikelet inflorescence", "Papilionaceous corolla", "Persistent calyx", "Tap root system"],
    "options_hi": ["स्पाइकलेट पुष्पक्रम", "तितली के आकार का दलपुंज", "दृढ़ बाह्यदल", "मूसला जड़ प्रणाली"],
    "answer_en": "Spikelet inflorescence",
    "answer_hi": "स्पाइकलेट पुष्पक्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The enzyme that fixes CO2 in C4 plants is:",
    "question_hi": "वह एंजाइम जो C4 पौधों में CO2 स्थिर करता है:",
    "options_en": ["PEP carboxylase", "RuBisCO", "Carbonic anhydrase", "Catalase"],
    "options_hi": ["पीईपी कार्बोक्सिलेज", "रूबिस्को", "कार्बोनिक एनहाइड्रेज", "कैटालेज"],
    "answer_en": "PEP carboxylase",
    "answer_hi": "पीईपी कार्बोक्सिलेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of the following is NOT a function of the skin?",
    "question_hi": "निम्नलिखित में से कौन सा त्वचा का कार्य नहीं है?",
    "options_en": ["Oxygen transport", "Protection", "Temperature regulation", "Vitamin D synthesis"],
    "options_hi": ["ऑक्सीजन परिवहन", "सुरक्षा", "तापमान नियमन", "विटामिन D संश्लेषण"],
    "answer_en": "Oxygen transport",
    "answer_hi": "ऑक्सीजन परिवहन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The process of formation of organs is called:",
    "question_hi": "अंगों के निर्माण की प्रक्रिया कहलाती है:",
    "options_en": ["Organogenesis", "Gastrulation", "Neurulation", "Blastulation"],
    "options_hi": ["अंगजनन", "गैस्ट्रुलेशन", "तंत्रिकाकरण", "ब्लास्टुलेशन"],
    "answer_en": "Organogenesis",
    "answer_hi": "अंगजनन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of the following is a characteristic of the class Mammalia?",
    "question_hi": "निम्नलिखित में से कौन सा स्तनधारी वर्ग की विशेषता है?",
    "options_en": ["Diaphragm", "Gill slits", "Cold-blooded", "Feathers"],
    "options_hi": ["मध्यपट", "क्लोम छिद्र", "शीतरक्ती", "पंख"],
    "answer_en": "Diaphragm",
    "answer_hi": "मध्यपट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The hormone that promotes seed germination is:",
    "question_hi": "वह हार्मोन जो बीज अंकुरण को बढ़ावा देता है:",
    "options_en": ["Gibberellin", "Auxin", "Cytokinin", "Abscisic acid"],
    "options_hi": ["जिबरेलिन", "ऑक्सिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
    "answer_en": "Gibberellin",
    "answer_hi": "जिबरेलिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of the following is NOT a type of ecosystem?",
    "question_hi": "निम्नलिखित में से कौन सा पारिस्थितिकी तंत्र का प्रकार नहीं है?",
    "options_en": ["Aquarium", "Forest", "Grassland", "Desert"],
    "options_hi": ["एक्वेरियम", "वन", "घास का मैदान", "मरुस्थल"],
    "answer_en": "Aquarium",
    "answer_hi": "एक्वेरियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The process of conversion of ammonia to urea occurs in the:",
    "question_hi": "अमोनिया से यूरिया में परिवर्तन की प्रक्रिया होती है:",
    "options_en": ["Liver", "Kidney", "Pancreas", "Spleen"],
    "options_hi": ["यकृत", "वृक्क", "अग्न्याशय", "प्लीहा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of the following is a characteristic of the phylum Cnidaria?",
    "question_hi": "निम्नलिखित में से कौन सा नाइडेरिया संघ की विशेषता है?",
    "options_en": ["Cnidocytes", "Notochord", "Jointed appendages", "Metameric segmentation"],
    "options_hi": ["नाइडोसाइट्स", "नोटोकॉर्ड", "संधित उपांग", "खंडीय विखंडन"],
    "answer_en": "Cnidocytes",
    "answer_hi": "नाइडोसाइट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The enzyme that begins protein digestion is:",
    "question_hi": "वह एंजाइम जो प्रोटीन पाचन शुरू करता है:",
    "options_en": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    "options_hi": ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेज"],
    "answer_en": "Pepsin",
    "answer_hi": "पेप्सिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is NOT a function of the cerebellum?",
    "question_hi": "निम्नलिखित में से कौन सा अनुमस्तिष्क का कार्य नहीं है?",
    "options_en": ["Memory storage", "Balance", "Coordination", "Posture"],
    "options_hi": ["स्मृति भंडारण", "संतुलन", "समन्वय", "मुद्रा"],
    "answer_en": "Memory storage",
    "answer_hi": "स्मृति भंडारण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The process of conversion of pyruvate to lactate is called:",
    "question_hi": "पाइरुवेट से लैक्टेट में परिवर्तन की प्रक्रिया कहलाती है:",
    "options_en": ["Lactic acid fermentation", "Alcoholic fermentation", "Aerobic respiration", "Krebs cycle"],
    "options_hi": ["लैक्टिक अम्ल किण्वन", "एल्कोहलिक किण्वन", "वायवीय श्वसन", "क्रेब्स चक्र"],
    "answer_en": "Lactic acid fermentation",
    "answer_hi": "लैक्टिक अम्ल किण्वन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of the following is a characteristic of the family Solanaceae?",
    "question_hi": "निम्नलिखित में से कौन सा सोलानेसी कुल की विशेषता है?",
    "options_en": ["Persistent calyx", "Zygomorphic flower", "Tap root system", "Parallel venation"],
    "options_hi": ["दृढ़ बाह्यदल", "असममित पुष्प", "मूसला जड़ प्रणाली", "समानांतर शिराविन्यास"],
    "answer_en": "Persistent calyx",
    "answer_hi": "दृढ़ बाह्यदल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The hormone that promotes cell elongation is:",
    "question_hi": "वह हार्मोन जो कोशिका दीर्घीकरण को बढ़ावा देता है:",
    "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
    "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
    "answer_en": "Auxin",
    "answer_hi": "ऑक्सिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which of the following is NOT a type of inheritance?",
    "question_hi": "निम्नलिखित में से कौन सा वंशागति का प्रकार नहीं है?",
    "options_en": ["Nutritional inheritance", "Mendelian inheritance", "Non-Mendelian inheritance", "Cyoplasmic inheritance"],
    "options_hi": ["पोषण संबंधी वंशागति", "मेंडेलियन वंशागति", "गैर-मेंडेलियन वंशागति", "कोशिकाद्रव्य वंशागति"],
    "answer_en": "Nutritional inheritance",
    "answer_hi": "पोषण संबंधी वंशागति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The process of carbon fixation occurs in the:",
    "question_hi": "कार्बन स्थिरीकरण की प्रक्रिया होती है:",
    "options_en": ["Stroma", "Grana", "Thylakoid", "Cytoplasm"],
    "options_hi": ["स्ट्रोमा", "ग्रेना", "थाइलाकोइड", "कोशिकाद्रव्य"],
    "answer_en": "Stroma",
    "answer_hi": "स्ट्रोमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which of the following is a characteristic of the class Arachnida?",
    "question_hi": "निम्नलिखित में से कौन सा ऐरेक्निडा वर्ग की विशेषता है?",
    "options_en": ["Four pairs of legs", "Three pairs of legs", "Wings", "Antennae"],
    "options_hi": ["चार जोड़ी पैर", "तीन जोड़ी पैर", "पंख", "श्रृंगिकाएं"],
    "answer_en": "Four pairs of legs",
    "answer_hi": "चार जोड़ी पैर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The enzyme that converts pepsinogen to pepsin is:",
    "question_hi": "वह एंजाइम जो पेप्सिनोजन को पेप्सिन में परिवर्तित करता है:",
    "options_en": ["HCl", "Trypsin", "Enterokinase", "Pepsin"],
    "options_hi": ["HCl", "ट्रिप्सिन", "एंटेरोकाइनेज", "पेप्सिन"],
    "answer_en": "HCl",
    "answer_hi": "HCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of the following is NOT a type of plant hormone?",
    "question_hi": "निम्नलिखित में से कौन सा पादप हार्मोन का प्रकार नहीं है?",
    "options_en": ["Hemoglobin", "Auxin", "Gibberellin", "Cytokinin"],
    "options_hi": ["हीमोग्लोबिन", "ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन"],
    "answer_en": "Hemoglobin",
    "answer_hi": "हीमोग्लोबिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The process of formation of blastula is called:",
    "question_hi": "ब्लास्टुला के निर्माण की प्रक्रिया कहलाती है:",
    "options_en": ["Blastulation", "Gastrulation", "Neurulation", "Organogenesis"],
    "options_hi": ["ब्लास्टुलेशन", "गैस्ट्रुलेशन", "तंत्रिकाकरण", "अंगजनन"],
    "answer_en": "Blastulation",
    "answer_hi": "ब्लास्टुलेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of the following is a characteristic of the phylum Platyhelminthes?",
    "question_hi": "निम्नलिखित में से कौन सा प्लेटीहेल्मिन्थीस संघ की विशेषता है?",
    "options_en": ["Flat body", "Round body", "Segmented body", "Soft body"],
    "options_hi": ["चपटा शरीर", "गोल शरीर", "खंडित शरीर", "मुलायम शरीर"],
    "answer_en": "Flat body",
    "answer_hi": "चपटा शरीर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The hormone that promotes stomatal closure is:",
    "question_hi": "वह हार्मोन जो रंध्र बंद होने को बढ़ावा देता है:",
    "options_en": ["Abscisic acid", "Auxin", "Gibberellin", "Cytokinin"],
    "options_hi": ["एब्सिसिक अम्ल", "ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन"],
    "answer_en": "Abscisic acid",
    "answer_hi": "एब्सिसिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which of the following is NOT a function of the nucleus?",
    "question_hi": "निम्नलिखित में से कौन सा केंद्रक का कार्य नहीं है?",
    "options_en": ["Protein synthesis", "DNA storage", "Transcription", "Cell division control"],
    "options_hi": ["प्रोटीन संश्लेषण", "डीएनए भंडारण", "प्रतिलेखन", "कोशिका विभाजन नियंत्रण"],
    "answer_en": "Protein synthesis",
    "answer_hi": "प्रोटीन संश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The process of electron transport occurs in the:",
    "question_hi": "इलेक्ट्रॉन परिवहन की प्रक्रिया होती है:",
    "options_en": ["Inner mitochondrial membrane", "Matrix", "Cytoplasm", "Outer membrane"],
    "options_hi": ["आंतरिक सूत्रकणिका झिल्ली", "मैट्रिक्स", "कोशिकाद्रव्य", "बाह्य झिल्ली"],
    "answer_en": "Inner mitochondrial membrane",
    "answer_hi": "आंतरिक सूत्रकणिका झिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of the following is a characteristic of the class Insecta?",
    "question_hi": "निम्नलिखित में से कौन सा कीट वर्ग की विशेषता है?",
    "options_en": ["Three pairs of legs", "Four pairs of legs", "Wings absent", "Chelicerae"],
    "options_hi": ["तीन जोड़ी पैर", "चार जोड़ी पैर", "पंख अनुपस्थित", "चेलीसेरा"],
    "answer_en": "Three pairs of legs",
    "answer_hi": "तीन जोड़ी पैर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The enzyme that converts angiotensin I to angiotensin II is:",
    "question_hi": "वह एंजाइम जो एंजियोटेंसिन I को एंजियोटेंसिन II में परिवर्तित करता है:",
    "options_en": ["ACE", "Renin", "Aldosterone", "ADH"],
    "options_hi": ["एसीई", "रेनिन", "एल्डोस्टेरोन", "एडीएच"],
    "answer_en": "ACE",
    "answer_hi": "एसीई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of the following is NOT a function of the blood?",
    "question_hi": "निम्नलिखित में से कौन सा रक्त का कार्य नहीं है?",
    "options_en": ["Hormone production", "Oxygen transport", "Nutrient transport", "Waste removal"],
    "options_hi": ["हार्मोन उत्पादन", "ऑक्सीजन परिवहन", "पोषक तत्व परिवहन", "अपशिष्ट निष्कासन"],
    "answer_en": "Hormone production",
    "answer_hi": "हार्मोन उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The process of water uptake by roots is called:",
    "question_hi": "जड़ों द्वारा जल अवशोषण की प्रक्रिया कहलाती है:",
    "options_en": ["Imbibition", "Diffusion", "Osmosis", "Active transport"],
    "options_hi": ["अंत:शोषण", "प्रसार", "परासरण", "सक्रिय परिवहन"],
    "answer_en": "Imbibition",
    "answer_hi": "अंत:शोषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of the following is a characteristic of the phylum Nematoda?",
    "question_hi": "निम्नलिखित में से कौन सा नेमाटोडा संघ की विशेषता है?",
    "options_en": ["Pseudocoelom", "Acoelom", "Coelom", "Haemocoel"],
    "options_hi": ["स्यूडोसीलोम", "एसीलोम", "सीलोम", "हीमोसील"],
    "answer_en": "Pseudocoelom",
    "answer_hi": "स्यूडोसीलोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The hormone that promotes fruit ripening is:",
    "question_hi": "वह हार्मोन जो फल पकने को बढ़ावा देता है:",
    "options_en": ["Ethylene", "Auxin", "Gibberellin", "Cytokinin"],
    "options_hi": ["एथिलीन", "ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन"],
    "answer_en": "Ethylene",
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which of the following is NOT a type of symmetry?",
    "question_hi": "निम्नलिखित में से कौन सा सममिति का प्रकार नहीं है?",
    "options_en": ["Asymmetrical", "Bilateral", "Radial", "Triangular"],
    "options_hi": ["असममित", "द्विपक्षीय", "अरीय", "त्रिकोणीय"],
    "answer_en": "Triangular",
    "answer_hi": "त्रिकोणीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The process of nitrogen fixation is carried out by:",
    "question_hi": "नाइट्रोजन स्थिरीकरण की प्रक्रिया किसके द्वारा की जाती है:",
    "options_en": ["Rhizobium", "Nitrosomonas", "Nitrobacter", "Pseudomonas"],
    "options_hi": ["राइजोबियम", "नाइट्रोसोमोनास", "नाइट्रोबैक्टर", "स्यूडोमोनास"],
    "answer_en": "Rhizobium",
    "answer_hi": "राइजोबियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which of the following is a characteristic of the class Crustacea?",
    "question_hi": "निम्नलिखित में से कौन सा क्रस्टेशिया वर्ग की विशेषता है?",
    "options_en": ["Two pairs of antennae", "One pair of antennae", "No antennae", "Three pairs of antennae"],
    "options_hi": ["दो जोड़ी श्रृंगिकाएं", "एक जोड़ी श्रृंगिकाएं", "कोई श्रृंगिका नहीं", "तीन जोड़ी श्रृंगिकाएं"],
    "answer_en": "Two pairs of antennae",
    "answer_hi": "दो जोड़ी श्रृंगिकाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The enzyme that breaks down hydrogen peroxide is:",
    "question_hi": "वह एंजाइम जो हाइड्रोजन पेरोक्साइड को तोड़ता है:",
    "options_en": ["Catalase", "Peroxidase", "Superoxide dismutase", "Amylase"],
    "options_hi": ["कैटालेज", "पेरोक्सीडेज", "सुपरऑक्साइड डिसम्यूटेज", "एमाइलेज"],
    "answer_en": "Catalase",
    "answer_hi": "कैटालेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of the following is NOT a function of the lymph?",
    "question_hi": "निम्नलिखित में से कौन सा लसीका का कार्य नहीं है?",
    "options_en": ["Oxygen transport", "Fat absorption", "Immune function", "Tissue fluid balance"],
    "options_hi": ["ऑक्सीजन परिवहन", "वसा अवशोषण", "प्रतिरक्षा कार्य", "ऊतक द्रव संतुलन"],
    "answer_en": "Oxygen transport",
    "answer_hi": "ऑक्सीजन परिवहन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The process of pollen transfer to stigma is called:",
    "question_hi": "पराग का वर्तिकाग्र में स्थानांतरण कहलाता है:",
    "options_en": ["Pollination", "Fertilization", "Germination", "Imbibition"],
    "options_hi": ["परागण", "निषेचन", "अंकुरण", "अंत:शोषण"],
    "answer_en": "Pollination",
    "answer_hi": "परागण",
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