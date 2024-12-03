document.addEventListener('DOMContentLoaded', function () {
    // ��������� ����� �������� �����
    const form = document.getElementById('feedbackForm');

    if (form) {
        form.onsubmit = function (event) {
            // ��������� ������� �� ���������
            event.preventDefault();

            // �������� �������� �����
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            // ���������� ��������� ��� ��������
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^\+?[0-9]{10,15}$/; // ��������� ������ ��� ������ ��������

            // �������� ������������ �����
            if (!emailRegex.test(email)) {
                alert('������� ���������� ����� ����������� �����.');
                return;
            }

            if (!phoneRegex.test(phone)) {
                alert('������� ���������� ����� ��������.');
                return;
            }

            // ����������� ������ � �������
            console.log('Email:', email);
            console.log('Phone:', phone);

            // ��������� �� �������� �������� ������
            alert('������ ����� ������� ���������� � ����������!');
        };
    }

    // ������� ������
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