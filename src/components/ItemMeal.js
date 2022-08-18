import React from 'react';

export const ItemMeal = ( { product, handleAddNew } ) => {

    const { name, price } = product;

    product.quantity = 1;
    
    return (  
        <div className='cardproduct' >
            <p className='cardproduct__name' > { name } </p>
            
            <div className='cardproduct__precio'>
                <p> S/. { price } </p>
            </div>

            <button
                className='pointer'
                onClick={ () => handleAddNew(product) }
            > Agregar </button>

        </div>
    )
}
