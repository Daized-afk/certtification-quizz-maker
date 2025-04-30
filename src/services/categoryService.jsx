import {useEffect, useMemo, useState} from "react";
import axios from "axios";

/**
 * Custom hook that hides the complexity of retrieving the categories and transforming it into a list of select options
 * @returns {*[]} list of select options
 */
export function useGetCategoriesOptions() {
    // list of categories returned by the server
    const [listCategories, setListCategories] = useState([])

    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php').then(response => {
            if (response) {
                setListCategories(response.data?.trivia_categories)
            }
        })
    }, [])

    // build and return a list of select options each time listCategories is retrieved from the server
    return useMemo(() => {
        if (listCategories) {
            return listCategories.map(category => <option key={category.id}
                                                          value={category.id}>{category.name}</option>)
        }
    }, [listCategories]);
}