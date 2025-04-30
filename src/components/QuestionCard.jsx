import './QuestionCard.css'

export default function QuestionCard({
                                         question,
                                         onClickAnswer = () => {
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

    function decodeHtmlEntities(str) {
        const txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    }

    return (
        <div className="card">
            <p>{decodeHtmlEntities(question.question)}</p>
            {question.possibleAnswers.map(answer =>
                <button key={answer}
                        id={answer}
                        onClick={() => onClickAnswer(question.question, answer)}
                        className={getClassName(answer)}>
                    {decodeHtmlEntities(answer)}
                </button>
            )}
        </div>
    )
}