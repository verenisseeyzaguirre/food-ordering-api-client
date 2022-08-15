import React from 'react'

export const ItemSelected = ( { product, handleDelete } ) => {

    const { name, price } = product;

    const subTotal = product.qty*price

    return (
        <div className='selectedcard' >
            <div className='end'>
              <button
                className='pointer '
                onClick={() => handleDelete(product.id)}
              > x
              </button>
            </div>      
            <div className='flexrow' >
                <div className='flexcolumn'>
                    <div className='flexrow'>
                        <p className='selectedcard_text'>  { product.qty  } </p>
                        <p className='selectedcard_text'> {name} </p>	 
                    </div>   
                    <p className='selectedcard_text'> Total : S/.{subTotal} </p>
                </div>
            </div>
        </div>
    )
}
