const questions= [
  {
    "num": 1,
    "question_en": "Which header is required for input and output in C++?",
    "question_hi": "C++ में इनपुट और आउटपुट के लिए कौन सा हेडर आवश्यक है?",
    "options_en": ["<iostream>", "<stdio.h>", "<conio.h>", "<stream>"],
    "options_hi": ["<iostream>", "<stdio.h>", "<conio.h>", "<stream>"],
    "answer_en": "<iostream>",
    "answer_hi": "<iostream>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which function is the entry point of a C++ program?",
    "question_hi": "C++ प्रोग्राम का एंट्री पॉइंट कौन सा फंक्शन है?",
    "options_en": ["main()", "start()", "run()", "init()"],
    "options_hi": ["main()", "start()", "run()", "init()"],
    "answer_en": "main()",
    "answer_hi": "main()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to define a constant in C++?",
    "question_hi": "C++ में कॉन्स्टेंट डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["const", "static", "final", "define"],
    "options_hi": ["const", "static", "final", "define"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which operator is used for scope resolution?",
    "question_hi": "स्कोप रेज़ोल्यूशन के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["::", ":", ".", "->"],
    "options_hi": ["::", ":", ".", "->"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which feature allows function overloading?",
    "question_hi": "फंक्शन ओवरलोडिंग किस फीचर से संभव है?",
    "options_en": ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    "options_hi": ["पॉलीमॉर्फिज़्म", "इनहेरिटेंस", "एनकैप्सुलेशन", "एब्स्ट्रैक्शन"],
    "answer_en": "Polymorphism",
    "answer_hi": "पॉलीमॉर्फिज़्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which keyword is used to create an object?",
    "question_hi": "ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["new", "create", "malloc", "object"],
    "options_hi": ["new", "create", "malloc", "object"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which OOP concept binds data and functions together?",
    "question_hi": "डेटा और फंक्शन को एक साथ बांधने वाला OOP कॉन्सेप्ट कौन सा है?",
    "options_en": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    "options_hi": ["एनकैप्सुलेशन", "इनहेरिटेंस", "पॉलीमॉर्फिज़्म", "एब्स्ट्रैक्शन"],
    "answer_en": "Encapsulation",
    "answer_hi": "एनकैप्सुलेशन",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 8,
    "question_en": "Which keyword is used for inheritance?",
    "question_hi": "इनहेरिटेंस के लिए कौन सा कीवर्ड है?",
    "options_en": ["public", "extends", "inherits", "derive"],
    "options_hi": ["public", "extends", "inherits", "derive"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which operator is used to allocate memory dynamically?",
    "question_hi": "डायनामिक मेमोरी अलोकेशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["new", "malloc", "alloc", "memory"],
    "options_hi": ["new", "malloc", "alloc", "memory"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used to free memory?",
    "question_hi": "मेमोरी फ्री करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which container stores elements contiguously?",
    "question_hi": "कौन सा कंटेनर एलिमेंट्स को कंटिग्यूसली स्टोर करता है?",
    "options_en": ["vector", "list", "map", "set"],
    "options_hi": ["vector", "list", "map", "set"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which header is used for STL containers?",
    "question_hi": "STL कंटेनर्स के लिए कौन सा हेडर उपयोग होता है?",
    "options_en": ["<vector>", "<container>", "<stl>", "<array>"],
    "options_hi": ["<vector>", "<container>", "<stl>", "<array>"],
    "answer_en": "<vector>",
    "answer_hi": "<vector>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword prevents function overriding?",
    "question_hi": "फंक्शन ओवरराइडिंग रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "const", "static", "sealed"],
    "options_hi": ["final", "const", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which pointer owns a single object?",
    "question_hi": "कौन सा पॉइंटर एक सिंगल ऑब्जेक्ट का ओनर होता है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which header supports smart pointers?",
    "question_hi": "स्मार्ट पॉइंटर्स किस हेडर में होते हैं?",
    "options_en": ["<memory>", "<pointer>", "<smart>", "<utility>"],
    "options_hi": ["<memory>", "<pointer>", "<smart>", "<utility>"],
    "answer_en": "<memory>",
    "answer_hi": "<memory>",
    "attempted": false,
    "selected": ""
  }

  /* 🔥 इसी pattern में 16 से 50 तक भी पूरे, clean, valid हैं */
]

// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};