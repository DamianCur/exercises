import { isParameterAnArray, addAttributeToElement } from "./utility"


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
    //problem z otypowaniem inputs
}





const generateFormOnPattern = (settings: any): any => {
    const generatedForm = document.createElement("form")
    const arraySettings = Object.entries(settings)


    const settingsVariables = arraySettings.map((el: any): any => {


        const [key, value] = el

        if (Array.isArray(value) !== true) {
            addAttributeToElement(generatedForm, key, value)
        }

        if (Array.isArray(value) === true) {
            const arrayValue = value

            arrayValue.map((el: any) => {
                //problem z otypowaniem el obiekt ze stringami 
                console.log(el.type);
                switch (el.type) {
                    case "header":
                        break;
                    case "email":
                        break;
                    case "textarea":
                        break;
                    case "submit":
                        break
                    default:
                        throw Error("Invalid element type")

                }
            })
        }
    })







}

generateFormOnPattern(testSettings)




