import axios from "axios";

/**
 * Sends a GET request to retrieve a list of trivia questions based on the specified category and difficulty.
 *
 * @param {string} category The category of the questions to retrieve.
 * @param {string} difficulty The difficulty level of the questions (e.g., "easy", "medium", "hard").
 * @return {Promise} A promise that resolves to the response of the GET request containing the list of trivia questions.
 */
export function getListQuestionsRequest(category, difficulty) {
    return axios.get(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`);
}

/**
 * Set the answer of theQuestion to theAnswer
 * @param {Array} listQuestions the current state of listQuestions atom
 * @param {string} theQuestion the question we want to answer
 * @param {string} theAnswer the new answer to the question
 * @returns {Array} the listQuestions with theQuestion's answer updated
 */
export function answerQuestion(listQuestions, theQuestion, theAnswer) {
    return listQuestions.map(q => {
        return {
            question: q.question,
            possibleAnswers: q.possibleAnswers,
            correctAnswer: q.correctAnswer,
            userAnswer: theQuestion === q.question ? theAnswer : q.userAnswer
        }
    })
}

/**
 * Build an array of question objects with the possible answers and userAnswer initialized.
 *
 * @param {Array} theOriginalQuestions An array of question objects, where each object contains the question, incorrect answers, and the correct answer.
 * @return {Array} A new array of objects, each containing the question, a shuffled array of possible answers, the correct answer, and an empty placeholder for the user's answer.
 */
export function buildQuestionsFromList(theOriginalQuestions) {
    return theOriginalQuestions.map(theQuestion => {
        const thePossibleAnswers = shuffleArray([...theQuestion.incorrect_answers, theQuestion.correct_answer])
        return {
            question: theQuestion.question,
            possibleAnswers: thePossibleAnswers,
            correctAnswer: theQuestion.correct_answer,
            userAnswer: ""
        }
    })
}

/**
 * Randomly shuffles the elements of an array and returns a new shuffled array.
 *
 * @param {Array} array The input array to shuffle.
 * @return {Array} A new array containing the shuffled elements from the input array.
 */
function shuffleArray(array) {
    const given = array.slice();
    const shuffled = [];

    while (given.length > 0) {
        const index = Math.floor(Math.random() * given.length);
        const [item] = given.splice(index, 1); // remove random item
        shuffled.push(item);
    }

    return shuffled;
}