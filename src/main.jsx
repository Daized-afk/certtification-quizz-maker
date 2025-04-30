import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ResultPage from "./pages/ResultPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/result",
        element: <ResultPage/>,
    },
    {
        path: "*",
        element: <Home/>,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
