const questions = [
    {
        text: "מהי מטרת מבחן A/B?",
        image: "images/1ab-test.jpg",
        options: [
            { text: "לבדוק האם קיים הבדל מובהק בין שתי גרסאות של משתנה", score: 10 },
            { text: "לקבוע את הגורמים המשפיעים ביותר על משתנה תלוי", score: 0 },
            { text: "לחזות ערכים עתידיים על בסיס נתוני עבר", score: 0 },
            { text: "לבצע קיבוץ נתונים לקבוצות דומות", score: 0 }
        ],
        multipleAnswers: false
    },
    {
        text: "מהו תהליך EDA (Exploratory Data Analysis)?",
        image: "images/2eda.jpg",
        options: [
            { text: "תהליך לבניית מודלים סטטיסטיים ותחזיות עתידיות", score: 0 },
            { text: "תהליך לניתוח ראשוני של נתונים כדי לגלות דפוסים, אנומליות ויחסים", score: 10 },
            { text: "תהליך לאיסוף נתונים ממקורות שונים", score: 0 },
            { text: "תהליך ליצירת ויזואליזציות נתונים לפרזנטציות", score: 0 }
        ],
        multipleAnswers: false
    },
    {
        text: "איזו שפה משמשת בעיקר לכתיבת שאילתות למסדי נתונים רלציוניים?",
        image: "images/3codecubes.jpg",
        options: [
            { text: "PHP", score: 0 },
            { text: "SQL", score: 10 },
            { text: "JavaScript", score: 0 },
            { text: "HTML", score: 0 }
        ],
        multipleAnswers: false
    },
    {
        text: "השנה, 2024, שפת SQL מציינת תאריך עגול מאז הוצגה לראשונה. כמה שנים עברו מאז שהוצגה השפה?",
        image: "images/4sql.jpg",
        options: [
            { text: "30 שנה", score: 0 },
            { text: "40 שנה", score: 0 },
            { text: "50 שנה", score: 10 },
            { text: "60 שנה", score: 0 }
        ],
        multipleAnswers: false
    },
    {
        text: "איזו מהפלטפורמות הבאות מציעה מערכי נתונים (Datasets) לתרגול וניתוח עבור דאטה אנליסטים?",
        image: "images/5datasets.jpg",
        options: [
            { text: "Stack Overflow", score: 0 },
            { text: "Kaggle", score: 10 },
            { text: "DataCamp", score: 0 },
            { text: "Reddit", score: 0 }
        ],
        multipleAnswers: false
    },
    {
        text: 'האם אתה מכיר את הספר הדיגיטלי "הבעה בגרף" מאת בלה (גוטיה) גרף?',
        image: "images/6Vizualization.jpg",
        options: [
            { text: "כן, קראתי את הספר", score: 10 },
            { text: "שמעתי עליו אך לא קראתי", score: 5 },
            { text: "לא שמעתי עליו", score: 0 },
            { text: "מכיר את בלה גרף, אך לא ידעתי שיש לה ספר ייעודי", score: 3 }
        ],
        multipleAnswers: false
    },
    {
        text: "באיזה סוג גרף כדאי להשתמש כדי להציג התפלגות של משתנה רציף?",
        image: "images/7graph-types.jpg",
        options: [
            { text: "היסטוגרמה (Histogram)", score: 10 },
            { text: "גרף עמודות (Bar Chart)", score: 0 },
            { text: "גרף פאי (Pie Chart)", score: 0 },
            { text: "גרף דונאט (Donut Chart)", score: 0 }
        ],
        multipleAnswers: false
    },
    {
        text: "איזו פונקציית אקסל היעילה ביותר למציאת ערך בטבלה גדולה?",
        image: "images/8excel.jpg",
        options: [
            { text: "HLOOKUP", score: 0 },
            { text: "INDEX-MATCH", score: 0 },
            { text: "VLOOKUP", score: 0 },
            { text: "XLOOKUP", score: 10 },
            { text: "SUMIF", score: 0 },
            { text: "CONCATENATE", score: 0 }
        ],
        multipleAnswers: false
    },
    {
        text: "איזה מהבאים הם כלי ויזואליזציה נפוצים לניתוח נתונים? (בחר את כל התשובות הנכונות)",
        image: "images/9visualization-tools.jpg",
        options: [
            { text: "Tableau", score: 2 },
            { text: "DataGrip", score: -2 },
            { text: "Power BI", score: 2 },
            { text: "MongoDB", score: -2 },
            { text: "Jupyter Notebook", score: 2 },
            { text: "Maven", score: -2 },
            { text: "Qlik", score: 2 },
            { text: "Hadoop", score: -2 },
            { text: "Plotly", score: 2 },
            { text: "Docker", score: -2 }
        ],
        multipleAnswers: true
    },
    {
        text: "כיצד צפויה בינה מלאכותית לשנות את תפקיד האנליסט בשנים הקרובות?",
        image: "images/10ai-impact.jpg",
        options: [
            { text: "בינה מלאכותית תחליף לחלוטין את האנליסטים האנושיים, מייתרת את הצורך בהם", score: 0 },
            { text: "בינה מלאכותית תאפשר לאנליסטים להתמקד במשימות אסטרטגיות יותר, תוך אוטומציה של משימות שגרתיות ושיפור היכולות האנליטיות", score: 10 },
            { text: "בינה מלאכותית לא תשפיע כלל על עבודת האנליסט, שתישאר זהה למצב כיום", score: 0 },
            { text: "בינה מלאכותית תדרוש מאנליסטים להתמקד בעיקר בהיבטים האתיים והחברתיים של ניתוח נתונים", score: 0 }
        ],
        multipleAnswers: false
    },
    {
        text: "<strong>שאלת בונוס:</strong> איזו מטריקה תעזור לך להבין אם המנכ\"ל באמת אוהב את הדו\"ח שלך, או שהוא פשוט לא קרא אותו?",
        image: "images/11bonus-question.jpg",
        options: [
            { text: "א. זמן שחלף בין שליחת הדו\"ח לתגובת המנכ\"ל", score: 2 },
            { text: "ב. מספר השאלות המעמיקות ששאל המנכ\"ל לגבי הדו\"ח", score: 5 },
            { text: "ג. כמות הפעמים שהמנכ\"ל הזכיר את הדו\"ח בישיבות הבאות", score: 3 },
            { text: "ד. מספר הפעמים שהמנכ\"ל אמר 'מעניין' תוך התייחסות בשיחתכם לדוח", score: 0 }
        ],
        multipleAnswers: false,
        isBonus: true // סימון האם זו שאלה בונוס
    }
];

let currentQuestion = 0;
let selectedAnswers = Array(questions.length).fill(null); // Array to store selected answers

// משתנה להגדרת מצב התצוגה (משחק או צפייה בתשובות)
let reviewMode = false;

// אלמנט קול חגיגי בלבד
const celebrationSound = document.getElementById('celebration-sound');

// אלמנט אנימציית קונפטי
const confettiContainer = document.getElementById('confetti-container');

function displayQuestion() {
    const quizContainer = document.getElementById('quiz');
    const question = questions[currentQuestion];
    let html = `
        <div class="question">
            <h2>שאלה ${currentQuestion + 1} מתוך ${questions.length}</h2>
            <img src="${question.image}" alt="Question Image">
            <p>${question.text}</p>
            <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        if (reviewMode) {
            const isCorrect = option.score > 0;
            const isSelected = Array.isArray(selectedAnswers[currentQuestion]) 
                                ? selectedAnswers[currentQuestion].includes(index) 
                                : selectedAnswers[currentQuestion] === index;
            let buttonClass = "";
            let icon = "";

            if (isCorrect) {
                buttonClass = "correct";
                icon = '<i class="fas fa-check"></i>';
            } else if (isSelected && option.score <= 0) {
                buttonClass = "incorrect";
                icon = '<i class="fas fa-times"></i>';
            } else {
                // תשובות שלא נבחרו ואינן נכונות לא יקבלו סימון
                icon = '';
            }

            // הוספת הניקוד לתשובה עם שינוי פורמט למינוס אחרי המספר
            let scoreText = option.score < 0 ? ` (${Math.abs(option.score)}- נק')` : ` (${option.score} נק')`;

            html += `
                <button class="${buttonClass}">${icon} ${option.text}${scoreText}</button>
            `;
        } else {
            // מצב משחק רגיל
            const isSelected = Array.isArray(selectedAnswers[currentQuestion]) 
                                ? selectedAnswers[currentQuestion].includes(index) 
                                : selectedAnswers[currentQuestion] === index;
            // הוספת אייקונים
            let icon = "";
            if (isSelected) {
                icon = '<i class="fas fa-check"></i>';
            }

            html += `
                <button class="${isSelected ? 'selected' : ''}" onclick="selectAnswer(${index})">${icon} ${option.text}</button>
            `;
        }
    });
    
    html += `
        </div>
    </div>
    `;

    quizContainer.innerHTML = html;
    updateProgressBar();
    updateNavigationButtons();
}

function updateProgressBar() {
    const progressFill = document.getElementById('progress-fill');
    let progress;
    if (reviewMode) {
        progress = 100;
    } else {
        progress = ((currentQuestion + 1) / questions.length) * 100; // עדכון נכון של התקדמות
    }
    progressFill.style.width = `${progress}%`;
}

function selectAnswer(index) {
    const question = questions[currentQuestion];
    const isMultiple = question.multipleAnswers;
    if (!reviewMode) { // רק במצב משחק רגיל
        if (isMultiple) {
            if (!Array.isArray(selectedAnswers[currentQuestion])) {
                selectedAnswers[currentQuestion] = [];
            }
            const answerIndex = selectedAnswers[currentQuestion].indexOf(index);
            if (answerIndex > -1) {
                selectedAnswers[currentQuestion].splice(answerIndex, 1);
            } else {
                selectedAnswers[currentQuestion].push(index);
            }
        } else {
            selectedAnswers[currentQuestion] = index;
        }
        displayQuestion();
    }
}

function nextQuestion() {
    const question = questions[currentQuestion];
    if (question.multipleAnswers) {
        if (!selectedAnswers[currentQuestion] || selectedAnswers[currentQuestion].length === 0) {
            alert('נא לבחור לפחות תשובה אחת לפני שתמשיך');
            return;
        }
    } else {
        if (selectedAnswers[currentQuestion] === null) {
            alert('נא לבחור תשובה לפני שתמשיך');
            return;
        }
    }
    
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    // Disable prev button on first question
    if (currentQuestion === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // Change "הבא" button to "סיים" on last question with same icon
    if (currentQuestion === questions.length - 1) {
        nextButton.innerHTML = "<i class='fas fa-arrow-left'></i> סיים";
    } else {
        nextButton.innerHTML = "<i class='fas fa-arrow-left'></i> הבא";
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz');
    const navigationContainer = document.getElementById('navigation');
    const resultContainer = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const typeElement = document.getElementById('analyst-type');
    const trophyImage = document.getElementById('trophy-image'); // תמונת הגביע
    const progressFill = document.getElementById('progress-fill');
    const confettiContainer = document.getElementById('confetti-container');
    
    // עדכון פס ההתקדמות ל-100%
    progressFill.style.width = '100%';

    quizContainer.style.display = 'none';
    navigationContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // חישוב ניקוד כולל
    let score = 0;
    questions.forEach((question, index) => {
        const answer = selectedAnswers[index];
        if (question.multipleAnswers) {
            if (Array.isArray(answer)) {
                answer.forEach(a => {
                    score += question.options[a].score;
                });
            }
        } else {
            if (answer !== null) {
                score += questions[index].options[answer].score;
            }
        }
    });

    // חישוב ניקוד מירבי אפשרי
    let maxScore = 0;
    questions.forEach(question => {
        if (question.multipleAnswers) {
            question.options.forEach(option => {
                if (option.score > 0) {
                    maxScore += option.score;
                }
            });
        } else {
            maxScore += Math.max(...question.options.map(o => o.score));
        }
    });

    scoreElement.textContent = `ציון: ${score} מתוך ${maxScore}`;
    
    let analystType;
    if (score >= 90) { // שינוי הסף ל-90
        analystType = "אנליסט על חלל";
        trophyImage.style.display = 'block'; // הצגת תמונת הגביע
        setTimeout(() => {
            trophyImage.classList.add('show'); // הוספת מחלקת show לאנימציה
        }, 100); // זמן קצר לאחר הצגת התמונה כדי לאפשר אנימציה
    } else if (score >= 50 && score < 90) { // עדכון לקטגוריה החדשה
        analystType = "אנליסט מתפתח"; // שם חדש לקטגוריה
        trophyImage.style.display = 'none'; // הסתרת תמונת הגביע
        trophyImage.classList.remove('show'); // הסרת מחלקת show
    } else { // נמוך מ-50
        analystType = "אנליסט מתחיל"; // שם מותאם
        trophyImage.style.display = 'none'; // הסתרת תמונת הגביע
        trophyImage.classList.remove('show'); // הסרת מחלקת show
    }
    
    typeElement.textContent = `אתה ${analystType}!`;

    // הפעלת קול חגיגי והוספת אנימציית קונפטי
    celebrationSound.play();
    createConfetti();
}

function showAnswers() {
    reviewMode = true;
    const resultContainer = document.getElementById('result');
    const answersContainer = document.getElementById('answers');
    const answersQuiz = document.getElementById('answers-quiz');
    const quizContainer = document.getElementById('quiz');
    const navigationContainer = document.getElementById('navigation');
    const progressFill = document.getElementById('progress-fill');

    // הסתרת תוצאות וכפתור "ראה תשובות"
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'none';
    navigationContainer.style.display = 'none';
    answersContainer.style.display = 'block';

    // הצגת כל השאלות עם התשובות כולל הניקוד
    let html = '';
    questions.forEach((question, qIndex) => {
        html += `
            <div class="question">
                <h2>שאלה ${qIndex + 1} מתוך ${questions.length}</h2>
                <img src="${question.image}" alt="Question Image">
                <p>${question.text}</p>
                <div class="options">
        `;
        question.options.forEach((option, oIndex) => {
            const isCorrect = option.score > 0;
            const isSelected = Array.isArray(selectedAnswers[qIndex]) 
                                ? selectedAnswers[qIndex].includes(oIndex) 
                                : selectedAnswers[qIndex] === oIndex;
            let buttonClass = "";
            let icon = "";

            if (isCorrect) {
                buttonClass = "correct";
                icon = '<i class="fas fa-check"></i>';
            } else if (isSelected && option.score <= 0) {
                buttonClass = "incorrect";
                icon = '<i class="fas fa-times"></i>';
            } else {
                // תשובות שלא נבחרו ואינן נכונות לא יקבלו סימון
                icon = '';
            }

            // הוספת הניקוד לתשובה עם שינוי פורמט למינוס אחרי המספר
            let scoreText = option.score < 0 ? ` (${Math.abs(option.score)}- נק')` : ` (${option.score} נק')`;

            html += `
                <button class="${buttonClass}">${icon} ${option.text}${scoreText}</button>
            `;
        });
        html += `
                </div>
            </div>
        `;
    });

    answersQuiz.innerHTML = html;
    updateProgressBar();
}

function createConfetti() {
    const confettiColors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#fbbf24'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confetti.style.animationDuration = `${3 + Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }

    // לנקות את הקונפטי לאחר זמן מסוים
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// התחל את השאלון
displayQuestion();
