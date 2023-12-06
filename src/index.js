import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

document.addEventListener('DOMContentLoaded', () => {
  const breedSelect = document.querySelector('.breed-select');
  const loader = document.querySelector('.loader');
  const catInfo = document.querySelector('.cat-info');
  const catImage = document.querySelector('.cat-image');
  const catName = document.querySelector('.cat-name');
  const catDescription = document.querySelector('.cat-description');
  const catTemperament = document.querySelector('.cat-temperament');
  const error = document.querySelector('.error');

  breedSelect.style.display = 'none';
  loader.style.display = 'block';

  fetchBreeds()
    .then(response => {
      const breeds = response.data;
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.text = breed.name;
        breedSelect.add(option);
      });

      loader.style.display = 'none';
      breedSelect.style.display = 'block';
    })
    .catch(err => {
      console.error(err);

      loader.style.display = 'none';
      error.style.display = 'block';
    });

  breedSelect.addEventListener('change', () => {
    const selectedBreedId = breedSelect.value;

    loader.style.display = 'block';
    catInfo.style.display = 'none';
    error.style.display = 'none';

    fetchCatByBreed(selectedBreedId)
      .then(response => {
        const catData = response.data[0];
        catImage.src = catData.url;

        catName.textContent = catData.breeds[0].name;
        catDescription.textContent = catData.breeds[0].description;
        catTemperament.textContent = `Temperament: ${catData.breeds[0].temperament}`;

        loader.style.display = 'none';
        catInfo.style.display = 'block';
      })
      .catch(err => {
        console.error(err);
        loader.style.display = 'none';
        error.style.display = 'block';
      });
  });
});
