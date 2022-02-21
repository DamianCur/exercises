const testSettings = {
    action: '/contact/by-mail',
    method: 'POST',
    inputs: [
        { type: 'header' },
        { type: 'header', label: 'Skontaktuj się z nami' },
        { name: 'yourEmail', type: 'email', placeholder: 'Wpisz swój email' },
        { type: 'email' },
        { name: 'content', type: 'textarea', placeholder: 'Wpisz treść wiadomości' },
        { type: 'submit', label: 'Wyślij wiadomość' }
    ]
}