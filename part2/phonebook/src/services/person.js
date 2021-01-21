import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(res => res.data)
}

const addPerson = personObj => {
  return axios
    .post(baseUrl, personObj)
    .then(res => res.data)
}

const deletePerson = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
}

const updatePerson = (id, newObj) => {
  return axios
    .put(`${baseUrl}/${id}`, newObj)
    .then(res => res.data)
}

export default { getAll, addPerson, deletePerson, updatePerson }