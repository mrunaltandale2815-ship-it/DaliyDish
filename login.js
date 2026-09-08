

/* =========================================
   PASSWORD SHOW / HIDE
========================================= */

function togglePassword() {

    const password = document.getElementById("password");
    const icon = document.getElementById("passwordIcon");

    if (password.type === "password") {

        password.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }

}


/* =========================================
   LOGIN FORM
========================================= */

document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();


    /* Get entered values */

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;

    const remember =
        document.getElementById("remember").checked;


    /* =========================================
       CHECK EMPTY FIELDS
    ========================================= */

    if (email === "") {

        alert("Please enter your email address.");

        document.getElementById("email").focus();

        return;

    }


    if (password === "") {

        alert("Please enter your password.");

        document.getElementById("password").focus();

        return;

    }


    /* =========================================
       VALID LOGIN DETAILS
    ========================================= */

    const correctEmail = "mrunaltandale2815@gmail.com";
    const correctPassword = "123456";


    /* =========================================
       CHECK EMAIL AND PASSWORD
    ========================================= */

    if (email === correctEmail && password === correctPassword) {

        /* Login successful */

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);


        /* Remember email */

        if (remember) {

            localStorage.setItem("rememberedEmail", email);

        } else {

            localStorage.removeItem("rememberedEmail");

        }


        alert("Login successful! Welcome to DailyDish.");


        /* Go to home page */

        window.location.href = "index.html";

    } else {

        /* Login failed */

        alert("Incorrect email or password.");

    }

});


/* =========================================
   REMEMBER EMAIL
========================================= */

window.addEventListener("DOMContentLoaded", function() {

    const rememberedEmail =
        localStorage.getItem("rememberedEmail");

    if (rememberedEmail) {

        document.getElementById("email").value =
            rememberedEmail;

        document.getElementById("remember").checked =
            true;

    }

});

