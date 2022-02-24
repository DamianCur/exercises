// // const createAndAddElements = (parentElement: HTMLElement, elementToCreate: string, elementQuantity: number): any => {
// for (let i = 0; i < elementQuantity; i++) {
//     const childElement = document.createElement(elementToCreate)
//     parentElement.appendChild(childElement)

// }
    
// }

const createElement = (elementToCreate: string) => {
    const createdElement = document.createElement(elementToCreate)
    return createdElement
}

const addChildToParent = (parent: HTMLElement, child: HTMLElement) => {
    parent.appendChild(child)
}

export { createElement , addChildToParent }