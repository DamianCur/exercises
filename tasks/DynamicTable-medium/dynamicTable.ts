

import data from "./tableData.json"
import { createElementAndAddClass, addChildToParent, addClassToElement } from "./utility"


const createTable = () => {

    const getDataKeys = Object.keys(data[0])
    //czy data[0] to poprawny zapis?

    const getDataValues = data.map((personData: Record<string, Array<string>>) => {
        const personDataValues = Object.values(personData)
        
        return personDataValues
    })



    const wrapper = document.querySelector(".wrapper") as HTMLElement

    const table = createElementAndAddClass("table", "wrapper__table")
    const tableHead = createElementAndAddClass("thead", "wrapper__tableHead")
    const tableRow = createElementAndAddClass("tr", "wrapper__tableRowHead")
    const tableBody = createElementAndAddClass("tbody", "wrapper__tableBody")

    addChildToParent(wrapper, table)
    addChildToParent(table, tableHead)
    addChildToParent(tableHead, tableRow)
    addChildToParent(table, tableBody)

    getDataKeys.forEach((dataKey) => {
        const tableHeader = createElementAndAddClass("th", "wrapper__tableHeader")
        tableHeader.innerText = dataKey
        addChildToParent(tableRow, tableHeader)
    })


    getDataValues.forEach((el: Record<string, Array<string>>) => {
        const tableRowData = createElementAndAddClass("tr", "wrapper__tableRow")
        addChildToParent(tableBody, tableRowData)



        el.forEach((singleData: string | Array<string>) => {
            const tableData = createElementAndAddClass("td", "wrapper__tableData")
            tableData.innerText = singleData
            addChildToParent(tableRowData, tableData)
            
        })
    })


}




createTable()




