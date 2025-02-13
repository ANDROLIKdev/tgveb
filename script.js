document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;  // API Telegram WebApp
    tg.expand();  // Раскрываем WebApp на весь экран

    const userInfo = document.getElementById("user-info");
    const sendDataBtn = document.getElementById("send-data");

    if (tg.initDataUnsafe.user) {
        userInfo.innerHTML = `Привет, ${tg.initDataUnsafe.user.first_name}!`;
    } else {
        userInfo.innerHTML = "Не удалось получить данные.";
    }

    sendDataBtn.addEventListener("click", () => {
        const data = {
            first_name: tg.initDataUnsafe.user?.first_name || "Неизвестный",
            last_name: tg.initDataUnsafe.user?.last_name || "",
            id: tg.initDataUnsafe.user?.id || 0
        };

        tg.sendData(JSON.stringify(data)); // Отправка данных в бота
        tg.close(); // Закрываем WebApp
    });
});
