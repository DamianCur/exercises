

import data from "./tableData.json"
import { createElement, addChildToParent } from "./utility"


const createTable = () => {

    const getDataKeys = Object.keys(data[0])
    //czy data[0] to poprawny zapis?



    const wrapper = document.querySelector(".wrapper") as HTMLElement

    const table = createElement("table")
    const tableHead = createElement("thead")
    const tableRow = createElement("tr")

    console.log(getDataKeys);
   

}

createTable()




