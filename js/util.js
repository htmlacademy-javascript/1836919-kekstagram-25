const getRandomNumber = (min, max) => {
  const absMax = Math.floor(Math.max(Math.abs(max), Math.abs(min)));
  const absMin = Math.ceil(Math.min(Math.abs(max), Math.abs(min)));
  const result = Math.random() * (absMax - absMin + 1) + absMin;
  return Math.floor(result);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {getRandomNumber, isEscapeKey, showAlert};
