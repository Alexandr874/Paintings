// 1 способ, самый длинный

/*  const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };


    


    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    });

    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });

    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
    });

    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
    }); 

     btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });

    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });
 
    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;  

 */



// 2 способ 

/* const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
      items = menu.querySelectorAll('li'),
      wrapper = document.querySelector('.portfolio-wrapper'),
      markAll = wrapper.querySelectorAll('.all'),
      no = document.querySelector('.portfolio-no');
  
    const typeFilter = (markType) => {
      markAll.forEach(mark => {
        mark.style.display = 'none';
        mark.classList.remove('animated', 'fadeIn');
      });
  
      no.style.display = "none";
      no.classList.remove('animated', 'fadeIn');
  
      if (markType) {
        markType.forEach(mark => {
          mark.style.display = 'block';
          mark.classList.add('animated', 'fadeIn');
        });
      } else {
        no.style.display = 'block';
        no.classList.add('animated', 'fadeIn');
      }
    };
  
    menu.addEventListener('click', (e) => {
      let target = e.target;
  
      if (target && target.tagName == "LI") {
        items.forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');
  
        switch (target.classList[0]) {
          case "all":
            typeFilter(markAll);
            break;
          case "lovers":
            typeFilter(wrapper.querySelectorAll('.lovers'));
            break;
          case "chef":
            typeFilter(wrapper.querySelectorAll('.chef'));
            break;
          case "girl":
            typeFilter(wrapper.querySelectorAll('.girl'));
            break;
          case "guy":
            typeFilter(wrapper.querySelectorAll('.guy'));
            break;
          default:
            typeFilter();
        }
      }
    });
  };
  
  export default filter;
   */

// 3 Способ самый оптимизированный 

  const filter = () => {
    
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');
   
   
    const typeFilter = (markType) => {
      markAll.forEach((mark) => {
        mark.style.display = 'none';
        mark.classList.remove('animated', 'fadeIn');
      });
   
      no.style.display = 'none';
      no.classList.remove('animated', 'fadeIn');
   
      if (markType) {
        markType.forEach((mark) => {
          mark.style.display = 'block';
          mark.classList.add('animated', 'fadeIn');
        });
      }
      if (markType.length == 0) {
        no.style.display = 'block';
        no.classList.add('animated', 'fadeIn');
      }
    };
    
   // Оптимизация всех кнопок 
    menu.addEventListener('click', (e) => {
      let classSelect = e.target.classList[0];
      let allElems = wrapper.querySelectorAll(`.${classSelect}`);
      typeFilter(allElems);
    });
   
    menu.addEventListener('click', (e) => {
      let target = e.target;
   
      if (target && target.tagName === 'LI') {
        items.forEach((btn) => btn.classList.remove('active'));
        target.classList.add('active');
      }
    });
  };
   
  export default filter;


  //ДОКУМЕНТАЦИЯ 
  
  /* В начале функции определяются переменные menu, items, wrapper, markAll и no.
Переменная menu получает ссылку на элемент меню, которое содержит список категорий. Переменная items получает ссылки 
на все элементы списка категорий. Переменная wrapper получает ссылку на обертку галереи, которая содержит все 
элементы. Переменная markAll получает ссылки на все элементы галереи. И наконец, переменная (no) получает ссылку на 
блок, в котором отображается сообщение об отсутствии элементов в выбранной категории.

Затем определяется функция typeFilter, которая принимает аргумент markType, который представляет собой массив 
элементов, относящихся к выбранной категории. Функция typeFilter скрывает все элементы в галерее, кроме тех, которые 
относятся к выбранной категории. Для этого функция проходится по всем элементам, которые относятся ко всем категориям 
(элементы с классом "all"), скрывает их и удаляет классы "animated" и "fadeIn", которые используются для анимации. 
Затем функция скрывает сообщение об отсутствии элементов и удаляет у него классы "animated" и "fadeIn".

Далее функция
 проверяет, есть ли в массиве markType элементы. Если есть, то функция проходится по каждому элементу в markType, 
 показывает его, добавляет ему классы "animated" и "fadeIn" и отображает его на странице. Если же массив markType 
 пустой, то функция показывает сообщение об отсутствии элементов.

После определения функции typeFilter добавляются два обработчика событий click на элемент меню. При клике на элемент 
меню, переменная classSelect получает класс выбранной категории. Затем функция находит все элементы в галерее, которые 
относятся к этой категории, и передает их в функцию typeFilter. Функция typeFilter скрывает все элементы, которые не 
относятся к этой категории, и отображает только те, которые относятся к выбранной категории. После этого функция 
выделяет выбранный элемент меню, добавляя ему класс "active".

Таким образом, функция filter позволяет пользователю выбирать категорию из меню и отображать только те элементы, 
которые относятся к этой категории. Кроме того, функция содержит код для анимации, который добавля */

