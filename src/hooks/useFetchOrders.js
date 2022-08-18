import { useState, useEffect } from "react"

import { getOrders } from '../helpers/getOrders';

export const useFetchOrders = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getOrders( )
            .then( orders => {
                
                setstate({
                    data: orders,
                    loading: false
                });      
            });

    }, [ ])

    return state;

}
