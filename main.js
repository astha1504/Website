(function ($) {
    "use strict";

    // Handle input blur events to toggle a "filled" state
    $('.form-input').each(function() {
        $(this).on('blur', function() {
            if ($(this).val().trim() !== "") {
                $(this).addClass('is-filled');
            } else {
                $(this).removeClass('is-filled');
            }
        });
    });

    // Validate form inputs
    let userName = $('.input-wrapper input[name="user-name"]');
    let userEmail = $('.input-wrapper input[name="user-email"]');
    let userMessage = $('.input-wrapper textarea[name="user-message"]');

    $('.form-check').on('submit', function() {
        let isValid = true;

        if ($(userName).val().trim() === '') {
            displayError(userName);
            isValid = false;
        }

        if (!validateEmail($(userEmail).val().trim())) {
            displayError(userEmail);
            isValid = false;
        }

        if ($(userMessage).val().trim() === '') {
            displayError(userMessage);
            isValid = false;
        }

        return isValid;
    });

    $('.form-check .form-input').each(function() {
        $(this).focus(function() {
            clearError(this);
        });
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailPattern.test(email);
    }

    function displayError(input) {
        let alertElement = $(input).parent();
        $(alertElement).addClass('input-error');
    }

    function clearError(input) {
        let alertElement = $(input).parent();
        $(alertElement).removeClass('input-error');
    }

})(jQuery);
