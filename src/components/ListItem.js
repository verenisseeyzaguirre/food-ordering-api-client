import React from 'react';

import { ItemMeal } from './ItemMeal';
import { useFetchMeals } from '../hooks/useFetchMeals';

export const ListItem = ( { handleAddNew } ) => {

  const { data: meals, loading } = useFetchMeals();

  return (
    <div className='containerproducts'>
        
        {
            meals.map( product => (
                <ItemMeal
                    key={product.id}
                    product = { product }
                    handleAddNew = {handleAddNew}
                />
            ) )
        }

    </div>
  )
}