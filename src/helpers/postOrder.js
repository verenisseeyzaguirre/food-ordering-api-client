
export const postOrder = async( order, table ) => {

  const url = 'https://food-ordering-api-challenge.herokuapp.com/api/v1/orders';

  let meal_items = order.map(function (meal) {
    return { 
      'meal_id': meal.id,
      'quantity': meal.quantity,
    }
  });

  const formData = {
    "order" : {
      "table": table,
      "user": 2,
      "order_items": []
    }
  } 

  formData['order']['order_items'] = meal_items

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    
    if(resp.ok) {
        const response = await resp.json();
        return response;
    } else {
        throw await resp.json();
    }

  } catch (err) {
    throw err;
      
  }

}

