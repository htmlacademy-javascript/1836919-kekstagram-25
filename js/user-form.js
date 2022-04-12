import {isEscapeKey} from './util.js';
import {sendData} from './api.js';
import {resetScale} from './scale-picture.js';
import {resetEffects} from './effects-picture.js';
import {showSuccesMessage, showErrorMessage} from './messages.js';

const bodyModal = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadSubmit = imgUploadForm.querySelector('.img-upload__submit');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');
const regexp = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;

const onEscapePress = (evt) => {
  if(isEscapeKey(evt)) {
    imgUploadOverlay.classList.add('hidden');
    bodyModal.classList.remove('modal-open');
    imgUploadForm.reset();
  }
};

const pristine = new Pristine(imgUploadForm, {
  classTo: 'text__wrapper',
  errorTextParent: 'text__wrapper',
});

const validateLengthHashtags = (value) => {
  const length = value.split(' ').length;
  return length <= 5;
};

const validateTextHashtags = (value) => {
  const hashtags = value.split(' ');
  return value.length === 0 || hashtags.every((hashtag) => regexp.test(hashtag));
};
const validateUniqueHashtags = (value) => {
  const hashtags = value.split(' ').map((hashtag) => hashtag.toLowerCase());
  const unigueHashtags = new Set(hashtags);
  return hashtags.length === unigueHashtags.size;
};

pristine.addValidator(
  textHashtags,
  validateLengthHashtags,
  'Не более 5 хэштегов'
);

pristine.addValidator(
  textHashtags,
  validateTextHashtags,
  'Невалидный хэштег'
);

pristine.addValidator(
  textHashtags,
  validateUniqueHashtags,
  'Не может быть одинаковых хэштегов'
);

const blockSubmitButton = () => {
  imgUploadSubmit.disabled = true;
  imgUploadSubmit.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  imgUploadSubmit.disabled = false;
  imgUploadSubmit.textContent = 'Сохранить';
};

const closeUserModal = () => {
  imgUploadOverlay.classList.add('hidden');
  bodyModal.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapePress);
  resetScale();
  resetEffects();
  imgUploadForm.reset();
};

const setUserFormSubmit = (onSuccess) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccesMessage();
        },
        () => {
          unblockSubmitButton();
          closeUserModal();
          showErrorMessage();
        },
        new FormData(evt.target),
      );

    }
  });
};

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  bodyModal.classList.add('modal-open');
  document.addEventListener('keydown', onEscapePress);
});

imgUploadCancel.addEventListener('click', () => {
  closeUserModal();
});

textHashtags.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

textDescription.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

export {setUserFormSubmit, closeUserModal};
