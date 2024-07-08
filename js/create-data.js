import {getRandomInteger, getRandomNonRepetitiveNumber, getRandonArrayElement} from './util.js';

const AMOUNT_PHOTOS = 25;

const PHOTOS_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_AUTHORS = [
  'Алексей', 'Анастасия', 'Андрей', 'Борис', 'Валентина', 'Виктор', 'Галина', 'Геннадий', 'Дмитрий', 'Елена', 'Евгений', 'Захар', 'Ирина', 'Константин', 'Лариса', 'Леонид', 'Михаил', 'Наталья', 'Николай', 'Ольга', 'Федор'
];

const PHOTOS_DESCRIPTIONS = [
  'Настоящий летний отдых',
  'Я и мои друзья на море',
  'Они перетягивают канат',
  'Босиком по траве',
  'Ужин на закате c вином',
  'Занимаемся спортом круглый год',
  'Погнали с горы на лыжах',
  'С днем рожднения, брат',
];

const createMessage = () => Array.from({length: getRandomInteger(1, 2)}, () => getRandonArrayElement(PHOTOS_COMMENTS)).join('. ');

const createPhoto = () => {
  const getRandomId = getRandomNonRepetitiveNumber(1, AMOUNT_PHOTOS);
  const getIdPhoto = getRandomId();
  return {
    id: getIdPhoto,
    avatar: `img/avatar-${getIdPhoto}.svg`,
    message: createMessage(),
    name: getRandonArrayElement(PHOTOS_AUTHORS),
    description: getRandonArrayElement(PHOTOS_DESCRIPTIONS),
    likes: getRandomInteger(15, 200)
  };
};


const listPhotos = () => Array.from({length: AMOUNT_PHOTOS}, createPhoto);

export {listPhotos};
