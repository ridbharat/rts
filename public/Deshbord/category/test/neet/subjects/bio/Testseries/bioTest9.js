const questions = [
  {
    num: 1,
    question_en: "Which of the following is not a post-fertilization event in flowering plants?",
    question_hi: "निम्न में से कौन-सा पुष्पीय पौधों में निषेचन के बाद होने वाली घटना नहीं है?",
    options_en: ["Endosperm formation", "Embryo development", "Pollination", "Seed formation"],
    options_hi: ["एंडोस्पर्म निर्माण", "भ्रूण विकास", "परागण", "बीज निर्माण"],
    answer_en: "Pollination",
    answer_hi: "परागण",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "The enzyme responsible for the synthesis of RNA primer during DNA replication is:",
    question_hi: "DNA प्रतिकृति के दौरान RNA प्राइमर के संश्लेषण के लिए उत्तरदायी एंजाइम है:",
    options_en: ["DNA polymerase I", "DNA polymerase III", "Primase", "Ligase"],
    options_hi: ["DNA पोलीमेरेज़ I", "DNA पोलीमेरेज़ III", "प्राइमेज़", "लिगेज़"],
    answer_en: "Primase",
    answer_hi: "प्राइमेज़",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "In which part of the mitochondria does the Krebs cycle occur?",
    question_hi: "माइटोकॉन्ड्रिया के किस भाग में क्रेब्स चक्र होता है?",
    options_en: ["Outer membrane", "Inner membrane", "Intermembrane space", "Matrix"],
    options_hi: ["बाह्य झिल्ली", "आंतरिक झिल्ली", "इंटरमेम्ब्रेन स्पेस", "मैट्रिक्स"],
    answer_en: "Matrix",
    answer_hi: "मैट्रिक्स",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "Which of the following is not a characteristic of cancerous cells?",
    question_hi: "निम्न में से कौन-सा कैंसरयुक्त कोशिकाओं का गुण नहीं है?",
    options_en: ["Contact inhibition", "Metastasis", "Uncontrolled proliferation", "Anaplasia"],
    options_hi: ["संपर्क अवरोध", "मेटास्टेसिस", "अनियंत्रित प्रजनन", "अनाप्लासिया"],
    answer_en: "Contact inhibition",
    answer_hi: "संपर्क अवरोध",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "The hormone that promotes bolting in plants is:",
    question_hi: "पौधों में बोल्टिंग को बढ़ावा देने वाला हार्मोन है:",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
    answer_en: "Gibberellin",
    answer_hi: "जिबरेलिन",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "Which of the following is not a component of the lac operon?",
    question_hi: "निम्न में से कौन-सा लैैक ऑपेरॉन का घटक नहीं है?",
    options_en: ["Operator gene", "Promoter gene", "Structural gene", "Regulator gene"],
    options_hi: ["ऑपरेटर जीन", "प्रमोटर जीन", "स्ट्रक्चरल जीन", "रेगुलेटर जीन"],
    answer_en: "Regulator gene",
    answer_hi: "रेगुलेटर जीन",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "The process by which water moves through the xylem against gravity is primarily due to:",
    question_hi: "वह प्रक्रिया जिससे जल ज़ाइलम में गुरुत्वाकर्षण के विरुद्ध ऊपर की ओर बढ़ता है:",
    options_en: ["Root pressure", "Transpiration pull", "Capillary action", "Imbibition"],
    options_hi: ["रूट प्रेशर", "ट्रांसपिरेशन पुल", "केशिका क्रिया", "इम्बिबिशन"],
    answer_en: "Transpiration pull",
    answer_hi: "ट्रांसपिरेशन पुल",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which of the following is not a function of the large intestine?",
    question_hi: "निम्न में से कौन-सा बड़ी आंत का कार्य नहीं है?",
    options_en: ["Absorption of water", "Absorption of electrolytes", "Synthesis of vitamin K", "Digestion of proteins"],
    options_hi: ["जल अवशोषण", "इलेक्ट्रोलाइट अवशोषण", "विटामिन K का संश्लेषण", "प्रोटीन का पाचन"],
    answer_en: "Digestion of proteins",
    answer_hi: "प्रोटीन का पाचन",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "The cellular organelle involved in the formation of acrosome is:",
    question_hi: "ऐक्रोसोम के निर्माण में शामिल कोशिकांग है:",
    options_en: ["Mitochondria", "Golgi apparatus", "Endoplasmic reticulum", "Lysosome"],
    options_hi: ["माइटोकॉन्ड्रिया", "गोल्जी तंत्र", "एंडोप्लाज़्मिक रेटिकुलम", "लाइसोज़ोम"],
    answer_en: "Golgi apparatus",
    answer_hi: "गोल्जी तंत्र",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "Which of the following is not a feature of the human genome?",
    question_hi: "निम्न में से कौन-सा मानव जीनोम की विशेषता नहीं है?",
    options_en: ["Less than 2% codes for proteins", "Contains repetitive sequences", "Average gene size is 3000 bases", "All genes are functional"],
    options_hi: ["2% से कम प्रोटीन के लिए कोड करते हैं", "दोहराए जाने वाले अनुक्रम होते हैं", "औसत जीन आकार 3000 बेस", "सभी जीन कार्यात्मक हैं"],
    answer_en: "All genes are functional",
    answer_hi: "सभी जीन कार्यात्मक हैं",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "The process of conversion of glucose to glycogen is called:",
    question_hi: "ग्लूकोज़ के ग्लाइकोजन में परिवर्तन की प्रक्रिया कहलाती है:",
    options_en: ["Glycogenesis", "Glycogenolysis", "Gluconeogenesis", "Glycolysis"],
    options_hi: ["ग्लाइकोजेनेसिस", "ग्लाइकोजेनोलिसिस", "ग्लूकोनियोजेनेसिस", "ग्लाइकोलिसिस"],
    answer_en: "Glycogenesis",
    answer_hi: "ग्लाइकोजेनेसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which of the following is not a characteristic of restriction enzymes?",
    question_hi: "निम्न में से कौन-सा प्रतिबंध एंजाइम का गुण नहीं है?",
    options_en: ["Molecular scissors", "Cut at specific sites", "Produced by bacteria", "Used in translation"],
    options_hi: ["मॉलिक्यूलर कैंची", "विशिष्ट स्थलों पर कट करते हैं", "बैक्टीरिया द्वारा उत्पादित", "अनुवाद में उपयोग होते हैं"],
    answer_en: "Used in translation",
    answer_hi: "अनुवाद में उपयोग होते हैं",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "The hormone that maintains the corpus luteum in pregnancy is:",
    question_hi: "गर्भावस्था में कॉर्पस ल्यूटियम को बनाए रखने वाला हार्मोन है:",
    options_en: ["FSH", "LH", "hCG", "Progesterone"],
    options_hi: ["FSH", "LH", "hCG", "प्रोजेस्टेरोन"],
    answer_en: "hCG",
    answer_hi: "hCG",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "Which of the following is not a part of the human ear?",
    question_hi: "निम्न में से कौन-सा मानव कान का हिस्सा नहीं है?",
    options_en: ["Malleus", "Incus", "Stapes", "Cochlea"],
    options_hi: ["मैल्यस", "इन्कस", "स्टेप्स", "कॉक्लिया"],
    answer_en: "Cochlea",
    answer_hi: "कॉक्लिया",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "The process of conversion of ammonia to urea occurs in:",
    question_hi: "अमोनिया का यूरिया में परिवर्तन कहाँ होता है?",
    options_en: ["Kidney", "Liver", "Pancreas", "Intestine"],
    options_hi: ["वृक्क", "यकृत", "अग्न्याशय", "आंत"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which of the following is not a greenhouse gas?",
    question_hi: "निम्न में से कौन-सी ग्रीनहाउस गैस नहीं है?",
    options_en: ["Water vapor", "Carbon dioxide", "Methane", "Nitrogen"],
    options_hi: ["जल वाष्प", "कार्बन डाइऑक्साइड", "मीथेन", "नाइट्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "The enzyme that fixes CO₂ in C4 plants is:",
    question_hi: "C4 पौधों में CO₂ को स्थिर करने वाला एंजाइम है:",
    options_en: ["RuBisCO", "PEP carboxylase", "Catalase", "Carbonic anhydrase"],
    options_hi: ["रुबिस्को", "PEP कार्बोक्सिलेज़", "कैटालेज़", "कार्बोनिक एनहाइड्रेज़"],
    answer_en: "PEP carboxylase",
    answer_hi: "PEP कार्बोक्सिलेज़",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "Which of the following is not a function of the spleen?",
    question_hi: "निम्न में से कौन-सा प्लीहा का कार्य नहीं है?",
    options_en: ["Blood storage", "Lymphocyte production", "Erythrocyte destruction", "Bile production"],
    options_hi: ["रक्त भंडारण", "लिम्फोसाइट उत्पादन", "एरिथ्रोसाइट विनाश", "पित्त उत्पादन"],
    answer_en: "Bile production",
    answer_hi: "पित्त उत्पादन",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "The process of formation of spermatids from spermatogonia is called:",
    question_hi: "स्पर्मेटोगोनिया से स्पर्मेटिड बनने की प्रक्रिया कहलाती है:",
    options_en: ["Spermiogenesis", "Spermatogenesis", "Oogenesis", "Gametogenesis"],
    options_hi: ["स्पर्मियोजेनेसिस", "स्पर्मेटोजेनेसिस", "ओओजेनेसिस", "गैमेटोजेनेसिस"],
    answer_en: "Spermatogenesis",
    answer_hi: "स्पर्मेटोजेनेसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which of the following is not a characteristic of connective tissue?",
    question_hi: "निम्न में से कौन-सा संयोजी ऊतक का गुण नहीं है?",
    options_en: ["Cells are closely packed", "Abundant matrix", "Good vascularity", "Various fiber types"],
    options_hi: ["कोशिकाएँ सघन रूप से भरी होती हैं", "प्रचुर मैट्रिक्स", "उत्तम रक्तवाहिन्यता", "विभिन्न प्रकार के रेशे"],
    answer_en: "Cells are closely packed",
    answer_hi: "कोशिकाएँ सघन रूप से भरी होती हैं",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "The hormone that stimulates milk production is:",
    question_hi: "दूध उत्पादन को उत्तेजित करने वाला हार्मोन है:",
    options_en: ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
    options_hi: ["ऑक्सीटोसिन", "प्रोलैक्टिन", "एस्ट्रोजेन", "प्रोजेस्टेरोन"],
    answer_en: "Prolactin",
    answer_hi: "प्रोलैक्टिन",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "Which of the following is not a part of the nephron?",
    question_hi: "निम्न में से कौन-सा नेफ्रॉन का हिस्सा नहीं है?",
    options_en: ["Glomerulus", "Bowman's capsule", "Loop of Henle", "Ureter"],
    options_hi: ["ग्लोमेरुलस", "बॉमन कैप्सूल", "हेनले का लूप", "यूरेटर"],
    answer_en: "Ureter",
    answer_hi: "यूरेटर",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "The process of DNA fingerprinting was developed by:",
    question_hi: "DNA फिंगरप्रिंटिंग की तकनीक किसने विकसित की?",
    options_en: ["Alec Jeffreys", "Kary Mullis", "James Watson", "Francis Crick"],
    options_hi: ["एलेक जेफ़्रीज़", "कैरी मुलिस", "जेम्स वाटसन", "फ्रांसिस क्रिक"],
    answer_en: "Alec Jeffreys",
    answer_hi: "एलेक जेफ़्रीज़",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "Which of the following is not a function of the hypothalamus?",
    question_hi: "निम्न में से कौन-सा हाइपोथैलेमस का कार्य नहीं है?",
    options_en: ["Body temperature regulation", "Hunger and thirst control", "Production of releasing hormones", "Production of digestive enzymes"],
    options_hi: ["शरीर का तापमान नियंत्रित करना", "भूख और प्यास नियंत्रण", "रिलीजिंग हार्मोन का उत्पादन", "पाचक एंजाइम का उत्पादन"],
    answer_en: "Production of digestive enzymes",
    answer_hi: "पाचक एंजाइम का उत्पादन",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "The enzyme that converts angiotensinogen to angiotensin I is:",
    question_hi: "एंजियोटेंसिनोजेन को एंजियोटेंसिन I में परिवर्तित करने वाला एंजाइम है:",
    options_en: ["Renin", "ACE", "Adrenaline", "Aldosterone"],
    options_hi: ["रेनिन", "ACE", "एड्रेनालिन", "एल्डोस्टेरोन"],
    answer_en: "Renin",
    answer_hi: "रेनिन",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which of the following is not a characteristic of bryophytes?",
    question_hi: "निम्न में से कौन-सा ब्रायोफाइट्स का गुण नहीं है?",
    options_en: ["Amphibians of plant kingdom", "Dominant gametophyte", "Vascular tissue present", "Require water for fertilization"],
    options_hi: ["पादप जगत के उभयचर", "प्रमुख गैमेटोफाइट", "संवहनी ऊतक उपस्थित", "निषेचन हेतु जल आवश्यक"],
    answer_en: "Vascular tissue present",
    answer_hi: "संवहनी ऊतक उपस्थित",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "The process of conversion of fibrinogen to fibrin is catalyzed by:",
    question_hi: "फाइब्रिनोजेन का फाइब्रिन में परिवर्तन किसके द्वारा उत्प्रेरित होता है?",
    options_en: ["Thrombin", "Prothrombin", "Thromboplastin", "Heparin"],
    options_hi: ["थ्रॉम्बिन", "प्रोथ्रॉम्बिन", "थ्रॉम्बोप्लास्टिन", "हेपरिन"],
    answer_en: "Thrombin",
    answer_hi: "थ्रॉम्बिन",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "Which of the following is not a function of the cerebellum?",
    question_hi: "निम्न में से कौन-सा सेरिबेलम का कार्य नहीं है?",
    options_en: ["Maintains posture", "Coordinates voluntary movements", "Controls heart rate", "Maintains equilibrium"],
    options_hi: ["मुद्रा बनाए रखना", "स्वैच्छिक गतिविधियों का समन्वय", "हृदय गति नियंत्रण", "संतुलन बनाए रखना"],
    answer_en: "Controls heart rate",
    answer_hi: "हृदय गति नियंत्रण",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "The hormone that promotes cell division in plants is:",
    question_hi: "पौधों में कोशिका विभाजन को बढ़ावा देने वाला हार्मोन है:",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एथिलीन"],
    answer_en: "Cytokinin",
    answer_hi: "साइटोकाइनिन",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "Which of the following is not a component of the PGR stack?",
    question_hi: "निम्न में से कौन-सा PGR स्टैक का घटक नहीं है?",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Chlorophyll"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "क्लोरोफिल"],
    answer_en: "Chlorophyll",
    answer_hi: "क्लोरोफिल",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "The process of conversion of light energy to chemical energy in photosynthesis results in the formation of:",
    question_hi: "प्रकाश संश्लेषण में प्रकाश ऊर्जा के रासायनिक ऊर्जा में परिवर्तन से कौन-से यौगिक बनते हैं?",
    options_en: ["ATP and NADPH", "ATP and NADH", "GTP and NADPH", "ATP and FADH2"],
    options_hi: ["ATP और NADPH", "ATP और NADH", "GTP और NADPH", "ATP और FADH2"],
    answer_en: "ATP and NADPH",
    answer_hi: "ATP और NADPH",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "Which of the following is not a characteristic of prokaryotic cells?",
    question_hi: "निम्न में से कौन-सा प्रोकैरियोटिक कोशिकाओं का गुण नहीं है?",
    options_en: ["Membrane-bound organelles absent", "Circular DNA", "70S ribosomes", "Nuclear membrane present"],
    options_hi: ["झिल्ली-बद्ध कोशिकांग अनुपस्थित", "वृत्ताकार DNA", "70S राइबोसोम", "नाभिकीय झिल्ली उपस्थित"],
    answer_en: "Nuclear membrane present",
    answer_hi: "नाभिकीय झिल्ली उपस्थित",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "The enzyme that catalyzes the first reaction of the Calvin cycle is:",
    question_hi: "कैल्विन चक्र के प्रथम अभिक्रिया को उत्प्रेरित करने वाला एंजाइम है:",
    options_en: ["PEP carboxylase", "RuBisCO", "Catalase", "Carbonic anhydrase"],
    options_hi: ["PEP कार्बोक्सिलेज़", "रुबिस्को", "कैटालेज़", "कार्बोनिक एनहाइड्रेज़"],
    answer_en: "RuBisCO",
    answer_hi: "रुबिस्को",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "Which of the following is not a function of the thyroid gland?",
    question_hi: "निम्न में से कौन-सा थायरॉइड ग्रंथि का कार्य नहीं है?",
    options_en: ["Regulates BMR", "Regulates blood calcium", "Regulates body growth", "Regulates mental development"],
    options_hi: ["BMR नियंत्रित करना", "रक्त कैल्शियम नियंत्रित करना", "शारीरिक वृद्धि नियंत्रित करना", "मानसिक विकास नियंत्रित करना"],
    answer_en: "Regulates blood calcium",
    answer_hi: "रक्त कैल्शियम नियंत्रित करना",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "The process of conversion of pyruvate to ethanol in yeast is called:",
    question_hi: "यीस्ट में पायरुवेट के एथेनॉल में परिवर्तन को क्या कहते हैं?",
    options_en: ["Lactic acid fermentation", "Alcoholic fermentation", "Aerobic respiration", "Krebs cycle"],
    options_hi: ["लैक्टिक अम्ल किण्वन", "अल्कोहलिक किण्वन", "वायवीय श्वसन", "क्रेब्स चक्र"],
    answer_en: "Alcoholic fermentation",
    answer_hi: "अल्कोहलिक किण्वन",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which of the following is not a characteristic of insects?",
    question_hi: "निम्न में से कौन-सा कीटों का गुण नहीं है?",
    options_en: ["Three pairs of legs", "Two pairs of wings", "Closed circulatory system", "Tracheal respiratory system"],
    options_hi: ["तीन जोड़े पैर", "दो जोड़े पंख", "बंद परिसंचरण प्रणाली", "ट्रेकियल श्वसन तंत्र"],
    answer_en: "Closed circulatory system",
    answer_hi: "बंद परिसंचरण प्रणाली",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "The hormone that promotes seed dormancy is:",
    question_hi: "बीज निष्क्रियता को बढ़ावा देने वाला हार्मोन है:",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
    answer_en: "Abscisic acid",
    answer_hi: "एब्सिसिक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "Which of the following is not a function of the stomach?",
    question_hi: "निम्न में से कौन-सा पेट का कार्य नहीं है?",
    options_en: ["Storage of food", "Partial digestion of proteins", "Absorption of alcohol", "Absorption of glucose"],
    options_hi: ["भोजन का भंडारण", "प्रोटीन का आंशिक पाचन", "अल्कोहल का अवशोषण", "ग्लूकोज़ का अवशोषण"],
    answer_en: "Absorption of glucose",
    answer_hi: "ग्लूकोज़ का अवशोषण",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "The formation of fertilization membrane after fertilization is to:",
    question_hi: "निषेचन के बाद निषेचन झिल्ली बनने का कार्य है:",
    options_en: ["Prevent polyspermy", "Provide nutrition", "Aid in cleavage", "Form the blastula"],
    options_hi: ["पॉलीस्पर्मी रोकना", "पोषण प्रदान करना", "क्लीवेज में सहायता", "ब्लास्टुला बनाना"],
    answer_en: "Prevent polyspermy",
    answer_hi: "पॉलीस्पर्मी रोकना",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "Which of the following is not a characteristic of the genetic code?",
    question_hi: "निम्न में से कौन-सा आनुवांशिक कूट का गुण नहीं है?",
    options_en: ["Universal", "Non-overlapping", "Ambiguous", "Degenerate"],
    options_hi: ["सार्वभौमिक", "गैर-ओवरलैपिंग", "अस्पष्ट", "डीजनरेट"],
    answer_en: "Ambiguous",
    answer_hi: "अस्पष्ट",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "The enzyme that digests cellulose in ruminants is produced by:",
    question_hi: "जुगाली करने वाले जानवरों में सेल्यूलोज़ पचाने वाला एंजाइम किसके द्वारा बनता है?",
    options_en: ["Salivary glands", "Pancreas", "Microbial symbionts", "Liver"],
    options_hi: ["लार ग्रंथियाँ", "अग्न्याशय", "सूक्ष्मजीवी सहजीवी", "यकृत"],
    answer_en: "Microbial symbionts",
    answer_hi: "सूक्ष्मजीवी सहजीवी",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "Which of the following is not a function of the skin?",
    question_hi: "निम्न में से कौन-सा त्वचा का कार्य नहीं है?",
    options_en: ["Protection", "Temperature regulation", "Vitamin D synthesis", "Glycogen storage"],
    options_hi: ["सुरक्षा", "तापमान नियमन", "विटामिन D संश्लेषण", "ग्लाइकोजन भंडारण"],
    answer_en: "Glycogen storage",
    answer_hi: "ग्लाइकोजन भंडारण",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "The process of conversion of glycogen to glucose is called:",
    question_hi: "ग्लाइकोजन का ग्लूकोज़ में परिवर्तन कहलाता है:",
    options_en: ["Glycogenesis", "Glycogenolysis", "Gluconeogenesis", "Glycolysis"],
    options_hi: ["ग्लाइकोजेनेसिस", "ग्लाइकोजेनोलिसिस", "ग्लूकोनियोजेनेसिस", "ग्लाइकोलिसिस"],
    answer_en: "Glycogenolysis",
    answer_hi: "ग्लाइकोजेनोलिसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "Which of the following is not a characteristic of viruses?",
    question_hi: "निम्न में से कौन-सा वायरस का गुण नहीं है?",
    options_en: ["Contain DNA or RNA", "Can be crystallized", "Have their own metabolism", "Obligate parasites"],
    options_hi: ["DNA या RNA होता है", "क्रिस्टलीकृत किए जा सकते हैं", "अपना स्वयं का चयापचय होता है", "अनिवार्य परजीवी"],
    answer_en: "Have their own metabolism",
    answer_hi: "अपना स्वयं का चयापचय होता है",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "The hormone that promotes flowering in plants is:",
    question_hi: "पौधों में पुष्पन को बढ़ावा देने वाला हार्मोन है:",
    options_en: ["Florigen", "Auxin", "Gibberellin", "Cytokinin"],
    options_hi: ["फ्लोरिजेन", "ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन"],
    answer_en: "Florigen",
    answer_hi: "फ्लोरिजेन",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which of the following is not a function of the liver?",
    question_hi: "निम्न में से कौन-सा यकृत का कार्य नहीं है?",
    options_en: ["Bile production", "Glycogen storage", "Detoxification", "Insulin production"],
    options_hi: ["पित्त उत्पादन", "ग्लाइकोजन भंडारण", "डिटॉक्सिफिकेशन", "इंसुलिन उत्पादन"],
    answer_en: "Insulin production",
    answer_hi: "इंसुलिन उत्पादन",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "The process of conversion of glucose to pyruvate produces a net gain of:",
    question_hi: "ग्लूकोज़ से पायरुवेट बनने की प्रक्रिया में कुल लाभ होता है:",
    options_en: ["2 ATP", "4 ATP", "8 ATP", "36 ATP"],
    options_hi: ["2 ATP", "4 ATP", "8 ATP", "36 ATP"],
    answer_en: "2 ATP",
    answer_hi: "2 ATP",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "Which of the following is not a characteristic of enzymes?",
    question_hi: "निम्न में से कौन-सा एंजाइम का गुण नहीं है?",
    options_en: ["Protein nature", "Specific in action", "Consumed in reaction", "Lower activation energy"],
    options_hi: ["प्रोटीन प्रकृति", "क्रिया में विशिष्ट", "अभिक्रिया में उपभोग होते हैं", "सक्रियण ऊर्जा घटाते हैं"],
    answer_en: "Consumed in reaction",
    answer_hi: "अभिक्रिया में उपभोग होते हैं",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "The hormone that promotes fruit ripening is:",
    question_hi: "फल पकने को बढ़ावा देने वाला हार्मोन है:",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एथिलीन"],
    answer_en: "Ethylene",
    answer_hi: "एथिलीन",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "Which of the following is not a function of the kidney?",
    question_hi: "निम्न में से कौन-सा गुर्दे का कार्य नहीं है?",
    options_en: ["Excretion", "Osmoregulation", "Acid-base balance", "Glycogen storage"],
    options_hi: ["उत्सर्जन", "परासरणीय विनियमन", "अम्ल-क्षार संतुलन", "ग्लाइकोजन भंडारण"],
    answer_en: "Glycogen storage",
    answer_hi: "ग्लाइकोजन भंडारण",
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