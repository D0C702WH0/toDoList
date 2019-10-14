function addItemToList() {
    const input = document.getElementById("inputItem").value;
    const ul = document.getElementById("ItemsList");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    li.setAttribute('id',`${input}`);
    ul.appendChild(li);  
    
    // for (let [elementIndex, elementValue] of elementsArray.entries()) {
    //     if (elementValue !== "") {
    //         const newElement = elementValue;
    //         console.log("index", elementIndex);
    //         console.log("newElement", newElement);
            
    //         // elementsArray[elementIndex]= `item ${elementIndex}`
    //     }
    // }
}