const tekstArray = ["tekst1", "tekst2", "tekst3"]

class TypingEffectV20 {

    animateElementClass: string;
    textToAnimate: string[]
    activeLetter: number = 0
    activeText: number = 0
    animateElement: HTMLElement
    writingSpeed: number


    constructor(animateElementClass: string, textToAnimate: string[], writingSpeed: number) {
        this.animateElementClass = animateElementClass;
        this.textToAnimate = textToAnimate
        this.writingSpeed = writingSpeed
        this.animateElement = document.querySelector(`.${this.animateElementClass}`)
    }


    mainFunction() {

        if (this.animateElement.textContent === null || this.animateElement === null) throw new Error("")
        if (this.writingSpeed < 0) throw Error("This number have to be positive.")

        for (let i = 0; i < this.textToAnimate.length; i++) {

            if (this.activeLetter === this.textToAnimate[this.activeText].length) {
                this.activeText++
                this.activeLetter = 0
                // this.mainFunction()
                //problem z ponownym wykonaniem pętli przy kolejnych stringach
            }

            this.animateElement.textContent += this.textToAnimate[this.activeText][this.activeLetter]
            this.activeLetter++;

            if (this.activeLetter === this.textToAnimate[this.activeText].length) {
                // da się skrócić
                const deleteCharacterTimeout = setTimeout(() => {
                    this.deleteText()
                    // clearTimeout(deleteCharacterTimeout)

                }, 1000)

            };

            if (this.activeLetter < this.textToAnimate[this.activeText].length) {
                const timeoutId = setTimeout(() => {
                    this.mainFunction();
                    // clearTimeout(timeoutId);
                }, this.writingSpeed)
            }

        }

        //w którym miejscu powinno nastąpić zwiekszenie indeksu tekstu oraz zerowanie indeksu liery?




    }


    deleteText() {

        if (this.animateElement.textContent === null) throw Error("Element is null")

        const deletedText = this.animateElement.textContent.slice(0, -1)
        this.animateElement.textContent = deletedText
        this.activeLetter--


        // ...
        this.activeText++

        const timeoutId = setTimeout(() => {
            this.deleteText();
            clearTimeout(timeoutId);
        }, this.writingSpeed)


    }



    appInit() {

        this.mainFunction()


    }
}


const testAppV20 = new TypingEffectV20("animateSpan", tekstArray, 400) // { timeoutTime: 400, writingType: "letter" | "word" }
testAppV20.appInit()




    // trackMeNow-medium