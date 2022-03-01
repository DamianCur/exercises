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

    mainFunction(prevActiveLetter = 0) {
        const elementToAnimate = document.querySelector(`.${this.classOfanimateElement}`)
        

        // if (elementToAnimate === null) throw new Error("Element is null")
        // if (elementToAnimate.textContent === null) throw new Error("Element content is null")




        // const arrayOfSplitedStrings = this.arrayOfStringsToAnimate.map((dataString) => {
        //     const splitedString = dataString.split("");



        //     const recurention = (actualIndex: number, elementArray: Array<string>) => {
        //         if (actualIndex === elementArray.length) return

        //         setTimeout(() => {

        //             elementToAnimate.textContent += elementArray[actualIndex]
        //         }, 4000)


        //         const newIndex = actualIndex + 1;


        //         recurention(newIndex, elementArray)

        //     }
        //     recurention(0, splitedString)
        // })



        let activeLetter = prevActiveLetter;
        let activeText = 0;
        elementToAnimate.textContent += this.arrayOfStringsToAnimate[activeText][activeLetter]
        activeLetter++

        if (activeLetter === this.arrayOfStringsToAnimate[activeText].length) {
            activeText++

            if(activeText === this.arrayOfStringsToAnimate.length){
                return
            }
            activeLetter = 0
        }
        
        setTimeout(() => this.mainFunction(activeLetter), 500)
    }





    appInit() {
        const parentElement = document.querySelector(`.${this.classOfAnimateElementParent}`) as HTMLElement

        const typingMark = document.createElement("span") // paragraph::after content: "|" + animacja
        typingMark.classList.add("typingMark")
        parentElement.appendChild(typingMark)
        this.mainFunction()

    }
}


const appTest = new TypingEffect("test", "paragraph", testArray)

// const fn = (givenNumber: number) => {
//     console.log(givenNumber);
//     if (givenNumber === 10) return;
//     const newNumber = givenNumber + 1
//     fn(newNumber)
// }

// fn(0)

// const text = 'abcdef'
// const editedText = text.slice(0, -1) //'abcde'