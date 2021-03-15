import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const APIKey = '19872241-52e2ff9de1363a0f3b5becb90';

const getImgs = function (query) {
  axios({
    method: 'get',
    url: `/?key=${APIKey}q=${query}&image_type=photo`,
    responseType: 'stream',
  })
    .then(response => {
      console.log(response.data.hits);
      return response.data.hits;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
};

export default getImgs;
