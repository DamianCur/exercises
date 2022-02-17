

// const urlString = "url.com/post?colors[2]=red&valid=true&colors[0]=green&user=Jan&age=25"

interface IResult {
    colors: string[],
    valid: string
    user: string
    age: number
}


class UrlParameters {

    url: string

    constructor() {
        // url.com/post?
        const urlString = "colors[2]=red&valid=true&colors[0]=green&user=Jan&age=25"
        this.url = urlString
    }

    getUrlParameters() {
        // https
        // new URL - params

        //  "?colors[2]=red&valid=true&colors[0]=green&user=Jan&age=25"
        const urlStringSplitAmpersand = this.url.split("&").map((el) => {
            return el.split("=")
        });
        

        const searchParams = new URLSearchParams(this.url)
        const arr = Array.from(searchParams.entries())
        console.log(arr)

        // arr.reduce

        // * switch ...
        // key - [
        // 2 - index
        // colors - nazwa tablicy
        // ...

        // let result = {}
        // const arrayName = "colors" - nazwa tablicy
        // const index = 2
        // const value = "red"

        // czy ta tablica nie istnieje w obiekcie?
        // result[arrayName] = []

        // result[arrayName][index] = value;

        // val === "true" || val === "false"
        // Boolean(val) / true

        // Number.isFinite(Number(value))

        // string

        // { valid: true, user: "Jan", age: 25 }
        // *

        // const test = parameters.forEach((el): void => {
        //     const keyValue = searchParams.get(el) as string

        //     result.colors.push(keyValue)
        //     //dynamicznie dodawać wartości do obiektu
        // })
        // console.log(result);


    }
    init() {
        this.getUrlParameters()
    }



}

const app = new UrlParameters()
app.init()