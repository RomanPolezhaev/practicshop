// TODO: переключение вкладок (Вход / Регистрация)

// TODO: регистрация нового пользователя (сохранять в localStorage)

// TODO: вход (проверять email + пароль в localStorage)

// TODO: при успешном входе сохранять currentUser в localStorage и перенаправлять на index.html
document.addEventListener("DOMContentLoaded", () => {

    const loginForm =
        document.getElementById("login-form");

    const registerForm =
        document.getElementById("register-form");

    // Переключение вкладок

    document
        .getElementById("show-login")
        .addEventListener("click", () => {

            loginForm.style.display = "block";
            registerForm.style.display = "none";
        });

    document
        .getElementById("show-register")
        .addEventListener("click", () => {

            loginForm.style.display = "none";
            registerForm.style.display = "block";
        });

    // Регулярные выражения

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    // Регистрация

    document
        .getElementById("register-btn")
        .addEventListener("click", () => {

            const name =
                document.getElementById("register-name").value.trim();

            const email =
                document.getElementById("register-email").value.trim();

            const password =
                document.getElementById("register-password").value;

            if (!name || !email || !password) {
                alert("Заполните все поля");
                return;
            }

            if (!emailRegex.test(email)) {
                alert("Некорректный email");
                return;
            }

            if (!passwordRegex.test(password)) {
                alert(
                    "Пароль должен содержать минимум 6 символов, буквы и цифры"
                );
                return;
            }

            const users =
                JSON.parse(localStorage.getItem("users")) || [];

            const userExists =
                users.some(user => user.email === email);

            if (userExists) {
                alert("Пользователь уже существует");
                return;
            }

            users.push({
                name,
                email,
                password
            });

            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );

            alert("Регистрация успешна!");
        });

    // Вход

    document
        .getElementById("login-btn")
        .addEventListener("click", () => {

            const email =
                document.getElementById("login-email").value.trim();

            const password =
                document.getElementById("login-password").value;

            const users =
                JSON.parse(localStorage.getItem("users")) || [];

            const currentUser =
                users.find(user =>
                    user.email === email &&
                    user.password === password
                );

            if (!currentUser) {
                alert("Неверный email или пароль");
                return;
            }

            localStorage.setItem(
                "currentUser",
                JSON.stringify(currentUser)
            );

            alert("Вход выполнен!");

            window.location.href = "index.html";
        });
});