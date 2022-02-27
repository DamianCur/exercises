

class TypingEffect {
    classOfanimateElement: string;
    arrayOfStringsToAnimate: string[]



    constructor(classOfanimateElement: string, arrayOfStringsToAnimate: string[]) {
        this.classOfanimateElement = classOfanimateElement
        this.arrayOfStringsToAnimate = arrayOfStringsToAnimate

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


const test = new TypingEffect("test", [])
test.appInit()





