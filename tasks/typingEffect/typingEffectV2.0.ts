const tekstArray = ["tekst1", "tekst2", "tekst3"]

class TypingEffectV20 {

    animateElementClass: string;
    textToAnimate: string[]
    classOfElementAddTypingMark: string
    activeLetter: number
    activeText: number


    constructor(animateElementClass: string, textToAnimate: string[], classOfElementAddTypingMark: string, activeLetter: number, activeText: number) {
        this.animateElementClass = animateElementClass;
        this.textToAnimate = textToAnimate
        this.classOfElementAddTypingMark = classOfElementAddTypingMark
        this.activeLetter = activeLetter
        this.activeText = activeText
    }


    mainFunction() {
        const animateElement = document.querySelector(`.${this.animateElementClass}`)

        animateElement.textContent += this.textToAnimate[this.activeText][this.activeLetter]


        this.activeLetter++;

        if (this.activeLetter === this.textToAnimate[this.activeText].length) {
            // return
            let deleteCounter = this.activeLetter

            const deleteCharacterTimeout = setTimeout(() => {
                this.deleteText()
                //problem z uzyskaniem petli
                clearTimeout(deleteCharacterTimeout)

            }, 400)







            return
        };



        const timeoutId = setTimeout(() => {
            this.mainFunction();
            clearTimeout(timeoutId);
        }, 400)



    }


    deleteText() {
        const animateElement = document.querySelector(`.${this.animateElementClass}`)

        const deleyAfterString = setTimeout(() => {
            //OPOZNIENIE PO WYKONANIU CALEGO STRINGA
            //logika odejmowania liter slice() || substract? || -= || charAt()??
            clearTimeout(deleyAfterString)
        }, 1000)

        setTimeout(() => {

            const deletedText = animateElement.textContent.slice(0,-1) // = "1"
            animateElement.textContent = deletedText
            this.activeLetter--
        }, 400)



    }



    addTypingMark() {
        const parentElement = document.querySelector(`.${this.classOfElementAddTypingMark}`) as HTMLElement

        const typingMark = document.createElement("span")
        typingMark.classList.add("typingMark")
        parentElement.appendChild(typingMark)
    }


    appInit() {
        this.addTypingMark()
        this.mainFunction()
    }
}


const testAppV20 = new TypingEffectV20("animateSpan", tekstArray, "paragraph", 0, 0)
testAppV20.appInit()

