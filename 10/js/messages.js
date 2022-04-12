import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

successTemplate.classList.add('hidden');
errorTemplate.classList.add('hidden');
body.appendChild(successTemplate);
body.appendChild(errorTemplate);


const hideSuccessMessage = () => {
  successTemplate.classList.add('hidden');
  document.removeEventListener('keydown', onEscapePressSuccess);
};

const hideErrorMessage = () => {
  errorTemplate.classList.add('hidden');
  document.removeEventListener('keydown', onEscapePressError);
};

function onEscapePressSuccess(evt) {
  if(isEscapeKey(evt)) {
    hideSuccessMessage();
  }
}

function onEscapePressError(evt) {
  if(isEscapeKey(evt)) {
    hideErrorMessage();
  }
}

const showSuccesMessage = () => {
  successTemplate.classList.remove('hidden');

  successTemplate.addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', onEscapePressSuccess);
};

const showErrorMessage = () => {
  errorTemplate.classList.remove('hidden');

  errorTemplate.addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', onEscapePressError);
};

export {showSuccesMessage, showErrorMessage};
