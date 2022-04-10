import {similarPictures} from './preview.js';

const COMMENTS_COUNT = 5;

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

const commentsLoader = document.querySelector('.comments-loader');
const commentsCurrent = document.querySelector('.comments-current');

pictures.forEach((picture) => {
  picture.addEventListener('click', () => {
    let current = COMMENTS_COUNT;
    const elementPictureImg = picture.querySelector('.picture__img');
    bigPicture.classList.remove('hidden');
    bodyModal.classList.add('modal-open');
    bigPictureImg.src = elementPictureImg.src;
    bigPictureImg.alt = elementPictureImg.alt;
    socialCaption.textContent = elementPictureImg.alt;
    likesCount.textContent = picture.querySelector('.picture__likes').textContent;
    commentsCount.textContent = picture.querySelector('.picture__comments').textContent;

    const idPreviewPicture = picture.querySelector('img').id;
    socialComments.innerHTML = '';

    const comments = similarPictures.find((authorComment) => String(authorComment.id) === idPreviewPicture).comments;
    if (comments.length <= COMMENTS_COUNT) {
      current = comments.length;
    }

    const renderComments = (commentArray) => {
      socialComments.innerHTML = '';
      const commentsListFragment = document.createDocumentFragment();
      commentArray.forEach(({avatar, name, message}) => {
        const elementComment = socialComment.cloneNode(true);
        const commentImg = elementComment.querySelector('.social__picture');
        const commentText = elementComment.querySelector('.social__text');
        commentImg.src = avatar;
        commentImg.alt = name;
        commentText.textContent = message;
        commentsListFragment.appendChild(elementComment);
      });
      socialComments.appendChild(commentsListFragment);
    };

    const addComments = () => {
      if (current > comments.length) {
        current = comments.length;
      }
      renderComments(comments.slice(0, current));
      if (current >= comments.length) {
        commentsLoader.classList.add('hidden');
      } else {
        commentsLoader.classList.remove('hidden');
      }
      commentsCurrent.textContent = current;
    };

    commentsLoader.addEventListener('click', () => {
      current += COMMENTS_COUNT;
      addComments();
    });

    addComments();
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
