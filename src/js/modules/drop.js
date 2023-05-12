import {postData} from "../servises/requests";

const drop = () => {
    // drag *
    // dragend *
    // dragenter - объект над dropArea
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // dragstart *
    // drop - объект отправлен в dropArea

   
    const fileInputs = document.querySelectorAll('[name="upload"]');

   

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            // вставили условие при котором данные которые мы поместили в определенный инпут
            // (input.closest('main')) будут сразу уходить на сервер, минуя основную форму
            if (input.closest('main')) {
                const formData = new FormData();
                formData.append('file', input.files[0]);
                postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                })
                .catch(() => {
                    console.log('Ошибка');
                });
            }
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;

           
        });
    });
};

export default drop;


/* 
Данная функция drop отвечает за обработку перетаскивания и загрузки файлов на веб-страницу. 
Рассмотрим ее работу подробно.

1. Сначала мы выбираем все элементы <input> с атрибутом name="upload".
const fileInputs = document.querySelectorAll('[name="upload"]');
Здесь используется селектор [name="upload"], чтобы выбрать все элементы с атрибутом name равным "upload".
2. Далее, мы добавляем обработчики событий для различных событий, связанных с перетаскиванием файлов. 
Мы используем метод forEach для перебора всех выбранных элементов <input> и добавляем обработчики событий 
для каждого элемента.
['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
        input.addEventListener(eventName, preventDefaults, false);
    });
});
Здесь используется метод forEach для перебора массива строк, содержащих имена 
событий 'dragenter', 'dragleave', 'dragover' и 'drop'. 
Затем мы снова используем forEach для перебора всех элементов <input> и добавляем обработчик preventDefaults 
для каждого события.
3. Функция preventDefaults используется для предотвращения стандартного поведения браузера при перетаскивании файлов.
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation(); -используется для остановки распространения события вверх по дереву DOM.
}
Внутри функции вызываются методы preventDefault и stopPropagation для предотвращения выполнения 
стандартных действий по умолчанию и остановки распространения события вверх по дереву DOM.
4. Далее, у нас есть функции highlight и unhighlight, которые изменяют стили элемента, 
связанного с загрузкой файлов, чтобы показать пользователю, что область готова для приема файлов или неактивна.

Метод (closest)- используется для поиска ближайшего родительского элемента, 
соответствующего заданному селектору, относительно текущего элемента в дереве DOM.

function highlight(item) {
    item.closest('.file_upload').style.border = "5px solid yellow";
    item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
}

function unhighlight(item) {
    item.closest('.file_upload').style.border = "none";
    if (item.closest('.calc_form')) {
        item.closest('.file_upload').style.backgroundColor = "#fff";
    } else {
        item.closest('.file_upload').style.backgroundColor = "#ededed";
    }
}

Функция highlight изменяет стиль элемента, чтобы показать, что область готова для приема файлов. 
Она устанавливает границу элемента на 5 пикселей желтого цвета и фоновый цвет на полупрозрачный черный.
Функция unhighlight измен

5. 
Первый блок кода:
['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
        input.addEventListener(eventName, () => highlight(input), false);
    });
});
В этом блоке кода мы добавляем обработчики событий 'dragenter' и 'dragover' для 
каждого элемента <input> из списка fileInputs. Когда происходит событие 'dragenter' или 'dragover', 
вызывается функция highlight(input), которая подсвечивает элемент <input> для указания пользователю, 
что область готова для приема файлов.

Второй блок кода:
['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
        input.addEventListener(eventName, () => unhighlight(input), false);
    });
});
В этом блоке кода мы добавляем обработчики событий 'dragleave' и 'drop' для каждого элемента <input> 
из списка fileInputs. Когда происходит событие 'dragleave' или 'drop', вызывается функция unhighlight(input), 
которая снимает подсветку с элемента <input>, указывая на то, что область больше не активна для приема файлов.

Таким образом, оба блока кода служат для добавления обработчиков событий и вызова соответствующих 
функций highlight и unhighlight, которые изменяют стили элементов <input> для визуального отображения 
состояния области перетаскивания файлов на странице.

6.
 fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
fileInputs.forEach(input => { ... }); - здесь мы перебираем каждый элемент <input> из списка fileInputs 
и добавляем обработчик события drop для каждого элемента.
input.addEventListener('drop', (e) => { ... }); - для каждого элемента <input> мы добавляем 
обработчик события drop, который вызывается, когда файлы перетаскиваются и отпускаются в области <input>.
Внутри обработчика события drop, выполняются следующие действия:
Данная строка кода input.files = e.dataTransfer.files; используется для установки списка файлов, 
которые были перетащены в область <input> для загрузки файлов.
e - это объект события drop, которое происходит при перетаскивании и отпускании файлов в области <input>.
e.dataTransfer - это свойство объекта события, которое предоставляет доступ к данным, перетаскиваемым 
во время операции перетаскивания.
e.dataTransfer.files - это свойство files объекта dataTransfer, которое содержит список файлов, 
которые были перетащены.
Таким образом, строка кода input.files = e.dataTransfer.files; устанавливает список перетаскиваемых 
файлов в свойство files элемента <input>. Это позволяет получить доступ к загруженным файлам и использовать их, 
например, для отправки на сервер или выполнения других операций с файлами.
input.files = e.dataTransfer.files; - устанавливается список перетаскиваемых файлов в 
свойство files элемента <input>. Таким образом, файлы, которые были перетащены, связываются 
с элементом <input>, чтобы их можно было обрабатывать или загружать.
const arr = input.files[0].name.split('.'); - разделяется имя первого файла из списка files на массив, 
используя точку в качестве разделителя. 
Например, если имя файла - "example.jpg", то arr будет содержать ['example', 'jpg'].
arr[0].length > 6 ? dots = "..." : dots = '.'; - проверяется длина имени файла. 
Если длина имени превышает 6 символов, переменной dots присваивается значение "..." (троеточие), иначе - "." (точка).
const name = arr[0].substring(0, 6) + dots + arr[1]; - формируется новое имя файла 
путем объединения первых 6 символов имени файла, переменной dots и расширения файла. Например, "exampl...".
input.previousElementSibling.textContent = name; - устанавливается текстовое содержимое 
предыдущего соседнего элемента (элемента, находящегося перед <input>) равным новому имени файла. 
Таким образом, отображается сокращенное имя файла рядом с областью <input>, чтобы пользователь видел, 
какой файл был выбран.
Таким образом, код позволяет получить информацию о перетаскиваемых файлах, связать 
их с элементом <input> и отобразить сокращенное имя файла для уведомления пользователя о выбранном файле.

*/