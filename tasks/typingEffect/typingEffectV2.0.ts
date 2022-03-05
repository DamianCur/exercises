const tekstArray = ["tekst1", "tekst2", "tekst3"]

type TypingStyleType = "typeByChar" | "typeByWord";


// POST
// fetch("google.pl", { strength: 101 }).then((data) => data.json()).then((data) => { console.log(data) }).catch((err) => { console.log(err) })

class TypingEffectV20 {

    textToAnimate: string[]
    activeLetter: number = 0
    activeText: number = 0
    animateElement: HTMLElement
    writingSpeed: number
    typingStyle: string
    // avaliableKeys: {}


    constructor(animateElementClass: string, textToAnimate: string[], writingSpeed: number, typingStyle: TypingStyleType) { 
        const elementToAnimate =  document.querySelector<HTMLElement>(`.${animateElementClass}`);
        if (elementToAnimate?.textContent === null || elementToAnimate=== null) throw new Error("")
        if (writingSpeed < 0) throw Error("This number have to be positive.")

        this.textToAnimate = textToAnimate
        this.writingSpeed = writingSpeed
        this.typingStyle = typingStyle
        this.animateElement = elementToAnimate
    }


    mainFunction() {

        let textToAnimateStyle;
        if (this.typingStyle === "typeByChar") {
            textToAnimateStyle = this.textToAnimate[this.activeText][this.activeLetter]
        } else if (this.typingStyle === "typeByWord") {
            textToAnimateStyle = this.textToAnimate[this.activeText]
        }
        // "tekst1" / 1
        // "Ala ma kota".split(" ") / 3

        // console.log(this.textToAnimate[this.activeText].length);
        

        this.animateElement.textContent += textToAnimateStyle
        this.activeLetter++;

        if (this.activeLetter === 1) {
            // da się skrócić
            const deleteCharacterTimeout = setTimeout(() => {
                this.deleteText()
                clearTimeout(deleteCharacterTimeout)
            }, 3000)
        };

        if (this.activeLetter < 1) {
            const timeoutId = setTimeout(() => {
                this.mainFunction();
                clearTimeout(timeoutId);
            }, this.writingSpeed)
        }

        //w którym miejscu powinno nastąpić zwiekszenie indeksu tekstu oraz zerowanie indeksu liery?
    }

    // "Ala ma kota"
    //

    deleteText() {

        if (this.animateElement.textContent === null) throw Error("Element is null")

        // const deletedText = this.animateElement.textContent.slice(0, -1)
        this.animateElement.textContent = ""
        this.activeLetter--
        // console.log(this.activeLetter)

        // ...
        // this.activeText++
        // console.log(this.activeLetter)

        if (this.activeLetter > this.textToAnimate.length - 1) {
            console.log("KONIEC DZIAŁANIA")
            return;
        }

        if (this.activeLetter === 0) {
            // this.mainFunction()
            const deleteCharacterTimeout = setTimeout(() => {
                this.activeText++
                // console.log(this.activeText)
                // this.mainFunction()
                clearTimeout(deleteCharacterTimeout)
            }, 3000)
        }

        const timeoutId = setTimeout(() => {
            this.deleteText();
            clearTimeout(timeoutId);
        }, this.writingSpeed)

        


    }



    appInit() {

        this.mainFunction()


    }
}


const testAppV20 = new TypingEffectV20("animateSpan", tekstArray, 2000, "typeByWord") // { timeoutTime: 400, writingType: "letter" | "word" }
testAppV20.appInit()




    // trackMeNow-medium
//asynchroniczność
//local/session storage
//fetch xml get respond