import axios from 'axios';

export default function optionService () {
  return {
    getByMeal: getByMeal.bind(this),
  };
}

export function getByMeal(mealId) {
    const url = `http://localhost:13000/meals/${mealId}/options`;
    return axios.get(url)
}

