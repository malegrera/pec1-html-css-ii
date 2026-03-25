import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';

const Gallery = () => {
  const el = document.querySelector('.gallery');
  if (!el) return;

  new Glide(el, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 10,
    autoplay: 3000, // opcional
  }).mount();
};

export default Gallery;