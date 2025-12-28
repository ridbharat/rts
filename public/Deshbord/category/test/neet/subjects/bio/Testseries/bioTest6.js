const questions = [
  {
    num: 1,
    question_en: "The process of conversion of atmospheric nitrogen into ammonia is called:",
    question_hi: "वायुमंडलीय नाइट्रोजन को अमोनिया में बदलने की प्रक्रिया कहलाती है:",
    options_en: ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
    options_hi: ["नाइट्रोजन फिक्सेशन", "नाइट्रीफिकेशन", "डिनाइट्रीफिकेशन", "अमोनिफिकेशन"],
    answer_en: "Nitrogen fixation",
    answer_hi: "नाइट्रोजन फिक्सेशन",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "Which of the following is NOT a function of the kidney?",
    question_hi: "निम्न में से कौन-सा गुर्दे का कार्य नहीं है?",
    options_en: ["Excretion of urea", "Regulation of blood pressure", "Production of bile", "Maintenance of electrolyte balance"],
    options_hi: ["यूरिया का उत्सर्जन", "रक्तचाप का नियंत्रण", "पित्त का निर्माण", "इलेक्ट्रोलाइट संतुलन बनाए रखना"],
    answer_en: "Production of bile",
    answer_hi: "पित्त का निर्माण",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "The hormone that stimulates milk ejection during breastfeeding is:",
    question_hi: "स्तनपान के दौरान दूध निष्कासन को उत्तेजित करने वाला हार्मोन है:",
    options_en: ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
    options_hi: ["ऑक्सीटोसिन", "प्रोलैक्टिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
    answer_en: "Oxytocin",
    answer_hi: "ऑक्सीटोसिन",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "The cellular organelle responsible for cellular respiration is the:",
    question_hi: "कोशिकीय श्वसन के लिए उत्तरदायी कोशिकांग है:",
    options_en: ["Mitochondria", "Ribosome", "Golgi apparatus", "Endoplasmic reticulum"],
    options_hi: ["माइटोकॉन्ड्रिया", "राइबोसोम", "गोल्जी तंत्र", "एंडोप्लाज्मिक रेटिकुलम"],
    answer_en: "Mitochondria",
    answer_hi: "माइटोकॉन्ड्रिया",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "The disease caused by the bacterium Salmonella typhi is:",
    question_hi: "बैक्टीरिया सैल्मोनेला टाइफी द्वारा उत्पन्न रोग है:",
    options_en: ["Typhoid", "Cholera", "Tuberculosis", "Pneumonia"],
    options_hi: ["टाइफॉयड", "कॉलरा", "ट्यूबरकुलोसिस", "निमोनिया"],
    answer_en: "Typhoid",
    answer_hi: "टाइफॉयड",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "The part of the flower that receives pollen during pollination is the:",
    question_hi: "परागण के दौरान फूल का वह भाग जो पराग लेता है:",
    options_en: ["Stigma", "Anther", "Ovary", "Style"],
    options_hi: ["स्टिग्मा", "एंथर", "अंडाशय", "स्टाइल"],
    answer_en: "Stigma",
    answer_hi: "स्टिग्मा",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "The enzyme that converts lactose into glucose and galactose is:",
    question_hi: "वह एंजाइम जो लैक्टोज को ग्लूकोज और गैलेक्टोज में परिवर्तित करता है:",
    options_en: ["Lactase", "Maltase", "Sucrase", "Amylase"],
    options_hi: ["लैक्टेज", "माल्टेज", "सुक्रेज", "एमाइलेज"],
    answer_en: "Lactase",
    answer_hi: "लैक्टेज",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "The type of RNA that carries genetic information from nucleus to cytoplasm is:",
    question_hi: "वह RNA प्रकार जो नाभिक से साइटोप्लाज्म तक अनुवांशिक सूचना ले जाता है:",
    options_en: ["mRNA", "tRNA", "rRNA", "snRNA"],
    options_hi: ["mRNA", "tRNA", "rRNA", "snRNA"],
    answer_en: "mRNA",
    answer_hi: "mRNA",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "The process of movement of sugars from leaves to other parts of the plant is called:",
    question_hi: "पत्तियों से पौधे के अन्य भागों तक शर्करा के परिवहन की प्रक्रिया कहलाती है:",
    options_en: ["Translocation", "Transpiration", "Transformation", "Transportation"],
    options_hi: ["ट्रांसलोकेशन", "ट्रांसपिरेशन", "ट्रांसफॉर्मेशन", "ट्रांसपोर्टेशन"],
    answer_en: "Translocation",
    answer_hi: "ट्रांसलोकेशन",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "The plant hormone that promotes leaf abscission is:",
    question_hi: "वह पादप हार्मोन जो पत्ती झड़ने को बढ़ावा देता है:",
    options_en: ["Abscisic acid", "Ethylene", "Auxin", "Cytokinin"],
    options_hi: ["एब्सिसिक एसिड", "एथिलीन", "ऑक्सिन", "साइटोकाइनिन"],
    answer_en: "Ethylene",
    answer_hi: "एथिलीन",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "The disease caused by vitamin D deficiency is:",
    question_hi: "विटामिन D की कमी से होने वाला रोग है:",
    options_en: ["Rickets", "Scurvy", "Beri-beri", "Pellagra"],
    options_hi: ["रिकेट्स", "स्कर्वी", "बेरी-बेरी", "पेलाग्रा"],
    answer_en: "Rickets",
    answer_hi: "रिकेट्स",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "The part of the brain that controls voluntary actions is the:",
    question_hi: "मस्तिष्क का वह भाग जो स्वैच्छिक क्रियाओं को नियंत्रित करता है:",
    options_en: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pons"],
    options_hi: ["सेरेब्रुम", "सेरेबेलम", "मेडुला ऑब्लोंगाटा", "पोंस"],
    answer_en: "Cerebrum",
    answer_hi: "सेरेब्रुम",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "The process of formation of white blood cells is called:",
    question_hi: "श्वेत रक्त कोशिकाओं के निर्माण की प्रक्रिया कहलाती है:",
    options_en: ["Leucopoiesis", "Erythropoiesis", "Thrombopoiesis", "Hemopoiesis"],
    options_hi: ["ल्यूकोपोएजिस", "एरिथ्रोपोएजिस", "थ्रोम्बोपोएजिस", "हीमोपोएजिस"],
    answer_en: "Leucopoiesis",
    answer_hi: "ल्यूकोपोएजिस",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "The enzyme that begins protein digestion in the small intestine is:",
    question_hi: "छोटी आंत में प्रोटीन पाचन शुरू करने वाला एंजाइम है:",
    options_en: ["Trypsin", "Pepsin", "Amylase", "Lipase"],
    options_hi: ["ट्रिप्सिन", "पेप्सिन", "एमाइलेज", "लिपेज"],
    answer_en: "Trypsin",
    answer_hi: "ट्रिप्सिन",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "The genetic disorder characterized by an extra chromosome 21 is:",
    question_hi: "अतिरिक्त 21वें गुणसूत्र की उपस्थिति से पहचाना जाने वाला अनुवांशिक विकार है:",
    options_en: ["Down's syndrome", "Turner's syndrome", "Klinefelter's syndrome", "Edward's syndrome"],
    options_hi: ["डाउन सिंड्रोम", "टर्नर सिंड्रोम", "क्लाइनफेल्टर सिंड्रोम", "एडवर्ड्स सिंड्रोम"],
    answer_en: "Down's syndrome",
    answer_hi: "डाउन सिंड्रोम",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "The part of the eye that contains light-sensitive cells is the:",
    question_hi: "आँख का वह भाग जिसमें प्रकाश-संवेदी कोशिकाएँ होती हैं:",
    options_en: ["Retina", "Cornea", "Lens", "Iris"],
    options_hi: ["रेटिना", "कॉर्निया", "लेंस", "आईरिस"],
    answer_en: "Retina",
    answer_hi: "रेटिना",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "The process that produces the most ATP per glucose molecule is:",
    question_hi: "वह प्रक्रिया जो प्रति ग्लूकोज अणु सबसे अधिक ATP बनाती है:",
    options_en: ["Electron transport chain", "Glycolysis", "Krebs cycle", "Fermentation"],
    options_hi: ["इलेक्ट्रॉन परिवहन शृंखला", "ग्लाइकोलिसिस", "क्रेब्स चक्र", "किण्वन"],
    answer_en: "Electron transport chain",
    answer_hi: "इलेक्ट्रॉन परिवहन शृंखला",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "The hormone that regulates blood glucose by promoting glycogen formation is:",
    question_hi: "वह हार्मोन जो ग्लाइकोजन निर्माण को बढ़ाकर रक्त ग्लूकोज़ नियंत्रित करता है:",
    options_en: ["Insulin", "Glucagon", "Cortisol", "Adrenaline"],
    options_hi: ["इंसुलिन", "ग्लूकागॉन", "कॉर्टिसोल", "एड्रेनालिन"],
    answer_en: "Insulin",
    answer_hi: "इंसुलिन",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "The type of epithelium found in the urinary bladder is:",
    question_hi: "मूत्राशय में पाया जाने वाला उपकला प्रकार है:",
    options_en: ["Transitional epithelium", "Squamous epithelium", "Cuboidal epithelium", "Columnar epithelium"],
    options_hi: ["ट्रांज़िशनल एपिथीलियम", "स्क्वैमस एपिथीलियम", "क्यूबॉइडल एपिथीलियम", "कॉलमनर एपिथीलियम"],
    answer_en: "Transitional epithelium",
    answer_hi: "ट्रांज़िशनल एपिथीलियम",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "The process of synthesis of DNA from RNA is called:",
    question_hi: "RNA से DNA संश्लेषण की प्रक्रिया कहलाती है:",
    options_en: ["Reverse transcription", "Transcription", "Translation", "Replication"],
    options_hi: ["रिवर्स ट्रांसक्रिप्शन", "ट्रांसक्रिप्शन", "ट्रांसलेशन", "रिप्लिकेशन"],
    answer_en: "Reverse transcription",
    answer_hi: "रिवर्स ट्रांसक्रिप्शन",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "The disease caused by Rabies lyssavirus is:",
    question_hi: "Rabies lyssavirus द्वारा उत्पन्न रोग है:",
    options_en: ["Rabies", "Polio", "Influenza", "Measles"],
    options_hi: ["रेबीज़", "पोलियो", "इन्फ्लूएंज़ा", "मीज़ल्स"],
    answer_en: "Rabies",
    answer_hi: "रेबीज़",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "The part of neuron that speeds up impulse conduction is:",
    question_hi: "तंत्रिका आवेग के संचरण को तेज करने वाला न्यूरॉन का भाग है:",
    options_en: ["Myelin sheath", "Dendrite", "Axon", "Cell body"],
    options_hi: ["माइलिन शीथ", "डेंड्राइट", "एक्सॉन", "सेल बॉडी"],
    answer_en: "Myelin sheath",
    answer_hi: "माइलिन शीथ",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "The process of seed germination in darkness is called:",
    question_hi: "अंधेरे में बीज अंकुरण की प्रक्रिया कहलाती है:",
    options_en: ["Skotoblasty", "Photoblasty", "Thermoblasty", "Hydroblasty"],
    options_hi: ["स्कोटोब्लास्टी", "फोटोब्लास्टी", "थर्मोब्लास्टी", "हाइड्रोब्लास्टी"],
    answer_en: "Skotoblasty",
    answer_hi: "स्कोटोब्लास्टी",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "The enzyme that catalyzes carbon fixation in C3 plants is:",
    question_hi: "C3 पौधों में कार्बन फिक्सेशन को उत्प्रेरित करने वाला एंजाइम है:",
    options_en: ["RuBisCO", "PEP carboxylase", "Carbonic anhydrase", "Catalase"],
    options_hi: ["रूबिस्को", "PEP कार्बोक्सिलेज", "कार्बोनिक एनहाइड्रेज़", "कैटलैज़"],
    answer_en: "RuBisCO",
    answer_hi: "रूबिस्को",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "The plant hormone that promotes root formation in stem cuttings is:",
    question_hi: "तना कटिंग में जड़ निर्माण को बढ़ावा देने वाला पादप हार्मोन है:",
    options_en: ["Auxin", "Gibberellin", "Cytokinin", "Ethylene"],
    options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एथिलीन"],
    answer_en: "Auxin",
    answer_hi: "ऑक्सिन",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "The process of ATP synthesis during cellular respiration is called:",
    question_hi: "कोशिकीय श्वसन के दौरान ATP संश्लेषण की प्रक्रिया कहलाती है:",
    options_en: ["Oxidative phosphorylation", "Photophosphorylation", "Substrate-level phosphorylation", "Fermentation"],
    options_hi: ["ऑक्सीडेटिव फॉस्फोराइलेशन", "फोटोफॉस्फोराइलेशन", "सब्सट्रेट-लेवल फॉस्फोराइलेशन", "किण्वन"],
    answer_en: "Oxidative phosphorylation",
    answer_hi: "ऑक्सीडेटिव फॉस्फोराइलेशन",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "The disease caused by fungus Ustilago maydis is:",
    question_hi: "Ustilago maydis फफूंद द्वारा होने वाला रोग है:",
    options_en: ["Smut of maize", "Rust of wheat", "Ergot of rye", "Black spot of rose"],
    options_hi: ["मक्का का स्मट", "गेहूं का रतुआ", "राई का एरगोट", "गुलाब का ब्लैक स्पॉट"],
    answer_en: "Smut of maize",
    answer_hi: "मक्का का स्मट",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "The part of nephron where water reabsorption is hormone-dependent is:",
    question_hi: "नेफ्रॉन का वह भाग जहाँ जल पुनःअवशोषण हार्मोन-निर्भर होता है:",
    options_en: ["Distal convoluted tubule", "Proximal convoluted tubule", "Loop of Henle", "Collecting duct"],
    options_hi: ["डिस्टल कन्वोल्यूटेड ट्यूब्यूल", "प्रॉक्सिमल कन्वोल्यूटेड ट्यूब्यूल", "हेनले का लूप", "कलेक्टिंग डक्ट"],
    answer_en: "Distal convoluted tubule",
    answer_hi: "डिस्टल कन्वोल्यूटेड ट्यूब्यूल",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "The type of inheritance where both alleles are expressed simultaneously is:",
    question_hi: "वह वंशागति प्रकार जिसमें दोनों एलील एक साथ अभिव्यक्त होते हैं:",
    options_en: ["Codominance", "Incomplete dominance", "Multiple alleles", "Polygenic inheritance"],
    options_hi: ["कोडॉमिनेंस", "अपूर्ण प्रभुत्व", "मल्टीपल एलील", "पॉलीजेनिक वंशागति"],
    answer_en: "Codominance",
    answer_hi: "कोडॉमिनेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "The process of attachment of blastocyst to uterine wall is called:",
    question_hi: "ब्लास्टोसिस्ट का गर्भाशय भित्ति से चिपकना कहलाता है:",
    options_en: ["Implantation", "Fertilization", "Ovulation", "Gestation"],
    options_hi: ["इम्प्लांटेशन", "निषेचन", "ओव्यूलेशन", "गर्भावधि"],
    answer_en: "Implantation",
    answer_hi: "इम्प्लांटेशन",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "The enzyme that converts angiotensinogen to angiotensin I is:",
    question_hi: "वह एंजाइम जो एंजियोटेंसिनोजन को एंजियोटेंसिन I में बदलता है:",
    options_en: ["Renin", "Angiotensin-converting enzyme", "Aldosterone", "ADH"],
    options_hi: ["रेनिन", "एंजियोटेंसिन-कनवर्टिंग एंजाइम", "एल्डोस्टेरोन", "ADH"],
    answer_en: "Renin",
    answer_hi: "रेनिन",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "The part of brain that connects two cerebral hemispheres is:",
    question_hi: "मस्तिष्क का वह भाग जो दो सेरेब्रल गोलार्द्धों को जोड़ता है:",
    options_en: ["Corpus callosum", "Cerebellum", "Medulla oblongata", "Pons"],
    options_hi: ["कॉर्पस कॉलोसम", "सेरेबेलम", "मेडुला ऑब्लोंगाटा", "पोंस"],
    answer_en: "Corpus callosum",
    answer_hi: "कॉर्पस कॉलोसम",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "The process of self-pollination in closed flowers is called:",
    question_hi: "बंद फूलों में स्व-परागण की प्रक्रिया कहलाती है:",
    options_en: ["Cleistogamy", "Autogamy", "Geitonogamy", "Xenogamy"],
    options_hi: ["क्लेस्टोगैमी", "ऑटोगैमी", "जाइटोनोगैमी", "जेनोगैमी"],
    answer_en: "Cleistogamy",
    answer_hi: "क्लेस्टोगैमी",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "The hormone that promotes bolting in plants is:",
    question_hi: "पौधों में बोल्टिंग को बढ़ावा देने वाला हार्मोन है:",
    options_en: ["Gibberellin", "Auxin", "Cytokinin", "Abscisic acid"],
    options_hi: ["जिबरेलिन", "ऑक्सिन", "साइटोकाइनिन", "एब्सिसिक एसिड"],
    answer_en: "Gibberellin",
    answer_hi: "जिबरेलिन",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "The disease caused by vitamin B3 deficiency is:",
    question_hi: "विटामिन B3 की कमी से होने वाला रोग है:",
    options_en: ["Pellagra", "Beri-beri", "Scurvy", "Rickets"],
    options_hi: ["पेलाग्रा", "बेरी-बेरी", "स्कर्वी", "रिकेट्स"],
    answer_en: "Pellagra",
    answer_hi: "पेलाग्रा",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "The part of digestive system where most nutrient absorption occurs is:",
    question_hi: "पाचन तंत्र का वह भाग जहाँ अधिकांश पोषक अवशोषण होता है:",
    options_en: ["Small intestine", "Stomach", "Large intestine", "Esophagus"],
    options_hi: ["छोटी आंत", "आमाशय", "बड़ी आंत", "ग्रासनली"],
    answer_en: "Small intestine",
    answer_hi: "छोटी आंत",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "The process of formation of neural tube from ectoderm is called:",
    question_hi: "एक्टोडर्म से न्यूरल ट्यूब बनने की प्रक्रिया कहलाती है:",
    options_en: ["Neurulation", "Gastrulation", "Organogenesis", "Blastulation"],
    options_hi: ["न्यूरुलेशन", "गैस्ट्रुलेशन", "ऑर्गेनोजेनेसिस", "ब्लास्टुलेशन"],
    answer_en: "Neurulation",
    answer_hi: "न्यूरुलेशन",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "The enzyme that digests fats into fatty acids and glycerol is:",
    question_hi: "वह एंजाइम जो वसा को वसीय अम्ल और ग्लिसरॉल में पचाता है:",
    options_en: ["Lipase", "Amylase", "Trypsin", "Pepsin"],
    options_hi: ["लिपेज", "एमाइलेज", "ट्रिप्सिन", "पेप्सिन"],
    answer_en: "Lipase",
    answer_hi: "लिपेज",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "The type of joint present between humerus and ulna is:",
    question_hi: "ह्यूमरस और अल्ना के बीच पाया जाने वाला संधि प्रकार है:",
    options_en: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Gliding joint"],
    options_hi: ["हिंज जॉइंट", "बॉल ऐंड सॉकेट जॉइंट", "पिवट जॉइंट", "ग्लाइडिंग जॉइंट"],
    answer_en: "Hinge joint",
    answer_hi: "हिंज जॉइंट",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "The primary acceptor of CO₂ in Calvin cycle is:",
    question_hi: "कैल्विन चक्र में CO₂ का प्राथमिक स्वीकर्ता है:",
    options_en: ["Ribulose-1,5-bisphosphate", "3-phosphoglycerate", "Glyceraldehyde-3-phosphate", "PEP"],
    options_hi: ["राइबुलोज़-1,5-बिसफॉस्फेट", "3-फॉस्फोग्लिसरेट", "ग्लिसरल्डिहाइड-3-फॉस्फेट", "PEP"],
    answer_en: "Ribulose-1,5-bisphosphate",
    answer_hi: "राइबुलोज़-1,5-बिसफॉस्फेट",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "The disease caused by Leishmania donovani is:",
    question_hi: "Leishmania donovani द्वारा उत्पन्न रोग है:",
    options_en: ["Kala-azar", "Malaria", "Sleeping sickness", "Amoebiasis"],
    options_hi: ["काला-आज़ार", "मलेरिया", "स्लीपिंग सिकनेस", "अमीबायसिस"],
    answer_en: "Kala-azar",
    answer_hi: "काला-आज़ार",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "The part of male reproductive system that transports sperm from epididymis to urethra is:",
    question_hi: "पुरुष प्रजनन तंत्र का वह भाग जो एपिडिडिमिस से मूत्रमार्ग तक शुक्राणु ले जाता है:",
    options_en: ["Vas deferens", "Testis", "Seminal vesicle", "Epididymis"],
    options_hi: ["वास डिफरेंस", "वृषण", "सीमिनल वेसीकल", "एपिडिडिमिस"],
    answer_en: "Vas deferens",
    answer_hi: "वास डिफरेंस",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "The process of RNA synthesis from DNA template is called:",
    question_hi: "DNA टेम्पलेट से RNA संश्लेषण की प्रक्रिया कहलाती है:",
    options_en: ["Transcription", "Translation", "Replication", "Transformation"],
    options_hi: ["ट्रांसक्रिप्शन", "ट्रांसलेशन", "रिप्लिकेशन", "ट्रांसफॉर्मेशन"],
    answer_en: "Transcription",
    answer_hi: "ट्रांसक्रिप्शन",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "The hormone that maintains pregnancy by inhibiting uterine contractions is:",
    question_hi: "वह हार्मोन जो गर्भाशय संकुचन को रोककर गर्भावस्था को बनाए रखता है:",
    options_en: ["Progesterone", "Estrogen", "hCG", "Prolactin"],
    options_hi: ["प्रोजेस्टेरोन", "एस्ट्रोजन", "hCG", "प्रोलैक्टिन"],
    answer_en: "Progesterone",
    answer_hi: "प्रोजेस्टेरोन",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "The disease caused by Vibrio cholerae is:",
    question_hi: "Vibrio cholerae द्वारा होने वाला रोग है:",
    options_en: ["Cholera", "Typhoid", "Tuberculosis", "Pneumonia"],
    options_hi: ["कॉलरा", "टाइफॉयड", "ट्यूबरकुलोसिस", "निमोनिया"],
    answer_en: "Cholera",
    answer_hi: "कॉलरा",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "The part of chloroplast where light-dependent reactions occur is:",
    question_hi: "क्लोरोप्लास्ट का वह भाग जहाँ प्रकाश-निर्भर अभिक्रियाएँ होती हैं:",
    options_en: ["Thylakoid membrane", "Stroma", "Inner membrane", "Outer membrane"],
    options_hi: ["थायलाकोइड झिल्ली", "स्ट्रोमा", "भीतरी झिल्ली", "बाहरी झिल्ली"],
    answer_en: "Thylakoid membrane",
    answer_hi: "थायलाकोइड झिल्ली",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "The process of formation of blastula is called:",
    question_hi: "ब्लास्टुला बनने की प्रक्रिया कहलाती है:",
    options_en: ["Blastulation", "Gastrulation", "Neurulation", "Organogenesis"],
    options_hi: ["ब्लास्टुलेशन", "गैस्ट्रुलेशन", "न्यूरुलेशन", "ऑर्गेनोजेनेसिस"],
    answer_en: "Blastulation",
    answer_hi: "ब्लास्टुलेशन",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "The enzyme that begins protein digestion in stomach is secreted as:",
    question_hi: "आमाशय में प्रोटीन पाचन शुरू करने वाला एंजाइम किस रूप में स्रावित होता है:",
    options_en: ["Pepsinogen", "Trypsinogen", "Chymotrypsinogen", "Procarboxypeptidase"],
    options_hi: ["पेप्सिनोजन", "ट्रिप्सिनोजन", "काइमोट्रिप्सिनोजन", "प्रोकार्बोक्सीपेप्टिडेज़"],
    answer_en: "Pepsinogen",
    answer_hi: "पेप्सिनोजन",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "The type of immunity developed after recovering from a disease is:",
    question_hi: "किसी रोग से ठीक होने के बाद विकसित प्रतिरक्षा कहलाती है:",
    options_en: ["Active natural immunity", "Passive natural immunity", "Active artificial immunity", "Passive artificial immunity"],
    options_hi: ["सक्रिय प्राकृतिक प्रतिरक्षा", "निष्क्रिय प्राकृतिक प्रतिरक्षा", "सक्रिय कृत्रिम प्रतिरक्षा", "निष्क्रिय कृत्रिम प्रतिरक्षा"],
    answer_en: "Active natural immunity",
    answer_hi: "सक्रिय प्राकृतिक प्रतिरक्षा",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "The process of conversion of glucose to glycogen in liver and muscles is called:",
    question_hi: "यकृत और पेशियों में ग्लूकोज को ग्लाइकोजन में बदलने की प्रक्रिया कहलाती है:",
    options_en: ["Glycogenesis", "Glycogenolysis", "Gluconeogenesis", "Glycolysis"],
    options_hi: ["ग्लाइकोजेनेसिस", "ग्लाइकोजनोलाइसिस", "ग्लूकोनियोजेनेसिस", "ग्लाइकोलिसिस"],
    answer_en: "Glycogenesis",
    answer_hi: "ग्लाइकोजेनेसिस",
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