const form = document.querySelector('form');
const usernameInput = form.elements.judul;
form.addEventListener('submit', (event) => event.preventDefault());

const customValidationUsernameHandler = (event) => {
    event.target.setCustomValidity('');

    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Wajib diisi.');
        return;
    }

    if (event.target.validity.tooShort) {
        event.target.setCustomValidity('Minimal panjang adalah enam karakter.');
        return;
    }

    if (event.target.validity.patternMismatch) {
        event.target.setCustomValidity(
            'Tidak boleh diawali dengan simbol, mengandung white space atau spasi, dan mengandung karakter spesial seperti dolar ($).',
        );
        return;
    }
};

usernameInput.addEventListener('change', customValidationUsernameHandler);
usernameInput.addEventListener('invalid', customValidationUsernameHandler);

// realtime 
usernameInput.addEventListener('blur', (event) => {
    // Validate the field
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;

    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidationEl = connectedValidationId
        ? document.getElementById(connectedValidationId)
        : null;

    if (connectedValidationEl && errorMessage && !isValid) {
        connectedValidationEl.innerText = errorMessage;
    } else {
        connectedValidationEl.innerText = '';
    }
});


const textarea = form.elements.textarea;
form.addEventListener('submit', (event) => event.preventDefault());
const customValidationTextAreaHandler = (event) => {
    event.target.setCustomValidity('');

    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Wajib diisi.');
        return;
    }

    if (event.target.validity.tooShort) {
        event.target.setCustomValidity('Minimal panjang adalah enam karakter.');
        return;
    }

    if (event.target.validity.patternMismatch) {
        event.target.setCustomValidity(
            'Tidak boleh diawali dengan simbol, mengandung white space atau spasi, dan mengandung karakter spesial seperti dolar ($).',
        );
        return;
    }
};
textarea.addEventListener('change', customValidationTextAreaHandler);
textarea.addEventListener('invalid', customValidationTextAreaHandler);
// realtime 
const validationMessage = document.getElementById('textareaValidation');

textarea.addEventListener('input', function () {
    const text = this.value.trim();

    if (text.length === 0) {
        validationMessage.textContent = 'Wajib diisi.';
    } else if (text.length < 6) {
        validationMessage.textContent = 'Minimal panjang adalah enam karakter.';
    } else {
        validationMessage.textContent = '';
    }
});





