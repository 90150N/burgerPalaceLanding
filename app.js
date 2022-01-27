window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.navbar');

      burger.addEventListener('click',()=> {
          nav.classList.toggle('nav-active');
      });
  }
  navSlide();