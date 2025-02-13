let tg = window.Telegram.WebApp;
tg.expand(); // Растягиваем WebApp на весь экран

// Проверяем тему Telegram (светлая/тёмная)
document.body.classList.toggle("dark", tg.colorScheme === "dark");

// Показываем имя пользователя
if (tg.initDataUnsafe.user) {
    document.getElementById("greeting").innerText = `Привет, ${tg.initDataUnsafe.user.first_name}!`;
}

// Добавляем обработчик кнопки
document.getElementById("action-btn").addEventListener("click", () => {
    tg.showAlert("Ты нажал на кнопку!");
});
