import { useState, useEffect } from "react"

import { getMeals } from '../helpers/getMeals';

export const useFetchMeals = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getMeals( )
            .then( meals => {
                
                setstate({
                    data: meals,
                    loading: false
                });      
            });

    }, [ ])

    return state; // es un objeto con data y loading

}
