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
        // console.log(this.animateElementClass);

        // console.log(this.textToAnimate[this.activeText][this.activeLetter]);


        // if (this.animateElement === null) throw Error("Animate element connot be null");
        // if (animateElement.textContent === null) throw Error("Element content is null")
        //dlaczcego animate element jest nullem?
        animateElement.textContent += this.textToAnimate[this.activeText][this.activeLetter]


        this.activeLetter++;
        if (this.activeLetter === this.textToAnimate[this.activeText].length) return;

        const timeoutId = setTimeout(() => {
            this.mainFunction();
            clearTimeout(timeoutId);
        }, 400)




        if (this.activeLetter === this.textToAnimate[this.activeText].length - 1) {
            console.log("test");

           
        }


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

