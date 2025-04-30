import './CreateOptionsForm.css'
import {useState} from "react";


export default function CreateOptionsForm({onSubmit, listCategoryOption}) {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedDifficulty, setSelectedDifficulty] = useState(null)

    return (
        <div>
            <select key="categorySelect" id="categorySelect" name="categorySelect"
                    onChange={e => setSelectedCategory(e.target.value)}>
                <option value="">Select a category</option>
                {listCategoryOption}
            </select>
            <select key="difficultySelect" id="difficultySelect" name="difficultySelect"
                    onChange={e => setSelectedDifficulty(e.target.value)}>
                <option value="">Select difficulty</option>
                <option key="Easy" value="easy">Easy</option>
                <option key="Medium" value="medium">Medium</option>
                <option key="Hard" value="hard">Hard</option>
            </select>
            <button key="createBtn" id="createBtn"
                    onClick={() => onSubmit(selectedCategory, selectedDifficulty)}>Create
            </button>
        </div>
    )
}