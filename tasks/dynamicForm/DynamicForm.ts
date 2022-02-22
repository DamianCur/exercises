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
        
        if(Array.isArray(value) !== true) {
            addAttributeToElement(generatedForm, key, value)
        }

        //dodać logike w przypadku gdy element jest arrayem
    })
    
    console.log(generatedForm);
 




}

generateFormOnPattern(testSettings)




