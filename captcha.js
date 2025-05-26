let correctAnswer;
$(document).ready(function() {
    // Generate initial CAPTCHA on page load
    generateCaptcha();

    // Refresh CAPTCHA on click
    $('#refreshCaptcha').click(function() {
        generateCaptcha();
        clearErrors();
    });

    // Generate CAPTCHA as the sum of two random numbers between 1 and 10
    function generateCaptcha() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 + num2;
        $('#captchaValue').text(`${num1}  +  ${num2}  = `);
    }

    // Clear error messages
    function clearErrors() {
        $('.submit__error').hide();
        $('.submit__error--empty').hide();
    }

    // Validate CAPTCHA on form submit
    $('#contactForm').submit(function(e) {
        const enteredCaptcha = $('#captchaInput').val().trim();

        clearErrors();

        // Check if input is empty
        if (enteredCaptcha === '') {
            $('.submit__error--empty').show();
            e.preventDefault();
            return;
        }

        // Check if CAPTCHA matches
        if (parseInt(enteredCaptcha) !== correctAnswer) {
            $('.submit__error').show();
            e.preventDefault();
        }
    });
});