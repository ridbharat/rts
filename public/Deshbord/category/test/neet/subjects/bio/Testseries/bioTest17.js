const questions = [
  {
    "num": 1,
    "question_en": "Which of the following is the correct sequence of stages in prophase I of meiosis?",
    "question_hi": "अर्धसूत्रीविभाजन के पूर्वावस्था I में चरणों का सही क्रम कौन सा है?",
    "options_en": ["Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis", "Zygotene, Leptotene, Pachytene, Diplotene, Diakinesis", "Leptotene, Pachytene, Zygotene, Diplotene, Diakinesis", "Pachytene, Leptotene, Zygotene, Diplotene, Diakinesis"],
    "options_hi": ["लेप्टोटीन, जाइगोटीन, पैकीटीन, डिप्लोटीन, डायाकाइनेसिस", "जाइगोटीन, लेप्टोटीन, पैकीटीन, डिप्लोटीन, डायाकाइनेसिस", "लेप्टोटीन, पैकीटीन, जाइगोटीन, डिप्लोटीन, डायाकाइनेसिस", "पैकीटीन, लेप्टोटीन, जाइगोटीन, डिप्लोटीन, डायाकाइनेसिस"],
    "answer_en": "Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis",
    "answer_hi": "लेप्टोटीन, जाइगोटीन, पैकीटीन, डिप्लोटीन, डायाकाइनेसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The phenomenon where a single gene affects multiple phenotypic traits is known as:",
    "question_hi": "वह घटना जहाँ एक जीन कई फेनोटाइपिक लक्षणों को प्रभावित करती है, कहलाती है:",
    "options_en": ["Pleiotropy", "Polygenic inheritance", "Epistasis", "Codominance"],
    "options_hi": ["बहुप्रभाविता", "बहुजीन वंशागति", "अधिस्थापन", "सह-प्रभाविता"],
    "answer_en": "Pleiotropy",
    "answer_hi": "बहुप्रभाविता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following is NOT a characteristic of cancerous cells?",
    "question_hi": "निम्नलिखित में से कौन सा कैंसर कोशिकाओं की विशेषता नहीं है?",
    "options_en": ["Contact inhibition", "Metastasis", "Uncontrolled proliferation", "Anaplasia"],
    "options_hi": ["संपर्क संदमन", "मेटास्टेसिस", "अनियंत्रित प्रसार", "अनाप्लेसिया"],
    "answer_en": "Contact inhibition",
    "answer_hi": "संपर्क संदमन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The hormone responsible for the development of corpus luteum after ovulation is:",
    "question_hi": "अंडोत्सर्ग के बाद कॉर्पस ल्यूटियम के विकास के लिए जिम्मेदार हार्मोन है:",
    "options_en": ["LH", "FSH", "Estrogen", "Progesterone"],
    "options_hi": ["एलएच", "एफएसएच", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
    "answer_en": "LH",
    "answer_hi": "एलएच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "In the lac operon of E. coli, the repressor protein is inactivated by:",
    "question_hi": "ई. कोलाई के लैक ओपेरॉन में, रिप्रेसर प्रोटीन निष्क्रिय होता है:",
    "options_en": ["Lactose", "Glucose", "Galactose", "Allolactose"],
    "options_hi": ["लैक्टोज", "ग्लूकोज", "गैलेक्टोज", "एलोलैक्टोज"],
    "answer_en": "Allolactose",
    "answer_hi": "एलोलैक्टोज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is a characteristic feature of bryophytes?",
    "question_hi": "निम्नलिखित में से कौन सा ब्रायोफाइट्स की विशेषता है?",
    "options_en": ["Vascular tissue absent", "Seeds produced", "Flowers present", "Roots well developed"],
    "options_hi": ["संवहनी ऊतक अनुपस्थित", "बीज उत्पन्न होते हैं", "पुष्प उपस्थित", "जड़ें अच्छी तरह विकसित"],
    "answer_en": "Vascular tissue absent",
    "answer_hi": "संवहनी ऊतक अनुपस्थित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The process by which water moves from the root hair to the xylem through cell walls is called:",
    "question_hi": "वह प्रक्रिया जिसके द्वारा पानी कोशिका भित्तियों के माध्यम से मूल रोम से जाइलम तक जाता है, कहलाती है:",
    "options_en": ["Apoplast pathway", "Symplast pathway", "Transmembrane pathway", "Vacuolar pathway"],
    "options_hi": ["एपोप्लास्ट मार्ग", "सिम्प्लास्ट मार्ग", "ट्रांसमेम्ब्रेन मार्ग", "रिक्तिकीय मार्ग"],
    "answer_en": "Apoplast pathway",
    "answer_hi": "एपोप्लास्ट मार्ग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which of the following is NOT a function of the large intestine?",
    "question_hi": "निम्नलिखित में से कौन सा बड़ी आंत का कार्य नहीं है?",
    "options_en": ["Absorption of water", "Synthesis of vitamin K", "Formation of feces", "Digestion of proteins"],
    "options_hi": ["जल का अवशोषण", "विटामिन K संश्लेषण", "मल का निर्माण", "प्रोटीनों का पाचन"],
    "answer_en": "Digestion of proteins",
    "answer_hi": "प्रोटीनों का पाचन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "The enzyme responsible for the synthesis of RNA primers during DNA replication is:",
    "question_hi": "डीएनए प्रतिकृति के दौरान आरएनए प्राइमर के संश्लेषण के लिए जिम्मेदार एंजाइम है:",
    "options_en": ["Primase", "DNA polymerase III", "DNA polymerase I", "Helicase"],
    "options_hi": ["प्राइमेज", "डीएनए पोलीमरेज III", "डीएनए पोलीमरेज I", "हेलिकेज"],
    "answer_en": "Primase",
    "answer_hi": "प्राइमेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is an example of artificial passive immunity?",
    "question_hi": "निम्नलिखित में से कौन सा कृत्रिम निष्क्रिय प्रतिरक्षा का उदाहरण है?",
    "options_en": ["Antibody transfer through placenta", "Vaccination", "Antitoxin injection", "Recovery from disease"],
    "options_hi": ["नाल के माध्यम से प्रतिरक्षी स्थानांतरण", "टीकाकरण", "एंटीटॉक्सिन इंजेक्शन", "रोग से उबरना"],
    "answer_en": "Antitoxin injection",
    "answer_hi": "एंटीटॉक्सिन इंजेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The phenomenon where two different genes located on the same chromosome are inherited together is called:",
    "question_hi": "वह घटना जहाँ एक ही गुणसूत्र पर स्थित दो अलग-अलग जीन एक साथ वंशागत होती हैं, कहलाती है:",
    "options_en": ["Linkage", "Crossing over", "Recombination", "Mutation"],
    "options_hi": ["सहलग्नता", "विनिमय", "पुनर्संयोजन", "उत्परिवर्तन"],
    "answer_en": "Linkage",
    "answer_hi": "सहलग्नता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which of the following is NOT a component of the PGR abscisic acid?",
    "question_hi": "निम्नलिखित में से कौन सा पीजीआर एब्सिसिक अम्ल का घटक नहीं है?",
    "options_en": ["Induces dormancy", "Promotes stomatal closure", "Stimulates cell division", "Inhibits seed germination"],
    "options_hi": ["प्रसुप्ति प्रेरित करता है", "रंध्र बंद करने को बढ़ावा देता है", "कोशिका विभाजन को उत्तेजित करता है", "बीज अंकुरण को रोकता है"],
    "answer_en": "Stimulates cell division",
    "answer_hi": "कोशिका विभाजन को उत्तेजित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The process of conversion of glucose to pyruvate with the production of 2 ATP molecules is called:",
    "question_hi": "2 एटीपी अणुओं के उत्पादन के साथ ग्लूकोज को पाइरुवेट में परिवर्तित करने की प्रक्रिया कहलाती है:",
    "options_en": ["Glycolysis", "Krebs cycle", "Electron transport chain", "Fermentation"],
    "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन श्रृंखला", "किण्वन"],
    "answer_en": "Glycolysis",
    "answer_hi": "ग्लाइकोलाइसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of the following is a characteristic of the phylum Arthropoda?",
    "question_hi": "निम्नलिखित में से कौन सा आर्थ्रोपोडा संघ की विशेषता है?",
    "options_en": ["Jointed appendages", "Notochord present", "Radial symmetry", "Soft body with mantle"],
    "options_hi": ["संधियुक्त उपांग", "नोटोकॉर्ड उपस्थित", "अरीय सममिति", "मैंटल सहित मृदु शरीर"],
    "answer_en": "Jointed appendages",
    "answer_hi": "संधियुक्त उपांग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "The hormone that stimulates the secretion of gastric juice in the stomach is:",
    "question_hi": "आमाशय में गैस्ट्रिक रस के स्राव को उत्तेजित करने वाला हार्मोन है:",
    "options_en": ["Gastrin", "Secretin", "Cholecystokinin", "Enterogastrone"],
    "options_hi": ["गैस्ट्रिन", "सेक्रेटिन", "कोलेसिस्टोकाइनिन", "एंटरोगैस्ट्रोन"],
    "answer_en": "Gastrin",
    "answer_hi": "गैस्ट्रिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of the following is NOT a type of RNA involved in protein synthesis?",
    "question_hi": "निम्नलिखित में से कौन सा प्रोटीन संश्लेषण में शामिल आरएनए का प्रकार नहीं है?",
    "options_en": ["mRNA", "tRNA", "rRNA", "DNA"],
    "options_hi": ["एमआरएनए", "टीआरएनए", "आरआरएनए", "डीएनए"],
    "answer_en": "DNA",
    "answer_hi": "डीएनए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The process of formation of sperms from spermatogonia is called:",
    "question_hi": "शुक्रजनन कोशिकाओं से शुक्राणुओं के निर्माण की प्रक्रिया कहलाती है:",
    "options_en": ["Spermatogenesis", "Oogenesis", "Spermiogenesis", "Spermiation"],
    "options_hi": ["शुक्राणुजनन", "अंडजनन", "शुक्राणुकरण", "शुक्राणु मोचन"],
    "answer_en": "Spermatogenesis",
    "answer_hi": "शुक्राणुजनन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of the following is a characteristic of the class Mammalia?",
    "question_hi": "निम्नलिखित में से कौन सा स्तनधारी वर्ग की विशेषता है?",
    "options_en": ["Mammary glands", "Feathers", "Cold-blooded", "Gill slits"],
    "options_hi": ["स्तन ग्रंथियाँ", "पंख", "शीत-रक्ती", "क्लोम छिद्र"],
    "answer_en": "Mammary glands",
    "answer_hi": "स्तन ग्रंथियाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The enzyme that fixes carbon dioxide in C4 plants in the mesophyll cells is:",
    "question_hi": "C4 पौधों में पर्णमध्योतक कोशिकाओं में कार्बन डाइऑक्साइड स्थिर करने वाला एंजाइम है:",
    "options_en": ["PEP carboxylase", "RuBisCO", "Carbonic anhydrase", "Catalase"],
    "options_hi": ["पीईपी कार्बोक्सिलेज", "रुबिस्को", "कार्बोनिक एनहाइड्रेज", "कैटालेज"],
    "answer_en": "PEP carboxylase",
    "answer_hi": "पीईपी कार्बोक्सिलेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following is NOT a function of the skeletal system?",
    "question_hi": "निम्नलिखित में से कौन सा कंकाल तंत्र का कार्य नहीं है?",
    "options_en": ["Blood cell production", "Mineral storage", "Hormone production", "Support and protection"],
    "options_hi": ["रक्त कोशिका उत्पादन", "खनिज भंडारण", "हार्मोन उत्पादन", "सहारा और सुरक्षा"],
    "answer_en": "Hormone production",
    "answer_hi": "हार्मोन उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "The process by which water moves from higher water potential to lower water potential through a semipermeable membrane is called:",
    "question_hi": "वह प्रक्रिया जिसके द्वारा पानी उच्च जल विभव से निम्न जल विभव की ओर एक अर्धपारगम्य झिल्ली के माध्यम से जाता है, कहलाती है:",
    "options_en": ["Osmosis", "Diffusion", "Active transport", "Facilitated diffusion"],
    "options_hi": ["परासरण", "प्रसार", "सक्रिय परिवहन", "सुसाध्य प्रसार"],
    "answer_en": "Osmosis",
    "answer_hi": "परासरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which of the following is a characteristic of the family Fabaceae?",
    "question_hi": "निम्नलिखित में से कौन सा फैबेसी कुल की विशेषता है?",
    "options_en": ["Papilionaceous corolla", "Trimerous flowers", "Parallel venation", "Adventitious root system"],
    "options_hi": ["तितली के आकार की दलपुंज", "त्रिगुणित पुष्प", "समानांतर शिराविन्यास", "अस्थानिक मूल तंत्र"],
    "answer_en": "Papilionaceous corolla",
    "answer_hi": "तितली के आकार की दलपुंज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The hormone that promotes cell division in plants is:",
    "question_hi": "पौधों में कोशिका विभाजन को बढ़ावा देने वाला हार्मोन है:",
    "options_en": ["Cytokinin", "Auxin", "Gibberellin", "Abscisic acid"],
    "options_hi": ["साइटोकाइनिन", "ऑक्सिन", "जिबरेलिन", "एब्सिसिक अम्ल"],
    "answer_en": "Cytokinin",
    "answer_hi": "साइटोकाइनिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of the following is NOT a type of plant tissue culture?",
    "question_hi": "निम्नलिखित में से कौन सा पादप ऊतक संवर्धन का प्रकार नहीं है?",
    "options_en": ["Protoplast culture", "Embryo culture", "Callus culture", "Blood culture"],
    "options_hi": ["प्रोटोप्लास्ट संवर्धन", "भ्रूण संवर्धन", "कैलस संवर्धन", "रक्त संवर्धन"],
    "answer_en": "Blood culture",
    "answer_hi": "रक्त संवर्धन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The process of conversion of nitrate to ammonium in plants is called:",
    "question_hi": "पौधों में नाइट्रेट को अमोनियम में परिवर्तित करने की प्रक्रिया कहलाती है:",
    "options_en": ["Nitrate assimilation", "Nitrogen fixation", "Nitrification", "Denitrification"],
    "options_hi": ["नाइट्रेट आत्मसात्करण", "नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण"],
    "answer_en": "Nitrate assimilation",
    "answer_hi": "नाइट्रेट आत्मसात्करण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which of the following is a characteristic of the order Primata?",
    "question_hi": "निम्नलिखित में से कौन सा प्राइमेट गण की विशेषता है?",
    "options_en": ["Opposable thumbs", "Wings", "Hooves", "Scales"],
    "options_hi": ["विपरीत अंगूठे", "पंख", "खुर", "शल्क"],
    "answer_en": "Opposable thumbs",
    "answer_hi": "विपरीत अंगूठे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The enzyme that breaks down hydrogen peroxide in peroxisomes is:",
    "question_hi": "पेरोक्सिसोम में हाइड्रोजन पेरोक्साइड को तोड़ने वाला एंजाइम है:",
    "options_en": ["Catalase", "Peroxidase", "Superoxide dismutase", "Amylase"],
    "options_hi": ["कैटालेज", "पेरोक्सीडेज", "सुपरऑक्साइड डिसम्यूटेज", "एमाइलेज"],
    "answer_en": "Catalase",
    "answer_hi": "कैटालेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which of the following is NOT a function of the liver?",
    "question_hi": "निम्नलिखित में से कौन सा यकृत का कार्य नहीं है?",
    "options_en": ["Detoxification", "Glycogen storage", "Bile production", "Insulin production"],
    "options_hi": ["विषहरण", "ग्लाइकोजन भंडारण", "पित्त उत्पादन", "इंसुलिन उत्पादन"],
    "answer_en": "Insulin production",
    "answer_hi": "इंसुलिन उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The process of formation of the fertilization membrane after sperm entry is called:",
    "question_hi": "शुक्राणु प्रवेश के बाद निषेचन झिल्ली के निर्माण की प्रक्रिया कहलाती है:",
    "options_en": ["Cortical reaction", "Acrosomal reaction", "Capacitation", "Implantation"],
    "options_hi": ["कॉर्टिकल प्रतिक्रिया", "एक्रोसोमल प्रतिक्रिया", "क्षमता अर्जन", "आरोपण"],
    "answer_en": "Cortical reaction",
    "answer_hi": "कॉर्टिकल प्रतिक्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which of the following is a characteristic of the phylum Chordata?",
    "question_hi": "निम्नलिखित में से कौन सा कॉर्डेटा संघ की विशेषता है?",
    "options_en": ["Notochord", "Exoskeleton", "Radial symmetry", "Segmented body"],
    "options_hi": ["नोटोकॉर्ड", "बहिःकंकाल", "अरीय सममिति", "खंडित शरीर"],
    "answer_en": "Notochord",
    "answer_hi": "नोटोकॉर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The hormone that regulates calcium metabolism in the body is:",
    "question_hi": "शरीर में कैल्शियम चयापचय को नियंत्रित करने वाला हार्मोन है:",
    "options_en": ["Parathyroid hormone", "Thyroxine", "Insulin", "Adrenaline"],
    "options_hi": ["पैराथायरॉयड हार्मोन", "थायरोक्सिन", "इंसुलिन", "एड्रेनालाईन"],
    "answer_en": "Parathyroid hormone",
    "answer_hi": "पैराथायरॉयड हार्मोन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which of the following is NOT a type of ecological pyramid?",
    "question_hi": "निम्नलिखित में से कौन सा पारिस्थितिक पिरामिड का प्रकार नहीं है?",
    "options_en": ["Pyramid of energy", "Pyramid of biomass", "Pyramid of numbers", "Pyramid of population"],
    "options_hi": ["ऊर्जा पिरामिड", "जैवभार पिरामिड", "संख्या पिरामिड", "जनसंख्या पिरामिड"],
    "answer_en": "Pyramid of population",
    "answer_hi": "जनसंख्या पिरामिड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The process of conversion of pyruvate to acetyl CoA occurs in the:",
    "question_hi": "पाइरुवेट को एसिटाइल CoA में परिवर्तित करने की प्रक्रिया होती है:",
    "options_en": ["Mitochondrial matrix", "Cytoplasm", "Inner mitochondrial membrane", "Nucleus"],
    "options_hi": ["माइटोकॉन्ड्रियल मैट्रिक्स", "कोशिकाद्रव्य", "अंतः माइटोकॉन्ड्रियल झिल्ली", "केंद्रक"],
    "answer_en": "Mitochondrial matrix",
    "answer_hi": "माइटोकॉन्ड्रियल मैट्रिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which of the following is a characteristic of the class Aves?",
    "question_hi": "निम्नलिखित में से कौन सा एव्स वर्ग की विशेषता है?",
    "options_en": ["Feathers", "Mammary glands", "Teeth", "Ectothermic"],
    "options_hi": ["पंख", "स्तन ग्रंथियाँ", "दांत", "बाह्यतापी"],
    "answer_en": "Feathers",
    "answer_hi": "पंख",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The enzyme that digests proteins in the small intestine is:",
    "question_hi": "छोटी आंत में प्रोटीनों का पाचन करने वाला एंजाइम है:",
    "options_en": ["Trypsin", "Pepsin", "Amylase", "Lipase"],
    "options_hi": ["ट्रिप्सिन", "पेप्सिन", "एमाइलेज", "लाइपेज"],
    "answer_en": "Trypsin",
    "answer_hi": "ट्रिप्सिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which of the following is NOT a function of the kidney?",
    "question_hi": "निम्नलिखित में से कौन सा वृक्क का कार्य नहीं है?",
    "options_en": ["Regulation of blood pressure", "Production of urine", "Synthesis of bile", "Maintenance of electrolyte balance"],
    "options_hi": ["रक्तचाप विनियमन", "मूत्र उत्पादन", "पित्त संश्लेषण", "विद्युत् अपघट्य संतुलन बनाए रखना"],
    "answer_en": "Synthesis of bile",
    "answer_hi": "पित्त संश्लेषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The process of formation of the neural tube from the ectoderm is called:",
    "question_hi": "बाह्यत्वचा से तंत्रिका नलिका के निर्माण की प्रक्रिया कहलाती है:",
    "options_en": ["Neurulation", "Gastrulation", "Organogenesis", "Blastulation"],
    "options_hi": ["न्यूरुलेशन", "गैस्ट्रुलेशन", "अंगजनन", "ब्लास्टुलेशन"],
    "answer_en": "Neurulation",
    "answer_hi": "न्यूरुलेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which of the following is a characteristic of the family Solanaceae?",
    "question_hi": "निम्नलिखित में से कौन सा सोलेनेशी कुल की विशेषता है?",
    "options_en": ["Persistent calyx", "Zygomorphic flower", "Tap root system", "Parallel venation"],
    "options_hi": ["दृढ़ बाह्यदलपुंज", "ज़ाइगोमॉर्फिक पुष्प", "मूसला जड़ तंत्र", "समानांतर शिराविन्यास"],
    "answer_en": "Persistent calyx",
    "answer_hi": "दृढ़ बाह्यदलपुंज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "The hormone that promotes flowering in plants is:",
    "question_hi": "पौधों में पुष्पन को बढ़ावा देने वाला हार्मोन है:",
    "options_en": ["Florigen", "Auxin", "Gibberellin", "Cytokinin"],
    "options_hi": ["फ्लोरिजेन", "ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन"],
    "answer_en": "Florigen",
    "answer_hi": "फ्लोरिजेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which of the following is NOT a type of chromosomal mutation?",
    "question_hi": "निम्नलिखित में से कौन सा गुणसूत्रीय उत्परिवर्तन का प्रकार नहीं है?",
    "options_en": ["Deletion", "Duplication", "Inversion", "Substitution"],
    "options_hi": ["विलोपन", "द्विगुणन", "व्युत्क्रमण", "प्रतिस्थापन"],
    "answer_en": "Substitution",
    "answer_hi": "प्रतिस्थापन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The process of conversion of light energy to chemical energy in photosynthesis occurs in the:",
    "question_hi": "प्रकाश संश्लेषण में प्रकाश ऊर्जा का रासायनिक ऊर्जा में परिवर्तन कहाँ होता है?",
    "options_en": ["Thylakoid membranes", "Stroma", "Cytoplasm", "Mitochondria"],
    "options_hi": ["थाइलाकोइड झिल्लियाँ", "स्ट्रोमा", "कोशिकाद्रव्य", "माइटोकॉन्ड्रिया"],
    "answer_en": "Thylakoid membranes",
    "answer_hi": "थाइलाकोइड झिल्लियाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which of the following is a characteristic of the phylum Mollusca?",
    "question_hi": "निम्नलिखित में से कौन सा मोलस्का संघ की विशेषता है?",
    "options_en": ["Soft body with mantle", "Jointed appendages", "Notochord", "Radial symmetry"],
    "options_hi": ["मैंटल सहित मृदु शरीर", "संधियुक्त उपांग", "नोटोकॉर्ड", "अरीय सममिति"],
    "answer_en": "Soft body with mantle",
    "answer_hi": "मैंटल सहित मृदु शरीर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "The enzyme that converts angiotensinogen to angiotensin I is:",
    "question_hi": "एंजियोटेंसिनोजन को एंजियोटेंसिन I में परिवर्तित करने वाला एंजाइम है:",
    "options_en": ["Renin", "Angiotensin-converting enzyme", "Aldosterone", "Antidiuretic hormone"],
    "options_hi": ["रेनिन", "एंजियोटेंसिन-परिवर्तित एंजाइम", "एल्डोस्टेरोन", "एंटीडाययूरेटिक हार्मोन"],
    "answer_en": "Renin",
    "answer_hi": "रेनिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which of the following is NOT a type of plant movement?",
    "question_hi": "निम्नलिखित में से कौन सा पादप गति का प्रकार नहीं है?",
    "options_en": ["Phototropism", "Geotropism", "Chemotropism", "Hemotropism"],
    "options_hi": ["प्रकाशानुवर्तन", "भू-अनुवर्तन", "रसायनानुवर्तन", "रक्तानुवर्तन"],
    "answer_en": "Hemotropism",
    "answer_hi": "रक्तानुवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The process of formation of the three germ layers in the embryo is called:",
    "question_hi": "भ्रूण में तीन जनन स्तरों के निर्माण की प्रक्रिया कहलाती है:",
    "options_en": ["Gastrulation", "Neurulation", "Organogenesis", "Blastulation"],
    "options_hi": ["गैस्ट्रुलेशन", "न्यूरुलेशन", "अंगजनन", "ब्लास्टुलेशन"],
    "answer_en": "Gastrulation",
    "answer_hi": "गैस्ट्रुलेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which of the following is a characteristic of the class Reptilia?",
    "question_hi": "निम्नलिखित में से कौन सा सरीसृप वर्ग की विशेषता है?",
    "options_en": ["Dry skin with scales", "Moist skin", "Feathers", "Mammary glands"],
    "options_hi": ["शल्कों सहित शुष्क त्वचा", "नम त्वचा", "पंख", "स्तन ग्रंथियाँ"],
    "answer_en": "Dry skin with scales",
    "answer_hi": "शल्कों सहित शुष्क त्वचा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The enzyme that digests lipids in the small intestine is:",
    "question_hi": "छोटी आंत में लिपिड्स का पाचन करने वाला एंजाइम है:",
    "options_en": ["Lipase", "Amylase", "Trypsin", "Pepsin"],
    "options_hi": ["लाइपेज", "एमाइलेज", "ट्रिप्सिन", "पेप्सिन"],
    "answer_en": "Lipase",
    "answer_hi": "लाइपेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which of the following is NOT a function of the hypothalamus?",
    "question_hi": "निम्नलिखित में से कौन सा हाइपोथैलेमस का कार्य नहीं है?",
    "options_en": ["Regulation of body temperature", "Control of hunger and thirst", "Production of growth hormone", "Control of pituitary gland"],
    "options_hi": ["शरीर के तापमान का विनियमन", "भूख और प्यास का नियंत्रण", "वृद्धि हार्मोन का उत्पादन", "पिट्यूटरी ग्रंथि का नियंत्रण"],
    "answer_en": "Production of growth hormone",
    "answer_hi": "वृद्धि हार्मोन का उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "The process of conversion of glycogen to glucose in the liver is called:",
    "question_hi": "यकृत में ग्लाइकोजन को ग्लूकोज में परिवर्तित करने की प्रक्रिया कहलाती है:",
    "options_en": ["Glycogenolysis", "Glycogenesis", "Gluconeogenesis", "Glycolysis"],
    "options_hi": ["ग्लाइकोजनोलिसिस", "ग्लाइकोजनेसिस", "ग्लूकोनियोजनेसिस", "ग्लाइकोलाइसिस"],
    "answer_en": "Glycogenolysis",
    "answer_hi": "ग्लाइकोजनोलिसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which of the following is a characteristic of the family Liliaceae?",
    "question_hi": "निम्नलिखित में से कौन सा लिलिएसी कुल की विशेषता है?",
    "options_en": ["Parallel venation", "Reticulate venation", "Tap root system", "Zygomorphic flower"],
    "options_hi": ["समानांतर शिराविन्यास", "जालिकारूप शिराविन्यास", "मूसला जड़ तंत्र", "ज़ाइगोमॉर्फिक पुष्प"],
    "answer_en": "Parallel venation",
    "answer_hi": "समानांतर शिराविन्यास",
    "attempted": false,
    "selected": ""
  }
]

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