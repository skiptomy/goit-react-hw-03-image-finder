import axios from 'axios';

const baseURL = 'https://pixabay.com/api/?q=';
const queriesURL = '&image_type=photo&orientation=horizontal&per_page=12';

const fetchImagesFromQuery = (searchQuery, page = 1) => {
  return axios
    .get(`${baseURL}${searchQuery}&page=${page}&key=${process.env.REACT_APP_PIXABAY_API_KEY}${queriesURL}`)
    .then(response => response.data.hits);
};

export default { fetchImagesFromQuery };
