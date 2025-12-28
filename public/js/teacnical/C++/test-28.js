const questions= [
    {
        "num": 1,
        "question_en": "What is the purpose of 'const' keyword in C++?",
        "question_hi": "C++ में 'const' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Makes variable read-only", "Prevents modification", "Compile-time constant", "All of above"],
        "options_hi": ["variable को read-only बनाता है", "modification रोकता है", "compile-time constant", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is 'constexpr' in C++?",
        "question_hi": "C++ में 'constexpr' क्या है?",
        "options_en": ["Compile-time constant expression", "Evaluated at compile time", "Constant expression", "All of above"],
        "options_hi": ["compile-time constant expression", "compile time पर evaluated होता है", "constant expression", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the difference between const and constexpr?",
        "question_hi": "const और constexpr में क्या अंतर है?",
        "options_en": ["constexpr must be compile-time known, const may be runtime", "constexpr for functions too", "constexpr stricter", "All of above"],
        "options_hi": ["constexpr compile-time known होना चाहिए, const runtime हो सकता है", "constexpr functions के लिए भी", "constexpr stricter है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is 'mutable' keyword in C++?",
        "question_hi": "C++ में 'mutable' कीवर्ड क्या है?",
        "options_en": ["Allows modification in const member function", "Mutable data member", "Exception to const", "All of above"],
        "options_hi": ["const member function में modification allow करता है", "mutable data member", "const का exception", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is 'volatile' keyword in C++?",
        "question_hi": "C++ में 'volatile' कीवर्ड क्या है?",
        "options_en": ["Prevents compiler optimization", "Variable may change outside program", "Hardware registers", "All of above"],
        "options_hi": ["compiler optimization रोकता है", "variable program के बाहर change हो सकता है", "hardware registers", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is 'static' keyword in C++?",
        "question_hi": "C++ में 'static' कीवर्ड क्या है?",
        "options_en": ["Static storage duration", "File scope linkage", "Class static members", "All of above"],
        "options_hi": ["static storage duration", "file scope linkage", "class static members", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is 'extern' keyword in C++?",
        "question_hi": "C++ में 'extern' कीवर्ड क्या है?",
        "options_en": ["External linkage", "Declaration without definition", "Link to other translation units", "All of above"],
        "options_hi": ["external linkage", "definition के बिना declaration", "other translation units से link", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is 'register' keyword in C++?",
        "question_hi": "C++ में 'register' कीवर्ड क्या है?",
        "options_en": ["Hint to store in register (deprecated)", "Optimization hint", "C++17 deprecated", "All of above"],
        "options_hi": ["register में store करने का hint (deprecated)", "optimization hint", "C++17 deprecated", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is 'thread_local' keyword in C++?",
        "question_hi": "C++ में 'thread_local' कीवर्ड क्या है?",
        "options_en": ["Thread-local storage", "Each thread has own copy", "Per-thread variable", "All of above"],
        "options_hi": ["thread-local storage", "each thread has own copy", "per-thread variable", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is 'auto' keyword in C++?",
        "question_hi": "C++ में 'auto' कीवर्ड क्या है?",
        "options_en": ["Type deduction", "Automatic type", "Compiler infers type", "All of above"],
        "options_hi": ["type deduction", "automatic type", "compiler type infer करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is 'decltype' in C++?",
        "question_hi": "C++ में 'decltype' क्या है?",
        "options_en": ["Declares type of expression", "Type inquiry", "Gets type at compile time", "All of above"],
        "options_hi": ["expression का type declare करता है", "type inquiry", "compile time पर type gets करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is 'typename' keyword in C++?",
        "question_hi": "C++ में 'typename' कीवर्ड क्या है?",
        "options_en": ["Specifies dependent type in templates", "Type name specifier", "Template type parameter", "All of above"],
        "options_hi": ["templates में dependent type specify करता है", "type name specifier", "template type parameter", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is 'using' keyword in C++?",
        "question_hi": "C++ में 'using' कीवर्ड क्या है?",
        "options_en": ["Type alias", "Namespace using", "Bring names into scope", "All of above"],
        "options_hi": ["type alias", "namespace using", "names को scope में लाना", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is 'typedef' in C++?",
        "question_hi": "C++ में 'typedef' क्या है?",
        "options_en": ["Type alias (legacy)", "Creates type synonym", "Alternative to using", "All of above"],
        "options_hi": ["type alias (legacy)", "type synonym creates करता है", "using का alternative", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is 'friend' keyword in C++?",
        "question_hi": "C++ में 'friend' कीवर्ड क्या है?",
        "options_en": ["Grants access to private members", "Friend function/class", "Access specifier exception", "All of above"],
        "options_hi": ["private members तक access grant करता है", "friend function/class", "access specifier exception", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is 'explicit' keyword in C++?",
        "question_hi": "C++ में 'explicit' कीवर्ड क्या है?",
        "options_en": ["Prevents implicit conversions", "Explicit constructor", "No automatic conversion", "All of above"],
        "options_hi": ["implicit conversions रोकता है", "explicit constructor", "no automatic conversion", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is 'virtual' keyword in C++?",
        "question_hi": "C++ में 'virtual' कीवर्ड क्या है?",
        "options_en": ["Enables polymorphism", "Virtual function", "Dynamic dispatch", "All of above"],
        "options_hi": ["polymorphism enable करता है", "virtual function", "dynamic dispatch", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is 'override' keyword in C++?",
        "question_hi": "C++ में 'override' कीवर्ड क्या है?",
        "options_en": ["Explicitly overrides virtual function", "Compile-time check", "Prevents mistakes", "All of above"],
        "options_hi": ["explicitly virtual function override करता है", "compile-time check", "mistakes रोकता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is 'final' keyword in C++?",
        "question_hi": "C++ में 'final' कीवर्ड क्या है?",
        "options_en": ["Prevents further overriding", "Final class/function", "No more derivation", "All of above"],
        "options_hi": ["further overriding रोकता है", "final class/function", "no more derivation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is 'noexcept' keyword in C++?",
        "question_hi": "C++ में 'noexcept' कीवर्ड क्या है?",
        "options_en": ["Specifies no exceptions thrown", "Exception specification", "Optimization hint", "All of above"],
        "options_hi": ["specifies no exceptions thrown", "exception specification", "optimization hint", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is 'constinit' keyword in C++20?",
        "question_hi": "C++20 में 'constinit' कीवर्ड क्या है?",
        "options_en": ["Constant initialization", "Static initialization check", "Prevents runtime init", "All of above"],
        "options_hi": ["constant initialization", "static initialization check", "runtime init रोकता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is 'consteval' keyword in C++20?",
        "question_hi": "C++20 में 'consteval' कीवर्ड क्या है?",
        "options_en": ["Immediate function", "Must be compile-time evaluated", "Constexpr stricter", "All of above"],
        "options_hi": ["immediate function", "compile-time evaluated होना चाहिए", "constexpr stricter", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is 'concept' keyword in C++20?",
        "question_hi": "C++20 में 'concept' कीवर्ड क्या है?",
        "options_en": ["Template constraint", "Type requirement", "Named boolean predicate", "All of above"],
        "options_hi": ["template constraint", "type requirement", "named boolean predicate", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is 'requires' keyword in C++20?",
        "question_hi": "C++20 में 'requires' कीवर्ड क्या है?",
        "options_en": ["Specifies template constraints", "Requires clause", "Concept requirements", "All of above"],
        "options_hi": ["template constraints specify करता है", "requires clause", "concept requirements", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is 'co_await' keyword in C++20?",
        "question_hi": "C++20 में 'co_await' कीवर्ड क्या है?",
        "options_en": ["Coroutine await expression", "Suspend coroutine", "Wait for result", "All of above"],
        "options_hi": ["coroutine await expression", "coroutine suspend करता है", "result के लिए wait करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is 'co_yield' keyword in C++20?",
        "question_hi": "C++20 में 'co_yield' कीवर्ड क्या है?",
        "options_en": ["Coroutine yield expression", "Yield value from coroutine", "Producer coroutine", "All of above"],
        "options_hi": ["coroutine yield expression", "coroutine से value yield करता है", "producer coroutine", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is 'co_return' keyword in C++20?",
        "question_hi": "C++20 में 'co_return' कीवर्ड क्या है?",
        "options_en": ["Coroutine return", "Return from coroutine", "Finish coroutine", "All of above"],
        "options_hi": ["coroutine return", "coroutine से return", "coroutine finish करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is 'import' keyword in C++20?",
        "question_hi": "C++20 में 'import' कीवर्ड क्या है?",
        "options_en": ["Module import", "Import modules", "Header replacement", "All of above"],
        "options_hi": ["module import", "modules import करता है", "header replacement", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is 'module' keyword in C++20?",
        "question_hi": "C++20 में 'module' कीवर्ड क्या है?",
        "options_en": ["Declares module", "Module definition", "Compilation unit", "All of above"],
        "options_hi": ["module declare करता है", "module definition", "compilation unit", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is 'export' keyword in C++20?",
        "question_hi": "C++20 में 'export' कीवर्ड क्या है?",
        "options_en": ["Exports from module", "Module interface", "Visible to importers", "All of above"],
        "options_hi": ["module से exports करता है", "module interface", "importers के लिए visible", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is 'alignas' specifier in C++?",
        "question_hi": "C++ में 'alignas' specifier क्या है?",
        "options_en": ["Alignment specification", "Memory alignment", "Align variable", "All of above"],
        "options_hi": ["alignment specification", "memory alignment", "variable align करता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is 'alignof' operator in C++?",
        "question_hi": "C++ में 'alignof' operator क्या है?",
        "options_en": ["Alignment requirement", "Get alignment of type", "Alignment query", "All of above"],
        "options_hi": ["alignment requirement", "type का alignment get करता है", "alignment query", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is 'sizeof' operator in C++?",
        "question_hi": "C++ में 'sizeof' operator क्या है?",
        "options_en": ["Size of type/object", "Memory size", "Compile-time operator", "All of above"],
        "options_hi": ["type/object का size", "memory size", "compile-time operator", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is 'typeid' operator in C++?",
        "question_hi": "C++ में 'typeid' operator क्या है?",
        "options_en": ["Runtime type information", "Type identification", "RTTI operator", "All of above"],
        "options_hi": ["runtime type information", "type identification", "RTTI operator", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is 'dynamic_cast' in C++?",
        "question_hi": "C++ में 'dynamic_cast' क्या है?",
        "options_en": ["Runtime type-safe cast", "Polymorphic cast", "Downcast with check", "All of above"],
        "options_hi": ["runtime type-safe cast", "polymorphic cast", "downcast with check", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is 'static_cast' in C++?",
        "question_hi": "C++ में 'static_cast' क्या है?",
        "options_en": ["Compile-time cast", "Basic conversions", "No runtime check", "All of above"],
        "options_hi": ["compile-time cast", "basic conversions", "no runtime check", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is 'reinterpret_cast' in C++?",
        "question_hi": "C++ में 'reinterpret_cast' क्या है?",
        "options_en": ["Low-level reinterpretation", "Dangerous cast", "Bit pattern reinterpret", "All of above"],
        "options_hi": ["low-level reinterpretation", "dangerous cast", "bit pattern reinterpret", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is 'const_cast' in C++?",
        "question_hi": "C++ में 'const_cast' क्या है?",
        "options_en": ["Add/remove const", "Const modification", "Cast away const", "All of above"],
        "options_hi": ["add/remove const", "const modification", "cast away const", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is 'bit_cast' in C++20?",
        "question_hi": "C++20 में 'bit_cast' क्या है?",
        "options_en": ["Type punning without UB", "Bitwise type conversion", "Safe reinterpretation", "All of above"],
        "options_hi": ["type punning without UB", "bitwise type conversion", "safe reinterpretation", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is 'likely' attribute in C++20?",
        "question_hi": "C++20 में 'likely' attribute क्या है?",
        "options_en": ["Branch prediction hint", "Likely execution path", "Optimization attribute", "All of above"],
        "options_hi": ["branch prediction hint", "likely execution path", "optimization attribute", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is 'unlikely' attribute in C++20?",
        "question_hi": "C++20 में 'unlikely' attribute क्या है?",
        "options_en": ["Branch prediction hint", "Unlikely execution path", "Optimization attribute", "All of above"],
        "options_hi": ["branch prediction hint", "unlikely execution path", "optimization attribute", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is 'no_unique_address' attribute in C++20?",
        "question_hi": "C++20 में 'no_unique_address' attribute क्या है?",
        "options_en": ["Allows empty member optimization", "Overlap empty members", "Memory optimization", "All of above"],
        "options_hi": ["empty member optimization allow करता है", "empty members overlap करता है", "memory optimization", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is 'assume' attribute in C++23?",
        "question_hi": "C++23 में 'assume' attribute क्या है?",
        "options_en": ["Assumption hint to optimizer", "Compiler assumption", "Optimization hint", "All of above"],
        "options_hi": ["optimizer के लिए assumption hint", "compiler assumption", "optimization hint", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is 'final' for classes?",
        "question_hi": "classes के लिए 'final' क्या है?",
        "options_en": ["Prevents inheritance", "Final class", "No derived classes", "All of above"],
        "options_hi": ["inheritance रोकता है", "final class", "no derived classes", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is 'final' for virtual functions?",
        "question_hi": "virtual functions के लिए 'final' क्या है?",
        "options_en": ["Prevents overriding in derived", "Final function", "No further override", "All of above"],
        "options_hi": ["derived में overriding रोकता है", "final function", "no further override", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is 'override' for virtual functions?",
        "question_hi": "virtual functions के लिए 'override' क्या है?",
        "options_en": ["Explicitly marks override", "Compile-time check", "Prevents mistakes", "All of above"],
        "options_hi": ["explicitly override mark करता है", "compile-time check", "mistakes रोकता है", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is 'transaction_safe' in C++?",
        "question_hi": "C++ में 'transaction_safe' क्या है?",
        "options_en": ["Transactional memory specifier", "Transaction safe function", "TM feature", "All of above"],
        "options_hi": ["transactional memory specifier", "transaction safe function", "TM feature", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is 'synchronized' in C++?",
        "question_hi": "C++ में 'synchronized' क्या है?",
        "options_en": ["Synchronized block", "Transaction block", "Atomic block", "All of above"],
        "options_hi": ["synchronized block", "transaction block", "atomic block", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'atomic_noexcept' in C++?",
        "question_hi": "C++ में 'atomic_noexcept' क्या है?",
        "options_en": ["Atomic operation specifier", "Noexcept atomic", "Exception specification", "All of above"],
        "options_hi": ["atomic operation specifier", "noexcept atomic", "exception specification", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is 'deprecated' attribute in C++?",
        "question_hi": "C++ में 'deprecated' attribute क्या है?",
        "options_en": ["Marks deprecated feature", "Warning for use", "Legacy feature", "All of above"],
        "options_hi": ["deprecated feature mark करता है", "use के लिए warning", "legacy feature", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    }
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