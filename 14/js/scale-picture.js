const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;

const effectLevel = document.querySelector('.effect-level');
const scaleControlValue = document.querySelector('.scale__control--value');
const pictureUploadPreview = document.querySelector('.img-upload__preview img');
const pictureUploadScale = document.querySelector('.img-upload__scale');

let valueScale = SCALE_MAX;

// scaleControlValue.value.innerHTML = '';
scaleControlValue.value = `${SCALE_MAX}%`;

effectLevel.classList.add('hidden');

const onPictureScale = (evt) => {
  if (evt.target.classList.contains('scale__control--smaller')) {
    valueScale -= SCALE_STEP;
  } else if (evt.target.classList.contains('scale__control--bigger')) {
    valueScale += SCALE_STEP;
  }
  if (valueScale < SCALE_MIN) {
    valueScale = SCALE_MIN;
  } else if (valueScale > SCALE_MAX) {
    valueScale = SCALE_MAX;
  }

  scaleControlValue.value = `${valueScale}%`;
  pictureUploadPreview.style.transform = `scale(${(valueScale / 100)})`;
};

const resetScale = () => {
  valueScale = SCALE_MAX;
  scaleControlValue.value = `${SCALE_MAX}%`;
  pictureUploadPreview.style.transform = 'scale(1)';
};

pictureUploadScale.addEventListener('click', onPictureScale);

export {resetScale};
