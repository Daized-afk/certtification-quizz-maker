import './Home.css'
import CreateOptionsForm from "../components/CreateOptionsForm.jsx";
import QuestionList from "../components/QuestionList.jsx";
import {answerQuestion, buildQuestionsFromList, getListQuestionsRequest} from "../services/questionService.js";
import {Link} from "react-router-dom";
import {useGetCategoriesOptions} from "../services/categoryService.jsx";
import {useState} from "react";


export default function Home() {
    // a list of select options for categories
    const listCategoryOption = useGetCategoriesOptions();
    // a list of questions with their possibleAnswers, correctAnswer and userAnswer
    const [listQuestions, setListQuestions] = useState([]);
    // whether all questions have been answered
    const isAllQuestionsAnswered = listQuestions.length > 0 && listQuestions.every(q => q.userAnswer !== "");

    /**
     * Modify the userAnswer for a specific question when answer is clicked
     * @param theQuestion the question the answer belongs to
     * @param theAnswer the answer clicked
     */
    function onClickAnswer(theQuestion, theAnswer) {
        setListQuestions(answerQuestion(listQuestions, theQuestion, theAnswer));
    }

    /**
     * Update listQuestions with new questions when user click the form creation button
     * @param category selected category
     * @param difficulty selected difficulty
     */
    function onSubmitFormCreation(category, difficulty) {
        if (!!category && !!difficulty) {
            getListQuestionsRequest(category, difficulty).then(response => {
                if (response) {
                    setListQuestions(buildQuestionsFromList(response.data?.results));
                }
            })
        }
    }

    return (
        <>
            <h1>QUIZZ MAKER</h1>
            <CreateOptionsForm onSubmit={onSubmitFormCreation}
                               listCategoryOption={listCategoryOption}/>
            <QuestionList questionList={listQuestions} onClickAnswer={onClickAnswer} isResult={false}/>
            {isAllQuestionsAnswered &&
                <div className="submitButton">
                    <Link to={"/result"} state={{listQuestions: listQuestions}}>Submit</Link>
                </div>
            }
        </>
    )
}
