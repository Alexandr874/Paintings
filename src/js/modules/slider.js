
const slider = (slides, dir, prev, next) => {

    const items = document.querySelectorAll(slides);
          

          let slidIndex = 1;

          let paused = false;

          function showSlaider(n) {
            if (n > items.length) {
                slidIndex = 1;
            }

            if (n < 1) {
                slidIndex = items.length;
            }

            items.forEach(item => {
                item.style.display = 'none';
                item.classList.add('animated');
            });

            items[slidIndex - 1].style.display = 'block';

          }
          showSlaider(slidIndex);


          function slidePlus(n) {
            showSlaider(slidIndex += n);
          }

          try{
        const btnPrev = document.querySelector(prev),
              btnNext = document.querySelector(next);


            btnNext.addEventListener('click', () => {
                slidePlus(1);
                items[slidIndex - 1].classList.remove('slideInRight');
                items[slidIndex - 1].classList.add('slideInLeft');
    
              });
    
              btnPrev.addEventListener('click', () => {
                slidePlus(-1);
                items[slidIndex - 1].classList.remove('slideInLeft');
                items[slidIndex - 1].classList.add('slideInRight');
              });

          }catch(e){}

          function sliderAnimations() {
            if (dir === 'vertical') {
             paused = setInterval(() => {
                    slidePlus(1);
                    items[slidIndex - 1].classList.add('slideInDown');
                }, 3000);
                
            } else {
              paused = setInterval(() => {
                    slidePlus(1);
                    items[slidIndex - 1].classList.remove('slideInRight');
                    items[slidIndex - 1].classList.add('slideInLeft');
                },3000);
               
            }
          }
          sliderAnimations();

          items[0].parentNode.addEventListener('mouseover', () => {
                clearInterval(paused);
          });

          items[0].parentNode.addEventListener('mouseleave', () => {
            sliderAnimations();
      });

         



};
export default slider;