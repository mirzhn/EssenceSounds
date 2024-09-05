let currentLanguage = 'ru'; // Текущий язык по умолчанию

// Функция загрузки переводов и обновления контента
function loadTranslations(lang) {
    const basePath = window.location.pathname.includes('EssenceSounds') ? '/EssenceSounds' : '';
    fetch(`${basePath}/locales/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            updateContentLanguage(translations);
        })
        .catch(error => console.error('Error loading translations:', error));
}

// Функция обновления контента с переводами
function updateContentLanguage(translations) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const keys = key.split('.');
        let text = translations;

        // Достаём текст по ключу, поддержка вложенных ключей
        keys.forEach(k => {
            text = text[k];
        });

        // Устанавливаем текст или атрибут content
        if (el.tagName === 'META') {
            el.setAttribute('content', text);
        } else {
            el.textContent = text;
        }
    });
}

// Обработчик клика по кнопке для переключения языка
document.getElementById('languageToggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ru' : 'en'; // Переключение между 'en' и 'ru'
    loadTranslations(currentLanguage); // Загрузка переводов
    updateButtonLabel(); // Обновление текста на кнопке
});

// Функция обновления текста на кнопке в зависимости от текущего языка
function updateButtonLabel() {
    const button = document.getElementById('languageToggle');
    if (currentLanguage === 'en') {
        button.innerText = 'RU';
    } else {
        button.innerText = 'EN';
    }
}

// Инициализация: загрузка переводов и обновление кнопки
loadTranslations(currentLanguage);
updateButtonLabel();
