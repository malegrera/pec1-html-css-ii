import Glide from '@glidejs/glide';

const Gallery = () => {
  const gallery = document.querySelector('.glide');
  if (!gallery) return;

  new Glide(gallery, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 10,
    autoplay: 3000, 
  }).mount();
};

export default Gallery;