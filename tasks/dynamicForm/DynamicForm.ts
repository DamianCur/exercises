import { Body } from "node-fetch";
import { isParameterAnArray, addAttributeToElement, createElement, addChildToParent, addTextToElement } from "./utility"


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



    const arraySettings = Object.entries(settings)


    const settingsVariables = arraySettings.map((el: any): any => {


        const [key, value] = el

        if (isParameterAnArray(value) !== true) {
            addAttributeToElement(generatedForm, key, value)
        }

        if (isParameterAnArray(value) === true) {
            const arrayValue = value

            arrayValue.map((el: any, i: number) => {
                //problem z otypowaniem el obiekt ze stringami 


                switch (el.type) {
                    case "header":


                        const headerElement = createElement("h4")
                        addChildToParent(generatedForm, headerElement)

                        //czy połączyć tworzenie i dodawanie elementu do jednej funkcji?
                        //w jaki sposób dodać określić kolejność h4                        
                        addTextToElement(headerElement, el.label)
                        
                        break;
                    case "email":
                        const inputElement = createElement("input")
                        addChildToParent(generatedForm, inputElement)
                        break;
                    case "textarea":
                        const textareaElement = createElement("textarea")
                        addChildToParent(generatedForm, textareaElement)
                        //zautymatyzowanie dodawania atrybutów
                        // jakiej logiki użyć do pozyskania elementu
                        const elementKey = Object.keys(el).map((el) => {
                            return el
                        })
                        const elementValue = Object.values(el).map((el) => {
                            return el
                        })

                        // textareaElement.setAtrybute(...elementKey, ...elementValue)
                        // jak przypisać keys i values do setAtrybute



                        break;
                    case "submit":
                        const buttonElement = createElement("button")
                        addChildToParent(generatedForm, buttonElement)
                        addTextToElement(buttonElement, el.label)
                        break
                    default:
                        throw Error("Invalid element type")

                }
            })


        }
    })
    
    console.log(wrapper);






}

generateFormOnPattern(testSettings)




