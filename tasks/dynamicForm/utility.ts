
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


export { isParameterAnArray, addAttributeToElement, createElement, addChildToParent, addTextToElement }