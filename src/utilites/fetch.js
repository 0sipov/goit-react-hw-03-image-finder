import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const APIKey = '19872241-52e2ff9de1363a0f3b5becb90';

const getImgs = (query, page) => {
  return axios({
    method: 'get',
    url: `/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=6&key=${APIKey}`,
  })
    .then(response => {
      // console.log(response.data.hits);
      return response.data.hits;
    })
    .catch(err => {
      // console.log(err);
      return err;
    });
};

export default getImgs;
