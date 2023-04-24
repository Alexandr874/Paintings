
 const changeFormState = (state) => {
    const size = document.querySelectorAll('[name=size]'),
          material = document.querySelectorAll('[name=material]'),
          options = document.querySelectorAll('[name=options]'),
          promocode = document.querySelectorAll('.promocode'),
          calcPrice = document.querySelector('.calc-price');
         
      

        function bindActionToElem(event, elem, prop) {
          elem.forEach((item) => {
            item.addEventListener(event, () => {
              if (prop === 'promocode') {
                state[prop] = item.value; 
              } else {
                state[prop] = {
                  value: item.value,
                  text: item.options[item.selectedIndex].text
                };
              }
              state.price = calcPrice.textContent;
              console.log(state);
            });
          });
        }
      
       

    bindActionToElem('change', size, 'size');
    bindActionToElem('change', material, 'material');
    bindActionToElem('change', options, 'options');
    bindActionToElem('input', promocode, 'promocode');
};

export default changeFormState; 

//Эта функция представляет собой обработчик событий изменения состояния формы на странице. Она принимает в качестве
// аргумента объект "state", который содержит текущее состояние формы, и устанавливает обработчики событий для
// элементов формы, таких как выпадающие списки и поля ввода.

//Сначала функция использует методы document.querySelectorAll() для поиска всех элементов формы, которые нужно 
//обработать. Она находит элементы с атрибутом "name" равным "size", "material", "options" и классом "promocode", а 
//также элемент с классом "calc-price".

//Затем функция объявляет внутреннюю функцию "bindActionToElem", которая используется для назначения обработчиков 
//событий элементам формы. Эта функция принимает три аргумента: тип события (например, "change" или "input"), 
//коллекцию элементов формы и свойство объекта "state", которое должно быть обновлено при изменении значения элемента 
//формы.

//Для каждого элемента формы, переданного в качестве аргумента "elem", функция "bindActionToElem" добавляет обработчик 
//события с помощью метода addEventListener(). Обработчик события изменения (change) получает значение элемента формы
// и обновляет соответствующее свойство объекта "state". Если свойство "prop" равно "promocode", то значение элемента формы назначается напрямую свойству "state.promocode", в противном случае значение элемента формы сохраняется в 
//объекте "state" как объект с двумя свойствами: "value" (значение элемента формы) и "text" (текст, соответствующий выбранному значению). Затем функция также обновляет свойство "price" объекта "state" значением, полученным из элемента 
//с классом "calc-price". И наконец, функция выводит объект "state" в консоль.

//Наконец, функция вызывает функцию "bindActionToElem" для каждого элемента формы, передавая тип события, коллекцию 
//элементов формы и свойство объекта "state", которое должно быть обновлено при изменении значения элемента формы.

//Эта функция может быть использована для реализации калькулятора стоимости заказа, который учитывает выбранные 
//пользователем параметры формы при расчете стоимости.



