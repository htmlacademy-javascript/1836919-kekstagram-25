const FILTERS_EFFECT = {
  'effect-none': {
    filter: 'none',
    unit: '',
    class: '',
    noUiSlider: {
      range: {
        min: 0,
        max: 0
      },
      start: 0,
      step: 0
    }
  },
  'effect-chrome': {
    filter: 'grayscale',
    unit: '',
    class: 'chrome',
    noUiSlider: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },
  'effect-sepia': {
    filter: 'sepia',
    unit: '',
    class: 'sepia',
    noUiSlider: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1,
    }
  },
  'effect-marvin': {
    filter: 'invert',
    unit: '%',
    class: 'marvin',
    noUiSlider: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1,
    }
  },
  'effect-phobos': {
    filter: 'blur',
    unit: 'px',
    class: 'phobos',
    noUiSlider: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1,
    }
  },
  'effect-heat': {
    filter: 'brightness',
    unit: '',
    class: 'heat',
    noUiSlider: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1,
    }
  }
};

const effectLevel = document.querySelector('.effect-level');
const effectLevelSlider = effectLevel.querySelector('.effect-level__slider');
const effectLevelValue = effectLevel.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => (
      parseFloat(value)
    ),
  }
});

const onEffectsList = (evt) => {
  imgUploadPreview.classList = '';
  if (evt.target.id === 'effect-none') {
    effectLevel.classList.add('hidden');
    imgUploadPreview.style.filter = 'none';
  } else {
    effectLevel.classList.remove('hidden');
    effectLevelSlider.noUiSlider.updateOptions(FILTERS_EFFECT[evt.target.id].noUiSlider);
    imgUploadPreview.classList.add(`effects__preview--${FILTERS_EFFECT[evt.target.id].class}`);
  }
};

const resetEffects = () => {
  effectLevel.classList.add('hidden');
  imgUploadPreview.style.filter = 'none';
};

effectLevelSlider .noUiSlider.on('update', () => {
  const selectedFilter = effectsList.querySelector('input:checked').id;
  const sliderValue = effectLevelSlider.noUiSlider.get();
  effectLevelValue.value = sliderValue;
  imgUploadPreview.style.filter = `${FILTERS_EFFECT[selectedFilter].filter}(${sliderValue}${FILTERS_EFFECT[selectedFilter].unit})`;
});

effectsList.addEventListener('change', onEffectsList);

export {resetEffects};
