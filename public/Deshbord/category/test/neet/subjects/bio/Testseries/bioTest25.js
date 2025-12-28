const questions = [
  {
    "num": 1,
    "question_en": "Which of the following is the power house of the cell?",
    "question_hi": "निम्नलिखित में से कौन सा कोशिका का शक्ति केंद्र है?",
    "options_en": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
    "options_hi": ["सूत्रकणिका", "हरितलवक", "केंद्रक", "राइबोसोम"],
    "answer_en": "Mitochondria",
    "answer_hi": "सूत्रकणिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The process of conversion of glucose to starch is called:",
    "question_hi": "ग्लूकोज से स्टार्च में परिवर्तन की प्रक्रिया कहलाती है:",
    "options_en": ["Photosynthesis", "Glycolysis", "Gluconeogenesis", "Photorespiration"],
    "options_hi": ["प्रकाश संश्लेषण", "ग्लाइकोलाइसिस", "ग्लूकोनियोजनेसिस", "प्रकाश श्वसन"],
    "answer_en": "Photosynthesis",
    "answer_hi": "प्रकाश संश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following is NOT a function of the stomach?",
    "question_hi": "निम्नलिखित में से कौन सा आमाशय का कार्य नहीं है?",
    "options_en": ["Carbohydrate digestion", "Protein digestion", "HCl secretion", "Mucus secretion"],
    "options_hi": ["कार्बोहाइड्रेट पाचन", "प्रोटीन पाचन", "HCl स्राव", "श्लेष्मा स्राव"],
    "answer_en": "Carbohydrate digestion",
    "answer_hi": "कार्बोहाइड्रेट पाचन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The hormone that stimulates testosterone production is:",
    "question_hi": "वह हार्मोन जो टेस्टोस्टेरोन उत्पादन को उत्तेजित करता है:",
    "options_en": ["LH", "FSH", "Testosterone", "Inhibin"],
    "options_hi": ["एलएच", "एफएसएच", "टेस्टोस्टेरोन", "इनहिबिन"],
    "answer_en": "LH",
    "answer_hi": "एलएच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is the site of DNA replication?",
    "question_hi": "निम्नलिखित में से कौन सा डीएनए प्रतिकृति का स्थल है?",
    "options_en": ["Nucleus", "Cytoplasm", "Ribosome", "Golgi apparatus"],
    "options_hi": ["केंद्रक", "कोशिकाद्रव्य", "राइबोसोम", "गॉल्जी उपकरण"],
    "answer_en": "Nucleus",
    "answer_hi": "केंद्रक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The process of formation of pollen grains is called:",
    "question_hi": "पराग कणों के निर्माण की प्रक्रिया कहलाती है:",
    "options_en": ["Microsporogenesis", "Megasporogenesis", "Gametogenesis", "Sporogenesis"],
    "options_hi": ["लघुबीजाणुजनन", "गुरुबीजाणुजनन", "युग्मकजनन", "बीजाणुजनन"],
    "answer_en": "Microsporogenesis",
    "answer_hi": "लघुबीजाणुजनन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of the following is a characteristic of the phylum Porifera?",
    "question_hi": "निम्नलिखित में से कौन सा पोरिफेरा संघ की विशेषता है?",
    "options_en": ["Cellular level", "Tissue level", "Organ level", "Organ system level"],
    "options_hi": ["कोशिकीय स्तर", "ऊतक स्तर", "अंग स्तर", "अंग तंत्र स्तर"],
    "answer_en": "Cellular level",
    "answer_hi": "कोशिकीय स्तर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The enzyme that digests lactose is:",
    "question_hi": "वह एंजाइम जो लैक्टोज को पचाता है:",
    "options_en": ["Lactase", "Maltase", "Sucrase", "Amylase"],
    "options_hi": ["लैक्टेज", "माल्टेज", "सुक्रेज", "एमाइलेज"],
    "answer_en": "Lactase",
    "answer_hi": "लैक्टेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is NOT a function of the spleen?",
    "question_hi": "निम्नलिखित में से कौन सा प्लीहा का कार्य नहीं है?",
    "options_en": ["Bile production", "Blood storage", "Immune function", "RBC destruction"],
    "options_hi": ["पित्त उत्पादन", "रक्त भंडारण", "प्रतिरक्षा कार्य", "आरबीसी विनाश"],
    "answer_en": "Bile production",
    "answer_hi": "पित्त उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The process of facilitated diffusion requires:",
    "question_hi": "सुकर प्रसार की प्रक्रिया के लिए आवश्यक है:",
    "options_en": ["Carrier proteins", "Energy", "ATP", "Concentration gradient"],
    "options_hi": ["वाहक प्रोटीन", "ऊर्जा", "एटीपी", "सांद्रता प्रवणता"],
    "answer_en": "Carrier proteins",
    "answer_hi": "वाहक प्रोटीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a characteristic of the class Amphibia?",
    "question_hi": "निम्नलिखित में से कौन सा उभयचर वर्ग की विशेषता है?",
    "options_en": ["Three-chambered heart", "Four-chambered heart", "Two-chambered heart", "Five-chambered heart"],
    "options_hi": ["तीन-कक्षीय हृदय", "चार-कक्षीय हृदय", "दो-कक्षीय हृदय", "पांच-कक्षीय हृदय"],
    "answer_en": "Three-chambered heart",
    "answer_hi": "तीन-कक्षीय हृदय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The hormone that regulates metabolic rate is:",
    "question_hi": "वह हार्मोन जो चयापचय दर को नियंत्रित करता है:",
    "options_en": ["Thyroxine", "Insulin", "Glucagon", "Cortisol"],
    "options_hi": ["थायरॉक्सिन", "इंसुलिन", "ग्लूकागन", "कोर्टिसोल"],
    "answer_en": "Thyroxine",
    "answer_hi": "थायरॉक्सिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of the following is NOT a type of muscle?",
    "question_hi": "निम्नलिखित में से कौन सा मांसपेशी का प्रकार नहीं है?",
    "options_en": ["Cardiac", "Skeletal", "Smooth", "Rough"],
    "options_hi": ["हृदय", "कंकाल", "चिकनी", "खुरदरी"],
    "answer_en": "Rough",
    "answer_hi": "खुरदरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The process of Krebs cycle occurs in the:",
    "question_hi": "क्रेब्स चक्र की प्रक्रिया होती है:",
    "options_en": ["Mitochondrial matrix", "Cytoplasm", "Inner membrane", "Outer membrane"],
    "options_hi": ["सूत्रकणिका मैट्रिक्स", "कोशिकाद्रव्य", "आंतरिक झिल्ली", "बाह्य झिल्ली"],
    "answer_en": "Mitochondrial matrix",
    "answer_hi": "सूत्रकणिका मैट्रिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of the following is a characteristic of the family Fabaceae?",
    "question_hi": "निम्नलिखित में से कौन सा फैबेसी कुल की विशेषता है?",
    "options_en": ["Nitrogen fixation", "C4 photosynthesis", "CAM pathway", "Parasitic nature"],
    "options_hi": ["नाइट्रोजन स्थिरीकरण", "C4 प्रकाश संश्लेषण", "CAM पथ", "परजीवी प्रकृति"],
    "answer_en": "Nitrogen fixation",
    "answer_hi": "नाइट्रोजन स्थिरीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The enzyme that converts glucose to glucose-6-phosphate is:",
    "question_hi": "वह एंजाइम जो ग्लूकोज को ग्लूकोज-6-फॉस्फेट में परिवर्तित करता है:",
    "options_en": ["Hexokinase", "Phosphofructokinase", "Pyruvate kinase", "Aldolase"],
    "options_hi": ["हेक्सोकाइनेज", "फॉस्फोफ्रक्टोकाइनेज", "पाइरुवेट काइनेज", "एल्डोलेज"],
    "answer_en": "Hexokinase",
    "answer_hi": "हेक्सोकाइनेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of the following is NOT a function of the eye?",
    "question_hi": "निम्नलिखित में से कौन सा आंख का कार्य नहीं है?",
    "options_en": ["Sound detection", "Light detection", "Image formation", "Color vision"],
    "options_hi": ["ध्वनि संसूचन", "प्रकाश संसूचन", "प्रतिबिंब निर्माण", "रंग दृष्टि"],
    "answer_en": "Sound detection",
    "answer_hi": "ध्वनि संसूचन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The process of formation of notochord is called:",
    "question_hi": "नोटोकॉर्ड के निर्माण की प्रक्रिया कहलाती है:",
    "options_en": ["Notogenesis", "Gastrulation", "Neurulation", "Organogenesis"],
    "options_hi": ["नोटोजेनेसिस", "गैस्ट्रुलेशन", "तंत्रिकाकरण", "अंगजनन"],
    "answer_en": "Notogenesis",
    "answer_hi": "नोटोजेनेसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of the following is a characteristic of the class Aves?",
    "question_hi": "निम्नलिखित में से कौन सा एव्स वर्ग की विशेषता है?",
    "options_en": ["Air sacs", "Mammary glands", "Teeth", "Ectothermy"],
    "options_hi": ["वायु थैली", "स्तन ग्रंथियां", "दांत", "शीतरक्तता"],
    "answer_en": "Air sacs",
    "answer_hi": "वायु थैली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The hormone that promotes root formation is:",
    "question_hi": "वह हार्मोन जो जड़ निर्माण को बढ़ावा देता है:",
    "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
    "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
    "answer_en": "Auxin",
    "answer_hi": "ऑक्सिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of the following is NOT a type of succession?",
    "question_hi": "निम्नलिखित में से कौन सा अनुक्रमण का प्रकार नहीं है?",
    "options_en": ["Tertiary succession", "Primary succession", "Secondary succession", "Autogenic succession"],
    "options_hi": ["तृतीयक अनुक्रमण", "प्राथमिक अनुक्रमण", "द्वितीयक अनुक्रमण", "स्वजनित अनुक्रमण"],
    "answer_en": "Tertiary succession",
    "answer_hi": "तृतीयक अनुक्रमण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The process of nitrification is carried out by:",
    "question_hi": "नाइट्रीकरण की प्रक्रिया किसके द्वारा की जाती है:",
    "options_en": ["Nitrosomonas", "Rhizobium", "Azotobacter", "Clostridium"],
    "options_hi": ["नाइट्रोसोमोनास", "राइजोबियम", "एजोटोबैक्टर", "क्लोस्ट्रीडियम"],
    "answer_en": "Nitrosomonas",
    "answer_hi": "नाइट्रोसोमोनास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of the following is a characteristic of the phylum Annelida?",
    "question_hi": "निम्नलिखित में से कौन सा एनीलिडा संघ की विशेषता है?",
    "options_en": ["Setae", "Cnidocytes", "Notochord", "Jointed legs"],
    "options_hi": ["सेटी", "नाइडोसाइट्स", "नोटोकॉर्ड", "संधित पैर"],
    "answer_en": "Setae",
    "answer_hi": "सेटी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The enzyme that converts trypsinogen to trypsin is:",
    "question_hi": "वह एंजाइम जो ट्रिप्सिनोजन को ट्रिप्सिन में परिवर्तित करता है:",
    "options_en": ["Enterokinase", "Pepsin", "HCl", "Trypsin"],
    "options_hi": ["एंटेरोकाइनेज", "पेप्सिन", "HCl", "ट्रिप्सिन"],
    "answer_en": "Enterokinase",
    "answer_hi": "एंटेरोकाइनेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is NOT a function of the ear?",
    "question_hi": "निम्नलिखित में से कौन सा कान का कार्य नहीं है?",
    "options_en": ["Balance", "Hearing", "Sound production", "Equilibrium"],
    "options_hi": ["संतुलन", "श्रवण", "ध्वनि उत्पादन", "साम्यावस्था"],
    "answer_en": "Sound production",
    "answer_hi": "ध्वनि उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The process of alcoholic fermentation produces:",
    "question_hi": "एल्कोहलिक किण्वन की प्रक्रिया उत्पन्न करती है:",
    "options_en": ["Ethanol + CO2", "Lactic acid", "Pyruvate", "Acetyl CoA"],
    "options_hi": ["एथेनॉल + CO2", "लैक्टिक अम्ल", "पाइरुवेट", "एसिटाइल CoA"],
    "answer_en": "Ethanol + CO2",
    "answer_hi": "एथेनॉल + CO2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of the following is a characteristic of the family Liliaceae?",
    "question_hi": "निम्नलिखित में से कौन सा लिलिएसी कुल की विशेषता है?",
    "options_en": ["Superior ovary", "Inferior ovary", "Zygomorphic flower", "Papilionaceous corolla"],
    "options_hi": ["उच्चस्थ अंडाशय", "अधोस्थ अंडाशय", "असममित पुष्प", "तितली के आकार का दलपुंज"],
    "answer_en": "Superior ovary",
    "answer_hi": "उच्चस्थ अंडाशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The hormone that promotes bolting is:",
    "question_hi": "वह हार्मोन जो बोल्टिंग को बढ़ावा देता है:",
    "options_en": ["Gibberellin", "Auxin", "Cytokinin", "Abscisic acid"],
    "options_hi": ["जिबरेलिन", "ऑक्सिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
    "answer_en": "Gibberellin",
    "answer_hi": "जिबरेलिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which of the following is NOT a type of natural selection?",
    "question_hi": "निम्नलिखित में से कौन सा प्राकृतिक चयन का प्रकार नहीं है?",
    "options_en": ["Artificial selection", "Stabilizing selection", "Directional selection", "Disruptive selection"],
    "options_hi": ["कृत्रिम चयन", "स्थिरकारी चयन", "दिशात्मक चयन", "विघटनकारी चयन"],
    "answer_en": "Artificial selection",
    "answer_hi": "कृत्रिम चयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The process of photorespiration occurs in:",
    "question_hi": "प्रकाश श्वसन की प्रक्रिया होती है:",
    "options_en": ["C3 plants", "C4 plants", "CAM plants", "All plants"],
    "options_hi": ["C3 पौधों में", "C4 पौधों में", "CAM पौधों में", "सभी पौधों में"],
    "answer_en": "C3 plants",
    "answer_hi": "C3 पौधों में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which of the following is a characteristic of the class Mammalia?",
    "question_hi": "निम्नलिखित में से कौन सा स्तनधारी वर्ग की विशेषता है?",
    "options_en": ["Heterodont dentition", "Homodont dentition", "No teeth", "Only molars"],
    "options_hi": ["विषमदंत", "समदंत", "कोई दांत नहीं", "केवल दाढ़"],
    "answer_en": "Heterodont dentition",
    "answer_hi": "विषमदंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The enzyme that converts maltose to glucose is:",
    "question_hi": "वह एंजाइम जो माल्टोज को ग्लूकोज में परिवर्तित करता है:",
    "options_en": ["Maltase", "Lactase", "Sucrase", "Amylase"],
    "options_hi": ["माल्टेज", "लैक्टेज", "सुक्रेज", "एमाइलेज"],
    "answer_en": "Maltase",
    "answer_hi": "माल्टेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of the following is NOT a type of joint?",
    "question_hi": "निम्नलिखित में से कौन सा जोड़ का प्रकार नहीं है?",
    "options_en": ["Fibrous", "Cartilaginous", "Synovial", "Muscular"],
    "options_hi": ["तंतुमय", "उपास्थिमय", "साइनोवियल", "मांसपेशीय"],
    "answer_en": "Muscular",
    "answer_hi": "मांसपेशीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The process of cleavage results in formation of:",
    "question_hi": "विखंडन की प्रक्रिया के परिणामस्वरूप बनता है:",
    "options_en": ["Blastula", "Gastrula", "Neurula", "Morula"],
    "options_hi": ["ब्लास्टुला", "गैस्ट्रुला", "न्यूरुला", "मोरुला"],
    "answer_en": "Morula",
    "answer_hi": "मोरुला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of the following is a characteristic of the phylum Echinodermata?",
    "question_hi": "निम्नलिखित में से कौन सा एकीनोडर्मेटा संघ की विशेषता है?",
    "options_en": ["Water vascular system", "Open circulatory system", "Closed circulatory system", "No circulatory system"],
    "options_hi": ["जल संवहनी तंत्र", "खुला परिसंचरण तंत्र", "बंद परिसंचरण तंत्र", "कोई परिसंचरण तंत्र नहीं"],
    "answer_en": "Water vascular system",
    "answer_hi": "जल संवहनी तंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The hormone that promotes seed dormancy is:",
    "question_hi": "वह हार्मोन जो बीज प्रसुप्ति को बढ़ावा देता है:",
    "options_en": ["Abscisic acid", "Gibberellin", "Auxin", "Cytokinin"],
    "options_hi": ["एब्सिसिक अम्ल", "जिबरेलिन", "ऑक्सिन", "साइटोकाइनिन"],
    "answer_en": "Abscisic acid",
    "answer_hi": "एब्सिसिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which of the following is NOT a function of the kidney?",
    "question_hi": "निम्नलिखित में से कौन सा वृक्क का कार्य नहीं है?",
    "options_en": ["Erythropoietin production", "Urine formation", "Blood filtration", "Bile production"],
    "options_hi": ["एरिथ्रोपोइटिन उत्पादन", "मूत्र निर्माण", "रक्त निस्यंदन", "पित्त उत्पादन"],
    "answer_en": "Bile production",
    "answer_hi": "पित्त उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The process of transcription occurs in the:",
    "question_hi": "प्रतिलेखन की प्रक्रिया होती है:",
    "options_en": ["Nucleus", "Cytoplasm", "Ribosome", "Golgi apparatus"],
    "options_hi": ["केंद्रक", "कोशिकाद्रव्य", "राइबोसोम", "गॉल्जी उपकरण"],
    "answer_en": "Nucleus",
    "answer_hi": "केंद्रक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of the following is a characteristic of the class Reptilia?",
    "question_hi": "निम्नलिखित में से कौन सा रेप्टिलिया वर्ग की विशेषता है?",
    "options_en": ["Internal fertilization", "External fertilization", "Ovoviviparous", "Viviparous only"],
    "options_hi": ["आंतरिक निषेचन", "बाह्य निषेचन", "अंडजरायुज", "केवल जरायुज"],
    "answer_en": "Internal fertilization",
    "answer_hi": "आंतरिक निषेचन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The enzyme that converts sucrose to glucose and fructose is:",
    "question_hi": "वह एंजाइम जो सुक्रोज को ग्लूकोज और फ्रुक्टोज में परिवर्तित करता है:",
    "options_en": ["Sucrase", "Maltase", "Lactase", "Amylase"],
    "options_hi": ["सुक्रेज", "माल्टेज", "लैक्टेज", "एमाइलेज"],
    "answer_en": "Sucrase",
    "answer_hi": "सुक्रेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of the following is NOT a function of the pancreas?",
    "question_hi": "निम्नलिखित में से कौन सा अग्न्याशय का कार्य नहीं है?",
    "options_en": ["Glucagon production", "Insulin production", "Bicarbonate secretion", "Bile production"],
    "options_hi": ["ग्लूकागन उत्पादन", "इंसुलिन उत्पादन", "बाइकार्बोनेट स्राव", "पित्त उत्पादन"],
    "answer_en": "Bile production",
    "answer_hi": "पित्त उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The process of transpiration helps in:",
    "question_hi": "वाष्पोत्सर्जन की प्रक्रिया सहायक है:",
    "options_en": ["Cooling", "Heating", "Support", "Protection"],
    "options_hi": ["शीतलन", "तापन", "सहारा", "सुरक्षा"],
    "answer_en": "Cooling",
    "answer_hi": "शीतलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of the following is a characteristic of the phylum Arthropoda?",
    "question_hi": "निम्नलिखित में से कौन सा आर्थ्रोपोडा संघ की विशेषता है?",
    "options_en": ["Chitinous exoskeleton", "Calcareous shell", "Silicious spicules", "Bony skeleton"],
    "options_hi": ["काइटिनी बहिःकंकाल", "चूने का खोल", "सिलिका स्पाइक्यूल", "बोनी कंकाल"],
    "answer_en": "Chitinous exoskeleton",
    "answer_hi": "काइटिनी बहिःकंकाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The hormone that promotes cell division in animals is:",
    "question_hi": "वह हार्मोन जो जंतुओं में कोशिका विभाजन को बढ़ावा देता है:",
    "options_en": ["Growth hormone", "Thyroxine", "Insulin", "Adrenaline"],
    "options_hi": ["वृद्धि हार्मोन", "थायरॉक्सिन", "इंसुलिन", "एड्रेनालाईन"],
    "answer_en": "Growth hormone",
    "answer_hi": "वृद्धि हार्मोन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which of the following is NOT a type of epithelium?",
    "question_hi": "निम्नलिखित में से कौन सा उपकला का प्रकार नहीं है?",
    "options_en": ["Squamous", "Cuboidal", "Columnar", "Spherical"],
    "options_hi": ["शल्की", "घनाकार", "स्तंभाकार", "गोलाकार"],
    "answer_en": "Spherical",
    "answer_hi": "गोलाकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The process of denitrification returns nitrogen to the:",
    "question_hi": "विनाइट्रीकरण की प्रक्रिया नाइट्रोजन को वापस लौटाती है:",
    "options_en": ["Atmosphere", "Soil", "Water", "Plants"],
    "options_hi": ["वायुमंडल", "मृदा", "जल", "पौधों"],
    "answer_en": "Atmosphere",
    "answer_hi": "वायुमंडल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which of the following is a characteristic of the class Pisces?",
    "question_hi": "निम्नलिखित में से कौन सा पिस्क्स वर्ग की विशेषता है?",
    "options_en": ["Gills", "Lungs", "Trachea", "Skin"],
    "options_hi": ["गिल्स", "फेफड़े", "श्वासनली", "त्वचा"],
    "answer_en": "Gills",
    "answer_hi": "गिल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The enzyme that converts ATP to cAMP is:",
    "question_hi": "वह एंजाइम जो एटीपी को cAMP में परिवर्तित करता है:",
    "options_en": ["Adenylate cyclase", "Phosphodiesterase", "Kinase", "Phosphatase"],
    "options_hi": ["एडेनिलेट साइक्लेज", "फॉस्फोडाइएस्टरेज", "काइनेज", "फॉस्फेटेज"],
    "answer_en": "Adenylate cyclase",
    "answer_hi": "एडेनिलेट साइक्लेज",
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