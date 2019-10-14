// function getInputValue() {
//     const toto = document.getElementById("inputItem").value;
//     console.log(toto);  
// }

function addItemToList() {
    const input = document.getElementById("inputItem").value;
    const ul = document.getElementById("ItemsList");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);  
}