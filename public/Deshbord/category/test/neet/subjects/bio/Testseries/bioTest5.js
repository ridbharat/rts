const questions = [
  { num: 1,
    question_en: "The process of conversion of ammonium ions to nitrites in the nitrogen cycle is called:",
    question_hi: "नाइट्रोजन चक्र में अमोनियम आयनों को नाइट्राइट्स में परिवर्तित करने की प्रक्रिया कहलाती है:",
    options_en: ["Nitrification", "Ammonification", "Denitrification", "Nitrogen fixation"],
    options_hi: ["नाइट्रीफिकेशन", "अमोनिफिकेशन", "डीनाइट्रीफिकेशन", "नाइट्रोजन स्थिरीकरण"],
    answer_en: "Nitrification",
    answer_hi: "नाइट्रीफिकेशन",
    attempted: false,
    selected: ""
  },

  { num: 2,
    question_en: "Which of the following is NOT a component of the pancreatic juice?",
    question_hi: "निम्न में से कौन अग्नाशयी रस का घटक नहीं है?",
    options_en: ["Trypsin", "Amylase", "Lipase", "Pepsin"],
    options_hi: ["ट्रिप्सिन", "एमाइलेस", "लाइपेस", "पेप्सिन"],
    answer_en: "Pepsin",
    answer_hi: "पेप्सिन",
    attempted: false,
    selected: ""
  },

  { num: 3,
    question_en: "The hormone that regulates the body's metabolic rate is:",
    question_hi: "शरीर की चयापचय दर को नियंत्रित करने वाला हार्मोन है:",
    options_en: ["Thyroxine", "Insulin", "Glucagon", "Cortisol"],
    options_hi: ["थायरॉक्सिन", "इंसुलिन", "ग्लूकागन", "कॉर्टिसोल"],
    answer_en: "Thyroxine",
    answer_hi: "थायरॉक्सिन",
    attempted: false,
    selected: ""
  },

  { num: 4,
    question_en: "The cellular structure that contains digestive enzymes is the:",
    question_hi: "कौन-सी कोशिकीय संरचना पाचक एंजाइम रखती है?",
    options_en: ["Lysosome", "Ribosome", "Mitochondria", "Golgi apparatus"],
    options_hi: ["लाइसोज़ोम", "राइबोसोम", "माइटोकॉन्ड्रिया", "गोल्जी तंत्र"],
    answer_en: "Lysosome",
    answer_hi: "लाइसोज़ोम",
    attempted: false,
    selected: ""
  },

  { num: 5,
    question_en: "The disease caused by Human Immunodeficiency Virus (HIV) is:",
    question_hi: "मानव इम्यूनोडेफ़िशिएंसी वायरस (HIV) से होने वाली बीमारी है:",
    options_en: ["AIDS", "Herpes", "Hepatitis", "Influenza"],
    options_hi: ["एड्स", "हर्पीस", "हेपेटाइटिस", "इन्फ्लुएंजा"],
    answer_en: "AIDS",
    answer_hi: "एड्स",
    attempted: false,
    selected: ""
  },

  { num: 6,
    question_en: "The part of the flower that produces pollen grains is the:",
    question_hi: "फूल का वह भाग जो पराग कण उत्पन्न करता है:",
    options_en: ["Anther", "Stigma", "Ovary", "Style"],
    options_hi: ["एंथर", "स्टिग्मा", "ओवरी", "स्टाइल"],
    answer_en: "Anther",
    answer_hi: "एंथर",
    attempted: false,
    selected: ""
  },

  { num: 7,
    question_en: "The enzyme that breaks down starch into maltose is:",
    question_hi: "कौन-सा एंजाइम स्टार्च को माल्टोज़ में तोड़ता है?",
    options_en: ["Amylase", "Pepsin", "Trypsin", "Lipase"],
    options_hi: ["एमाइलेस", "पेप्सिन", "ट्रिप्सिन", "लाइपेस"],
    answer_en: "Amylase",
    answer_hi: "एमाइलेस",
    attempted: false,
    selected: ""
  },

  { num: 8,
    question_en: "The type of RNA that forms the structural component of ribosomes is:",
    question_hi: "राइबोसोम का संरचनात्मक घटक बनने वाला RNA प्रकार है:",
    options_en: ["mRNA", "tRNA", "rRNA", "snRNA"],
    options_hi: ["एमआरएनए", "टीआरएनए", "आरआरएनए", "एसएनआरएनए"],
    answer_en: "rRNA",
    answer_hi: "आरआरएनए",
    attempted: false,
    selected: ""
  },

  { num: 9,
    question_en: "The process of water loss from plant surfaces is called:",
    question_hi: "पौधों की सतह से जल की हानि की प्रक्रिया कहलाती है:",
    options_en: ["Transpiration", "Translocation", "Evaporation", "Guttation"],
    options_hi: ["ट्रांसपिरेशन", "ट्रांसलोकेशन", "वाष्पीकरण", "गटेशन"],
    answer_en: "Transpiration",
    answer_hi: "ट्रांसपिरेशन",
    attempted: false,
    selected: ""
  },

  { num: 10,
    question_en: "The plant hormone that promotes seed dormancy is:",
    question_hi: "बीज सुप्तावस्था को बढ़ावा देने वाला पौध हार्मोन है:",
    options_en: ["Abscisic acid", "Gibberellin", "Cytokinin", "Auxin"],
    options_hi: ["एब्सिसिक अम्ल", "जिबरेलिन", "साइटोकाइनिन", "ऑक्सिन"],
    answer_en: "Abscisic acid",
    answer_hi: "एब्सिसिक अम्ल",
    attempted: false,
    selected: ""
  },

  { num: 11,
    question_en: "The disease caused by vitamin B1 (Thiamine) deficiency is:",
    question_hi: "विटामिन B1 (थायमिन) की कमी से होने वाला रोग है:",
    options_en: ["Beri-beri", "Scurvy", "Rickets", "Pellagra"],
    options_hi: ["बेरी-बेरी", "स्कर्वी", "रिकेट्स", "पेलाग्रा"],
    answer_en: "Beri-beri",
    answer_hi: "बेरी-बेरी",
    attempted: false,
    selected: ""
  },

  { num: 12,
    question_en: "The part of the brain that coordinates muscular movements and balance is:",
    question_hi: "मस्तिष्क का वह भाग जो मांसपेशियों की गतिविधियों और संतुलन का समन्वय करता है:",
    options_en: ["Cerebellum", "Cerebrum", "Medulla oblongata", "Hypothalamus"],
    options_hi: ["सेरेबेलम", "सेरेब्रुम", "मेडुला ऑब्लोंगाटा", "हाइपोथैलेमस"],
    answer_en: "Cerebellum",
    answer_hi: "सेरेबेलम",
    attempted: false,
    selected: ""
  },

  { num: 13,
    question_en: "The process of formation of red blood cells is called:",
    question_hi: "लाल रक्त कोशिकाओं के निर्माण की प्रक्रिया कहलाती है:",
    options_en: ["Erythropoiesis", "Leucopoiesis", "Thrombopoiesis", "Hemostasis"],
    options_hi: ["एरिथ्रोपोएसिस", "ल्यूकोपोएसिस", "थ्रोंबोपोएसिस", "हीमोस्टेसिस"],
    answer_en: "Erythropoiesis",
    answer_hi: "एरिथ्रोपोएसिस",
    attempted: false,
    selected: ""
  },

  { num: 14,
    question_en: "The enzyme that begins protein digestion in the stomach is:",
    question_hi: "पेट में प्रोटीन पाचन शुरू करने वाला एंजाइम है:",
    options_en: ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    options_hi: ["पेप्सिन", "ट्रिप्सिन", "एमाइलेस", "लाइपेस"],
    answer_en: "Pepsin",
    answer_hi: "पेप्सिन",
    attempted: false,
    selected: ""
  },

  { num: 15,
    question_en: "The genetic disorder characterized by sickle-shaped RBCs is:",
    question_hi: "हंसिया-आकार की RBC बनने वाला आनुवंशिक विकार है:",
    options_en: ["Sickle cell anemia", "Thalassemia", "Hemophilia", "Color blindness"],
    options_hi: ["सिकल सेल एनीमिया", "थैलेसीमिया", "हीमोफीलिया", "कलर ब्लाइंडनेस"],
    answer_en: "Sickle cell anemia",
    answer_hi: "सिकल सेल एनीमिया",
    attempted: false,
    selected: ""
  },

  { num: 16,
    question_en: "The part of the eye that focuses light onto the retina is:",
    question_hi: "आँख का वह भाग जो प्रकाश को रेटिना पर फोकस करता है:",
    options_en: ["Lens", "Cornea", "Iris", "Pupil"],
    options_hi: ["लेंस", "कॉर्निया", "आईरिस", "प्यूपिल"],
    answer_en: "Lens",
    answer_hi: "लेंस",
    attempted: false,
    selected: ""
  },

  { num: 17,
    question_en: "The final acceptor of electrons in the electron transport chain is:",
    question_hi: "इलेक्ट्रॉन परिवहन शृंखला में अंतिम इलेक्ट्रॉन स्वीकर्ता है:",
    options_en: ["Oxygen", "NAD+", "FAD", "Cytochrome c"],
    options_hi: ["ऑक्सीजन", "एनएडी+", "एफएडी", "साइटोक्रोम c"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },

  { num: 18,
    question_en: "The hormone that raises blood calcium levels is:",
    question_hi: "रक्त कैल्शियम स्तर बढ़ाने वाला हार्मोन है:",
    options_en: ["Parathyroid hormone", "Calcitonin", "Thyroxine", "Insulin"],
    options_hi: ["पैराथाइरॉयड हार्मोन", "कैल्सिटोनिन", "थायरॉक्सिन", "इंसुलिन"],
    answer_en: "Parathyroid hormone",
    answer_hi: "पैराथाइरॉयड हार्मोन",
    attempted: false,
    selected: ""
  },

  { num: 19,
    question_en: "The type of epithelium found in the lining of the intestine is:",
    question_hi: "आंत की परत में पाया जाने वाला उपकला ऊतक है:",
    options_en: ["Columnar epithelium", "Squamous epithelium", "Cuboidal epithelium", "Stratified epithelium"],
    options_hi: ["स्तंभाकार उपकला", "स्क्वैमस उपकला", "घनाकार उपकला", "स्तरित उपकला"],
    answer_en: "Columnar epithelium",
    answer_hi: "स्तंभाकार उपकला",
    attempted: false,
    selected: ""
  },

  { num: 20,
    question_en: "The process of synthesis of protein from mRNA is called:",
    question_hi: "mRNA से प्रोटीन संश्लेषण की प्रक्रिया कहलाती है:",
    options_en: ["Translation", "Transcription", "Replication", "Transformation"],
    options_hi: ["ट्रांसलेशन", "ट्रांसक्रिप्शन", "रिप्लिकेशन", "ट्रांसफॉर्मेशन"],
    answer_en: "Translation",
    answer_hi: "ट्रांसलेशन",
    attempted: false,
    selected: ""
  },

  { num: 21,
    question_en: "The disease caused by Mycobacterium tuberculosis is:",
    question_hi: "Mycobacterium tuberculosis द्वारा होने वाला रोग है:",
    options_en: ["Tuberculosis", "Pneumonia", "Leprosy", "Diphtheria"],
    options_hi: ["टीबी", "निमोनिया", "कुष्ठ रोग", "डिप्थीरिया"],
    answer_en: "Tuberculosis",
    answer_hi: "टीबी",
    attempted: false,
    selected: ""
  },

  { num: 22,
    question_en: "The part of the neuron that contains the nucleus is the:",
    question_hi: "न्यूरॉन का वह भाग जिसमें नाभिक होता है:",
    options_en: ["Cell body", "Dendrite", "Axon", "Myelin sheath"],
    options_hi: ["सेल बॉडी", "डेंड्राइट", "एक्सॉन", "मायलिन शीथ"],
    answer_en: "Cell body",
    answer_hi: "सेल बॉडी",
    attempted: false,
    selected: ""
  },

  { num: 23,
    question_en: "The process of seed germination in response to light is called:",
    question_hi: "प्रकाश के प्रति बीज अंकुरण की प्रक्रिया कहलाती है:",
    options_en: ["Photoblasty", "Thermoblasty", "Chemoblasty", "Hydroblasty"],
    options_hi: ["फोटोब्लास्टी", "थर्मोब्लास्टी", "केमोब्लास्टी", "हाइड्रोब्लास्टी"],
    answer_en: "Photoblasty",
    answer_hi: "फोटोब्लास्टी",
    attempted: false,
    selected: ""
  },

  { num: 24,
    question_en: "The enzyme that catalyzes the first carbon fixation step in C4 plants is:",
    question_hi: "C4 पौधों में प्रथम कार्बन स्थिरीकरण चरण को उत्प्रेरित करने वाला एंजाइम है:",
    options_en: ["PEP carboxylase", "RuBisCO", "Carbonic anhydrase", "Catalase"],
    options_hi: ["PEP कार्बोक्सिलेज", "रूबिस्को", "कार्बोनिक एनहाइड्रेज", "कैटालेज"],
    answer_en: "PEP carboxylase",
    answer_hi: "PEP कार्बोक्सिलेज",
    attempted: false,
    selected: ""
  },

  { num: 25,
    question_en: "The plant hormone that promotes cell elongation and division is:",
    question_hi: "कोशिका वृद्धि और विभाजन को बढ़ावा देने वाला पादप हार्मोन है:",
    options_en: ["Gibberellin", "Auxin", "Cytokinin", "Ethylene"],
    options_hi: ["जिबरेलिन", "ऑक्सिन", "साइटोकाइनिन", "एथिलीन"],
    answer_en: "Gibberellin",
    answer_hi: "जिबरेलिन",
    attempted: false,
    selected: ""
  },

  { num: 26,
    question_en: "The process of ATP synthesis during photosynthesis is called:",
    question_hi: "प्रकाश-संश्लेषण के दौरान ATP संश्लेषण की प्रक्रिया कहलाती है:",
    options_en: ["Photophosphorylation", "Oxidative phosphorylation", "Substrate-level phosphorylation", "Fermentation"],
    options_hi: ["फोटोफॉस्फोराइलेशन", "ऑक्सीडेटिव फॉस्फोराइलेशन", "सब्सट्रेट-स्तरीय फॉस्फोराइलेशन", "किण्वन"],
    answer_en: "Photophosphorylation",
    answer_hi: "फोटोफॉस्फोराइलेशन",
    attempted: false,
    selected: ""
  },

  { num: 27,
    question_en: "The disease caused by the fungus Claviceps purpurea is:",
    question_hi: "Claviceps purpurea कवक द्वारा होने वाला रोग है:",
    options_en: ["Ergot of rye", "Smut of wheat", "Rust of wheat", "Black spot of rose"],
    options_hi: ["अर्गट ऑफ राई", "स्मट ऑफ व्हीट", "रस्ट ऑफ व्हीट", "ब्लैक स्पॉट ऑफ रोज़"],
    answer_en: "Ergot of rye",
    answer_hi: "अर्गट ऑफ राई",
    attempted: false,
    selected: ""
  },

  { num: 28,
    question_en: "The part of the nephron where selective reabsorption occurs is the:",
    question_hi: "नेफ्रॉन का वह भाग जहाँ चयनात्मक पुन: अवशोषण होता है:",
    options_en: ["Proximal convoluted tubule", "Loop of Henle", "Distal convoluted tubule", "Collecting duct"],
    options_hi: ["प्रॉक्सिमल कॉन्वॉल्यूटेड ट्यूब्यूल", "लूप ऑफ हेन्ले", "डिस्टल कॉन्वॉल्यूटेड ट्यूब्यूल", "कलेक्टिंग डक्ट"],
    answer_en: "Proximal convoluted tubule",
    answer_hi: "प्रॉक्सिमल कॉन्वॉल्यूटेड ट्यूब्यूल",
    attempted: false,
    selected: ""
  },

  { num: 29,
    question_en: "The type of inheritance where multiple genes control a single trait is called:",
    question_hi: "वह वंशागति प्रकार जिसमें कई जीन एक ही लक्षण को नियंत्रित करते हैं, कहलाता है:",
    options_en: ["Polygenic inheritance", "Pleiotropy", "Codominance", "Epistasis"],
    options_hi: ["पॉलीजेनिक वंशागति", "प्लायोट्रॉपी", "कोडॉमिनेंस", "एपिस्टेसिस"],
    answer_en: "Polygenic inheritance",
    answer_hi: "पॉलीजेनिक वंशागति",
    attempted: false,
    selected: ""
  },

  { num: 30,
    question_en: "The process of fusion of male and female gametes is called:",
    question_hi: "नर और मादा गैमीट्स के संलयन की प्रक्रिया कहलाती है:",
    options_en: ["Fertilization", "Implantation", "Ovulation", "Gestation"],
    options_hi: ["निषेचन", "इम्प्लांटेशन", "ओव्यूलेशन", "गर्भावस्था"],
    answer_en: "Fertilization",
    answer_hi: "निषेचन",
    attempted: false,
    selected: ""
  },

  { num: 31,
    question_en: "The enzyme that converts fibrinogen to fibrin in blood clotting is:",
    question_hi: "रक्त के थक्के जमने में फाइब्रिनोजेन को फाइब्रिन में बदलने वाला एंजाइम है:",
    options_en: ["Thrombin", "Prothrombin", "Plasmin", "Heparin"],
    options_hi: ["थ्रॉम्बिन", "प्रोथ्रॉम्बिन", "प्लास्मिन", "हेपारिन"],
    answer_en: "Thrombin",
    answer_hi: "थ्रॉम्बिन",
    attempted: false,
    selected: ""
  },

  { num: 32,
    question_en: "The part of the brain that regulates body temperature is the:",
    question_hi: "शरीर के तापमान को नियंत्रित करने वाला मस्तिष्क का भाग है:",
    options_en: ["Hypothalamus", "Cerebrum", "Cerebellum", "Medulla oblongata"],
    options_hi: ["हाइपोथैलेमस", "सेरेब्रुम", "सेरेबेलम", "मेडुला ऑब्लोंगाटा"],
    answer_en: "Hypothalamus",
    answer_hi: "हाइपोथैलेमस",
    attempted: false,
    selected: ""
  },

  { num: 33,
    question_en: "The transfer of pollen between flowers of different plants is called:",
    question_hi: "विभिन्न पौधों के फूलों के बीच पराग का स्थानांतरण कहलाता है:",
    options_en: ["Xenogamy", "Autogamy", "Geitonogamy", "Cleistogamy"],
    options_hi: ["ज़ेनोगैमी", "ऑटोगैमी", "गाइटोनोगैमी", "क्लिस्टोगैमी"],
    answer_en: "Xenogamy",
    answer_hi: "ज़ेनोगैमी",
    attempted: false,
    selected: ""
  },

  { num: 34,
    question_en: "The hormone that promotes flowering in short-day plants is:",
    question_hi: "लघु-दिवसीय पौधों में पुष्पन को बढ़ावा देने वाला हार्मोन है:",
    options_en: ["Florigen", "Auxin", "Gibberellin", "Cytokinin"],
    options_hi: ["फ्लोरिजेन", "ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन"],
    answer_en: "Florigen",
    answer_hi: "फ्लोरिजेन",
    attempted: false,
    selected: ""
  },

  { num: 35,
    question_en: "The disease caused by vitamin C deficiency is:",
    question_hi: "विटामिन C की कमी से होने वाला रोग है:",
    options_en: ["Scurvy", "Rickets", "Beri-beri", "Pellagra"],
    options_hi: ["स्कर्वी", "रिकेट्स", "बेरी-बेरी", "पेलाग्रा"],
    answer_en: "Scurvy",
    answer_hi: "स्कर्वी",
    attempted: false,
    selected: ""
  },

  { num: 36,
    question_en: "The part of the digestive system where bile is stored is:",
    question_hi: "पाचन तंत्र का वह भाग जहाँ पित्त संग्रहित होता है:",
    options_en: ["Gallbladder", "Liver", "Pancreas", "Stomach"],
    options_hi: ["पित्ताशय", "यकृत", "अग्न्याशय", "पेट"],
    answer_en: "Gallbladder",
    answer_hi: "पित्ताशय",
    attempted: false,
    selected: ""
  },

  { num: 37,
    question_en: "The process of formation of organs from germ layers is called:",
    question_hi: "जर्म लेयर्स से अंगों के बनने की प्रक्रिया कहलाती है:",
    options_en: ["Organogenesis", "Gastrulation", "Neurulation", "Blastulation"],
    options_hi: ["ऑर्गेनोजेनेसिस", "गैस्ट्रुलेशन", "न्यूरुलेशन", "ब्लास्टुलेशन"],
    answer_en: "Organogenesis",
    answer_hi: "ऑर्गेनोजेनेसिस",
    attempted: false,
    selected: ""
  },

  { num: 38,
    question_en: "The enzyme that digests nucleic acids is:",
    question_hi: "कौन-सा एंजाइम न्यूक्लिक अम्लों को पचाता है?",
    options_en: ["Nuclease", "Protease", "Amylase", "Lipase"],
    options_hi: ["न्यूक्लिएज़", "प्रोटीएज़", "एमाइलेस", "लाइपेस"],
    answer_en: "Nuclease",
    answer_hi: "न्यूक्लिएज़",
    attempted: false,
    selected: ""
  },

  { num: 39,
    question_en: "The type of joint present between the atlas and axis vertebrae is:",
    question_hi: "एटलस और एक्सिस कशेरुकाओं के बीच पाया जाने वाला जोड है:",
    options_en: ["Pivot joint", "Hinge joint", "Ball and socket joint", "Gliding joint"],
    options_hi: ["पिवट जोड़", "हिंज जोड़", "बॉल एंड सॉकेट जोड़", "ग्लाइडिंग जोड़"],
    answer_en: "Pivot joint",
    answer_hi: "पिवट जोड़",
    attempted: false,
    selected: ""
  },

  { num: 40,
    question_en: "The product formed after carbon dioxide fixation in the Calvin cycle is:",
    question_hi: "कैल्विन चक्र में कार्बन डाइऑक्साइड स्थिरीकरण के बाद बनने वाला उत्पाद है:",
    options_en: ["3-phosphoglycerate", "Glyceraldehyde-3-phosphate", "Ribulose bisphosphate", "Phosphoenolpyruvate"],
    options_hi: ["3-फॉस्फोग्लिसरेट", "ग्लिसराल्डिहाइड-3-फॉस्फेट", "राइबुलोज़ बिस्फॉस्फेट", "फॉस्फोएनॉलपायरूवेट"],
    answer_en: "3-phosphoglycerate",
    answer_hi: "3-फॉस्फोग्लिसरेट",
    attempted: false,
    selected: ""
  },

  { num: 41,
    question_en: "The disease caused by the nematode Wuchereria bancrofti is:",
    question_hi: "नेमाटोड Wuchereria bancrofti द्वारा होने वाला रोग है:",
    options_en: ["Filariasis", "Ascariasis", "Elephantiasis", "Both Filariasis and Elephantiasis"],
    options_hi: ["फाइलेरियासिस", "अस्कैरियासिस", "एलिफैन्टियासिस", "फाइलेरियासिस और एलिफैन्टियासिस दोनों"],
    answer_en: "Both Filariasis and Elephantiasis",
    answer_hi: "फाइलेरियासिस और एलिफैन्टियासिस दोनों",
    attempted: false,
    selected: ""
  },

  { num: 42,
    question_en: "The part of the male reproductive system that stores sperm is:",
    question_hi: "पुरुष प्रजनन तंत्र का वह भाग जो शुक्राणुओं को संग्रहीत करता है:",
    options_en: ["Epididymis", "Testis", "Seminal vesicle", "Vas deferens"],
    options_hi: ["एपिडिडिमिस", "वृषण", "सीमिनल वेसिकल", "वास डिफरेंस"],
    answer_en: "Epididymis",
    answer_hi: "एपिडिडिमिस",
    attempted: false,
    selected: ""
  },

  { num: 43,
    question_en: "The process of DNA duplication before cell division is called:",
    question_hi: "कोशिका विभाजन से पूर्व DNA की प्रतिलिपि बनने की प्रक्रिया कहलाती है:",
    options_en: ["Replication", "Transcription", "Translation", "Transformation"],
    options_hi: ["रिप्लिकेशन", "ट्रांसक्रिप्शन", "ट्रांसलेशन", "ट्रांसफॉर्मेशन"],
    answer_en: "Replication",
    answer_hi: "रिप्लिकेशन",
    attempted: false,
    selected: ""
  },

  { num: 44,
    question_en: "The hormone that maintains the corpus luteum during pregnancy is:",
    question_hi: "गर्भावस्था के दौरान कॉर्पस ल्यूटियम को बनाए रखने वाला हार्मोन है:",
    options_en: ["Human Chorionic Gonadotropin (hCG)", "Progesterone", "Estrogen", "Prolactin"],
    options_hi: ["एचसीजी", "प्रोजेस्टेरोन", "एस्ट्रोजन", "प्रोलैक्टिन"],
    answer_en: "Human Chorionic Gonadotropin (hCG)",
    answer_hi: "एचसीजी",
    attempted: false,
    selected: ""
  },

  { num: 45,
    question_en: "The disease caused by the protozoan Trypanosoma gambiense is:",
    question_hi: "किस प्रोटोज़ोआ Trypanosoma gambiense द्वारा होने वाला रोग है:",
    options_en: ["Sleeping sickness", "Kala-azar", "Malaria", "Amoebiasis"],
    options_hi: ["स्लीपिंग सिकनेस", "काला-आज़ार", "मलेरिया", "अमीबायसिस"],
    answer_en: "Sleeping sickness",
    answer_hi: "स्लीपिंग सिकनेस",
    attempted: false,
    selected: ""
  },

  { num: 46,
    question_en: "The part of the chloroplast where the Calvin cycle occurs is:",
    question_hi: "क्लोरोप्लास्ट का वह भाग जहाँ कैल्विन चक्र होता है:",
    options_en: ["Stroma", "Grana", "Thylakoid", "Inner membrane"],
    options_hi: ["स्ट्रोमा", "ग्राना", "थायलाकोइड", "आंतरिक झिल्ली"],
    answer_en: "Stroma",
    answer_hi: "स्ट्रोमा",
    attempted: false,
    selected: ""
  },

  { num: 47,
    question_en: "The process of formation of the embryonic layers is called:",
    question_hi: "भ्रूणीय लेयर्स के बनने की प्रक्रिया कहलाती है:",
    options_en: ["Gastrulation", "Neurulation", "Organogenesis", "Blastulation"],
    options_hi: ["गैस्ट्रुलेशन", "न्यूरुलेशन", "ऑर्गेनोजेनेसिस", "ब्लास्टुलेशन"],
    answer_en: "Gastrulation",
    answer_hi: "गैस्ट्रुलेशन",
    attempted: false,
    selected: ""
  },

  { num: 48,
    question_en: "The enzyme that begins carbohydrate digestion in the mouth is:",
    question_hi: "मुख में कार्बोहाइड्रेट पाचन शुरू करने वाला एंजाइम है:",
    options_en: ["Salivary amylase", "Pepsin", "Trypsin", "Lipase"],
    options_hi: ["लार एमाइलेस", "पेप्सिन", "ट्रिप्सिन", "लाइपेस"],
    answer_en: "Salivary amylase",
    answer_hi: "लार एमाइलेस",
    attempted: false,
    selected: ""
  },

  { num: 49,
    question_en: "The type of immunity acquired through placenta or breast milk is:",
    question_hi: "गर्भनाल या स्तन दूध से प्राप्त प्रतिरक्षा कहलाती है:",
    options_en: ["Passive immunity", "Active immunity", "Innate immunity", "Species immunity"],
    options_hi: ["निष्क्रिय प्रतिरक्षा", "सक्रिय प्रतिरक्षा", "जन्मजात प्रतिरक्षा", "प्रजाति प्रतिरक्षा"],
    answer_en: "Passive immunity",
    answer_hi: "निष्क्रिय प्रतिरक्षा",
    attempted: false,
    selected: ""
  },

  { num: 50,
    question_en: "The process of conversion of pyruvate to lactate in muscles during heavy exercise is called:",
    question_hi: "कड़ी कसरत के दौरान मांसपेशियों में पायरूवेट को लैक्टेट में बदलने की प्रक्रिया कहलाती है:",
    options_en: ["Lactic acid fermentation", "Alcoholic fermentation", "Aerobic respiration", "Krebs cycle"],
    options_hi: ["लैक्टिक अम्ल किण्वन", "अल्कोहलिक किण्वन", "सक्रिय श्वसन", "क्रेब्स चक्र"],
    answer_en: "Lactic acid fermentation",
    answer_hi: "लैक्टिक अम्ल किण्वन",
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