import React, { useState, useEffect, useReducer } from 'react';

import { NavBar } from './NavBar';
import { ListItem } from './ListItem';
import { FoodAside } from './FoodAside';
import { foodReducer } from '../reducers/foodReducer';

import { getOrders } from '../helpers/getOrders';
import { postOrder } from '../helpers/postOrder';

const init = () => {
    return JSON.parse( localStorage.getItem('list') ) || [];
};

export const FoodScreen = () => {

    const [list, dispatch ] = useReducer(foodReducer, [], init );
    const [order, setsOrder] = useState({ data: [] });

    const handleAddNew = (product) => {

        if( list.findIndex(elem => elem.id === product.id) !== -1) {
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

    const handleAddNewOrder = async (table) => {
      await postOrder(list, table);
      getOrders()
        .then(orders => {

          setsOrder({
            data: orders,
          });
      });
      dispatch({
        type: 'deleteAll',
      })
    }

    useEffect( () => {
        localStorage.setItem('list', JSON.stringify( list ) )
    }, [list] )

    useEffect(() => {

      getOrders()
        .then(orders => {

          setsOrder({
            data: orders,
          });
        });

    }, [])

    
    return (
        <div className='screencontainer' >
            <NavBar />
            <div className='maincontainer'>
                <ListItem 
                    handleAddNew = {handleAddNew}
                    order = {order}
                />
                <FoodAside
                    list = {list}
                    handleDelete = {handleDelete}
                    handleAddNewOrder={handleAddNewOrder}
                />
            </div>
        </div>

    )
}
