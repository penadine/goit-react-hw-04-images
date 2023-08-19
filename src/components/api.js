import axios from 'axios';

const API_KEY = '38262043-adf384c75f0edd4be1036b2e6';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return response.data.hits;
};
