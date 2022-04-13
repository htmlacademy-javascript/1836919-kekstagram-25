
import {setEventHendlers} from './big-picture.js';
import {debounce} from './debounce.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderSimilarList = debounce((similarPictures) => {
  const similarListFragment = document.createDocumentFragment();

  const renderedPictures = document.querySelectorAll('.picture');

  if (renderedPictures.length > 0) {
    renderedPictures.forEach((picture) => {
      picture.remove();
    });
  }

  similarPictures.forEach(({url, description, comments, likes, id}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const elementPictureImg = pictureElement.querySelector('.picture__img');
    elementPictureImg.src = url;
    elementPictureImg.id = id;
    elementPictureImg.alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(pictureElement);

    pictures.appendChild(similarListFragment);

  });
  setEventHendlers(similarPictures);
});

export {renderSimilarList};
