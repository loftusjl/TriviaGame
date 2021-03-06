let controls = $('#controls');
let timerLoop = setInterval(countdownTimer, 1000);
let displayAnswer = setInterval(answerTimer, 1000);
let timer = 10;
let questions = [{ //question, correct, answers[]
        question: "In which of the following circumstances must an individual be given the opportunity to agree or object to the use and disclosure of their PHI? ",
        correct: "D. Both A and C",
        answers: ["A. Before their information is included in a facility directory",
            "B. Prior to disclosure to a business associate",
            "C. Before PHI directly relevant to a person's involvement with the individual's care or payment of health care is shared with that person",
            "D. Both A and C"
        ]
    },
    {
        question: "Which of the following statements about the HIPAA Security Rule are true? ",
        correct: "D All of the above",
        answers: ["A Established a national set of standards for the protection of PHI that is created, received, maintained, or transmitted in electronic media by a HIPAA covered entity (CE) or business associate (BA)",
            "B Protects electronic PHI (ePHI)",
            "C Addresses three types of safeguards - administrative, technical and physical - that must be in place to secure individuals' ePHI",
            "D All of the above"
        ]
    },
    {
        question: "A covered entity (CE) must have an established complaint process",
        correct: true,
        answers: [true, false]
    },
    {
        question: "The e-Government Act promotes the use of electronic government services by the public and improves the use of information technology in the government.",
        correct: true,
        answers: [true, false]
    },
    {
        question: "When must a breach be reported to the U.S. Computer Emergency Readiness Team?",
        correct: "A. Within 1 hour of discovery",
        answers: ["A. Within 1 hour of discovery",
            "B. Within 24 hours of discovery",
            "C. Within 48 hours of discovery",
            "D. Within 72 hours of discovery"
        ]
    },
    {
        question: "Which of the following statements about the Privacy Act are true?",
        correct: "D. All of the above",
        answers: ["A. Balances the privacy rights of individuals with the Government's need to collect and maintain information",
            "B. Regulates how federal agencies solicit and collect personally identifiable information (PII)",
            "C. Sets forth requirements for the maintenance, use, and disclosure of PII",
            "D. All of the above"
        ]
    },
    {
        question: "What of the following are categories for punishing violations of federal health care laws? ",
        correct: "D. All of the above",
        answers: ["A. Criminal penalties",
            "B. Sanctions ",
            "C. Civil money penalties",
            "D. All of the above"
        ]
    },
    {
        question: "Which of the following are common causes of breaches? ",
        correct: "D. All of the above",
        answers: ["A. Theft and intentional unauthorized access to PHI and personally identifiable information (PII)",
            "B. Human error (e.g. misdirected communication containing PHI or PII)",
            "C. Lost or stolen electronic media devices or paper records containing PHI or PII",
            "D. All of the above"
        ]
    },
    {
        question: "Which of the following are fundamental objectives of information security? ",
        correct: "D. All of the above",
        answers: ["A. Availability",
            "B. Integrity",
            "C. Confidentiality",
            "D. All of the above"
        ]
    },
    {
        question: "If an individual believes that a DoD covered entity (CE) is not complying with HIPAA, he or she may file a complaint with the?",
        correct: "D. All of the above",
        answers: ["A. DHA Privacy Office",
            "B. HHS Secretary",
            "C. MTF HIPAA Privacy Officer",
            "D. All of the above"
        ]
    },
    {
        question: "Technical safeguards are?",
        correct: "C. Information technology and the associated policies and procedures that are used to protect and control access to ePHI ",
        answers: ["A. Administrative actions, and policies and procedures that are used to manage the selection, development, implementation and maintenance of security measures to protect electronic PHI (ePHI). These safeguards also outline how to manage the conduct of the workforce in relation to the protection of ePHI",
            "B. Physical measures, including policies and procedures that are used to protect electronic information systems and related buildings and equipment, from natural and environmental hazards, and unauthorized intrusion",
            "C. Information technology and the associated policies and procedures that are used to protect and control access to ePHI ",
            "D. None of the above"
        ]
    },
    {
        question: "A Privacy Impact Assessment (PIA) is an analysis of how information is handled?",
        correct: "D. All of the above",
        answers: ["A. To ensure handling conforms to applicable legal, regulatory, and policy requirements regarding privacy",
            "B. To determine the risks and effects of collecting, maintaining and disseminating information in identifiable form in an electronic information system",
            "C. To examine and evaluate protections and alternative processes for handling information to ",
            "D. All of the above",
        ]
    },
    {
        question: "A breach as defined by the DoD is broader than a HIPAA breach (or breach defined by HHS).",
        correct: true,
        answers: [true, false]
    },
    {
        question: "Which of the following are breach prevention best practices? ",
        correct: "D. All of the above",
        answers: ["A. Access only the minimum amount of PHI/personally identifiable information (PII) necessary",
            "B. Logoff or lock your workstation when it is unattended ",
            "C. Promptly retrieve documents containing PHI/PHI from the printer",
            "D. All of the above"
        ]
    },
    {
        question: "An incidental use or disclosure is not a violation of the HIPAA Privacy Rule if the covered entity (CE) has?",
        correct: "D. All of the above",
        answers: ["A. Implemented the minimum necessary standard",
            "B. Established appropriate administrative safeguards",
            "C. Established appropriate physical and technical safeguards",
            "D. All of the above"
        ]
    },
    {
        question: "Under the Privacy Act, individuals have the right to request amendments of their records contained in a system of records.",
        correct: true,
        answers: [true, false]
    },
    {
        question: "Which HHS Office is charged with protecting an individual patient's health information privacy and security through the enforcement of HIPAA? ",
        correct: "B. Office for Civil Rights (OCR)",
        answers: ["A. Office of Medicare Hearings and Appeals (OMHA)",
            "B. Office for Civil Rights (OCR)",
            "C. Office of the National Coordinator for Health Information Technology (ONC)",
            "D. None of the above"
        ]
    },
    {
        question: "Physical safeguards are?",
        correct: "B. Physical measures, including policies and procedures that are used to protect electronic information systems and related buildings and equipment, from natural and environmental hazards, and unauthorized intrusion ",
        answers: ["A. Administrative actions, and policies and procedures that are used to manage the selection, development, implementation and maintenance of security measures to protect electronic PHI (ePHI). These safeguards also outline how to manage the conduct of the workforce in relation to the protection of ePHI",
            "B. Physical measures, including policies and procedures that are used to protect electronic information systems and related buildings and equipment, from natural and environmental hazards, and unauthorized intrusion ",
            "C. Information technology and the associated policies and procedures that are used to protect and control access to ePHI",
            "D. None of the above"
        ]
    },
    {
        question: "Which of the following would be considered PHI? ",
        correct: "A. An individual's first and last name and the medical diagnosis in a physician's progress report ",
        answers: ["A. An individual's first and last name and the medical diagnosis in a physician's progress report ",
            "B. Individually identifiable health information (IIHI) in employment records held by a covered entity (CE) in its role as an employer",
            "C. Results of an eye exam taken at the DMV as part of a driving test",
            "D. IIHI of persons deceased more than 50 years"
        ]
    },
    {
        question: "The minimum necessary standard is?",
        correct: "D. All of the above",
        answers: ["A. Limits uses, disclosures, and requests for PHI to the minimum necessary amount of PHI needed to carry out the intended purposes of the use or disclosure",
            "B. Does not apply to exchanges between providers treating a patient",
            "C. Does not apply to uses or disclosures made to the individual or pursuant to the individual's authorization",
            "D. All of the above"
        ]
    }
];

// click start button. create timer and submit button. 
// run game.initializeGame
// push selected value through game.submitAnswer
window.onload = function () {
    answerTimerStop();
    countdownTimerStop();
    
    $('#start').click(function () {
        $('#controls').append('<div id="countdown" class="col-6"><h3>Timer: 10</h3></div>');
        game.initializeGame();
    });
};

// when answer is clicked, highlight green
$(document).click(function () {
    $('input[name=answers]:checked').closest('label').toggleClass('btn-success');
});

let game = {
    initializeGame: function () {
        $('#start').remove();
        $('#reset').remove();

        numCorrect = 0;
        numIncorrect = 0;
        numUnanswered = 0;
        questionNum = 1;
        // resultsScreen();
        game.nextQuestion();

    },
    nextQuestion: function () {
        answerTimerStop();
        resetTimer(10);
        console.log(`nextQuestion timer reset: ${timer}`)
        timerLoop = setInterval(countdownTimer, 1000);
        $('.list-answer').remove();
        $('#correct').remove();
        game.randomizeQuestions();
        game.randomizeAnswers();
        $('#questionText').text(randQuestion.question);
        $('#questionNum').text(`Question: ${questionNum}`)
        $('#controls').append('<div id="submit" class="col-4 mx-auto"><a href="#" class="btn btn-primary">Submit</a></div>');
        $('#submit').on('click', function () {
            console.log(`Submit button clicked! Honest!`)
            var selValue = $('input[name=answers]:checked').val();
            game.submitAnswer(selValue);
        });
    },
    submitAnswer: function (ans) { // add if 20 to submit answer. delete timeout. make countdowntimer check if timer = 0. reset timer whenever needed.
        countdownTimerStop();
        resetTimer(5);
        displayAnswer = setInterval(answerTimer, 1000);
        console.log(`submitAnswer timer reset: ${timer}`)
        game.answerCheck(ans);
        $('#correct').remove();
        $('#submit').remove();

        if (ans === String(randQuestion.correct)) { // correct answer
            questionNum++;
            numCorrect++;
            if (questionNum > 10) {
                resultsScreen();
            } else {
                $('#controls').append('<div id="correct" class="col-6 btn-success"><h3>Correct!</h3></div>');
            }
        } else
        if (ans === 0) { // timeout
            questionNum++;
            numUnanswered++
            if (questionNum > 10) {
                resultsScreen();
            } else{
                $('#controls').append('<div id="correct" class="col-6 btn-danger"><h3>Incorrect!</h3></div>');
            }
        } else { // incorrect answer
            questionNum++;
            numIncorrect++;
            if (questionNum > 10) {
                resultsScreen();
            } else {
                $('input[name=answers]:checked').closest('label').toggleClass('btn-danger');
            $('#controls').append('<div id="correct" class="col-6 btn-danger"><h3>Incorrect!</h3></div>');
            }
        }
        console.log(`Correct: ${numCorrect}, Incorrect ${numIncorrect}, Unanswered ${numUnanswered}`)
    },
    answerCheck: function (ans) {
        $('.list-answer').remove();
        randQuestion.answers.forEach(function (e) {
            if (String(e) === String(randQuestion.correct)) {
                $('#answerList').append(`<label class="list-answer btn-success"><input type="radio" name="answers" value="${e}" autocomplete="off">
                ${e}</label>`)
            } else if (e === ans) {
                $('#answerList').append(`<label class="list-answer btn-danger"><input type="radio" name="answers" value="${e}" autocomplete="off">
                ${e}</label>`)
            } else {
                $('#answerList').append(`<label class="list-answer"><input type="radio" name="answers" value="${e}" autocomplete="off">
                ${e}</label>`)
            }
        });
    },
    randomizeQuestions: function () {
        randQuestion = questions[Math.floor(Math.random() * questions.length)];
        console.log(randQuestion);
    },
    randomizeAnswers: function () {
        randQuestion.answers.forEach(function (ans) {
            $('#answerList').append(`<label class="list-answer"><input type="radio" name="answers" value="${ans}" autocomplete="off">
            ${ans}</label>`)
        })
    }
};

// FUNCTIONS
function countdownTimer() {
    timer--;
    console.log(`countdownTimer ${timer}`);
    if (timer < 0) {
        game.submitAnswer(0);
    } else {
        $('#countdown h3').text(`Timer: ${timer}`)
    }
};
function answerTimer() {
    timer--;
    console.log(`answerTimer ${timer}`);
    if (timer < 0) {
        game.nextQuestion();
    } else {
        $('#countdown h3').text(`Timer: ${timer}`)
    }
};
function answerTimerStop() {
    clearInterval(displayAnswer);
    console.log(`Stop Answer`)
};

function countdownTimerStop() {
    clearInterval(timerLoop);
    console.log(`Stop Countdown`)
};

function resetTimer(t) {
    timer = t;
};
function resultsScreen() {
    answerTimerStop();
    countdownTimerStop();
    $('#questionNum').text(`Test Complete`)
    $('#questionText').text(`Results: ${((numCorrect > 6) ? 'PASSED' : 'FAILED, you must score 70% or higher.')}`); // if above 75%, pass, else fail
    $('.list-answer, #countdown, #correct').remove();
    $('#answerList').append(`<div class="list-answer display-4 mx-auto font-weight-bold">Correct: ${numCorrect}</div>`);
    $('#answerList').append(`<div class="list-answer display-4 mx-auto font-weight-bold">Incorrect: ${numIncorrect}</div>`);
    $('#answerList').append(`<div class="list-answer display-4 mx-auto font-weight-bold">Unanswered: ${numUnanswered}</div>`);
    $('#controls').append('<div id="restart" class="col-4 mx-auto"><a href="#" class="btn btn-primary">Restart Test</a></div>');
    $('#restart').on('click', function() {
        $('.list-answer').remove();
        $('#restart').remove();
        game.initializeGame();
        console.log(`restart clicked`);
    })
};