export const getMeals = async () => {

  const url = 'https://food-ordering-api-challenge.herokuapp.com/api/v1/meals'
  const resp = await fetch(url);
  const meals = await resp.json();

  return meals;
}