import React from 'react';

import { useState } from "react"
import { ItemSelected } from './ItemSelected'
import Select from 'react-select';

import { tables } from '../data/tables';


export const FoodAside = ( {list, handleDelete} ) => {

  const total = list.reduce((acc, element) => (
      acc + ( element.qty * element.price)), 0);

  const tableNumber = tables

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'blue',

    })
  }

  return (
      <aside className='aside__sidebar'>

          <div>
              <h1>Pedido</h1>
          </div>
          <div className='aside__order'>
            <div className="aside__order__label">Mesa:</div>
            <div className="col-md-4">
              <Select
                styles={customStyles}
                options={tableNumber}
              />
            </div>
          </div>
          

          {
              list.map( product => (
                  <ItemSelected 
                  key={product.id}
                  product = { product }
                  handleDelete = {handleDelete}
                  />
              ) )
          }
          
          
          {
              (total > 0) &&
              <div>
                  <hr/>
                  <div className='aside__total'>
                      <h3 className='aside__text'>Total</h3>
                      <p> S/ { total } </p>
                  </div>
              </div>
          }

          {
            (total > 0) &&
            <button
              className='pointer btn_order'
              //onClick={() => handleAddNew(product)}
            > Enviar pedido 
            </button>
          }


      </aside>
  )
}
