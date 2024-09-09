
// Получаем ссылки на кнопки и контент
const vocalTab = document.getElementById('vocal-tab');
const pianoTab = document.getElementById('piano-tab');

// Выбираем все элементы с классом "vocal" и "piano" (карточки)
const vocalContent = document.querySelectorAll('.pricecard.vocal');
const pianoContent = document.querySelectorAll('.pricecard.piano');

// Функция для переключения между вкладками
function switchTab(activeTab, inactiveTab, showContent, hideContent) {
    // Меняем активную вкладку
    activeTab.classList.add('active');
    inactiveTab.classList.remove('active');

    // Показываем карточки активной категории
    showContent.forEach(card => card.classList.remove('hidden'));

    // Скрываем карточки неактивной категории
    hideContent.forEach(card => card.classList.add('hidden'));
}

// Обработчик для вкладки "Вокал"
vocalTab.addEventListener('click', function () {
    switchTab(vocalTab, pianoTab, vocalContent, pianoContent);
});

// Обработчик для вкладки "Фортепиано"
pianoTab.addEventListener('click', function () {
    switchTab(pianoTab, vocalTab, pianoContent, vocalContent);
});

// Инициализация: по умолчанию показываем карточки "Вокал"

function boldNumbers() {
    const elements = document.querySelectorAll('.pricecard li, .pricecard .price, .pricecard h3');
    elements.forEach(element => {
        element.innerHTML = element.innerHTML.replace(/(\d+)/g, '<span class="bold-numbers">$1</span>');
    });
}

// Вызов функции при загрузке страницы
