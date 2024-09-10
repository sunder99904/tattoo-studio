function toggleNavbar() {
    const navLinks = document.querySelector('nav ul');
    if (navLinks.style.display === 'block') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'block';
    }
  }


  const carouselContainer = document.querySelector('.carousel-container');
  const carouselItems = document.querySelectorAll('.artist > div');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentIndex = 0;
  const itemsToShow = 3; // Number of items to show in the carousel
  const totalItems = carouselItems.length;

  function updateCarousel() {
    const offset = -currentIndex * (100 / itemsToShow); // Calculate the offset for showing three items at a time
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - itemsToShow;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - itemsToShow) ? currentIndex + 1 : 0;
    updateCarousel();
  });


  function googlemap(){
window.location.href="https://www.google.com/maps/dir//Vikas+Marg,+Laxmi+Nagar+Commercial+Complex,+Swasthya+Vihar,+New+Delhi,+Delhi,+110092/@28.637404,77.2043359,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cfb500553a01b:0x993c3bfd510aee26!2m2!1d77.2867373!2d28.6374289?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"

  }


  