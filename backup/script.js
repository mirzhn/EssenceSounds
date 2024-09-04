document.getElementById('ru').addEventListener('click', function() {
    setLanguage('ru');
});

document.getElementById('en').addEventListener('click', function() {
    setLanguage('en');
});

function setLanguage(language) {
    if (language === 'ru') {
        document.documentElement.lang = 'ru';
        document.querySelector('.hero h1').textContent = 'Раскройте свой голос с профессиональным педагогом по вокалу';
        document.querySelector('.cta-button').textContent = 'Записаться на урок';
        document.querySelector('#about h2').textContent = 'Обо мне';
        document.querySelector('#about p').textContent = 'Краткая биография и информация о преподавателе.';
        document.querySelector('#pricing h2').textContent = 'Стоимость';
        document.querySelector('#pricing ul').innerHTML = `
            <li>Индивидуальные уроки — 2000 руб/час</li>
            <li>Онлайн уроки — 1500 руб/час</li>
            <li>Консультации — 1000 руб/30 минут</li>
        `;
        document.querySelector('#certificates h2').textContent = 'Сертификаты';
        document.querySelector('#contact h2').textContent = 'Контакты';
        document.querySelector('form button').textContent = 'Отправить';

        // Перевод меню
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'Обо мне';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'Стоимость';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'Сертификаты';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'Контакты';

    } else if (language === 'en') {
        document.documentElement.lang = 'en';
        document.querySelector('.hero h1').textContent = 'Unlock Your Voice with a Professional Vocal Coach';
        document.querySelector('.cta-button').textContent = 'Sign Up for a Lesson';
        document.querySelector('#about h2').textContent = 'About Me';
        document.querySelector('#about p').textContent = 'Brief biography and information about the teacher.';
        document.querySelector('#pricing h2').textContent = 'Pricing';
        document.querySelector('#pricing ul').innerHTML = `
            <li>Private Lessons — 2000 RUB/hour</li>
            <li>Online Lessons — 1500 RUB/hour</li>
            <li>Consultations — 1000 RUB/30 minutes</li>
        `;
        document.querySelector('#certificates h2').textContent = 'Certificates';
        document.querySelector('#contact h2').textContent = 'Contact';
        document.querySelector('form button').textContent = 'Send';

        // Перевод меню
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'About Me';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'Pricing';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'Certificates';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'Contact';
    }
}
