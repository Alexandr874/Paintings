
const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

          let sum = 0;

          const calcFunc = () => {
            sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

            if (sizeBlock.value == '' || materialBlock.value == "") {
                resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
            } else if (promocodeBlock.value === 'IWANTPOPART') {
                resultBlock.textContent = Math.round(sum * 0.7);
            } else {
                resultBlock.textContent = sum;
            }

          };

          sizeBlock.addEventListener('change', calcFunc);
          materialBlock.addEventListener('change', calcFunc);
          optionsBlock.addEventListener('change', calcFunc);
          promocodeBlock.addEventListener('input', calcFunc);

};
export default calc;


/* Данная функция calc используется для расчета стоимости заказа на сайте, где пользователь может выбрать размер и 
материал картины, а также опциональные дополнительные услуги и ввести промокод для получения скидки.

Переменные size, material, options, promocode и result представляют идентификаторы элементов на странице HTML, 
соответствующих выбору размера, материала, опций, промокода и отображению результата.

Внутри функции используется метод document.querySelector() для получения ссылок на соответствующие элементы на 
странице.

Затем переменная sum инициализируется со значением 0, которое представляет начальную стоимость заказа.


Далее, функция calcFunc() определяется для вычисления и обновления стоимости заказа на основе выбранных параметров.
 Эта функция вызывается при каждом изменении значения элементов выбора на странице.

В условной конструкции if-else проверяются выбранные значения размера и материала. Если эти значения отсутствуют, то 
выводится сообщение с просьбой выбрать соответствующие параметры. Если же промокод введен и совпадает со значением 
'IWANTPOPART', то стоимость заказа вычисляется с учетом скидки в 30%. В противном случае, стоимость заказа вычисляется 
без учета скидки.

Наконец, методы addEventListener() используются для регистрации событий изменения значений элементов на странице и 
вызова функции calcFunc() при каждом изменении.

Эта функция экспортируется по умолчанию с помощью export default calc;, что позволяет использовать ее в других частях 
кода, где требуется расчет стоимости заказа на сайте. */
