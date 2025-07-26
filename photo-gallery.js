let currentPage = 0;

function openBook() {
  document.querySelector('.cover').style.transform = 'rotateY(-180deg)';
  document.getElementById('pages').style.opacity = '1';

  const pages = document.querySelectorAll('.page');
  pages.forEach((page, index) => {
    page.addEventListener('click', () => {
      if (index === currentPage) {
        page.style.transform = 'rotateY(-180deg)';
        currentPage++;
      }
    });
  });
}




