export const getOrders = async () => {

  const url = 'https://food-ordering-api-challenge.herokuapp.com/api/v1/orders'
  const resp = await fetch(url);
  const orders = await resp.json();

  return orders;
}