
 const changeFormState = (state) => {
    const size = document.querySelectorAll('[name=size]'),
          material = document.querySelectorAll('[name=material]'),
          options = document.querySelectorAll('[name=options]'),
          promocode = document.querySelectorAll('.promocode'),
          calcPrice = document.querySelector('.calc-price');
         
      
        function bindActionToElem(event, elem, prop) {
          elem.forEach((item) => {
            item.addEventListener(event, () => {
              state[prop] = {
                value: item.value,
                text: item.options[item.selectedIndex].text,
              };
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


//Эта функция changeFormState используется для изменения состояния формы на странице, когда пользователь выбирает
//опции 
//размера, материала, дополнительных опций и вводит промокод в форму. Функция принимает объект state в качестве 
//аргумента и обновляет его свойства при выборе опций пользователем.

//Функция начинается с объявления констант size, material, options, promocode, и calcPrice, которые используются для 
//выбора соответствующих элементов на странице. Затем она объявляет вспомогательную функцию bindActionToElem, которая 
//привязывает события change и input к выбранным элементам формы и обновляет свойства state в соответствии с
//выбранными опциями


//Для каждого из элементов size, material, options и promocode функция вызывает bindActionToElem, передавая 
//аргументы event, elem, и prop.
// При вызове bindActionToElem для каждого элемента, функция forEach используется для добавления 
//слушателя событий, который обновляет соответствующее свойство в объекте state, используя значение value выбранного 
//элемента и текст выбранного элемента options[item.selectedIndex].text. Функция console.log используется для 
//отображения текущего состояния объекта state в консоли.

//После вызова bindActionToElem для всех элементов, функция завершается и экспортируется по умолчанию. Общая идея этой 
//функции заключается в том, чтобы создать обработчики событий для элементов формы и обновить объект state с помощью 
//выбранных опций. Это может быть полезно, например, для создания калькулятора стоимости товара, где выбранные 
//пользователем опции влияют на конечную стоимость товара.

