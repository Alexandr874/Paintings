// 2 способ при помощи requestAnimationFrame() 

const scroling = (upSelector) => {

    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => { 
        if (document.documentElement.scrollTop > 1650) {
            
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut'); 
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove ('fadeIn'); 
        }      
        
    });

    let links = document.querySelectorAll('[href^="#"]'); // ([href^="#"]) - ищем все ссылки которые начинаются с #
    let speed = 0.7;

        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                 
                let widthTop = document.documentElement.scrollTop, 
                    hash = this.hash,
                    toBlock = document.querySelector(hash).getBoundingClientRect().top,
                    // метод (getBoundingClientRect()) - позволяет получит координаты, и размеры нужного элемента
                    start = null;
                     
                requestAnimationFrame(step);

                function step(time) {
                    if (start === null) {
                        start = time;
                    }

                    let progress = time - start;
                    // переменная (r) будет отвечать за колличество пикселей на которые нам необходимо
                    // пролистать в течении этой анимации
                    let r = (toBlock < 0) ? Math.max(widthTop - progress/speed, widthTop + toBlock) :  Math.min (widthTop
                         + progress/speed, widthTop + toBlock); 

                         document.documentElement.scrollTo(0, r); 

                         if (r != widthTop + toBlock) {
                            requestAnimationFrame(step);
                         } else {
                            location.hash = hash; 
                         }
                }
            });

        });
         


};
export default scroling;


/*
 Эта функция создает две основные возможности для пользователя на сайте: прокрутка страницы вверх
 и анимированная прокрутка к якорным ссылкам. Давайте посмотрим, как это происходит:

1.Прокрутка страницы вверх:
Функция начинается с того, что она получает элемент кнопки "вверх" по селектору и добавляет
 к нему обработчик события прокрутки окна. Когда пользователь прокручивает страницу, 
 проверяется текущая позиция прокрутки с помощью свойства scrollTop элемента document.documentElement. 
 Если позиция больше 1650 пикселей, то кнопка "вверх" появляется с помощью добавления 
 классов 'animated' и 'fadeIn', а также удаляется класс 'fadeOut'. 
 В противном случае классы меняются на 'fadeOut' и удаляется класс 'fadeIn'.
2.Анимированная прокрутка к якорным ссылкам:
Затем функция находит все якорные ссылки на странице, то есть ссылки, которые начинаются с символа '#'. 
Когда пользователь кликает на такую ссылку, происходит отмена действия по умолчанию (то есть перехода по ссылке), 
и начинается анимированная прокрутка к элементу, на который ссылается ссылка.
Для этого функция находит расположение элемента, на который ссылается ссылка, 
с помощью метода getBoundingClientRect(). Затем она использует requestAnimationFrame() для 
анимации прокрутки к этому элементу. Функция step() вызывается каждый раз, когда браузер готов отрисовать 
следующий кадр анимации. Она вычисляет текущую позицию прокрутки и изменяет ее на каждом кадре до тех пор,
 пока не достигнет нужной позиции. Когда прокрутка закончена, функция устанавливает хэш-часть URL в 
 соответствии с якорной ссылкой, чтобы браузер мог перейти к элементу, если пользователь обновит страницу.
Все эти функции обеспечивают более гладкое и приятное взаимодействие пользователя с сайтом. */






// 1способ 
/* const scroling = (upSelector) => {

    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => { 
        if (document.documentElement.scrollTop > 1650) {
            
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut'); 
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove ('fadeIn'); 
        }      
        
    });


    const elenent = document.documentElement,
          body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function(e) {
            let scrollTop  = Math.round(body.scrollTop || elenent.scrollTop);
            
            if (this.hash != '') {
                e.preventDefault(); 
                let hashElement = document.querySelector(this.hash);
                let hashElementTop = 0; 
                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash); 
            }

        });

    }; */



    /* 
upElem.addEventListener('click', function(e) { ... }) - регистрирует обработчик события click на кнопке "наверх".
let scrollTop = Math.round(body.scrollTop || elenent.scrollTop); - определяет текущее положение верха документа 
в пикселях от верхнего края окна браузера.
if (this.hash != '') { ... } - проверяет, есть ли у элемента, на который было совершено нажатие, атрибут hash. 
Атрибут hash содержит идентификатор якоря, к которому должна осуществляться прокрутка. Например, #section1.
e.preventDefault(); - отменяет действие по умолчанию для события click, то есть отменяет переход по ссылке.
let hashElement = document.querySelector(this.hash); - находит элемент на странице по его идентификатору, 
используя свойство hash нажатого элемента.
let hashElementTop = 0; 
while (hashElement.offsetParent) 
{ hashElementTop += hashElement.offsetTop; hashElement = hashElement.offsetParent; } - вычисляет 
абсолютное положение найденного элемента на странице относительно верхнего края документа.
hashElementTop = Math.round(hashElementTop); - округляет положение элемента до целого числа.
smoothScroll(scrollTop, hashElementTop, this.hash); - вызывает функцию smoothScroll, 
которая обеспечивает плавную прокрутку страницы к якорю.
Таким образом, функция calcScroll определяет обработчик события click на кнопке "наверх" 
и вызывает функцию smoothScroll, которая обеспечивает плавную прокрутку к якорю при нажатии на кнопку "наверх".
    */

    /* const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            privScrolTop,
            speed;

        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function() {
            let scrollTop  = Math.round(body.scrollTop || elenent.scrollTop); 

            if (privScrolTop === scrollTop || (to > from && scrollTop >= to) || (to < from && scrollTop <= to)) {
                clearInterval(move);
                history.replaceState(history.state, history.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                elenent.scrollTop += speed;
                privScrolTop = scrollTop;   
            }
        },timeInterval);

    };
    calcScroll(); */


    /* 
 В функции smoothScroll определены следующие методы:
setInterval - метод, который вызывает функцию через определенный интервал времени, 
определяемый параметром timeInterval. В данном случае setInterval вызывает анонимную функцию, 
в которой реализована логика прокрутки страницы.
clearInterval - метод, который прекращает выполнение функции, вызываемой через setInterval, 
когда достигнуто определенное условие. В данной функции clearInterval применяется, 
когда прокрутка дошла до нужной позиции.
history.replaceState - метод, который изменяет URL текущей страницы без перезагрузки страницы. 
Этот метод применяется в данной функции для обновления URL страницы с учетом якорной ссылки, 
когда прокрутка дошла до нужной позиции.
Методы для вычисления направления скролла и определения скорости прокрутки:
if (to > from) { speed = 30; } else { speed = -30; } - определяет направление прокрутки 
в зависимости от положения элемента, на который кликнули, и текущего положения прокрутки. 
Если to больше from, то направление прокрутки вниз, скорость прокрутки положительная (30). 
Если to меньше from, то направление прокрутки вверх, скорость прокрутки отрицательная (-30).
body.scrollTop += speed; и elenent.scrollTop += speed; - устанавливают новое значение 
вертикального смещения (scrollTop) для элементов body и documentElement. 
В данном случае прокрутка осуществляется с помощью изменения значения scrollTop на определенную скорость speed. 
Как было сказано ранее, при to > from скорость равна 30, а при to < from скорость равна -30.
privScrolTop = scrollTop; - сохраняет текущее значение вертикального смещения (scrollTop)
 в переменной privScrolTop, чтобы проверить, достигла ли прокрутка конечной позиции.
В целом, функция smoothScroll реализует плавную прокрутку страницы до заданного элемента 
при клике на ссылку с якорной ссылкой. Она определяет направление прокрутки и устанавливает скорость прокрутки. 
Затем она изменяет значение scrollTop для элементов body и documentElement с определенной скоростью, 
пока не достигнет нужной позиции. После этого функция обновляет URL страницы с учетом якорной ссылки.
    */



/* };
export default scroling;  */

/* 
Данная функция предназначена для добавления плавной прокрутки страницы к определенному элементу 
при клике на кнопку "наверх".

Функция начинается с определения переменной upElem, которая содержит ссылку на кнопку "наверх", 
передаваемую в качестве аргумента функции. Затем, при скроллинге страницы, 
добавляются и удаляются CSS-классы с кнопки в зависимости от текущего положения прокрутки. 
Если пользователь прокрутил страницу до определенной высоты (в данном случае 1650px), 
на кнопку "наверх" добавляются классы animated и fadeIn, чтобы она анимированно появлялась на экране. 
В противном случае класс fadeOut удаляется, и кнопка скрывается.

Затем определяются переменные element и body, которые будут использоваться для плавной прокрутки страницы. 
Функция calcScroll добавляет обработчик события click на кнопку "наверх", который получает 
текущее значение scrollTop и использует его для вычисления положения элемента, к которому нужно прокрутить страницу. 
После этого функция smoothScroll запускает плавную прокрутку до указанного элемента с помощью метода setInterval.

smoothScroll получает начальное значение scrollTop, конечное значение и хэш элемента, 
к которому нужно прокрутить страницу. Она вычисляет направление движения (вверх или вниз) и 
задает скорость прокрутки в зависимости от этого. Затем функция запускает таймер, 
который каждые 1 миллисекунду изменяет значение scrollTop и скроллит страницу, пока не достигнет нужного элемента.

Когда пользователь нажимает на кнопку "наверх", вызывается функция calcScroll, 
которая добавляет обработчик события на кнопку и запускает плавную прокрутку.

 */



