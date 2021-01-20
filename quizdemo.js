function buidlQuiz() {

    // Setup all our questions & answers into a list of objects.
    const myQuestions = [
        {
            question: "What is best?",
            answers: {
                a: "Bears",
                b: "Beets",
                c: "Battlestar Galactica",
            },
            correctAnswer: "b"
        },
        {
            question: "What is the answer to life, the universe and everything?",
            answers: {
                a: "Happiness",
                b: "Money",
                c: "42",
            },
            correctAnswer: "c"
        }
    ];

    // create a variable that will be used to store all our HTML output
    const output = [];

    // now we'll loop through each question from our array
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            
            // create a variable to store a list of possible answers
            const answers = [];

            for (letter in currentQuestion.answers) {

                answers.push(
                    `<p>Question number: ${questionNumber}<br />
                    ${letter} - ${currentQuestion.answers[letter]}
                    </p>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );

        }
    );

    quizContainer.innerHTML = output.join('');


}

function showResults() {}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// display the quiz
buidlQuiz();

// on submit, show the results
submitButton.addEventListener('click', showResults);
