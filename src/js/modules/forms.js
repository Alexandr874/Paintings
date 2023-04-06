
//import checkNumInput from './checkNumInput';

const forms = ( ) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');
          

          //checkNumInput('input[name="user_phone"]');

          

          const message = {
            loading: 'Загрузка',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что то пошло не так',
            spinner: 'assets/img/spinner.gif',
            ok: 'assets/img/ok.png',
            fail: 'assets/img/fail.png'
          };

          // Создаем пееременную в которую мы будем помещать пути наших данных 
          const path = {
            designer: 'assets/server.php',
            question: 'assets/question.php'

          };

          const postData = async(url, data) => {
                const res = await fetch(url, {
                    method: 'POST',
                    body: data
                });
                return await res.text();
          };

          const clearInputs = () => {
                inputs.forEach(item => {
                    item.value = '';
                });
                // что бы после сброса название файла не оставалось мы его очищаем и подставляем (Файл не выбран')
                upload.forEach(item => {
                    item.previousElementSibling.textContent = 'Файл не выбран';
                });
          };

          // установили обработчик событий , пересчитали все инпуты, и теперь он сработае, когда пользоватлеь
          // что то туда положит, например(фотографию)
          upload.forEach(item => {
                item.addEventListener('input', () => {
                    console.log(item.files[0]);
                    // устанавливаем новую переменную, она будет отвечать за название файла, который мы будем 
                    // помещать на страницу, а конкретно за его колличство симвалов, потому что название файла 
                    // может быть очень длинным
                    let dots;
                    item.files[0].name.split('.')[0].length > 5 ? dots = "..." : dots = '.';
                    // в этом выражении мы проверяем имя файла(item.files[0].name),после чего при помощи метода 
                    // (split) ищем точку между названием и форматом файла, после этого проверяем первое слово
                    // (split('.')[0]), если она будет больше 6 знаков(потому что отщёт начинается с нуля)
                    // то будем ставить троеточие, если нет то точку

                    // Что бы сформировать само название нам понадобитья ещё одна переменная
                    // в которой мы возьмем название файла и обрежем его при помощи метода (substring(0, 6))
                    // прибавляем к нему (dots - три точки или одну) и прибаляем разширение файла (item.files[0].name.split('.')[1])
                    //const name = item.files[0].name.split('.')[0].substring(0, 5) + dots + item.files[0].name.split('.')[1];
                    // выражение получилось очень длинным и в нем очень много повторений, надо его разбить
                    // для это надо ввести ещё одну переменную
                    const arr = item.files[0].name.split('.');
                    const name = arr[0].substring(0, 5) + dots + arr[1];
                    // после того, как мы сформировали название файла, нам необходимо вставить его в элемент, который находится выше 
                    // инпута(файл не выбран) и вставить его нам поможет свойство (previousElementSibling)
                    item.previousElementSibling.textContent = name;
                });
          });


          form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                // Сделали общий блок в который будут входить блоки с картинками и текстом
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.parentNode.appendChild(statusMessage);// добавили (parentNode), тоесть мы вставляем
                // в родителя формы

                item.classList.add('animated', 'fadeOutUp');//Класс который скрывает форму(делает ее прозрачной)
                // после тога как форма стане прозрачной, мы ее еще и удаляем через 400 мл
                // при помощи (setTimeout)
                setTimeout(() => {
                    item.style.display = 'none';
                },400);

                //вводим новую переменную, которая будет отвечать за картинки
                let statusImg = document.createElement('img');
                statusImg.setAttribute('src', message.spinner); // установили спинер
                statusImg.classList.add('animated', 'fadeInUp'); // противоположная анимация нашей форме,
                // тоесть она не делает контент прозрачной, а на оборот его возвращает
                statusMessage.appendChild(statusImg);// устанавливаем в наш блок картинку

                // Вводим ещё одну переменную, которая будет отвечать за текстовое сообщение
                let textMessage = document.createElement('div');
                textMessage.textContent = message.loading;
                statusMessage.appendChild(textMessage);// И тоже помещается в общий блок (statusMessage)





              const formData = new FormData(item);
              
              // Создаем новую переменную, эта переменная будет формировать динамичексий путь, куда 
              // всё будем отправлять 
              let api;
              //при помощи метода (closest) проверяем есть ли такой блок, и отдаем днанные на определённый сервер
              // что бы данные уходили на разные сервера мы поставили логический оператор (или), и добавили в верстку
              // новый класс (calc_form), что бы с этой формы данные попадали на другой сервер
              item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
              console.log(api);
              
              

                postData(api, formData) // подставляем переменную (api), потому что у нас не один сервер, а несколько
                    .then(res => {
                        console.log(res);
                        statusImg.setAttribute('src', message.ok);// подставили картинку
                        textMessage.textContent = message.success; // подставили текст
                    })
                    .catch(() => {
                        statusImg.setAttribute('src', message.fail);// подставили картинку
                        textMessage.textContent = message.failure; // подставили текст
                    })
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                            item.style.display = 'block'; // что бы после удаления форма появилась, необходимо
                            // выставить ее в (block), а затем убрать анимацию, котрорая отвечает у нас за 
                            // скрытие и добавить, которая отвечает за появление 
                            item.classList.remove('fadeOutUp');
                            item.classList.add('fadeInUp');
                            item.reset();
                        }, 3000);  
                        
                    });

                    
                    




            });
          });

};
export default forms;