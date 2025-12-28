const questions = [
  {
    num: 1,
    question_en: "Displacement is a ___ quantity?",
    question_hi: "विस्थापन एक ___ राशि है?",
    options_en: ["Vector", "Scalar", "Tensor", "None"],
    options_hi: ["सदिश", "अदिश", "टेंसर", "कोई नहीं"],
    answer_en: "Vector",
    answer_hi: "सदिश",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Distance is always?",
    question_hi: "दूरी हमेशा होती है?",
    options_en: ["Positive", "Negative", "Zero", "Imaginary"],
    options_hi: ["धनात्मक", "ऋणात्मक", "शून्य", "काल्पनिक"],
    answer_en: "Positive",
    answer_hi: "धनात्मक",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Area under velocity-time graph gives?",
    question_hi: "वेग-समय ग्राफ के अंतर्गत क्षेत्रफल देता है?",
    options_en: ["Displacement", "Speed", "Force", "Pressure"],
    options_hi: ["विस्थापन", "चाल", "बल", "दाब"],
    answer_en: "Displacement",
    answer_hi: "विस्थापन",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Newton's third law states?",
    question_hi: "न्यूटन का तीसरा नियम कहता है?",
    options_en: ["Action = Reaction", "F = ma", "Inertia", "Gravity"],
    options_hi: ["क्रिया = प्रतिक्रिया", "F = ma", "जड़त्व", "गुरुत्वाकर्षण"],
    answer_en: "Action = Reaction",
    answer_hi: "क्रिया = प्रतिक्रिया",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the formula of kinetic energy?",
    question_hi: "गतिज ऊर्जा का सूत्र क्या है?",
    options_en: ["1/2 mv²", "mgh", "mv", "F × d"],
    options_hi: ["1/2 mv²", "mgh", "mv", "F × d"],
    answer_en: "1/2 mv²",
    answer_hi: "1/2 mv²",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Numerical: A 10 N force moves an object by 4 m. Work done?",
    question_hi: "संख्यात्मक: 10 N बल एक वस्तु को 4 m से चलाता है। किया गया कार्य?",
    options_en: ["40 J", "4 J", "14 J", "400 J"],
    options_hi: ["40 J", "4 J", "14 J", "400 J"],
    answer_en: "40 J",
    answer_hi: "40 J",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Escape velocity does NOT depend on?",
    question_hi: "पलायन वेग निर्भर नहीं करता है?",
    options_en: ["Mass of object", "Mass of planet", "Radius of planet", "Gravitational constant"],
    options_hi: ["वस्तु के द्रव्यमान", "ग्रह के द्रव्यमान", "ग्रह की त्रिज्या", "गुरुत्वाकर्षण नियतांक"],
    answer_en: "Mass of object",
    answer_hi: "वस्तु के द्रव्यमान",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Unit of universal gravitational constant G?",
    question_hi: "सार्वत्रिक गुरुत्वाकर्षण नियतांक G की इकाई?",
    options_en: ["Nm²/kg²", "N/kg", "m/s²", "kg/m"],
    options_hi: ["Nm²/kg²", "N/kg", "m/s²", "kg/m"],
    answer_en: "Nm²/kg²",
    answer_hi: "Nm²/kg²",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "SI unit of torque?",
    question_hi: "बल आघूर्ण की SI इकाई?",
    options_en: ["N·m", "J", "N", "W"],
    options_hi: ["N·m", "J", "N", "W"],
    answer_en: "N·m",
    answer_hi: "N·m",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Centre of mass depends on?",
    question_hi: "द्रव्यमान केंद्र निर्भर करता है?",
    options_en: ["Mass distribution", "Weight only", "Shape only", "Volume only"],
    options_hi: ["द्रव्यमान वितरण", "केवल भार", "केवल आकार", "केवल आयतन"],
    answer_en: "Mass distribution",
    answer_hi: "द्रव्यमान वितरण",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "SI unit of density?",
    question_hi: "घनत्व की SI इकाई?",
    options_en: ["kg/m³", "g/cm", "m/kg", "kg"],
    options_hi: ["kg/m³", "g/cm", "m/kg", "kg"],
    answer_en: "kg/m³",
    answer_hi: "kg/m³",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Unit of surface tension?",
    question_hi: "पृष्ठ तनाव की इकाई?",
    options_en: ["N/m", "J", "Pa", "W"],
    options_hi: ["N/m", "J", "Pa", "W"],
    answer_en: "N/m",
    answer_hi: "N/m",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "SI unit of viscosity?",
    question_hi: "श्यानता की SI इकाई?",
    options_en: ["Pa·s", "N·m", "Wb", "A"],
    options_hi: ["Pa·s", "N·m", "Wb", "A"],
    answer_en: "Pa·s",
    answer_hi: "Pa·s",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Bernoulli theorem applies to?",
    question_hi: "बर्नौली प्रमेय लागू होती है?",
    options_en: ["Ideal fluids", "Real fluids", "Solids", "Plasma"],
    options_hi: ["आदर्श द्रव", "वास्तविक द्रव", "ठोस", "प्लाज्मा"],
    answer_en: "Ideal fluids",
    answer_hi: "आदर्श द्रव",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "SI unit of heat?",
    question_hi: "ऊष्मा की SI इकाई?",
    options_en: ["Joule", "Calorie", "Watt", "Newton"],
    options_hi: ["जूल", "कैलोरी", "वाट", "न्यूटन"],
    answer_en: "Joule",
    answer_hi: "जूल",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Specific heat represents?",
    question_hi: "विशिष्ट ऊष्मा दर्शाती है?",
    options_en: ["Heat required per kg", "Total heat", "Chemical heat", "Latent heat"],
    options_hi: ["प्रति kg आवश्यक ऊष्मा", "कुल ऊष्मा", "रासायनिक ऊष्मा", "गुप्त ऊष्मा"],
    answer_en: "Heat required per kg",
    answer_hi: "प्रति kg आवश्यक ऊष्मा",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "During latent heat process, temperature remains?",
    question_hi: "गुप्त ऊष्मा प्रक्रिया के दौरान, तापमान रहता है?",
    options_en: ["Constant", "Increases", "Decreases", "Fluctuates"],
    options_hi: ["स्थिर", "बढ़ता है", "घटता है", "उतार-चढ़ाव"],
    answer_en: "Constant",
    answer_hi: "स्थिर",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Thermal expansion is least in?",
    question_hi: "तापीय प्रसार सबसे कम होता है?",
    options_en: ["Solids", "Liquids", "Gases", "Plasma"],
    options_hi: ["ठोस", "द्रव", "गैसें", "प्लाज्मा"],
    answer_en: "Solids",
    answer_hi: "ठोस",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Numerical: Water heated from 20°C to 30°C. ΔT?",
    question_hi: "संख्यात्मक: जल को 20°C से 30°C तक गर्म किया जाता है। ΔT?",
    options_en: ["10°C", "20°C", "5°C", "2°C"],
    options_hi: ["10°C", "20°C", "5°C", "2°C"],
    answer_en: "10°C",
    answer_hi: "10°C",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "First law of thermodynamics considers energy as?",
    question_hi: "ऊष्मागतिकी का पहला नियम ऊर्जा को मानता है?",
    options_en: ["Conserved", "Destroyed", "Created", "Lost"],
    options_hi: ["संरक्षित", "विनष्ट", "उत्पन्न", "खोई हुई"],
    answer_en: "Conserved",
    answer_hi: "संरक्षित",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "In an isothermal process, temperature is?",
    question_hi: "एक समतापी प्रक्रिया में, तापमान होता है?",
    options_en: ["Constant", "Increasing", "Decreasing", "Not defined"],
    options_hi: ["स्थिर", "बढ़ रहा", "घट रहा", "परिभाषित नहीं"],
    answer_en: "Constant",
    answer_hi: "स्थिर",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "In an adiabatic process, heat transfer is?",
    question_hi: "एक रुद्धोष्म प्रक्रिया में, ऊष्मा स्थानांतरण होता है?",
    options_en: ["Zero", "Maximum", "Minimum", "Constant"],
    options_hi: ["शून्य", "अधिकतम", "न्यूनतम", "स्थिर"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "RMS speed depends on?",
    question_hi: "RMS चाल निर्भर करती है?",
    options_en: ["Temperature", "Volume", "Pressure", "Mass only"],
    options_hi: ["तापमान", "आयतन", "दाब", "केवल द्रव्यमान"],
    answer_en: "Temperature",
    answer_hi: "तापमान",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "SI unit of frequency?",
    question_hi: "आवृत्ति की SI इकाई?",
    options_en: ["Hz", "m", "s", "N"],
    options_hi: ["Hz", "m", "s", "N"],
    answer_en: "Hz",
    answer_hi: "Hz",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Nature of sound waves?",
    question_hi: "ध्वनि तरंगों की प्रकृति?",
    options_en: ["Longitudinal", "Transverse", "Electromagnetic", "None"],
    options_hi: ["अनुदैर्ध्य", "अनुप्रस्थ", "विद्युत चुम्बकीय", "कोई नहीं"],
    answer_en: "Longitudinal",
    answer_hi: "अनुदैर्ध्य",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Minimum distance for echo?",
    question_hi: "प्रतिध्वनि के लिए न्यूनतम दूरी?",
    options_en: ["17 m", "10 m", "34 m", "5 m"],
    options_hi: ["17 m", "10 m", "34 m", "5 m"],
    answer_en: "17 m",
    answer_hi: "17 m",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Reverberation is related to?",
    question_hi: "गूंज संबंधित है?",
    options_en: ["Persistence of sound", "Refraction", "Diffraction", "Polarization"],
    options_hi: ["ध्वनि की दृढ़ता", "अपवर्तन", "विवर्तन", "ध्रुवण"],
    answer_en: "Persistence of sound",
    answer_hi: "ध्वनि की दृढ़ता",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Numerical: f = 100 Hz, λ = 5 m. Speed?",
    question_hi: "संख्यात्मक: f = 100 Hz, λ = 5 m। गति?",
    options_en: ["500 m/s", "100 m/s", "20 m/s", "5 m/s"],
    options_hi: ["500 m/s", "100 m/s", "20 m/s", "5 m/s"],
    answer_en: "500 m/s",
    answer_hi: "500 m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Speed of light is maximum in?",
    question_hi: "प्रकाश की गति अधिकतम होती है?",
    options_en: ["Vacuum", "Water", "Glass", "Diamond"],
    options_hi: ["निर्वात", "जल", "कांच", "हीरा"],
    answer_en: "Vacuum",
    answer_hi: "निर्वात",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Snell's law relates?",
    question_hi: "स्नेल का नियम संबंधित है?",
    options_en: ["Angle of incidence & refraction", "Reflection", "Diffusion", "Polarization"],
    options_hi: ["आपतन और अपवर्तन कोण", "परावर्तन", "प्रसार", "ध्रुवण"],
    answer_en: "Angle of incidence & refraction",
    answer_hi: "आपतन और अपवर्तन कोण",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Critical angle occurs when?",
    question_hi: "क्रांतिक कोण तब होता है जब?",
    options_en: ["n₂ < n₁", "n₂ > n₁", "Equal density", "Zero density"],
    options_hi: ["n₂ < n₁", "n₂ > n₁", "समान घनत्व", "शून्य घनत्व"],
    answer_en: "n₂ < n₁",
    answer_hi: "n₂ < n₁",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Lens formula?",
    question_hi: "लेंस सूत्र?",
    options_en: ["1/f = 1/v + 1/u", "f = uv", "f = u - v", "1/f = uv"],
    options_hi: ["1/f = 1/v + 1/u", "f = uv", "f = u - v", "1/f = uv"],
    answer_en: "1/f = 1/v + 1/u",
    answer_hi: "1/f = 1/v + 1/u",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Magnification in lenses is?",
    question_hi: "लेंसों में आवर्धन है?",
    options_en: ["v/u", "u/v", "f/u", "f/v"],
    options_hi: ["v/u", "u/v", "f/u", "f/v"],
    answer_en: "v/u",
    answer_hi: "v/u",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Polarization occurs only in?",
    question_hi: "ध्रुवण केवल होता है?",
    options_en: ["Transverse waves", "Longitudinal waves", "Sound", "Heat"],
    options_hi: ["अनुप्रस्थ तरंगें", "अनुदैर्ध्य तरंगें", "ध्वनि", "ऊष्मा"],
    answer_en: "Transverse waves",
    answer_hi: "अनुप्रस्थ तरंगें",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Photoelectric effect was discovered by?",
    question_hi: "प्रकाश विद्युत प्रभाव की खोज किसने की?",
    options_en: ["Hertz", "Einstein", "Bohr", "Newton"],
    options_hi: ["हर्ट्ज", "आइंस्टीन", "बोहर", "न्यूटन"],
    answer_en: "Hertz",
    answer_hi: "हर्ट्ज",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Stopping potential is related to?",
    question_hi: "रोक विभव संबंधित है?",
    options_en: ["K.E of electrons", "Current", "Frequency", "Intensity"],
    options_hi: ["इलेक्ट्रॉनों की K.E", "धारा", "आवृत्ति", "तीव्रता"],
    answer_en: "K.E of electrons",
    answer_hi: "इलेक्ट्रॉनों की K.E",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Nuclear fusion occurs in?",
    question_hi: "नाभिकीय संलयन होता है?",
    options_en: ["Sun", "Earth", "Reactor", "Battery"],
    options_hi: ["सूर्य", "पृथ्वी", "रिएक्टर", "बैटरी"],
    answer_en: "Sun",
    answer_hi: "सूर्य",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Nature of radioactive decay?",
    question_hi: "रेडियोधर्मी क्षय की प्रकृति?",
    options_en: ["Random", "Predictable", "Constant", "Periodic"],
    options_hi: ["यादृच्छिक", "पूर्वानुमेय", "स्थिर", "आवधिक"],
    answer_en: "Random",
    answer_hi: "यादृच्छिक",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Half-life is affected by?",
    question_hi: "अर्ध-आयु प्रभावित होती है?",
    options_en: ["None (Independent of all)", "Temperature", "Pressure", "Chemical state"],
    options_hi: ["कोई नहीं (सभी से स्वतंत्र)", "तापमान", "दाब", "रासायनिक अवस्था"],
    answer_en: "None (Independent of all)",
    answer_hi: "कोई नहीं (सभी से स्वतंत्र)",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "SI unit of magnetic field?",
    question_hi: "चुंबकीय क्षेत्र की SI इकाई?",
    options_en: ["Tesla", "Weber", "Henry", "Volt"],
    options_hi: ["टेस्ला", "वेबर", "हेनरी", "वोल्ट"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Lenz's law direction rule states?",
    question_hi: "लेंज के नियम की दिशा नियम कहती है?",
    options_en: ["Opposes cause", "Same direction", "Random", "None"],
    options_hi: ["कारण का विरोध करता है", "समान दिशा", "यादृच्छिक", "कोई नहीं"],
    answer_en: "Opposes cause",
    answer_hi: "कारण का विरोध करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Transformer works on which current?",
    question_hi: "ट्रांसफॉर्मर किस धारा पर काम करता है?",
    options_en: ["AC", "DC", "Both", "None"],
    options_hi: ["AC", "DC", "दोनों", "कोई नहीं"],
    answer_en: "AC",
    answer_hi: "AC",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "AC generator works on which law?",
    question_hi: "AC जनरेटर किस नियम पर काम करता है?",
    options_en: ["Faraday's law", "Coulomb law", "Newton law", "Ampere law"],
    options_hi: ["फैराडे का नियम", "कूलॉम का नियम", "न्यूटन का नियम", "एम्पियर का नियम"],
    answer_en: "Faraday's law",
    answer_hi: "फैराडे का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Fuse wire is made of?",
    question_hi: "फ्यूज तार बना होता है?",
    options_en: ["Tin-lead alloy", "Copper", "Iron", "Gold"],
    options_hi: ["टिन-सीसा मिश्र धातु", "तांबा", "लोहा", "सोना"],
    answer_en: "Tin-lead alloy",
    answer_hi: "टिन-सीसा मिश्र धातु",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Formula of electric power?",
    question_hi: "विद्युत शक्ति का सूत्र?",
    options_en: ["VI", "I/R", "V/R", "IR"],
    options_hi: ["VI", "I/R", "V/R", "IR"],
    answer_en: "VI",
    answer_hi: "VI",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "A diode allows current in?",
    question_hi: "एक डायोड धारा को अनुमति देता है?",
    options_en: ["One direction", "Both directions", "Opposite direction", "No direction"],
    options_hi: ["एक दिशा", "दोनों दिशाएं", "विपरीत दिशा", "कोई दिशा नहीं"],
    answer_en: "One direction",
    answer_hi: "एक दिशा",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Numerical: I = 2 A for 5 s. Charge?",
    question_hi: "संख्यात्मक: I = 2 A, 5 s के लिए। आवेश?",
    options_en: ["10 C", "5 C", "2 C", "1 C"],
    options_hi: ["10 C", "5 C", "2 C", "1 C"],
    answer_en: "10 C",
    answer_hi: "10 C",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which wave has the highest energy?",
    question_hi: "किस तरंग की ऊर्जा सबसे अधिक होती है?",
    options_en: ["Gamma rays", "UV", "Microwaves", "Radio waves"],
    options_hi: ["गामा किरणें", "पराबैंगनी", "माइक्रोवेव", "रेडियो तरंगें"],
    answer_en: "Gamma rays",
    answer_hi: "गामा किरणें",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Beta particle is?",
    question_hi: "बीटा कण है?",
    options_en: ["Electron", "Proton", "Neutron", "Photon"],
    options_hi: ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "फोटॉन"],
    answer_en: "Electron",
    answer_hi: "इलेक्ट्रॉन",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Charge of nucleus depends on?",
    question_hi: "नाभिक का आवेश निर्भर करता है?",
    options_en: ["Number of protons", "Number of neutrons", "Mass", "Electrons"],
    options_hi: ["प्रोटॉनों की संख्या", "न्यूट्रॉनों की संख्या", "द्रव्यमान", "इलेक्ट्रॉन"],
    answer_en: "Number of protons",
    answer_hi: "प्रोटॉनों की संख्या",
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