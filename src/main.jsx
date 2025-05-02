import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ResultPage from "./pages/ResultPage.jsx";
import {QuestionsProvider} from "./services/questionsContext.jsx";

const router = createBrowserRouter([
    {
        path: "/certtification-quizz-maker",
        element: <Home/>,
    },
    {
        path: "/certtification-quizz-maker/result",
        element: <ResultPage/>,
    },
    {
        path: "*",
        element: <Home/>,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QuestionsProvider>
            <RouterProvider router={router}/>
        </QuestionsProvider>
    </StrictMode>,
)
