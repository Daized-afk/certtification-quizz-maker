import './QuestionCard.css'

export default function QuestionCard({
                                         question,
                                         answerQuestion = () => {
                                         },
                                         isResult = false
                                     }) {

    function getClassName(answer) {
        const isQuestionAnswered = question.userAnswer === answer;
        const isGoodAnswer = question.correctAnswer === answer;

        if (isResult) {
            if (!isQuestionAnswered && !isGoodAnswer) {
                return "unselectedBtn";
            } else {
                // green or red button
                return isQuestionAnswered && !isGoodAnswer ? "errorBtn" : "selectedBtn"
            }
        } else {
            return answer === question.userAnswer ? "selectedBtn" : "unselectedBtn";
        }

    }

    return (
        <div className="card">
            <p>{question.question}</p>
            {question.possibleAnswers.map(answer =>
                <button key={answer}
                        id={answer}
                        onClick={() => answerQuestion(question.question, answer)}
                        className={getClassName(answer)}>
                    {answer}
                </button>
            )}
        </div>
    )
}