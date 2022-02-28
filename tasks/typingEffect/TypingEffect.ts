const testArray = ["Przykładowy string", "Coś tam", "coś coś"]

class TypingEffect {
    classOfanimateElement: string;
    arrayOfStringsToAnimate: string[]
    classOfAnimateElementParent: string


    constructor(classOfanimateElement: string, classOfAnimateElementParent: string, arrayOfStringsToAnimate: string[]) {
        this.classOfanimateElement = classOfanimateElement
        this.classOfAnimateElementParent = classOfAnimateElementParent
        this.arrayOfStringsToAnimate = arrayOfStringsToAnimate
        // ...
    }

    mainFunction() {
        const elementToAnimate = document.querySelector(`.${this.classOfanimateElement}`)

        if (elementToAnimate === null) throw new Error("Element is null")
        if (elementToAnimate.textContent === null) throw new Error("Element content is null")
        const elementText = elementToAnimate.textContent;



        const arrayOfSplitedStrings = this.arrayOfStringsToAnimate.map((dataString) => {
            const splitedString = dataString.split("");



            const recurention = (actualIndex: number, elementArray: Array<string>) => {
                if (actualIndex === elementArray.length) return
                elementToAnimate.textContent += elementArray[actualIndex]

                
                const newIndex = actualIndex + 1;
                

                recurention(newIndex, elementArray)

            }
            recurention(0, splitedString)
        })




    }





    appInit() {
        const parentElement = document.querySelector(`.${this.classOfAnimateElementParent}`) as HTMLElement

        const typingMark = document.createElement("span") // paragraph::after content: "|" + animacja
        typingMark.classList.add("typingMark")
        parentElement.appendChild(typingMark)
        this.mainFunction()

    }
}


const test = new TypingEffect("test", "paragraph", testArray) // "Przykładowy string"
test.appInit()

// const fn = (givenNumber: number) => {
//     console.log(givenNumber);
//     if (givenNumber === 10) return;
//     const newNumber = givenNumber + 1
//     fn(newNumber)
// }

// fn(0)

// const text = 'abcdef'
// const editedText = text.slice(0, -1) //'abcde'