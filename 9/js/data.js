import {getRandomNumber, getRandomArrayElement, getRandomUniqueNumber} from './util.js';

const DESCRIPTION_PICTURE = [
  'Сейчас бы на море в теплые страны.',
  'Как научиться останавливать время?',
  'Активация ядерной бомбы.',
  'Россия больше не увидит Iphone.',
  'Импровизация Паши Стрелочника.',
  'Попытка описать описание для фотографии.',
  'То чувство, когда фантазии ноль.',
  'Как же трудно придумывать имена переменных.',
  'Спаси, сохрани и дай новых идей для наименования переменных.',
  'Срочно нужен кофе, Help ME.',
];

const COMMENT_PICTURE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES_AUTHOR_COMMENTS = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const SIMILAR_PICTURE_COUNT = 25;

const createUserComment = () => {
  const comments = {
    id: getRandomUniqueNumber(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENT_PICTURE),
    name: getRandomArrayElement(NAMES_AUTHOR_COMMENTS),
  };
  return comments;
};

const createUserPicture = (currientElement, currientId) => {
  ++currientId;
  return {
    id: currientId,
    url: `photos/${currientId}.jpg`,
    description: getRandomArrayElement(DESCRIPTION_PICTURE),
    likes: getRandomNumber(15, 200),
    comments: Array.from({ length: getRandomNumber(1, 40) }, createUserComment)
  };
};

const createUserPictures = () => Array.from({length: SIMILAR_PICTURE_COUNT}, createUserPicture);

export {createUserPictures};
