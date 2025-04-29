export function buildQuestionsFromList(theQuestions) {
    return theQuestions.map(theQuestion => {
        const thePossibleAnswers = shuffleArray([...theQuestion.incorrect_answers, theQuestion.correct_answer])
        return {
            question: theQuestion.question,
            possibleAnswers: thePossibleAnswers,
            correctAnswer: theQuestion.correct_answer,
            userAnswer: ""
        }
    })
}

function shuffleArray(array) {
    const input = array.slice(); // copy so original isn't modified
    const shuffled = [];

    while (input.length > 0) {
        const randIndex = Math.floor(Math.random() * input.length);
        const [item] = input.splice(randIndex, 1); // remove random item
        shuffled.push(item);
    }

    return shuffled;
}