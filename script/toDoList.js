const list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
const element = document.getElementById(`${ev.target.id}`);
element.classList.add("done");
}, false);

const addItemToList = () => {
    const input = document.getElementById("inputItem").value;
    const ul = document.getElementById("ItemsList");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    li.setAttribute('id',`${input}`);
    ul.appendChild(li);  
}
