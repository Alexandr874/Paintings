
// 2 способ
const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
          
    btns.forEach(btn => {
        btn.addEventListener('click', function() {

            btns.forEach(bt => {
                if (!this.classList.contains('active-style')) {
                    bt.classList.remove('active-style');
                    bt.nextElementSibling.classList.remove('activ-content');
                    bt.nextElementSibling.style.maxHeight = '0px'; 
                }

            });

            /* 
            Этот блок кода итерируется по всем кнопкам и проверяет, содержит ли кнопка класс active-style. 
            Если кнопка не содержит этот класс, значит никакой элемент не должен быть открыт в данный момент. 
            В этом случае блок кода удаляет класс active-style у всех кнопок, удаляет класс activ-content
             у следующих элементов после каждой кнопки и устанавливает maxHeight равный 0px. 
             Это обеспечивает закрытие всех элементов аккордеона при клике на любую кнопку.
             */

 
            this.classList.toggle('active-style');
            this.nextElementSibling.classList.toggle('activ-content');

            if (this.classList.contains('active-style')) {

                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";

            } else {
                this.nextElementSibling.style.maxHeight = '0px';  
            }
      
       }); 

       /* 
       Этот блок кода работает с текущей кнопкой, на которую кликнул пользователь. 
       Сначала он переключает класс active-style на текущей кнопке и класс activ-content на следующем элементе после нее.
        Затем он проверяет, содержит ли текущая кнопка класс active-style. 
        Если да, то это означает, что элемент аккордеона должен быть открыт.
        В этом случае блок кода устанавливает maxHeight равный высоте следующ элемента после текущей кнопки, 
        чтобы открыть содержимое элемента. Здесь также добавляется 80px к высоте элемента, 
        чтобы обеспечить дополнительное пространство между элементами аккордеона. 
        Если текущая кнопка не содержит класс active-style, то это означает, что элемент аккордеона должен быть закрыт.
        В этом случае блок кода устанавливает maxHeight равный 0px, чтобы свернуть содержимое элемента.
       */

    });

   

};
export default accordion;






// 1 способ

/* const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
          blocks = document.querySelectorAll(itemsSelector);
          
           blocks.forEach(block => {
                block.classList.add('animated', 'fadeInDown');
           });

           btns.forEach(btn => {
            btn.addEventListener('click', function() {
                if (!this.classList.contains('active')) {
                    btns.forEach(btn => {
                        btn.classList.remove('active', 'active-style');
                    });
                    this.classList.add('active', 'active-style');
                }
            });

           });

};
export default accordion;
 */
/* Эта функция определяет и экспортирует компонент-аккордеон, который может
 использоваться для создания интерактивных списков на веб-страницах.

Внутри функции определяются два аргумента: triggersSelector и itemsSelector. triggersSelector - это селектор
 для кнопок аккордеона, а itemsSelector - селектор для элементов, которые будут отображаться при раскрытии
  каждой кнопки.

Затем функция находит все кнопки и элементы с помощью метода querySelectorAll() и сохраняет их в соответствующих
 переменных btns и blocks.

Далее функция добавляет CSS классы "animated" и "fadeInDown" ко всем элементам в коллекции blocks, чтобы они могли
 плавно появляться на странице.

Затем функция добавляет обработчики событий "click" ко всем кнопкам в коллекции btns.
 В каждом обработчике событий функция проверяет, не имеет ли текущая кнопка класса "active".
  Если текущая кнопка не активна, то функция удалит классы "active" и "active-style" у всех кнопок 
  в коллекции btns и добавит эти классы только к текущей кнопке. 
  Класс "active" обычно используется для выделения выбранной кнопки, а "active-style" - для применения 
  стилей к этой кнопке. */