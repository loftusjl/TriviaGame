let numCorrect = 0;
let numIncorrect = 0;
let numUnanswered = 0;
let questionNum = 19;
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
]
// BODY
window.onload = function () {
    $('#start').click(function () {
        game.initializeGame(),
            $('#controls').append('<div id="submit" class="col-4 mx-auto"><a href="#" class="btn btn-primary">Submit</a></div>'),
            $('#submit').click(function () {
                var selValue = $('input[name=answers]:checked').val();
                game.submitAnswer(selValue);
            });

    });
};
$(document).click(function () {
    $('input[name=answers]:checked').closest('label').toggleClass('btn-success');
});
// FUNCTIONS
let countdownTimer = {
    timer: 10,
    timeout: function () {
        clearInterval(countdownTimer.timerLoop);
        resultsScreen();
        // if (questionNum > 19) {
        // }
        // else if (timer < 1) {
        //     questionNum++;
        //     numUnanswered++;
        //     resetTimer();
        //     $('#questionNum').text(`Question: ${questionNum}`)
        //     $('.list-answer').remove();
        //     game.randomizeQuestions();
        //     game.randomizeAnswers();
        // }

    },
    timerLoop: setInterval(function() {
        countdownTimer.timer--;
        $('#countdown').text(`Timer: ${countdownTimer.timer}`)
    }, 1000)
}

function resetTimer() {
    countdownTimer.timer = 10;
}
let game = {
    initializeGame: function () {
        $('#start').remove()
        numCorrect = 0;
        numIncorrect = 0;
        numUnanswered = 0;
        questionNum = 19;
        $('.list-answer').remove();
        resetTimer();
        setTimeout(function() {
            clearInterval(countdownTimer.timerLoop);
            resultsScreen();
        }, 10000);
        countdownTimer.timerLoop;
        game.randomizeQuestions();
        game.randomizeAnswers();
        $('#questionText').text(randQuestion.question);
        $('#questionNum').text(`Question: ${questionNum}`)
    },
    submitAnswer: function (ans) {
        if (ans == String(randQuestion.correct)) {
            numCorrect++;
            console.log(`Correct! ${randQuestion.correct}`);
        } else {
            console.log(`${ans} is incorrect! The answer was ${randQuestion.correct}`);
            numIncorrect++;
        }
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
}

function resultsScreen() {
    $('#answerList').remove();
    $('#answerList').html(`<div class="col-4">Correct: ${numCorrect}</div><div class="col-4">Incorrect: ${numIncorrect}</div><div class="col-4">Unanswered: ${numUnanswered}</div>`);
}