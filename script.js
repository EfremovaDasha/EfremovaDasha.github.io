document.addEventListener('DOMContentLoaded', function () {
    // Обработка формы обратной связи
    const form = document.getElementById('feedbackForm');

    if (form) {
        form.onsubmit = function (event) {
            // Отключаем переход по умолчанию
            event.preventDefault();

            // Получаем значения полей
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // Регулярные выражения для проверки
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\+?[0-9]{10,15}$/; // Примерный формат для номера телефона

            // Проверка корректности ввода
            if (!emailRegex.test(email)) {
                alert('Введите корректный адрес электронной почты.');
                return;
            }

            if (!phoneRegex.test(phone)) {
                alert('Введите корректный номер телефона.');
                return;
            }

            // Отображение данных в консоль
            console.log('Email:', email);
            console.log('Phone:', phone);

            // Сообщение об успешной отправке данных
            alert('Данные формы успешно обработаны и отправлены!');
        };
    }

    // Функция поиска
    const searchInput = document.getElementById('searchInput');
    const familyImages = document.querySelectorAll('.famile-image');

    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();

        familyImages.forEach(function (item) {
            const name = item.querySelector('.fam-text p:nth-child(2)').textContent.toLowerCase();
            if (name.indexOf(filter) > -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});