document.addEventListener('DOMContentLoaded', function() {
  const banner = document.querySelector('.banner-position');
  const button = document.querySelector('.invisible-button');

  if(button && banner) {
    button.addEventListener('click', function() {
      banner.style.display = 'none';
    });
  }
});