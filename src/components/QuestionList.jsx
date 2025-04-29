import QuestionCard from "./QuestionCard.jsx";

export default function QuestionList({questionList, answerQuestion = {answerQuestion}, isResult = false}) {

    return (
        <>
            {questionList.map((question, index) =>
                <QuestionCard key={index} question={question} answerQuestion={answerQuestion} isResult={isResult}/>)}
        </>
    )
}
