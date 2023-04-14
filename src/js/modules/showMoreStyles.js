// Решение, когда стили подгружаются с сервера
import { getResource } from "../servises/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

  

    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => console.log(error));
            
            this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt="style">
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
           </div>
            `;

            document.querySelector(wrapper).appendChild(card);

        });
    }


};

/* Функция `showMoreStyles` принимает два параметра: `trigger` и `wrapper`. 

`trigger` - это селектор элемента, на который повешен обработчик события "click". 

`wrapper` - это селектор элемента, в который будут добавляться карточки со стилями. 

Функция создает обработчик события "click" на элементе селектора `trigger`. При клике на этот элемент, функция 
`getResource` отправляет GET запрос на сервер по адресу `http://localhost:3000/styles`. Если запрос успешен, то 
вызывается функция `createCards` и передается в нее ответ сервера (`res`). Если запрос не удался, то будет выведена 
ошибка в консоль. 

Функция `createCards` принимает ответ сервера и для каждого объекта в массиве `response` создает карточку со стилем, 
используя `document.createElement`, задает ей классы и заполняет содержимое HTML-кода. Созданная карточка добавляется 
внутрь элемента, выбранного по селектору `wrapper`. 

После вызова функции `getResource` и добавления новых карточек, элемент с селектором `trigger` удаляется из DOM 
дерева. 

Функция `showMoreStyles` экспортируется по умолчанию из модуля. */

export default showMoreStyles;





// Решение задачи, если все стили  присудствуют в 
// в html документе


/* const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        
         btn.remove();
    });
};

export default showMoreStyles;
 */
/* Эта функция показывает дополнительные элементы стилей на странице, когда пользователь 
кликает на кнопку, указанную в аргументе "trigger".

Функция принимает два аргумента: "trigger", который представляет строку с селектором CSS для 
кнопки, и "styles", который представляет строку с селектором CSS для карточек стилей, 
которые нужно отобразить.

Функция начинается с выбора всех карточек с помощью метода "querySelectorAll" и сохраняет их 
в переменной "cards". Затем она добавляет классы "animated" и "fadeInUp" каждой карточке с 
помощью метода "forEach".

Далее, функция добавляет  события "click" на кнопку, указанную в аргументе 
"trigger". Когда пользователь кликает на кнопку, функция сначала удаляет классы "hidden-lg", 
"hidden-md", "hidden-sm" и "hidden-xs" у всех карточек, чтобы они были видны на странице. 
Затем она добавляет классы "col-sm-3", "col-sm-offset-0", "col-xs-10" и "col-xs-offset-1" к 
каждой карточке, чтобы они отображались в виде сетки на странице.

Наконец, функция удаляет кнопку "trigger" с помощью метода "remove", чтобы пользователь 
больше не мог кликнуть на нее и повторно показать элементы стилей.

В целом, функция "showMoreStyles" предоставляет простой способ показать скрытые элементы на странице при нажатии на кнопку. */