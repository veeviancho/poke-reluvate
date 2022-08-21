import api from '../api'

const updateData = async (url, info) => {
  let response = await api.put(url, info);
  let data = response.data;
  if (data) {
    return data
  }
}

export default updateData;