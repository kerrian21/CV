// Збереження інформації про браузер у localStorage
const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    vendor: navigator.vendor
};
localStorage.setItem("browserInfo", JSON.stringify(info));

// Відображення у футері
const footerInfo = document.getElementById("browser-info");
const storedInfo = JSON.parse(localStorage.getItem("browserInfo"));
footerInfo.textContent = `Браузер: ${storedInfo.userAgent}, ОС: ${storedInfo.platform}`;

// Відображення коментарів
fetch('https://jsonplaceholder.typicode.com/posts/32/comments') // 32 = твій варіант
    .then(response => response.json())
    .then(comments => {
        const list = document.getElementById("comments-list");
        comments.forEach(comment => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${comment.name}</strong> (${comment.email}):<br>${comment.body}`;
            list.appendChild(li);
        });
    });

// Показ модального вікна через 1 хв
setTimeout(() => {
    document.getElementById("feedback-modal").classList.remove("hidden");
}, 60000);

// Закриття модального вікна
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("feedback-modal").classList.add("hidden");
});

// Автоматична тема за часом
const hour = new Date().getHours();
if (hour < 7 || hour >= 21) {
    document.body.classList.add("night");
}

// Перемикання теми вручну
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("night");
});
