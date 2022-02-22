
const isParameterAnArray = (parameter: [] | string) => {
    return Array.isArray(parameter)
}

const addAttributeToElement = (mainElement: HTMLElement, attributeName: string, attribiuteValue: string) => {
    return mainElement.setAttribute(attributeName, attribiuteValue)
}


export { isParameterAnArray, addAttributeToElement }