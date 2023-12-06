import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_xnrJ6bP9bwRr3dn8MgJkzHHE3myuqFWHUlXGydi8RXKRVIjwXnoSLKkpIBl5E1Li';

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds');
}

export function fetchCatByBreed(breedId) {
  return axios.get(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
  );
}
