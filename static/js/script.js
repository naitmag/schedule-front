    const colors = ['#8cbfba', '#8aacc8', '#d4c56e', '#d89e9f', '#c2a49c', '#a49bd8'];
    const footerColor = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--random-color', footerColor);

function toggleMenu() {
        const sidebar = document.getElementById('sidebar');
        const isOpen = sidebar.style.left === '0px';
        sidebar.style.left = isOpen ? '-250px' : '0px'; // Скрываем/показываем меню
        document.body.style.marginLeft = isOpen ? '0' : '250px'; // Сдвигаем контент
    }

// Примерный код для смены недели
let currentWeek = 1;
const totalWeeks = 16; // Общее количество недель

function changeWeek(direction) {
    currentWeek += direction;
    if (currentWeek < 1) currentWeek = 1; // Проверка на минимальное значение
    if (currentWeek > totalWeeks) currentWeek = totalWeeks; // Проверка на максимальное значение
    updateWeekDisplay();
}

function goToCurrentWeek() {
    currentWeek = getCurrentWeek(); // Функция для получения текущей недели
    updateWeekDisplay();
}

function goToWeek() {
    const weekInput = document.getElementById('week-input').value;
    if (weekInput >= 1 && weekInput <= totalWeeks) {
        currentWeek = weekInput;
        updateWeekDisplay();
    } else {
        alert('Недопустимый номер недели');
    }
}

function updateWeekDisplay() {
    document.getElementById('current-week').textContent = currentWeek;
    // Здесь можно обновить расписание в зависимости от текущей недели
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Функция для получения текущей недели
function getCurrentWeek() {
    const today = new Date();
    // Ваши условия для определения текущей недели
    return Math.ceil(today.getDate() / 7); // Примерная логика, можно заменить
}