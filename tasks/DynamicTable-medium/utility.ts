const createElementAndAddClass = (elementToCreate: string, className: string) => {
    const createdElement = document.createElement(elementToCreate)
    addClassToElement(createdElement, className)
    return createdElement
}

const addChildToParent = (parent: HTMLElement, child: HTMLElement) => {
    parent.appendChild(child)
}

const addClassToElement = (element: HTMLElement, classToAdd: string) => {
    element.classList.add(classToAdd)
}


export { createElementAndAddClass, addChildToParent, addClassToElement }