

import data from "./tableData.json"
import { createElementAndAddClass, addChildToParent, addClassToElement } from "./utility"

const createTable = () => {

    // Klasa wrappera w argumencie "wrapper"
    // Data jako argument
    const wrapper = document.querySelector(".wrapper") as HTMLElement
    const table = createElementAndAddClass("table", `wrapper__table`)


    const tableHead = createElementAndAddClass("thead", "wrapper__tableHead")
    const tableRowHead = createElementAndAddClass("tr", "wrapper__tableRowHead")
    const tableBody = createElementAndAddClass("tbody", "wrapper__tableBody")

    addChildToParent(wrapper, table)
    addChildToParent(table, tableHead)
    addChildToParent(tableHead, tableRowHead)
    addChildToParent(table, tableBody)

    // X get w zmiennej
    // const tableHead = createElementAndAddClass("thead", "wrapper__tableHead")
    // const tableRowHead = createElementAndAddClass("tr", "wrapper__tableRowHead")
    const getDataKeys = Object.keys(data[0])
    
    getDataKeys.forEach((dataKey) => {
        const tableHeader = createElementAndAddClass("th", "wrapper__tableHeader")
        tableHeader.innerText = dataKey
        addChildToParent(tableRowHead, tableHeader)
    })

    // addChildToParent(table, tableHead)
    // addChildToParent(tableHead, tableRowHead)

    const getDataValues = data.map((personData: Record<string, Array<string>>) => {
        const personDataValues = Object.values(personData)
        
        return personDataValues
    })

    // data.forEach Record<string, string | Array<string> | number>
    getDataValues.forEach((el: string[][]) => {
        // const personDataValues = Object.values(personData)
        const tableRowData = createElementAndAddClass("tr", "wrapper__tableRow")

        el.forEach((singleData) => {
            const tableData = createElementAndAddClass("td", "wrapper__tableData")
            tableData.innerText = String(singleData)
            addChildToParent(tableRowData, tableData) 
        })

        addChildToParent(tableBody, tableRowData)
    })

}





createTable()




