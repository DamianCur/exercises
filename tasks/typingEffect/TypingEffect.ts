const testArray = ["Przykładowy string", "Coś tam", "coś coś"]

class TypingEffect {
    classOfanimateElement: string;
    arrayOfStringsToAnimate: string[]



    constructor(classOfanimateElement: string, arrayOfStringsToAnimate: string[]) {
        this.classOfanimateElement = classOfanimateElement
        this.arrayOfStringsToAnimate = arrayOfStringsToAnimate

    }

    mainFunction() {
        const parentElement = document.querySelector(`.${this.classOfanimateElement}`)

        const arrayOfSplitedStrings = this.arrayOfStringsToAnimate.map((dataString) => {
            const splitedString = [...dataString] as Array<string>
            console.log(splitedString);
        })




    }

    appInit() {
        const parentElement = document.querySelector(`.${this.classOfanimateElement}`) as HTMLElement

        const typingMark = document.createElement("span")
        typingMark.classList.add("typingMark")
        typingMark.innerText = "|"
        parentElement.appendChild(typingMark)
        setInterval(() => {
            typingMark.classList.toggle("typingMarkActive")
        }, 400)


    }
}


const test = new TypingEffect("test", testArray)
test.mainFunction()





