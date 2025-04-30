import QuestionCard from "./QuestionCard.jsx";

export default function QuestionList({questionList, onClickAnswer = {onClickAnswer}, isResult = false}) {

    return (
        <>
            {questionList.map((question, index) =>
                <QuestionCard key={index} question={question} onClickAnswer={onClickAnswer} isResult={isResult}/>)}
        </>
    )
}
