import {similarPictures} from './preview.js';

const bodyModal = document.querySelector('body');
const pictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImgContainer = document.querySelector('.big-picture__img');
const bigPictureImg = bigPictureImgContainer.querySelector('img');
const bigPictureClouse = document.querySelector('.big-picture__cancel');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialComments = document.querySelector('.social__comments');
const socialCaption = document.querySelector('.social__caption');

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');


const addPreviewClickHandler = function(picture) {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    bodyModal.classList.add('modal-open');
    bigPictureImg.src = picture.querySelector('.picture__img').getAttribute('src');
    bigPictureImg.alt = picture.querySelector('.picture__img').getAttribute('alt');
    socialCaption.textContent = picture.querySelector('.picture__img').getAttribute('alt');
    likesCount.textContent = picture.querySelector('.picture__likes').textContent;
    commentsCount.textContent = picture.querySelector('.picture__comments').textContent;

    const idPreviewPicture = picture.querySelector('img').getAttribute('id');
    socialComments.innerHTML = '';

    similarPictures.find((authorComment) => String(authorComment.id) === idPreviewPicture).comments.forEach(({avatar, name, message}) => {
      bigPicture.querySelector('.social__comments').insertAdjacentHTML('beforeend', `
            <li class="social__comment">
              <img
                class="social__picture"
                src="${avatar}"
                alt="${name}"
                width="35" height="35">
              <p class="social__text">${message}</p>
            </li>`);
    });
  });
};

for (const picture of pictures) {
  addPreviewClickHandler(picture);
}

bigPictureClouse.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  bodyModal.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    bodyModal.classList.remove('modal-open');
  }
});
