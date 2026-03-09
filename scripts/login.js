/**
 * Authentication Handler
 */
const authService = (() => {
    const VALID_USER = "admin";
    const VALID_PASS = "admin123";

    const attemptLogin = (e) => {
        e.preventDefault();
        
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        if (user !== VALID_USER) {
            alert("Invalid Username!");
            return;
        }

        if (pass !== VALID_PASS) {
            alert("Invalid Password!");
            return;
        }

        // Redirect on success
        window.location.href = 'dashboard.html';
    };

    return { init: () => document.getElementById('signIn').addEventListener('click', attemptLogin) };
})();

authService.init();