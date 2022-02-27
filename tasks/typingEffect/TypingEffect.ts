const testArray = ["Przykładowy string", "Coś tam", "coś coś"]

class TypingEffect {
    classOfanimateElement: string;
    arrayOfStringsToAnimate: string[]
    classOfAnimateElementParent: string


    constructor(classOfanimateElement: string, classOfAnimateElementParent: string, arrayOfStringsToAnimate: string[]) {
        this.classOfanimateElement = classOfanimateElement
        this.arrayOfStringsToAnimate = arrayOfStringsToAnimate
        this.classOfAnimateElementParent = classOfAnimateElementParent

    }

    mainFunction() {
        const elementToAnimate = document.querySelector(`.${this.classOfanimateElement}`)


        const arrayOfSplitedStrings = this.arrayOfStringsToAnimate.map((dataString, i) => {
            const splitedString = [...dataString] as Array<string>
            const singleCharacters = splitedString.map((el, i) => {
                if (elementToAnimate.textContent.length < splitedString[i].length) {
                    console.log(i);
                    let element = "";

                    setInterval(() => {


                    }, 1000)

                }
            })



        })




    }

    appInit() {
        const parentElement = document.querySelector(`.${this.classOfAnimateElementParent}`) as HTMLElement

        const typingMark = document.createElement("span")
        typingMark.classList.add("typingMark")
        typingMark.innerText = "|"
        parentElement.appendChild(typingMark)
        setInterval(() => {
            typingMark.classList.toggle("typingMarkActive")
        }, 400)


    }
}


const test = new TypingEffect("test", "paragraph", testArray)
test.appInit()
test.mainFunction()





