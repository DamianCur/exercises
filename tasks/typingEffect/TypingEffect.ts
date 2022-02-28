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
        console.log(elementToAnimate)
        if (elementToAnimate === null) throw new Error("Element is null")
        if (elementToAnimate.textContent === null) throw new Error("Element content is null")
        const elementText = elementToAnimate.textContent;
        console.log(this.arrayOfStringsToAnimate)


        const arrayOfSplitedStrings = this.arrayOfStringsToAnimate.map((dataString) => {
            const splitedString = dataString.split("")
            console.log(splitedString)
            console.log(dataString);
            const singleCharacters = splitedString.map((el, i) => {
                // el === splitedString[i]
                console.log(i < splitedString.length)
                // console.log(splitedString[i].length)
                if (elementText.length < splitedString.length) {
                    // 0 < 1

                    // let element = "";
                    // setInterval(() => {
                    // }, 1000)
                }
            })

//rekurencja
            // actualIndex, elementArray
                // actualIndex === elementLength
                // elementToAnimate.textContent += elementArray[actualIndex] 
                // rekurencja(actualIndex + 1, elementArray)
        })
    }

    appInit() {
        const parentElement = document.querySelector(`.${this.classOfAnimateElementParent}`) as HTMLElement

        const typingMark = document.createElement("span") // paragraph::after content: "|" + animacja
        typingMark.classList.add("typingMark")
        typingMark.innerText = "|" // 
        setInterval(() => {
            typingMark.classList.toggle("typingMarkActive")
        }, 400) // css animation keyframes
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