import {photosList} from './create-data.js';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const randomPhotosList = photosList();


randomPhotosList.forEach(({url, comments, likes}) => {
  const randomPhoto = photoTemplate.cloneNode(true);
  randomPhoto.querySelector('.picture__img').src = url;
  randomPhoto.querySelector('.picture__comments').textContent = comments.length;
  randomPhoto.querySelector('.picture__likes').textContent = likes;
  photoContainer.append(randomPhoto);
});


export {randomPhotosList};
