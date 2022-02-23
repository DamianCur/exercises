import { InputInterface } from "./dynamicForm"



const isParameterAnArray = (parameter: [] | string) => {
    return Array.isArray(parameter)
}

const addAttributeToElement = (mainElement: HTMLElement, attributeName: string, attribiuteValue: string) => {
    return mainElement.setAttribute(attributeName, attribiuteValue)
}

const createElement = (elementToCreate: string): any => {
    const newElement = document.createElement(elementToCreate)
    return newElement
}

const addChildToParent = (parent: HTMLElement, child: HTMLElement) => {
    return parent.appendChild(child)
}

const addTextToElement = (element: HTMLElement, textToAdd: string) => {
    return element.innerHTML = textToAdd
}

const arrayWithoutTypeProperty = (element: InputInterface) => {



    const arrayElement = Object.entries(element)

    const coppyOfArrayElement = [...arrayElement]

    const indexOfTypeElement = coppyOfArrayElement.findIndex((el) => {
        return el.includes("type")
    })
   coppyOfArrayElement.splice(indexOfTypeElement, 1)

   

    return coppyOfArrayElement
}

export { isParameterAnArray, addAttributeToElement, createElement, addChildToParent, addTextToElement, arrayWithoutTypeProperty }