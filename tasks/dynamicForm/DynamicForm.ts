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

interface ISettings {
    action: string,
    method: string,
    inputs: Array<{ type: string }>
}





const generateFormOnPattern = (settings: any): any => {
    const generatedForm = document.createElement("form")
    const arrySettings = Object.entries(settings)

    arrySettings.reduce((acc, el) => {
        const [key, value] = el
        
    }, 0)


}

generateFormOnPattern(testSettings)