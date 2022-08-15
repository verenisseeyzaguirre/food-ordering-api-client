import React, { useEffect, useReducer } from 'react';

import { NavBar } from './NavBar';
import { ListItem } from './ListItem';
import { FoodAside } from './FoodAside';
import { foodReducer } from '../reducers/foodReducer';


const init = () => {
    return JSON.parse( localStorage.getItem('list') ) || [];
};

export const FoodScreen = () => {

    const [list, dispatch ] = useReducer(foodReducer, [], init );
    console.log("list", list);

    const handleAddNew = (product) => {

        if( list.findIndex(elem => elem.id === product.id) !== -1) {
            console.log("product", product);
            dispatch({
                type: 'update',
                payload: product
            });

        }  else {
            dispatch({
                type: 'add',
                payload: product
            });
        }

    }

    const handleDelete = ( productId) => {      
        dispatch({
            type :'delete',
            payload : productId
        });
    }

    useEffect( () => {
        localStorage.setItem('list', JSON.stringify( list ) )
    }, [list] )
    
    return (
        <div className='screencontainer' >
            <NavBar />
            <div className='maincontainer'>
                <ListItem 
                    handleAddNew = {handleAddNew}
                />
                <FoodAside
                    list = {list}
                    handleDelete = {handleDelete}
                />
            </div>
        </div>

    )
}
