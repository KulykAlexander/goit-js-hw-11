const axios = require('axios').default;
import Notiflix from 'notiflix';
import SimpleLightBox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';






function getImg(photo, page) {
    return axios.get(
      `https://pixabay.com/api/?key=32376181-04be028924f4b971209ce7acf=${photo}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`
    );
  }