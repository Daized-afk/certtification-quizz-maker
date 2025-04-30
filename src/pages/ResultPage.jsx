import './ResultPage.css'
import {Link, useLocation} from "react-router-dom";
import QuestionList from "../components/QuestionList.jsx";


export default function ResultPage() {
    // retrieve the questions previously submitted with their answers
    const location = useLocation();
    const {listQuestions} = location.state || {};
    // calculate the score
    const score = listQuestions.filter(q => q.userAnswer === q.correctAnswer).length;

    // determine the CSS class that should be used to show the scored based on its value
    function getScoreClassName() {
        if (score <= 1) {
            return "red";
        } else if (score <= 3) {
            return "yellow";
        } else if (score <= 5) {
            return "green";
        } else {
            return "red";
        }
    }

    return (
        <>
            <h1>RESULTS</h1>
            <QuestionList questionList={listQuestions} isResult={true}/>
            <div className={getScoreClassName(score)}>You scored {score} out of {listQuestions.length}</div>
            <div className="returnButton">
                <Link to={"/"}>Create a new quizz</Link>
            </div>
        </>
    )
}
