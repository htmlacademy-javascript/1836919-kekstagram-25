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
const socialComment = document.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');

const commentsListFragment = document.createDocumentFragment();

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

pictures.forEach((picture) => {
  picture.addEventListener('click', () => {
    const elementPictureImg = picture.querySelector('.picture__img');

    bigPicture.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    bodyModal.classList.add('modal-open');
    bigPictureImg.src = elementPictureImg.src;
    bigPictureImg.alt = elementPictureImg.alt;
    socialCaption.textContent = elementPictureImg.alt;
    likesCount.textContent = picture.querySelector('.picture__likes').textContent;
    commentsCount.textContent = picture.querySelector('.picture__comments').textContent;

    const idPreviewPicture = picture.querySelector('img').id;
    socialComments.innerHTML = '';

    similarPictures.find((authorComment) => String(authorComment.id) === idPreviewPicture).comments.forEach(({avatar, name, message}) => {
      const elementComment = socialComment.cloneNode(true);
      const commentImg = elementComment.querySelector('.social__picture');
      const commentText = elementComment.querySelector('.social__text');
      commentImg.src = avatar;
      commentImg.alt = name;
      commentText.textContent = message;
      commentsListFragment.appendChild(elementComment);
    });
    socialComments.appendChild(commentsListFragment);
  });
});

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
