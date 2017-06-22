import axios from 'axios';

export default function peopleService () {
  return {
    getByMeal: getByMeal.bind(this),
  };
}

export function getByMeal(mealId) {
    const url = `http://localhost:13000/meals/${mealdId}/options`;
    return axios.get(url)
}

