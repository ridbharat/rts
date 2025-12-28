const questions = [
  {
    num: 1,
    question_en: "Which of the following has the highest ionization enthalpy?",
    question_hi: "निम्न में से किसका आयनीकरण एंथैल्पी सबसे अधिक है?",
    options_en: ["Nitrogen", "Oxygen", "Fluorine", "Carbon"],
    options_hi: ["नाइट्रोजन", "ऑक्सीजन", "फ्लोरीन", "कार्बन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "Which bond is the strongest?",
    question_hi: "कौन सा बंध सबसे मजबूत होता है?",
    options_en: ["Single bond", "Double bond", "Triple bond", "Coordinate bond"],
    options_hi: ["सिंगल बॉन्ड", "डबल बॉन्ड", "ट्रिपल बॉन्ड", "कोऑर्डिनेट बॉन्ड"],
    answer_en: "Triple bond",
    answer_hi: "ट्रिपल बॉन्ड",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "Which element has maximum electronegativity?",
    question_hi: "किस तत्व की विद्युतऋणात्मकता सबसे अधिक होती है?",
    options_en: ["Oxygen", "Nitrogen", "Fluorine", "Chlorine"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "फ्लोरीन", "क्लोरीन"],
    answer_en: "Fluorine",
    answer_hi: "फ्लोरीन",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "Which gas diffuses the fastest?",
    question_hi: "कौन सी गैस सबसे तेज़ी से प्रसारित होती है?",
    options_en: ["CO₂", "O₂", "H₂", "N₂"],
    options_hi: ["CO₂", "O₂", "H₂", "N₂"],
    answer_en: "H₂",
    answer_hi: "H₂",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "Which of the following is a weak electrolyte?",
    question_hi: "निम्न में से कौन सा एक कमजोर इलेक्ट्रोलाइट है?",
    options_en: ["HCl", "NaOH", "CH₃COOH", "KOH"],
    options_hi: ["HCl", "NaOH", "CH₃COOH", "KOH"],
    answer_en: "CH₃COOH",
    answer_hi: "CH₃COOH",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "What is the pH of a neutral solution at 25°C?",
    question_hi: "25°C पर एक उदासीन विलयन का pH कितना होता है?",
    options_en: ["6", "7", "8", "5"],
    options_hi: ["6", "7", "8", "5"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "Which orbital has the lowest energy in hydrogen atom?",
    question_hi: "हाइड्रोजन परमाणु में कौन सा कक्ष सबसे कम ऊर्जा वाला होता है?",
    options_en: ["2s", "2p", "1s", "3s"],
    options_hi: ["2s", "2p", "1s", "3s"],
    answer_en: "1s",
    answer_hi: "1s",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which is not a colligative property?",
    question_hi: "निम्न में से कौन सा एक कोलिगेटिव गुण नहीं है?",
    options_en: ["Boiling point elevation", "Freezing point depression", "Osmotic pressure", "Viscosity"],
    options_hi: ["उबलनांक वृद्धि", "हिमांक अवनमन", "आस्मोटिक दाब", "श्यानता"],
    answer_en: "Viscosity",
    answer_hi: "श्यानता",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "Which law relates volume and temperature?",
    question_hi: "कौन सा नियम आयतन और तापमान को सम्बंधित करता है?",
    options_en: ["Boyle's Law", "Charles' Law", "Avogadro's Law", "Graham's Law"],
    options_hi: ["बॉयल का नियम", "चार्ल्स का नियम", "एवोगैड्रो का नियम", "ग्रहैम का नियम"],
    answer_en: "Charles' Law",
    answer_hi: "चार्ल्स का नियम",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सी धातु सामान्य तापमान पर द्रव अवस्था में रहती है?",
    options_en: ["Sodium", "Potassium", "Mercury", "Aluminium"],
    options_hi: ["सोडियम", "पोटैशियम", "मरकरी", "एल्युमिनियम"],
    answer_en: "Mercury",
    answer_hi: "मरकरी",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which is an extensive property?",
    question_hi: "निम्न में से कौन एक विस्तृत गुण है?",
    options_en: ["Density", "Temperature", "Mass", "Boiling point"],
    options_hi: ["घनत्व", "तापमान", "द्रव्यमान", "उबलनांक"],
    answer_en: "Mass",
    answer_hi: "द्रव्यमान",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which species is isoelectronic with Ne?",
    question_hi: "कौन-सी प्रजाति Ne के समवैद्युतिक है?",
    options_en: ["Na⁺", "Cl⁻", "F⁻", "O²⁻"],
    options_hi: ["Na⁺", "Cl⁻", "F⁻", "O²⁻"],
    answer_en: "Na⁺",
    answer_hi: "Na⁺",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "Which shows hydrogen bonding?",
    question_hi: "कौन हाइड्रोजन बॉन्डिंग दिखाता है?",
    options_en: ["CH₄", "H₂O", "H₂S", "CO₂"],
    options_hi: ["CH₄", "H₂O", "H₂S", "CO₂"],
    answer_en: "H₂O",
    answer_hi: "H₂O",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "Catalyst used in Haber process?",
    question_hi: "हेबर प्रक्रिया में कौन सा उत्प्रेरक उपयोग होता है?",
    options_en: ["Pt", "Fe", "Ni", "Cu"],
    options_hi: ["Pt", "Fe", "Ni", "Cu"],
    answer_en: "Fe",
    answer_hi: "Fe",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "Which is a greenhouse gas?",
    question_hi: "निम्न में से कौन एक ग्रीनहाउस गैस है?",
    options_en: ["N₂", "O₂", "CO₂", "Ar"],
    options_hi: ["N₂", "O₂", "CO₂", "Ar"],
    answer_en: "CO₂",
    answer_hi: "CO₂",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Dumbbell shaped orbital is:",
    question_hi: "डम्बल आकार का कक्ष कौन सा है?",
    options_en: ["s", "p", "d", "f"],
    options_hi: ["s", "p", "d", "f"],
    answer_en: "p",
    answer_hi: "p",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "Which compound shows resonance?",
    question_hi: "कौन सा यौगिक रेज़ोनेंस दिखाता है?",
    options_en: ["CH₄", "C₂H₆", "NO₂⁻", "NaCl"],
    options_hi: ["CH₄", "C₂H₆", "NO₂⁻", "NaCl"],
    answer_en: "NO₂⁻",
    answer_hi: "NO₂⁻",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "Example of thermosetting polymer?",
    question_hi: "थर्मोसेटिंग पॉलिमर का उदाहरण क्या है?",
    options_en: ["PVC", "Teflon", "Bakelite", "Nylon"],
    options_hi: ["PVC", "Teflon", "Bakelite", "Nylon"],
    answer_en: "Bakelite",
    answer_hi: "Bakelite",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "Gas evolved when Zn reacts with HCl?",
    question_hi: "Zn के HCl से अभिक्रिया करने पर कौन सी गैस बनती है?",
    options_en: ["O₂", "H₂", "N₂", "Cl₂"],
    options_hi: ["O₂", "H₂", "N₂", "Cl₂"],
    answer_en: "H₂",
    answer_hi: "H₂",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which is a noble gas?",
    question_hi: "निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Bromine", "Fluorine", "Xenon", "Iodine"],
    options_hi: ["ब्रोमीन", "फ्लोरीन", "ज़ेनॉन", "आयोडीन"],
    answer_en: "Xenon",
    answer_hi: "ज़ेनॉन",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which is the most reactive metal?",
    question_hi: "सबसे अधिक अभिक्रियाशील धातु कौन सी है?",
    options_en: ["Zn", "Fe", "Na", "Au"],
    options_hi: ["Zn", "Fe", "Na", "Au"],
    answer_en: "Na",
    answer_hi: "Na",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "Which of the following is amphoteric?",
    question_hi: "निम्न में से कौन एम्फोटेरिक है?",
    options_en: ["Na₂O", "CaO", "Al₂O₃", "K₂O"],
    options_hi: ["Na₂O", "CaO", "Al₂O₃", "K₂O"],
    answer_en: "Al₂O₃",
    answer_hi: "Al₂O₃",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "Avogadro number is:",
    question_hi: "एवोगैड्रो संख्या क्या है?",
    options_en: ["6.022×10²³", "9.1×10⁻³¹", "3×10⁸", "1.6×10⁻¹⁹"],
    options_hi: ["6.022×10²³", "9.1×10⁻³¹", "3×10⁸", "1.6×10⁻¹⁹"],
    answer_en: "6.022×10²³",
    answer_hi: "6.022×10²³",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "Which gas turns lime water milky?",
    question_hi: "कौन सी गैस चूने के पानी को दुधिया बनाती है?",
    options_en: ["CO₂", "O₂", "N₂", "H₂"],
    options_hi: ["CO₂", "O₂", "N₂", "H₂"],
    answer_en: "CO₂",
    answer_hi: "CO₂",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "Which of the following has sp³ hybridization?",
    question_hi: "निम्न में से किसमें sp³ संकरण होता है?",
    options_en: ["CH₄", "C₂H₂", "BF₃", "CO₂"],
    options_hi: ["CH₄", "C₂H₂", "BF₃", "CO₂"],
    answer_en: "CH₄",
    answer_hi: "CH₄",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "What is the SI unit of pressure?",
    question_hi: "दाब की SI इकाई क्या है?",
    options_en: ["Pascal", "Joule", "Newton", "Watt"],
    options_hi: ["पास्कल", "जूल", "न्यूटन", "वॉट"],
    answer_en: "Pascal",
    answer_hi: "पास्कल",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "Which is the hardest form of carbon?",
    question_hi: "कार्बन का सबसे कठोर रूप कौन सा है?",
    options_en: ["Graphite", "Diamond", "Fullerene", "Coal"],
    options_hi: ["ग्रेफाइट", "हीरा", "फुलरीन", "कोयला"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "Which compound is ionic?",
    question_hi: "कौन सा यौगिक आयनिक है?",
    options_en: ["H₂O", "CO₂", "NaCl", "CH₄"],
    options_hi: ["H₂O", "CO₂", "NaCl", "CH₄"],
    answer_en: "NaCl",
    answer_hi: "NaCl",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "Which one is a Lewis acid?",
    question_hi: "कौन सा लुईस अम्ल है?",
    options_en: ["NH₃", "H₂O", "BF₃", "OH⁻"],
    options_hi: ["NH₃", "H₂O", "BF₃", "OH⁻"],
    answer_en: "BF₃",
    answer_hi: "BF₃",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "Unit of molarity?",
    question_hi: "मॉलैरिटी की इकाई क्या है?",
    options_en: ["mol/kg", "mol/L", "g/L", "kg/L"],
    options_hi: ["mol/kg", "mol/L", "g/L", "kg/L"],
    answer_en: "mol/L",
    answer_hi: "mol/L",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which molecule is linear?",
    question_hi: "कौन सा अणु रैखिक है?",
    options_en: ["H₂O", "NH₃", "CO₂", "SO₂"],
    options_hi: ["H₂O", "NH₃", "CO₂", "SO₂"],
    answer_en: "CO₂",
    answer_hi: "CO₂",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "Which element forms colored compounds?",
    question_hi: "कौन सा तत्व रंगीन यौगिक बनाता है?",
    options_en: ["s-block", "p-block", "d-block", "f-block"],
    options_hi: ["s-ब्लॉक", "p-ब्लॉक", "d-ब्लॉक", "f-ब्लॉक"],
    answer_en: "d-block",
    answer_hi: "d-ब्लॉक",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "Which is the most electronegative?",
    question_hi: "सबसे अधिक विद्युतऋणात्मक कौन है?",
    options_en: ["O", "S", "Cl", "F"],
    options_hi: ["O", "S", "Cl", "F"],
    answer_en: "F",
    answer_hi: "F",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "pH of 0.1 M HCl is:",
    question_hi: "0.1 M HCl का pH कितना होता है?",
    options_en: ["1", "2", "3", "4"],
    options_hi: ["1", "2", "3", "4"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "Which vitamin contains cobalt?",
    question_hi: "कौन सा विटामिन कोबाल्ट रखता है?",
    options_en: ["B1", "B2", "B12", "C"],
    options_hi: ["B1", "B2", "B12", "C"],
    answer_en: "B12",
    answer_hi: "B12",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which has highest boiling point?",
    question_hi: "किसका क्वथनांक सबसे अधिक है?",
    options_en: ["H₂O", "H₂S", "H₂Se", "H₂Te"],
    options_hi: ["H₂O", "H₂S", "H₂Se", "H₂Te"],
    answer_en: "H₂O",
    answer_hi: "H₂O",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "Which law explains diffusion?",
    question_hi: "कौन सा नियम प्रसरण को दर्शाता है?",
    options_en: ["Boyle", "Graham", "Dalton", "Henry"],
    options_hi: ["बॉयल", "ग्रहैम", "डल्टन", "हेनरी"],
    answer_en: "Graham",
    answer_hi: "ग्रहैम",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "Which gas is used in balloons?",
    question_hi: "गुब्बारों में कौन सी गैस भरी जाती है?",
    options_en: ["O₂", "He", "N₂", "CO₂"],
    options_hi: ["O₂", "He", "N₂", "CO₂"],
    answer_en: "He",
    answer_hi: "He",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "Which is a strong acid?",
    question_hi: "कौन सा एक प्रबल अम्ल है?",
    options_en: ["H₂CO₃", "HCl", "CH₃COOH", "H₂S"],
    options_hi: ["H₂CO₃", "HCl", "CH₃COOH", "H₂S"],
    answer_en: "HCl",
    answer_hi: "HCl",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "Which is a homogeneous mixture?",
    question_hi: "कौन सा एक सजातीय मिश्रण है?",
    options_en: ["Air", "Sand + salt", "Oil + water", "Rock"],
    options_hi: ["हवा", "रेत + नमक", "तेल + पानी", "चट्टान"],
    answer_en: "Air",
    answer_hi: "हवा",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which is an inert gas?",
    question_hi: "कौन सी गैस निष्क्रिय है?",
    options_en: ["Cl₂", "N₂", "He", "H₂"],
    options_hi: ["Cl₂", "N₂", "He", "H₂"],
    answer_en: "He",
    answer_hi: "He",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "Which has highest electron affinity?",
    question_hi: "किसकी इलेक्ट्रॉन अभिलाषा सबसे अधिक है?",
    options_en: ["Cl", "F", "Br", "I"],
    options_hi: ["Cl", "F", "Br", "I"],
    answer_en: "Cl",
    answer_hi: "Cl",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "Main ore of aluminium?",
    question_hi: "एल्युमिनियम का मुख्य अयस्क क्या है?",
    options_en: ["Magnetite", "Bauxite", "Galena", "Hematite"],
    options_hi: ["मैग्नेटाइट", "बॉक्साइट", "गैलेना", "हीमैटाइट"],
    answer_en: "Bauxite",
    answer_hi: "बॉक्साइट",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "What is the charge of electron?",
    question_hi: "इलेक्ट्रॉन का आवेश क्या होता है?",
    options_en: ["+1", "0", "-1", "+2"],
    options_hi: ["+1", "0", "-1", "+2"],
    answer_en: "-1",
    answer_hi: "-1",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "Which is an example of ligand?",
    question_hi: "लिगैंड का उदाहरण कौन सा है?",
    options_en: ["H₂O", "CO₂", "CH₄", "NaCl"],
    options_hi: ["H₂O", "CO₂", "CH₄", "NaCl"],
    answer_en: "H₂O",
    answer_hi: "H₂O",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which has the largest atomic radius?",
    question_hi: "किसका परमाणु त्रिज्या सबसे बड़ा है?",
    options_en: ["Li", "Na", "K", "Rb"],
    options_hi: ["Li", "Na", "K", "Rb"],
    answer_en: "Rb",
    answer_hi: "Rb",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "Which oxide is acidic?",
    question_hi: "कौन सा ऑक्साइड अम्लीय है?",
    options_en: ["Na₂O", "MgO", "SO₃", "CaO"],
    options_hi: ["Na₂O", "MgO", "SO₃", "CaO"],
    answer_en: "SO₃",
    answer_hi: "SO₃",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "Which indicator is used in acid-base titration?",
    question_hi: "अम्ल-क्षार टाइट्रेशन में कौन सा संकेतक उपयोग होता है?",
    options_en: ["KMnO₄", "Phenolphthalein", "Starch", "FeSO₄"],
    options_hi: ["KMnO₄", "फिनॉल्फ्थेलीन", "स्टार्च", "FeSO₄"],
    answer_en: "Phenolphthalein",
    answer_hi: "फिनॉल्फ्थेलीन",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "Which of the following is an alcohol?",
    question_hi: "निम्न में से कौन सा एक अल्कोहल है?",
    options_en: ["CH₃CHO", "CH₃OH", "CH₄", "CH₃COOH"],
    options_hi: ["CH₃CHO", "CH₃OH", "CH₄", "CH₃COOH"],
    answer_en: "CH₃OH",
    answer_hi: "CH₃OH",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "Which is used in water purification?",
    question_hi: "जल शोधन में किसका उपयोग होता है?",
    options_en: ["Chlorine", "CO₂", "H₂", "N₂"],
    options_hi: ["क्लोरीन", "CO₂", "H₂", "N₂"],
    answer_en: "Chlorine",
    answer_hi: "क्लोरीन",
    attempted: false,
    selected: ""
  },
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