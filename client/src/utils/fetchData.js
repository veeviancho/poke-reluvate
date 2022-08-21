import api from '../api'

const fetchData = async (url) => {
  let response = await api.get(url);
  let data = response.data;
  if (data) {
    return data
  }
}

export default fetchData;