import api from '../api'

const postData = async (url, details) => {
  let response = await api.post(url, details);
  let data = response.data;
  if (data) {
    return data
  }
}

export default postData;