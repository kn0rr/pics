import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID D7PFiBahrS_VulyDTNdUGY4YkN4djhkZULQIXHFKTXQ'
  }
});