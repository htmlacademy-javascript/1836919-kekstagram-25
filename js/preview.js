
const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderSimilarList = (similarPictures) => {
  const similarListFragment = document.createDocumentFragment();

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
};

export {renderSimilarList};
