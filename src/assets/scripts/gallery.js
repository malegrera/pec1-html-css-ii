import Glide from '@glidejs/glide';

const Gallery = () => {
  const gallery = document.querySelector('.glide');
  if (!gallery) return;

  const glide = new Glide(gallery, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 10,
    autoplay: 3000,
  });

  function updateCaption() {
    const activeSlide = gallery.querySelector('.glide__slide--active');
    const captionTxt = activeSlide?.dataset.caption || '';
    const captionEl = document.getElementById('caption');
    if (captionEl) captionEl.textContent = captionTxt;
  }

  glide.on(['mount.after', 'run.after'], updateCaption);
  glide.mount();
};

export default Gallery;