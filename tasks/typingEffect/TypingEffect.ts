

class TypingEffect {
    classOfanimateElement: HTMLElement;
    arrayOfStringsToAnimate: string[]



    constructor(classOfanimateElement: HTMLElement, arrayOfStringsToAnimate: string[]) {
        this.classOfanimateElement = classOfanimateElement
        this.arrayOfStringsToAnimate = arrayOfStringsToAnimate

    }

    appInit() {

        const cursor = document.querySelector(".typingMark") as HTMLElement

        setInterval(() => {
            cursor.classList.toggle("typingMarkActive")
        })
    }
}


