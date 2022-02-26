
import data from "./tableData.json"

import { createElementAndAddClass, addChildToParent } from "./utility"

const createTable = (mainElementClassName: string, dataElement: any) => {

    // Klasa wrappera w argumencie "wrapper"
    // Data jako argument
    const wrapper = document.querySelector(`.wrapper`) as HTMLElement
    const table = createElementAndAddClass("table", `${mainElementClassName}__table`)



    const tableBody = createElementAndAddClass("tbody", `${mainElementClassName}__tableBody`)

    addChildToParent(wrapper, table)

    addChildToParent(table, tableBody)

   
    const tableHead = createElementAndAddClass("thead", `${mainElementClassName}__tableHead`)
    const tableRowHead = createElementAndAddClass("tr", `${mainElementClassName}__tableRowHead`)

    const getDataKeys = Object.keys(dataElement[0])

    getDataKeys.forEach((dataKey) => {
        const tableHeader = createElementAndAddClass("th", `${mainElementClassName}__tableHeader`)
        tableHeader.innerText = dataKey
        addChildToParent(tableRowHead, tableHeader)
    })
    
    addChildToParent(table, tableHead)
    addChildToParent(tableHead, tableRowHead)
    

    const getDataValues = dataElement.map((personData: Record<string, Array<string>>) => {
        const personDataValues = Object.values(personData)

        return personDataValues
    })

    
    getDataValues.forEach((el: string[][]) => {
       
        console.log(el);
        const tableRowData = createElementAndAddClass("tr", `${mainElementClassName}__tableRow`)

        el.forEach((singleData) => {
            const tableData = createElementAndAddClass("td", `${mainElementClassName}__tableData`)
            tableData.innerText = String(singleData)
            addChildToParent(tableRowData, tableData)
        })

        addChildToParent(tableBody, tableRowData)
    })

}





createTable("wrapper", data)




