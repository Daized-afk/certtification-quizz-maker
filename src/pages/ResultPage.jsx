import './ResultPage.css'
import {Link, useLocation} from "react-router-dom";
import QuestionList from "../components/QuestionList.jsx";


export default function ResultPage() {
    const location = useLocation();
    const {listQuestions} = location.state || {};

    const score = listQuestions.filter(q => q.userAnswer === q.correctAnswer).length;

    function getScoreClassName(theScore) {
        switch (theScore) {
            case theScore <= 1:
                return "red";
            case theScore <= 3:
                return "yellow";
            case theScore <= 5:
                return "green";
            default:
                return "red";
        }
    }

    return (
        <>
            <h1>RESULTS</h1>
            <QuestionList questionList={listQuestions} isResult={true}/>
            <div className={getScoreClassName(score)}>You scored {score} out of {listQuestions.length}</div>
            <div className="returnButton">
                <Link to={"/"} className="returnButton">Create a new quizz</Link>
            </div>
        </>
    )
}
