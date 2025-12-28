const questions = [
  {
    num: 1,
    question_en: "Which of the following is not a feature of the genetic code?",
    question_hi: "निम्न में से कौन-सा आनुवंशिक कोड की विशेषता नहीं है?",
    options_en: ["Universal", "Ambiguous", "Degenerate", "Non-overlapping"],
    options_hi: ["सार्वभौमिक", "अस्पष्ट", "अपसारी", "गैर-अतिव्यापी"],
    answer_en: "Ambiguous",
    answer_hi: "अस्पष्ट",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "In which phase of meiosis does crossing over occur?",
    question_hi: "मीiosis के किस चरण में क्रॉसिंग ओवर होता है?",
    options_en: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I"],
    options_hi: ["प्रोफेज I", "मेटाफेज I", "एनाफेज I", "टेलोफेज I"],
    answer_en: "Prophase I",
    answer_hi: "प्रोफेज I",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "The 'lock and key' model of enzyme action was proposed by:",
    question_hi: "'लॉक और की' मॉडल किसने प्रस्तावित किया?",
    options_en: ["Emil Fischer", "Koshland", "Buchner", "Pasteur"],
    options_hi: ["एमिल फिशर", "कॉश्लैंड", "बुचनर", "पाश्चर"],
    answer_en: "Emil Fischer",
    answer_hi: "एमिल फिशर",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "Which of the following is a C4 plant?",
    question_hi: "निम्न में से कौन-सा एक C4 पौधा है?",
    options_en: ["Wheat", "Rice", "Maize", "Potato"],
    options_hi: ["गेहूं", "चावल", "मक्का", "आलू"],
    answer_en: "Maize",
    answer_hi: "मक्का",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "The respiratory quotient for carbohydrates is:",
    question_hi: "कार्बोहाइड्रेट का श्वसन गुणांक (RQ) कितना होता है?",
    options_en: ["0.7", "0.9", "1.0", "1.33"],
    options_hi: ["0.7", "0.9", "1.0", "1.33"],
    answer_en: "1.0",
    answer_hi: "1.0",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "Which plant hormone promotes apical dominance?",
    question_hi: "कौन-सा पादप हार्मोन एपिकल डॉमिनेंस को बढ़ावा देता है?",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एथिलीन"],
    answer_en: "Auxin",
    answer_hi: "ऑक्सिन",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "The most abundant protein in the human body is:",
    question_hi: "मनुष्य के शरीर में सबसे प्रचुर मात्रा में पाया जाने वाला प्रोटीन है:",
    options_en: ["Hemoglobin", "Collagen", "Albumin", "Myosin"],
    options_hi: ["हीमोग्लोबिन", "कोलेजन", "एल्ब्यूमिन", "मायोसिन"],
    answer_en: "Collagen",
    answer_hi: "कोलेजन",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which of the following is not a part of the female reproductive system?",
    question_hi: "निम्न में से कौन महिला प्रजनन तंत्र का भाग नहीं है?",
    options_en: ["Fallopian tube", "Uterus", "Vas deferens", "Ovary"],
    options_hi: ["फैलोपियन ट्यूब", "गर्भाशय", "वास डिफरेंस", "अंडाशय"],
    answer_en: "Vas deferens",
    answer_hi: "वास डिफरेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "The process of conversion of NO2- to N2 is called:",
    question_hi: "NO2- का N2 में परिवर्तन किस प्रक्रिया से होता है?",
    options_en: ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
    options_hi: ["नाइट्रोजन स्थिरीकरण", "नाइट्रीफिकेशन", "डीनाइट्रीफिकेशन", "अमोनिफिकेशन"],
    answer_en: "Denitrification",
    answer_hi: "डीनाइट्रीफिकेशन",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "Which type of immunity is provided by vaccination?",
    question_hi: "टीकाकरण से कौन-सी प्रतिरक्षा प्राप्त होती है?",
    options_en: ["Natural active", "Artificial active", "Natural passive", "Artificial passive"],
    options_hi: ["प्राकृतिक सक्रिय", "कृत्रिम सक्रिय", "प्राकृतिक निष्क्रिय", "कृत्रिम निष्क्रिय"],
    answer_en: "Artificial active",
    answer_hi: "कृत्रिम सक्रिय",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "The DNA segment that acts as a 'switch' to turn on gene expression is called:",
    question_hi: "DNA का वह भाग जो जीन अभिव्यक्ति को चालू करने वाले स्विच की तरह कार्य करता है, कहलाता है:",
    options_en: ["Operator", "Promoter", "Regulator", "Enhancer"],
    options_hi: ["ऑपरेटर", "प्रमोटर", "रेगुलेटर", "एन्हांसर"],
    answer_en: "Promoter",
    answer_hi: "प्रमोटर",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which of the following is not a greenhouse gas?",
    question_hi: "निम्न में से कौन-सा ग्रीनहाउस गैस नहीं है?",
    options_en: ["Methane", "Carbon dioxide", "Nitrous oxide", "Nitrogen"],
    options_hi: ["मीथेन", "कार्बन डाइऑक्साइड", "नाइट्रस ऑक्साइड", "नाइट्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "The hormone responsible for milk ejection is:",
    question_hi: "दूध के निष्कासन के लिए जिम्मेदार हार्मोन है:",
    options_en: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
    options_hi: ["प्रोलैक्टिन", "ऑक्सीटोसिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
    answer_en: "Oxytocin",
    answer_hi: "ऑक्सीटोसिन",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "In which part of the nephron is maximum water reabsorbed?",
    question_hi: "नेफ्रॉन के किस भाग में पानी का अधिकतम पुन:अवशोषण होता है?",
    options_en: ["Proximal convoluted tubule", "Loop of Henle", "Distal convoluted tubule", "Collecting duct"],
    options_hi: ["प्रॉक्सिमल कन्वॉल्यूटेड ट्यूब्यूल", "हेनले का लूप", "डिस्टल कन्वॉल्यूटेड ट्यूब्यूल", "कलेक्टिंग डक्ट"],
    answer_en: "Proximal convoluted tubule",
    answer_hi: "प्रॉक्सिमल कन्वॉल्यूटेड ट्यूब्यूल",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "The process of RNA synthesis from DNA is called:",
    question_hi: "DNA से RNA के संश्लेषण की प्रक्रिया कहलाती है:",
    options_en: ["Replication", "Transcription", "Translation", "Transformation"],
    options_hi: ["प्रतिलिपिकरण", "ट्रांसक्रिप्शन", "ट्रांसलेशन", "ट्रांसफॉर्मेशन"],
    answer_en: "Transcription",
    answer_hi: "ट्रांसक्रिप्शन",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "The enzyme present in pancreatic juice that digests proteins is:",
    question_hi: "अग्नाशयी रस में उपस्थित प्रोटीन पचाने वाला एंजाइम है:",
    options_en: ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    options_hi: ["पेप्सिन", "ट्रिप्सिन", "एमिलेज", "लाइपेज"],
    answer_en: "Trypsin",
    answer_hi: "ट्रिप्सिन",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "The number of high-energy bonds in ATP is:",
    question_hi: "ATP में उच्च-ऊर्जा बंधों की संख्या कितनी होती है?",
    options_en: ["One", "Two", "Three", "Four"],
    options_hi: ["एक", "दो", "तीन", "चार"],
    answer_en: "Two",
    answer_hi: "दो",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "Which blood group has no antibodies?",
    question_hi: "किस रक्त समूह में कोई एंटीबॉडी नहीं होती?",
    options_en: ["A", "B", "O", "AB"],
    options_hi: ["A", "B", "O", "AB"],
    answer_en: "AB",
    answer_hi: "AB",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "The enzyme that joins DNA fragments is:",
    question_hi: "DNA के टुकड़ों को जोड़ने वाला एंजाइम है:",
    options_en: ["DNA polymerase", "DNA ligase", "Helicase", "Primase"],
    options_hi: ["DNA पॉलिमरेज़", "DNA लाइगेज़", "हेलिकेज़", "प्राइमेज़"],
    answer_en: "DNA ligase",
    answer_hi: "DNA लाइगेज़",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which of the following is not a viral disease?",
    question_hi: "निम्न में से कौन-सा रोग वायरल नहीं है?",
    options_en: ["AIDS", "Influenza", "Tuberculosis", "Rabies"],
    options_hi: ["एड्स", "इन्फ्लुएंजा", "ट्यूबरकुलोसिस", "रेबीज़"],
    answer_en: "Tuberculosis",
    answer_hi: "ट्यूबरकुलोसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "The site of protein synthesis in prokaryotes is:",
    question_hi: "प्रोकैरियोट्स में प्रोटीन संश्लेषण का स्थान है:",
    options_en: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    options_hi: ["न्यूक्लियस", "माइटोकॉन्ड्रिया", "राइबोसोम", "गोल्जी तंत्र"],
    answer_en: "Ribosome",
    answer_hi: "राइबोसोम",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "Which plant shows parallel venation?",
    question_hi: "कौन-सा पौधा समानान्तर शिराओं वाला होता है?",
    options_en: ["Dicot", "Monocot", "Gymnosperm", "Pteridophyte"],
    options_hi: ["डाइकोट", "मोनोकॉट", "जिम्नोस्पर्म", "प्टेरीडोफाइट"],
    answer_en: "Monocot",
    answer_hi: "मोनोकॉट",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "The hormone that regulates calcium metabolism is:",
    question_hi: "कैल्शियम चयापचय को नियंत्रित करने वाला हार्मोन है:",
    options_en: ["Thyroxine", "Parathormone", "Insulin", "Glucagon"],
    options_hi: ["थाइरॉक्सिन", "पैराथॉर्मोन", "इं슂లिन", "ग्लूकागन"],
    answer_en: "Parathormone",
    answer_hi: "पैराथॉर्मोन",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "Which of the following is not a part of the brainstem?",
    question_hi: "निम्न में से कौन-सा ब्रेनस्टेम का भाग नहीं है?",
    options_en: ["Medulla oblongata", "Pons", "Midbrain", "Cerebellum"],
    options_hi: ["मेडुला ऑब्लोंगाटा", "पॉन्स", "मिडब्रेन", "सेरेबेलम"],
    answer_en: "Cerebellum",
    answer_hi: "सेरेबेलम",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "The process of conversion of glucose to pyruvate is called:",
    question_hi: "ग्लूकोज का पायरुवेट में परिवर्तन कहलाता है:",
    options_en: ["Glycolysis", "Krebs cycle", "Electron transport", "Fermentation"],
    options_hi: ["ग्लाइकोलिसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन", "किण्वन"],
    answer_en: "Glycolysis",
    answer_hi: "ग्लाइकोलिसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which of the following is a sex-linked disease?",
    question_hi: "निम्न में से कौन-सा लिंग-संबद्ध रोग है?",
    options_en: ["Hemophilia", "Sickle cell anemia", "Thalassemia", "Phenylketonuria"],
    options_hi: ["हीमोफीलिया", "सिकल सेल एनीमिया", "थैलेसीमिया", "फेनिलकेटोनूरिया"],
    answer_en: "Hemophilia",
    answer_hi: "हीमोफीलिया",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "The enzyme present in pancreatic juice that digests proteins is:",
    question_hi: "अग्नाशयी रस में प्रोटीन पचाने वाला एंजाइम है:",
    options_en: ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    options_hi: ["पेप्सिन", "ट्रिप्सिन", "एमिलेज", "लाइपेज"],
    answer_en: "Trypsin",
    answer_hi: "ट्रिप्सिन",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "Which of the following is not a function of the liver?",
    question_hi: "निम्न में से कौन-सा कार्य यकृत का नहीं है?",
    options_en: ["Bile production", "Glycogen storage", "Detoxification", "Insulin production"],
    options_hi: ["पित्त उत्पादन", "ग्लाइकोजन भंडारण", "डिटॉक्सिफिकेशन", "इंसुलिन उत्पादन"],
    answer_en: "Insulin production",
    answer_hi: "इंसुलिन उत्पादन",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "The process of formation of sperm is called:",
    question_hi: "शुक्राणु निर्माण की प्रक्रिया कहलाती है:",
    options_en: ["Spermatogenesis", "Oogenesis", "Spermiogenesis", "Gametogenesis"],
    options_hi: ["स्पर्मेटोजेनेसिस", "ओओजेनेसिस", "स्पर्मियोजेनेसिस", "गैमेटोजेनेसिस"],
    answer_en: "Spermatogenesis",
    answer_hi: "स्पर्मेटोजेनेसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "Which of the following is not a part of the axial skeleton?",
    question_hi: "निम्न में से कौन-सा अक्षीय कंकाल का भाग नहीं है?",
    options_en: ["Skull", "Vertebral column", "Ribs", "Pelvic girdle"],
    options_hi: ["खोपड़ी", "कशेरुका स्तंभ", "पसलियां", "पेल्विक गर्डल"],
    answer_en: "Pelvic girdle",
    answer_hi: "पेल्विक गर्डल",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "The hormone that stimulates gastric secretion is:",
    question_hi: "कौन-सा हार्मोन गैस्ट्रिक स्राव को उत्तेजित करता है?",
    options_en: ["Gastrin", "Secretin", "Cholecystokinin", "Enterogastrone"],
    options_hi: ["गैस्ट्रिन", "सीक्रेटिन", "कोलेसिस्टोकिनिन", "एंटरोगैस्ट्रोन"],
    answer_en: "Gastrin",
    answer_hi: "गैस्ट्रिन",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "Which of the following is not a characteristic of living organisms?",
    question_hi: "निम्न में से कौन-सी जीवित प्राणियों की विशेषता नहीं है?",
    options_en: ["Metabolism", "Growth", "Reproduction", "Isolation"],
    options_hi: ["चयापचय", "वृद्धि", "प्रजनन", "अलगाव"],
    answer_en: "Isolation",
    answer_hi: "अलगाव",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "The process of conversion of light energy to chemical energy occurs in:",
    question_hi: "प्रकाश ऊर्जा का रासायनिक ऊर्जा में परिवर्तन कहाँ होता है?",
    options_en: ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
    options_hi: ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम", "न्यूक्लियस"],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "Which of the following is not a micronutrient?",
    question_hi: "निम्न में से कौन-सा सूक्ष्म पोषक तत्व नहीं है?",
    options_en: ["Iron", "Zinc", "Copper", "Nitrogen"],
    options_hi: ["लोहा", "जिंक", "तांबा", "नाइट्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "The enzyme that fixes CO2 in C3 plants is:",
    question_hi: "C3 पौधों में CO₂ को जोड़ने वाला एंजाइम है:",
    options_en: ["PEP carboxylase", "RuBisCO", "Catalase", "Amylase"],
    options_hi: ["PEP कार्बोक्सिलेज", "रुबिस्को", "कैटालेज", "एमिलेज"],
    answer_en: "RuBisCO",
    answer_hi: "रुबिस्को",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which of the following is not a steroid hormone?",
    question_hi: "निम्न में से कौन-सा स्टेरॉयड हार्मोन नहीं है?",
    options_en: ["Estrogen", "Testosterone", "Cortisol", "Insulin"],
    options_hi: ["एस्ट्रोजन", "टेस्टोस्टेरोन", "कॉर्टिसोल", "इंसुलिन"],
    answer_en: "Insulin",
    answer_hi: "इंसुलिन",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "The process of DNA replication is:",
    question_hi: "DNA प्रतिकृति की प्रक्रिया है:",
    options_en: ["Conservative", "Semi-conservative", "Dispersive", "Non-conservative"],
    options_hi: ["संरक्षी", "अर्ध-संरक्षी", "विच्छिन्न", "गैर-संरक्षी"],
    answer_en: "Semi-conservative",
    answer_hi: "अर्ध-संरक्षी",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "Which of the following is not a function of the kidney?",
    question_hi: "निम्न में से कौन-सा कार्य गुर्दे का नहीं है?",
    options_en: ["Excretion", "Osmoregulation", "Acid-base balance", "Glycogen storage"],
    options_hi: ["उत्सर्जन", "परासरण नियमन", "अम्ल-क्षार संतुलन", "ग्लाइकोजन भंडारण"],
    answer_en: "Glycogen storage",
    answer_hi: "ग्लाइकोजन भंडारण",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "The hormone that lowers blood calcium level is:",
    question_hi: "कौन-सा हार्मोन रक्त कैल्शियम स्तर को कम करता है?",
    options_en: ["Parathormone", "Calcitonin", "Thyroxine", "Insulin"],
    options_hi: ["पैराथॉर्मोन", "कैल्सिटोनिन", "थाइरॉक्सिन", "इंसुलिन"],
    answer_en: "Calcitonin",
    answer_hi: "कैल्सिटोनिन",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "Which of the following is not a part of the male reproductive system?",
    question_hi: "निम्न में से कौन-सा पुरुष प्रजनन तंत्र का भाग नहीं है?",
    options_en: ["Testis", "Epididymis", "Vas deferens", "Fallopian tube"],
    options_hi: ["अंडकोष", "एपिडिडिमिस", "वास डिफरेंस", "फैलोपियन ट्यूब"],
    answer_en: "Fallopian tube",
    answer_hi: "फैलोपियन ट्यूब",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "The process of formation of mRNA from DNA is called:",
    question_hi: "DNA से mRNA बनने की प्रक्रिया कहलाती है:",
    options_en: ["Replication", "Transcription", "Translation", "Transformation"],
    options_hi: ["रिप्लिकेशन", "ट्रांसक्रिप्शन", "ट्रांसलेशन", "ट्रांसफॉर्मेशन"],
    answer_en: "Transcription",
    answer_hi: "ट्रांसक्रिप्शन",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "Which of the following is not a greenhouse gas?",
    question_hi: "निम्न में से कौन-सा ग्रीनहाउस गैस नहीं है?",
    options_en: ["CO2", "CH4", "N2O", "O2"],
    options_hi: ["CO2", "CH4", "N2O", "O2"],
    answer_en: "O2",
    answer_hi: "O2",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "The enzyme that digests starch is:",
    question_hi: "स्टार्च पचाने वाला एंजाइम है:",
    options_en: ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    options_hi: ["पेप्सिन", "ट्रिप्सिन", "एमिलेज", "लाइपेज"],
    answer_en: "Amylase",
    answer_hi: "एमिलेज",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "Which of the following is not a function of the skin?",
    question_hi: "निम्न में से कौन-सा त्वचा का कार्य नहीं है?",
    options_en: ["Protection", "Temperature regulation", "Sensation", "Blood production"],
    options_hi: ["सुरक्षा", "तापमान नियंत्रण", "संवेदना", "रक्त निर्माण"],
    answer_en: "Blood production",
    answer_hi: "रक्त निर्माण",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "The process of formation of ovum is called:",
    question_hi: "डिंब निर्माण की प्रक्रिया कहलाती है:",
    options_en: ["Spermatogenesis", "Oogenesis", "Spermiogenesis", "Gametogenesis"],
    options_hi: ["स्पर्मेटोजेनेसिस", "ओओजेनेसिस", "स्पर्मियोजेनेसिस", "गैमेटोजेनेसिस"],
    answer_en: "Oogenesis",
    answer_hi: "ओओजेनेसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which of the following is not a part of the appendicular skeleton?",
    question_hi: "निम्न में से कौन-सा उपांगी कंकाल का भाग नहीं है?",
    options_en: ["Pelvic girdle", "Pectoral girdle", "Limbs", "Skull"],
    options_hi: ["पेल्विक गर्डल", "पेक्टोरल गर्डल", "अंग", "खोपड़ी"],
    answer_en: "Skull",
    answer_hi: "खोपड़ी",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "The hormone that raises blood sugar level is:",
    question_hi: "कौन-सा हार्मोन रक्त शर्करा स्तर बढ़ाता है?",
    options_en: ["Insulin", "Glucagon", "Thyroxine", "Cortisol"],
    options_hi: ["इंसुलिन", "ग्लूकागन", "थाइरॉक्सिन", "कॉर्टिसोल"],
    answer_en: "Glucagon",
    answer_hi: "ग्लूकागन",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "Which of the following is not a characteristic of enzymes?",
    question_hi: "निम्न में से कौन-सी एंजाइमों की विशेषता नहीं है?",
    options_en: ["Protein nature", "Specificity", "Consumed in reaction", "Catalytic action"],
    options_hi: ["प्रोटीन प्रकृति", "विशिष्टता", "प्रतिक्रिया में उपभोग", "उत्प्रेरक क्रिया"],
    answer_en: "Consumed in reaction",
    answer_hi: "प्रतिक्रिया में उपभोग",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "The process of conversion of pyruvate to acetyl CoA occurs in:",
    question_hi: "पायरुवेट का एसीटिल CoA में परिवर्तन कहाँ होता है?",
    options_en: ["Cytoplasm", "Mitochondrial matrix", "Nucleus", "Ribosome"],
    options_hi: ["साइटोप्लाज्म", "माइटोकॉन्ड्रियल मैट्रिक्स", "न्यूक्लियस", "राइबोसोम"],
    answer_en: "Mitochondrial matrix",
    answer_hi: "माइटोकॉन्ड्रियल मैट्रिक्स",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "Which of the following is not a macronutrient?",
    question_hi: "निम्न में से कौन-सा मैक्रोन्यूट्रिएंट नहीं है?",
    options_en: ["Carbon", "Hydrogen", "Oxygen", "Molybdenum"],
    options_hi: ["कार्बन", "हाइड्रोजन", "ऑक्सीजन", "मोलिब्डेनम"],
    answer_en: "Molybdenum",
    answer_hi: "मोलिब्डेनम",
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