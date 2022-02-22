
const isParameterAnArray = (parameter: [] | string) => {
    return Array.isArray(parameter)
}

const addAttributeToElement = (mainElement: HTMLElement, attributeName: string, attribiuteValue: string) => {
    return mainElement.setAttribute(attributeName, attribiuteValue)
}

const addAndCreateElement = (mainElement: HTMLElement, elementToCreate: string) => {
    const newElement = document.createElement(elementToCreate)
    return mainElement.appendChild(newElement)

}


export { isParameterAnArray, addAttributeToElement, addAndCreateElement }