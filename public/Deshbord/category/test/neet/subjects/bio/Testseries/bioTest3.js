const questions = [
  {
    num: 1,
    question_en: "Which of the following is NOT a property of enzymes?",
    question_hi: "निम्न में से कौन एंजाइम की विशेषता नहीं है?",
    options_en: [
      "They are proteinaceous in nature",
      "They are used up in the reaction",
      "They are specific in their action",
      "They lower the activation energy"
    ],
    options_hi: [
      "वे प्रोटीन प्रकृति के होते हैं",
      "वे अभिक्रिया में उपयोग हो जाते हैं",
      "वे अपनी क्रिया में विशिष्ट होते हैं",
      "वे सक्रियण ऊर्जा को कम करते हैं"
    ],
    answer_en: "They are used up in the reaction",
    answer_hi: "वे अभिक्रिया में उपयोग हो जाते हैं",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "The 'Lock and Key' model for enzyme action was proposed by:",
    question_hi: "'लॉक एंड की' मॉडल का प्रस्ताव किसने दिया था?",
    options_en: ["Emil Fischer", "Francis Crick", "Charles Darwin", "James Watson"],
    options_hi: ["एमिल फिशर", "फ्रांसिस क्रिक", "चार्ल्स डार्विन", "जेम्स वॉटसन"],
    answer_en: "Emil Fischer",
    answer_hi: "एमिल फिशर",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "Which plant hormone is responsible for the triple response in pea plants?",
    question_hi: "मटर के पौधों में ट्रिपल प्रतिक्रिया के लिए कौन सा हार्मोन जिम्मेदार है?",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एथिलीन"],
    answer_en: "Ethylene",
    answer_hi: "एथिलीन",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "The process of conversion of pyruvate to acetyl CoA occurs in the:",
    question_hi: "पायरूवेट का एसीटिल CoA में परिवर्तन कहाँ होता है?",
    options_en: ["Cytoplasm", "Mitochondrial matrix", "Inner mitochondrial membrane", "Nucleus"],
    options_hi: ["साइटोप्लाज्म", "माइटोकॉन्ड्रियल मैट्रिक्स", "इनर माइटोकॉन्ड्रियल मेम्ब्रेन", "न्यूक्लियस"],
    answer_en: "Mitochondrial matrix",
    answer_hi: "माइटोकॉन्ड्रियल मैट्रिक्स",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "Which of the following is a parasitic plant?",
    question_hi: "निम्न में से कौन सा एक परजीवी पौधा है?",
    options_en: ["Cuscuta", "Mushroom", "Yeast", "Lichen"],
    options_hi: ["कसक्यूटा", "मशरूम", "यीस्ट", "लाइकेन"],
    answer_en: "Cuscuta",
    answer_hi: "कसक्यूटा",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "The fluid-filled cavity in a blastula is called:",
    question_hi: "ब्लास्टुला में तरल से भरी गुहा को क्या कहा जाता है?",
    options_en: ["Blastocoel", "Archenteron", "Coelom", "Gastrocoel"],
    options_hi: ["ब्लास्टोसील", "आर्केंटरॉन", "कोएलम", "गैस्ट्रोसील"],
    answer_en: "Blastocoel",
    answer_hi: "ब्लास्टोसील",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "The hormone that stimulates the secretion of gastric juice is:",
    question_hi: "गैस्ट्रिक रस के स्राव को उत्तेजित करने वाला हार्मोन है:",
    options_en: ["Gastrin", "Secretin", "Cholecystokinin", "Enterogastrone"],
    options_hi: ["गैस्ट्रिन", "सीक्रेटिन", "कोलीसिस्टोकाइनिन", "एंटरोगैस्ट्रोन"],
    answer_en: "Gastrin",
    answer_hi: "गैस्ट्रिन",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which of the following is a connecting link between reptiles and birds?",
    question_hi: "निम्न में से कौन सरीसृपों और पक्षियों के बीच कड़ी है?",
    options_en: ["Archaeopteryx", "Peripatus", "Platypus", "Echidna"],
    options_hi: ["आर्कियोप्टेरिक्स", "पेरिपेटस", "प्लेटिपस", "एकिडना"],
    answer_en: "Archaeopteryx",
    answer_hi: "आर्कियोप्टेरिक्स",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "The final electron acceptor in the mitochondrial electron transport chain is:",
    question_hi: "माइटोकॉन्ड्रियल इलेक्ट्रॉन ट्रांसपोर्ट श्रृंखला में अंतिम इलेक्ट्रॉन अभिग्राही है:",
    options_en: ["NAD+", "FAD", "Cytochrome c", "Oxygen"],
    options_hi: ["NAD+", "FAD", "साइटोक्रोम c", "ऑक्सीजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "The type of placenta found in primates, including humans, is:",
    question_hi: "प्राइमेट्स (जिसमें मनुष्य भी शामिल हैं) में पाई जाने वाली प्लेसेंटा का प्रकार है:",
    options_en: ["Diffuse", "Zonary", "Discoidal", "Cotyledonary"],
    options_hi: ["डिफ्यूज", "ज़ोनरी", "डिस्कोइडल", "कॉटिलेडनरी"],
    answer_en: "Discoidal",
    answer_hi: "डिस्कोइडल",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "The process of formation of sperms is called:",
    question_hi: "शुक्राणुओं के निर्माण की प्रक्रिया को क्या कहा जाता है?",
    options_en: ["Oogenesis", "Spermatogenesis", "Spermiogenesis", "Spermiation"],
    options_hi: ["ओओजेनिसिस", "स्पर्मेटोजेनेसिस", "स्पर्मीओजेनेसिस", "स्पर्मीएशन"],
    answer_en: "Spermatogenesis",
    answer_hi: "स्पर्मेटोजेनेसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which of the following is a primary lymphoid organ?",
    question_hi: "निम्न में से कौन प्राथमिक लसीका अंग है?",
    options_en: ["Spleen", "Lymph node", "Thymus", "Tonsils"],
    options_hi: ["स्प्लीन", "लिम्फ नोड", "थाइमस", "टॉन्सिल"],
    answer_en: "Thymus",
    answer_hi: "थाइमस",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "The enzyme that fixes CO2 in C4 plants is:",
    question_hi: "C4 पौधों में CO2 को फिक्स करने वाला एंजाइम है:",
    options_en: ["RuBisCO", "PEP carboxylase", "Carbonic anhydrase", "Catalase"],
    options_hi: ["रुबिस्को", "PEP कार्बोक्सिलेज", "कार्बोनिक एनहाइड्रेज", "कैटालेज"],
    answer_en: "PEP carboxylase",
    answer_hi: "PEP कार्बोक्सिलेज",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "The phenomenon where a single gene has multiple phenotypic effects is known as:",
    question_hi: "वह घटना जिसमें एक जीन के कई फेनोटाइपिक प्रभाव होते हैं, कहलाती है:",
    options_en: ["Polygenic inheritance", "Pleiotropy", "Codominance", "Epistasis"],
    options_hi: ["पॉलीजेनिक इनहेरिटेंस", "प्लीओट्रॉपी", "कोडॉमिनेंस", "एपिस्टेसिस"],
    answer_en: "Pleiotropy",
    answer_hi: "प्लीओट्रॉपी",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "The cellular structure that helps in the formation of the spindle apparatus during cell division is:",
    question_hi: "कोशिका विभाजन के दौरान स्पिंडल तंत्र के निर्माण में सहायता करने वाला कोशिकांग है:",
    options_en: ["Centriole", "Ribosome", "Lysosome", "Peroxisome"],
    options_hi: ["सेंट्रिओल", "राइबोसोम", "लाइसोसोम", "पेरॉक्सिसोम"],
    answer_en: "Centriole",
    answer_hi: "सेंट्रिओल",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "The disease caused by the deficiency of iodine is:",
    question_hi: "आयोडीन की कमी से होने वाला रोग है:",
    options_en: ["Goitre", "Cretinism", "Both Goitre and Cretinism", "Myxoedema"],
    options_hi: ["घेघा", "क्रेटिनिज़्म", "घेघा और क्रेटिनिज़्म दोनों", "मिक्सोएडिमा"],
    answer_en: "Both Goitre and Cretinism",
    answer_hi: "घेघा और क्रेटिनिज़्म दोनों",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "The part of the nephron where maximum reabsorption of water occurs is:",
    question_hi: "नेफ्रॉन का वह भाग जहाँ अधिकतम पानी का पुनःअवशोषण होता है:",
    options_en: ["Proximal Convoluted Tubule", "Loop of Henle", "Distal Convoluted Tubule", "Collecting Duct"],
    options_hi: ["प्रॉक्सिमल कन्वोल्यूटेड ट्यूब्यूल", "हेन्ले का लूप", "डिस्टल कन्वोल्यूटेड ट्यूब्यूल", "कलेक्टिंग डक्ट"],
    answer_en: "Proximal Convoluted Tubule",
    answer_hi: "प्रॉक्सिमल कन्वोल्यूटेड ट्यूब्यूल",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "The genetic disorder caused by the presence of an extra X chromosome in a male (44+XXY) is:",
    question_hi: "पुरुष (44+XXY) में अतिरिक्त X क्रोमोसोम की उपस्थिति से होने वाला आनुवांशिक विकार है:",
    options_en: ["Down's syndrome", "Turner's syndrome", "Klinefelter's syndrome", "Super female"],
    options_hi: ["डाउन सिंड्रोम", "टर्नर सिंड्रोम", "क्लाइनफेल्टर सिंड्रोम", "सुपर फीमेल"],
    answer_en: "Klinefelter's syndrome",
    answer_hi: "क्लाइनफेल्टर सिंड्रोम",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "The process of copying genetic information from DNA to RNA is called:",
    question_hi: "DNA से RNA में आनुवंशिक सूचना की प्रतिलिपि बनाने की प्रक्रिया कहलाती है:",
    options_en: ["Translation", "Transcription", "Replication", "Transformation"],
    options_hi: ["ट्रांसलेशन", "ट्रांसक्रिप्शन", "रिप्लिकेशन", "ट्रांसफॉर्मेशन"],
    answer_en: "Transcription",
    answer_hi: "ट्रांसक्रिप्शन",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which of the following is a symbiotic association between fungi and roots of higher plants?",
    question_hi: "कवक और उच्च पौधों की जड़ों के बीच सहजीवी संबंध कहलाता है:",
    options_en: ["Lichen", "Mycorrhiza", "Rhizobium", "Cyanobacteria"],
    options_hi: ["लाइकेन", "माइकोराइजा", "राइजोबियम", "सायनोबैक्टीरिया"],
    answer_en: "Mycorrhiza",
    answer_hi: "माइकोराइजा",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "The stage of mitosis where chromosomes align at the equator of the cell is:",
    question_hi: "मिटोसिस का वह चरण जिसमें क्रोमोसोम कोशिका के इक्वेटर पर स्थित होते हैं:",
    options_en: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
    options_hi: ["प्रोफेज", "मेटाफेज", "एनाफेज", "टेलोफेज"],
    answer_en: "Metaphase",
    answer_hi: "मेटाफेज",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "The hormone that promotes the closure of stomata during water stress is:",
    question_hi: "पानी की कमी के दौरान स्टोमाटा के बंद होने को बढ़ावा देने वाला हार्मोन है:",
    options_en: ["Auxin", "Cytokinin", "Abscisic acid", "Gibberellin"],
    options_hi: ["ऑक्सिन", "साइटोकाइनिन", "अब्सिसिक एसिड", "जिबरेलिन"],
    answer_en: "Abscisic acid",
    answer_hi: "अब्सिसिक एसिड",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "The vector for the disease 'Kala-azar' is:",
    question_hi: "'काला-आज़ार' बीमारी का वाहक है:",
    options_en: ["Anopheles mosquito", "Sandfly", "Tsetse fly", "Housefly"],
    options_hi: ["एनोफिलीज़ मच्छर", "सैंडफ्लाई", "ट्सेट्से मक्खी", "हाउसफ्लाई"],
    answer_en: "Sandfly",
    answer_hi: "सैंडफ्लाई",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "The process by which water moves out of the cell when placed in a hypertonic solution is called:",
    question_hi: "हाइपरटोनिक विलयन में रखने पर कोशिका से पानी बाहर निकलने की प्रक्रिया कहलाती है:",
    options_en: ["Plasmolysis", "Imbibition", "Diffusion", "Osmosis"],
    options_hi: ["प्लाज्मोलाइसिस", "इम्बिबिशन", "प्रसार", "परासरण"],
    answer_en: "Plasmolysis",
    answer_hi: "प्लाज्मोलाइसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "The first product of CO2 fixation in C3 plants is:",
    question_hi: "C3 पौधों में CO2 फिक्सेशन का प्रथम उत्पाद है:",
    options_en: ["3-Phosphoglyceric acid", "Phosphoenolpyruvate", "Oxaloacetic acid", "Malic acid"],
    options_hi: ["3-फॉस्फोग्लिसेरिक अम्ल", "फॉस्फोएनॉलपायरूवेट", "ऑक्सालोएसेटिक अम्ल", "मैलिक अम्ल"],
    answer_en: "3-Phosphoglyceric acid",
    answer_hi: "3-फॉस्फोग्लिसेरिक अम्ल",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "The part of the human ear that converts sound vibrations into electrical signals is:",
    question_hi: "मानव कान का वह भाग जो ध्वनि कंपन को विद्युत संकेतों में बदलता है:",
    options_en: ["Tympanic membrane", "Malleus, Incus, Stapes", "Cochlea", "Auditory nerve"],
    options_hi: ["टिम्पेनिक मेम्ब्रेन", "मेलियस, इन्कस, स्टेप्स", "कॉक्लिया", "श्रवण तंत्रिका"],
    answer_en: "Cochlea",
    answer_hi: "कॉक्लिया",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "The type of RNA that carries genetic information from DNA to the ribosome is:",
    question_hi: "वह RNA का प्रकार जो DNA से अनुवांशिक सूचना राइबोसोम तक ले जाता है:",
    options_en: ["mRNA", "tRNA", "rRNA", "snRNA"],
    options_hi: ["mRNA", "tRNA", "rRNA", "snRNA"],
    answer_en: "mRNA",
    answer_hi: "mRNA",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "The disease caused by a nematode that inhabits the small intestine of humans is:",
    question_hi: "वह रोग जो एक नेमाटोड द्वारा मनुष्यों की छोटी आंत में होने से होता है:",
    options_en: ["Ascariasis", "Filariasis", "Amoebiasis", "Typhoid"],
    options_hi: ["एस्कारियासिस", "फाइलेरियासिस", "अमीबियासिस", "टायफाइड"],
    answer_en: "Ascariasis",
    answer_hi: "एस्कारियासिस",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "The process of formation of a mature female gamete is called:",
    question_hi: "परिपक्व मादा गैमीट के निर्माण की प्रक्रिया कहलाती है:",
    options_en: ["Spermatogenesis", "Oogenesis", "Gametogenesis", "Mitosis"],
    options_hi: ["स्पर्मेटोजेनेसिस", "ओओजेनिसिस", "गैमीटोजेनेसिस", "माइटोसिस"],
    answer_en: "Oogenesis",
    answer_hi: "ओओजेनिसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "The enzyme that dissolves the fibrin clot is:",
    question_hi: "फाइब्रिन क्लॉट को घोलने वाला एंजाइम है:",
    options_en: ["Thrombin", "Fibrinogen", "Plasmin", "Prothrombin"],
    options_hi: ["थ्रोम्बिन", "फाइब्रिनोजेन", "प्लास्मिन", "प्रोथ्रोम्बिन"],
    answer_en: "Plasmin",
    answer_hi: "प्लास्मिन",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "The theory of 'Natural Selection' was proposed by:",
    question_hi: "'नेचुरल सेलेक्शन' का सिद्धांत किसने प्रस्तावित किया था?",
    options_en: ["Gregor Mendel", "Charles Darwin", "Hugo de Vries", "Jean-Baptiste Lamarck"],
    options_hi: ["ग्रेगर मेंडल", "चार्ल्स डार्विन", "ह्यूगो डी व्रीस", "जीन बैप्टिस्ट लैमार्क"],
    answer_en: "Charles Darwin",
    answer_hi: "चार्ल्स डार्विन",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "The part of the brain that controls the respiratory rhythm is:",
    question_hi: "मस्तिष्क का वह भाग जो श्वसन की लय को नियंत्रित करता है:",
    options_en: ["Cerebrum", "Cerebellum", "Pons", "Medulla oblongata"],
    options_hi: ["सेरेब्रुम", "सेरेबेलम", "पॉन्स", "मेडुला ऑब्लोंगाटा"],
    answer_en: "Medulla oblongata",
    answer_hi: "मेडुला ऑब्लोंगाटा",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "The process of transfer of pollen from the anther of one flower to the stigma of another flower on the same plant is called:",
    question_hi: "एक ही पौधे के एक फूल के पुंकेसर से दूसरे फूल के वर्तिकाग्र पर पराग के स्थानांतरण की प्रक्रिया कहलाती है:",
    options_en: ["Autogamy", "Geitonogamy", "Xenogamy", "Cleistogamy"],
    options_hi: ["ऑटोगैमी", "जाइटोनोगैमी", "जेनोगैमी", "क्लाइस्टोगैमी"],
    answer_en: "Geitonogamy",
    answer_hi: "जाइटोनोगैमी",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "The molecule that acts as a mobile carrier between the cytochrome complex and PS I is:",
    question_hi: "साइटोक्रोम कॉम्प्लेक्स और PS I के बीच मोबाइल कैरियर का कार्य करने वाला अणु है:",
    options_en: ["Ferredoxin", "Plastocyanin", "Cytochrome b6f", "Plastoquinone"],
    options_hi: ["फेर्रेडॉक्सिन", "प्लास्टोसाइनिन", "साइटोक्रोम b6f", "प्लास्टोक्विनोन"],
    answer_en: "Plastocyanin",
    answer_hi: "प्लास्टोसाइनिन",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "The disease caused by the deficiency of vitamin C is:",
    question_hi: "विटामिन C की कमी से होने वाला रोग है:",
    options_en: ["Scurvy", "Rickets", "Beri-Beri", "Night Blindness"],
    options_hi: ["स्कर्वी", "रिकेट्स", "बेरी-बेरी", "नाइट ब्लाइंडनेस"],
    answer_en: "Scurvy",
    answer_hi: "स्कर्वी",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "The structure that connects the placenta to the embryo is:",
    question_hi: "वह संरचना जो प्लेसेंटा को भ्रूण से जोड़ती है:",
    options_en: ["Amnion", "Chorion", "Umbilical cord", "Yolk sac"],
    options_hi: ["एम्नियन", "कोरियन", "अम्बिलिकल कॉर्ड", "योक सैक"],
    answer_en: "Umbilical cord",
    answer_hi: "अम्बिलिकल कॉर्ड",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "The phase of the menstrual cycle during which the corpus luteum is formed is:",
    question_hi: "मासिक धर्म चक्र का वह चरण जिसमें कॉर्पस ल्यूटियम बनता है:",
    options_en: ["Follicular phase", "Ovulatory phase", "Luteal phase", "Menstrual phase"],
    options_hi: ["फॉलिक्युलर चरण", "ओव्यूलेटरी चरण", "ल्यूटियल चरण", "मासिक धर्म चरण"],
    answer_en: "Luteal phase",
    answer_hi: "ल्यूटियल चरण",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "The process by which white blood cells move out of capillaries into tissues is called:",
    question_hi: "श्वेत रक्त कोशिकाएँ केशिकाओं से निकलकर ऊतकों में प्रवेश करती हैं, इस प्रक्रिया को क्या कहा जाता है?",
    options_en: ["Diapedesis", "Phagocytosis", "Pinocytosis", "Chemotaxis"],
    options_hi: ["डायापेडेसिस", "फैगोसाइटोसिस", "पिनोसाइटोसिस", "कीमोटैक्सिस"],
    answer_en: "Diapedesis",
    answer_hi: "डायापेडेसिस",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "The genetic material in prokaryotes is:",
    question_hi: "प्रोकैरियोट्स में अनुवांशिक सामग्री होती है:",
    options_en: ["Linear DNA", "Circular DNA", "RNA", "Proteins"],
    options_hi: ["लीनियर DNA", "सर्कुलर DNA", "RNA", "प्रोटीन्स"],
    answer_en: "Circular DNA",
    answer_hi: "सर्कुलर DNA",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "The hormone that is antagonistic to insulin is:",
    question_hi: "वह हार्मोन जो इंसुलिन के विपरीत कार्य करता है:",
    options_en: ["Glucagon", "Somatostatin", "Progesterone", "Thyroxine"],
    options_hi: ["ग्लूकागॉन", "सोमैटोस्टेटिन", "प्रोजेस्टेरोन", "थाइरोक्सिन"],
    answer_en: "Glucagon",
    answer_hi: "ग्लूकागॉन",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "The type of epithelium found in the lining of the fallopian tube is:",
    question_hi: "फैलोपियन ट्यूब की लाइनिंग में पाया जाने वाला उपकला प्रकार है:",
    options_en: ["Squamous", "Cuboidal", "Columnar", "Ciliated"],
    options_hi: ["स्क्वैमस", "क्यूबॉयडल", "कॉलम्नर", "सिलिएटेड"],
    answer_en: "Ciliated",
    answer_hi: "सिलिएटेड",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "The process of formation of mRNA from a DNA template is catalyzed by:",
    question_hi: "DNA टेम्पलेट से mRNA बनने की प्रक्रिया को कौन उत्प्रेरित करता है?",
    options_en: ["DNA polymerase", "RNA polymerase", "Reverse transcriptase", "Helicase"],
    options_hi: ["DNA पोलीमरेज़", "RNA पोलीमरेज़", "रिवर्स ट्रांसक्रिप्टेज़", "हेलिकेज़"],
    answer_en: "RNA polymerase",
    answer_hi: "RNA पोलीमरेज़",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "The disease caused by the fungus Puccinia graminis is:",
    question_hi: "Puccinia graminis कवक द्वारा होने वाला रोग है:",
    options_en: ["Black rust of wheat", "White rust of crucifers", "Brown rust of wheat", "Smut of rice"],
    options_hi: ["गेहूं का काला रतुआ", "क्रूसिफर्स का वाइट रस्ट", "गेहूं का ब्राउन रस्ट", "चावल का स्मट"],
    answer_en: "Black rust of wheat",
    answer_hi: "गेहूं का काला रतुआ",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "The part of the chloroplast where the light reaction of photosynthesis takes place is:",
    question_hi: "क्लोरोप्लास्ट का वह भाग जहाँ प्रकाश अभिक्रिया होती है:",
    options_en: ["Stroma", "Grana", "Inner membrane", "Outer membrane"],
    options_hi: ["स्ट्रोमा", "ग्राना", "इनर मेम्ब्रेन", "आउटर मेम्ब्रेन"],
    answer_en: "Grana",
    answer_hi: "ग्राना",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "The hormone that stimulates the breakdown of glycogen into glucose in the liver is:",
    question_hi: "वह हार्मोन जो यकृत में ग्लाइकोजन को ग्लूकोज में तोड़ने को उत्तेजित करता है:",
    options_en: ["Insulin", "Glucagon", "Somatostatin", "Gastrin"],
    options_hi: ["इंसुलिन", "ग्लूकागॉन", "सोमैटोस्टेटिन", "गैस्ट्रिन"],
    answer_en: "Glucagon",
    answer_hi: "ग्लूकागॉन",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "The process of conversion of ammonia into nitrites is carried out by:",
    question_hi: "अमोनिया को नाइट्राइट में बदलने की प्रक्रिया किसके द्वारा की जाती है?",
    options_en: ["Nitrosomonas", "Nitrobacter", "Rhizobium", "Azotobacter"],
    options_hi: ["नाइट्रोसोमोनास", "नाइट्रोबैक्टर", "राइजोबियम", "एज़ोटोबैक्टर"],
    answer_en: "Nitrosomonas",
    answer_hi: "नाइट्रोसोमोनास",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "The structure that prevents the entry of food into the trachea during swallowing is:",
    question_hi: "निगलने के दौरान भोजन को श्वासनली में प्रवेश करने से रोकने वाली संरचना है:",
    options_en: ["Epiglottis", "Glottis", "Larynx", "Pharynx"],
    options_hi: ["एपिग्लॉटिस", "ग्लॉटिस", "लेरिंक्स", "फैरिंक्स"],
    answer_en: "Epiglottis",
    answer_hi: "एपिग्लॉटिस",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "The type of inheritance where both alleles are expressed equally in the heterozygote is called:",
    question_hi: "वह वंशागति जिसमें विषमयुग्मजी में दोनों एलील समान रूप से व्यक्त होते हैं, कहलाता है:",
    options_en: ["Incomplete dominance", "Codominance", "Multiple alleles", "Polygenic inheritance"],
    options_hi: ["अपूर्ण प्रभुत्व", "कोडॉमिनेंस", "मल्टीपल एलील", "पॉलीजेनिक वंशागति"],
    answer_en: "Codominance",
    answer_hi: "कोडॉमिनेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "The enzyme that seals the nicks between Okazaki fragments is:",
    question_hi: "ओकाज़ाकी खंडों के बीच नॉच को सील करने वाला एंजाइम है:",
    options_en: ["DNA polymerase I", "DNA polymerase III", "DNA ligase", "Helicase"],
    options_hi: ["DNA पोलीमरेज़ I", "DNA पोलीमरेज़ III", "DNA लाइगेज़", "हेलिकेज़"],
    answer_en: "DNA ligase",
    answer_hi: "DNA लाइगेज़",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "The disease caused by the bacterium Vibrio cholerae is:",
    question_hi: "Vibrio cholerae बैक्टीरिया द्वारा होने वाली बीमारी है:",
    options_en: ["Typhoid", "Cholera", "Tuberculosis", "Pneumonia"],
    options_hi: ["टाइफाइड", "कॉलेरा", "ट्यूबरकुलोसिस", "निमोनिया"],
    answer_en: "Cholera",
    answer_hi: "कॉलेरा",
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