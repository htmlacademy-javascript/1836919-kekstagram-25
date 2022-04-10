const uploadFile = document.querySelector('#upload-file');
const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadForm.querySelector('.img-upload__cancel');
const textHashtags = imgUploadForm.querySelector('.text__hashtags');
const textDescription = imgUploadForm.querySelector('.text__description');
const regexp = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;

const onEscapePress = (evt) => {
  if(evt.key === 'Escape') {
    imgUploadOverlay.classList.add('hidden');
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

const validateTextHashtags = (value) => value.split(' ').every((hashtag) => regexp.test(hashtag));
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

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // const isValid = pristine.validate();
});

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onEscapePress);
});

imgUploadCancel.addEventListener('click', () => {
  imgUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onEscapePress);
  imgUploadForm.reset();
});

textHashtags.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

textDescription.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

