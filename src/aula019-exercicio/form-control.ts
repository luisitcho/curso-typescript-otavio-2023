import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

// Evento de submit no form
form.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    hideErrorMessages(this);
    checkFormEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);

    if (shouldSendForm(this)) form.submit();
});

// Verifica se os inputs estão vazios
function checkFormEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if (!input.value)
            showErrorMessage(input, 'O campo não pode ficar vazio!');
    });
}

// Verifica o formato do email
function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input, 'Email invalido');
}

// Verifica se as senhas estão iguais
function checkEqualPasswords(
    password: HTMLInputElement,
    password2: HTMLInputElement,
): void {
    if (password.value !== password2.value) {
        showErrorMessage(password, 'Senha diferente!');
        showErrorMessage(password2, 'Senha diferente!');
    }
}

// Remove a mensagem de erro dos inputs corretos
function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach((item) =>
        item.classList.remove(SHOW_ERROR_MESSAGES),
    );
}

// Mostra a mensagem de erro dos inputs errados
function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
        '.error-message',
    ) as HTMLSpanElement;

    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}
showErrorMessage(username, 'MENSAGEM');
hideErrorMessages(form);

// Vereifica os campos antes de enviar
function shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).forEach(
        () => (send = false),
    );

    return send;
}
