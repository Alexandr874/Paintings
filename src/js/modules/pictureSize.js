
const pictureSize = (imgSelector) => {
    // Находим все элементы на странице, которые соответствуют заданному селектору
    const blocks = document.querySelectorAll(imgSelector);

    // Функция для отображения изображения с эффектом масштабирования
    function showImg(block) {
         // Находим элемент с изображением внутри блока
        const img = block.querySelector('img');
        // Изменяем исходное изображение на другое (добавляем к имени файла "-1.png")
        img.src = img.src.slice(0, -4) + '-1.png';
        // Скрываем все параграфы, кроме тех, которые имеют класс "sizes-hit"
        block.querySelectorAll('p:not(.sizes-hit)').forEach(element => {
            element.style.display = 'none';
        });
    }

    // Функция для скрытия изображения и возврата его исходного состояния
    function hideImg(block) {
        // Находим элемент с изображением внутри блока
        const img = block.querySelector('img');
        // Возвращаем исходное изображение (удаляем "-1" из имени файла)
        img.src = img.src.slice(0, -6) + '.png';
         // Отображаем все параграфы
        block.querySelectorAll('p:not(.sizes-hit)').forEach(element => {
            element.style.display = 'block';
        });
    }

    // Добавляем обработчики событий для каждого элемента на странице, найденного по заданному селектору
    blocks.forEach(block => {
        // При наведении курсора на элемент вызываем функцию showImg
        block.addEventListener('mouseover', () => {
            showImg(block);
        });
        // При уходе курсора с элемента вызываем функцию hideImg
        block.addEventListener('mouseout', () => {
            hideImg(block);
        });
    });

};
export default pictureSize;


/* Функция pictureSize принимает аргумент imgSelector - это селектор CSS, который используется для выбора элементов,
содержащих изображения.

Функция находит все элементы на странице, которые соответствуют заданному селектору, и добавляет им обработчики 
событий mouseover и mouseout.

При наведении курсора на элемент с изображением, функция showImg вызывается и изменяет исходное изображение на другое 
(добавляет к имени файла -1.png). Кроме того, она скрывает все параграфы, кроме тех, которые имеют класс sizes-hit.


Когда курсор уходит с элемента, функция hideImg вызывается и возвращает исходное изображение (удаляет -1 из имени  файла) и отображает все параграфы. */