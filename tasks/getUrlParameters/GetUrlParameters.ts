const urlString = "http://url.com/post?colors[2]=red&valid=true&colors[0]=green&user=Jan&age=25"



class UrlParameters {

    url: string
    result: {}

    constructor() {
        const urlString = "colors[2]=red&valid=true&colors[0]=green&user=Jan&age=25"
        this.url = urlString
        this.result = {}
    }

    getUrlParameters() {
        


        const urlStringSplitAmpersand = this.url.split("&").map((el) => {
            return el.split("=")
        });


        const searchParams = new URLSearchParams(this.url)
        // @ts-ignore
        const arr = Array.from(searchParams.entries()) as [string, string][]
        

        const result = arr.reduce((acc: Record<string, any>, el, index): any => {
            const [parameter, value] = el
            
            
            const isElementAnArray = parameter.includes("[")

            
            
            switch (true) {
                case isElementAnArray:
                    const arrValues = parameter.split("[")
                    const [arrayName, indexToFix] = arrValues
                    const valueIndex = indexToFix.slice(0, -1)

                    

                   
                    if (acc[arrayName] === undefined) {
                        acc[arrayName] = []
                    }

                    acc[arrayName][valueIndex] = value
                    break;
                case value === "true" || value === "false":
                    const convertedStringToBoolen = (value == "true")
                    acc[parameter] = convertedStringToBoolen
                    break;
                    //sprawdzić warunki dlaczego zwraca Nana z operatorem !==
                case Number(value) === NaN:
                    acc[parameter] = Number(value)
                    break;
                default:
                    acc[parameter] = value
                    break
            }

            return acc;
        }, {})

       
console.log(result);


    }
    init() {
        this.getUrlParameters()
    }



}

const app = new UrlParameters()
app.init()

// dynamicForm



