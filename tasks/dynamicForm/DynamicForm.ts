import { Body } from "node-fetch";
import { isParameterAnArray, addAttributeToElement, addAndCreateElement } from "./utility"


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
    const wrapper = document.querySelector(".wrapper") as HTMLElement
    const generatedForm = document.createElement("form") 
    wrapper.appendChild(generatedForm)
    console.log(wrapper);
    
   
    
    const arraySettings = Object.entries(settings)


    const settingsVariables = arraySettings.map((el: any): any => {


        const [key, value] = el

        if (isParameterAnArray(value) !== true) {
            addAttributeToElement(generatedForm, key, value)
        }

        if (isParameterAnArray(value) === true) {
            const arrayValue = value

            arrayValue.map((el: any) => {
                //problem z otypowaniem el obiekt ze stringami 
                


                switch (el.type) {
                    case "header":
                        // addAndCreateElement(generatedForm, "busdfdfsdgtton")
                        // console.log(generatedForm);

                        const newElement = document.createElement("h4")
                        generatedForm.appendChild(newElement)
                        console.log(generatedForm);
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




