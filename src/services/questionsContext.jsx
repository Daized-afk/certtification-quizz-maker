import {createContext, useContext, useState} from 'react';

// Create the context that holds the list of questions
const QuestionsContext = createContext([]);

// Create the Context provider node
export const QuestionsProvider = ({children}) => {
    const [listQuestions, setListQuestions] = useState([]);

    return (
        <QuestionsContext.Provider value={{listQuestions, setListQuestions}}>
            {children}
        </QuestionsContext.Provider>
    );
};

// export a custom hook to use this context
export const useQuestionsContext = () => useContext(QuestionsContext);