import axios from 'axios';

export default function peopleService () {
  return {
    getAll: getAll.bind(this),
  };
}

export function getAll() {
    const url = 'http://localhost:13000/meals';
    return axios.get(url)
}

