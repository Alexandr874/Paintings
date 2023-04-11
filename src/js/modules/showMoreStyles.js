
const showMoreStyles = (trigger, styles) => {
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

/* Эта функция показывает дополнительные элементы стилей на странице, когда пользователь 
кликает на кнопку, указанную в аргументе "trigger".

Функция принимает два аргумента: "trigger", который представляет строку с селектором CSS для 
кнопки, и "styles", который представляет строку с селектором CSS для карточек стилей, 
которые нужно отобразить.

Функция начинается с выбора всех карточек с помощью метода "querySelectorAll" и сохраняет их 
в переменной "cards". Затем она добавляет классы "animated" и "fadeInUp" каждой карточке с 
помощью метода "forEach".

Далее, функция добавляет слушатель события "click" на кнопку, указанную в аргументе 
"trigger". Когда пользователь кликает на кнопку, функция сначала удаляет классы "hidden-lg", 
"hidden-md", "hidden-sm" и "hidden-xs" у всех карточек, чтобы они были видны на странице. 
Затем она добавляет классы "col-sm-3", "col-sm-offset-0", "col-xs-10" и "col-xs-offset-1" к 
каждой карточке, чтобы они отображались в виде сетки на странице.

Наконец, функция удаляет кнопку "trigger" с помощью метода "remove", чтобы пользователь 
больше не мог кликнуть на нее и повторно показать элементы стилей.

В целом, функция "showMoreStyles" предоставляет простой способ показать скрытые элементы на странице при нажатии на кнопку. */