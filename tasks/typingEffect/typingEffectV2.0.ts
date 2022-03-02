const tekstArray = ["tekst1", "tekst2", "tekst3"]

class TypingEffectV20 {

    animateElementClass: string;
    textToAnimate: string[]
    activeLetter: number = 0
    activeText: number = 0
    animateElement: HTMLElement


    constructor(animateElementClass: string, textToAnimate: string[]) {
        this.animateElementClass = animateElementClass;
        this.textToAnimate = textToAnimate
        this.animateElement = document.querySelector(`.${this.animateElementClass}`)
    }


    mainFunction() {

        if (this.animateElement.textContent === null || this.animateElement === null) throw new Error("")

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
            }, 400)
        }
        
        this.activeText++
        this.activeLetter = 0

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
        }, 400)


    }



    appInit() {
        this.mainFunction()
    }
}


const testAppV20 = new TypingEffectV20("animateSpan", tekstArray) // { timeoutTime: 400, writingType: "letter" | "word" }
testAppV20.appInit()




    // trackMeNow-medium