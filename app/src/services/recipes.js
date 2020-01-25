import axios from 'axios'

const getAll = async () => {
  const response = await axios.get('http://localhost:5000/api/recipes')
  console.log('data', response.data)
  return response.data
}

export default { getAll }
