import React from 'react';

import { ItemMeal } from './ItemMeal';
import { useFetchMeals } from '../hooks/useFetchMeals';

export const ListItem = ( { handleAddNew, order } ) => {

  const { data: meals } = useFetchMeals();

  return (
    <div className='container_productsorders'>

      <div className='containerproducts'>

        {
          meals.map(product => (
            <ItemMeal
              key={product.id}
              product={product}
              handleAddNew={handleAddNew}
            />
          ))
        }
      </div>
      <table id="orders">
        <thead>
          <tr>
            <th>N° Pedido</th>
            <th>N° Mesa</th>
            <th>Estado</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            order.data.slice(-6).map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.table}</td>
                  <td>{item.status}</td>
                  <td>S/.{item.totalAmount}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}