
/* =========================================
   PASSWORD SHOW / HIDE
========================================= */

function togglePassword(inputId, iconId) {

    const passwordInput = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        passwordInput.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }

}


/* =========================================
   SIGNUP FORM
========================================= */

document.getElementById("signupForm").addEventListener("submit", function(e) {

    e.preventDefault();


    /* =========================================
       GET FORM VALUES
    ========================================= */

    const username =
        document.getElementById("username").value.trim();

    const email =
        document.getElementById("email").value.trim().toLowerCase();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const terms =
        document.getElementById("terms").checked;


    /* =========================================
       CHECK EMPTY FIELDS
    ========================================= */

    if (username === "") {

        alert("Please enter your username.");

        document.getElementById("username").focus();

        return;

    }


    if (email === "") {

        alert("Please enter your email address.");

        document.getElementById("email").focus();

        return;

    }


    if (password === "") {

        alert("Please create a password.");

        document.getElementById("password").focus();

        return;

    }


    if (confirmPassword === "") {

        alert("Please confirm your password.");

        document.getElementById("confirmPassword").focus();

        return;

    }


    /* =========================================
       USERNAME VALIDATION
    ========================================= */

    if (username.length < 3) {

        alert("Username must be at least 3 characters.");

        document.getElementById("username").focus();

        return;

    }


    /* =========================================
       EMAIL VALIDATION
    ========================================= */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        document.getElementById("email").focus();

        return;

    }


    /* =========================================
       PASSWORD VALIDATION
    ========================================= */

    if (password.length < 6) {

        alert("Password must be at least 6 characters.");

        document.getElementById("password").focus();

        return;

    }


    /* =========================================
       PASSWORD MATCH
    ========================================= */

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        document.getElementById("confirmPassword").focus();

        return;

    }


    /* =========================================
       TERMS & CONDITIONS
    ========================================= */

    if (!terms) {

        alert("Please accept the Terms & Conditions.");

        document.getElementById("terms").focus();

        return;

    }


    /* =========================================
       GET EXISTING USERS
    ========================================= */

    let users =
        JSON.parse(localStorage.getItem("dailyDishUsers")) || [];


    /* =========================================
       CHECK DUPLICATE EMAIL
    ========================================= */

    const existingUser = users.find(function(user) {

        return user.email === email;

    });


    if (existingUser) {

        alert("An account with this email already exists.");

        document.getElementById("email").focus();

        return;

    }


    /* =========================================
       CREATE NEW USER
    ========================================= */

    const newUser = {

        username: username,
        email: email,
        password: password

    };


    /* =========================================
       SAVE USER
    ========================================= */

    users.push(newUser);

    localStorage.setItem(
        "dailyDishUsers",
        JSON.stringify(users)
    );


    /* =========================================
       SUCCESS MESSAGE
    ========================================= */

    alert(
        "Account created successfully!\n\n" +
        "Welcome to DailyDish, " + username + "!"
    );


    /* =========================================
       REDIRECT TO LOGIN
    ========================================= */

    window.location.href = "login.html";

});