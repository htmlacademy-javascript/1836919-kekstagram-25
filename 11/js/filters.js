import {renderSimilarList} from './preview.js';
import {getRandomNumber} from './util.js';

const COUNT_RANDOM_PICTURES = 10;

const getRandomIds = (array, number) => {
  const randomIds = [];

  while (randomIds.length < number) {
    const rendomNubmer = getRandomNumber(0, array.length - 1);
    if (!randomIds.includes(rendomNubmer)) {
      randomIds.push(rendomNubmer);
    }
  }

  return randomIds;
};


const activeFilters = (pictures) => {
  const filters = document.querySelector('.img-filters');
  const filterDefault = filters.querySelector('#filter-default');
  const filterRandom = filters.querySelector('#filter-random');
  const filterDiscussed = filters.querySelector('#filter-discussed');

  renderSimilarList(pictures);

  filters.classList.remove('img-filters--inactive');

  const disactiveButton = () => {
    const imgFiltersButtonActive = filters.querySelector('.img-filters__button--active');
    if (imgFiltersButtonActive) {
      imgFiltersButtonActive.classList.remove('img-filters__button--active');
    }
  };


  filterDefault.addEventListener('click', () => {
    disactiveButton();
    filterDefault.classList.add('img-filters__button--active');
    renderSimilarList(pictures);
  });

  filterRandom.addEventListener('click', () => {
    disactiveButton();
    filterRandom.classList.add('img-filters__button--active');
    const ids = getRandomIds(pictures, COUNT_RANDOM_PICTURES);
    const randomPictures = [];
    ids.forEach((id) => {
      randomPictures.push(pictures[id]);
    });
    renderSimilarList(randomPictures);
  });

  filterDiscussed.addEventListener('click', () => {
    disactiveButton();
    filterDiscussed.classList.add('img-filters__button--active');
    const discussedPictures = pictures.slice().sort((a, b) => b.comments.length - a.comments.length);
    renderSimilarList(discussedPictures);
  });
};

export {activeFilters};

