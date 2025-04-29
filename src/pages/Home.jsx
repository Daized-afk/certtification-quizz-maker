import {useEffect, useMemo, useState} from 'react'
import './Home.css'
import axios from "axios";
import CreateOptionsForm from "../components/CreateOptionsForm.jsx";
import QuestionList from "../components/QuestionList.jsx";
import {buildQuestionsFromList} from "../services/questionService.js";
import {Link} from "react-router-dom";


export default function Home() {
    const [listCategories, setListCategories] = useState([])
    // build a list of select option each time listCategories is retrieved from server
    const listCategoryOption = useMemo(() => {
        if (listCategories) {
            return listCategories.map(category => <option key={category.id}
                                                          value={category.id}>{category.name}</option>)
        }
    }, [listCategories])

    const [listQuestions, setListQuestions] = useState([])

    function answerQuestion(theQuestion, theAnswer) {
        const newAnswers = listQuestions.map(q => {
            return {
                question: q.question,
                possibleAnswers: q.possibleAnswers,
                correctAnswer: q.correctAnswer,
                userAnswer: theQuestion === q.question ? theAnswer : q.userAnswer
            }
        })
        setListQuestions(newAnswers)
    }

    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php').then(response => {
            if (response) {
                setListCategories(response.data?.trivia_categories)
            }
        })
    }, [])

    function onSubmitFormCreation(category, difficulty) {
        if (category !== "" || difficulty !== "") {
            axios.get(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`).then(response => {
                if (response) {
                    setListQuestions(buildQuestionsFromList(response.data?.results))
                }
            })
        }
    }

    const allQuestionsAnswered = listQuestions.length > 0 && listQuestions.every(q => q.userAnswer !== "")

    return (
        <>
            <h1>QUIZZ MAKER</h1>
            <CreateOptionsForm onSubmit={onSubmitFormCreation}
                               listCategoryOption={listCategoryOption}/>
            <QuestionList questionList={listQuestions} answerQuestion={answerQuestion} isResult={false}/>
            {allQuestionsAnswered &&
                <Link to={"/result"} state={{listQuestions: listQuestions}} className="submitButton">Submit</Link>}
        </>
    )
}
