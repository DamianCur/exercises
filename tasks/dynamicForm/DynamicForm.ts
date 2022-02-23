import { isParameterAnArray, addAttributeToElement, createElement, addChildToParent, addTextToElement, arrayWithoutTypeProperty, addAttributesToSpecifiedElement } from "./utility"


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



interface InputInterface {
    type: string; label?: string;
    placeholder?: string;
    name?: string;
}

interface ISettings {
    action: string,
    method: string,
    inputs: Array<InputInterface>

}





const generateFormOnPattern = (settings: ISettings): any => {
    const wrapper = document.querySelector(".wrapper") as HTMLElement
    const generatedForm = document.createElement("form")
    wrapper.appendChild(generatedForm);



    const arraySettings = Object.entries(settings)


    arraySettings.forEach((el) => {
        const [key, value] = el;

        if (isParameterAnArray(value)) {
            const arrayValue = value as InputInterface[];
            arrayValue.forEach((el) => {
                let element = null;

                switch (el.type) {
                    case "header":
                        element = createElement("h4")
                        addTextToElement(element, el.label || "Form title")


                        break;
                    case "email":
                        element = createElement("input")

                        addAttributesToSpecifiedElement(element, arrayWithoutTypeProperty(el))

                        break;
                    case "textarea":
                        element = createElement("textarea")
                       
                        addAttributesToSpecifiedElement(element, arrayWithoutTypeProperty(el))

                        
                        break;
                    case "submit":
                        element = createElement("button")

                        addTextToElement(element, el.label || "Send mail")
                        break
                    default:
                        throw Error("Invalid element type")
                }

                addChildToParent(generatedForm, element)
            })
        } else {
            addAttributeToElement(generatedForm, key, value)
        }
    })

    console.log(wrapper);






}

generateFormOnPattern(testSettings)

export { InputInterface }

// DynamicTable


