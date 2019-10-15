/* list */
const list = document.querySelector('ul');

/* Add click event on elements of the  list */
list.addEventListener('click', (ev) => {
const element = document.getElementById(`${ev.target.id}`);
changeDoneClassState(element);
}, false);

/**
 * Allows to switch between done class and no class
 * @param {*} element of the list
 */
const changeDoneClassState = (element) => {
    const doneClass = "done";
    if (element === null) return;
    
    if (element.classList.value === "") {
        element.classList.add(doneClass)
    } else {
        element.classList.remove(doneClass)
    }
}

/**
 * Allows to add an item to the list
 */
const addItemToList = () => {
    const input = document.getElementById("inputItem").value;
    const ul = document.getElementById("ItemsList");
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Erase";
    button.addEventListener("click", () => removeItemToList(li.id))
    li.appendChild(document.createTextNode(input));
    li.appendChild(button);
    li.setAttribute('id',`${input}`);
    ul.appendChild(li);  
}

/**
 * Allows to remove an element from the list
 * @param {*} elId Id of the element to remove
 */
const removeItemToList = (elId) => {
    const ul = document.getElementById("ItemsList");
    const liToRemove = document.getElementById(`${elId}`);
    ul.removeChild(liToRemove);
}

