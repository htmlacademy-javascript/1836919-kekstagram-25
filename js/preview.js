import {createUserPictures} from './data.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPictures = createUserPictures();

const similarListFragment = document.createDocumentFragment();

similarPictures.forEach(({url, description, comments, likes, id}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').id = id;
  similarListFragment.appendChild(pictureElement);
});

pictures.appendChild(similarListFragment);

export {similarPictures};
