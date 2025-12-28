const questions = [
  {
    num: 1,
    question_en: "Which of the following is not a characteristic of the phylum Porifera?",
    question_hi: "निम्न में से कौन-सा पोरिफेरा संघ का लक्षण नहीं है?",
    options_en: ["Cellular level of organization", "Water canal system", "Hermaphrodite", "Definite symmetry"],
    options_hi: ["कोशिकीय संगठन स्तर", "जल नलिका तंत्र", "उभयलिंगी", "निश्चित सममिति"],
    answer: "Definite symmetry",
    attempted: false
  },

  {
    num: 2,
    question_en: "The enzyme that catalyzes the first committed step of glycolysis is:",
    question_hi: "ग्लाइकोलिसिस के प्रथम निश्चित चरण को उत्प्रेरित करने वाला एंजाइम है:",
    options_en: ["Hexokinase", "Phosphofructokinase", "Pyruvate kinase", "Aldolase"],
    options_hi: ["हेक्सोकाइनेज़", "फॉस्फोफ्रक्टोकाइनेज़", "पाइरूवेट काइनेज़", "एल्डोलेज"],
    answer: "Phosphofructokinase",
    attempted: false
  },

  {
    num: 3,
    question_en: "Which of the following is not a function of the Golgi apparatus?",
    question_hi: "निम्न में से कौन-सा गॉल्जी तंत्र का कार्य नहीं है?",
    options_en: ["Packaging of materials", "Formation of lysosomes", "Protein synthesis", "Formation of acrosome"],
    options_hi: ["सामग्री का पैकेजिंग", "लाइसोसोम का निर्माण", "प्रोटीन संश्लेषण", "एक्रोसोम का निर्माण"],
    answer: "Protein synthesis",
    attempted: false
  },

  {
    num: 4,
    question_en: "The process of conversion of nitrate to nitrogen gas by bacteria is called:",
    question_hi: "नाइट्रेट को बैक्टीरिया द्वारा नाइट्रोजन गैस में बदलने की प्रक्रिया कहलाती है:",
    options_en: ["Nitrogen fixation", "Nitrification", "Ammonification", "Denitrification"],
    options_hi: ["नाइट्रोजन स्थिरीकरण", "नाइट्रीफिकेशन", "अमोनिफिकेशन", "डी-नाइट्रीफिकेशन"],
    answer: "Denitrification",
    attempted: false
  },

  {
    num: 5,
    question_en: "Which of the following is not a characteristic of the class Chondrichthyes?",
    question_hi: "निम्न में से कौन-सा कॉन्ड्रिक्थीज वर्ग का लक्षण नहीं है?",
    options_en: ["Cartilaginous endoskeleton", "Placoid scales", "Operculum present", "Viviparous or oviparous"],
    options_hi: ["उपास्थीय अंतःकंकाल", "प्लेकोइड स्केल्स", "ऑपर्कुलम उपस्थित", "अंडज या जरायुज"],
    answer: "Operculum present",
    attempted: false
  },

  {
    num: 6,
    question_en: "The hormone that stimulates the secretion of pancreatic juice is:",
    question_hi: "कौन-सा हार्मोन अग्न्याशयी रस के स्राव को उत्तेजित करता है?",
    options_en: ["Gastrin", "Secretin", "Cholecystokinin", "Enterogastrone"],
    options_hi: ["गैस्ट्रिन", "सीक्रेटिन", "कोलिसिस्टोकाइनीन", "एन्टेरोगैस्ट्रोन"],
    answer: "Secretin",
    attempted: false
  },

  {
    num: 7,
    question_en: "Which of the following is not a part of the human excretory system?",
    question_hi: "निम्न में से कौन-सा मानव उत्सर्जी तंत्र का भाग नहीं है?",
    options_en: ["Kidneys", "Ureters", "Urinary bladder", "Gallbladder"],
    options_hi: ["वृक्क", "मूत्रवाहिनी", "मूत्राशय", "पित्ताशय"],
    answer: "Gallbladder",
    attempted: false
  },

  {
    num: 8,
    question_en: "The process of formation of the three germ layers is called:",
    question_hi: "तीन जर्म लेयर के निर्माण की प्रक्रिया कहलाती है:",
    options_en: ["Neurulation", "Gastrulation", "Organogenesis", "Blastulation"],
    options_hi: ["न्यूरुलेशन", "गैस्ट्रुलेशन", "अंगजनन", "ब्लास्टुलेशन"],
    answer: "Gastrulation",
    attempted: false
  },

  {
    num: 9,
    question_en: "Which of the following is not a characteristic of the family Liliaceae?",
    question_hi: "निम्न में से कौन-सा लिलिएसी कुल का लक्षण नहीं है?",
    options_en: ["Parallel venation", "Trimerous flowers", "Superior ovary", "Zygomorphic flowers"],
    options_hi: ["समांतर शिराविन्यास", "त्रिदलीय पुष्प", "ऊर्ध्वस्थ अंडाशय", "असममित पुष्प"],
    answer: "Zygomorphic flowers",
    attempted: false
  },

  {
    num: 10,
    question_en: "The enzyme that converts angiotensinogen to angiotensin I is:",
    question_hi: "एंजियोटेंसिनोजेन को एंजियोटेंसिन I में बदलने वाला एंजाइम है:",
    options_en: ["Renin", "ACE", "Adrenaline", "Aldosterone"],
    options_hi: ["रेनिन", "ACE", "एड्रेनालिन", "एल्डोस्टेरोन"],
    answer: "Renin",
    attempted: false
  },

  {
    num: 11,
    question_en: "Which of the following is not a function of the small intestine?",
    question_hi: "निम्न में से कौन-सा छोटी आंत का कार्य नहीं है?",
    options_en: ["Complete digestion of food", "Absorption of nutrients", "Absorption of water", "Secretion of digestive enzymes"],
    options_hi: ["भोजन का पूर्ण पाचन", "पोषक तत्वों का अवशोषण", "पानी का अवशोषण", "पाचक एंजाइम का स्राव"],
    answer: "Absorption of water",
    attempted: false
  },

  {
    num: 12,
    question_en: "The process of formation of the morula from the zygote is called:",
    question_hi: "ज़ाइगोट से मॉरुला बनने की प्रक्रिया कहलाती है:",
    options_en: ["Cleavage", "Gastrulation", "Neurulation", "Organogenesis"],
    options_hi: ["क्लीवेज", "गैस्ट्रुलेशन", "न्यूरुलेशन", "अंगजनन"],
    answer: "Cleavage",
    attempted: false
  },

  {
    num: 13,
    question_en: "Which of the following is not a characteristic of the phylum Echinodermata?",
    question_hi: "निम्न में से कौन-सा इकाइनोडर्मेटा संघ का लक्षण नहीं है?",
    options_en: ["Spiny skin", "Water vascular system", "Radial symmetry in adults", "Closed circulatory system"],
    options_hi: ["कांटेदार त्वचा", "जल संवहनी तंत्र", "प्रौढ़ों में रेडियल सममिति", "बंद परिसंचरण तंत्र"],
    answer: "Closed circulatory system",
    attempted: false
  },

  {
    num: 14,
    question_en: "The hormone that promotes cell division in plants is:",
    question_hi: "कौन-सा हार्मोन पौधों में कोशिका विभाजन को बढ़ावा देता है?",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एथिलीन"],
    answer: "Cytokinin",
    attempted: false
  },

  {
    num: 15,
    question_en: "Which of the following is not a part of the human female reproductive system?",
    question_hi: "निम्न में से कौन-सा मानव महिला प्रजनन तंत्र का भाग नहीं है?",
    options_en: ["Ovary", "Uterus", "Vagina", "Vas deferens"],
    options_hi: ["अंडाशय", "गर्भाशय", "योनि", "वस डिफेरेन्स"],
    answer: "Vas deferens",
    attempted: false
  },

  {
    num: 16,
    question_en: "The process of conversion of non-carbohydrate precursors to glucose is called:",
    question_hi: "गैर-कार्बोहाइड्रेट पदार्थों को ग्लूकोज़ में बदलने की प्रक्रिया कहलाती है:",
    options_en: ["Glycogenesis", "Glycogenolysis", "Gluconeogenesis", "Glycolysis"],
    options_hi: ["ग्लाइकोजेनेसिस", "ग्लाइकोजेनोलाइसिस", "ग्लूकोनियोोजेनेसिस", "ग्लाइकोलाइसिस"],
    answer: "Gluconeogenesis",
    attempted: false
  },

  {
    num: 17,
    question_en: "Which of the following is not a characteristic of the class Osteichthyes?",
    question_hi: "निम्न में से कौन-सा ऑस्टियिक्थीज वर्ग का लक्षण नहीं है?",
    options_en: ["Bony endoskeleton", "Cycloid scales", "Operculum present", "No air bladder"],
    options_hi: ["अस्थिय अंतःकंकाल", "सायक्लॉइड स्केल्स", "ऑपर्कुलम उपस्थित", "वायु मूत्राशय नहीं"],
    answer: "No air bladder",
    attempted: false
  },

  {
    num: 18,
    question_en: "The enzyme that digests proteins in the small intestine is:",
    question_hi: "छोटी आंत में प्रोटीन को पचाने वाला एंजाइम है:",
    options_en: ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    options_hi: ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेज"],
    answer: "Trypsin",
    attempted: false
  },

  {
    num: 19,
    question_en: "Which of the following is not a function of the lymph nodes?",
    question_hi: "निम्न में से कौन-सा लसीका ग्रंथि का कार्य नहीं है?",
    options_en: ["Filtration of lymph", "Production of lymphocytes", "Production of RBCs", "Phagocytosis"],
    options_hi: ["लसीका का छन्नन", "लिम्फोसाइट उत्पादन", "RBC का उत्पादन", "फैगोसाइटोसिस"],
    answer: "Production of RBCs",
    attempted: false
  },

  {
    num: 20,
    question_en: "The process of conversion of pyruvate to acetyl CoA requires:",
    question_hi: "पाइरूवेट को एसीटिल CoA में बदलने की प्रक्रिया में आवश्यक है:",
    options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer: "Oxygen",
    attempted: false
  },

  {
    num: 21,
    question_en: "Which of the following is not a characteristic of the subphylum Vertebrata?",
    question_hi: "निम्न में से कौन-सा कशेरुकी उपसंघ का लक्षण नहीं है?",
    options_en: ["Notochord present", "Vertebral column", "Closed circulatory system", "Exoskeleton of chitin"],
    options_hi: ["नोटोकोर्ड उपस्थित", "कशेरुक स्तंभ", "बंद परिसंचरण तंत्र", "काइटिन का बहिःकंकाल"],
    answer: "Exoskeleton of chitin",
    attempted: false
  },

  {
    num: 22,
    question_en: "The hormone that promotes fruit ripening is:",
    question_hi: "कौन-सा हार्मोन फलों के पकने को बढ़ावा देता है?",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एथिलीन"],
    answer: "Ethylene",
    attempted: false
  },

  {
    num: 23,
    question_en: "Which of the following is not a part of the human endocrine system?",
    question_hi: "निम्न में से कौन-सा मानव अंतःस्रावी तंत्र का भाग नहीं है?",
    options_en: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Spleen"],
    options_hi: ["पीयूष ग्रंथि", "थाइरॉइड ग्रंथि", "अधिवृक्क ग्रंथि", "प्लीहा"],
    answer: "Spleen",
    attempted: false
  },

  {
    num: 24,
    question_en: "The conversion of light energy to chemical energy in photosynthesis occurs in:",
    question_hi: "प्रकाश संश्लेषण में प्रकाश ऊर्जा का रासायनिक ऊर्जा में रूपांतरण कहाँ होता है?",
    options_en: ["Stroma", "Grana", "Matrix", "Cristae"],
    options_hi: ["स्ट्रोमा", "ग्राना", "मैट्रिक्स", "क्रिस्टे"],
    answer: "Grana",
    attempted: false
  },

  {
    num: 25,
    question_en: "Which of the following is not a characteristic of the kingdom Protista?",
    question_hi: "निम्न में से कौन-सा प्रोटिस्टा जगत का लक्षण नहीं है?",
    options_en: ["Eukaryotic", "Mostly unicellular", "Cell wall of chitin", "Autotrophic or heterotrophic"],
    options_hi: ["यूकारियोटिक", "अधिकतर एककोशिकीय", "काइटिन की कोशिका भित्ति", "स्वपोषी या परपोषी"],
    answer: "Cell wall of chitin",
    attempted: false
  },

  {
    num: 26,
    question_en: "The enzyme that converts prothrombin to thrombin is:",
    question_hi: "प्रोथ्रोम्बिन को थ्रोम्बिन में बदलने वाला एंजाइम है:",
    options_en: ["Thromboplastin", "Calcium ions", "Vitamin K", "Heparin"],
    options_hi: ["थ्रोम्बोप्लास्टिन", "कैल्शियम आयन", "विटामिन K", "हेपेरिन"],
    answer: "Thromboplastin",
    attempted: false
  },

  {
    num: 27,
    question_en: "Which of the following is not a function of the pancreas?",
    question_hi: "निम्न में से कौन-सा अग्न्याशय का कार्य नहीं है?",
    options_en: ["Production of insulin", "Production of glucagon", "Production of bile", "Production of pancreatic juice"],
    options_hi: ["इंसुलिन का उत्पादन", "ग्लूकागोन का उत्पादन", "पित्त का निर्माण", "अग्न्याशयी रस का निर्माण"],
    answer: "Production of bile",
    attempted: false
  },

  {
    num: 28,
    question_en: "The process of conversion of ammonia to uric acid is called:",
    question_hi: "अमोनिया को यूरिक अम्ल में बदलने की प्रक्रिया कहलाती है:",
    options_en: ["Ammonotelism", "Ureotelism", "Uricotelism", "Guanotelism"],
    options_hi: ["अमोनोटेलिज़्म", "यूरीयोटेलिज़्म", "यूरिकोटेलिज़्म", "गुआनोटेलिज़्म"],
    answer: "Uricotelism",
    attempted: false
  },

  {
    num: 29,
    question_en: "Which of the following is not a characteristic of the class Cyclostomata?",
    question_hi: "निम्न में से कौन-सा साइक्लोस्टोमाटा वर्ग का लक्षण नहीं है?",
    options_en: ["Jawless", "Circular mouth", "Smooth skin", "Paired fins"],
    options_hi: ["जबड़ा रहित", "वृत्ताकार मुख", "मुलायम त्वचा", "युग्मित पंख"],
    answer: "Paired fins",
    attempted: false
  },

  {
    num: 30,
    question_en: "The hormone that stimulates the development of corpus luteum is:",
    question_hi: "कौन-सा हार्मोन कॉर्पस ल्यूटियम के विकास को उत्तेजित करता है?",
    options_en: ["FSH", "LH", "Estrogen", "Progesterone"],
    options_hi: ["FSH", "LH", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
    answer: "LH",
    attempted: false
  },

  {
    num: 31,
    question_en: "Which of the following is not a part of the human ear?",
    question_hi: "निम्न में से कौन-सा मानव कान का हिस्सा नहीं है?",
    options_en: ["Pinna", "Tympanum", "Eustachian tube", "Retina"],
    options_hi: ["पिन्ना", "कर्ण-पर्दा", "यूस्टेशियन नली", "रेटिना"],
    answer: "Retina",
    attempted: false
  },

  {
    num: 32,
    question_en: "The process of conversion of glucose to pyruvate is called:",
    question_hi: "ग्लूकोज़ को पाइरूवेट में बदलने की प्रक्रिया कहलाती है:",
    options_en: ["Glycogenesis", "Glycogenolysis", "Gluconeogenesis", "Glycolysis"],
    options_hi: ["ग्लाइकोजेनेसिस", "ग्लाइकोजेनोलाइसिस", "ग्लूकोनियोोजेनेसिस", "ग्लाइकोलाइसिस"],
    answer: "Glycolysis",
    attempted: false
  },

  {
    num: 33,
    question_en: "Which of the following is not a characteristic of the phylum Coelenterata?",
    question_hi: "निम्न में से कौन-सा सीलेंटराटा संघ का लक्षण नहीं है?",
    options_en: ["Tissue level of organization", "Radial symmetry", "Cnidoblasts", "Complete digestive system"],
    options_hi: ["ऊतक संगठन स्तर", "रेडियल सममिति", "क्नाइडोब्लास्ट", "पूर्ण पाचन तंत्र"],
    answer: "Complete digestive system",
    attempted: false
  },

  {
    num: 34,
    question_en: "The enzyme that fixes CO2 in C4 plants is:",
    question_hi: "C4 पौधों में CO2 को स्थिर करने वाला एंजाइम है:",
    options_en: ["RuBisCO", "PEP carboxylase", "Catalase", "Carbonic anhydrase"],
    options_hi: ["रूबिस्को", "PEP कार्बोक्सिलेज", "कैटालेज़", "कार्बोनिक एनहाइड्रेज"],
    answer: "PEP carboxylase",
    attempted: false
  },

  {
    num: 35,
    question_en: "Which of the following is not a function of the hypothalamus?",
    question_hi: "निम्न में से कौन-सा हाइपोथैलेमस का कार्य नहीं है?",
    options_en: ["Regulation of body temperature", "Regulation of hunger and thirst", "Production of releasing hormones", "Production of growth hormone"],
    options_hi: ["शरीर तापमान का नियंत्रण", "भूख और प्यास का नियंत्रण", "रिलीजिंग हार्मोन का निर्माण", "विकास हार्मोन का उत्पादन"],
    answer: "Production of growth hormone",
    attempted: false
  },

  {
    num: 36,
    question_en: "The conversion of one molecule of glucose to pyruvate produces:",
    question_hi: "एक ग्लूकोज़ अणु के पाइरूवेट में बदलने से उत्पन्न होता है:",
    options_en: ["2 NADH", "4 NADH", "6 NADH", "8 NADH"],
    options_hi: ["2 NADH", "4 NADH", "6 NADH", "8 NADH"],
    answer: "2 NADH",
    attempted: false
  },

  {
    num: 37,
    question_en: "Which of the following is not a characteristic of the class Mammalia?",
    question_hi: "निम्न में से कौन-सा मैमेलिया वर्ग का लक्षण नहीं है?",
    options_en: ["Mammary glands", "Diaphragm present", "Oviparous", "Heterodont dentition"],
    options_hi: ["स्तन ग्रंथियाँ", "डायाफ्राम उपस्थित", "अंडज", "विविध दंत विन्यास"],
    answer: "Oviparous",
    attempted: false
  },

  {
    num: 38,
    question_en: "The hormone that promotes seed germination is:",
    question_hi: "कौन-सा हार्मोन बीज अंकुरण को बढ़ावा देता है?",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
    answer: "Gibberellin",
    attempted: false
  },

  {
    num: 39,
    question_en: "Which of the following is not a part of the human respiratory system?",
    question_hi: "निम्न में से कौन-सा मानव श्वसन तंत्र का हिस्सा नहीं है?",
    options_en: ["Nasal cavity", "Pharynx", "Larynx", "Esophagus"],
    options_hi: ["नासिका गुहा", "ग्रसनी", "कंठनली", "अन्ननली"],
    answer: "Esophagus",
    attempted: false
  },

  {
    num: 40,
    question_en: "The conversion of pyruvate to ethanol produces:",
    question_hi: "पाइरूवेट को एथेनॉल में बदलने से क्या उत्पन्न होता है?",
    options_en: ["ATP", "NADH", "CO2", "O2"],
    options_hi: ["ATP", "NADH", "CO2", "O2"],
    answer: "CO2",
    attempted: false
  },

  {
    num: 41,
    question_en: "Which of the following is not a characteristic of the phylum Aschelminthes?",
    question_hi: "निम्न में से कौन-सा एस्केलमिन्थीज़ संघ का लक्षण नहीं है?",
    options_en: ["Bilateral symmetry", "Pseudocoelomate", "Complete digestive system", "Closed circulatory system"],
    options_hi: ["द्विपार्श्व सममिति", "छद्म-सीलोमयुक्त", "पूर्ण पाचन तंत्र", "बंद परिसंचरण तंत्र"],
    answer: "Closed circulatory system",
    attempted: false
  },

  {
    num: 42,
    question_en: "The enzyme that digests fats in the small intestine is:",
    question_hi: "छोटी आंत में वसा को पचाने वाला एंजाइम है:",
    options_en: ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    options_hi: ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेज"],
    answer: "Lipase",
    attempted: false
  },

  {
    num: 43,
    question_en: "Which of the following is not a function of the bones?",
    question_hi: "निम्न में से कौन-सा हड्डियों का कार्य नहीं है?",
    options_en: ["Support", "Protection", "Movement", "Hormone production"],
    options_hi: ["सहारा", "सुरक्षा", "गति", "हार्मोन उत्पादन"],
    answer: "Hormone production",
    attempted: false
  },

  {
    num: 44,
    question_en: "The light reaction of photosynthesis results in the evolution of:",
    question_hi: "प्रकाश संश्लेषण की प्रकाश अभिक्रिया में कौन-सी गैस निकलती है?",
    options_en: ["O2", "CO2", "H2", "N2"],
    options_hi: ["O2", "CO2", "H2", "N2"],
    answer: "O2",
    attempted: false
  },

  {
    num: 45,
    question_en: "Which of the following is not a characteristic of the class Aves?",
    question_hi: "निम्न में से कौन-सा एविस वर्ग का लक्षण नहीं है?",
    options_en: ["Feathers", "Hollow bones", "Viviparous", "Air sacs"],
    options_hi: ["पंख", "खोखली हड्डियाँ", "जरायुज", "वायु थैलियाँ"],
    answer: "Viviparous",
    attempted: false
  },

  {
    num: 46,
    question_en: "The hormone that promotes apical dominance is:",
    question_hi: "कौन-सा हार्मोन शीर्ष प्रभुत्व को बढ़ावा देता है?",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एथिलीन"],
    answer: "Auxin",
    attempted: false
  },

  {
    num: 47,
    question_en: "Which of the following is not a part of the human circulatory system?",
    question_hi: "निम्न में से कौन-सा मानव परिसंचरण तंत्र का भाग नहीं है?",
    options_en: ["Heart", "Blood vessels", "Blood", "Lymph"],
    options_hi: ["हृदय", "रक्त वाहिकाएँ", "रक्त", "लसीका"],
    answer: "Lymph",
    attempted: false
  },

  {
    num: 48,
    question_en: "The process of conversion of atmospheric nitrogen to ammonia is called:",
    question_hi: "वायुमंडलीय नाइट्रोजन को अमोनिया में बदलने की प्रक्रिया कहलाती है:",
    options_en: ["Nitrogen fixation", "Nitrification", "Ammonification", "Denitrification"],
    options_hi: ["नाइट्रोजन स्थिरीकरण", "नाइट्रीफिकेशन", "अमोनिफिकेशन", "डी-नाइट्रीफिकेशन"],
    answer: "Nitrogen fixation",
    attempted: false
  },

  {
    num: 49,
    question_en: "Which of the following is not a characteristic of the kingdom Plantae?",
    question_hi: "निम्न में से कौन-सा पादप जगत का लक्षण नहीं है?",
    options_en: ["Eukaryotic", "Autotrophic", "Cell wall of cellulose", "Heterotrophic"],
    options_hi: ["यूकारियोटिक", "स्वपोषी", "सेलुलोज की कोशिका भित्ति", "परपोषी"],
    answer: "Heterotrophic",
    attempted: false
  },

  {
    num: 50,
    question_en: "The enzyme that unwinds DNA during replication is:",
    question_hi: "DNA प्रतिकृति के दौरान DNA को खोलने वाला एंजाइम है:",
    options_en: ["DNA polymerase", "DNA ligase", "Helicase", "Primase"],
    options_hi: ["DNA पोलीमरेज़", "DNA लाइगेज़", "हेलिकेज़", "प्राइमेज़"],
    answer: "Helicase",
    attempted: false
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